<template>
<div class="chat">
  <chat-input />
</div>
</template>

<script>
import ChatMessage from './ChatMessage'
import ChatInput from './ChatInput'
export default {
  components: {
    ChatInput,
    ChatMessage
  }
}
</script>

<style lang="scss">

</style>
