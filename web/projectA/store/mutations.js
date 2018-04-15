export default {
  addStory: (state, add_story) => {
    // 追加前バリデーションチェック
    state.Errors.no_name.has_error = false
    state.Errors.no_purpose.has_error = false
    state.Errors.no_conditions_name.has_error = false
    let error_flug = false
    if (add_story.name == null) {
      state.Errors.no_name.has_error = true
      error_flug = true
    }
    if (add_story.purpose == null) {
      state.Errors.no_purpose.has_error = true
      error_flug = true
    }
    if (add_story.conditions_name == null) {
      state.Errors.no_conditions_name.has_error = true
      error_flug = true
    }
    if (error_flug == true) {
      return
    }
    // 追加処理
    const add_story_id = state.Stories.length + 1
    state.Stories.push({id: add_story_id, name: add_story.name, purpose: add_story.purpose})
    const add_conditions_ary = add_story.conditions_name.split(',')
    for (const add_condition_name of add_conditions_ary) {
      const set_condition = {id: null, story_id: add_story_id, name: null, done: false}
      set_condition.name = add_condition_name
      set_condition.id = state.Conditions.length + 1
      state.Conditions.push(set_condition)
    }
    // 追加したストーリーにフォーカス
    state.CurrentStoryId = add_story_id
    // 初期化処理
    state.AddStory = {
      name: null,
      purpose: null,
      conditions_name: null
    }
  },
  addTask: (state, add_task) => {
    // 追加処理
    const add_task_id = state.Tasks.length + 1
    state.Tasks.push({id: add_task_id, story_id: state.CurrentStoryId, name: add_task.name, done: false})
    // 初期化処理
    state.AddTask = {
      name: null
    }
  },
  deleteTask: (state, delete_task_id) => {
    state.Tasks.some((v, i) => {
      if (v.id == delete_task_id) state.Tasks.splice(i, 1); //id:3の要素を削除
    });
  },
  deleteStory: (state, delete_story_id) => {
    state.Stories.some((v, i) => {
      if (v.id == delete_story_id) state.Stories.splice(i, 1); //id:3の要素を削除
    });
    state.CurrentStoryId = null
  }
  ,
  setCurrentStory: (state, selected_story_id) => {
    state.CurrentStoryId = selected_story_id
  }
}
