<template>
<dl>
  <dt>
    {{ title }}
  </dt>
  <dd 
    class="percentage" 
    :class="`percentage-${Math.round(item.value)}`" 
    v-for="item in items" 
    :key="item.id"
  >
    <span class="text">
      {{ item.description }}
    </span>
  </dd>
</dl>
</template>

<script>
export default {
  props: {
    items: {
      type: Array,
      validator(items) {
        let ok = items.map(item => {
          return item.id !== undefined && 
                 item.description !== undefined && 
                 item.value !== undefined
        })
        return ! ok.includes(false)
      }
    },
    title: {
      type: String,
      default: ''
    }
  }
}
</script>

<style lang="scss" scoped>
dl {
  display: flex;
  background-color: white;
  flex-direction: column;
  width: 100%;
  position: relative;
  padding: 20px;
}

dt {
  align-self: flex-start;
  width: 100%;
  font-weight: 700;
  display: block;
  text-align: center;
  font-size: 1.2em;
  font-weight: 700;
  margin-bottom: 20px;
  margin-left: 130px;
}

.text {
  font-weight: 600;
  display: flex;
  align-items: center;
  height: 40px;
  width: 130px;
  background-color: white;
  position: absolute;
  left: 0;
  justify-content: flex-end;
}

@for $i from 1 through 100 {
  .percentage-#{$i}:after {
    $value: ($i * 1%);
    width: $value;
  }
}

.percentage {
  font-size: .8em;
  line-height: 1;
  text-transform: uppercase;
  width: 100%;
  height: 40px;
  margin-left: 130px;
  background: repeating-linear-gradient(
    to right,
    #ddd,
    #ddd 1px,
    #fff 1px,
    #fff 5%
  );
  
  &:after {
    content: "";
    display: block;
    background-color: #3d9970;
    width: 50px;
    margin-bottom: 10px;
    height: 90%;
    position: relative;
    top: 50%;
    transform: translateY(-50%);
    transition: background-color .3s ease;
    cursor: pointer;
  }
  &:hover,
  &:focus {
    &:after {
       background-color: #aaa; 
    }
  }
}

@for $i from 1 through 100 {
  .percentage-#{$i} {
    &:after {
      $value: ($i * 1%);
      width: $value;
    }
  }
}

.percentage:after {
  content: "";
  display: block;
  background-color: #3d9970;
}
</style>
