<template>
  <div>
    <Header />
    <NuxtPage />
    <footer>
      <p>&copy; 2024 Life Academy</p>
    </footer>
  </div>
</template>

<style>
header {
  background-color: #42b983;
  color: white;
  padding: 20px 0;
  text-align: center;
}
nav a {
  margin: 0 10px;
  color: white;
  text-decoration: none;
}
footer {
  text-align: center;
  margin-top: 20px;
  color: #42b983;
}
</style>
<script setup lang="ts">
import Header from "~/components/Header.vue";
</script>