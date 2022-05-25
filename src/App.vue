<template>
  <div class="full" id="object">
    <el-container>
      <el-header class="header">报表管理系统</el-header>
      <el-container>
        <el-aside class="nav">
          <el-col style="margin: 2vh auto">
            <img src="./assets/用户头像.png" style="width: 30%">
            <el-row style="height: 1vh"></el-row>
            <el-button @click="showLogin">登录</el-button>
          </el-col>
          <el-col style="width: 100%">
            <el-menu
                default-active="2"
                class="el-menu-vertical-demo"
                background-color="white"
                text-color="black"
                active-text-color="#ffd04b"
                @open="handleOpen"
                @close="handleClose"
            >
              <!--                <el-sub-menu index="1">
                                <template #title>
                                  <el-icon><setting/></el-icon>
                                  <span>用户</span>
                                </template>
                                <el-menu-item-group>
                                  <el-menu-item index="1-1" @click="showLogin">登录</el-menu-item>&lt;!&ndash;
                                  薛定谔的注册页
                                  <el-menu-item index="1-2" @click="showRegister">注册</el-menu-item>&ndash;&gt;
                                </el-menu-item-group>
                              </el-sub-menu>-->
              <el-sub-menu index="2" :disabled="! logState">
                <template #title>
                  <el-icon><IconMenu /></el-icon>
                  <span>报表查询</span>
                </template>
                <el-menu-item-group>
                  <el-sub-menu index="2-1">
                    <template #title>
                      <el-icon><document /></el-icon>
                      <span>明细报表</span>
                    </template>
                    <el-menu-item index="2-1-1" @click="showPage('211');inputChange();showControl()">售卡明细表</el-menu-item>
                    <el-menu-item index="2-1-2" @click="showPage('212');inputChange();showControl()">退卡明细表</el-menu-item>
                    <el-menu-item index="2-1-3" @click="showPage('213');inputChange();showControl()">充值明细表</el-menu-item>
                    <el-menu-item index="2-1-4" @click="showPage('214');inputChange();showControl()">刷卡交易明细表</el-menu-item>
                    <el-menu-item index="2-1-5" @click="showPage('215');inputChange();showControl()">扫码交易明细表</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index="2-2">
                    <template #title>
                      <el-icon><document /></el-icon>
                      <span>统计报表</span>
                    </template>
                    <el-menu-item index="2-2-1" @click="showPage('221');inputChange();showControl()">操作员统计表</el-menu-item>
                    <el-menu-item index="2-2-2" @click="showPage('222');inputChange();showControl()">每日票卡发行汇总表</el-menu-item>
                    <el-menu-item index="2-2-3" @click="showPage('223');inputChange();showControl()">TVM营收日报表-现金</el-menu-item>
                    <el-menu-item index="2-2-4" @click="showPage('224');inputChange();showControl()">TVM营收日报表-电子支付</el-menu-item>
                    <el-menu-item index="2-2-5" @click="showPage('225');inputChange();showControl()">BOM营收日报表-现金</el-menu-item>
                    <el-menu-item index="2-2-6" @click="showPage('226');inputChange();showControl()">BOM营收日报表-电子支付</el-menu-item>
                    <el-menu-item index="2-2-7" @click="showPage('227');inputChange();showControl()">营收汇总日报表</el-menu-item>
                  </el-sub-menu>
                  <el-sub-menu index=2-3>
                    <template #title>
                      <el-icon><document /></el-icon>
                      <span>对账报表</span>
                    </template>
                    <el-menu-item index="2-3-1" @click="showPage('231');inputChange();showControl()">对账异常表</el-menu-item>
                    <el-menu-item index="2-3-2" @click="showPage('232');inputChange();showControl()">对账统计表</el-menu-item>
                  </el-sub-menu>
                </el-menu-item-group>
              </el-sub-menu>
            </el-menu>
          </el-col>
        </el-aside>
        <el-main class="body">
          <login-page v-if="stateCode === '110'" :log="logState" @callBack="callBack"></login-page>
          <el-col  v-else :state-code="stateCode">
            <el-row justify="space-evenly" style="background: antiquewhite;padding: 1vh 0" >
              <el-col :span="4">
                起始日期：
                <br>
                <el-date-picker
                    v-model="startDate"
                    type="date"
                    placeholder="起始日期"
                    :span="4"
                />
              </el-col>
              <el-col :span="4">
                终止日期：
                <br>
                <el-date-picker
                    v-model="endDate"
                    type="date"
                    placeholder="终止日期"
                />
              </el-col>
              <el-col :span="4" v-show="businessTypeShow">
                交易类型：
                <el-select v-model="businessType" class="m-2" placeholder="交易类型">
                  <el-option
                      v-for="bt in bts"
                      :key="bt.value"
                      :label="bt.label"
                      :value="bt.value"
                  />
                </el-select>
              </el-col>
              <el-col :span="4" v-show="cardTypeShow">
                票务类型：
                <el-select v-model="cardType" class="m-2" placeholder="票务类型">
                  <el-option
                      v-for="ct in cts"
                      :key="ct.value"
                      :label="ct.label"
                      :value="ct.value"
                  />
                </el-select>
              </el-col>
              <el-col :span="4" v-show="pointShow">
                {{pointName}}点:
                <br>
                <el-input v-model="point" :placeholder="pointName+'点'" />
              </el-col>
              <el-col :span="4" v-show="operatorShow">
                操作员：
                <br>
                <el-input v-model="operator" placeholder="操作员" />
              </el-col>
              <el-col :span="4" v-show="cardNumShow">
                卡号：
                <br>
                <el-input v-model="cardNum" placeholder="卡号" />
              </el-col>
              <el-col :span="4" v-show="certificationNumShow">
                凭证号：
                <br>
                <el-input v-model="certificationNum" placeholder="凭证号" />
              </el-col>
              <el-col :span="4" v-show="terminalNumShow">
                设备编号：
                <br>
                <el-input v-model="terminalNum" placeholder="设备编号" />
              </el-col>
            </el-row>
            <show-page></show-page>
          </el-col>
        </el-main>
      </el-container>
    </el-container>
  </div>
  <el-button @click="state"></el-button>
