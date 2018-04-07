<template>

<v-flex xs6 sm6 md6 class="space-right">
  <draggable v-model="stories" @start="drag=true" @end="drag=false">
    <v-text-field solo v-model="story.name" v-for="story in stories" v-bind:key="story['id']" class="space-bottom-x1" />
  </draggable>
</v-flex>

</template>

<script>
import draggable from "~/node_modules/vuedraggable/dist/vuedraggable.js";
export default {
  components: {
    draggable
  },
  data: function() {
    return {
      stories: [
        { id: 1, name: "モックを作成する" },
        { id: 2, name: "モックを作成する" }
      ]
    };
  }
};
</script>
