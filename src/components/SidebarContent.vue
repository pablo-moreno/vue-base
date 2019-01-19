<template>
<div class="sidebar-content">
  <slot>
    <!-- Sidebar Content -->
  </slot>
</div>
</template>

<style lang="scss" scoped>
.sidebar-content {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  background-color: inherit;

  a {
    padding: 1rem;

    &.router-link-exact-active {
      border-bottom: solid 1px #42b983;
      color: #42b983;
    }
  }
}
</style>
