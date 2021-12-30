<template>
<b-container class="p-0">
  <h4 class="title">a-v datatable Slots</h4>
  <a-v-datatable
    :headers="headers"
    :items="componentSlots"
    classes="borderd cell-borderd striped"
  >
    <template slot="collapse-icon">
      <i class="mdi mdi-chevron-down"></i>
    </template>
  </a-v-datatable>
  <section class="pb-3 pt-5 d-flex">
    <router-link to="/documentation/apis/props" class="mr-auto"
      ><i class="mdi mdi-arrow-left pr-1">Props</i></router-link
    >
    <!-- <router-link to="/documentation/apis/slots" class="ml-auto"
      >Slots<i class="mdi mdi-arrow-right pl-1"></i
    ></router-link> -->
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
        label: "Details",
        value: "details"
      }
    ]
  }),
}
</script>