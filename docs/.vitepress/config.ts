/**
 * VitePress 站点核心配置
 * @author Ateng
 * @since 2026-09-30
 */

import { defineConfig } from 'vitepress'
import { withPwa } from '@vite-pwa/vitepress'
import UnoCSS from 'unocss/vite'
import { transformerTwoslash } from '@shikijs/vitepress-twoslash'
import { getAutoSidebar, scanDirectory } from './utils/sidebar'
import { DOMAINS, getNavConfig, getGroupTitles } from './domains'
import path from 'node:path'

const base = process.env.BASE_PATH || (process.env.CI ? '/fullstack-matrix/' : '/')

/**
 * Zenith 旗舰级特性开关矩阵 (Zenith Feature Switches)
 */
const zenithConfig = {
  // 1. 进阶/特定场景特性
  i18n: false,              // 国际化多语言矩阵：单语中文优先
  versionSwitcher: false,   // 多版本管理与归档横幅
  helpful: false,           // 文档有用度评价 (<VpHelpful>)
  zenModeToggle: false,     // 右下角专注模式悬浮球 (<ZenModeToggle>)：已关闭（快捷键 Alt+Z 仍可直接使用）
  contributors: false,      // 开源贡献者致谢流
  themePicker: false,       // 顶栏主题强调色盘选择器 (<VpThemePicker>)：已关闭
  banner: false,            // 顶部全宽公告通知横幅
  pwaStatus: false,         // PWA 离线运行感知横幅

  // 2. 旗舰体验特性
  commandPalette: true,     // 全局快捷命令中心浮层 (<VpCommandPalette>)：Ctrl+K 极速唤起
  blog: false,              // 博客系统
  mediumZoom: true,         // 正文插图平滑点击放大灯箱
  readingMetrics: true,     // 阅读认知指标（字数与预计耗时 DocMeta）
  readingProgressBar: true, // 页面顶部流光阅读进度条 (<ReadingProgressBar>)
  linkPreview: false,       // 站内内链卡片悬浮预览 (<VpLinkPreview>)：已关闭
  keyboardShortcuts: true,  // 全键盘极客导航与速查浮层 (<VpShortcutsModal>)
  codeFolding: true,        // 超长代码块自适应高度约束与极客内滚动
  zenMode: true,            // 沉浸式专注阅读模式（Alt+Z / Alt+F）
}

const navConfig = getNavConfig()

const groupTitles = getGroupTitles()

function buildSidebar() {
  const rootDir = process.cwd()
  const srcDir = path.resolve(rootDir, 'docs')

  const autoSidebars = getAutoSidebar({
    locale: 'root',
    groupTitles,
  })

  // 为 /overview 页面定制聚合侧边栏（全自动从 DOMAINS 推导）
  const allGroups = DOMAINS.map(domain => ({
    text: `${domain.icon ? domain.icon + ' ' : ''}${domain.title}`,
    collapsed: false,
    items: scanDirectory(path.join(srcDir, domain.key), `/${domain.key}/`, { locale: 'root' }),
  }))

  return {
    ...autoSidebars,
    '/overview': allGroups,
  }
}

