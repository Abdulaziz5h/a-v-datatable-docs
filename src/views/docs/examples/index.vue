<template>
  <b-container class="p-0">
    <h4 class="title">a-v-datatable examples</h4>
    <section class="pb-3">
      <b-row>
        <b-col
          cols="12"
          md="6"
          lg="4"
          v-for="(ex, i) in examples"
          :key="i"
        >
          <b-card no-body class="mb-3 text-center">
            <b-card-body
              class="p-4 rounded example-card-body"
              :class="{ active: example == ex }"
              @click="$router.replace('/docs/example/' + ex)"
            >
              <h5 class="m-0 text-capitalize">{{ ex }} example</h5>
            </b-card-body>
          </b-card>
        </b-col>
      </b-row>
    </section>
    <section class="pb-5">
      <h5 class="title">preview</h5>
    </section>
    <section class="pb-3 pt-2 d-flex">
      <router-link to="/docs" class="mr-auto"
        ><i class="mdi mdi-arrow-left pl-1">Introduction</i></router-link
      >
      <router-link to="/props" class="ml-auto"
        >Props<i class="mdi mdi-arrow-right pl-1"></i
      ></router-link>
    </section>
  </b-container>
</template>

<script>
export default {
  props: {
    example: String,
  },
  data: () => ({
    examples: ["basic", "selection"],
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
