<template>
<div class="post-it" :style="{ 
  'background-color': backgroundColor
}">
  <slot>
    <!-- Default Slot -->
  </slot>
</div>
</template>

<script>
export default {
  props: {
    backgroundColor: {
      type: String,
    }
  },
}
</script>

<style lang="scss">
.post-it {
  font-family: 'Finger Paint', cursive;
  font-size: 16px;
  min-width: 120px;
  min-height: 360px;
  box-shadow: 5px 5px 7px rgba(0, 0, 0, 0.2);
  transition: transform 0.5s ease;

  &:hover {
    transform: rotate(-1.25deg) scale(1.05, 1.05);
  }
}
</style>
