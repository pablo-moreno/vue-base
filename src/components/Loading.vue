<template>
  <div 
    class="loading" 
    :style="{
      'border': `${weight}px solid ${backgroundColor}`,
      'border-top': `${weight}px solid ${color}`,
    }"
  >
    
  </div>
</template>

<script>
export default {
  props: {
    color: {
      type: String,
      default: '#EAEAEA',
    },
    backgroundColor: {
      type: String,
      default: '#EAEAEA',
    },
    weight: {
      type: Number,
      default: 16
    }
  }
}
</script>


<style lang="scss" scoped>
.loading {
  border-radius: 50%;
  width: 120px;
  height: 120px;
  animation: spin 2s linear infinite;
}

@keyframes spin {
  0% { transform: rotate(0deg); }
  100% { transform: rotate(360deg); }
}
</style>
