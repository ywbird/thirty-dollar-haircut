import config from '@/config'

export default function baseUrl(url: string) {
  return new URL(config.base + '/' + url).href
}
