<template>
  <b-container class="p-0">
    <h4 class="title">a-v-datatable examples</h4>
    <section class="pb-3">
      <b-row>
        <b-col
          cols
          v-for="(ex, i) in examplesTypes"
          :key="i"
        >
          <b-card no-body class="mb-3 text-center">
            <b-card-body
              class="p-4 rounded example-card-body"
              :class="{ active: example == ex.id }"
              @click="$router.replace('/documentation/examples/' + ex.id)"
            >
              <h5 class="m-0 text-capitalize text-nowrap">{{ ex.title }}</h5>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <section class="pb-5">
      <h5 class="title">preview</h5>
      <preview :type="example"/>
    </section>
    <section class="pb-3 pt-2 d-flex">
      <router-link to="/documentation" class="mr-auto"
        ><i class="mdi mdi-arrow-left pr-1">Introduction</i></router-link
      >
      <router-link to="/documentation/methods" class="ml-auto"
        >Methods<i class="mdi mdi-arrow-right pl-1"></i
      ></router-link>
    </section>
  </b-container>
</template>

<script>
import preview from "./../components/preview.vue";
import {
  examplesTypes
} from "./html-documentation";
export default {
  components: {
    preview
  },
  props: {
    example: String,
  },
  data: () => ({
    examplesTypes
  })
};
</script>

<style scoped lang="scss">
.example-card-body {
  cursor: pointer;
  transition: 0.4s;
  &.active,
  &:hover {
    background: var(--primary);
    color: #fff;
  }
}
</style>
