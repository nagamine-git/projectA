export default {
  getTasksByStoryId: (state) => (strory_id) => {
    return state.Tasks.filter((task) => task.story_id == strory_id)
  },
  getConditionsByStoryId: (state) => (strory_id) => {
    return state.Conditions.filter((condition) => condition.story_id == strory_id)
  }
}
