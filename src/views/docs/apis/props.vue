<template>
<b-container class="p-0">
  <h4 class="title">a-v datatable Props</h4>
  <a-v-datatable
    :headers="headers"
    :items="componentProps"
    classes="borderd cell-borderd striped"
    :collapseOptoins="{
      enable: true,
      headers: [
        {
          label: 'Attribute',
          value: 'attribute'
        },
        {
          label: 'Description',
          value: 'description'
        },
      ]
    }"
  >
    <template slot="collapse-icon">
      <i class="mdi mdi-chevron-down"></i>
    </template>
    
    <template slot="children.row-td.description" slot-scope="{value}">
     <span v-html="value"></span>
    </template>
    <template slot="row-td.default" slot-scope="{ value }">
      <a-html language="javascript" :html="value" />
    </template>
    <template slot="row-td.type" slot-scope="{ value }">
      <code class="text-nowrap">
        {{value}}
      </code>
    </template>
    <template slot="row-td.details" slot-scope="{ value }">
      <span v-html="value"></span>
    </template>
    
  </a-v-datatable>
  <section class="pb-3 pt-5 d-flex">
    <router-link to="/documentation/examples" class="mr-auto"
      ><i class="mdi mdi-arrow-left pr-1">Examples</i></router-link
    >
    <router-link to="/documentation/apis/slots" class="ml-auto"
      >Slots<i class="mdi mdi-arrow-right pl-1"></i
    ></router-link>
  </section>
</b-container>
</template>

<script>
import { componentProps } from "./api-data"
export default {
  data: () => ({
    componentProps,
    headers: [
      {
        label: "Prop",
        value: "prop"
      },
      {
        label: "Default",
        value: "default"
      },
      {
        label: "Type",
        value: "type"
      },
      {
        label: "Details",
        value: "details"
      }
    ]
  }),
}
</script>