const axios = require('axios');

module.exports = async (ctx) => {
    try {
        const userAgent = await axios.get(`${ctx.domain}/user-agent?token=${ctx.token}`);
        return userAgent.data;
    } catch (err) {
        ctx.throwReponseError(err.response);
        return null;
    }
}