<template>

<v-card class="space-top">
  <v-container>
    <h3>条件</h3>
    <v-checkbox v-model="x" value="コーディングに入れるレベルのモックを完成していること" label="コーディングに入れるレベルのモックを完成していること"></v-checkbox>
    <br>
    <h3>Todo</h3>
    <v-list v-for="substory in substories" v-bind:key="substory">
      <v-layout row>
        <v-checkbox v-model="x" value="紙に書く" label="紙に書く"></v-checkbox>
        <v-avatar
          :tile="tile"
          :size="avatarSize"
          class="grey lighten-4"
        />
      </v-layout>
    </v-list>
    <div class="text-lg-right">
      <v-btn outline >タスクを追加する</v-btn>
    </div>
    <br>
    <br>
    <h3>備考</h3>
    <v-text-field
      name="input-7-1"
      label="MarkDownで書けるようにしたい"
      multi-line
    ></v-text-field>
    <div class="text-lg-right">
      <v-btn outline >ストーリーを削除する</v-btn>
    </div>
  </v-container>
</v-card>

</template>


<style>
.space-top {
  margin-top: 10px;
}
.no-space-y {
  padding: 0 5px;
}
.input-group__details {
  min-height: 12px;
}
</style>

<script>
export default {
  props: ["story"],
  data: function (){
    return {
      x: true,
      avatarSize: '24px',
      substories: [{text: "hoge"},{text: "hage"}]
      }
    }
};
</script>
