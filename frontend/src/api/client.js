import axios from "axios";

class API {
    constructor(lang) {
        this.request = axios.create({
            baseURL: `https://uniservice.site/api/v1/`,
        });

        // add defaults headers to requests
        this.request.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        this.request.defaults.headers.common["Content-Type"] = "application/json";
        this.request.defaults.headers.common["Accept-Language"] = lang;
    }

    getContacts = async (data) => {
        let url = "contacts/";
        return await this.request({url: url, method: "GET"});
    }
    getPhoneNumbers = async (data) => {
        let url = "contacts/phone_numbers";
        return await this.request({url: url, method: "GET"});
    }
}

export default API;