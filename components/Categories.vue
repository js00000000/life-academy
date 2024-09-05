<template>
  <section class="categories">
    <h2>Explore Our Categories</h2>
    <div class="category-grid">
      <CategoryCard
        v-for="category in categories"
        :key="category.title"
        :href="category.href"
        :icon-class="category.iconClass"
        :title="category.title"
      />
    </div>
  </section>
</template>

<script setup>
import CategoryCard from './CategoryCard.vue'

const categories = [
  { href: '/investment', iconClass: 'fas fa-chart-line', title: 'Investment' },
  { href: '#', iconClass: 'fas fa-book-reader', title: 'Continuous Learning' },
  { href: '#', iconClass: 'fas fa-comments', title: 'Communicate' },
  { href: '#', iconClass: 'fas fa-user-check', title: 'Self-Awareness' },
  { href: '#', iconClass: 'fas fa-lightbulb', title: 'Stay Curious' },
]
</script>

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