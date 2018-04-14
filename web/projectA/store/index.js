import Vuex from 'vuex'

export default () => new Vuex.Store(
  {
    state: {
      Stories:[
        {
          id: 1 ,
          name: '[4/15]ProjectAにて、ローカルのJSONファイルを使ってCRUDができるようにしたい',
          purpose: 'ユーザーの候補がデモを使うことで、実際にProjectAを使っている状況が想像できるようにするためだ。',
          detail: 'https://hackmd.io/kSYc87e7RKCEFaZrZjyuMQ?view'
        },
        {
          id: 2 ,
          name: '[4/15]ProjectAにて、タスク・目的・達成条件をサジェストする機能を実装したい',
          purpose: 'ユーザーの候補がデモを使うことで、実際にProjectAを使っている状況が想像できるようにするためだ。',
          detail: ''
        }
      ],
      Tasks:[
        {
          id: 1 ,
          story_id: 1,
          name: 'テーブルの構成を決める',
          done: true
        },
        {
          id: 2 ,
          story_id: 1,
          name: 'JSONの共通化',
          done: false
        },
        {
          id: 3 ,
          story_id: 1,
          name: 'StoryLIstの中にJSONのタスクを表示する',
          done: false
        },
        {
          id: 4 ,
          story_id: 1,
          name: 'AddBoxComponentからタスクを追加できるようにする',
          done: false
        },
        {
          id: 5 ,
          story_id: 1,
          name: 'AddBoxComponentから追加したタスクを削除できるようにする',
          done: false
        },
        {
          id: 6,
          story_id: 1,
          name: 'StoryListの中からタスクを編集できるようにする',
          done: false
        },
      ],
      Conditions: [
        {
          id: 1,
          story_id: 1,
          name: 'タスクの表示・追加・削除・更新ができること',
          done: false
        },
        {
          id: 2,
          story_id: 1,
          name: 'タスク・目的・達成条件にバリデーションがかかっていること',
          done: false
        },
        {
          id: 3,
          story_id: 1,
          name: 'タスク一覧のの状態が1つのJSONで管理できていること',
          done: false
        },
        {
          id: 4,
          story_id: 1,
          name: 'Firebaseでデプロイし、ブラウザでデモが操作できること',
          done: false
        },
        {
          id: 5,
          story_id: 2,
          name: 'やることを入力すると目的が、目的を入力すると達成条件が、達成条件を入力するとTodoの入植候補がサジェストされること',
          done: false
        }
      ],
      CurrentStoryId: 0,
      AddStory: {
        name: null,
        purpose: null,
        conditions_name: null
      },
      Errors: {
        no_name: {
          has_error: false,
          message: 'なにをするのか、入力してください'
        },
        no_purpose: {
          has_error: false,
          message: 'なぜするのか、入力してください'
        },
        no_conditions_name: {
          has_error: false,
          message: 'なにをクリアすれば達成なのか、入力してください'
        }
      }
    },
    mutations: {
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
        let add_story_id = state.Stories.length + 1
        state.Stories.push({id: add_story_id, name: add_story.name, purpose: add_story.purpose})
        let add_conditions_ary = add_story.conditions_name.split(',')
        for (let add_condition_name of add_conditions_ary) {
          let set_condition = {id: null,story_id: add_story_id, name: null, done: false}
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
      setCurrentStory: (state, selected_story_id) => {
        state.CurrentStoryId = selected_story_id
      }
    },
    getters: {
      getTasksByStoryId: (state) => (strory_id) => {
        return state.Tasks.filter((task) => task.story_id == strory_id)
      },
      getConditionsByStoryId: (state) => (strory_id) => {
        return state.Conditions.filter((condition) => condition.story_id == strory_id)
      }
    }
  }
)