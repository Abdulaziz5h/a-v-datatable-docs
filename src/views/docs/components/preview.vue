<template>
<div>
    <p v-if="examples[type].description" v-html="examples[type].description"></p>
    <b-tabs active-nav-item-class="text-primary">
      <b-tab title="view" active>
        <a-v-datatable
          :headers="examples[type].headers"
          :items="examples[type].items"
          classes="borderd cell-borderd striped"
          v-model="selected"
          :reduce="examples[type].reduce"
          :selectOptions="examples[type].selectOptions"
        />
        <b-alert class="border" show variant="light">
          selected: {{selected}}
        </b-alert>
      </b-tab>
      <b-tab title="template" v-if="examples[type].template">
        <a-html a-html language="javascript" :html="examples[type].template" />
      </b-tab>
      <b-tab title="script" v-if="examples[type].script">
        <a-html a-html language="javascript" :html="examples[type].script" />
      </b-tab>
    </b-tabs>
</div>
</template>

<script>
import { examples } from "../examples/html-documentation";

import { aVDatatable } from "a-v-datatable"
import "a-v-datatable/dist/a-v-datatable.css"
export default {
  components: {
    aVDatatable
  },
  props: {
    type: String,
    default: () => "basic",
  },
  data: () => ({
    examples,
    selected: []
  }),
  watch: {
    type() {
      this.selected = []
    }
  }
};
</script>
