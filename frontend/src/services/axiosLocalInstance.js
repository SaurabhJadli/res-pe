import axios from "axios";

const axiosLocal = axios.create({
    baseURL: "https://res-pe-backend.onrender.com/api",
    headers: {
        "Content-Type": "application/json",
    },
});

export default axiosLocal;