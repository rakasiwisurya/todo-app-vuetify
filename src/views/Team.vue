<template>
  <div class="team">
    <h1 class="subtitle-1 grey--text">Team</h1>

    <v-container class="my-5">
      
      <v-layout row wrap>
        <v-flex xs12 sm6 md4 lg3 v-for="person in team" :key="person.name">
          <v-card flat class="text-center ma-3">
            <v-responsive class="pt-4">
              <v-avatar size="100" class="grey lighten-2">
                <img :src="person.avatar">
              </v-avatar>
            </v-responsive>
            <v-card-text>
              <div class="subtitle-1">{{ person.name }}</div>
              <div class="grey--text">{{ person.role }}</div>
            </v-card-text>
            <v-card-actions>
              <v-btn text color="grey">
                <v-icon small left>message</v-icon>
                <span>Message</span>
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-flex>
      </v-layout>

    </v-container>

  </div>
</template>

<script>

export default {
  name: "Team",
  data() {
    return {
      team:[
        {name: 'Rakasiwi Surya', role: 'Frontend Web Developer', avatar: '/img/avatar-1.png'},
        {name: 'Erik Prasetya', role: 'Android Developer', avatar: '/img/avatar-2.png'},
        {name: 'Rey', role: 'Backend Web Developer', avatar: '/img/avatar-3.png'},
        {name: 'Ikbal Aziz', role: 'Network Engineer', avatar: '/img/avatar-4.png'},
        {name: 'Robi Habibulloh', role: 'UI/UX', avatar: '/img/avatar-5.png'},
      ]
    }
  },
};
</script>