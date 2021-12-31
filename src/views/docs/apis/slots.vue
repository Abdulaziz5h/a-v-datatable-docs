<template>
<b-container class="p-0">
  <h4 class="title">a-v datatable Slots</h4>
  <p>To use children table slots you will have to add children value name before slot name <span class="text-primary">'[children].[slot name]'</span> <br />
    <span class="text-info">Example: <code>children.header</code> in case of default children prop options</span>
  </p>
  <a-v-datatable
    :headers="headers"
    :items="componentSlots"
    classes="borderd cell-borderd striped"
  >
    <template slot="collapse-icon">
      <i class="mdi mdi-chevron-down"></i>
    </template>
    <template slot="row-td.details" slot-scope="{value}">
      <span v-html="value"></span>
    </template>
    <template slot="row-td.slot-scope" slot-scope="{value}">
      <ul class="list-unstyled p-0 m-0">
        <li v-if="!value.length"><small class="text-secondary">No Scopes</small></li>
        <template v-else>
          <li v-for="(scope, i) in value" :key="i">
            <small>{{i + 1}}- {{scope}}</small>
          </li>
        </template>
      </ul>
    </template>
  </a-v-datatable>
  <section class="pb-3 pt-5 d-flex">
    <router-link to="/documentation/apis/props" class="mr-auto"
      ><i class="mdi mdi-arrow-left pr-1">Props</i></router-link
    >
    <router-link to="/documentation/apis/events" class="ml-auto"
      >Events<i class="mdi mdi-arrow-right pl-1"></i
    ></router-link>
  </section>
</b-container>
</template>

<script>
import { componentSlots } from "./api-data"
export default {
  data: () => ({
    componentSlots,
    headers: [
      {
        label: "Slot",
        value: "slot"
      },
      {
        label: "Slot Scope",
        value: "slot-scope"
      },
      {
        label: "Details",
        value: "details"
      }
    ]
  }),
}
</script>