<template>
  <div class="screensaver">
    <!-- Carousel index indicator -->
    <IndexIndicator class="screensaver-index-indicator" :size="ad_list.length" :active="currentIndex" @on-index-click="onIndexClick" />
    <!-- Carousel -->
    <div class="screensaver-carousel">
      <div class="screensaver-container">
        <!-- Ads -->
        <a class="screensaver-slide" v-for="ad in ad_list" :key="ad.id" :href="getRecipeLink(ad.id)">
          <!-- Title -->
          <h1>{{ ad.title }}</h1>
          <!-- Image -->
          <div class="hero" :style="getImageStyle(ad.image)" />
        </a>
      </div>
    </div>

    <div class="screensaver-info">
      <!-- Back to home -->
      <a class="button home-button" href="/home">Home</a>
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
        ad_list: data.ads  /* TODO: change to 'ads' */
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
      },
      getImageStyle(image) {
        return 'background-image: url("' + image + '");'
      },
      getRecipeLink(id) {
        return '/recipe/' + id
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
      height: 0px;
      padding: 32px;
      text-align: center;
    }

    .screensaver-carousel {
      overflow: hidden;

      .screensaver-container {
        display: flex;

        .screensaver-slide {
          display: block;
          position: relative; /* Needed if loop: true */
          flex: 0 0 100%; /* Choose any slide width */
          height: calc(100vh - 264px);
          padding: 32px;

          text-decoration: none;
          color: #333;

          .hero {
            overflow: hidden;
            border-radius: 12px;
            box-shadow: 0px 4px 12px 0px #999;

            height: 600px;
            width: 100%;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
          }
        }
      }
    }

    .screensaver-info {
      text-align: center;
      margin-top: 32px;

      .button.home-button {
        background-color: orange;
        color: white;
      }
    }
  }
</style>