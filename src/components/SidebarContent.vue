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
  text-align: start;

  a {
    padding: 1rem;

    &.router-link-exact-active {
      background-color: rgba(0, 0, 0, 0.2);
      color: #42b983;
    }
  }
}
</style>
