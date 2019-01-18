<template>
<div class="navbar-button"      :class="{'rounded': rounded}" @click="toggle"> 
  <span 
    :style="{'background-color': backgroundColor, 'color': color}" 
    id='top'    
    class="bar"
    :class="{'active': active, [this.type]: true}">
  </span>
  <span 
    :style="{'background-color': backgroundColor, 'color': color}" 
    id='mid'    
    class="bar"
    :class="{'active': active, [this.type]: true}">
  </span>
  <span 
    :style="{'background-color': backgroundColor, 'color': color}" 
    id='bottom' 
    class="bar"
    :class="{'active': active, [this.type]: true}">
  </span>
</div>
</template>

<script>
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
    rounded: {
      type: Boolean,
      default: true
    },
    type: {
      type: String,
      default: 'arrow',
      validator: (value) => ['cross', 'arrow'].indexOf(value) > -1
    }
  },
  methods: {
    toggle() {
      this.$emit('action')
    }
  }
}
</script>

<style lang="scss" scoped>
.navbar-button {
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  cursor: pointer;
  width:  48px;
  height: 48px;

  &:hover {
    background-color: rgba(0, 0, 0, 0.2);
  }
}
.rounded {
  border-radius: 50%;
}
.bar {
  width: 24px;
  height: 4px;
  transition: all 0.5s ease;
  border-radius: 2px;
  
}
#top {
  margin-bottom: 4px;
  &.active.cross {
    margin-bottom: 0;
    transform: translateY(4px) rotate(45deg);
  }
  &.active.arrow {
    margin-bottom: 0;
    width: 16px;
    transform: translateX(-6px) rotate(-37.5deg);
  }
}
#mid {
  margin-bottom: 4px;
  transition: opacity 0.25s ease-out;
  
  &.active.cross {
    margin: 0;
    opacity: 0;
  }
  &.active.arrow {
    width: 24px;
  }
}
#bottom {
  &.active.cross {
    transform: translateY(-4px) rotate(-45deg);
  }
  &.active.arrow {
    width: 16px;
    transform: translateX(-6px) translateY(-4px) rotate(37.5deg);
  }
}
</style>