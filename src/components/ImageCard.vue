<template>
  <article class="card-holder">
    
    <div class="image-holder" 
      :style="{ backgroundImage: `url(${imageURL})` }">

    </div>

    <div class="meta" v-if="item.tags">{{'#'+item.tags.split(' ').join(' #')}}</div>
  </article>
</template>


<script lang="ts">

import Vue from 'vue'

export interface Item {
  id: string;
  owner: string;
  secret: string;
  server: string;
  farm: number;
  title: string;
  ispublic: number;
  isfriend: number;
  isfamily: number;
}

export default Vue.extend ({
  name: 'ImageCard',

  props: {
    item: {
      type: Object as () => Item
    }
  },
  computed:{
    imageURL(){
      const item = this.item
      return `https://farm${item.farm}.staticflickr.com/${item.server}/${item.id}_${item.secret}_n.jpg`
    }
  }


});
</script>


<style scoped lang='scss'>

@import './src/assets/variables';

  .card-holder{
    width: 350px;
    overflow: hidden;
    border: 1px solid rgba($secondary, 0.5);
    box-shadow: $box-shadow;
    transition: $transtion-rule;
    margin-right: 2em;
    margin-bottom: 2em;
    position: relative;

    &:last-child{
      margin-right: 0;
    }

    &:hover{
      transform: scale(1.1);

      .meta{
        opacity: 1;
        transform: translateZ(0);
      }
    }

    .meta {
      padding: 5px;
      background: darken($secondary, 0.5);
      color: $white;
      font-size: 80%;
      opacity: 0;
      bottom: 0;
      position: absolute;
      left: 0;
      right: 0;
      transition: all 1.5s;
    }

    .image-holder{
      width: 100%;
      height: 250px;
      background: $secondary;
      background-size: cover;
      background-repeat: no-repeat;
      transition: $transtion-rule;
    }
  }
</style>
