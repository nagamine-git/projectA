import Vuex from 'vuex'

const store = () => new Vuex.Store(
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
    }
  }
)

export default store