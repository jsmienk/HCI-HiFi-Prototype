<template>
  <div class="screensaver">
    <IndexIndicator class="screensaver-index-indicator" :size="ad_list.length" :active="currentIndex" @on-index-click="onIndexClick" />
    <div class="screensaver-carousel">
      <div class="screensaver-container">
        <div class="screensaver-slide" v-for="(ad, index) in ad_list" :key="ad.id">
          Slide {{ index }}
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  // https://github.com/davidcetinkaya/embla-carousel
  import EmblaCarousel from 'embla-carousel'
  import IndexIndicator from '@/components/screensaver/IndexIndicator.vue'

  // Dummy JSON data
  import data from "@/dummy.js"

  export default {
    name: 'screensaver',
    components: {
      IndexIndicator
    },
    data() {
      return {
        currentIndex: 0,
        delay_ms: 5000,
        carousel: undefined,
        timer: undefined,
        ad_list: data.recipes  /* TODO: change to 'ads' */
      }
    },
    mounted() {
      this.carousel = EmblaCarousel(document.querySelector('.screensaver-carousel'), { loop: true })
      this.timer = setInterval(this.carousel.scrollNext, this.delay_ms)
      this.carousel.on('select', () => {
        this.currentIndex = this.carousel.selectedScrollSnap()
      })
    },
    methods: {
      onIndexClick(index) {
        this.carousel.scrollTo(index)
      }
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss">
  .screensaver {
    .screensaver-index-indicator {
      height: 16px;
      padding: 32px;
      text-align: center;
    }

    .screensaver-carousel {
      overflow: hidden;

      .screensaver-container {
        display: flex;

        .screensaver-slide {
          position: relative; /* Needed if loop: true */
          flex: 0 0 100%; /* Choose any slide width */
          border: 1px solid red;
          height: calc(100vh - 64px);
          padding: 32px;
        }
      }
    }
  }
</style>