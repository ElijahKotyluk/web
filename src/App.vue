<template>
  <div id="app">Hello {{ count }}</div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

const App = defineComponent({
  data() {
    return ({
      count: 0
    })
  }
})

export default App;
</script>