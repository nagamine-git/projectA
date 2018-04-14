<template>
  <v-content>
    <v-container>
      <nav-bar />
      <side-bar />
      <add-box />
      <v-layout row class="space-top-x2">
        <story-list class="space-right-x2" />
        <story-detail />
      </v-layout>
    </v-container>
  </v-content>
</template>

<style>
  .space-bottom-x1 {
    margin-bottom: 8px;
  }
  .space-right-x1 {
    margin-right: 8px;
  }
  .space-top-x2 {
    margin-top: 16px;
  }
  .space-right-x2 {
    margin-right: 16px;
  }
</style>

<script>
  import AddBox from "~/components/AddBox.vue";
  import StoryList from "~/components/StoryList.vue";
  import StoryDetail from "~/components/StoryDetail.vue";
  import NavBar from "~/components/NavBar.vue";
  import SideBar from "~/components/SideBar.vue";

  export default {
    components: {
      AddBox,
      StoryList,
      StoryDetail,
      NavBar,
      SideBar
    }
  }
</script>
