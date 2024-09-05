<template>
  <div style="padding: 4em 5%;">
    <h2>How to Learn Fast</h2>
    <p>Here are some resources to help you learn fast:</p>
    <div class="video-grid">
      <VideoEmbed v-for="result in results"
                  :video-id="result.videoId"
                  :platform="result.platform"
                  :title="result.title"
                  :key="result.id"
      />
    </div>
  </div>
</template>

<script setup lang="ts">

import {ref} from "vue";

interface ContentItem {
  id: number
  title: string
  videoId: string
  platform: string
}

const results = ref<ContentItem[]>([
    {id: 0, title: '30 歲身價 40 億的成功心法，改變我一生的 8 大法則', videoId: '70ZLzPNxsXI', platform: 'youtube'},
    {id: 1, title: '【深聊】为什么不存在"向上社交"? 分享几个我的故事', videoId: 'zUcU-B-bfrg', platform: 'youtube'},
    {id: 2, title: 'The last 6 decades of AI — and what comes next', videoId: 'ray_kurzweil_the_last_6_decades_of_ai_and_what_comes_next', platform: 'ted'},
    {id: 3, title: '30 歲身價 40 億的成功心法，改變我一生的 8 大法則', videoId: '70ZLzPNxsXI', platform: 'youtube'},
    {id: 4, title: '【深聊】为什么不存在"向上社交"? 分享几个我的故事', videoId: 'zUcU-B-bfrg', platform: 'youtube'},
    {id: 5, title: 'The last 6 decades of AI — and what comes next', videoId: 'ray_kurzweil_the_last_6_decades_of_ai_and_what_comes_next', platform: 'ted'},
])

</script>

<style>
.video-grid {
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 20px;
}

@media (max-width: 992px) {
  .video-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (max-width: 600px) {
  .video-grid {
    grid-template-columns: 1fr;
  }
}
</style>
