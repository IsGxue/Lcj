export function getToken(TokenKey='TOKEN') {
 return window.localStorage.getItem(TokenKey)
}

export function setToken(TokenKey, token) {
 return window.localStorage.setItem(TokenKey, token)
}

export function removeToken() {
 return window.localStorage.clear()
}