<template>
  <div>
    <NuxtRouteAnnouncer />
    <NuxtLayout />
  </div>
</template>

<script setup lang="ts">
useSeoMeta({
  title: `Life Academy`,
  description: 'Life Academy - Essential skills for a better life',
})
</script>

<style>
body {
  margin: 0;
  font-family: Arial, sans-serif;
  text-align: center;
}
</style>