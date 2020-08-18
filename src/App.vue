<template>
  <div id="app" class="container"> 

    <div>
    
      <Form @onSearch='searchByTags' placeholder="Search by tags ..."/>

      <section class="img_list">
        <ImageCard v-for="item of list" :key="item.id" :item='item'/>
      </section>
    </div>

    <Loading :loading="loading"></Loading>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import ImageCard, {Item} from './components/ImageCard.vue';
import Form from './components/Form.vue';
import Loading from './components/Loading.vue';
import {serializeArg} from './utils'

// https://www.flickr.com/services/api/explore/flickr.photos.search

export default Vue.extend({
  name: 'App',
  components: {
    ImageCard,
    Form,
    Loading
  },
  data() {
    return {
      loading: true,
      list: [] as Item[],
      params: {
        'method': 'flickr.photos.search',
        'format': 'json',
        'api_key': "4a6f65874e122e67d2d94291d8141686",
        'nojsoncallback': true,
        'extras': 'tags',
        'tags': '*',
        'page': 1
      }
    }
  },
  watch:{
    params:{
      handler(){
        // watch params and fetch list if params are changed
        this.fetchList()
      },
      deep: true
       
    }
  },
  async created(){
    this.fetchList()
  },
  methods: {
    async fetchList(){
      try{
        this.loading = true

        const requestURL = `https://www.flickr.com/services/rest/?${serializeArg(this.params)}`
        
        const options = {
          "method": "GET",
          "headers": {
            "Content-Type": "application/x-www-form-urlencoded"
          },
        }
        const res = await fetch(requestURL, options)

        if(!res.ok)
          return

        const json = await res.json();
      
        if(!json)
          return

        this.list.push(...json.photos.photo)
        
      }catch(e){
        // TODO: show Error state for user. Fx toast or notification
        throw Error(`${e.message}`)
      }finally{
        this.loading = false
      }
    },

    searchByTags(tags: string) {

      if(!tags && tags == '')
        return

      // Trigger method fetchList if params changed
      this.$set(this.params, 'tags', tags)

    }
  }
});

</script>


<style lang="scss">

  .container {
    padding: 5rem;

    @media screen and (max-width: 700px){
      padding: 2rem;
    }
  }

  .img_list {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: center;
  }

</style>
