import { headers, items } from "../fake-data/index";
export default {
  headers: headers,
  items: items,
  selectOptions: {enable: true},
  reduce: item => item.id,
  description: `Using <span class="text-primary">Reduce</span> prop you can determine which params you want component to pass on selection change.`,
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
            label: "name",
            value: "name"
          },
          {
            label: "username",
            value: "username"
          },
          {
            label: "E-mail",
            value: "email"
          },
          {
            label: "phone number",
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
