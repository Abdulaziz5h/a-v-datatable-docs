<template>
  <b-navbar toggleable="lg" class="d-none d-lg-block py-2 navbar">
    <b-container class="d-flex">
      <a-logo-primary/>
      <b-collapse is-nav class="justify-content-between">
        <b-navbar-nav class="menu-nav flex-row-reverse ml-auto">
          <b-nav-item href="https://github.com/Abdulaziz5h">github</b-nav-item>
          <router-link to="documentation/examples" custom
            v-slot="{ href, navigate, isActive, isExactActive }">
            <b-nav-item @click="navigate" :href="href" :class="{active: isActive && isExactActive}">examples</b-nav-item>
          </router-link>
          <router-link to="documentation" custom
            v-slot="{ href, navigate, isActive, isExactActive }">
            <b-nav-item @click="navigate" :href="href" :class="{active: isActive && isExactActive}">documentation</b-nav-item>
          </router-link>
          <router-link to="/" custom
            v-slot="{ href, navigate, isActive, isExactActive }">
            <b-nav-item @click="navigate" :href="href" :class="{active: isActive && isExactActive}">home</b-nav-item>
          </router-link>
        </b-navbar-nav>
      </b-collapse>
    </b-container>
  </b-navbar>
</template>

<style scoped lang="scss">
@import "@/assets/scss/helpers/variables";
.categories-dropdown {
  max-height: calc(100vh - 200px);
  ::v-deep {
    li {
      text-transform: uppercase;
      font-size: 12px;
      a {
        line-height: 38px;
        border: solid 1px $borderColor;
      }
      a:hover {
        background: transparent;
        color: var(--primary);
        text-shadow: 0 0 1px var(--primary);
      }
    }
  }
}
.product-count-badge {
  position: absolute;
  bottom: -10px;
  left: 30px;
  top: auto;
  border-radius: 8px;
  padding: 3px 12px;
}
.menu-nav {
  ::v-deep {
    .nav-item {
      margin-left: 2px;
      &:not(:last-of-type) {
        margin-right: 2px;
      }
      .nav-link {
        font-weight: bold;
        text-transform: capitalize; 
      }
      &:hover, &.active {
        a {
          color: var(--primary);
        }
      }
    }
  }
}
</style>
