<template>
  <div class="video-embed">
    <div class="video-container">
      <iframe
        :src="computedEmbedUrl"
        :title="title"
        frameborder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowfullscreen
      ></iframe>
    </div>
    <h3 class="video-title">{{ title }}</h3>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';

const props = defineProps({
  videoId: {
    type: String,
    required: true,
  },
  platform: {
    type: String,
    required: true,
  },
  title: {
    type: String,
    required: true,
  }
});

const computedEmbedUrl = computed(() => {
  if (props.platform === 'youtube') {
    return `https://www.youtube.com/embed/${props.videoId}`;
  } else if (props.platform === 'ted') {
    return `https://embed.ted.com/talks/${props.videoId}`;
  }
  return '';
});
</script>

<style scoped>
.video-embed {
  background-color: white;
  border-radius: 8px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.video-embed:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 15px rgba(0, 0, 0, 0.1);
}

.video-container {
  position: relative;
  padding-bottom: 56.25%; /* 16:9 aspect ratio */
  height: 0;
  overflow: hidden;
}

iframe {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
}

.video-title {
  padding: 1rem;
  margin: 0;
  font-size: 1rem;
  color: #1f2937;
  text-align: center;
}
</style>
