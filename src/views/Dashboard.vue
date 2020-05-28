<template>
  <div class="dashboard">
    <h1 class="subtitle-1 grey--text">Dashboard</h1>

    <v-container class="my-5">
      
      <v-card flat class="px-3 mx-5 pink lighten-5" v-for="project in projects" :key="project.title">
        <v-layout row wrap :class="`pa-3 project ${project.status}`">
          <v-flex xs12 md6>
            <div class="caption pink--text">Project Title</div>
            <div class="grey--text text--darken-2">{{ project.title }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption pink--text">Person</div>
            <div class="grey--text text--darken-2">{{ project.person }}</div>
          </v-flex>

          <v-flex xs6 sm4 md2>
            <div class="caption pink--text">Due By</div>
            <div class="grey--text text--darken-2">{{ project.due }}</div>
          </v-flex>

          <v-flex xs12 sm4 md2>
            <div class="caption pink--text">Status</div>
            <div class="grey--text text--darken-2">{{ project.status }}</div>
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
        {title: 'Design a plan of website', person: 'Rakasiwi Surya', due: '27th May 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the dashboard page', person: 'Erik Prasetya', due: '15th Oct 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the projects page', person: 'Rey', due: '15th Oct 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the team page', person: 'Ikbal Aziz', due: '15th Oct 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Design mockup website', person: 'Robi Habibulloh', due: '1st Jun 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
      ]
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

</style>>