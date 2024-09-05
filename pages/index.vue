<template>
  <div>
    <Hero />
    <Categories />
    <section class="featured-content container">
      <h2>Featured Content</h2>
      <div class="video-grid">
        <VideoEmbed
          v-for="video in featuredVideos"
          :key="video.id"
          :video-id="video.videoId"
          :platform="video.platform"
          :title="video.title"
        />
      </div>
    </section>
  </div>
</template>

<script setup>
import { ref } from 'vue'

const featuredVideos = ref([
  { id: 1, title: '30 歲身價 40 億的成功心法，改變我一生的 8 大法則', videoId: '70ZLzPNxsXI', platform: 'youtube' },
  { id: 2, title: '【深聊】为什么不存在"向上社交"? 分享几个我的故事', videoId: 'zUcU-B-bfrg', platform: 'youtube' },
  { id: 3, title: 'The last 6 decades of AI — and what comes next', videoId: 'ray_kurzweil_the_last_6_decades_of_ai_and_what_comes_next', platform: 'ted' },
])
</script>

<style scoped>
.featured-content {
  padding: 4rem 5%;
}

h2 {
  text-align: center;
  font-size: 2.5rem;
  margin-bottom: 2rem;
}

.video-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
}

@media (max-width: 768px) {
  .featured-content {
    padding: 2rem 5%;
  }

  h2 {
    font-size: 2rem;
  }

  .video-grid {
    grid-template-columns: 1fr;
  }
}
</style>