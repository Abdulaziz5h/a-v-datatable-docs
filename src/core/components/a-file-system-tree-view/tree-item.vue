<template>
  <li class="tree-view-file">
    <!--    @dblclick="makeFolder" -->
    <div :class="{ bold: isFolder }" @click="toggle" class="d-flex">
      <b-form-checkbox v-if="!isFolder" :value="item.id"></b-form-checkbox>
      <i :class="'mdi mdi-' + getFileIcon"></i>
      <span class="pl-50">
        {{ item.name }}
      </span>
    </div>
    <ul v-show="isOpen" :class="{ 'pl-1': isFolder }" v-if="isFolder">
      <tree-item
        class="item"
        v-for="(child, index) in item.children"
        :key="index"
        :item="child"
        @make-folder="$emit('make-folder', $event)"
        @add-item="$emit('add-item', $event)"
      ></tree-item>
      <!-- <li class="add" @click="$emit('add-item', item)">
                <i name="mdi mdi-folder-plus"></i>
            </li> -->
    </ul>
  </li>
</template>
<script>
import { BFormCheckbox } from "bootstrap-vue";
export default {
  name: "tree-item",
  props: {
    item: Object,
  },
  components: {
    BFormCheckbox,
  },
  data: function () {
    return {
      isOpen: false,
    };
  },
  computed: {
    isFolder: function () {
      return this.item.children && this.item.children.length;
    },
    getFileIcon() {
      let iconName = "file";
      if (this.isFolder) {
        iconName = this.isOpen ? "folder-open" : "folder";
      }
      return iconName;
    },
  },
  methods: {
    toggle: function () {
      if (this.isFolder) {
        this.isOpen = !this.isOpen;
      }
    },
    makeFolder: function () {
      if (!this.isFolder) {
        this.$emit("make-folder", this.item);
        this.isOpen = true;
      }
    },
  },
};
</script>
<style lang="scss" scoped>
ul {
  line-height: 1.5em;
  list-style: none;
}
li {
  list-style: none;
  padding: 2px 0;
}
.bold {
  font-weight: 600;
}
.tree-view-file .custom-checkbox.custom-control {
  margin: 0 !important;
  padding: 0 !important;
}
</style>
