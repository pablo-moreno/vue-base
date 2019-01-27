<template>
<div class="modal-backgrund" v-show="active">
  <div class="modal" :style="{'background-color': backgroundColor}">
    <h2> {{ title }} </h2>
    <slot>
      <!-- Modal template -->
    </slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
    },
    title: {
      type: String,
    }
  }
}
</script>

<style lang="scss" scoped>
.modal-background {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 20;
}

.modal {
  display: flex;
  padding: 2em;
  border: solid 1px rgba(0, 0, 0, 0.2);
  border-radius: 8px;
}

</style>
