let baseUrl = 'http://moby.xbotech.com/moby-mall'; //环境  以便服务器脚本自行更改不同环境域名
let param = {
    token: 'MSESSIONID_DEV', //token
    local: baseUrl,
    localttd: baseUrl + '/ttd',
    localqrc: baseUrl + '/qrc',
};
export {
    param
}