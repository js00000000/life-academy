<template>
  <div class="app-container">
    <Header />
    <main class="main-content">
      <NuxtPage />
    </main>
    <Footer />
  </div>
</template>

<style>
.app-container {
  display: flex;
  flex-direction: column;
  min-height: 100vh;
}

.main-content {
  flex: 1;
  padding-top: 70px; /* Add padding to account for the fixed header */
}

@media (max-width: 768px) {
  .main-content {
    padding-top: 60px; /* Adjust for mobile header height */
  }
}
</style>