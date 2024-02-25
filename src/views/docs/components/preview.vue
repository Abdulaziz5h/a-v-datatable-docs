<template>
  <div>
    <p
      v-if="examples[type].description"
      v-html="examples[type].description"
    ></p>
    <b-button
      v-if="examples[type].crud"
      @click="addNew"
      class="mb-3"
      variant="primary"
      >add new</b-button
    >
    <b-tabs active-nav-item-class="text-primary">
      <b-tab title="View" active>
        <a-v-datatable
          :key="type"
          :headers="examples[type].headers"
          :items="examples[type].items"
          classes="borderd cell-borderd striped"
          v-model="examples[type].selected"
          :reduce="examples[type].reduce"
          ref="a-v-datatable"
          :selectOptions="examples[type].selectOptions"
          :collapseOptoins="examples[type].collapseOptoins"
          :paginationOptions="examples[type].paginationOptions"
          @add="log"
          @details="getDetails"
          @remove="log"
        >
          <template slot="collapse-icon" v-if="examples[type].slot">
            <i class="mdi mdi-arrow-down"></i>
          </template>
          <template
            slot="row-td.src"
            slot-scope="{ row, value }"
            v-if="examples[type].slot"
          >
            <img
              :src="value"
              width="50"
              height="50"
              class="rounded-circle mx-auto d-block"
              :alt="row.formatedRow.name"
            />
          </template>
          <template
            slot="cars.row-td.model"
            slot-scope="{ value }"
            v-if="examples[type].slot"
          >
            <b-badge variant="primary">{{ value }}</b-badge>
          </template>
          <template
            slot="details"
            slot-scope="{ details }"
            v-if="examples[type].slot"
          >
            <div class="text-center w-50 d-inline-block">
              <b-button size="sm" @click="details()" variant="info"
                ><i class="mdi mdi-pen"></i
              ></b-button>
            </div>
          </template>
          <template
            slot="remove"
            slot-scope="{ remove }"
            v-if="examples[type].slot"
          >
            <div class="text-center w-50 d-inline-block">
              <b-button size="sm" variant="danger" @click="remove()"
                ><i class="mdi mdi-delete"></i
              ></b-button>
            </div>
          </template>

          <template slot="page-prev">
            <i class="mdi mdi-arrow-left"></i>
          </template>
          <template slot="page-next">
            <i class="mdi mdi-arrow-right"></i>
          </template>
        </a-v-datatable>
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
        <b-alert class="border" show variant="light" v-if="examples[type].crud">
          row:
          <pre class="m-0">
            {{ row }}
          </pre>
        </b-alert>
      </b-tab>
      <b-tab title="Template" v-if="examples[type].template">
        <a-html language="html" :html="examples[type].template" />
      </b-tab>
      <b-tab title="Script" v-if="examples[type].script">
        <a-html language="javascript" :html="examples[type].script" />
      </b-tab>
      <b-tab title="Scss" v-if="examples[type].scss">
        <a-html language="scss" :html="examples[type].scss" />
      </b-tab>
    </b-tabs>
  </div>
</template>
<style lang="scss">
.pagination-list .page-active {
  background: var(--primary) !important;
}
.pagination-list .page-item:hover {
  background: var(--primary) !important;
  color: #fff;
}
</style>
<script>
import { examples } from "../examples/html-documentation";

export default {
  props: {
    type: String,
    default: () => "basic",
  },
  data: () => ({
    examples,
    row: null,
    newRow: {
      id: 110,
      name: "Ervin Howell",
      username: "Antonette",
      phone: "010-692-6593 x09125",
      src: "https://i.pravatar.cc/150?img=60",
      cars: [
        {
          id: 1,
          make: "GMC",
          model: "Yukon Denali",
          modelYear: 2016,
        },
        {
          id: 5,
          make: "Ford",
          model: "LTD Crown Victoria",
          modelYear: 1981,
        },
      ],
    },
  }),
  methods: {
    addNew() {
      this.$refs["a-v-datatable"].add(this.newRow);
    },
    getDetails(e) {
      this.row = e;
    },
    log(e) {
      console.log(e);
    },
  },
  watch: {
    type() {
      if (this.examples[this.type].selected.findIndex) {
        this.examples[this.type].selected = [];
      } else {
        this.examples[this.type].selected = new Object({});
      }
    },
  },
};
</script>
