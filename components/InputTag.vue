<template>
  <div class="__input_hashtag">
    <div class="whats_topics">
      {{ $t('top.whats_topics') }}
    </div>
    <span>#</span>
    <input
      v-model="hashTag"
      type="text"
      @keyup.13="click"
    >
    <input
      :value="$t('top.enter')"
      type="button"
      @click="click"
    >
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        hashTag: process.env.hashTag,
      }
    },
    methods: {
      click() {
        this.$router.push({ path: this.hashTag });
      }
    }
  }
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';

  .__input_hashtag {
    text-align: center;
    padding: 2em 0em;
    background-color: $bg-panel;

    * {
      font-size: 2em;
    }
    .whats_topics {
      font-size: 1.5em;
      color: #ccc;
    }
    input[type=text] {
      width: 8em;
      display: inline;
      font-size: 2em;
      background-color: $bg-panel;
      color: $text-primary;
      border: none;
      border-bottom: 1px solid $text-primary;
    }
    input[type=button] {
      font-size: 1.5em;
      padding: 0.2em 0.8em;
      font-weight: bold;
      background-color: $btn-primary;
      border: none;
      border-radius: 4px;
      color: $text-primary;
    }
  }
</style>
