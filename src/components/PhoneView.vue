<template>
  <div class="phone_view">
    <img
      class="phone_view--state"
      src="../assets/phoneTop.png"
      alt=""
    />
    <slot />
  </div>
</template>

<script setup></script>

<style>
.phone_view {
  position: relative;
  width: 375px;
  border-color: white;
  min-height: 667px;
  box-shadow: 0 0 14px 0 rgb(0 0 0 / 10%);
  margin: 0 auto;
}

.phone_view--state {
  width: 375px;
}
</style>
