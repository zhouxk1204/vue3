<script setup>
// This starter template is using Vue 3 <script setup> SFCs
// Check out https://v3.vuejs.org/api/sfc-script-setup.html#sfc-script-setup
import HelloWorld from '@/components/HelloWorld.vue'
</script>

<template>
  <Frame>
    <template #page>
      <router-view></router-view>
    </template>
  </Frame>
</template>

<style>
body{
  padding: 0;
  margin: 0;
}
</style>
