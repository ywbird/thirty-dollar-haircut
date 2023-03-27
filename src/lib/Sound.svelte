<script lang="ts">
  import { Howl, Howler } from 'howler'
  import type { ISound } from '../types'

  export let sound: ISound

  const playSound = new Howl({
    src: [sound.dir],
  })

  function play() {
    playSound.play()
  }
</script>

<button on:click={play}>{sound.name}</button>
