class Http {
  getOptions = {
    ...this.baseOptions,
    method: "GET"
  };

  postOptions = {
    ...this.baseOptions,
    method: "POST"
  };

  baseOptions = {
    mode: "cors",
    credentials: "include"
  };

  async get(url, extendOptions) {
    const options = this.extendOptions(this.postOptions, extendOptions);
    const res = await fetch(url, options);
    return await res.json();
  }

  async post(url, extendOptions = {}) {
    const options = this.extendOptions(this.postOptions, extendOptions);
    const res = await fetch(url, options);
    return await res.json();
  }

  extendOptions(options, extendOptions) {
    return { ...options, extendOptions };
  }
}

export default Http;
