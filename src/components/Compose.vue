<template>
  <form class="compose" @submit.prevent="hndSend">
    <textarea
      class="text_input"
      rows="3"
      placeholder="Type your message here..."
      @keypress.enter.prevent="hndSend"
      @input="$emit('input', $event.target.value)"
      :value="value"
    ></textarea>
    <button type="submit" class="text_submit">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"
        height="24" width="24">
        <path d="M0 0h24v24H0z" fill="none"/>
        <path d="M2.01 21L23 12 2.01 3 2 10l15 2-15 2z"/>
      </svg>
    </button>
  </form>
</template>

<script>
export default {
  name: 'Compose',
  props: {
    value: String
  },

  methods: {
    hndSend: function () {
      this.$emit('submit')
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
  .compose {
    display: flex;
    /* prefer specifying flex direction because Safari has been known to not be aware row is the
    default value */
    flex-direction: row;
    margin-top: 16px;
  }
  .text_input {
    flex: 1;
    resize: none;
    border-radius: 3px;
    border-color: silver;
  }
  .text_submit {
    margin-left: 12px;
    width: 60px;
    display: flex;
    flex-direction: row;
    justify-content: center;
    align-items: center;
  }
</style>
