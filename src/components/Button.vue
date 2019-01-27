<template>
<button class="m-button" @click="$emit('click')" :style="{
  'color': color,
  'background-color': backgroundColor,
  'width': width ? `${width}px` : 'auto',
  'height': height ? `${height}px` : 'auto',
}">
  <slot></slot>
</button>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String
    },
    color: {
      type: String
    },
    height: {
      type: [Number, String],
    },
    width: {
      type: [Number, String],
    },
  }
}
</script>


<style lang="scss" scoped>
.m-button {
  padding: 0.5em 1em;
  border-radius: 8px;
}

.is-rounded {
  border-radius: 50%;
  padding: 1em;
}
</style>
