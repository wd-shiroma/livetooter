<template>
  <ul class="__statuses">
    <li
      v-for="s in statuses"
      :key="s.id"
      class="__status"
    >
      <div class="__status_main">
        <div
          :style="s.account.server.color | bgcolor"
          class="__status_avatar"
        >
          <img
            :src="s.account.avatar"
          >
        </div>
        <div class="__status_header">
          <a
            :href="s.url"
            class="__status_created_at"
            target="_blank"
          >
            {{ s.created_at | since }}
          </a>
          <a
            :href="s.account.url"
            class="__status_act_name"
            target="_blank"
          >
            <span
              class="__status_name"
              v-html="s.account.display_name"
            />
            <span class="__status_act">
              {{ s.account.acct }}
            </span>
          </a>
        </div>
        <div class="__status_spoiler">
          {{ s.spoiler_text }}
        </div>
        <div
          class="__status_content"
          v-html="s.content"
        />
      </div>
    </li>
    <li class="more-status">
      loading...
    </li>
  </ul>
</template>

<script>
  import moment from 'moment'

  export default {
    filters: {
      since(created_at) {
        var lang = (window.navigator.languages && window.navigator.languages[0]) ||
          window.navigator.language ||
          window.navigator.userLanguage ||
          window.navigator.browserLanguage
        moment.locale(lang)
        return moment(created_at).fromNow()
      },
      bgcolor(code) {
        return `background-color: #${code};`
      }
    },
    data() {
      return {
        status: this.$store.state.statuses.status
      }
    },
    computed: {
      statuses () { return this.$store.state.statuses.status }
    },
  }
</script>

<style lang="scss">
  @import '~/assets/styles/mastodon/variables.scss';
  .__statuses {
    list-style: none;
    li {
      margin: 0.25em;
      padding: 0;
      border: none;
      border-bottom: 1px dashed #555;
      padding: 0em 0em 0.5em 4em;
      min-height: 4em;
      position: relative;
    }
    .more-status {
      padding: 0.5em;
      font-size: 1.5em;
      text-align: center;
    }
  }
  .__status_avatar {
    width: 3em;
    height: 3em;
    position: absolute;
    top: 0.6em;
    left: 0.6em;
    border: 1px solid #666;
    img {
      background-color: $bg-panel;
      position: relative;
      width: 3em;
      height: 3em;
      margin: -0.4em;
    }
  }
  .__status_header {
    font-size: 1em;
    .__status_act_name {
      overflow-wrap: normal;
      word-break: normal;
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;
      color: #ddd;
      .__status_name {
        overflow: hidden;
        text-overflow: ellipsis;
      }
      .__status_act {
        color: #888;
        overflow: hidden;
      }
    }
    .__status_created_at {
      float: right;
      color: #999;
    }
  }
  .__status_content {
    font-size: 1em;
    white-space: pre-wrap;
  }
</style>