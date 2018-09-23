import { param } from "../../../assets/js/config";
let local = param.localqrc;
// let local = 'proxy/';
let api = {
    token: param.token, //token
    getCarCompute: local + '/qrcode/api/v1/compute/insecdat/getCarCompute', //接口名称
};
export {
    api
}