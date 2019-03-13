<template>
<div class="paint">
  
  <header>
    <div class="paint-header" :style="{'width': `${width}px`}" >
      <div class="color-list">
        <div class="paint-color" v-for="(mColor, i) in colors" :key="`color-${i}`" @click="color = mColor" :style="{'background': mColor}" />
      </div>
      <div>
        <input type="color" name="color-selector" v-model="color" @change="saveColor">
        <button @click="saveImage">Save</button>
      </div>
    </div>
  </header>

  <canvas 
    ref="the-canvas" 
    @mousedown="mouseDown" 
    @mousemove="mouseMove" 
    @mouseup="mouseUp" 
    @mouseleave="mouseLeave"
    :style="{'width': `${width}px`, 'height': `${height}px`}"
  >
  <a style="display: none" ref="download-link" />
  </canvas>
  <!-- <button @click="clear">Clear</button> -->
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
      clicks: [],
      color: '#df4b26',
      colors: [
        '#df4b26',
        '#235b26',
        '#982828',
        '#cfcfcf',
      ],
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
      this.addClick(x, y, this.color, false)
      this.redraw()
    },
    mouseMove(event) {
      if (this.paint) {
        const [x, y] = this.getMousePosition(event)

        this.addClick(x, y, this.color, true)
        this.redraw()
      }
    },
    mouseUp(event) {
      this.paint = false
    },
    mouseLeave(event) {
      this.paint = false
    },
    addClick(x, y, color, drag) {
      this.clicks.push({ x, y, color, drag })
    },
    redraw() {
      const canvas = this.$refs['the-canvas']
      const rect = canvas.getBoundingClientRect()
      this.context.clearRect(0, 0, rect.width, rect.height)
      
      this.context.lineJoin = this.lineStyle
      this.context.lineWidth = this.lineWidth
      this.context.fillStyle = 'white'
      this.context.fillRect(0, 0, canvas.width, canvas.height)

      this.clicks.forEach((click, i) => {
        this.context.strokeStyle = click.color
        this.context.beginPath()

        if (click.drag && i > 0) {
          this.context.moveTo(this.clicks[i - 1].x, this.clicks[i - 1].y)
        }
        else {
          this.context.moveTo(this.clicks[i].x - 1, this.clicks[i].y)
        }
        
        this.context.lineTo(this.clicks[i].x, this.clicks[i].y)
        this.context.closePath()
        this.context.stroke()
      })
    },
    clear() {
      const { width, height } = this.context.canvas
      this.context.clearRect(0, 0, width, height)
      this.clicks = []
    },
    saveColor() {
      if (this.colors.indexOf(this.color) === -1)
        this.colors.push(this.color)
    },
    saveImage() {
      const canvas = this.$refs['the-canvas']
      const data = canvas.toDataURL("image/jpeg").replace("image/jpeg", "image/octet-stream")
      const downloadLink = this.$refs['download-link']

      downloadLink.setAttribute('href', data) 
      downloadLink.setAttribute('download', 'file.jpg')
      downloadLink.click()
    }
  }
}
</script>

<style lang="scss" scoped>
header {
  display: flex;
  justify-content: center;
}

canvas {
  border: solid 1px rgba(255,255,255, 0.1);
  background: white;
}

.paint-color {
  width: 32px;
  height: 32px;
  border-radius: 50%;
  cursor: pointer;
  margin: 0 0.5em 0.5em 0;
}

.paint-header {
  display: flex;
  justify-content: space-between;
  flex-direction: row;
}

.color-list {
  display: flex;
  flex-wrap: wrap;
}
</style>
