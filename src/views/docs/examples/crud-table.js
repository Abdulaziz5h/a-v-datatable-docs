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
    {
      label: "Actions",
      value: "actions",
    },
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
  crud: true,
  description: ``,
  template: `<a-v-datatable
    :headers="headers"
    :items="users"
    classes="borderd cell-borderd striped"
    v-model="selected"

    ref="a-v-datatable"
    :selectOptions="selectOptions"
    :collapseOptoins="collapseOptoins"

    @details="getDetails"
    @add="log"
    @remove="log"
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
    <template slot="details" slot-scope="{details}">
      <b-button size="sm" class="ml-2" @click="details()" variant="info"><i class="mdi mdi-pen"></i></b-button>
    </template>
    <template slot="remove" slot-scope="{remove}">
      <b-button size="sm" variant="danger" @click="remove()"><i class="mdi mdi-delete"></i></b-button>
    </template>
  </a-v-datatable>
  `,
  script: `<script>
  ...
  export default {
    methods: {
      addNew() {
        this.$refs["a-v-datatable"].add(this.newRow);
      },
      getDetails(e) {
        this.row = e
      },
      log(e) {
        console.log(e)
      },
    },
    ...
    data: () => ({
      selected: [],
      row: null,
      newRow: {
        id: 110,
        name: "Ervin Howell",
        username: "Antonette",
        phone: "010-692-6593 x09125",
        src: "https://randomuser.me/api/portraits/men/60.jpg",
        cars: [
          {
            id: 1,
            make: "GMC",
            model: "Yukon Denali",
            modelYear: 2016,
          },
          {
            id: 5,
            make: "Ford",
            model: "LTD Crown Victoria",
            modelYear: 1981,
          },
        ],
      },
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
