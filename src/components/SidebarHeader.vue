<template>
<header class="sidebar-header">
  <img class="sidebar-header-image" :src="imgSrc" :alt="imgAlt" v-show="imgSrc" />
  <h2 :style="{'color': titleColor}"> {{ title }} </h2>
</header>
</template>

<script>
export default {
  props: {
    imgSrc: {
      type: String,
      required: false
    },
    imgAlt: {
      type: String,
      required: false
    },
    title: {
      type: String,
      required: false
    },
    titleColor: {
      type: String,
      required: false
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar-header {

  display: flex;
  
  &-image {
    width: 100%;
  }

  h2 {
    position: relative;
    top: -40px;
    align-self: flex-end;
    padding-right: 1em;
    margin: 0;
  }
}
</style>

