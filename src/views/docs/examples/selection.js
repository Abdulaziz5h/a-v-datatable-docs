import { headers, items } from "../fake-data/index";
export default {
  headers: headers,
  items: items,
  selectOptions: { enable: true },
  collapseOptoins: { enable: false },
  paginationOptions: { enable: false },
  description: `To add selections just add <a href="#/documentation/apis/props"> selectOptions </a> prop and set <span class="text-primary"> enable </span> attribute to true.`,
  selected: [],
  template: `<a-v-datatable
      :headers="headers"
      :items="users"
      classes="borderd cell-borderd striped"
      v-model="selected"
        
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
