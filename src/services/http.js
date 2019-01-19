import axios from 'axios'

axios.defaults.headers['Access-Control-Allow-Origin'] = '*'
axios.defaults.headers.common['Accept'] = 'application/json'
axios.defaults.headers.common['Content-Type'] = 'application/json'
axios.defaults.xsrfHeaderName = "X-CSRFTOKEN"
axios.defaults.xsrfCookieName = "csrftoken"

export default class Http {
  API_URL = ''
  HTTP_AUTHORIZATION_HEADER = 'Token'
  resource = ''
  token = ''

  constructor(resource='', token='') {
    this.resource = resource
    this.token = token
  }

  /** 
   * Returns a formatted url based on the resource variable
   * @param {String} path Extended path
   */
  buildURL(path = '') {
    return `${this.API_URL}/${this.resource}/${path}`
  }

  /**
   * Returns the current token from the store
   */
  getToken() {
    return this.token
  }

  /** 
   * Returns a axios configuration object given the following parameters
   * @param {String} method       HTTP Method
   * @param {String} url          Target URL
   * @param {Object} data         [Optional]: Body of the HTTP Post request
   * @param {Object} params       [Optional]: HTTP GET Parameters
   * @param {Object} extraConfig  [Optional]: Extra Axios configuration
   * @param {Object} headers      [Optional]: HTTP requests headers
   * @param {String} token        [Optional]: JWT Token
   * 
   * @returns {Object}            Axios configuration object
   */
  _makeAxiosConfig(method, url, { data={}, params={}, extraConfig={}, headers={}, token='' }) {
    if (token) {
      headers = {
        ...headers,
        'Authorization': `${HTTP_AUTHORIZATION_HEADER} ${token}`
      }
    }

    const config = {
      method,
      url,
      params,
      data,
      headers,
      ...extraConfig,
    }

    return config
  }

  /** 
   * Makes a HTTP request
   * @param {String} method       HTTP Method
   * @param {String} url          Target URL
   * @param {Object} data         [Optional]: Body of the HTTP Post request
   * @param {Object} params       [Optional]: HTTP GET Parameters
   * @param {Object} extraConfig  [Optional]: Extra Axios configuration
   * @param {Object} headers      [Optional]: HTTP requests headers
   * @param {String} token        [Optional]: JWT Token
   * 
   * @returns {Object}            Response data from the server
   * @throws                      Exception to be captured
   */
  async request(method, url, { data={}, params={}, config={}, headers={}, token='', responseProperty='data' }) {
    const axiosConfig = this._makeAxiosConfig(method, url, { data, params, extraConfig: config, headers, token })
    try {
      const response = await axios(axiosConfig)
      return response[responseProperty]
    } 
    catch (error) {
      if (error.response.status === 401) {
        console.log('error', 401)
        // store.dispatch('LOGOUT')
      }
      throw error
    }
  }

  /**
   * Returns a resource item list
   * 
   * @param {Object} filters Filters applied
   */
  async list(params={}) {
    const options = { params, token: this.token }
    const url = this.buildURL()

    return await this.request('GET', url, options)
  }

  /**
   * Creates a new resource 
   * @param {Object} data 
   */
  async post(data) {
    const options = { data, token: this.token }
    const url = this.buildURL()

    return await this.request('POST', url, options)
  }

  /**
   * Gets a specified item
   * @param {Object} item 
   */
  async get(id) {
    const options = { token: this.token }
    const url = this.buildURL(id)

    return await this.request('GET', url, options)
  }

  /**
   * Updates a specified item
   * @param id Item id
   * @param {Object} data 
   */
  async put(id, data) {
    const options = { data, token: this.token }
    const url = this.buildURL(id)

    return await this.request('PUT', url, options)
  }

  /**
   * Deletes a specified item
   * @param {Object} item 
   */
  async delete(id) {
    const options = { token: this.token }
    const url = this.buildURL(id)

    return await this.request('DELETE', url, options)
  }

  /**
   * Returns blob data 
   * @param {String} id       Resource id
   * @param {String} type     File type
   */
  async download(url, params={}, headers={}) {
    const options = { token: this.getToken(), params, config: { responseType: 'blob' }, headers }

    return await this.request('GET', url, options)
  }

  /**
   * Uploads a file
   * @param {File} file     The file to upload
   * @param {String} url    [Optional]: endpoint url
   */
  async upload(file, url='') {
    const formData = new FormData()
    formData.append('file', file)
    const options = { token: this.getToken(), config: { formData } }
    mUrl = this.buildURL(url)

    return await this.request('POST', mUrl, options)
  }

  getBaseUrl() {
    return this.API_URL
  }
}
