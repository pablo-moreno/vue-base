<template>
<div class="navbar-button" :class="{'rounded': rounded}"> 
  <div id='top'     class="bar" :class="{'active': active}"></div>
  <div id='mid'     class="bar" :class="{'active': active}"></div>
  <div id='bottom'  class="bar" :class="{'active': active}"></div>
</div>
</template>

<script>
export default {
  props: {
    active: {
      type: Boolean,
      default: false
    },
    rounded: {
      type: Boolean,
      default: true
    },
  },
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
    background-color: #EAEAEA;
  }
}
.rounded {
  border-radius: 50%;
}
.bar {
  background-color: black;
  width: 24px;
  height: 4px;
  transition: all 0.5s ease;
  border-radius: 2px;
}
#top {
  margin-bottom: 4px;
  &.active {
    margin-bottom: 0;
    transform: translateY(4px) rotate(45deg);
  }
}
#mid {
  margin-bottom: 4px;
  transition: opacity 0.25s ease-out;
  &.active {
    margin: 0;
    opacity: 0;
  }
}
#bottom {
  &.active {
    transform: translateY(-4px) rotate(-45deg);
  }
}
</style>