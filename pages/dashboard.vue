<template>
  <div class="dashboard">
    <div class="">
      <ProjectCards />
    </div>
  </div>
</template>

<script>
import BaseInput from "../components/ui/BaseInput.vue";
import ProjectCards from "../components/ui/project/ProjectCards.vue";

export default {
  name: 'IndexPage',
  components: {ProjectCards, BaseInput},
  layout: 'default',
}
</script>


<style scoped>

  * {
    box-sizing: border-box;
  }



</style>
