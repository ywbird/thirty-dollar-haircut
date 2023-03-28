import config from '@/config'

export default function baseUrl(url: string) {
  return new URL(url, config.base).href
}
