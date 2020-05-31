<template>
    <v-dialog max-width="600px" >
        <template v-slot:activator="{ on }">
            <v-btn text class="success" v-on="on">Add New Project</v-btn>
        </template>
        <v-card>
            <v-card-title class="title font-weight-bold">
                Add A New Project
            </v-card-title>
            <v-card-text>
                <v-form class="px-3">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit"></v-textarea>

                    <v-menu :close-on-content-click="false" v-model="menuDatePicker" transition="scale-transition" offset-y>
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="due" label="Due Date" prepend-icon="date_range" v-on="on"></v-text-field>
                        </template>
                        <v-date-picker v-model="due" @input="menuDatePicker = false"></v-date-picker>
                    </v-menu>

                    <v-btn text class="success mx-0 mt-3" @click="submit">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>

export default {
    data() {
        return {
            title: '',
            content: '',
            due: null,
            menuDatePicker: '',
        }
    },
    methods: {
        submit(){
            console.log(this.title, this.content, this.due)
        }
    },
}
</script>