<template>
<div class="main-content" :style="{
    'background-color': backgroundColor,
    'margin-top': top
  }"
>
<slot>
  
</slot>
</div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
      default: 'white'
    },
    top: {
      type: Number,
      default: 80
    }
  }
}
</script>

<style lang="scss">
.main-content {
  margin-top: 64px;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
}

</style>
