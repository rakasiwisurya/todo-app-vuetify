<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">

      <v-layout row class="mb-3">
        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('title')" v-on="on">
              <v-icon left small>folder</v-icon>
              <span class="caption text-lowercase">By project name</span>
            </v-btn>
          </template>
          <span>Sort project by project name</span>
        </v-tooltip>

        <v-tooltip top>
          <template v-slot:activator="{ on }">
            <v-btn small text color="grey" @click="sortBy('person')" v-on="on">
              <v-icon left small>person</v-icon>
              <span class="caption text-lowercase">By person name</span>
            </v-btn>
          </template>
          <span>Sort project by person name</span>
        </v-tooltip>
      </v-layout>
      
      <v-card flat class="px-3" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption grey--text">Project Title</div>
            <div>{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Person</div>
            <div>{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption grey--text">Due By</div>
            <div>{{ project.due }}</div>
          </v-flex>

          <v-flex xs12 sm4 md2>
            <div class="center">
              <v-chip small :class="`${project.status} white--text caption my-2`">{{ project.status }}</v-chip>
            </div>
          </v-flex>
        </v-layout>
        <v-divider></v-divider>
      </v-card>

    </v-container>

  </div>
</template>

<script>

export default {
  name: "Dashboard",
  data() {
    return {
      projects:[
        {title: 'Design a plan of website', person: 'Rakasiwi Surya', due: '2020-05-27', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the dashboard page', person: 'Erik Prasetya', due: '2020-10-15', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the projects page', person: 'Rey', due: '2020-10-15', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the team page', person: 'Ikbal Aziz', due: '2020-10-15', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Design mockup website', person: 'Robi Habibulloh', due: '2020-06-01', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
      ],
      inactive: false,
    }
  },
  methods: {
    sortBy(prop){
      this.projects.sort((a,b) => a[prop] < b[prop] ? -1 : 1)
    }
  },
};
</script>

<style>

.project.complete{
  border-left: 4px solid #3cd1c2;
}
.project.ongoing{
  border-left: 4px solid orange;
}
.project.overdue{
  border-left: 4px solid tomato;
}
.v-chip.complete{
  background: #3cd1c2 !important;
}
.v-chip.ongoing{
  background: #ffaa2c !important;
}
.v-chip.overdue{
  background: #f83e70 !important;
}

</style>>