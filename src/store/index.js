import Vue from 'vue'
import Vuex from 'vuex'
import { currentUser, conversation } from './mockapi'

Vue.use(Vuex)

export default new Vuex.Store({
  strict: true,

  state: {
    currentUser: null,
    conversation: []
  },
  mutations: {
    setUserInfo (state, data) {
      state.currentUser = data
    },
    setConversation (state, data) {
      state.conversation = data
    },
    addMessage (state, data) {
      state.conversation.push(data)
    }
  },
  actions: {
    getUserInfo (context) {
      return Promise.resolve(currentUser)
        .then(data => {
          const parseData = JSON.parse(data)
          context.commit('setUserInfo', parseData)
        })
    },
    getConversation (context) {
      return Promise.resolve(conversation)
        .then(data => {
          const parseData = JSON.parse(data)
          context.commit('setConversation', parseData)
        })
    },
    sendMessage (context, { message }) {
      const conversationLength = context.state.conversation.length
      const latestIndex = conversationLength + 1
      let date = new Date().toISOString()
      date = date.replace('T', ' ')
      date = date.slice(0, date.length - 5)

      const newMessage = {
        id: latestIndex,
        from: context.state.currentUser,
        message,
        date
      }

      context.commit('addMessage', newMessage)

      return new Promise((resolve) => {
        setTimeout(() => {
          resolve('Message delivered')
        }, 500)
      })
    }
  }
})
