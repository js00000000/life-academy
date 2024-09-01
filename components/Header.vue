<template>
  <header>
    <div class="header-content">
      <h1>Life Academy</h1>
      <nav :class="{ 'active': isMenuOpen }">
        <a href="/">HOME</a>
        <a href="#">CATEGORIES</a>
        <a href="#">ABOUT</a>
        <a href="#">CONTACT</a>
      </nav>
      <button class="hamburger" @click="toggleMenu">
        <span></span>
        <span></span>
        <span></span>
      </button>
    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      isMenuOpen: false
    }
  },
  methods: {
    toggleMenu() {
      this.isMenuOpen = !this.isMenuOpen
    }
  }
}
</script>

<style scoped>
header {
  background-color: #333;
  color: white;
  padding: 10px 0;
  position: relative;
  z-index: 1000;
}

.header-content {
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 20px;
}

h1 {
  margin: 0;
}

nav {
  display: none;
}

nav.active {
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 100%;
  left: 0;
  right: 0;
  background-color: #333;
  z-index: 999;
}

nav a {
  color: white;
  text-decoration: none;
  padding: 10px;
  text-align: center;
}

nav a:hover {
  background-color: #575757;
}

.hamburger {
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

.hamburger span {
  width: 30px;
  height: 3px;
  background-color: white;
}

@media (min-width: 768px) {
  nav {
    display: flex;
    flex-direction: row;
    position: static;
  }

  nav a {
    margin-left: 20px;
  }

  .hamburger {
    display: none;
  }
}
</style>