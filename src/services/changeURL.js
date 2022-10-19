const changeUrl = (url) => {
  window.history.replaceState({}, '', `/${url}`)
}

const convertStringToBase64 = (str) => {
  return window.btoa(str)
}

const convertBase64ToString = (str) => {
  return window.atob(str)
}

export {
  changeUrl,
  convertStringToBase64,
  convertBase64ToString
}
