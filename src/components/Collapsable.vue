<template>
<div class="collapsable">
  <div class="collapsable-header" @click="toggle" :style="{'color': titleColor}">
    <span>{{ title }}</span>
    <arrow :direction="collapsed ? 'left': 'bottom'" />
  </div>
  <div class="collapsable-content" :style="{'color': color}" v-show="!collapsed">
    <slot>

    </slot>
  </div>
</div>
</template>

<script>
import Arrow from './Arrow'
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    titleColor: {
      type: String,
    },
    color: {
      type: String,
    }
  },
  data() {
    return {
      collapsed: true
    }
  },
  methods: {
    toggle() {
      this.collapsed = !this.collapsed
    },
  },
  components: {
    Arrow
  }
}
</script>

<style lang="scss" scoped>
.collapsable {
  width: 100%;


  &-header {
    padding: 1em;
    display: flex;
    justify-content: space-between;
    align-items: center;
    cursor: pointer;
    border-bottom: rgba(0, 0, 0, 0.2);
  }

  &-content {
    transition: display 0.25s ease;
    width: 100%;
    display: flex;
    padding: 1em;
    
  }
}
</style>
