import axios from "axios";

export const BackendAPI = axios.create({
    baseURL: "http://localhost:8000/api/",
    headers: {
        Accept: "application/json",
        "Content-Type": "application/json"
    }
});

export const api = {
    getEvents: async () => {
        return (await BackendAPI.get("events")).data.data;
    },
    getEvent: async (id) => {
        return (await BackendAPI.get(`events/${id}`)).data.data;
    }
}