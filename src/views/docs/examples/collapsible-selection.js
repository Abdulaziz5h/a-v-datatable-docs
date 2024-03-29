import { headers, childrenHeaders, itemsCollapse } from "../fake-data/index";
export default {
  headers: headers,
  items: itemsCollapse,
  selectOptions: { enable: true },
  paginationOptions: { enable: false },
  selected: [],
  collapseOptoins: {
    enable: true,
    headers: childrenHeaders,
  },
  description: `To made collapsible just set <a href="#/documentation/apis/props"> collapseOptions </a> prop with <span class="text-primary"> enable </span> attribute to true
    , <span class="text-primary"> headers </span> attribute, <br /> Add <a href="#/documentation/apis/props"> selectOptions </a> prop with <span class="text-primary"> enable </span> attribute to true.`,
  template: `<a-v-datatable
    :headers="headers"
    :items="users"
    classes="borderd cell-borderd striped"
    v-model="selected"

    :selectOptions="selectOptions"
    :collapseOptoins="collapseOptoins"
  />`,
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
          children: [
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
          children: [],
        },
        ...
      ],
    })
  }
  </script>`,
};
