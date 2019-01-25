<template>
  <div class="__about">
    <h2>{{ $t('about.for_community_title') }}</h2>
    <p>{{ $t('about.for_community_1') }}</p>
    <p>{{ $t('about.for_community_2') }}</p>
    <h2>{{ $t('about.for_live_title') }}</h2>
    <p>{{ $t('about.for_live_1') }}</p>
    <p>{{ $t('about.for_live_2') }}</p>
    <h2>{{ $t('about.works_lightly_title') }}</h2>
    <p>{{ $t('about.works_lightly_1') }}</p>
    <p>{{ $t('about.works_lightly_2') }}</p>
    <h2>{{ $t('about.policy_title') }}</h2>
    <p>{{ $t('about.policy_1') }}</p>
    <p>{{ $t('about.policy_2') }}</p>
    <p>
      <a
        :href="server"
        target="_blank"
      >
        {{ domain }}
      </a>
    </p>
    <p>{{ $t('about.policy_3') }}</p>
    <p>{{ $t('about.policy_4') }}</p>
    <p>
      <a href="https://github.com/wd-shiroma/livetooter">
        GitHub
      </a>
    </p>
  </div>
</template>

<script>
  import axios from 'axios'

  export default {
    data() {
      return {
        domain: process.env.domain,
        server: `https://${process.env.domain}/about`,
      }
    }
  }
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';
  .__about {
    text-align: center;
    h2 {
      background-color: $bg-panel;
      font-size: 2em;
      margin: 1.5em 0em 1em 0em;
    }
    p {
      white-space: normal;
      max-width: 600px;
      margin: 1em auto;
    }
  }
</style>
