import axios from 'axios'
export function getEmojiData () {
  return axios({
    method: 'get',
    url: '/static/emojiDB.json'
  })
    .then(function (res) {
      return Promise.resolve(res.data)
    })
}
