export const teaser = (text: string, limit = 50) => {
  return text.length > limit ? text.substring(0, limit) + '...' : text
}