export default withPwa(defineConfig({
  title: '全端全栈技术选型矩阵',
  description: '覆盖 34 个垂直领域的现代化全端全栈技术选型矩阵与工业级架构决策蓝图',
  lang: 'zh-CN',
  base,

  pwa: {
    outDir: '.vitepress/dist',
    registerType: 'autoUpdate',
    includeAssets: ['logo.svg'],
    manifest: {
      id: base,
      name: '全端全栈技术选型矩阵',
      short_name: 'fullstack-matrix',
      description: '现代化全端全栈架构选型与工业级决策矩阵',
      theme_color: '#6366f1',
      background_color: '#0f172a',
      display: 'standalone',
      orientation: 'portrait',
      start_url: base,
      scope: base,
      lang: 'zh-CN',
      categories: ['documentation', 'productivity', 'education'],
      icons: [
        {
          src: `${base}logo.svg`,
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'any',
        },
        {
          src: `${base}logo.svg`,
          sizes: 'any',
          type: 'image/svg+xml',
          purpose: 'maskable',
        },
      ],
    },
    workbox: {
      globPatterns: ['**/*.{css,js,html,svg,png,ico,txt,woff2}'],
    },
    experimental: {
      includeAllowlist: true,
    },
  },

  markdown: {
    math: true,
    lineNumbers: true,
    codeTransformers: [
      transformerTwoslash(),
    ],
    config(md) {
      const defaultFence = md.renderer.rules.fence!
      md.renderer.rules.fence = (tokens, idx, options, env, self) => {
        const token = tokens[idx]
        const lang = token.info.trim().split(/\s+/)[0]
        if (lang === 'mermaid') {
          const key = `mermaid-${idx}`
          const code = encodeURIComponent(token.content)
          return `<Mermaid id="${key}" code="${code}" />\n`
        }
        if (lang === 'markmap') {
          const key = `markmap-${idx}`
          const code = encodeURIComponent(token.content)
          return `<Markmap id="${key}" code="${code}" />\n`
        }
        const rendered = defaultFence(tokens, idx, options, env, self)

        const wrapperIdx = rendered.indexOf('<div class="line-numbers-wrapper"')
        if (wrapperIdx !== -1) {
          const matchStartLineNumber = token.info.match(/=(\d+)/)
          const startLineNumber = matchStartLineNumber ? parseInt(matchStartLineNumber[1], 10) : 1
          const codeBeforeWrapper = rendered.slice(0, wrapperIdx)
          const cleanCode = codeBeforeWrapper
            .replace(/<template\s+(?:v-slot:popper|#popper)[\s\S]*?<\/template>/g, '')
            .replace(/<span\s+class="[^"]*twoslash-floating[^"]*"[\s\S]*?<\/span>\s*<\/span>\s*<\/span>/g, '')
          const lineMatches = cleanCode.match(/class="line(?:\s+[^"]*)?"/g)
          const rawLines = token.content.replace(/\r\n/g, '\n').replace(/\n$/, '').split('\n').length
          const lineCount = lineMatches ? lineMatches.length : rawLines

          const lineNumbersCode = Array.from(
            { length: lineCount },
            (_, i) => `<span class="line-number">${i + startLineNumber}</span><br>`
          ).join('')

          return rendered.replace(
            /<div class="line-numbers-wrapper"[^>]*>[\s\S]*?<\/div>/,
            `<div class="line-numbers-wrapper" aria-hidden="true">${lineNumbersCode}</div>`
          )
        }

        return rendered
      }
    },
  },

  sitemap: {
    hostname: 'https://atengk.github.io/fullstack-matrix',
  },

  head: [
    ['meta', { name: 'theme-color', content: '#6366f1' }],
    ['link', { rel: 'icon', href: '/logo.svg' }],
    ['link', { rel: 'apple-touch-icon', href: '/logo.svg' }],
    ['meta', { name: 'mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-capable', content: 'yes' }],
    ['meta', { name: 'apple-mobile-web-app-status-bar-style', content: 'black-translucent' }],
    ['meta', { name: 'apple-mobile-web-app-title', content: 'FullStackMatrix' }],
    ['meta', { name: 'keywords', content: '技术选型, 架构决策, 全栈开发, Vue3, React19, Flutter, SpringBoot, K8s, AI大模型' }],
    ['meta', { property: 'og:type', content: 'website' }],
    ['meta', { property: 'og:locale', content: 'zh_CN' }],
    ['meta', { property: 'og:title', content: '全端全栈技术选型矩阵与架构决策蓝图' }],
    ['meta', { property: 'og:site_name', content: '全端全栈技术选型矩阵' }],
    ['meta', { property: 'og:description', content: '覆盖 34 个垂直领域的现代化全端全栈技术栈选型与架构决策知识库' }],
    ['script', {}, `(function(){try{var p=localStorage.getItem('zenith-theme-palette');if(p&&p!=='indigo'){document.documentElement.dataset.themePalette=p;}}catch(e){}})();`],
  ],

  themeConfig: {
    siteTitle: '全端全栈技术选型矩阵',
    zenith: zenithConfig,

    socialLinks: [
      { icon: 'github', link: 'https://github.com/atengk/fullstack-matrix' },
    ],

    search: {
      provider: 'local',
      options: {
        locales: {
          root: {
            translations: {
              button: {
                buttonText: '搜索矩阵与技术栈',
                buttonAriaLabel: '搜索矩阵与技术栈',
              },
              modal: {
                displayDetails: '显示详细匹配项',
                resetButtonTitle: '重置搜索',
                backButtonTitle: '关闭搜索',
                noResultsText: '无法找到相关技术栈或决策规范',
                footer: {
                  selectText: '选择',
                  selectKeyAriaLabel: '回车键',
                  navigateText: '切换',
                  navigateUpKeyAriaLabel: '向上箭头',
                  navigateDownKeyAriaLabel: '向下箭头',
                  closeText: '关闭',
                  closeKeyAriaLabel: '退出键',
                },
              },
            },
          },
        },
        miniSearch: {
          options: {
            tokenize(text) {
              if (typeof text !== 'string') return []
              if (/[\u4e00-\u9fa5]/.test(text) && typeof Intl !== 'undefined' && Intl.Segmenter) {
                const segmenter = new Intl.Segmenter('zh-CN', { granularity: 'word' })
                const tokens: string[] = []
                for (const { segment } of segmenter.segment(text)) {
                  const s = segment.trim()
                  if (s) tokens.push(s.toLowerCase())
                }
                return tokens
              }
              return text.toLowerCase().split(/[\s,./\\;:'"[\]{}|`~!@#$%^&*()_+\-=?<>]+/).filter(Boolean)
            },
          },
          searchOptions: {
            fuzzy: 0.2,
            prefix: true,
            boost: { title: 4, text: 2, titles: 1 },
          },
        },
      },
    },

    footer: {
      message: '基于 MIT 协议开源发布 · 架构决策与生产实践指南',
      copyright: 'Copyright © 2026-present Ateng. All rights reserved.',
    },
  },

  locales: {
    root: {
      label: '简体中文',
      lang: 'zh-CN',
      title: '全端全栈技术选型矩阵',
      description: '覆盖 34 个垂直领域的现代化全端全栈技术栈选型与架构决策知识库',
      themeConfig: {
        nav: navConfig,
        sidebar: buildSidebar(),
        editLink: {
          pattern: 'https://github.com/atengk/fullstack-matrix/edit/main/docs/:path',
          text: '在 GitHub 上提供优化建议',
        },
        docFooter: {
          prev: '上一领域',
          next: '下一领域',
        },
        outline: {
          level: [2, 3],
          label: '本章架构目录',
        },
        lastUpdated: {
          text: '最后维护于',
          formatOptions: {
            dateStyle: 'short',
            timeStyle: 'medium',
          },
        },
        returnToTopLabel: '返回顶部',
        sidebarMenuLabel: '矩阵目录',
        darkModeSwitchLabel: '深浅主题',
        lightModeSwitchTitle: '切换为浅色模式',
        darkModeSwitchTitle: '切换为深色模式',
        skipToContentLabel: '跳转至正文',
        langMenuLabel: '切换语言',
        notFound: {
          title: '全端全栈技术选型矩阵',
          quote: '抱歉，您访问的技术领域页面已漂移或不存在。',
          linkLabel: '返回矩阵首页',
          linkText: '返回矩阵首页',
        },
      },
    },
  },

  vite: {
    plugins: [
      UnoCSS(),
    ],
  },
}))
