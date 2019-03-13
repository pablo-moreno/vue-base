<template>
<div class="chat-message-input">
  <input type="file" id="chat-file">
  <label for="chat-file" ></label>
  <input type="text" id="chat-input" class="chat-input" :style="{'background-color': backgroundColor, 'color': color}">
  <label for="chat-input"></label>
  <button class="chat-send-button">
    
  </button>
</div>

</template>

<script>
import { BaseType } from '../mixins'
export default {
  mixins: [BaseType],

}
</script>


<style lang="scss">
.chat-input {
  border-radius: 8px;
}

.chat-send-button {
  width: 48px;
  height: 48px;
  border-radius: 100%;
}

label {
  display: none;
}
</style>
