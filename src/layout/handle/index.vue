<template>
  <div class="handle_collection">
    <a-space size="medium">
      <a-button>
        <template #icon>
          <icon-mobile />
        </template>
        预览
      </a-button>
      <a-button type="primary">
        <template #icon>
          <icon-save />
        </template>
        保存
      </a-button>
      <a-button type="primary">
        <template #icon>
          <icon-computer />
        </template>
        发布
      </a-button>
    </a-space>
  </div>
</template>

<script setup></script>

<style lang="less">
.handle_collection {
  height: 55px;
  width: 100%;
  padding-right: 20px;
  border-bottom: 1px solid #ebedf0;
  display: flex;
  justify-content: right;
  align-items: center;
  background-color: #fff;
  box-sizing: border-box;
  z-index: 10;
}
</style>
