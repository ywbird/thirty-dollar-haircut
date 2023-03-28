import { writable } from 'svelte/store'
import type { ISound } from './types'

function createList() {
  const { subscribe, set, update } = writable<ISound[]>([])

  return {
    subscribe,
    push: (sound: ISound) => {
      update((l) => {
        l.push(sound)
        return l
      })
    },
    remove: (idx: number) => {
      update((l) => {
        l.splice(idx, 1)
        return l
      })
    },
  }
}

export const soundList = createList()
