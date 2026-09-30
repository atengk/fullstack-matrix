/**
 * 全栈矩阵核心领域配置清单 (Single Source of Truth)
 * 增删改此处的领域大类，顶栏导航、侧边栏分组标题、全站映射将 100% 自动同步联动
 * @author Ateng
 * @since 2026-09-30
 */

export interface DomainMeta {
  /**
   * 目录键名，对应 docs/ 下的物理子目录
   */
  key: string
  /**
   * 领域全称（用于侧边栏大标题与概览标题）
   */
  title: string
  /**
   * 顶栏导航展示的紧凑短标题
   */
  shortTitle: string
  /**
   * 领域图标 emoji
   */
  icon?: string
}

export const DOMAINS: DomainMeta[] = [
  { key: 'client', title: '多端客户端与表现层', shortTitle: '多端客户端', icon: '📱' },
  { key: 'backend', title: '核心业务与自动化', shortTitle: '核心业务', icon: '⚙️' },
  { key: 'iot-graphics', title: '工业物联与专业图形', shortTitle: '工业物联', icon: '🏭' },
  { key: 'data-infra', title: '系统底座与数据湖仓', shortTitle: '数据底座', icon: '🗄️' },
  { key: 'ai-speech', title: 'AI算法与多模态感知', shortTitle: 'AI算法', icon: '🤖' },
  { key: 'cloud-reliability', title: '云原生质量与安全韧性', shortTitle: '云原生安全', icon: '☁️' },
]

/**
 * 自动推导顶栏导航项
 * 遵循极简原则：首页 + 各业务领域平铺直达
 */
export function getNavConfig() {
  return [
    { text: '首页', link: '/' },
    ...DOMAINS.map(domain => ({
      text: domain.shortTitle,
      link: `/${domain.key}/`,
    })),
  ]
}

/**
 * 自动推导侧边栏分组标题映射表
 */
export function getGroupTitles(): Record<string, string> {
  const result: Record<string, string> = {}
  for (const domain of DOMAINS) {
    result[domain.key] = domain.title
  }
  return result
}
