<template>
  <v-flex xs6>
    <v-card>
      <v-container v-if="story">
        <h4>目的</h4>
        <v-text-field v-model="story.purpose"></v-text-field>
        <h4>達成条件</h4>
        <story-detail-condition/>
        <h4>Todo</h4>
        <story-detail-todo />
        <div class="text-lg-right">
        <v-layout align-center>
          <v-text-field v-model="add_task.name" />
          <v-btn outline color="blue" @click="addTask(add_task)">タスクを追加する</v-btn>
        </v-layout>
        </div>
        <v-text-field v-model="story.detail" label="備考" textarea />
        <div class="text-lg-right">
          <v-btn outline color="red">ストーリーを削除する</v-btn>
        </div>
      </v-container>
    </v-card>
  </v-flex>
</template>

<style>
  .input-group__details {
    min-height: 0;
  }
  ul.list {
      padding: 0em 0;
  }
</style>


<script>
  import StoryDetailCondition from "~/components/StoryDetailCondition.vue";
  import StoryDetailTodo from "~/components/StoryDetailTodo.vue";
  import draggable from "~/node_modules/vuedraggable/dist/vuedraggable.js";
  import { mapState, mapGetters, mapMutations } from 'vuex';
  export default {
    components: {
      draggable,
      StoryDetailCondition,
      StoryDetailTodo
    },
    methods: {
      ...mapMutations({
        addTask: 'addTask'
      })
    },
    computed: {
      ...mapState({
        tasks: state => {
          return state.Tasks
        },
        add_task: state => {
          return state.AddTask
        },
        current_story_id: state => {
          return state.CurrentStoryId
        },
        story: state => {
          let story = state.Stories.find((story) => story.id == state.CurrentStoryId)
          return story ? story : ''
        }
      }),
      ...mapGetters([
        'getTasksByStoryId',
      ])
    }
  };
</script>
