<template>
  <header>header</header>
  <main>
    <el-row class="main">
      <el-col :span="6">
        <el-menu default-active="2" @open="handleOpen" @close="handleClose" :router="true">
          <el-sub-menu index="1">
            <template #title>
              <el-icon>
                <location />
              </el-icon>
              <span>用户管理</span>
            </template>
            <el-menu-item index="/user">用户管理</el-menu-item>
            <el-menu-item index="/create-user">新建用户</el-menu-item>
          </el-sub-menu> 
          <el-menu-item index="2">
            <el-icon>
              <icon-menu />
            </el-icon>
            <span>设置</span>
          </el-menu-item>
        </el-menu>
      </el-col>
      <el-col :span="18" class="col">
        <div class="breadcrumb">
          <el-breadcrumb separator="/">
            <el-breadcrumb-item :to="{ path: '/' }">homepage</el-breadcrumb-item>
            <el-breadcrumb-item>
              <a href="/">promotion management</a>
            </el-breadcrumb-item>
            <el-breadcrumb-item>promotion list</el-breadcrumb-item>
          </el-breadcrumb>
        </div>
        <div class="page">
            <slot name="page"></slot>
        </div>
      </el-col>
    </el-row>
  </main>
  <footer>footer</footer>
</template>

<script setup>
import { defineComponent } from 'vue'
import {
  Location,
  Document,
  Menu as IconMenu,
  Setting,
} from '@element-plus/icons-vue'
const handleOpen = (key, keyPath) => {
  console.log(key, keyPath)
}
const handleClose = (key, keyPath) => {
  console.log(key, keyPath)
}
</script>

<style lang="scss" scoped>
header {
  height: 50px;
  background-color: #f00;
}

.main {
  min-height: calc(100vh - 100px);
  .content {
    height: 100%;
  }
}

footer {
  height: 50px;
  background-color: #ccc;
}
.col {
  display: flex;
  flex-direction: column;
  background-color: #f2f2f2;
  padding: 1rem;
}
.page {
  flex: 1;
  background-color: #fff;
  border-radius: .5rem;
  padding: 1rem;
}
.breadcrumb{
    margin-bottom: 1rem;
  }
</style>