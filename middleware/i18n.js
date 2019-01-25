export default function ({ isHMR, app, store, route, params, error, redirect }) {
  const defaultLocale = app.i18n.fallbackLocale
  // If middleware is called from hot module replacement, ignore it
  if (isHMR) return
  // Get locale from params
  const locale = (window.navigator.languages && window.navigator.languages[0]) ||
          window.navigator.language ||
          window.navigator.userLanguage ||
          window.navigator.browserLanguage ||
          defaultLocale
  if (store.state.locales.indexOf(locale) !== -1) {
    store.commit('SET_LANG', locale)
    app.i18n.locale = store.state.locale
  }
}
