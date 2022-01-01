<template>
  <footer class="border-top">
    <b-container>
      <mini-footer />
    </b-container>
  </footer>
</template>

<script>
import miniFooter from "@core/layout/components/mini-footer.vue";
export default {
  components: {
    miniFooter
  }
}
</script>

<style scoped lang="scss">
@import "@/assets/scss/helpers/variables";
.newsletter {
  background: var(--primary);
}
.features {
  ul {
    padding: 20px 0 0;
    border-color: $borderColor;
    li {
      &:not(:first-of-type) {
        border-left: solid 1px $borderColor;
      }
      padding: 0 12px;
      margin-bottom: 20px;
      display: flex;
      align-items: center;
      justify-content: center;
      i {
        font-size: 28px;
        line-height: 1;
        margin-right: 16px;
      }
    }
  }
}
</style>
