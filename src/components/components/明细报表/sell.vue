<template>
  <div class="showPage">
    <el-table :data="tableData" border style="width: 80%;margin: 0 10%;font-size: 0.05vw">
      <el-table-column fixed prop="" label="序号" class="table-header" align="center"/>
      <el-table-column prop="" label="交易流水号" class="table-header" align="center"/>
      <el-table-column prop="" label="交易类型" class="table-header" align="center"/>
      <el-table-column prop="" label="卡号" class="table-header" align="center"/>
      <el-table-column prop="" label="凭证号" class="table-header" align="center"/>
      <el-table-column prop="" label="发卡机构" class="table-header" align="center"/>
      <el-table-column prop="" label="票卡类型" class="table-header" align="center"/>
      <el-table-column prop="" label="出售时间" class="table-header" align="center"/>
      <el-table-column prop="" label="退卡时间" class="table-header" align="center"/>
      <el-table-column prop="" label="充值时间" class="table-header" align="center"/>
      <el-table-column prop="" label="交易时间" class="table-header" align="center"/>
      <el-table-column prop="" label="时间" class="table-header" align="center"/>
      <el-table-column prop="" label="押金" class="table-header" align="center"/>
      <el-table-column prop="" label="余额" class="table-header" align="center"/>
      <el-table-column prop="" label="充值前余额" class="table-header" align="center"/>
      <el-table-column prop="" label="交易前余额" class="table-header" align="center"/>
      <el-table-column prop="" label="优惠金额" class="table-header" align="center"/>
      <el-table-column prop="" label="退款金额" class="table-header" align="center"/>
      <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
      <el-table-column prop="" label="交易金额" class="table-header" align="center"/>
      <el-table-column prop="" label="售卡点" class="table-header" align="center"/>
      <el-table-column prop="" label="退卡点" class="table-header" align="center"/>
      <el-table-column prop="" label="充值点" class="table-header" align="center"/>
      <el-table-column prop="" label="操作员" class="table-header" align="center"/>
      <el-table-column prop="" label="终端交易序号" class="table-header" align="center"/>
      <el-table-column prop="" label="终端编号" class="table-header" align="center"/>
      <el-table-column prop="" label="TAC" class="table-header" align="center"/>

      <el-table-column prop="" label="总计" width="200px" align="center">
        <el-table-column prop="" label="次数" class="table-header" align="center"/>
        <el-table-column prop="" label="金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="售卡" width="200px" align="center">
        <el-table-column prop="" label="次数" class="table-header" align="center"/>
        <el-table-column prop="" label="金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="充值" width="200px" align="center">
        <el-table-column prop="" label="次数" class="table-header" align="center"/>
        <el-table-column prop="" label="金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="退卡" width="200px" align="center">
        <el-table-column prop="" label="次数" class="table-header" align="center"/>
        <el-table-column prop="" label="金额" class="table-header" align="center"/>
      </el-table-column>

      <el-table-column prop="" label="日期" class="table-header" align="center"/>
      <el-table-column prop="" label="储值卡" width="200px" align="center">
        <el-table-column prop="" label="人工BOM" class="table-header" align="center"/>
        <el-table-column prop="" label="TVM" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="普通卡" class="table-header" align="center"/>
      <el-table-column prop="" label="学生卡" class="table-header" align="center"/>
      <el-table-column prop="" label="爱心卡" class="table-header" align="center"/>

      <el-table-column prop="" label="线路" class="table-header" align="center"/>
      <el-table-column prop="" label="站点" class="table-header" align="center"/>
      <el-table-column prop="" label="设备编号" class="table-header" align="center"/>

      <el-table-column prop="" label="合计" class="table-header" align="center"/>

      <el-table-column prop="" label="储值卡" width="400px" align="center">
        <el-table-column prop="" label="售卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="售卡押金" class="table-header" align="center"/>
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="普通卡" width="200px" align="center">
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="学生卡" width="200px" align="center">
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="关爱卡" width="200px" align="center">
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
      </el-table-column>

      <el-table-column prop="" label="储值卡" width="400px" align="center">
        <el-table-column prop="" label="售卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="售卡押金" class="table-header" align="center"/>
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="普通卡" width="400px" align="center">
        <el-table-column prop="" label="售卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="售卡押金" class="table-header" align="center"/>
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="学生卡" width="400px" align="center">
        <el-table-column prop="" label="售卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="售卡押金" class="table-header" align="center"/>
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡金额" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="爱心卡" width="400px" align="center">
        <el-table-column prop="" label="售卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="售卡押金" class="table-header" align="center"/>
        <el-table-column prop="" label="充值次数" class="table-header" align="center"/>
        <el-table-column prop="" label="充值金额" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡张数" class="table-header" align="center"/>
        <el-table-column prop="" label="退卡金额" class="table-header" align="center"/>
      </el-table-column>

      <el-table-column prop="" label="公众号" width="400px" align="center">
        <el-table-column prop="" label="售票" class="table-header" align="center"/>
        <el-table-column prop="" label="消费" class="table-header" align="center"/>
        <el-table-column prop="" label="当日退款" class="table-header" align="center"/>
        <el-table-column prop="" label="待退款" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="自动售票机" width="400px" align="center">
        <el-table-column prop="" label="现金押金" class="table-header" align="center"/>
        <el-table-column prop="" label="现金充值" class="table-header" align="center"/>
        <el-table-column prop="" label="电子支付押金" class="table-header" align="center"/>
        <el-table-column prop="" label="电子支付充值" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="人工售票系统" width="400px" align="center">
        <el-table-column prop="" label="现金押金" class="table-header" align="center"/>
        <el-table-column prop="" label="现金充值" class="table-header" align="center"/>
        <el-table-column prop="" label="电子支付押金" class="table-header" align="center"/>
        <el-table-column prop="" label="电子支付充值" class="table-header" align="center"/>
        <el-table-column prop="" label="退款" class="table-header" align="center"/>
      </el-table-column>
      <el-table-column prop="" label="金融POS机" class="table-header" align="center"/>
      <el-table-column prop="" label="钱箱" class="table-header" align="center"/>
    </el-table>
    <div style="text-align: center;width: 100%">
      <el-pagination
          v-model:currentPage="pageNum"
          :pager-count="11"
          layout="prev, pager, next"
          :total="1000"
          style="margin: auto 0"
      />
    </div>
  </div>
</template>

<script>
import {onUpdated, reactive, toRefs} from "vue";

export default {
  name: "showPage",
  props:{
    stateCode: String,
    startDate: String,
    endDate: String,
    cardNum: String,
    operator: String,
    certificationNum: String,
    terminalNum: String,
    businessType: String,
    cardType: String,
    point: String,
  },
  setup(){


    const handleClick = () => {
      console.log('click')
    }

    let query = reactive({
      pageNum: 1,/*当前页码*/
      pageSize: 10,/*每页显示条数*/
      handleCurrentChange(){
        
      }
    })

    const tableData = [
      {

      }
    ]



    onUpdated(() => {
    })

    return {
      ...toRefs(query),
      handleClick,
      tableData,
    }
  }
}
</script>

<style scoped>

</style>