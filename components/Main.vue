<template>
  <div
    class="__main"
    @scroll="moreStatus"
  >
    <Status />
  </div>
</template>

<script>
  import Status from '~/components/Status.vue'

  export default {
    components: {
      Status
    },
    data() {
      return {
        domain: process.env.domain
      }
    },
    mounted() {
      let url = `wss://${this.domain}/api/v1/streaming?stream=hashtag&tag=${this.$route.params.tag}`
      let ws = new WebSocket(url)

      ws.onmessage = (e) => {
        let data = JSON.parse(e.data)
        let payload
        if (data.event === 'update') {
          payload = JSON.parse(data.payload)
          this.$store.commit('statuses/addStatus', payload)
          if (this.$el.scrollTop === 0) {
            this.$store.commit('statuses/reduceStatus')
          }
        }
      }
    },
    methods: {
      async moreStatus (e) {
        if ((e.target.scrollTop + e.target.offsetHeight) >= e.target.scrollHeight) {
          let tag = this.$route.params.tag
          let max_id = this.$store.state.statuses.status.reduce(
            (max, cur) => max > cur.id ? cur.id : max,
            '999999999999999999'
          )
          let statuses = await this.$axios.$get(`https://${this.domain}/api/v1/timelines/tag/${tag}?max_id=${max_id}`)
          this.$store.commit('statuses/appendStatus', statuses.slice(1))
        }
      }
    }
  }
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';

  .__main {
    height: 100%;
    overflow-y: auto;
    overflow-x: hidden;
  }
</style>
