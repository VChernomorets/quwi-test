<template>
  <div class="projects">
    <ProjectCard v-for="item in projects" :data="item" :key="item.id" @update="getProjects()" />
  </div>
</template>

<script>
import ProjectCard from "./ProjectCard.vue";
import {mapFields} from "vuex-map-fields";

export default {
  name: 'ProjectCards',
  components: {ProjectCard},
  computed: {
    ...mapFields('project', {
      projects: 'projects'
    })
  },
  mounted() {
    this.getProjects()
  },
  methods: {
    getProjects() {
      this.$store.dispatch('project/getProjects', {
        filters: {
          is_active: 1
        },
        sort: 'dta_create'
      })
    }
  }
}
</script>


<style scoped>
.projects {
  margin: 0 auto;
  padding: 0 20px;
  display: flex;
  flex-direction: column;
  align-items: center;
}
</style>
