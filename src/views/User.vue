<script setup>
const tableData = [
  {
    name: '李佳倩',
    factor: '0.6',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    name: '肖志桃',
    factor: '0.65',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    name: '李波',
    factor: '0.55',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    name: '沈彤彤',
    factor: '0.5',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    name: '史立莉',
    factor: '0.5',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    name: '吴正宏',
    factor: '0.5',
    address: 'No. 189, Grove St, Los Angeles',
  },
  {
    name: '肖颜林',
    factor: '0.45',
    address: 'No. 189, Grove St, Los Angeles',
  },
]

const handleEdit = (index, row) => {
  console.log(index, row);
};
const handleDelete = (index, row) => {
  console.log(index, row);
};
</script>

<template>
  <el-table :data="tableData" style="width: 100%">
    <el-table-column prop="name" label="姓名" />
    <el-table-column prop="factor" label="系数" />
    <el-table-column prop="factor" label="系数分" />
    <el-table-column label="操作">
      <template #default="scope">
        <el-button size="mini" @click="handleEdit(scope.$index, scope.row)">编辑</el-button>
        <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
      </template>
    </el-table-column>
  </el-table>
</template>

<style lang="scss" scoped>
</style>