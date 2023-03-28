<script lang="ts">
  import { Howl, Howler } from 'howler'
  import Sound from '@/components/Sound.svelte'
  import { soundList } from '@/store'
  import Item from '@/components/Item.svelte'

  import baseUrl from '@/lib/url'

  const soundLib = [
    {
      name: 'Amogus',
      dir: baseUrl('/sounds/amogus.mp3'),
    },
    {
      name: 'Android Notification',
      dir: baseUrl('/sounds/android-notification.mp3'),
    },
    { name: 'Bruh', dir: baseUrl('/sounds/bruh.mp3') },
    { name: 'Fart', dir: baseUrl('/sounds/fart.mp3') },
    { name: 'Wet Fart', dir: baseUrl('/sounds/wet-fart.mp3') },
    { name: 'Ping', dir: baseUrl('/sounds/ping.mp3') },
    { name: 'Join', dir: baseUrl('/sounds/join.mp3') },
    { name: 'Leave', dir: baseUrl('/sounds/leave.mp3') },
    { name: 'Vine Boom', dir: baseUrl('/sounds/vine-boom.mp3') },
    { name: 'EMOTIONAL DAMAGE', dir: baseUrl('/sounds/emotional-damage.mp3') },
    { name: 'AUGHHHH', dir: baseUrl('/sounds/augh.mp3') },
    { name: 'BONK', dir: baseUrl('/sounds/bonk.mp3') },
    { name: 'Taco Bell', dir: baseUrl('/sounds/taco-bell.mp3') },
    { name: 'Two Hours Later', dir: baseUrl('/sounds/two-hours-later.mp3') },
    { name: 'FBI Open Up', dir: baseUrl('/sounds/fbi.mp3') },
    { name: 'ERROR', dir: baseUrl('/sounds/error.mp3') },
    { name: 'STARTUP', dir: baseUrl('/sounds/startup.mp3') },
    { name: 'Windows 7', dir: baseUrl('/sounds/windows-7.mp3') },
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
