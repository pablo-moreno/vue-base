<template>
<nav 
  class="navbar" 
  :class="{'is-fixed': fixed}"
  :style="{'background-color': backgroundColor, 'color': color}"

>
  <navbar-button @click.native="$emit('nav-action')" :active="active"  />
  <h2> {{ title }} </h2>
</nav>  
</template>

<script>
import NavbarButton from './NavbarButton'
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    backgroundColor: {
      type: String,
      required: false,
      default: 'rgb(240, 240, 240)'
    },
    color: {
      type: String,
      required: false,
      default: '#090909'
    },
    fixed: {
      type: Boolean,
      default: true,
    },
    title: {
      type: String,
      default: '',
    },
  },
  components: {
    NavbarButton
  }
}
</script>

<style lang="scss" scoped>
.navbar {
  width: 100%;
  height: 64px;
  padding: 1em;
  display: flex;
  align-items: center;
}

.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
