<!-- I adjusted the HelloWorld.vue component, to include the component in counter.js -->
<template>
  <div class="counter">
            <span id="count" class="count">{{ count }}, {{ initCount }}</span>
            <button v-on:click="increment">Add</button>
    </div>
</template>

<script>
export default {
  name: 'counter',
  props: {
        initCount: {
            type: Number,
            default: 0,
        }
    },
    data: function(){
        return {count: 0};
    }, 
    methods: {
        increment: function(){
            this.count++;
        }
    },
    computed: {
        totalCount: function(){
            return this.initCount + this.count;
        }
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .counter {
      border: 1px solid gray;
      padding: 10px;
  }
  .count {
      margin-right: 10px;
  }
</style>
