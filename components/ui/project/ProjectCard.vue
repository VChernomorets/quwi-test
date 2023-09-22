<template>
  <div class="project-wrapper">
    <div class="project" @click="showEditModal()">
      <div class="project__info">
        <img :src="data.logo_url" :alt="data.name" class="project__info__logo">
        <div class="project__info__name">
          {{ data.name }}
        </div>
      </div>
      <div class="project__status" :class="[{'project__status-red': !data.is_active}]">
        {{ data.is_active ? 'Active' : 'Inactive' }}
      </div>
      <table class="project__time">
        <tr>
          <td>time this week</td>
          <td>0</td>
        </tr>
        <tr>
          <td>this month</td>
          <td>0</td>
        </tr>
        <tr>
          <td>total</td>
          <td>0</td>
        </tr>
      </table>
    </div>
    <BaseModal v-if="showEditProjectName" @close="showEditProjectName = false">
      <div class="edit">
        <BaseInput placeholder="Project name" :value="data.name" v-model="newProjectName" :error-text="errorText" @input="errorText=''" />
        <div class="edit__btn" @click="editProjectName">Update</div>
      </div>
    </BaseModal>
  </div>
</template>

<script>
import BaseModal from "../BaseModal.vue";
import BaseInput from "../BaseInput.vue";

export default {
  name: 'ProjectCard',
  components: {BaseInput, BaseModal},
  props: {
    data: {
      type: Object,
      required: true
    }
  },
  data(){
    return {
      showEditProjectName: false,
      newProjectName: '',
      errorText: ''
    }
  },
  methods: {
    editProjectName(){
      this.$store.dispatch('project/editProject', {
        id: this.data.id,
        name: this.newProjectName
      }).then(() => {
        this.$emit('update');
        this.showEditProjectName = false;
      }).catch(err => {
        this.errorText = err.response.data.first_errors.name;
      })
    },
    showEditModal(){
      this.showEditProjectName = true;
      this.newProjectName = this.data.name;
    }
  }
}
</script>


<style scoped>
.project-wrapper {
  max-width: 900px;
  width: 100%;
}

.project {
  margin: 30px 0;
  padding: 10px 20px;
  background: #fff;
  border: 1px solid rgba(0,0,0,.11);
  box-shadow: 0 0 12px rgba(0,0,0,.25);
  border-radius: 15px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  cursor: pointer;
}

@media screen and (max-width: 600px) {
  .project {
    flex-direction: column;
  }
}

.project__info {
  display: flex;
  align-items: center;
}

.project__info__logo {
  max-height: 150px;
}

.project__info__name {
  margin-left: 20px;
}

.project__status {
  color: green;
}

.project__status-red {
  color: red!important;
}

.project__time td {
  padding: 3px 10px;
}


.edit {
  display: flex;
  flex-direction: column;
  width: 100%;
}


.edit__btn {
  margin-bottom: 20px;
  border-radius: 5px;
  font-size: 18px;
  font-weight: 400;
  background: #c44512;

  padding: 15px 20px;
  color: #fff;
  line-height: 14px;
  cursor: pointer;
  width: max-content;
}

.edit__btn:hover {
  opacity: .7;
}

</style>
