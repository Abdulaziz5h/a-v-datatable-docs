<template>
  <b-container class="p-0">
    <section class="pb-5">
      <h4 class="title">What is {{appName}}?</h4>
      <p class="text-justify">
        a-v datatable is a vue component built with
        <a href="https://vuejs.org/">Vue</a>
        to make work with tables easer and faster.
      </p>
    </section>
    <section class="pb-5">
      <h4 class="title">why {{appName}}?</h4>
      <p class="text-justify">
        When you work with tables, You may want to add options to your
        table (Add, Update or Delete) or you may want to add collapsible table or
        what ever. So, You will not create your table from the beginning. <span class="text-primary text-nowrap">{{appName}}</span> gives you ability to change cells or rows and full control on
        your data.
      </p>
    </section>
    <section class="pb-5">
      <h4 class="title">getting started</h4>
      <div class="text-justify">
        <b-alert show variant="info" class="mt-2">
          <span>npm i a-v datatable</span></b-alert
        >
        <h5 class="title">global implementation</h5>
        <a-html class="mb-4" language="javascript" :html="AVDatatableGlobalImplementation"></a-html>
        <h5 class="title">local implementation</h5>
        <a-html class="mb-4" language="javascript" :html="AVDatatableLocalImplementation"></a-html>
      </div>
    </section>
    <section class="pb-3">
      <h4 class="title">basic usage</h4>
      <preview :type="examplesTypes.Basic.id"/>
    </section>
    <section class="pb-3 pt-2 text-right">
      <router-link to="/documentation/examples">Examples<i class="mdi mdi-arrow-right pl-1"></i></router-link>
    </section>
  </b-container>
</template>

<script>
import preview from "./../components/preview.vue";
import {
  AVDatatableGlobalImplementation,
  AVDatatableLocalImplementation,
  examplesTypes
} from "../examples/html-documentation";
import { $_themeConfig } from "@themeConfig";
export default {
  components: {
    preview
  },
  setup() {
    const appName = $_themeConfig.app.appName
    return {
      appName
    }
  },
  data: () => ({
    AVDatatableGlobalImplementation,
    AVDatatableLocalImplementation,
    examplesTypes
  }),
};
</script>