<template>
<canvas :id="id">

</canvas>
</template>

<script>
import Chart from 'chart.js'

export default {
  props: {
    // Chart data
    data: {
      type: [Object, Array],
      required: true
    },
    // Element Id
    id: {
      required: false
    },
    // Chart options
    options: {
      type: Object,
      required: false
    },
    // Chart title
    title: {
      type: String,
      required: false
    },
    // Chart type
    chartType: {
      type: String,
      required: false,
      default: 'line'
    },
  },
  data() {
    return {
      chart: undefined
    }
  },
  /**
   * Binds Chart.js to the root element of the component.
   * This must be done when the component is mounted
   * so the this.$el property is set at this point.
   */
  mounted() {
    this.chart = new Chart(this.$el.getContext('2d'), {
      data: this.data,
      options: this.options,
      title: this.title,
      type: this.chartType
    })
  }
}
</script>

<style lang="scss" scoped>

</style>
