<template>
<div>
  <header>
    <button @click="clear">Clear</button>
    <input type="color" name="color-selector" v-model="color">
  </header>
  <canvas 
    ref="the-canvas" 
    @mousedown="mouseDown" 
    @mousemove="mouseMove" 
    @mouseup="mouseUp" 
    @mouseleave="mouseLeave"
    :style="{'width': `${width}px`, 'height': `${height}px`}"
  >

  </canvas>
</div>
</template>

<script>
export default {
  props: {
    width: {
      type: Number,
      default: 640
    },
    height: {
      type: Number,
      default: 480
    },
  },
  data() {
    return {
      context: undefined,
      paint: false,
      clickX: [],
      clickY: [],
      clickDrag: [],
      points: {},
      color: '#df4b26',
      lineStyle: 'round',
      lineWidth: 5,
      rect: undefined,
    }
  },
  mounted() {
    const canvas = this.$refs['the-canvas']
    canvas.width = this.width
    canvas.height = this.height
    
    this.context = canvas.getContext('2d')
    this.context.fillStyle = 'white'
    this.context.fillRect(0, 0, canvas.width, canvas.height)
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
      const canvas = this.$refs['the-canvas']
      const rect = canvas.getBoundingClientRect()
      this.context.clearRect(0, 0, rect.width, rect.height)
      this.context.strokeStyle = this.color
      this.context.lineJoin = this.lineStyle
      this.context.lineWidth = this.lineWidth

      for (let i = 0; i < this.clickX.length; i++) {
        this.context.fillStyle = 'white'
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
      const { width, height } = this.context.canvas
      this.context.clearRect(0, 0, width, height)
      this.clickX = []
      this.clickY = []
      this.clickDrag = []
    }
  }
}
</script>

<style lang="scss" scoped>

canvas {
  border: solid 1px rgba(255,255,255, 0.1);
  background: white;
}
</style>
