import basic from "./basic";
import selection from "./selection";
import SelectionCustomOutput from "./selection-custom-output";

export const AVDatatableGlobalImplementation = `import aVDatatable from "a-v-datatable"
import "a-v-datatable/dist/a-v-datatable.css"

Vue.use(aVDatatable)`;
export const AVDatatableLocalImplementation = `<script>
import { aVDatatable } from "a-v-datatable"
import "a-v-datatable/dist/a-v-datatable.css"

export default {
  components: {
    aVDatatable
  }
}
</script>`;

export const examplesTypes = {
  Basic: {
    title: "basic",
    id: "basic"
  },
  Selection: {
    title: "selection",
    id: "selection"
  },
  SelectionCustomOutput: {
    title: "selection custom output",
    id: "selection-custom-output"
  },
};
export const examples = {
  basic: basic,
  "selection": selection,
  "selection-custom-output": SelectionCustomOutput
};
