<template>
  <div id="app" class="container"> 

    <div v-if="!loading">
    
      <Form @onSearch='search'/>

      <section class="img_list">
        <ImageCard v-for="item of list" :key="item.id" :item='item'/>
      </section>
    
    </div>

    <div v-else>
     loading? : {{loading}}
    </div>
  </div>
</template>

<script lang="ts">

import Vue from 'vue'
import ImageCard, {Item} from './components/ImageCard.vue';
import Form from './components/Form.vue';
import {serializeArg} from './utils'

// https://www.flickr.com/services/api/explore/flickr.photos.search

export default Vue.extend({
  name: 'App',
  components: {
    ImageCard,
    Form
  },
  data() {
    return {
      loading: true,
      list: [] as Item[],
      searchInput: ''
    }
  },
  async created(){
    this.fetchList()
  },
  methods: {
    async fetchList(tags = '*'){
      try{
        this.loading = true

        const params = {
          'method': 'flickr.photos.search',
          'format': 'json',
          'api_key': "4a6f65874e122e67d2d94291d8141686",
          'nojsoncallback': true,
          'extras': 'tags',
          'tags': tags
        }

        const requestURL = `https://www.flickr.com/services/rest/?${serializeArg(params)}`
        
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

        this.list = json.photos.photo
        
      }catch(e){
        throw Error(`${e.message}`)
      }finally{
        this.loading = false
      }
    },

    search(searchInput: string) {
      if(!searchInput && searchInput == '')
        return

      this.fetchList(searchInput)
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
