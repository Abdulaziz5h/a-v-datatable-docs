import {
  headers,
  childrenHeaders,
  itemsCollapseSlots,
} from "../fake-data/index";
export default {
  headers: [
    {
      label: "User Photo",
      value: "src",
    },
    ...headers,
  ],
  items: itemsCollapseSlots,
  selectOptions: { enable: true },
  paginationOptions: { enable: false },
  selected: [],
  collapseOptoins: {
    enable: true,
    label: "cars",
    headers: childrenHeaders,
  },
  slot: true,
  description: ``,
  template: `<a-v-datatable
    :headers="headers"
    :items="users"
    classes="borderd cell-borderd striped"
    v-model="selected"

    :selectOptions="selectOptions"
    :collapseOptoins="collapseOptoins"
  >
    <template slot="collapse-icon">
      <i class="mdi mdi-arrow-down"></i>
    </template>
    <template slot="row-td.src" slot-scope="{row, value}">
      <img :src="value" width="50" height="50" class="rounded-circle" :alt="row.formatedRow.name">
    </template>
    <template slot="cars.row-td.model" slot-scope="{value}">
      <b-badge variant="primary">{{value}}</b-badge>
    </template>
  </a-v-datatable>
  `,
  script: `<script>
  ...
  export default {
    ...
    data: () => ({
      selected: [],
      selectOptions: {
        enable: true
      }
      collapseOptoins: {
        enable: true,
        label: 'cars',
        headers: [
          {
            label: "Make",
            value: "make",
          },
          {
            label: "Model",
            value: "model",
          },
          {
            label: "Model Year",
            value: "ModelYear",
          }
        ]
      },
      headers: [
        {
          label: "User Photo",
          value: "src",
        },
        {
          label: "Name",
          value: "name"
        },
        {
          label: "Username",
          value: "username"
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
          phone: "1-770-736-8031 x56442",
          src: "https://randomuser.me/api/portraits/men/6.jpg",
          cars: [
            {
              id: 1,
              make: "GMC 1",
              model: "Yukon Denali",
              modelYear: 2006,
            },
            {
              id: 2,
              make: "Mitsubishi 2",
              model: "Diamante 2",
              modelYear: 1995,
            },
            ...
          ],
        },
        {
          id: 2,
          name: "Ervin Howell",
          username: "Antonette",
          phone: "010-692-6593 x09125",
          src: "https://randomuser.me/api/portraits/men/7.jpg",
          cars: [],
        },
        ...
      ],
    })
  }
  </script>`,
};
