<template>
  <div class="home">
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

          <post-it :background-color="theme.postItYellow">
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
            <footer>
            </footer>
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
        <h1 :style="{'color': theme.primaryText}">
          Components
        </h1>
        <section>
          <toggle-switch title="This is a toggle switch" />
        </section>

        <theme-picker :themes="themes" />
        
        <paint :width="480" :height="300" />

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
  GridLayout, 
  Footer as VueFooter,
  MainContent,
  Navbar,
  Paint,
  PostIt,
  Sidebar,
  SidebarContent,
  SidebarHeader,
  ThemePicker,
  ToggleSwitch,
} from '@/components'
import themes from '@/themes'

export default {
  name: 'home',
  data() {
    return {
      showSidebar: false,
      arrowDirection: 'left',
      theme: themes.dark,
      themes
    }
  },
  methods: {
    toggle() {
      this.showSidebar = !this.showSidebar
    },
  },
  components: {
    Card,
    GridLayout, 
    MainContent,
    Paint,
    PostIt,
    ToggleSwitch,
    ThemePicker,
    VueFooter,
  }
}
</script>

<style lang="scss" scoped>

</style>
