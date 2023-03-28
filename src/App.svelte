<script lang="ts">
  import { Howl, Howler } from 'howler'
  import Sound from './lib/Sound.svelte'
  import { soundList } from '@/store'
  import Item from './lib/Item.svelte'

  const soundLib = [
    { name: 'Amogus', dir: '/sounds/amogus.mp3' },
    { name: 'Android Notification', dir: '/sounds/android-notification.mp3' },
    { name: 'Bruh', dir: '/sounds/bruh.mp3' },
    { name: 'Fart', dir: '/sounds/fart.mp3' },
    { name: 'Wet Fart', dir: '/sounds/wet-fart.mp3' },
    { name: 'Ping', dir: '/sounds/ping.mp3' },
    { name: 'Join', dir: '/sounds/join.mp3' },
    { name: 'Leave', dir: '/sounds/leave.mp3' },
    { name: 'Vine Boom', dir: '/sounds/vine-boom.mp3' },
    { name: 'EMOTIONAL DAMAGE', dir: '/sounds/emotional-damage.mp3' },
    { name: 'AUGHHHH', dir: '/sounds/augh.mp3' },
    { name: 'BONK', dir: '/sounds/bonk.mp3' },
    { name: 'Taco Bell', dir: '/sounds/taco-bell.mp3' },
    { name: 'Two Hours Later', dir: '/sounds/two-hours-later.mp3' },
    { name: 'FBI Open Up', dir: '/sounds/fbi.mp3' },
    { name: 'ERROR', dir: '/sounds/error.mp3' },
    { name: 'STARTUP', dir: '/sounds/startup.mp3' },
    { name: 'Windows 7', dir: '/sounds/windows-7.mp3' },
  ]

  Howler.volume(0.6)

  const earrape = () => {
    soundLib.forEach((sound) => {
      const playSound = new Howl({
        src: [sound.dir],
      })
      playSound.play()
    })
  }

  function play() {
    $soundList.forEach((sound, idx) => {
      const playSound = new Howl({
        src: [sound.dir],
      })

      setTimeout(() => {
        playSound.play()
      }, 500 * idx)
    })
  }
</script>

<main>
  <div class="sounds">
    {#each soundLib as sound}
      <Sound {sound} />
    {/each}
  </div>

  <button on:click={play}>play</button>

  <ul class="list">
    {#each $soundList as sound, idx}
      <li><Item {sound} {idx} /></li>
    {/each}
  </ul>
</main>

<style lang="text/scss">
  .list {
    display: flex;
    flex-direction: row;
    gap: 10px;
    list-style: none;
    flex-wrap: wrap;
    padding-left: 0;
  }

  .sounds {
    display: flex;
    flex-direction: row;
    gap: 10px;
    flex-wrap: wrap;
  }
</style>
