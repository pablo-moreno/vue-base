<template>
  <div id="app">
    <navbar 
      @nav-action="showSidebar = !showSidebar" 
      title="My awesome Vuepage :D" 
      :active="showSidebar" 
      :background-color="theme.background1" 
      :color="theme.primaryText"
    />

    <sidebar :show="showSidebar" :background-color="theme.background0" @close-sidebar="showSidebar = !showSidebar">
      <sidebar-header 
        :background-color="theme.background1"
        title="Title"
        :title-color="theme.primaryText"
        subtitle="Subtitle"
        :subtitle-color="theme.secondaryText"
        @close-sidebar="showSidebar = !showSidebar"
      />
      <sidebar-content>
        <router-link to="/">
          Inicio
        </router-link>
        <collapsable title="Item 1" :title-color="theme.primaryText" :color="theme.primaryText" >
          <router-link to="/chat">
            Chat
          </router-link>
          <router-link to="/a">
            Chat
          </router-link>
          <router-link to="/b">
            Chat
          </router-link>
        </collapsable>
      </sidebar-content>
    </sidebar>
    <router-view/>
    
  </div>
</template>
<script>
import themes from './themes'
import { Navbar, Sidebar, SidebarHeader, SidebarContent, Collapsable, Footer as VueFooter } from '@/components'
export default {
  data() {
    return {
      theme: themes.dark,
      showSidebar: false,
    }
  },
  components: {
    Navbar, Sidebar, SidebarHeader, SidebarContent, Collapsable
  }
}
</script>

<style lang="scss">
* {
    margin:0;
    padding:0;
}

html, body, #app {
  position: relative;
  height: 100%;
}

body {
  margin: 0;
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
}

a, a:active, a:visited {
  outline: none;
  color: white;
  text-decoration: none;
}


</style>
