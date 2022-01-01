import { headers, items } from "../fake-data/index";
export default {
  headers: headers,
  items: items,
  selectOptions: {enable: true},
  collapseOptoins: { enable: false },
  paginationOptions: { enable: false },
  selected: [],
  reduce: item => item.id,
  description: `Using <a href="#/documentation/apis/props"> Reduce </a> prop you can determine which params you want component to pass on selection change.`,
  template: `<a-v-datatable
      :headers="headers"
      :items="users"
      classes="borderd cell-borderd striped"
      v-model="selected"
      
      :reduce="item => item.id"
      :selectOptions="selectOptions"
    />`,
  script: `<script>
    ...
    export default {
      ...
      data: () => ({
        selected: [],
        selectOptions: {
          enable: true
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
          },
          {
            id: 2,
            name: "Ervin Howell",
            username: "Antonette",
            phone: "010-692-6593 x09125",
          },
          ...
        ],
      })
    }
    </script>`,
};
