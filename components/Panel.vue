<template>
  <div class="__panel">
    <Header />
    <Main />
    <Post />
  </div>
</template>

<script>
import Header from './Header.vue'
import Main from './Main.vue'
import Post from './Post.vue'

export default {
  components: {
    Header,
    Main,
    Post
  }
}
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';

  .__panel {
    overflow: hidden;
    background-color: $bg-panel;
    height: 100%;
    max-width: 600px;
    min-width: 300px;
    margin: 0 auto;
    left: 0;
    right: 0;
  }
</style>
