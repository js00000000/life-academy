<template>
  <div class="video-embed">
    <iframe
        width="560"
        height="315"
        :title="title"
        :src="computedEmbedUrl"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        referrerpolicy="strict-origin-when-cross-origin"
        allowfullscreen
    ></iframe>
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

<style>
.video-embed {
  text-align: center;
  margin: 20px auto;
}

iframe {
  max-width: 100%;
}
</style>
