<template>
<div>
  <section 
    class="sidebar" :class="[show ? 'sidebar-visible': 'sidebar-hidden']"
    :style="{'background-color': backgroundColor}"  
  >
    <slot>
      
    </slot>
  </section>
  <div class="out" :class="[show ? 'visible' : 'hidden']" @click="$emit('close-sidebar')">

  </div>
</div>
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
a {
  &.router-link-exact-active {
    background-color: rgba(0, 0, 0, .2);
  }
}
.out {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.6);
  z-index: 15;
}

.sidebar {
  position: fixed;
  top: 0;
  bottom: 0;
  z-index: 15;
  width: 360px;
  height: 100%;
  
  transition: left 0.25s cubic-bezier(.77,0,.18,1);
  z-index: 20;

  @media only screen and (max-width: 720px) {
    width: 300px;
  }
}

.sidebar-visible {
  left: 0;
  box-shadow: 0 0 4px 0 rgba(0, 0, 0, 0.2);
  border-right: solid 1px rgba(0, 0, 0, 0.2);
}

.sidebar-hidden {
  left: -360px;

  @media only screen and (max-width: 720px) {
    left: -300px;
  }
}

.hidden {
  display: none;
}

.visible {
  display: block;
}
</style>
