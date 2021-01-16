<template>
  <main id="app">
    <conversation ref="conversation"/>
    <compose-section v-model="message" @submit="sendReply" />
  </main>
</template>

<script>
import Conversation from './components/Conversation.vue'
import ComposeSection from './components/Compose.vue'

export default {
  name: 'App',
  components: {
    Conversation,
    ComposeSection
  },

  beforeMount () {
    this.$store.dispatch('getUserInfo')
    this.$store.dispatch('getConversation')
  },

  mounted () {
    this.$refs.conversation.scrollToBottom()
  },

  data: function () {
    return {
      message: null
    }
  },

  methods: {
    sendReply () {
      if (!this.message) return
      this.$store.dispatch('sendMessage', { message: this.message })
      this.message = null
      this.$nextTick(() => {
        this.$refs.conversation.scrollToBottom()
      })
    }
  }
}
</script>

<style>
html, body, #app {
  height: 100%;
}

body {
  margin: 0;
}

#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;

  display: flex;
  flex-direction: column;
  padding: 16px;
  box-sizing: border-box;
}
</style>
