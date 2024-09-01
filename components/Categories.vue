<template>
  <section class="categories">
    <a href="/investment">Investment</a>
    <a href="#">Continuous Learning</a>
    <a href="#">Communicate</a>
    <a href="#">Self-Awareness</a>
    <a href="#">Stay Curious</a>
  </section>
</template>

<style scoped>
.categories {
  display: flex;
  border-top: lightgrey solid 1px;
  border-bottom: lightgrey solid 1px;
  justify-content: space-around;
  padding: 20px 0;
  background-color: #f8f8f8;
}
a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;
}
a:hover {
  color: #e76f51;
}
</style>