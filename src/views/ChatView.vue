<template>
<div class="chat">
  <main-content :background-color="theme.background0">
    <div>
      <chat />
    </div>
  </main-content>
</div>
</template>
<script>
import { MainContent, Chat } from '../components'

export default {
  components: {
    Chat,
    MainContent,
  }
}
</script>
<style lang="scss" scoped>

</style>
