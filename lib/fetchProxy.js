const axios = require('axios');

module.exports = async (ctx) => {
    try {
        const res = await axios.get(`${ctx.domain}/proxy?token=${ctx.token}`);
        return res.data;
    } catch (err) {
        ctx.throwResponseError(err.response);
        return null;
    }
}