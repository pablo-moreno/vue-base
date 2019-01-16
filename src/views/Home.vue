<template>
  <div class="home">
    <sidebar :show="showSidebar" background-color="white">
      <sidebar-header 
        title="Title"
        title-color="black"
        subtitle="Subtitle"
        subtitle-color="#606060"
        @close-sidebar="toggle"
      />
    </sidebar>
    <navbar @nav-action="toggle" title="AdoptaWeb" :active="showSidebar" />
  </div>
</template>

<script>
import {
  Navbar,
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
    Navbar,
    Sidebar,
    SidebarHeader,
  }
}
</script>
