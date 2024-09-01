<template>
  <section class="categories">
    <div class="categories-wrapper">
      <a href="/investment">Investment</a>
      <span class="separator"></span>
      <a href="#">Continuous Learning</a>
      <span class="separator"></span>
      <a href="#">Communicate</a>
      <span class="separator"></span>
      <a href="#">Self-Awareness</a>
      <span class="separator"></span>
      <a href="#">Stay Curious</a>
    </div>
  </section>
</template>

<style scoped>
.categories {
  border-top: lightgrey solid 1px;
  border-bottom: lightgrey solid 1px;
  background-color: #f8f8f8;
  overflow-x: auto;
  white-space: nowrap;
  scrollbar-width: none;  /* Firefox */
  -ms-overflow-style: none;  /* Internet Explorer 10+ */
}
.categories::-webkit-scrollbar {
  display: none;  /* WebKit */
}
.categories-wrapper {
  display: inline-flex;
  padding: 10px;
  align-items: center;
}
a {
  text-decoration: none;
  color: #333;
  font-weight: bold;
  transition: color 0.3s;
  padding: 10px 20px;
  text-align: center;
}
a:hover {
  color: #e76f51;
}
.separator {
  width: 1px;
  height: 20px;
  background-color: lightgrey;
  margin: 0 5px;
}

@media (max-width: 768px) {
  .categories {
    padding: 0;
  }
  .categories-wrapper {
    padding: 10px 0;
  }
  a {
    padding: 10px 15px;
  }
  .separator {
    height: 15px;
  }
}
</style>