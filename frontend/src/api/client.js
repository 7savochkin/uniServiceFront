import axios from "axios";

class API {
    constructor(lang) {
        this.request = axios.create({
            baseURL: `https://uniservice.site/api/v1/`,
            withCredentials: true,
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

    getReviews = async (data) => {
        let url = "/reviews/";
        return await this.request({url: url, method: "GET"});
    }

    getNews = async (data) => {
        let url = "/news/";
        return await this.request({url: url, method: "GET", params: data});
    }

    getVacancies = async (data) => {
        let url = "/vacancies/";
        return await this.request({url: url, method: "GET", params: data})
    }

    getMediaImages = async (data) => {
        let url = "/media/images/";
        return await this.request({url: url, method: "GET"});
    }

    getMediaVideos = async (data) => {
        let url = "/media/videos/";
        return await this.request({url: url, method: "GET"});
    }

    getCsrfToken = async (data) => {
        let url = "/core/get-csrf-token/";
        return await this.request({url: url, method: "GET"});
    }

    postFormData = async (url, formData) => {
        const queryParams = new URLSearchParams(formData).toString();
        const fullUrl = `${url}?${queryParams}`;

        return this.request({
            url: fullUrl,
            method: "POST",
        });
    };

    postFormOrderService = async (url, formData) => {
        const queryParams = new URLSearchParams(formData).toString();
        const fullUrl = `${url}?${queryParams}`;

        return this.request({
            url: fullUrl,
            method: "POST",
        });
    };

    postReview = async (url, formData) => {
        const queryParams = new URLSearchParams(formData).toString();
        const fullUrl = `${url}?${queryParams}`;

        return this.request({
            url: fullUrl,
            method: "POST",
        });
    };

    postFormOrderTender = async (url, formData) => {
        const queryParams = new URLSearchParams(formData).toString();
        const fullUrl = `${url}?${queryParams}`;

        return this.request({
            url: fullUrl,
            method: "POST",
        });
    };
}

export default API;