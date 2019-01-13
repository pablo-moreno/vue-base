<template>
  <div class="home">
    <sidebar :show="showSidebar" background-color="white">
      <sidebar-header 
        img-src="https://o.aolcdn.com/images/dims3/GLOB/crop/1633x819+0+38/resize/630x315!/format/jpg/quality/85/http%3A%2F%2Fo.aolcdn.com%2Fhss%2Fstorage%2Fmidas%2F29565b2c1567e8650b77a4809d8e9500%2F205467300%2FCaptura%2Bde%2Bpantalla%2B2017-07-12%2Ba%2Blas%2B10.03.01.png"
        title="Title"
        title-color="white"
      />
      <loading 
        color="#909090" 
        background-color="#f3f3f3" 
        
      />
    </sidebar>
    <div style="display: flex, justify-content: flex-end">
      <button @click="() => showSidebar = !showSidebar">Show sidebar</button>
      <button @click="arrowDirection = 'top'">Top</button>
      <button @click="arrowDirection = 'right'">Right</button>
      <button @click="arrowDirection = 'bottom'">Bottom</button>
      <button @click="arrowDirection = 'left'">Left</button>
      <arrow :direction="arrowDirection" />
    </div>
    <graph id="my-graph" chart-type="bar" :data="data" :options="options" />
    <slider v-model="selectValue" :min="0" :max="100" />
  </div>
</template>

<script>
import Arrow from '@/components/Arrow'
import Graph from "@/components/Graph"
import Loading from '@/components/Loading'
import Sidebar from '@/components/Sidebar'
import SidebarHeader from '@/components/SidebarHeader'
import Slider from '@/components/Slider'

export default {
  name: "home",
  data() {
    return {
      data: {
        labels: ["Red", "Blue", "Yellow", "Green", "Purple", "Orange"],
        datasets: [
          {
            label: "# of Votes",
            data: [12, 19, 3, 5, 2, 3],
            backgroundColor: [
              "rgba(255, 99, 132, 0.2)",
              "rgba(54, 162, 235, 0.2)",
              "rgba(255, 206, 86, 0.2)",
              "rgba(75, 192, 192, 0.2)",
              "rgba(153, 102, 255, 0.2)",
              "rgba(255, 159, 64, 0.2)"
            ],
            borderColor: [
              "rgba(255,99,132,1)",
              "rgba(54, 162, 235, 1)",
              "rgba(255, 206, 86, 1)",
              "rgba(75, 192, 192, 1)",
              "rgba(153, 102, 255, 1)",
              "rgba(255, 159, 64, 1)"
            ],
            borderWidth: 1
          }
        ]
      },
      options: {
        scales: {
          yAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0
              }
            }
          ],
          xAxes: [
            {
              ticks: {
                beginAtZero: true,
                min: 0
              }
            }
          ]
        }
      },
      selectValue: 50,
      showSidebar: true,
      arrowDirection: 'left'
    }
  },
  watch: {
    selectValue() {
      console.log('selectValue', this.selectValue)
    }
  },
  components: {
    Arrow,
    Graph,
    Loading,
    Sidebar,
    SidebarHeader,
    Slider,
  }
}
</script>
