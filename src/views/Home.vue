<template>
  <div class="home">
    <sidebar :show="showSidebar" background-color="#10171e">
      <sidebar-header 
        background-color="#1c2938"
        title="Title"
        title-color="white"
        subtitle="Subtitle"
        subtitle-color="#EAEAEA"
        @close-sidebar="toggle"
      />

      <collapsable title="Holaaa" titleColor="white" color="white" >
        <div>
          Holi
        </div>
      
      </collapsable>

    </sidebar>
    <navbar @nav-action="toggle" title="My awesome Vuepage :D" :active="showSidebar" background-color="#1c2938" color="white" />

    <main-content background-color="#10171e">
      <grid-layout >
        <post-it background-color="red">
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

        <post-it>
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

        <post-it>
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

        <post-it>
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

        <post-it background-color="yellow">
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

        <post-it background-color="red">
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
    </main-content>
  </div>
</template>

<script>
import {
  Collapsable,
  GridLayout, 
  MainContent,
  Navbar,
  PostIt,
  Sidebar,
  SidebarHeader,
} from '@/components'

export default {
  name: "home",
  data() {
    return {
      showSidebar: false,
      arrowDirection: 'left',
    }
  },
  methods: {
    toggle() {
      this.showSidebar = !this.showSidebar
    },
  },
  components: {
    Collapsable,
    GridLayout, 
    MainContent,
    Navbar,
    PostIt,
    Sidebar,
    SidebarHeader,
  }
}
</script>
