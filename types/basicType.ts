export interface BasicType {
  id: string
  title: string
  author: string
  image?: string
}

/**
 * ClassicSummary interface
 * 返回展示内容，不是详细内容
 */
export interface ClassicSummary {
  id: number
  title: string
  author: string
  image?: string
}

/**
 * 返回的文章篇章
 */
export interface ClassicChapter {
  id: number
  title: string
  author: string
  chapters: Chapter[]

}
export interface Chapter {
  id: number
  chapter: string
  contents: string[]
}
