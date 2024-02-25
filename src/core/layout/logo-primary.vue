<template>
  <h4 class="text-primary">
    <strong>{{ appLogo }}</strong>
  </h4>
</template>
<script>
import { $_themeConfig } from "@themeConfig";
export default {
  setup() {
    return {
      appLogo: $_themeConfig.app.appName,
    };
  },
  props: {
    width: {
      type: String,
      default: "60",
    },
  },
};
</script>
