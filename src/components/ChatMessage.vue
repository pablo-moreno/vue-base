<template>
<div class="chat-message" :class="{'received': received, 'sent': !received}">

</div>
</template>
<script>
import { BaseStyle } from '../mixins'
export default {
  mixins: [BaseStyle],
  props: {
    user: {
      type: Object,
    },
    message: {
      type: Object,
    },
    date: {
      type: Date
    },
    received: {
      type: Boolean
    },
  }
}
</script>
<style lang="scss">
.chat-message {
  border-radius: 8px;

  &.received {
    align-self: flex-start;
  }

  &.sent {
    align-self: flex-end;
  }
}
</style>
