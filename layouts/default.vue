<template>
  <div>
    <nuxt />
  </div>
</template>

<style lang="scss">
@import '~/assets/styles/mastodon/variables.scss';

html, body {
  width: 100vw;
  height: 100vh;
  margin: 0px;
  padding: 0px;
  background-color: $bg-primary;
  color: $text-primary;
}

html {
  font-family: 'Source Sans Pro', -apple-system, BlinkMacSystemFont, 'Segoe UI',
    Roboto, 'Helvetica Neue', Arial, sans-serif;
  font-size: 20px;
  word-spacing: 1px;
  -ms-text-size-adjust: 100%;
  -webkit-text-size-adjust: 100%;
  -moz-osx-font-smoothing: grayscale;
  -webkit-font-smoothing: antialiased;
  box-sizing: border-box;
}

*,
*:before,
*:after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
  font-size: 14px;
}

a {
  color: #dedede;
  text-decoration-line: none;
  &:hover {
    text-decoration-line: underline;
  }
}

.emoji {
  width: calc(1em + 2px);
  height: calc(1em + 2px);
  margin-left: -1px;
  margin-top: -1px;
}

</style>
