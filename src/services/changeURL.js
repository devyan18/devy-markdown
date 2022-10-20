import { decode, encodeURL } from 'js-base64'

const changeUrl = (url) => {
  window.history.replaceState({}, '', `/${url}`)
}

const convertStringToBase64 = (str) => {
  return encodeURL(str)
}

const convertBase64ToString = (str) => {
  return decode(str)
}

export {
  changeUrl,
  convertStringToBase64,
  convertBase64ToString
}
