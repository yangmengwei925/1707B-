
export default {

  namespace: 'example',

  state: {
    list: []
  },

  subscriptions: {
    setup({ dispatch, history }) {  // eslint-disable-line
    },
  },

  effects: {
    *fetch({ payload }, { call, put }) {  // eslint-disable-line
      console.log('fetch payload...', payload)
      let num1 = yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(1000);
        }, 1000);
      })
      console.log('num...', num1)

      let num2 = yield new Promise((resolve, reject)=>{
        setTimeout(()=>{
          resolve(3000);
        }, 3000);
      })
      console.log('num...', num2)


      yield put({ type: 'save' });
    },
  },

  reducers: {
    save(state, action) {
      console.log('save payload...', action)
      return { ...state, ...action.payload };
    },
  },

};
