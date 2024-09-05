<template>
  <footer class="site-footer">
    <div class="footer-content">
      <div class="footer-section">
        <h2>Life Academy</h2>
        <p>Empowering you with essential life skills for personal growth and success.</p>
      </div>
      <div class="footer-section">
        <h3>Quick Links</h3>
        <ul>
          <li><a href="/">Home</a></li>
          <li><a href="#">Categories</a></li>
          <li><a href="#">About Us</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </div>
      <div class="footer-section">
        <h3>Stay Connected</h3>
        <form @submit.prevent="submitEmail" class="email-form">
          <input type="email" v-model="email" placeholder="Enter your email" required>
          <button type="submit">Subscribe</button>
        </form>
        <div class="social-icons">
          <a href="#" aria-label="Facebook"><i class="fab fa-facebook"></i></a>
          <a href="#" aria-label="Twitter"><i class="fab fa-twitter"></i></a>
          <a href="#" aria-label="Instagram"><i class="fab fa-instagram"></i></a>
          <a href="#" aria-label="LinkedIn"><i class="fab fa-linkedin"></i></a>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <p>&copy; 2024 Life Academy. All rights reserved.</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const submitEmail = () => {
  console.log('Email submitted:', email.value)
  email.value = ''
}
</script>

<style scoped>
.site-footer {
  background-color: #1f2937;
  color: white;
  padding: 4rem 5% 2rem;
}

.footer-content {
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  max-width: 1200px;
  margin: 0 auto;
}

.footer-section {
  flex: 1;
  min-width: 250px;
  margin-bottom: 2rem;
}

h2, h3 {
  margin-bottom: 1rem;
}

ul {
  list-style-type: none;
  padding: 0;
}

ul li {
  margin-bottom: 0.5rem;
}

a {
  color: #9ca3af;
  text-decoration: none;
  transition: color 0.3s ease;
}

a:hover {
  color: #fbbf24;
}

.email-form {
  display: flex;
  margin-bottom: 1rem;
}

input[type="email"] {
  flex-grow: 1;
  padding: 0.5rem;
  border: none;
  border-radius: 4px 0 0 4px;
}

button {
  background-color: #fbbf24;
  color: #1f2937;
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 0 4px 4px 0;
  cursor: pointer;
  transition: background-color 0.3s ease;
}

button:hover {
  background-color: #f59e0b;
}

.social-icons {
  display: flex;
  gap: 1rem;
}

.social-icons a {
  font-size: 1.5rem;
}

.footer-bottom {
  text-align: center;
  margin-top: 2rem;
  padding-top: 2rem;
  border-top: 1px solid #374151;
}

@media (max-width: 768px) {
  .footer-content {
    flex-direction: column;
  }

  .footer-section {
    margin-bottom: 2rem;
  }
}
</style>
