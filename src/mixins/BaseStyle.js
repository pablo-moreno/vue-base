export default {
  props: {
    color: String,
    backgroundColor: String,
    hoverColor: String,
    hoverBackground: String,
    activeColor: String,
    activeBackground: String,
    height: {
      type: [Number, String],
      default: 8,
    },
    width: {
      type: [Number, String],
      default: 8,
    },
  },
  data() {
    return {
      hover: false,
      active: false
    }
  },
  mounted() {
    this.$el.onmouseover = function() {
      this.hover = true
    }
    
    this.$el.onmouseup = function() {
      this.active = true
    }

    this.$el.onmouseout = function() {
      this.hover = false
      this.active = false
    }
  }
}