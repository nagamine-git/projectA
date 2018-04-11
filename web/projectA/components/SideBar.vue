<template>
  <v-navigation-drawer dark fixed v-model="drawer" app>
    <v-list dense>
      <draggable v-model="projectArrey" @start="drag=true" @end="drag=false">
        <div v-for="project in projectArrey" :key="project['id']">
          <v-list-tile>
            <v-list-tile-action>
              <v-icon>class</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>{{ project.name }}</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </div>
      </draggable>
    </v-list>
  </v-navigation-drawer>
</template>

<style>

</style>

<script>
import draggable from "~/node_modules/vuedraggable/dist/vuedraggable.js";
export default {
  components: {
    draggable
  },
  data: function() {
    return {
      projectArrey: [{ id: 1, name: "ProjectA" }, { id: 2, name: "ProjectB" }],
      drawer: true
    };
  }
};
</script>
