<template>
  <div class="home">
    
    <sidebar :show="showSidebar" :background-color="theme.background0" @close-sidebar="showSidebar = !showSidebar">
      <sidebar-header 
        :background-color="theme.background1"
        title="Title"
        :title-color="theme.primaryText"
        subtitle="Subtitle"
        :subtitle-color="theme.secondaryText"
        @close-sidebar="toggle"
      />
      <sidebar-content>
        <router-link to="/">
          Inicio
        </router-link>
        <collapsable title="Item 1" :titleColor="theme.primaryText" :color="theme.primaryText" >
          
        </collapsable>
      </sidebar-content>

    </sidebar>
    <navbar 
      @nav-action="toggle" 
      title="My awesome Vuepage :D" 
      :active="showSidebar" 
      :background-color="theme.background1" 
      :color="theme.primaryText"
    />

    <main-content :background-color="theme.background0">
      <div>

        <h1 :style="{'color': theme.primaryText}">Post-Its</h1>
        <grid-layout>

          <post-it :background-color="theme.postItRed">
            <header class="post-it-header">
              <img src="" alt="" sizes="" srcset="">
            </header>
            <div>
              <h2>Title</h2>
              <section>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, delectus ad beatae distinctio quaerat suscipit consequuntur numquam consequatur natus sequi temporibus quis quasi labore excepturi necessitatibus, voluptatem provident laboriosam expedita?
              </section>
            </div>
            <footer></footer>
          </post-it>

          <post-it  :background-color="theme.postItYellow">
            <header class="post-it-header">
              <img src="" alt="" sizes="" srcset="">
            </header>
            <div>
              <h2>Title</h2>
              <section>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, delectus ad beatae distinctio quaerat suscipit consequuntur numquam consequatur natus sequi temporibus quis quasi labore excepturi necessitatibus, voluptatem provident laboriosam expedita?
              </section>
            </div>
            <footer></footer>
          </post-it>

          <post-it  :background-color="theme.postItYellow">
            <header class="post-it-header">
              <img src="" alt="" sizes="" srcset="">
            </header>
            <div>
              <h2>Title</h2>
              <section>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, delectus ad beatae distinctio quaerat suscipit consequuntur numquam consequatur natus sequi temporibus quis quasi labore excepturi necessitatibus, voluptatem provident laboriosam expedita?
              </section>
            </div>
            <footer></footer>
          </post-it>

          <post-it  :background-color="theme.postItGreen">
            <header class="post-it-header">
              <img src="" alt="" sizes="" srcset="">
            </header>
            <div>
              <h2>Title</h2>
              <section>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit. Nulla, delectus ad beatae distinctio quaerat suscipit consequuntur numquam consequatur natus sequi temporibus quis quasi labore excepturi necessitatibus, voluptatem provident laboriosam expedita?
              </section>
            </div>
            <footer></footer>
          </post-it>

        </grid-layout>
        <h1 :style="{'color': theme.primaryText}">Cards</h1>
        <grid-layout>

          <card title="Card 1">
            <div>
              This is the card content
            </div>
          </card>

        </grid-layout>
        <paint />

      </div>
      <vue-footer :color="theme.primaryText" :background-color="theme.background2">
        <div>
          Made with ❤️ by @spooky.dev
        </div>
      </vue-footer>
    </main-content>
  </div>
</template>

<script>
import {
  Card,
  Collapsable,
  GridLayout, 
  Footer as VueFooter,
  MainContent,
  Navbar,
  Paint,
  PostIt,
  Sidebar,
  SidebarContent,
  SidebarHeader,
} from '@/components'
import themes from '@/themes'

export default {
  name: "home",
  data() {
    return {
      showSidebar: false,
      arrowDirection: 'left',
      theme: themes.dark
    }
  },
  methods: {
    toggle() {
      this.showSidebar = !this.showSidebar
    },
  },
  components: {
    Card,
    Collapsable,
    VueFooter,
    GridLayout, 
    MainContent,
    Navbar,
    Paint,
    PostIt,
    Sidebar,
    SidebarContent,
    SidebarHeader,
  }
}
</script>

<style lang="scss" scoped>
.home {
  height: 100%;
}
</style>
