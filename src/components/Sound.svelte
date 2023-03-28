<script lang="ts">
  import { soundList } from '@/store'
  import type { ISound } from '@/types'
  import { Howl } from 'howler'

  export let sound: ISound

  const playSound = new Howl({
    src: [sound.dir],
  })

  function enter(event: any) {
    event.preventDefault()

    playSound.play()
  }

  function mouseenter() {
    window.addEventListener('contextmenu', enter)
  }
  function mouseleave() {
    window.removeEventListener('contextmenu', enter)
  }

  function append() {
    playSound.play()
    soundList.push(sound)
  }
</script>

<button
  on:mouseenter={mouseenter}
  on:mouseleave={mouseleave}
  on:click={append}
  class="item"
>
  {sound.name}
</button>

<style>
  .item {
    width: 70px;
    height: 70px;
    border: 2px;
    background-color: rgb(98, 98, 98);
    border-radius: 10px;
  }
</style>
