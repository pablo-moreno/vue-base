<template>
<div :style="{'background-color': backgroundColor}" class="card">
  <header class="card-header">
    <h1 :style="{'color': titleColor}"> {{ title }} </h1>
    <div class="card-header">
      <slot name="card-header">

      </slot>
    </div>
  </header>
  <div class="card-content">
    <slot>

    </slot>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      default: ''
    },
    backgroundColor: {
      type: String,
      default: 'white'
    },
    titleColor: {
      type: String,
      default: 'black'
    },
  }
}
</script>


<style lang="scss" scoped>

h1 {
  margin: 0;
}
.card {
  border-radius: 8px;
  display: flex;
  box-shadow: 0 0 4px rgba(0, 0, 0, 0.2);
  flex-direction: column;
  padding: 3em;

  &-header {
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding-bottom: 1em;
  }

  &-content {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &:hover {
    background-color: rgba(0, 0, 0, 0.3);
  }
}
</style>
