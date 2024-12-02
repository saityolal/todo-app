import axios from "axios";


const apiClient = axios.create({
  baseURL: "http://localhost:8080",
})

export function retrieveHelloWorldBean() {
  return apiClient.get("http://localhost:8080/hello-world-bean");
}

export const retrieveHelloWorldBeanWithPathVariable = (username) =>
  apiClient.get(`http://localhost:8080/hello-world/path-variable/${username}`);
