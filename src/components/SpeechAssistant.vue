<template>
  <div class="speech-assistant">
    <div class="wave" :class="{ talking: isTalking }" />
  </div>
</template>

<script>
  export default {
    name: 'speech-assistant',
    props: {
      speak: String,
      lang: {
        type: String,
        default: 'en-US'
      },
      pitch: {
        type: Number,
        default: 1
      },
      rate: {
        type: Number,
        default: 1
      },
    },
    data() {
      return {
        synth: window.speechSynthesis,
        voice: undefined,
        isTalking: false,
        timer: undefined
      }
    },
    mounted() {
      // Select voice with corresponding Language
      for (let voice of this.synth.getVoices()) {
        console.log(voice)
        if (voice.lang == this.lang) {
          this.voice = voice
          break
       }
      }
      // Set timer to check if it is speaking or not
      this.timer = setInterval(() => { this.isTalking = this.synth.speaking }, 1000)
    },
    watch: {
      speak(value) {
        // Stop if one is already playing
        this.synth.cancel()
        // Speak new utterance
        const utterance = new SpeechSynthesisUtterance(value)
        utterance.pitch = this.pitch
        utterance.rate = this.rate
        utterance.voice = this.voice
        this.isTalking = true
        this.synth.speak(utterance)
      }
    },
    destroyed() {
      clearInterval(this.timer)
    }
  }
</script>

<style lang="scss" scoped>
  .speech-assistant {
    position: fixed;
    right: -20px;
    bottom: 20%;
    width: 100px;
    height: 100px;
    border-radius: 100%;
    overflow: hidden;

    padding: 24px;
    box-shadow: 0 8px 40px -10px #333;

    .wave {
      position: relative;
      margin-left: 20px;
      width: 6px;
      height: 50px;
      background-color: #aaa;
      animation: none;

      &::before, &::after {
        content: '';
        display: block;
        position: absolute;
        top: 12px;
        width: 6px;
        height: 30px;
        background-color: #aaa;
        animation: none;
      }

      &::before {
        right: 16px;
      }

      &::after {
        left: 16px;
      }

      &.talking {
        background-color: green;
        animation: wave-inner .5s alternate infinite;

        &::before, &::after {
          animation: wave-outer .5s alternate infinite;
        }

        &::before {
          background-color: blue;
        }

        &::after {
          background-color: red;
        }
      }
    }
  }

  @keyframes wave-inner {
    from { height: 50px; top: 0; }
    to { height: 26px; top: 12px; }
  }

  @keyframes wave-outer {
    from { height: 30px; top: 12px; }
    to { height: 10px; top: 8px; }
  }
</style>