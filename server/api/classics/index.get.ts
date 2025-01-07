import type { ClassicSummary } from '~/types/basicType'
import classics from '~/data/classics.json'

export default defineEventHandler<ClassicSummary[]>(() => {
  return classics.map(({ id, title, author, image }) => ({ id, title, author, image }))
})
