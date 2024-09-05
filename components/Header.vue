<template>
  <div class="header-wrapper">
    <header :class="{ 'scrolled': scrolled }">
      <div class="header-content">
        <h1><a href="/" class="home-link">Life Academy</a></h1>
        <nav :class="{ 'active': isMenuOpen }">
          <a href="/">Home</a>
          <a href="#">Categories</a>
          <a href="#">About</a>
          <a href="#">Contact</a>
        </nav>
        <button class="menu-toggle" @click="toggleMenu" aria-label="Toggle menu">
          <span></span>
          <span></span>
          <span></span>
        </button>
      </div>
    </header>
  </div>
</template>

<script setup>
import { ref, onMounted, onUnmounted } from 'vue'

const isMenuOpen = ref(false)
const scrolled = ref(false)

const toggleMenu = () => {
  isMenuOpen.value = !isMenuOpen.value
}

const handleScroll = () => {
  scrolled.value = window.scrollY > 50
}

onMounted(() => {
  window.addEventListener('scroll', handleScroll)
})

onUnmounted(() => {
  window.removeEventListener('scroll', handleScroll)
})
</script>

<style scoped>
.header-wrapper {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  z-index: 1000;
  height: 70px;
}

header {
  background-color: rgba(99, 102, 241, 0.9); /* Adjusted to match the hero gradient */
  backdrop-filter: blur(10px);
  transition: background-color 0.3s ease;
  height: 100%;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 5%;
  height: 100%;
}

h1 {
  font-size: 1.5rem;
  margin: 0;
}

.home-link {
  color: white;
  text-decoration: none;
  transition: color 0.3s ease;
}

.home-link:hover {
  color: #fbbf24;
}

nav {
  display: flex;
}

nav a {
  color: white;
  text-decoration: none;
  margin-left: 1.5rem;
  font-weight: 500;
  transition: color 0.3s ease;
}

nav a:hover {
  color: #fbbf24; /* Adjusted to match the CTA button color */
}

.menu-toggle {
  display: none;
}

@media (max-width: 768px) {
  .header-wrapper {
    height: 60px;
  }

  nav {
    display: none;
    position: absolute;
    top: 100%;
    left: 0;
    right: 0;
    background-color: rgba(99, 102, 241, 0.95);
    flex-direction: column;
    padding: 1rem 0;
    box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  }

  nav.active {
    display: flex;
  }

  nav a {
    color: white;
    margin: 0.5rem 0;
    padding: 0.5rem 1rem;
  }

  .menu-toggle {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 30px;
    height: 25px;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
  }

  .menu-toggle span {
    width: 30px;
    height: 3px;
    background-color: white;
    transition: all 0.3s ease;
  }
}
</style>