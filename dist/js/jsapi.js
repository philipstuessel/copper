// @ts-nocheck
var Jsapi = /** @class */ (function () {
    function Jsapi(apiUrl, headers) {
        if (headers === void 0) { headers = { 'Content-Type': 'application/json' }; }
        this.apiUrl = apiUrl;
        this.headers = headers;
    }
    Jsapi.prototype.getData = function () {
        return fetch(this.apiUrl, {
            headers: this.headers
        })
            .then(function (response) { return response.json(); })
            .then(function (data) { return data; })["catch"](function (error) { return console.error('Error fetching data:', error); });
    };
    Jsapi.prototype.fetchData = function (method, data, url) {
        if (method === void 0) { method = 'GET'; }
        if (data === void 0) { data = null; }
        if (url === void 0) { url = this.apiUrl; }
        var options = {
            method: method,
            headers: this.headers
        };
        if (method !== 'GET' && data) {
            options.body = JSON.stringify(data);
        }
        return fetch(url, options)
            .then(function (response) { return response.json(); })
            .then(function (data) { return data; })["catch"](function (error) { return console.error("Error ".concat(method.toLowerCase(), "ing data:"), error); });
    };
    Jsapi.prototype.attach = function (params, method, data) {
        if (params === void 0) { params = {}; }
        if (method === void 0) { method = 'GET'; }
        if (data === void 0) { data = null; }
        var url = this.apiUrl;
        var queryString = Object.keys(params).map(function (key) { return "".concat(key, "=").concat(params[key]); }).join('&');
        if (queryString) {
            url += '?' + queryString;
        }
        return this.fetchData(method, data, url);
    };
    return Jsapi;
}());
