const fetchProxy = require('./lib/fetchProxy');
const fetchProxies = require('./lib/fetchProxies');
const fetchUserAgent = require('./lib/fetchUserAgent');
const fetchUserAgents = require('./lib/fetchUserAgents');

class SabotazhTools {
    constructor(token) {
        this.token = token;
        this.domain = 'https://proxy.sabotazh.com';
    }

    throwResponseError(response) {
        const dashes = '----------------------------------------';
        console.error(`\n${dashes}\n|       SABOTAZH TOOLS SDK ERROR       |\n${dashes}`)
        console.error(`[error] Response status: ${response.statusText}`)
        if (response.status === 403) {
            console.error(`[error] Token "${this.token}" is not valid for request ${response.config.url}`)
        }
        console.error(`\n\n`)
    }

    async getProxy() {
        return await fetchProxy(this)
    }
    async getProxies() {
        return await fetchProxies(this)
    }
    async getUserAgent() {
        return await fetchUserAgent(this)
    }
    async getUserAgents() {
        return await fetchUserAgents(this)
    }
}

module.exports = SabotazhTools;