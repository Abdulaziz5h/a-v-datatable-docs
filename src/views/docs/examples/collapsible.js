import { headers, childrenHeaders, itemsCollapse } from "../fake-data/index";
export default {
  headers: headers,
  items: itemsCollapse,
  selectOptions: { enable: false },
  paginationOptions: { enable: false },
  selected: [],
  description: `To made collapsible just set <a href="#/documentation/apis/props"> collapseOptoins </a> prop with <span class="text-primary"> enable </span> attribute to true
    and <span class="text-primary"> headers </span> attribute, <br />
    It is optional with default value its parent table header value.
  `,
  collapseOptoins: {
    enable: true,
    headers: childrenHeaders
  },
  template: `<a-v-datatable
    :headers="headers"
    :items="users"
    classes="borderd cell-borderd striped"

    :collapseOptoins="collapseOptoins"
  />`,
  script: `<script>
  ...
  export default {
    ...
    data: () => ({
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
