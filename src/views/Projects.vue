<template>
  <div class="projects">
    <h1 class="subtitle-1 grey--text">Projects</h1>

    <v-container class="my-5">

      <v-expansion-panels>
        <v-expansion-panel v-for="project in myProjects" :key="project.title">
          <v-expansion-panel-header>{{ project.title }}</v-expansion-panel-header>
          <v-expansion-panel-content class="px-4 grey--text">
            <div class="font-weight-bold">{{ project.due }}</div>
            <div>{{ project.content }}</div>
          </v-expansion-panel-content>
        </v-expansion-panel>
      </v-expansion-panels>

      <v-menu v-model="menu1" :close-on-content-click="false" max-width="290">
        <template v-slot:activator="{ on }">
          <v-text-field :value="computedDateFormattedMomentjs" clearable label="Formatted with Moment.js" readonly v-on="on" @click:clear="date = null"></v-text-field>
        </template>
        <v-date-picker v-model="date" @change="menu1 = false"></v-date-picker>
      </v-menu>

    </v-container>
    
  </div>
</template>

<script>
import db from '@/fb'

export default {
  name: "Projects",
  data() {
    return {
      projects: [],
    }
  },
  created(){
    db.collection('projects').onSnapshot(res => {
      const changes = res.docChanges();

      changes.forEach(change => {
        if(change.type === 'added'){
          this.projects.push({
            ...change.doc.data(),
            id: change.doc.id
          })
        }
      });
    })
  },
  computed: {
    myProjects(){
      return this.projects.filter(project => {
        return project.person === 'Rakasiwi Surya'
      })
    }
  },
};
</script>