<template>
  <b-container class="p-0">
    <h4 class="title">a-v datatable Events</h4>
    <a-v-datatable
      :headers="headers"
      :items="componentEvents"
      classes="borderd cell-borderd striped"
    >
      <template slot="collapse-icon">
        <i class="mdi mdi-chevron-down"></i>
      </template>
      <template slot="row-td.details" slot-scope="{ value }">
        <span v-html="value"></span>
      </template>
    </a-v-datatable>
    <section class="pb-3 pt-5 d-flex">
      <router-link to="/documentation/apis/slots" class="mr-auto"
        ><i class="mdi mdi-arrow-left pr-1">Slots</i></router-link
      >
      <!-- <router-link to="/documentation/apis/events" class="ml-auto"
      >Events<i class="mdi mdi-arrow-right pl-1"></i
    ></router-link> -->
    </section>
  </b-container>
</template>

<script>
import { componentEvents } from "./api-data";
export default {
  data: () => ({
    componentEvents,
    headers: [
      {
        label: "Name",
        value: "name",
      },
      {
        label: "Arguments",
        value: "args",
      },
      {
        label: "Details",
        value: "details",
      },
    ],
  }),
};
</script>
