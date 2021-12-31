<template>
<b-container class="p-0">
  <h4 class="title">a-v datatable Methods</h4>
  <p>You can use this methods by add refrence to the a-v datatable component and call this methods <router-link to="/documentation/examples/crud">Example</router-link></p>
  <a-v-datatable
    :headers="headers"
    :items="componentMethods"
    classes="borderd cell-borderd striped"
  >
    <template slot="row-td.details" slot-scope="{value}">
      <span v-html="value"></span>
    </template>
    <template slot="row-td.args" slot-scope="{value}">
      <span v-html="value"></span>
    </template>
  </a-v-datatable>
  <section class="pb-3 pt-5 d-flex">
    <router-link to="/documentation/examples/basic" class="mr-auto"
      ><i class="mdi mdi-arrow-left pr-1">Examples</i></router-link
    >
    <router-link to="/documentation/apis/props" class="ml-auto"
      >Props<i class="mdi mdi-arrow-right pl-1"></i
    ></router-link>
  </section>
</b-container>
</template>

<script>
import { componentMethods } from "../apis/api-data"
export default {
  data: () => ({
    componentMethods,
    headers: [
      {
        label: "Name",
        value: "name"
      },
      {
        label: "Arguments",
        value: "args"
      },
      {
        label: "Details",
        value: "details"
      }
    ]
  }),
}
</script>