</template>

<script>
import {onMounted, onUnmounted, onUpdated, reactive, toRefs} from "vue";
import {Document,Menu as IconMenu,Location} from '@element-plus/icons-vue';
import loginPage from './components/loginPage.vue'
import ShowPage from "@/components/showPage";

export default {
  name:'App',
  components: {ShowPage, Document, IconMenu,loginPage},
  setup(){



    const cts = [
      {
        value: '普通卡',
        label: '普通卡'
      },{
        value: '储值票',
        label: '储值票'
      },{
        value: '学生卡',
        label: '学生卡'
      },{
        value: '爱心卡',
        label: '爱心卡'
      },{
        value: '二维码',
        label: '二维码'
      }
    ]
    const bts = [
      {
        value: '电子',
        label: '电子'
      },{
        value: '现金',
        label: '现金'
      },{
        value: '上车',
        label: '上车'
      }
    ]

    /*基本响应式对象，实现大部分功能*/
    let Object = reactive({
      stateCode: '110',
      terminalNO: '',
      logState: true,
      state: ()=>{
        console.log(normalType)
      },
      callBack: (val) =>{
        console.log(val);
        Object.logState = val.data;
      },
      showLogin: () => {
        Object.stateCode='110';
      },
      showRegister: () => {
        Object.stateCode='120';
      },
      showPage: (code) =>{
        Object.stateCode=code;
      }
    })

    const handleOpen = (key, keyPath) => {
      console.log(key, keyPath)
    }

    const handleClose = (key, keyPath) => {
      console.log(key, keyPath)
    }

    let normalType = reactive({
      startDate: '',
      endDate: '',
      cardNum: '',cardNumShow: false,
      operator: '',operatorShow: false,
      certificationNum: '',certificationNumShow: false,
      terminalNum: '',terminalNumShow: false,
      businessType: '', businessTypeShow: false,
      cardType: '',cardTypeShow: false,
      //点位输入框的相关数据，1：点位数据 2：点位名展示 3：展示决定数据
      point: '', pointName: '', pointShow: false,
      curState: '',
      inputChange(){
        normalType.curState = Object.stateCode;
      },
      showControl(){
        //点point的控制方法
        if (normalType.curState === '214' || normalType.curState === '213'
            ||normalType.curState === '221'){
          normalType.pointName = '充值';
          normalType.pointShow = true;
        }
        else if (normalType.curState === '211'){
          normalType.pointName = '售卡';
          normalType.pointShow = true;
        }
        else if (normalType.curState === '212'){
          normalType.pointName = '退卡';
          normalType.pointShow = true;
        }
        else {
          normalType.pointShow = false;
        }

        //交易类型businessType的控制方法
        normalType.businessTypeShow = normalType.curState === '211' || normalType.curState === '212'
            || normalType.curState === '213';

        //票务类型cardType的控制方法
        normalType.cardTypeShow = normalType.curState === '211' || normalType.curState === '212'
            || normalType.curState === '213' || normalType.curState === '214';

        //操作员operator的控制方法
        normalType.operatorShow = normalType.curState === '211' || normalType.curState === '212'
            || normalType.curState === '213' || normalType.curState === '214'
            || normalType.curState === '221';

        //卡号cardNum的控制方法
        normalType.cardNumShow = normalType.curState === '214';

        //凭证号certificationNum的控制方法
        normalType.certificationNumShow = normalType.curState === '215';

        //设备编号terminalNum的控制方法
        normalType.terminalNumShow = normalType.curState === '223' || normalType.curState === '224'
            || normalType.curState === '225' || normalType.curState === '226';
      }
    })

    let timer = 0;
    let count = 0;
    onMounted(() => {
      console.log('页面挂载完成，触发了onMounted钩子函数');
      timer = setInterval(() => {
        console.log('定时器正在运行中', count++)
      }, 1000);
      normalType.showControl();
    })
    onUpdated(() => {
      console.log('数据发生了更新，触发了onUpdated钩子函数');

    })
    onUnmounted(() => {
      console.log('页面/组件退出，触发了onUnmounted钩子函数')
      // 如果不清楚，这些异步的行为就会常驻在内存中，一定程度上会造成常驻内存的不必要消耗，造成内存泄露
      clearInterval(timer);
    })



    return {
      handleClose,
      handleOpen,
      Document,IconMenu,Location,
      ...toRefs(Object),
      ...toRefs(normalType),
      bts,
      cts,
    }
  }
}
</script>

<style>
html,body{
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  background: url("./assets/fullBackground.jpg") no-repeat;
  background-size: 100% 100%;
}
</style>
