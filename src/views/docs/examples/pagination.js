import { headers, items } from "./../fake-data/index";
export default {
  headers: headers,
  items: [...items, ...items, ...items, ...items, ...items, ...items],
  selectOptions: { enable: false },
  collapseOptoins: { enable: false },
  paginationOptions: { enable: true },
  selected: [],
  scss: `<style lang="scss">
    .pagination-list .page-active {
      background: var(--primary)!important;
    }
    .pagination-list .page-item:hover {
      background: var(--primary)!important;
      color: #fff;
    }
</style>`,
  template: `<a-v-datatable
    :headers="headers"
    :items="users"
    classes="borderd cell-borderd striped"

    :paginationOptions: { enable: true },
  >
    <template slot="page-prev">
      <i class="mdi mdi-arrow-left"></i>
    </template>
    <template slot="page-next">
      <i class="mdi mdi-arrow-right"></i>
    </template>
  </a-v-datatable>
  `,
  script: `<script>
  ...
  export default {
    ...
    data: () => ({
      paginationOptions: { enable: true },
      headers: [
        {
          label: "Name",
          value: "name"
        },
        {
          label: "Username",
          value: "username"
        },
        {
          label: "E-mail",
          value: "email"
        },
        {
          label: "Phone Number",
          value: "phone"
        }
      ],
      users: [
        {
          id: 1,
          name: "Leanne Graham",
          username: "Bret",
          email: "Sincere@april.biz",
          phone: "1-770-736-8031 x56442",
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          email: "Shanna@melissa.tv",
          phone: "010-692-6593 x09125",
        },
        ...
      ],
    })
  }
  </script>`,
};
