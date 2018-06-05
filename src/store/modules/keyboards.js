// initial state
// shape: [{ id, quantity }]
const state = {
  //nextKey: null,
  currKey: null,
  shiftKey: {
    keydown: false,
    code: 0
  }
}

// getters
const getters = {
  //getNextKey: state => state.nextKey,
  getCurrKey: state => state.currKey,
  getShiftKey: state => state.shiftKey,
}

// actions
const actions = {
  setCurrKey({ commit, state }, currKey) {
    commit('setCurrKey', currKey)
  },
  setShiftKey({ commit, state }, shiftKey) {
    commit('setShiftKey', shiftKey)
  }
}

// mutations
const mutations = {
  setCurrKey(state, currKey) {
    state.currKey = currKey
  },
  setShiftKey(state, shiftKey) {
    state.shiftKey = shiftKey
  }
}

export default {
  state,
  getters,
  actions,
  mutations
}