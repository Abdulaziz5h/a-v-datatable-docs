export const compositionApiInstall = `import Vue from "vue";
import VueCompositionApi from "@vue/composition-api"

Vue.use(VueCompositionApi)
`;

export const AVDatatableGlobalImplementation = `import aVDatatable from "a-v-datatable.common"
import "a-v-datatable.css"

Vue.use(aVDatatable)`;

export const AVDatatableLocalImplementation = `<script>
import { aVDatatable } from "a-v-datatable.common"
import "a-v-datatable.css"

export default {
  components: {
    aVDatatable
  }
}
</script>`;

export const basicUasgeTemplate = `<tempplate>
  <a-v-datatable
    :headers="headers"
    :items="users"
    classes="borderd cell-borderd striped"
  />
</tempplate>`;
export const basicUasgeScript = `<script>
...
export default {
  ...
  data: () => ({
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
</script>`;
