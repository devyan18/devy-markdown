const changeUrl = (url: string) => {
  window.history.replaceState({}, '', `/${url}`);
}

const convertStringToBase64 = (str: string) => {
  return window.btoa(str);
}

export {changeUrl, convertStringToBase64};