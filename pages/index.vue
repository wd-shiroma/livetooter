
<template>
  <div class="__top">
    <h1>
      LiveTooter
    </h1>
    <div class="__description">
      {{ $t('top.description') }}
    </div>
    <InputTag />
    <About />
  </div>
</template>

<script>

import InputTag from '~/components/InputTag.vue'
import About from '~/components/About.vue'

export default {
  components: {
    InputTag, About
  },
}
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';

  .__top {
    width: 100vw;
    height: 100vh;
    overflow-x: hidden;
    text-align: center;

    h1 {
      margin: 2em 0em 1em 0em;
      font-size: 4em;
    }

    .__description {
      font-size: 1em;
      margin: 1em 0em 2em 0em;
    }
  }
</style>
