<template>

<div>
  <header>
    <button @click="clear">Clear</button>
    <input type="color" name="color-selector" v-model="color">
  </header>
  <canvas ref="the-canvas" @mousedown="mouseDown" @mousemove="mouseMove" @mouseup="mouseUp" @mouseleave="mouseLeave">

  </canvas>
</div>
</template>

<script>
export default {
  data() {
    return {
      context: undefined,
      paint: false,
      clickX: [],
      clickY: [],
      clickDrag: [],
      color: '#df4b26',
      lineStyle: 'round',
      lineWidth: 5,
    }
  },
  mounted() {
    this.context = this.$refs['the-canvas'].getContext('2d')
  },
  methods: {
    getMousePosition(event) {
      const canvas = this.$refs['the-canvas']
      const rect = canvas.getBoundingClientRect()
      const x = event.clientX - rect.left
      const y = event.clientY - rect.top
      return [x, y]
    },
    mouseDown(event) {
      const [x, y] = this.getMousePosition(event)

      console.log('x', x)
      console.log('y', y)

      this.paint = true
      this.addClick(x, y)
      this.redraw()
    },
    mouseMove(event) {
      if (this.paint) {
        const [x, y] = this.getMousePosition(event)

        this.addClick(x, y, true)
        this.redraw()
      }
    },
    mouseUp(event) {
      this.paint = false
    },
    mouseLeave(event) {
      this.paint = false
    },
    addClick(x, y, dragging) {
      this.clickX.push(x)
      this.clickY.push(y)
      this.clickDrag.push(dragging)
    },
    redraw() {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
      this.context.strokeStyle = this.color
      this.context.lineJoin = this.lineStyle
      this.context.lineWidth = this.lineWidth

      for (let i = 0; i < this.clickX.length; i++) {
        this.context.beginPath()

        if (this.clickDrag[i] && i) {
          this.context.moveTo(this.clickX[i - 1], this.clickY[i - 1])
        }
        else {
          this.context.moveTo(this.clickX[i] - 1, this.clickY[i])
        }
        
        this.context.lineTo(this.clickX[i], this.clickY[i])
        this.context.closePath()
        this.context.stroke()
      }
    },
    clear() {
      this.context.clearRect(0, 0, this.context.canvas.width, this.context.canvas.height)
      this.clickX = []
      this.clickY = []
      this.clickDrag = []
    }
  }
}
</script>

<style lang="scss" scoped>

</style>