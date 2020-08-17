<template>
  <div class="form-holder">
    <form @submit.prevent='search' class="form" autocomplete="on">
        
          <input type="text" v-model="searchInput" :placeholder="placeholder"/>
          <button type="submit" class="button primary">
            <slot>search</slot>
          </button>
        
      </form>
    </div>
</template>


<script lang="ts">

import Vue from 'vue'

export default Vue.extend ({
  name: 'Form',
  props: {
    placeholder: {
      type: String,
      default: 'Search ...'}
  },
  data() {
    return {
      searchInput: ''
    }
  },
  methods: {
    search(){
      this.$emit('onSearch', this.searchInput)
    }
  }

});
</script>


<style scoped lang='scss'>

    @import './src/assets/variables';

  .form-holder{
    margin-bottom: 2rem;
    display: flex;
    justify-content: center;

    .form{
      line-height: 30px;
      font-size: 24px;
      display: inline-flex;
      width: 30%;

      @media screen and (max-width: 700px) {
        width: 100%;
      }

      input{
        font-size: inherit;
        flex-grow: 1;
        transition: $transtion-rule;
        &:not(:last-child){
          margin-right: -2px;
        }
        &:focus{
          border-color: $secondary;
        }
      }
      button{
        background: $primary;
      }
      
    }

   

  }
</style>
