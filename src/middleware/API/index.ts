import axios from "axios";
import CryptoJS from "crypto-js";

const baseUrl = process.env.BASE_URL;

const getBaseUrl = () => {
    if (process.env.NODE_ENV === "development") {
        return "http://localhost:9000/";
    }
    return baseUrl;
};

const instance = axios.create({
    baseURL: getBaseUrl(),
    withCredentials: false,
});

instance.interceptors.request.use((request) => {
    if (request.data.hasOwnProperty("code")) {
        request.data.code = CryptoJS.enc.Base64.stringify(
            CryptoJS.enc.Utf8.parse(request.data.code)
        );
    }
    return request;
});

instance.interceptors.response.use((response) => {
    if (response.data.hasOwnProperty("code")) {
        response.data.code = CryptoJS.enc.Utf8.stringify(
            CryptoJS.enc.Base64.parse(response.data.code)
        );
    }
    if (response.data.hasOwnProperty("map")) {
        response.data.map = CryptoJS.enc.Utf8.stringify(
            CryptoJS.enc.Base64.parse(response.data.map)
        );
    }
    if (response.data.hasOwnProperty("warning")) {
        const json = CryptoJS.enc.Utf8.stringify(
            CryptoJS.enc.Base64.parse(response.data.warning)
        );
        response.data.warning = JSON.parse(json);
    }
    if (response.data.hasOwnProperty("error")) {
        response.data.error = CryptoJS.enc.Utf8.stringify(
            CryptoJS.enc.Base64.parse(response.data.error)
        );
    }
    return response;
});

export default instance;
