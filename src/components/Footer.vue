<template>
<footer class="footer" :style="{'color': color, 'background-color': backgroundColor}">
<slot>
  
</slot>
</footer>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
    },
    color: {
      type: String,
    },
  }
}
</script>

<style lang="scss">
.footer {
  display: flex;
  justify-content: center;
  align-items: center;
  min-height: 240px;
  font-size: 140%;
  border-top: solid 1px rgba(0, 0, 0, .2);
}
</style>
