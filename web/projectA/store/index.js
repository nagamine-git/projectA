import Vuex from 'vuex'

export default () => new Vuex.Store(
  {
    state: {
      Stories:[
        {
          id: 1 ,
          name: 'ストーリー1つめ',
          purpose: 'String',
          condition: {
            id: 'Number',
            name: 'String',
            done: false
          },
          detail: 'String'
        },
        {
          id: 2 ,
          name: 'ストーリー2つめ',
          purpose: 'String',
          condition: {
            id: 'Number',
            name: 'String',
            done: false
          },
          detail: 'String'
        }
      ],
      Tasks:[
        {
          id: 1 ,
          story_id: 1,
          name: 'タスク1つめ',
          done: false
        },
        {
          id: 2 ,
          story_id: 1,
          name: 'タスク2つめ',
          done: false
        },
        {
          id: 3 ,
          story_id: 2,
          name: 'タスク3つめ',
          done: false
        },
      ]
    },
    mutations: {
      setTaskDone: (state, task_id) => {
        const task = state.Tasks.find(task => task.id == task_id);
        task.done = true;
      }
    },
    getters: {
      getTasksByStoryId: (state) => (strory_id) => {
        return state.Tasks.filter((task) => task.story_id == strory_id)
      }
    }
  }
)