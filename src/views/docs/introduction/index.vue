<template>
  <b-container class="p-0">
    <section class="pb-5">
      <h4 class="title">What is a-v-datatable?</h4>
      <p class="text-justify">
        a-v-datatable is a vue component built with
        <a href="https://vuejs.org/">vue</a> and
        <a href="https://www.npmjs.com/package/@vue/composition-api"
          >@vue/composition-api</a
        >
        to make work with tables easer and faster.
      </p>
    </section>
    <section class="pb-5">
      <h4 class="title">why a-v-datatable?</h4>
      <p class="text-justify">
        When you work with a-v-datatable, You may want to add options to your
        table (Add, Update, Delete) or you may want to add collapsable table or
        what ever. So, You will not create your table from the beginning. Vue
        datatable gives you ability to change cells or rows and fully control in
        your data.
      </p>
    </section>
    <section class="pb-5">
      <h4 class="title">getting started</h4>
      <div class="text-justify">
        <!-- First, You must download component package
        <b-button variant="outline-primary" class="mb-3 mt-2">
          dwonload package from github repo
          <i class="mdi mdi-github pl-3" style="font-size: 26px"></i>
        </b-button> -->
        <b-alert show variant="info" class="mt-2">
          <span>npm i a-v-datatable</span></b-alert
        >
        You must install
        <a href="https://www.npmjs.com/package/@vue/composition-api"
          >@vue/composition-api</a
        >
        <b-alert show variant="warning" class="mt-2">
          <span>npm i @vue/composition-api</span></b-alert
        >
        <a-html class="mb-4" language="javascript" :html="compositionApiInstall"></a-html>
        <h5 class="title">global implementation</h5>
        <a-html class="mb-4" language="javascript" :html="AVDatatableGlobalImplementation"></a-html>
        <h5 class="title">local implementation</h5>
        <a-html class="mb-4" language="javascript" :html="AVDatatableLocalImplementation"></a-html>
      </div>
    </section>
    <section class="pb-3">
      <h4 class="title">basic usage</h4>
      <b-tabs active-nav-item-class="text-primary">
        <b-tab title="view" active>
          <a-v-datatable
            :headers="headers"
            :items="users"
            classes="borderd cell-borderd striped"
          />
        </b-tab>
        <b-tab title="template">
          <a-html a-html language="javascript" :html="basicUasgeTemplate" />
        </b-tab>
        <b-tab title="script">
          <a-html a-html language="javascript" :html="basicUasgeScript" />
        </b-tab>
      </b-tabs>
    </section>
    <section class="pb-3 pt-2 text-right">
      <router-link to="/docs/examples">Examples<i class="mdi mdi-arrow-right pl-1"></i></router-link>
    </section>
  </b-container>
</template>

<script>
import {
  compositionApiInstall,
  basicUasgeScript,
  basicUasgeTemplate,
  AVDatatableGlobalImplementation,
  AVDatatableLocalImplementation
} from "./../install-html";
import { users, headers } from "./../fake-data";
// import { aVDatatable } from "./../../../../dist/a-v-datatable.common"
// import "./../../../../dist/a-v-datatable.css"
export default {
  components: {
    // aVDatatable
  },
  data: () => ({
    users,
    headers,
    compositionApiInstall,
    basicUasgeScript,
    basicUasgeTemplate,
  AVDatatableGlobalImplementation,
  AVDatatableLocalImplementation
  }),
};
</script>
