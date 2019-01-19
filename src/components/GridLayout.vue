<template>
<div class="grid-layout">
  <slot>
    
    
  </slot>  
</div>  
</template>

<style lang="scss" scoped>

.grid-layout {
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-gap: 3em;
  padding: 2em;

  @media only screen and (max-width: 1440px) {
    grid-template-columns: repeat(3, 1fr);
  }

  @media only screen and (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media only screen and (max-width: 860px) {
    grid-template-columns: 1fr;
  }
}
</style>
