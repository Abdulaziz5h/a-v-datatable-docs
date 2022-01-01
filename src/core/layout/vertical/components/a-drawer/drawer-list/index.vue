<template>
<div class="drawer-list-container">
  <div class="brand" @click="$router.replace('/')">
      <a-logo-primary width="50"/>
  </div>
  <VuePerfectScrollbar class="scroll-area" :settings="settings">
    <b-list-group class="drawer-list">
        <drawer-list-item
          v-for="(item, index) in items"
          :key="index"
          :item="item"
        ></drawer-list-item>
    </b-list-group>
  </VuePerfectScrollbar>
  <div class="drawer-list-footer">
    <a href="https://www.linkedin.com/in/abdulaziz-shahrour/">
      <b-button block variant="outline-primary justify-content-center">about me</b-button>
    </a>
  </div>
</div>
</template>

<script>
import VuePerfectScrollbar from 'vue-perfect-scrollbar'
import drawerListItem from "./../drawer-list-item/index.vue";
export default {
  props: {
    items: Array,
  },
  components: {
    drawerListItem,
    VuePerfectScrollbar
  },
  data() {
    return {
      settings: {
      }
    }
  }
};
</script>

