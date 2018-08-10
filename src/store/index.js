import Vue from "vue";
import vuex from "vuex";

Vue.use(vuex);

const state = {
  count: 1,
  handle: null,
  headerTitle: null,
  headerShow: true,
  registerShow: true,
  footerShow: true,
  login: {
    token: 0
  },
  tip:{
    show:false,
    txt:""
  }
}

const mutations = {
  header(state, data) {
    this.state.headerTitle = data.headerTitle;
    this.state.headerShow = data.headerShow;
    this.state.registerShow = data.registerShow;
  },
  footer(state, data) {
    this.state.footerShow = data.footerShow;
  },
  login(state, data) {
    this.state.account = data.account;
    this.state.isReg = data.isReg;
    this.state.login.token = data.loginToken;
  },
  tip(state,data){
    this.state.tip.txt = data.tipTxt;
    this.state.tip.show = data.show;
  }
}

const actions = {
  addAction(context) {
    context.commit('add', "嘿嘿嘿")
  },
  reduceAction({
    commit
  }) {
    commit('reduce', 10)
  }
}

const getters = {
  // count: function (state) {
  //       state.count += 100
  //       return state.count += 100;
  // }
}



export default new vuex.Store({
  state,
  mutations,
  getters,
  actions
});
