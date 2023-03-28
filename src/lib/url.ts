export default function baseUrl(url: string) {
  return new URL(url, import.meta.url).href
}
