import twemoji from 'twemoji'
import escape from 'escape-html'
import CRC32 from 'crc-32'

const parse_emojis = (content, emojis = [], pemojis = []) => {
  content = twemoji.parse(content)
  content = [...emojis, ...pemojis].reduce((cont, emoji) => {
    let re = new RegExp(`:${emoji.shortcode}:`, 'g')
    return cont.replace(re, `<img src="${emoji.url}" class="emoji"/>`)
  }, content)

  return content
}

const parse_status = (status) => {
  let server = status.account.url.match(/https?:\/\/([^\/]+)\//)[1]
  status.content = parse_emojis(status.content, status.emojis, status.profile_emojis)
  status.spoiler_text = parse_emojis(status.spoiler_text, status.emojis, status.profile_emojis)
  status.account.display_name = parse_emojis(
    escape(status.account.display_name),
    status.account.emojis,
    status.account.profile_emojis
  )
  status.account.server = {
    color: CRC32.str(server).toString(16).substr(-6, 6),
    name: server
  }
  return status
}

export const state = () => ({
  status: [],
})

export const mutations = {
  addStatus (state, s) {
    state.status = [parse_status(s), ...state.status]
  },
  updateStatus (state, ss) {
    if (ss instanceof Array) {
      state.status = ss.map(s => parse_status(s))
    }
  },
  reduceStatus(state) {
    state.status = state.status.slice(0, 20)
  },
  appendStatus (state, ss) {
    if (ss instanceof Array) {
      let statuses = ss.map(s => parse_status(s))
      state.status = [...state.status, ...statuses]
    }
  },
}