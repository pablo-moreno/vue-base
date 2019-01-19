<template>
<router-link :to="to" style="{'color': color}" />
</template>

<script>
export default {
  props: {
    color: {
      type: String,
    },
    to: {
      type: [String, Object],
      required: true
    }
  }
}
</script>

<style lang="scss" scoped>
a {
  &:hover, &:active, &:visited {
    color: inherit;
  }
}
</style>
