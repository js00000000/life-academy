<template>
    <a :href="href" class="category-card">
      <i :class="iconClass"></i>
      <h3>{{ title }}</h3>
    </a>
  </template>
  
  <script setup lang="ts">
  defineProps({
    href: {
      type: String,
      required: true
    },
    iconClass: {
      type: String,
      required: true
    },
    title: {
      type: String,
      required: true
    }
  })
  </script>
  
  <style scoped>
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
  </style>