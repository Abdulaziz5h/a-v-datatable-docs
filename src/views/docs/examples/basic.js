import { headers, items } from "./../fake-data/index";
export default {
  headers: headers,
  items: items,
  selectOptions: { enable: false },
  collapseOptoins: { enable: false },
  selected: [],
  template: `<a-v-datatable
    :headers="headers"
    :items="users"
    classes="borderd cell-borderd striped"
  />`,
  script: `<script>
  ...
  export default {
    ...
    data: () => ({
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
