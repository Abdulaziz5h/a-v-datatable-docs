<template>
  <div>
    <slot name="activator">
      <activator
        @ok="is = true"
        @search="search"
        :placeholder="placeholder"
        :title="btn_title"
      />
    </slot>
    <b-sidebar backdrop shadow bg-variant="white" v-model="is">
      <template #header>
        <div
          class="d-flex justify-content-between align-items-center px-2 py-3 border-bottom"
        >
          <slot name="header">
            <h5 class="m-0 px-1 title">
              {{ title }}
            </h5>
          </slot>
          <b-button
            variant="flat-secondary"
            size="sm"
            class="rounded-circle btn-icon ml-auto"
            @click="is = false"
          >
            <i name="mdi mdi-close"></i>
          </b-button>
        </div>
      </template>
      <template #default>
        <slot name="body"> </slot>
      </template>
      <template #footer="{ hide }">
        <slot name="footer">
          <div class="d-flex align-items-center px-2 py-2 border-top">
            <b-button variant="outline-danger" v-if="isEdit" @click="del">{{
              $t("delete")
            }}</b-button>
            <b-button
              variant="outline-secondary"
              class="ml-auto mr-2 px-3"
              @click="hide"
              >{{ $t("cancel") }}</b-button
            >
            <b-button variant="primary" @click="ok" class="px-3">{{
              $t("ok")
            }}</b-button>
          </div>
        </slot>
      </template>
    </b-sidebar>
  </div>
</template>

<script>
import activator from "./activator";
import { BButton, BSidebar } from "bootstrap-vue";
export default {
  components: {
    activator,
    // bootstrap vue
    BButton,
    BSidebar,
  },
  data: () => ({
    is: false,
  }),
  props: {
    placeholder: String,
    btn_title: String,
    title: {
      type: String,
      default: () => "title",
    },
    endClose: Boolean,
    isEdit: {
      type: Boolean,
      default: () => false,
    },
  },
  methods: {
    ok() {
      this.$emit("ok");
      if (this.endClose) this.is = false;
    },
    del() {
      this.$emit("delete");
      this.is = false;
    },
    search(e) {
      this.$emit("search", e);
    },
    open() {
      this.is = true;
    },
    close() {
      this.is = false;
    },
  },
  watch: {
    is(is) {
      if (is) {
        this.$emit("open");
      } else {
        this.$emit("close");
      }
    },
  },
};
</script>

<style lang="scss">
.b-sidebar-header {
  padding: 0 !important;
  display: block !important;
}
.b-sidebar-body {
  padding: 12px;
}
</style>
