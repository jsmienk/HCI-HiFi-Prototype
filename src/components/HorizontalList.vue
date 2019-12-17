<template>
	<div class="item-scroller-container">
    <div class="item-scroller">
      <div class="item-container" :style="getContainerStyle()">
        <!-- Item frame -->
        <div v-for="item in items" :key="item.id" class="item">
          <span class="title">{{ item.title }}</span>
          <div class="thumbnail" :style="getBackgroundStyle(item.thumbnail)" />
        </div>
      </div>
    </div>
    <div class="left-gradient" />
    <div class="right-gradient" />
  </div>
</template>

<script>
  export default {
    name: 'horizontal-list',
    props: ['items'],
    methods: {
      getContainerStyle() {
        /*
        Total width is # x width + # x margin
        */
        return 'width: ' + (this.items.length * 136 + 48) + 'px;'
      },
      getBackgroundStyle(image) {
        return 'background-image: url("' + image + '");'
      }
    }
  }
</script>

<style lang="scss">
  $scroller-padding: 32px;
  $scroller-padding-big: 80px;
  $scroller-height: 130px;

  .item-scroller-container {
    position: relative;
    height: $scroller-height;

    .item-scroller {
      position: absolute;
      left: -$scroller-padding;
      top: 0;
      /* '# { }' needed inside calc() */
      width: calc(100% + #{$scroller-padding + $scroller-padding});
      overflow-x: auto;
      padding-bottom: 20px; /* scrollbar */

      .item-container {
        padding-left: $scroller-padding;

        .item {
          display: inline-grid;
          margin-right: 16px;
          max-width: 120px;

          .title {
            display: block;
            padding: 0 8px;
            font-size: 1.2em;
          }

          .thumbnail {
            overflow: hidden;
            margin: 8px 0;
            border-radius: 12px;
            box-shadow: 0px 4px 12px 0px #999;

            width: 120px;
            height: 70px;
            background-size: cover;
            background-repeat: no-repeat;
            background-position: 50% 50%;
            transition: transform 0.1s ease-in-out;
          }
        }
      }
    }

    .left-gradient, .right-gradient {
      position: absolute;
      width: $scroller-padding;
      height: calc(#{$scroller-height} + 10px);
      display: block;
    }

    .left-gradient {
      left: -$scroller-padding;
      background: linear-gradient(90deg, #fff, #ffffff00);
    }

    .right-gradient {
      right: -$scroller-padding;
      background: linear-gradient(-90deg, #fff, #ffffff00);
    }
  }
</style>