import Cookies from 'js-cookie'
const TokenKey = 'saber-access-token'
const RefreshTokenKey = 'saber-refresh-token'
const DsTokenKey = 'ds-token'
const DsCode = 'ds-code'
const KeycloakTokenKey = 'keycloak-token'
const RefreshKeycloakTokenKey = "keycloak-refresh-token"

export function getToken() {
    return  localStorage.getItem(TokenKey)
    // return Cookies.get(TokenKey)
}
export function getKeycloakToken() {
  return  localStorage.getItem(KeycloakTokenKey)
}
export function setToken(token) {
  localStorage.setItem(TokenKey,token)
  // return Cookies.set(TokenKey, token)
}

export function getRefreshToken() {
  return  localStorage.getItem(RefreshTokenKey)
  // return Cookies.get(RefreshTokenKey)
}

export function setRefreshToken(token) {
  localStorage.setItem(RefreshTokenKey,token)
  //return Cookies.set(RefreshTokenKey, token)
}
export function getRefreshKeycloakToken() {
  return  localStorage.getItem(RefreshKeycloakTokenKey)
}
export function setRefreshKeycloakToken(token) {
  localStorage.setItem(RefreshKeycloakTokenKey,token)
}
export function setKeycloakToken(token) {
  localStorage.setItem(KeycloakTokenKey,token)
}

export function removeToken() {
  localStorage.removeItem(TokenKey)
  // return Cookies.remove(TokenKey)
}

export function removeRefreshToken() {
  localStorage.removeItem(RefreshTokenKey)
  //return Cookies.remove(RefreshTokenKey)
}
export function removeRefreshKeycloakToken(){
  localStorage.removeItem(RefreshKeycloakTokenKey)
}
export function removeKeycloakToken() {
  localStorage.removeItem(KeycloakTokenKey)
}
export function setDsToken(token){
  return Cookies.set(DsTokenKey,token)
}
export function getDsToken(){
  return Cookies.get(DsTokenKey)
}
export function setDsProjectCode(code){
  return Cookies.set(DsCode,code)
}
export function getDsCode(){
  return Cookies.get(DsCode)
}

