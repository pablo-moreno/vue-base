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
    width: 64px;
    height: 64px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    cursor: pointer;

    .bar {
      width: 32px;
      height: 4px;
      background-color: white;
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
