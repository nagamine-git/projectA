<template>
  <v-card>
    <v-container>
      <v-layout row align-center @keyup.alt.enter="addStory(add_story)">
        <v-flex xs4 sm4 md4 class="space-right-x1">
          <v-text-field
          name="name"
          label="やること"
          id="name"
          v-model="add_story.name"
          :error=errors.no_name.has_error
          />
        </v-flex>
        <v-flex xs4 sm4 md4 class="space-right-x1">
          <v-text-field
          name="purpose"
          label="目的"
          id="purpose"
          v-model="add_story.purpose"
          :error=errors.no_purpose.has_error
          />
        </v-flex>
        <v-flex xs4 sm4 md4>
          <v-text-field
          name="conditions"
          label="達成条件(カンマ区切りで複数追加)"
          id="conditions"
          v-model="add_story.conditions_name"
          :error=errors.no_conditions_name.has_error
          />
        </v-flex>
        <v-btn color="blue" dark @click="addStory(add_story)">追加</v-btn>
      </v-layout>
    </v-container>
  </v-card>
</template>
<script>
  import { mapState, mapMutations } from 'vuex';
  export default {
    methods: {
      ...mapMutations({
        addStory: 'addStory'
      })
    },
    computed: {
      ...mapState({
        add_story: state => state.AddStory,
        errors: state => state.Errors,
      })
    }
  };
</script>
