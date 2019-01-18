<template>
  <div class="arrow" :class="{
      'top': direction === 'top',
      'right': direction === 'right',
      'bottom': direction === 'bottom',
      'left': direction === 'left'
    }"
    :style="{
      'border-top': `solid ${weight}px  ${color}`,
      'border-right': `solid ${weight}px  ${color}`,
      'width': `${width}px`,
      'height': `${height}px`
    }"
  >
  
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#909090'
    },
    weight: {
      type: Number,
      default: 4
    },
    direction: {
      type: String,
      validator: (value) => ['top', 'right', 'bottom', 'left'].indexOf(value) > -1,
      default: 'left'
    },
    width: { 
      type: Number,
      default: 8
    },
    height: {
      type: Number,
      default: 8
    }
  }
}
</script>


<style lang="scss" scoped>
.arrow {
  transition: transform 0.25s ease;
}

.top {
  transform: rotate(-45deg)
}

.right {
  transform: rotate(45deg)
}

.bottom {
  transform: rotate(135deg)
}

.left {
  transform: rotate(225deg)
}



</style>
