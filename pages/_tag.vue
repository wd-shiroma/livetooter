<template>
  <div class="container">
    <Panel />
  </div>
</template>

<script>
import Panel from '~/components/Panel.vue'

export default {
  components: {
    Panel
  },
  async fetch({ app, store, params }) {
    let domain = process.env.domain
    let tag = params.tag
    let statuses = await app.$axios.$get(`https://${domain}/api/v1/timelines/tag/${tag}`)
    store.commit('statuses/updateStatus', statuses)
  }
}
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';

  .container {
    width: 100vw;
    height: 100vh;
  }
</style>
