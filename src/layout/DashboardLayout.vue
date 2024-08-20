<template>
  <div class="wrapper">
    <side-bar>
      <mobile-menu slot="content"></mobile-menu>
      <sidebar-link to="/admin/overview">
        <i class="nc-icon nc-chart-pie-35"></i>
        <p>Tableau de bord</p>
      </sidebar-link>
      <sidebar-link to="/admin/voiture">
        <i class="nc-icon nc-bus-front-12"></i>
        <p>voiture</p>
      </sidebar-link>
      <sidebar-link to="/admin/disponible">
        <i class="nc-icon nc-tag-content"></i>
        <p>disponible</p>
      </sidebar-link>
      <sidebar-link to="/admin/historique">
        <i class="nc-icon nc-notes"></i>
        <p>Historique</p>
      </sidebar-link>
     <!--  -->
      <!-- <sidebar-link to="/admin/icons">
        <i class="nc-icon nc-atom"></i>
        <p>Icône</p>
      </sidebar-link> -->
      <sidebar-link to="/admin/reservation">
        <i class="nc-icon nc-cart-simple"></i>
        <p>Réservation</p>
      </sidebar-link>
      <sidebar-link to="/admin/utilisateur">
        <i class="nc-icon nc-single-02"></i>
        <p>Utilisateur</p>
      </sidebar-link>

      <!-- <template slot="bottom-links">
        <sidebar-link class="active" to="/admin/upgrade">
          <i class="nc-icon nc-alien-33"></i>
          <p>Upgrade to PRO</p>
        </sidebar-link>
      </template> -->
      
    </side-bar>
    <div class="main-panel">
      <top-navbar></top-navbar>

      <dashboard-content @click="toggleSidebar"> </dashboard-content>

      <content-footer></content-footer>
    </div>
  </div>
</template>
<style lang="scss">
</style>
<script>
import TopNavbar from "./TopNavbar.vue";
import ContentFooter from "./ContentFooter.vue";
import DashboardContent from "./Content.vue";
import MobileMenu from "./MobileMenu.vue";
export default {
  components: {
    TopNavbar,
    ContentFooter,
    DashboardContent,
    MobileMenu,
  },
  methods: {
    toggleSidebar() {
      if (this.$sidebar.showSidebar) {
        this.$sidebar.displaySidebar(false);
      }
    },
  },
};
</script>
