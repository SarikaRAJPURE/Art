import axios from "axios";

const BASE_URL="http://localhost:3000/api/"
const TOKEN="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NTMyZTVjZjU4ZDE5Zjk2NTY4Njc0ZWMiLCJpc0FkbWluIjp0cnVlLCJpYXQiOjE2OTgyMzc0MzksImV4cCI6MTY5ODQ5NjYzOX0.yJbeZZpduScQtXn1CEk80xG_XP5Wu9cTJh8NEKupwD4";

export const publicRequest = axios.create({
    baseURL:BASE_URL,
});
export const userRequest = axios.create({
    baseURL:BASE_URL,
    headers:{token:`Bearer ${TOKEN}`}
});