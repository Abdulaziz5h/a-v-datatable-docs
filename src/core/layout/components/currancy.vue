<template>
  <a-drop-down :items="['usd', 'atr']" right title="usd" minWidth="90">
    <template slot="activator">
      <b-button size="sm" class="active-currency" variant="outline-secondary">
        {{ currency }}
      </b-button>
    </template>
    <template slot="default" slot-scope="{ items }">
      <span class="currency-dropdown">
        <b-dropdown-item
          @click="setCurrency(item)"
          v-for="(item, i) in items"
          :key="i"
        >
          {{ item }}
        </b-dropdown-item>
      </span>
    </template>
  </a-drop-down>
</template>

<script>
export default {
  data: () => ({
    currency: null,
  }),
  methods: {
    setCurrency(item) {
      this.currency = item;
    },
  },
};
</script>

<style lang="scss" scoped>
.active-currency {
  text-transform: uppercase;
  font-size: 12px;
}
.currency-dropdown {
  ::v-deep {
    li {
      text-transform: uppercase;
      font-size: 12px;
      a:hover {
        background: transparent;
        color: var(--primary);
        text-shadow: 0 0 1px var(--primary);
      }
    }
  }
}
</style>
