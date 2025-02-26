import axios from "axios";

export const instance =  () => axios.create({baseURL: "https://v1.turbotravel.uz/api"})