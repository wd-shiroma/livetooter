<template>
  <div class="__header">
    <div class="hashtag">
      <span>#</span>
      <input
        v-if="editTag === true"
        :value="$route.params.tag"
        type="text"
      >
      <input
        v-else
        :value="$route.params.tag"
        disabled="disabled"
        type="text"
      >
    </div>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        hashTag: process.env.hashTag,
        editTag: process.env.editTag
      }
    },
    mounted () {
    }
  }
</script>


<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';
  .__header {
    background-color: $bg-header;
    text-align: left;

    .hashtag {
      margin-left: 0.5em;
      input {
        width: 12em;
        display: inline;
        font-size: 1em;
        color: $text-primary;
        background-color: $bg-header;
        border: none;
      }
    }
  }
</style>
