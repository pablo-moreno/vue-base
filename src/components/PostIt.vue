<template>
<div class="post-it" :style="{ 
  'background-color': bg
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
      default: 'green',
      validator: (color) => ['green', 'yellow', 'red']
    }
  },
  computed: {
    bg() { 
      const colors = {
        'red': '#e77b74',
        'green': '#90f090',
        'yellow': '#f8f875'
      }
      return colors[this.backgroundColor]
    }
  }
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
  background-color: #e77b74;

  &:hover {
    transform: rotate(-1.25deg) scale(1.05, 1.05);
  }

  
}
</style>
