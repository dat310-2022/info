<template>
    <div class="counter_container">
        <counter v-bind:init-count="count"></counter>
        <counter v-bind:init-count="count"></counter>
        <counter v-bind:init-count="count"></counter>
    </div>
</template>

<script>
import counter from './components/Counter.vue'

// the object below replaces the main component, located in index.html in the old example.
export default {
  name: 'App',
  components: {
    counter
  },
  data() { 
    return {
      count: 1
    }
  }
}
</script>

<style>
  .counter {
      border: 1px solid gray;
      padding: 10px;
  }
  .count {
      margin-right: 10px;
  }
  .counter_container {
      width: 300px;
      margin: 30px auto;
  }
  .counter_container>* {
      margin-bottom: 30px;
  }
</style>
