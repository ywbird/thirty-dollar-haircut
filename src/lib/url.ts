import config from '@/config'

export default function baseUrl(url: string) {
  return new URL(
    (process.env.NODE_ENV == 'production' ? config.base : '') + '/' + url,
    import.meta.url
  ).href
}
