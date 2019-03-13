<template>
<nav 
  class="navbar" 
  :class="{'is-fixed': fixed}"
  :style="{'background-color': backgroundColor, 'color': color}"
>
  <div class="navbar-start">
    <navbar-button @action="$emit('nav-action')" type="arrow" :active="active"  />
    <h2> {{ title }} </h2>
  </div>
  <div class="navbar-end">
    <slot>

    </slot>
  </div>
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
  padding: .5em;
  display: flex;
  align-items: center;
  z-index: 10;
  justify-content: space-between;

  &-start {
    display: flex;
    align-items: center;

    h2 {
      padding: 0 .5em;
    }
  }

  &-end {
    display: flex;
    align-items: center;
  }
}

.is-fixed {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
}
</style>
