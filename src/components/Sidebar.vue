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
  width: 480px;
  height: 100%;
  border-right: solid 1px #EAEAEA;
  box-shadow: 0 0 4px 0 lighten(grey, 35%);
  transition: left 0.25s cubic-bezier(.77,0,.18,1);

  @media only screen and (max-width: 720px) {
    width: 300px;
  }
}

.sidebar-visible {
  left: 0;
}

.sidebar-hidden {
  left: -480px;

  @media only screen and (max-width: 720px) {
    left: -300px;
  }

}

</style>
