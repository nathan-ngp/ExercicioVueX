import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

export default new Vuex.Store({
  state: { 
    tarefas:[
        {descricao:"Matemática"},
        {descricao:"Biologia"}
      ]
  },
  mutations: {
    alteraTexto: function(state, descricao){
        state.tarefas.push(descricao)
    }
  },
  actions: {
  },
  modules: {
  }
})