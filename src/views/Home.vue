<template>
  <div class="home">
     <navHead/>
     <mainContent/>
  </div>
</template>

<script>
import navHead from '../components/navHead.vue';
import mainContent from '../components/mainContent.vue'

export default {
  name: "home",
  components: {
   navHead,
   mainContent
  }
};
</script>

<style scoped>

</style>
