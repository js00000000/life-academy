<template>
  <header class="header">
    <div class="container">
      <div class="logo">
        <h1 style="color: black">Life Academy</h1>
      </div>
      <nav class="nav">
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="/investment">Investment</a></li>
<!--          <li><a href="/about">About Us</a></li>-->
<!--          <li><a href="/contact">Contact</a></li>-->
        </ul>
      </nav>
    </div>
  </header>
</template>

<style scoped>
.header {
  background-color: #f8f9fa;
  border-bottom: 1px solid #e9ecef;
  padding: 1rem 0;
}

.container {
  display: flex;
  align-items: center;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem;
}

.logo {
  display: flex;
  align-items: center;
}

.logo img {
  height: 40px;
  margin-right: 10px;
}

.logo h1 {
  font-size: 1.5rem;
  margin: 0;
}

.nav ul {
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
}

.nav ul li {
  margin: 0 15px;
}

.nav ul li a {
  text-decoration: none;
  color: #343a40;
  font-weight: 500;
}

.nav ul li a:hover {
  color: #007bff;
}
</style>
