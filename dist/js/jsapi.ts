// @ts-nocheck
class Jsapi {
    private apiUrl: string;
    private headers: Record<string, string>;
    
    constructor(apiUrl: string, headers: Record<string, string> = { 'Content-Type': 'application/json' }) {
        this.apiUrl = apiUrl;
        this.headers = headers;
    }
    
    getData() {
        return fetch(this.apiUrl, {
            headers: this.headers
        })
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error('Error fetching data:', error));
    }
    
    fetchData(method = 'GET', data = null, url = this.apiUrl) {
        const options = {
            method: method,
            headers: this.headers
        };
    
        if (method !== 'GET' && data) {
            options.body = JSON.stringify(data);
        }
    
        return fetch(url, options)
            .then(response => response.json())
            .then(data => data)
            .catch(error => console.error(`Error ${method.toLowerCase()}ing data:`, error));
    }
    
    attach(params = {}, method = 'GET', data = null) {
        let url = this.apiUrl;
        const queryString = Object.keys(params).map(key => `${key}=${params[key]}`).join('&');
        if (queryString) {
            url += '?' + queryString;
        }
        return this.fetchData(method, data, url);
    }
}