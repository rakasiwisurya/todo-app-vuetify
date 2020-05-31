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

    </v-container>
    
  </div>
</template>

<script>

export default {
  name: "Projects",
  data() {
    return {
      projects:[
        {title: 'Design a plan of website', person: 'Rakasiwi Surya', due: '27th May 2020', status: 'overdue', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the dashboard page', person: 'Erik Prasetya', due: '15th Oct 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the projects page', person: 'Rey', due: '15th Oct 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Code up the team page', person: 'Ikbal Aziz', due: '15th Oct 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Design mockup website', person: 'Robi Habibulloh', due: '1st Jun 2020', status: 'complete', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
        {title: 'Design a plan of website... Again', person: 'Rakasiwi Surya', due: '1st June 2020', status: 'ongoing', content: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Beatae facere, magnam consectetur est molestiae in unde, veniam exercitationem aperiam natus quia blanditiis id saepe. Optio impedit enim veniam deserunt? Et?'},
      ],
    }
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