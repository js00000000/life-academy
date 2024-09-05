<template>
  <section class="hero">
    <div class="hero-content">
      <h1>Unlock Your Potential</h1>
      <p>Discover essential life skills and embark on a journey of personal growth with Life Academy.</p>
      <button class="cta-button">Start Learning Now</button>
    </div>
    <div class="hero-image">
      <img src="/hero.jpeg" alt="Learning illustration" />
    </div>
  </section>
</template>

<style scoped>
.hero {
  display: flex;
  align-items: center;
  justify-content: space-between;
  min-height: calc(100vh - 70px);
  padding: 2rem 5%;
  background: linear-gradient(135deg, #6366f1, #a855f7);
  color: white;
  overflow: hidden;
}

.hero-content {
  flex: 1;
  max-width: 600px;
}

h1 {
  font-size: 3.5rem;
  font-weight: 800;
  margin-bottom: 1rem;
  line-height: 1.2;
}

p {
  font-size: 1.25rem;
  margin-bottom: 2rem;
  opacity: 0.9;
}

.cta-button {
  background-color: #fbbf24;
  color: #1f2937;
  font-weight: bold;
  padding: 1rem 2rem;
  border: none;
  border-radius: 9999px;
  font-size: 1.125rem;
  cursor: pointer;
  transition: all 0.3s ease;
}

.cta-button:hover {
  background-color: #f59e0b;
  transform: translateY(-2px);
}

.hero-image {
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
}

.hero-image img {
  max-width: 100%;
  height: auto;
  animation: float 6s ease-in-out infinite;
}

@keyframes float {
  0%, 100% { transform: translateY(0); }
  50% { transform: translateY(-20px); }
}

@media (max-width: 768px) {
  .hero {
    flex-direction: column;
    text-align: center;
    padding: 3rem 1rem;
  }

  .hero-content {
    margin-bottom: 2rem;
  }

  h1 {
    font-size: 2.5rem;
  }

  p {
    font-size: 1rem;
  }

  .hero-image {
    max-width: 80%;
  }
}
</style>
