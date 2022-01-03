import AsyncStorage from '@react-native-async-storage/async-storage';
import { AUTH_TOKEN_KEY, AUTH_USER_KEY } from '../constants';
export async function getToken() {
  const value = await AsyncStorage.getItem(AUTH_TOKEN_KEY);
  return value ? JSON.parse(value) : null;
}
export async function setToken(value) {
  return AsyncStorage.setItem(AUTH_TOKEN_KEY, JSON.stringify(value));
}
export async function removeToken() {
  return AsyncStorage.removeItem(AUTH_TOKEN_KEY);
}

export async function getUser() {
  const value = await AsyncStorage.getItem(AUTH_USER_KEY);
  return value ? JSON.parse(value) : null;
}
export async function setUser(value) {
  return AsyncStorage.setItem(AUTH_USER_KEY, JSON.stringify(value));
}
export async function removeUser() {
  return AsyncStorage.removeItem(AUTH_USER_KEY);
}
