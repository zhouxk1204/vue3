<script setup>
defineProps({
  msg: String
})
</script>

<template>
  <h1>{{ msg }}</h1>
  <el-button type="primary">Primary</el-button>
</template>

<style lang="scss" scoped>
h1 {
  color: $color;
}
</style>
