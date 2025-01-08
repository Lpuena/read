import { describe, expect, it } from 'vitest'
import { useWordCount } from './useWordCount'

describe('useWordCount', () => {
  it('should count Chinese characters correctly', () => {
    const text = '子曰：学而时习之，不亦说乎？'
    expect(useWordCount(text)).toBe(13)
  })

  it('should ignore whitespace', () => {
    const text = '  道 可 道  ， 非 常 道  '
    expect(useWordCount(text)).toBe(6)
  })

  it('should handle empty string', () => {
    expect(useWordCount('')).toBe(0)
  })
})
