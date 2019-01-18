<template>
<div class="cross">
  <div id="top"    class="bar" :style="{'background-color': color}"></div>
  <div id="bottom" class="bar" :style="{'background-color': color}"></div>
</div>
</template>
<script>
export default {
  props: {
    color: {
      type: String,
      default: 'white'
    }
  }
}
</script>

<style lang="scss" scoped>
.cross {
    width: 48px;
    height: 48px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;
    border-radius: 50%;
    transition: all 0.5s ease;

    &:hover {
      background-color: rgba(0, 0, 0, 0.2);
      transform: rotate(-90deg);
    }

    .bar {
      width: 32px;
      height: 4px;
      border-radius: 2px;
    }

    #top {
      transform: translateY(2px) rotate(45deg)
    }

    #bottom {
      transform: translateY(-2px) rotate(-45deg);
    }
  }
</style>
