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
    <h1 :style="{'color': titleColor}"> {{ title }} </h1>
    <h3 :style="{'color': subtitleColor}"> {{ subtitle }} </h3>
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
  justify-content: space-between;
  height: 200px;
  background-size:cover;
  flex-direction: column;

  
  &-image {
    width: 100%;
  }

  .sidebar-title {
    display: flex;
    justify-content: flex-end;
    
    justify-content: center;
    display: flex;
    align-items: flex-end;
    flex-direction: column;
    padding: 0.5em 2em;
  }

  .sidebar-action {
    display: flex;
    padding: 16px;
  }

  h1, h3 {
    margin: 0;
    margin-bottom: 0.5em;
  }
}
</style>

