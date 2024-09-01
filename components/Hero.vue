<template>
  <section class="hero">
    <div class="hero-content">
      <h2>Let's do it together.</h2>
      <p>We travel the world in search of stories. Come along for the ride.</p>
      <button>View Latest Posts</button>
    </div>
  </section>
</template>

<style scoped>
.hero {
  height: 100vh;
  background-image: url('hero.jpeg');
  background-size: cover;
  background-position: center;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: white;
}
.hero-content {
  background-color: rgba(0, 0, 0, 0);
  padding: 40px;
  border-radius: 8px;
}
h2 {
  font-size: 48px;
  margin-bottom: 20px;
}
p {
  font-size: 24px;
  margin-bottom: 30px;
}
button {
  background-color: #f4a261;
  border: none;
  color: white;
  padding: 15px 30px;
  font-size: 18px;
  cursor: pointer;
  transition: background-color 0.3s;
}
button:hover {
  background-color: #e76f51;
}
</style>
