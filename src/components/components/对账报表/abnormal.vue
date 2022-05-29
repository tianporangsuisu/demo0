<template>
  <el-row>
    <el-col :span="6" class="inputCol">
      <el-col :span="12" class="inputLabel">起始日期：</el-col>
      <el-col :span="12">
        <el-date-picker
            v-model="startDate"
            type="date"
            placeholder="起始日期"

        />
      </el-col>
    </el-col>
    <el-col :span="6" class="inputCol">
      终止日期：
      <el-date-picker
          v-model="endDate"
          type="date"
          placeholder="终止日期"
          style="width: 50%;"
      />
    </el-col>
  </el-row>
</template>

<script>
export default {
  name: "abnormal"
}
</script>

<style scoped>

</style>