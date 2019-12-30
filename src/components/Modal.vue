<template>
	<div ref="modal" class="modal">
   <div class="modal-content">
    <!-- Header -->
    <div class="modal-header">
      <span class="close" @click="close">&times;</span>
      <h2>{{ header }}</h2>
    </div>
    <!-- Body -->
    <div class="modal-scroller">
      <div class="modal-body">
        <!-- Dynamic content -->
        <slot></slot>
      </div>
    </div>
    <div class="modal-footer">
      <!-- Close button -->
      <a class="button main-button" href="#" @click="close">{{ closeText }}</a>
    </div>
   </div> 
  </div>
</template>

<script>
  export default {
    name: 'modal',
    props: {
      header: {
        default: 'Information',
        type: String
      },
      closeText: {
        default: 'Done',
        type: String
      }
    },
    mounted() {
      window.onclick = () => {
        if (event.target == this.$refs.modal) {
          this.close()
        }
      }
    },
    methods: {
      open() {
        this.$refs.modal.style.display = 'block'
      },
      close() {
        this.$refs.modal.style.display = 'none'
      }
    }
  }
</script>

<style lang="scss">
  .modal {
    display: none; /* Hidden by default */
    position: fixed; /* Stay in place */
    z-index: 1; /* Sit on top */
    left: 0;
    top: 0;
    width: 100%; /* Full width */
    height: 100%; /* Full height */
    overflow: auto; /* Enable scroll if needed */
    background-color: rgb(0,0,0); /* Fallback color */
    background-color: rgba(0,0,0,0.4); /* Black w/ opacity */

    .modal-content {
      position: relative;
      margin: auto;
      padding: 0;
      width: 80%;
      height: 80%;
      top: 80px;

      overflow: hidden;
      border-radius: 16px;
      background-color: #fefefe;
      box-shadow: 0 4px 8px 0 rgba(0,0,0,0.2), 0 6px 20px 0 rgba(0,0,0,0.19);
      
      animation-name: animatetop;
      animation-duration: 0.5s
    }

    .modal-header {
      margin: 24px 32px 16px;
      border-bottom: 1px solid #666;

      .close {
        color: #999;
        float: right;
        font-size: 28px;
        font-weight: bold;
      }

      .close:hover,
      .close:focus {
        color: black;
        text-decoration: none;
        cursor: pointer;
      }
    }

    .modal-scroller {
      overflow: scroll;
      height: calc(100% - 172px);
      margin-bottom: 16px;

      .modal-body {
        padding: 16px 32px;
      }
    }

    .modal-footer {
      text-align: center;
    }
  }

  @keyframes animatetop {
    from { opacity: 0 }
    to { opacity: 1 }
  }
</style>