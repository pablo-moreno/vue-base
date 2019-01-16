<template>
<header class="sidebar-header" :style="{
    'background-image': `url(${imgSrc}`, 
    'height': height, 
    'background-color': backgroundColor
  }">
  <div class="sidebar-action">
    <cross @click.native="$emit('close-sidebar')" :color="titleColor" />
  </div>
  <div class="sidebar-title">
    <h2 :style="{'color': titleColor}"> {{ title }} </h2>
    <h4 :style="{'color': subtitleColor}"> {{ subtitle }} </h4>
  </div>
</header>
</template>

<script>
import Cross from './Cross'
export default {
  props: {
    backgroundColor: {
      type: String,
      default: '#EAEAEA'
    },
    imgSrc: {
      type: String,
      required: false
    },
    height: {
      type: Number,
      default: 200
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
      required: false,
    },
    subtitle: {
      type: String,
      required: false
    },
    subtitleColor: {
      type: String,
      required: false,
    },
  },
  components: {
    Cross
  }
}
</script>

<style lang="scss" scoped>
.sidebar-header {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 200px;
  background-size:cover;
  border-bottom: solid 1px #EAEAEA;
  
  &-image {
    width: 100%;
  }

  .sidebar-title {
    display: flex;
    justify-content: flex-end;
  }

  .sidebar-action {
    display: flex;
  }

  h2 {
    margin: 64px;
  }
}
</style>

