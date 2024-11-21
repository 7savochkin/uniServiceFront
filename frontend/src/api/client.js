import axios from "axios";

class API {
    constructor() {
        this.request = axios.create({
            baseURL: `https://uniservice.site/api/v1/`,
        });

        // add defaults headers to requests
        this.request.defaults.headers.common["X-Requested-With"] = "XMLHttpRequest";
        this.request.defaults.headers.common["Content-Type"] = "application/json";
    }

}

const clientAPI = new API();

export default clientAPI;