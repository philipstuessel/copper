function toggleMode() {
  const currentTheme = document.documentElement.getAttribute("data-cu-theme");
  let newTheme;
  if (currentTheme === "light") {
    newTheme = "dark";
  } else {
    newTheme = "light";
  }
  setThemePreference(newTheme);
}

function setThemePreference(theme) {
  document.documentElement.setAttribute("data-cu-theme", theme);
  localStorage.setItem("theme", theme);
}

function setIconBasedOnTheme() {
  const currentTheme = document.documentElement.getAttribute("data-cu-theme");
  if (currentTheme === "dark") {
  } else {
  }
}

const currentTheme = localStorage.getItem("theme");
if (!currentTheme) {
  setThemePreference("dark");
}
setThemePreference(currentTheme || "light");
setIconBasedOnTheme();

function p(value) {
  console.log(value);
}

function display(value) {
  var display = `<div class="display" role="alert"><div>${value}</div></div>`;
  document.body.insertAdjacentHTML("beforeend", display);
}

function clipboard(text) {
  var dummy = document.createElement("textarea");
  dummy.value = text;
  document.body.appendChild(dummy);
  dummy.select();
  document.execCommand("copy");
  document.body.removeChild(dummy);
}

function cu_import(scriptPath, attribute = "") {
  return new Promise((resolve, reject) => {
    const script = document.createElement("script");
    script.src = scriptPath;
    if (attribute) {
      script.setAttribute(attribute, "");
    }
    script.onload = resolve;
    script.onerror = reject;
    document.head.appendChild(script);
  });
}

class Params {
  constructor(url) {
    if (url) {
      const urlObject = new URL(url);
      this.urlPath = urlObject.pathname;
      this.host = urlObject.host;
      this.protocol = urlObject.protocol;
      this.searchParams = urlObject.searchParams;
      this.isExternal = true;
    } else {
      this.urlPath = window.location.pathname;
      this.host = window.location.host;
      this.protocol = window.location.protocol;
      this.searchParams = new URLSearchParams(window.location.search);
      this.isExternal = false;
    }
  }

  get(query) {
    return toBoolOrNull(this.searchParams.get(query));
  }

  is(key, value = null) {
    if (value == null) {
      if (this.searchParams.get(key) == null) {
        return false;
      } else {
        return true;
      }
    } else {
      if (!(this.searchParams.get(key) == null)) {
        var vquery = this.searchParams.get(key);
        if (toBoolOrNull(vquery) == value) {
          return true;
        } else return false;
      } else return false;
    }
  }

  add(array, goto = false) {
    if (goto && this.isExternal) {
      this.searchParams = new URLSearchParams();
    } else if (goto && !this.isExternal) {
      this.searchParams = new URLSearchParams(this.searchParams);
    }

    var data = array;
    if (Array.isArray(data)) {
      this.searchParams = new URLSearchParams();
      data.forEach((param) => {
        if ("name" in param && "value" in param) {
          this.searchParams.set(param.name, param.value);
        } else {
          const key = Object.keys(param)[0];
          this.searchParams.set(key, param[key]);
        }
      });
    } else if (typeof data === "object") {
      this.searchParams = new URLSearchParams();
      for (const key in data) {
        if (data.hasOwnProperty(key)) {
          this.searchParams.set(key, data[key]);
        }
      }
    }

    if (!goto) {
      const urlWithParams = `${this.protocol}//${this.host}${
        this.urlPath
      }?${this.searchParams.toString()}`;
      console.log(urlWithParams);
      return urlWithParams;
    }

    const urlWithParams = `${this.protocol}//${this.host}${
      this.urlPath
    }?${this.searchParams.toString()}`;
    if (!this.isExternal) {
      window.location.href = urlWithParams;
    } else {
      window.location.replace(urlWithParams);
    }
  }

  all() {
    return this.searchParams;
  }
}

function toBoolOrNull(value) {
  if (value === "true") {
    return true;
  } else if (value === "false") {
    return false;
  } else if (value === "null") {
    return null;
  } else if (!isNaN(value)) {
    return parseFloat(value);
  } else {
    return value;
  }
}

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