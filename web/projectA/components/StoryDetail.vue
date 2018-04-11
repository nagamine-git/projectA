<template>

<v-flex xs6>
  <v-card>
    <v-container>
      <h4>目的</h4>
      <v-text-field v-model="story['purpose']"></v-text-field>
      <h4>達成条件</h4>
      <div v-for="goal in story['goals']" v-bind:key="goal['id']">
        <v-layout align-center>
          <v-text-field v-model="goal['name']"></v-text-field>
          <v-checkbox :style="{'flex': 0,'margin-left': '5px'}" v-model="goal['done']" hide-details class="shrink mr-2" />
        </v-layout>

      <v-layout align-center>
      </v-layout>
      </div>
      <h4>Todo</h4>
      <draggable v-model="tasks" @start="drag=true" @end="drag=false">
        <v-list v-for="task in getTasksByStoryId(1)" v-bind:key="task['id']">
          <v-layout row align-center>
            <v-text-field v-model="task['name']"></v-text-field>
            <v-avatar :size="26+'px'" class="grey lighten-4">
              <img src="https://avatars1.githubusercontent.com/u/33612116?s=180&u=f7ee215c53260782dc065d85327b3875e7c1ee6c&v=4" alt="avatar">
            </v-avatar>
            <v-checkbox :style="{'flex': 0,'margin-left': '5px'}" v-model="task['done']" hide-details class="shrink mr-2" />
          </v-layout>
        </v-list>
      </draggable>
      <div class="text-lg-right">

      <v-layout align-center>
        <v-text-field></v-text-field>
        <v-btn outline color="blue" >タスクを追加する</v-btn>
      </v-layout>
      </div>
      <v-text-field
      label="備考"
      textarea
      ></v-text-field>
      <div class="text-lg-right">
      <v-btn outline color="red">ストーリーを削除する</v-btn>
      </div>
    </v-container>
  </v-card>
</v-flex>

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
    }}), ...mapGetters([
      'getTasksByStoryId'
    ])
  },
  data: function() {
    return {
      avatarSize: "24px",
      story: {
        id: 1,
        purpose: "円滑にプロダクトの開発を行うため",
        goals: [
          {
            id: 1,
            name: "コーディングに入れるレベルのモックを完成していること",
            done: false
          }
        ]
      }
    };
  }
};
</script>
