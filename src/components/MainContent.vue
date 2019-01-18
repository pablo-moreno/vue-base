<template>
<div class="main-content" :style="{'background-color': backgroundColor}">
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
    }
  }
}
</script>


<style lang="scss">
.main-content {
  position: relative;
  margin-top: 80px;
  width: 100%;
  height: 100%;
}
</style>
