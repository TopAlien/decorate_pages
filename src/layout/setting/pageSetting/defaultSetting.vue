<template>
  <a-form :model="props.config" :auto-label-width="true">
    <a-form-item label="页面标题">
      <a-input v-model="props.config.title" placeholder="请输入" :max-length="20" show-word-limit></a-input>
    </a-form-item>
    <a-form-item label="哇咔咔设置">
      <a-input v-model="props.config.name" placeholder="请输入" :max-length="20" show-word-limit></a-input>
    </a-form-item>
    <a-form-item label="哇咔咔">
      <a-input v-model="props.config.name" placeholder="请输入" :max-length="20" show-word-limit></a-input>
    </a-form-item>
  </a-form>
</template>

<script setup>
import Header from '../components/Header.vue';

const props = defineProps({
  config: {
    type: Object,
    default: () => {},
  },
});
</script>
