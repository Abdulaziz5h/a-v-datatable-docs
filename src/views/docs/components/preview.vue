<template>
  <div>
    <p
      v-if="examples[type].description"
      v-html="examples[type].description"
    ></p>
    <b-tabs active-nav-item-class="text-primary">
      <b-tab title="view" active>
        <a-v-datatable
          :key="type"
          :headers="examples[type].headers"
          :items="examples[type].items"
          classes="borderd cell-borderd striped"
          v-model="examples[type].selected"
          :reduce="examples[type].reduce"
          :selectOptions="examples[type].selectOptions"
          :collapseOptoins="examples[type].collapseOptoins"
        />
        <b-alert
          class="border"
          show
          variant="light"
          v-if="examples[type].selectOptions.enable"
        >
          selected:
          <pre class="m-0">
            {{ examples[type].selected }}
          </pre>
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

export default {
  props: {
    type: String,
    default: () => "basic",
  },
  data: () => ({
    examples
  }),
  watch: {
    type() {
      if(this.examples[this.type].selected.findIndex) {
        this.examples[this.type].selected = [];
      } else {
        this.examples[this.type].selected = new Object({})
      }
    },
  },
};
</script>
