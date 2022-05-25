<template>
  <div class="showPage">
    <el-table :data="tableData" border style="width: 80%;margin: 0 10%">
      <el-table-column fixed prop="date" label="Date" width="150" />
      <el-table-column prop="name" label="Name" width="120" />
      <el-table-column prop="state" label="State" width="120" />
      <el-table-column prop="city" label="City" width="120" />
      <el-table-column prop="address" label="Address" width="600" />
      <el-table-column prop="zip" label="Zip" width="120" />
    </el-table>
    <el-pagination
        v-model:currentPage="pageNum"
        :pager-count="11"
        layout="prev, pager, next"
        :total="1000"
    />
  </div>
</template>

<script>
import {onUpdated, reactive, toRefs} from "vue";

export default {
  name: "showPage",
  props:{
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