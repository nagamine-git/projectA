<template>
  <draggable v-model="tasks" @start="drag=true" @end="drag=false">
    <v-list v-for="task in getTasksByStoryId(current_story_id)" v-bind:key="task['id']">
      <v-layout row align-center>
        <v-text-field v-model="task['name']"></v-text-field>
        <v-checkbox :style="{'flex': 0,'margin-left': '5px'}" v-model="task['done']" hide-details class="shrink mr-2" />
      </v-layout>
    </v-list>
  </draggable>
</template>

<script>
  import draggable from "~/node_modules/vuedraggable/dist/vuedraggable.js";
  import { mapState, mapGetters } from 'vuex';
  export default {
    components: {
      draggable
    },
    computed: {
      ...mapState({
        tasks: state => {
          return state.Tasks
        },
        current_story_id: state => {
          return state.CurrentStoryId
        }
      }),
      ...mapGetters([
        'getTasksByStoryId'
      ])
    }
  };
</script>
