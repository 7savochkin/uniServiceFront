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
        this.request.defaults.timeout = 5000;
    }

    getContacts = async (data) => {
        let url = "contacts/";
        return await this.request({url: url, method: "GET"});
    }
    getPhoneNumbers = async (data) => {
        let url = "contacts/phone_numbers";
        return await this.request({url: url, method: "GET"});
    }

    getAboutUs = async (data) => {
        let url = "about_us/";
        return await this.request({url: url, method: "GET"});
    }

    getAboutUsTeam = async (data) => {
        let url = "about_us/team/";
        return await this.request({url: url, method: "GET"});
    }

    getAboutUsAchievements = async (data) => {
        let url = "/about_us/achievements/";
        return await this.request({url: url, method: "GET"});
    }

    getServices = async (data) => {
        let url = "/services/";
        return await this.request({url: url, method: "GET"});
    }
}

export default API;