<template>
  <div class="form-holder">
    <form @submit.prevent='search' class="form" autocomplete="on">
        
          <input type="text" v-model="searchInput" :placeholder="placeholder"/>
          <button type="submit" class="button">
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
      line-height: 1em;
      font-size: 1em;
      display: inline-flex;
      width: 30%;

      @media screen and (max-width: 700px) {
        width: 100%;
      }

      input{
        font-size: inherit;
        line-height: inherit;
        padding: 5px;
        flex-grow: 1;
        transition: $transtion-rule;
        border: $border-size solid rgba($secondary, 0.5);
        box-shadow: $box-shadow;
        color: $secondary;
        &:not(:last-child){
          margin-right: -($border-size);
        }
        &:focus{
          outline: rgba($primary, 0.2);
        }

      }
      .button{
        font-size: inherit;
        line-height: inherit;
        background: $primary;
        color: $white;
        margin: 0;
        border-color: transparent;
         &:focus{
          outline: none;
        }
      }
      
    }

   

  }
</style>
