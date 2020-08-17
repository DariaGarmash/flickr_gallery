<template>
  <div class="loading" :class="{'active': loading}">

    Loading ...
    
    </div>
</template>


<script lang="ts">

import Vue from 'vue'

export default Vue.extend ({
  name: 'Loading',
  props: {
    loading: {
      type: Boolean
    }
  },

});
</script>


<style scoped lang='scss'>

  @import './src/assets/variables';

  .loading{
    position: fixed;
    left: 0;
    top: 0;
    right: 0;
    bottom: 0;
    height: 100vh;
    z-index: 99999!important;
    width: 100%;
    display: flex;
    align-items: center;
    justify-content: center;
    display: none;
    color: $white;
   
    &.active{
      display: flex;
      background: rgba($secondary, 0.5);
    }
  }
</style>
