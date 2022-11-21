<script setup lang="ts">
  import {onMounted} from "vue";
  import {useAppLoad} from "./hooks/app/useAppLoad";

  onMounted(() => {
    useAppLoad();
  })
</script>

<template>
  <router-view />
</template>

<style scoped lang="less">

</style>
