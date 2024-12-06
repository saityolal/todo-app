import axios from "axios";

const apiClient = axios.create({
  baseURL: "http://localhost:8080",
});

export function retrieveUsers() {
  return apiClient.get("http://localhost:8080/users");
}

export const retrieveAllTodosWithUserNameApi = (username) =>
  apiClient.get(`http://localhost:8080/users/${username}/todos`);

export const deleteTodoApi = (username, id) =>
  apiClient.delete(`http://localhost:8080/users/${username}/todos/${id}`);


export const retrieveTodoApi = (username, id) =>
  apiClient.get(`http://localhost:8080/users/${username}/todos/${id}`);
