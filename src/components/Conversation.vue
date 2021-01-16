<template>
  <section class="conversation" ref="conversation">
    <ul class="message_list">
      <message v-for="m in conversation" :key="m.id" v-bind="m" />
    </ul>
  </section>
</template>

<script>
import Message from './Message.vue'

export default {
  name: 'Conversation',

  components: {
    Message
  },

  computed: {
    conversation () {
      return this.$store.state.conversation
    }
  },

  methods: {
    scrollToBottom () {
      this.$refs.conversation.scrollTop = this.$refs.conversation.scrollHeight
    }
  }
}
</script>

<style scoped>
  .conversation {
    flex: 1;
    border: 1px solid silver;
    border-radius: 3px;
    overflow: auto;
  }
  .message_list {
    list-style-type: none;
    padding: 8px;
    overflow: auto;
  }

h3 {
  margin: 40px 0 0;
}

a {
  color: #42b983;
}
</style>
