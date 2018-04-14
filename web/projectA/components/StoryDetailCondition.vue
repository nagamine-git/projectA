<template>
  <draggable v-model="conditions" @start="drag=true" @end="drag=false">
    <div v-for="condition in getConditionsByStoryId(current_story_id)" v-bind:key="condition['id']">
      <v-layout align-center>
        <v-text-field v-model="condition['name']"></v-text-field>
        <v-checkbox :style="{'flex': 0,'margin-left': '5px'}" v-model="condition['done']" hide-details class="shrink mr-2" />
      </v-layout>
    </div>
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
        conditions: state => {
          return state.Conditions
        },
        current_story_id: state => {
          return state.CurrentStoryId
        }
      }),
      ...mapGetters([
        'getConditionsByStoryId'
      ])
    }
  };
</script>
