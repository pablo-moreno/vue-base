<template>
<div class="theme-picker">
  <select name="theme-select" id="theme-select">
    <option :value="Object.keys(theme)[0]" v-for="(theme, i) in themesList" :key="`theme-${i}`">
      {{ Object.keys(theme)[0] }}
    </option>
  </select>
</div>
</template>
<script>
export default {
  props: {
    themes: {
      type: Object,
      required: true
    }
  },
  computed: {
    themesList() {
      return Object.keys(this.themes).map(theme => ({[theme]: this.themes[theme]}))
    }
  }
}
</script>
<style lang="scss" scoped>
.theme-picker {

}

option {
  text-transform: capitalize;
}
</style>
