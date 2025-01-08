export function useWordCount(text: string) {
  // 去除空白字符后计算长度
  return text.replace(/\s+/g, '').length
}
