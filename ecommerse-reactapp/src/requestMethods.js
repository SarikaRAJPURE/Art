import axios from "axios";

const BASE_URL = "http://localhost:3000/api/";
//admin token
const TOKEN =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTMyZTVjZjU4ZDE5Zjk2NTY4Njc0ZWMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTkwMjAzNzMsImV4cCI6MTY5OTI3OTU3M30.iVFGAFRpBjYrRKQu3KZ6UWOKNW8rAYC5G8gKO5iduR8";

export const publicRequest = axios.create({
  baseURL: BASE_URL,
});
export const userRequest = axios.create({
  baseURL: BASE_URL,
  headers: { token: `Bearer ${TOKEN}` },
});
