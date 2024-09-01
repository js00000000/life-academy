<template>
  <footer class="site-footer">
    <div class="stay-in-touch">
      <h2>Stay in Touch</h2>
      <form @submit.prevent="submitEmail" class="email-form">
        <input
            type="email"
            v-model="email"
            placeholder="Enter your email address"
            required
        >
        <button type="submit">Submit</button>
      </form>
    </div>
    <div class="footer-content">
      <p>&copy; 2024 Life Academy</p>
    </div>
  </footer>
</template>

<script setup>
import { ref } from 'vue'

const email = ref('')

const submitEmail = () => {
  // Handle email submission logic here
  console.log('Email submitted:', email.value)
  email.value = '' // Clear the input after submission
}
</script>
<style scoped>
.site-footer {
  background-image: linear-gradient(rgba(0,0,0,0.5), rgba(0,0,0,0.5)), url('/hero.jpeg');
  background-size: cover;
  background-position: center;
  color: white;
  padding: 20px;
  text-align: center;
}
.stay-in-touch {
  margin-bottom: 40px;
}
h2 {
  font-size: 2em;
  margin-bottom: 20px;
}
.email-form {
  display: flex;
  flex-direction: column;
  max-width: 500px;
  margin: 0 auto;
}
input[type="email"] {
  flex-grow: 1;
  padding: 10px;
  margin-bottom: 10px;
  border: none;
  border-radius: 4px;
}
button {
  background-color: #f4a261;
  color: white;
  border: none;
  padding: 10px;
  border-radius: 4px;
  cursor: pointer;
}
.footer-content {
  display: flex;
  justify-content: center;
  padding: 10px 0;
  border-top: 1px solid rgba(255,255,255,0.3);
}
@media (min-width: 768px) {
  .email-form {
    flex-direction: row;
  }
  input[type="email"] {
    margin-bottom: 0;
    border-radius: 4px 0 0 4px;
  }
  button {
    border-radius: 0 4px 4px 0;
  }
}
</style>
