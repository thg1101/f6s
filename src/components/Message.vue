<template>
  <li :class="['message', direction]">
    <img
      class="avatar"
      width="48"
      height="48"

      :src="from.thumbnail"
      :alt="from.firstName"
      :title="from.firstName"
    >
    <div class="message__text">{{ message }}</div>
  </li>
</template>

<script>
export default {
  name: 'Message',
  props: {
    id: Number,
    from: Object,
    message: String,
    date: String
  },

  methods: {
  },

  computed: {
    currentUser () {
      return this.$store.state.currentUser
    },
    direction () {
      if (!this.currentUser) return ''
      return this.from.id === this.currentUser.id ? 'outgoing' : 'incoming'
    }
  }
}
</script>

<style>
  .avatar {
    border-radius: 50%;
    width: 48px;
    min-width: 48px;
    height: 48px;
    align-self: flex-end;
  }

  .message {
    display: block;
    max-width: 60%;
    clear: both;
    margin-bottom: 8px;
    display: flex;
  }
  .message__text {
    padding: 8px;
    border-radius: 8px;
    display: flex;
    align-items: center;
    white-space: break-spaces;
  }
  .message.incoming {
    float: left;
    flex-direction: row;
  }
  .message.incoming > .message__text {
    background-color: #e0e0e0;
    margin-left: 12px;
    text-align: left;
  }
  .message.outgoing {
    float: right;
    flex-direction: row-reverse;
  }
  .message.outgoing > .message__text {
    background-color:#64b5f6;
    margin-right: 12px;
    text-align: right;
  }

  .message_text {
    white-space: break-spaces;
  }
</style>
