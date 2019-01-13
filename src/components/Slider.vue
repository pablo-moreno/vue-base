<template>
  <input type="range" :min="min" :max="max" :value="value" class="slider" :id="id" :name="name" @input="input">
</template>

<script>
export default {
  props: {
    min: {
      type: Number,
    },
    max: {
      type: Number
    },
    value: {
      type: Number
    },
    name: {
      type: String
    },
    id: {
      type: String
    }
  },
  methods: {
    input(event) {
      this.$emit('input', parseInt(event.target.value))
    }
  }
}
</script>

<style lang="scss" scoped>
.slider {
  -webkit-appearance: none;
  width: 100%;
  height: 15px;
  border-radius: 5px;  
  outline: none;
  opacity: 0.7;
  -webkit-transition: .2s;
  transition: opacity .2s;
}

.slider::-webkit-slider-thumb {
  -webkit-appearance: none;
  appearance: none;
  width: 25px;
  height: 25px;
  border-radius: 50%; 
  background: #4CAF50;
  cursor: pointer;
}

.slider::-moz-range-thumb {
  width: 25px;
  height: 25px;
  border-radius: 50%;
  background: #4CAF50;
  cursor: pointer;
}
</style>
