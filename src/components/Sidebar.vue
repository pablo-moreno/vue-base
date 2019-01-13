<template>
  <section 
    class="sidebar" :class="[show ? 'sidebar-visible': 'sidebar-hidden']"
    :style="{'background-color': backgroundColor}"  
  >
    <slot>
      
    </slot>
  </section>
</template>

<script>
export default {
  props: {
    show: {
      type: Boolean,
      default: true
    },
    backgroundColor: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss" scoped>
.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 10;
  width: 400px;
  height: 100%;
  border-right: solid 1px #EAEAEA;
  transition: left 0.125s ease-in;
}

.sidebar-visible {
  left: 0;
}

.sidebar-hidden {
  left: -400px;
}

</style>
