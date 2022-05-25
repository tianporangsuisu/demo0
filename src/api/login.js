import request from "@/api/BaseApi";
import cookie from "js-cookie";

export default {
    login: function (username, password) {
        return request({
            url: '/ucenter/login',
            method: 'post',
            data: {
                username,
                password
            }
        }).then(response => {
            let token = response.data.data
            //需要转化为string形式再存入cookie
            token = JSON.stringify(token)
            cookie.set('token', token, {domain: 'localhost'})
            return true
        }).catch(error => {
            console.log(error)
            return false
        })
    }
}
