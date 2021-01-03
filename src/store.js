import Vue from "vue";
import Vuex from 'vuex';

Vue.use(Vuex);

export default new Vuex.Store({
  state: {
    todos: [
      {
        number:"a",
        title: "Hello Vuex",
        completed: false
      },
      {
        number:"b",
        title: "I'm Vuex Data",
        completed: false
      },
      {
        number:"c",
        title: "Do you have question?",
        completed: false
      },
    ],
    datas:[
      {
        name:"sok",
        gender:"M",
        age: '24',
        completed: false,
        image: require('../src/assets/image/bac2.jpg')
      },
      {
        name:"pop-i",
        gender:"F",
        age: '44',
        completed: false,
        image: require('../src/assets/image/bac3.jpg')
      },
    ]
  },

  getters: {
    completedTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === true;
      }).length;
    },

    // Total count array
    pendingTodos(state) {
      return state.todos.filter(todo => {
        return todo.completed === false;
      }).length;
    }
  },

  mutations: {
    NEW_TODO(state, todoItem) {
      state.todos.push({
        title: todoItem,
        completed: false
      })
    },

    insertData(state , dataItem){
      state.datas.push({
        name: dataItem,
        completed: false, 
      })
    },

    DELETE_TODO(state, todoItem) {
      let index = state.todos.indexOf(todoItem);
      
      state.todos.splice(index, 1);
    },

    TOGGLE_TODO_STATUS(state, todoItem) {
      todoItem.completed = !todoItem.completed;
    }
  },

  actions: {

    insert({commit}, dataItem){
      commit('insertData',dataItem);
    },

    addNewTodo({ commit }, todoItem) {
      commit('NEW_TODO', todoItem);
    },

    deleteTodo({ commit }, todoItem) {
      commit('DELETE_TODO', todoItem);
    },

    toggleTodoStatus({ commit }, todoItem) {
      commit('TOGGLE_TODO_STATUS', todoItem);
    }
  }
});