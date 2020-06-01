<template>
    <v-dialog max-width="600px" v-model="dialog">
        <template v-slot:activator="{ on }">
            <v-btn text class="blue accent-1" v-on="on">Add New Project</v-btn>
        </template>
        <v-card>
            <v-card-title class="title font-weight-bold">
                Add A New Project
            </v-card-title>
            <v-card-text>
                <v-form class="px-3" ref="form">
                    <v-text-field label="Title" v-model="title" prepend-icon="folder" :rules="inputRules"></v-text-field>
                    <v-textarea label="Information" v-model="content" prepend-icon="edit" :rules="inputRules"></v-textarea>

                    <v-menu :close-on-content-click="false" min-width="290px" v-model="menuDatePicker" transition="scale-transition">
                        <template v-slot:activator="{ on }">
                            <v-text-field v-model="due" label="Due Date" prepend-icon="date_range" v-on="on" :rules="inputRules"></v-text-field>
                        </template>
                        <v-date-picker v-model="due" @input="menuDatePicker = false"></v-date-picker>
                    </v-menu>

                    <v-btn depressed class="info white--text mx-0 mt-3" @click="submit" :loading="loading" :disabled="loading">Add Project</v-btn>
                </v-form>
            </v-card-text>
        </v-card>
    </v-dialog>
</template>

<script>
import db from '@/fb'

export default {
    data() {
        return {
            title: '',
            content: '',
            due: new Date().toISOString().substr(0, 10),
            menuDatePicker: '',
            inputRules: [
                v => v.length >=3 || 'Minimun length is 3 characters'
            ],
            loading: false,
            dialog: false,
        }
    },
    methods: {
        submit(){
            if (this.$refs.form.validate()){
                this.loading = true;

                const project = {
                    title: this.title,
                    content: this.content,
                    due: this.due,
                    person: 'Rakasiwi Surya',
                    status: 'ongoing'
                }

                db.collection('projects').add(project).then(() => {
                    this.loading = false;
                    this.dialog = false;
                    this.title = '';
                    this.content = '';
                    this.due = '';
                    this.$emit('projectAdded');
                })
            }
        }
    },
}
</script>