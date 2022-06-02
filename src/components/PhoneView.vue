<template>
  <div class="phone_view">
    <img class="phone_view--state" src="../assets/phoneTop.png" alt="" />
    <slot />
  </div>
</template>

<script setup></script>

<style>
.phone_view {
  width: 375px;
  border-color: white;
  height: calc(100vh - 60px);
  margin: 40px 0 20px;
  box-shadow: 0 0 14px 0 rgb(0 0 0 / 10%);
}

.phone_view--state {
  width: 375px;
}
</style>
