<template>
  <div>
    <add-box />
    <v-layout row class="space-top">
      <v-flex xs6 sm6 md6 class="space-right">
          <story-list v-for="story in stories" v-bind:key="story"/>
      </v-flex>
      <v-flex xs6 sm6 md6 class="space-right">
        <story-detail />
      </v-flex>
    </v-layout>
  </div>
</template>

<script>
import AddBox from "~/components/AddBox.vue";
import StoryList from "~/components/StoryList.vue";
import StoryDetail from "~/components/StoryDetail.vue";

export default {
  components: {
    AddBox,
    StoryList,
    StoryDetail
  },
  data: function() {
    return {
      stories: [
        { name: "1" },
        { name: "2" },
        { name: "3" }
      ]
    };
  }
};
</script>
