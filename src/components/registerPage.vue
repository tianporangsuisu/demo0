<template>
  <div class="login">
    <div style="margin: auto auto;font-size: xx-large;font-style: italic">
      注册界面
      <br>
      <el-input placeholder="账号" v-model="login.data.account" class="input"></el-input>
      <br>
      <el-input placeholder="密码" show-password v-model="login.data.password" class="input"></el-input>
      <br>
      <el-button type="primary" @click="loadingContent">注册</el-button>
    </div>
  </div>
</template>

<script>
import {reactive} from "vue";
import {ElLoading} from "element-plus";

export default {
  name: 'loginPage',
  setup(){
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
      data:{
        account:'',
        password:'',
      },
      methods:{
        confirm(){

        }
      }
    })

    return{
      loadingContent,
      login,
    }
  }
}
</script>

<style>

</style>