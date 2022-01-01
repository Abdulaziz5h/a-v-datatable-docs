<template>
<div class="min-vh-100 text-center d-flex flex-column justify-content-center py-5">
  <b-container>
    <a-logo-primary style="font-size: 40px" />
    <p class="lead mb-4">Is a component built with <a href="https://vuejs.org/">Vue</a> to make work with tables <span class="text-primary">easer</span> and <span class="text-primary">faster</span>.</p>
    <b-button class="px-5 py-2" variant="primary">Getting Started</b-button>
    <img class="table-preview border mx-auto my-5 w-100" src="/table.png" style="max-width: 800">
    <b-row>
      <b-col cols="12" md="6" lg="4" class="mx-auto mb-3">
        <div class="text-center p-3 border rounded mx-auto h-100" style="max-width: 320px">
          <h6 class="title text-primary">easy use</h6>
          Install from <a href="https://www.npmjs.com/package/a-v-datatable">NPM</a>, Implement it, Call it and fun.
          by an attribute you can add selection and collapsible
        </div>
      </b-col>
      <b-col cols="12" md="6" lg="4" class="mx-auto mb-3">
        <div class="text-center p-3 border rounded mx-auto h-100" style="max-width: 320px">
          <h6 class="title text-primary">Free & Open Source</h6>
          This component is free and open source for now.<br/>
          <small>In future we may add some paid feature </small>
        </div>
      </b-col>
      <b-col cols="12" md="6" lg="4" class="mx-auto mb-3">
        <div class="text-center p-3 border rounded mx-auto h-100" style="max-width: 320px">
          <h6 class="title text-primary">flexable</h6>
          You can interact with your data as you want and design it
        </div>
      </b-col>
      <b-col cols="12" md="6" lg="4" class="mx-auto mb-3">
        <div class="text-center p-3 border rounded mx-auto h-100" style="max-width: 320px">
          <h6 class="title text-primary">light weight</h6>
          Package with less than 4MB
        </div>
      </b-col>
      <b-col cols="12" md="6" lg="4" class="mx-auto mb-3">
        <div class="text-center p-3 border rounded mx-auto h-100" style="max-width: 320px">
          <h6 class="title text-primary">collapsible</h6>
          You can add collapse options to your table
        </div>
      </b-col>
      <b-col cols="12" md="6" lg="4" class="mx-auto mb-3">
        <div class="text-center p-3 border rounded mx-auto h-100" style="max-width: 320px">
          <h6 class="title text-primary">selection</h6>
          You can add selection options to your table
        </div>
      </b-col>
    </b-row>
  </b-container>
</div>
</template>

<style scoped lang="scss">
@import "@/assets/scss/helpers/variables.scss";
.table-preview {
  box-shadow: $shadow;
}
.title {
  border: none!important;
}
</style>