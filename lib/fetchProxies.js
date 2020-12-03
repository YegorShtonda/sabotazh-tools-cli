const axios = require('axios');

module.exports = async (ctx) => {
    try {
        const proxies = await axios.get(`${ctx.domain}/proxies?token=${ctx.token}`);
        return proxies.data;
    } catch (err) {
        ctx.throwReponseError(err.response);
        return null;
    }
}