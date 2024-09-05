<template>
  <section class="categories">
    <h2>Explore Our Categories</h2>
    <div class="category-grid">
      <a href="/investment" class="category-card">
        <i class="fas fa-chart-line"></i>
        <h3>Investment</h3>
      </a>
      <a href="#" class="category-card">
        <i class="fas fa-book-reader"></i>
        <h3>Continuous Learning</h3>
      </a>
      <a href="#" class="category-card">
        <i class="fas fa-comments"></i>
        <h3>Communicate</h3>
      </a>
      <a href="#" class="category-card">
        <i class="fas fa-user-check"></i>
        <h3>Self-Awareness</h3>
      </a>
      <a href="#" class="category-card">
        <i class="fas fa-lightbulb"></i>
        <h3>Stay Curious</h3>
      </a>
    </div>
  </section>
</template>

<style scoped>
.categories {
  padding: 4rem 5%;
  background-color: #f3f4f6;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
  color: #1f2937;
}

.category-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.category-card {
  background-color: white;
  border-radius: 8px;
  padding: 1.5rem;
  text-align: center;
  text-decoration: none;
  color: #1f2937;
  transition: all 0.3s ease;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
}

.category-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.category-card i {
  font-size: 2.5rem;
  margin-bottom: 1rem;
  color: #6366f1;
}

.category-card h3 {
  font-size: 1.25rem;
  margin: 0;
}

@media (max-width: 768px) {
  .categories {
    padding: 3rem 1rem;
  }

  h2 {
    font-size: 2rem;
  }

  .category-grid {
    grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  }
}
</style>