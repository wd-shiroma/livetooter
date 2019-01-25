<template>
  <div class="__post">
    sourced by {{ domain }}
  </div>
</template>

<script>
  export default {
    data() {
      return {
        domain: process.env.domain
      }
    }
  }
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';

  .__post {
    background-color: $bg-header;
    position: absolute;
    width: 300px;
    margin: 0 auto;
    left: 0;
    right: 0;
    bottom: 0;
  }
</style>
