import axios from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:8080",
})

export function retrieveUsers() {
  return apiClient.get("http://localhost:8080/users");
}

export const retrieveTodosWithUsers = (username) =>
  apiClient.get(`http://localhost:8080/users/${username}/todos`);
