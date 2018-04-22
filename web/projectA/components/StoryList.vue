<template>
  <v-flex xs6 sm6 md6 class="space-right">
    <draggable v-model="stories" @start="drag=true" @end="drag=false">
      <v-text-field solo v-model="story.name" v-if="!story.is_delete" v-for="story in stories" :key="story.id" @click="setCurrentStory(story.id)" class="space-bottom-x1" />
    </draggable>
  </v-flex>
</template>

<script>
  import draggable from "~/node_modules/vuedraggable/dist/vuedraggable.js";
  import { mapState, mapMutations } from 'vuex';
  export default {
    components: {
      draggable
    },
    computed: mapState({
      stories: state => state.Stories
    }),
    methods: {
      ...mapMutations({
        setCurrentStory: 'setCurrentStory'
      })
    }
  };
</script>
