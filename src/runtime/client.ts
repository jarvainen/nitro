// Client polyfill
import { $fetch } from 'ohmyfetch'

if (!globalThis.$fetch) {
  globalThis.$fetch = $fetch
}
