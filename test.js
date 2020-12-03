const SabotazhTools = require('./index');
const sabotazh = new SabotazhTools('SABOTAZH_TOKEN');

const test = async () => {
    const proxy = await sabotazh.getProxy();
    console.log(proxy);

    const proxies = await sabotazh.getProxies();
    console.log(proxies);

    const userAgent = await sabotazh.getUserAgent();
    console.log(userAgent);

    const userAgents = await sabotazh.getUserAgents();
    console.log(userAgents);
}

test();