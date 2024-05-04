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