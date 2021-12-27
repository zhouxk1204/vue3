<template>
  <el-form :model="form">
    <el-form-item label="姓名" prop="name">
      <el-input v-model="form.name"></el-input>
    </el-form-item>
    <el-form-item label="性别" prop="gender">
      <el-select v-model="form.gender" placeholder="请选择性别">
        <el-option label="男" value="female"></el-option>
        <el-option label="女" value="male"></el-option>
      </el-select>
    </el-form-item>
  </el-form>
  <el-button type="primary" @click="onSubmit">Create</el-button>
</template>

<script setup>
import { ref } from "@vue/reactivity";

const form = ref({
  name: '',
  gender: '',
});
const onSubmit = () => {
  console.log(form.value)
}
</script>

<style lang="scss" scoped>
</style>