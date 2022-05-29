<template>
  <div class="login">
    <div style="margin: auto 0;font-size: xx-large;font-style: italic;text-align: center;width: 100%">
      登陆界面
      <br>
      <el-input placeholder="账号" v-model="account" style="width: 30%"></el-input>
      <br>
      <el-input placeholder="密码" show-password v-model="password" style="width: 30%"></el-input>
      <br>
      <el-button type="primary" @click="confirm()">登录</el-button>
    </div>
  </div>
</template>

<script>
import {reactive, toRefs} from "vue";
import {ElLoading} from "element-plus";
import loginApi from '@/api/login.js';
import cookie from "js-cookie";

export default {
  name: 'loginPage',
  props:{
    log: Boolean,
  },
  setup(props,{emit}){
    /*设置加载动画，显得很高级*/
    const loadingContent = () => {
      const loading = new ElLoading.service({
        lock: true,
        text: '加载中......',
      })
      setTimeout(() => {
        loading.close()
      },2000)
    }

    const login = reactive({
      account:'',
      password:'',
      log0: !props.log,
      confirm(){
        loginApi.login(this.account, this.password).then(response => {
          let token = response.data.data
          console.log(token)
          //需要转化为string形式再存入cookie
          token = JSON.stringify(token).replaceAll('"','')
          cookie.set('token', token, {domain: 'localhost'})
          console.log(login.log0)
          emit('callBack',{data: login.log0})
          alert("登录成功")
        }).catch(error => {
          console.log(error)
          alert("登录失败")
        })
      }
    })

    return{
      loadingContent,
      ...toRefs(login),
      props,
    }
  }
}
</script>

<style>

</style>