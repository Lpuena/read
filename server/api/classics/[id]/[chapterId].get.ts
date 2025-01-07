import type { Chapter } from '~/types/basicType'
import fs from 'node:fs'
import path from 'node:path'
import classics from '~/data/classics.json'

export default defineEventHandler((event) => {
  const id = Number(event.context.params?.id)
  const chapterId = Number(event.context.params?.chapterId)

  // 查找对应的文件路径
  const classicInfo = classics.find(c => c.id === id)

  if (!classicInfo) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Classic not found',
    })
  }

  // 读取具体文件内容
  const filePath = path.resolve(`./data/${classicInfo.id}-${classicInfo.title}.json`)
  const classic = JSON.parse(fs.readFileSync(filePath, 'utf-8'))

  // 查找对应章节
  const chapter = classic.chapters.find((c: Chapter) => c.id === chapterId)

  if (!chapter) {
    throw createError({
      statusCode: 404,
      statusMessage: 'Chapter not found',
    })
  }

  return chapter
})
