<template>
    <nav>
        <v-navigation-drawer v-model="drawer" class="primary" app dark>
            <v-btn icon @click="drawer = !drawer">
                <v-icon>mdi-arrow-left</v-icon>
            </v-btn>
            
            <v-layout column align-center>
                <v-flex class="mt-5 text-center">
                    <v-avatar size="100">
                        <img src="/img/avatar-1.png">
                    </v-avatar>
                    <div class="white--text subtitle-1 font-weight-bold mt-3">
                        Rakasiwi Surya
                    </div>
                    <div class="white--text subtitle-1">
                        rakasiwisurya@vuetify.com
                    </div>
                </v-flex>
                <v-flex class="mt-3 mb-4">
                    <Popup />
                </v-flex>
            </v-layout>

            <v-divider></v-divider>

            <v-list flat dense>
                <v-list-item-group>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route">
                        <v-list-item-icon>
                            <v-icon> {{ link.icon }} </v-icon>
                        </v-list-item-icon>

                        <v-list-item-content>
                            <v-list-item-title>{{ link.text }}</v-list-item-title>
                        </v-list-item-content>
                    </v-list-item>
                </v-list-item-group>
            </v-list>
        </v-navigation-drawer>

        <v-app-bar flat app class="grey lighten-4">
            <v-app-bar-nav-icon class="grey--text" @click="drawer = !drawer"></v-app-bar-nav-icon>
            <v-toolbar-title class="text-uppercase grey--text">
                <span class="font-weight-light">Todo</span>
                <span>App</span>
            </v-toolbar-title>

            <v-spacer></v-spacer>

            <!-- Dropdown Menu -->
            <v-menu offset-y>
                <template v-slot:activator="{ on }">
                    <v-btn text color="grey" v-on="on">
                        <v-icon left>expand_more</v-icon>
                        <span>Menu</span>
                    </v-btn>
                </template>
                <v-list>
                    <v-list-item v-for="link in links" :key="link.text" router :to="link.route" >
                        <v-list-item-title>{{ link.text }}</v-list-item-title>
                    </v-list-item>
                </v-list>
            </v-menu>

            <v-btn text color="grey">
                <span>Sign Out</span>
                <v-icon right>exit_to_app</v-icon>
            </v-btn>
        </v-app-bar>
    </nav>
</template>

<script>
import Popup from './Popup'

export default {
    components: {
        Popup,
    },
    data() {
        return {
            drawer: false,
            links: [
                { icon: 'dashboard', text: 'Dashboard', route: '/' },
                { icon: 'folder', text: 'Projects', route: '/projects' },
                { icon: 'person', text: 'Team', route: '/team' },
            ],
        }
    },
}
</script>