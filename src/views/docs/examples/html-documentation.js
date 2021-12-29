import Basic from "./basic";
import Selection from "./selection";
import SelectionCustomOutput from "./selection-custom-output";
import Collapsible from "./collapsible";
import CollapsibleSelection from "./collapsible-selection";
import CollapsibleSelectionGroup from "./collapsible-selection-group";

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
  Collapsible: {
    title: "collapsible",
    id: "collapsible"
  },
  CollapsibleSelection: {
    title: "collapsible selection",
    id: "collapsible-selection"
  },
  CollapsibleSelectionGroup: {
    title: "collapsible selection group",
    id: "collapsible-selection-group"
  },
};
export const examples = {
  basic: Basic,
  "selection": Selection,
  "selection-custom-output": SelectionCustomOutput,
  collapsible: Collapsible,
  "collapsible-selection": CollapsibleSelection,
  "collapsible-selection-group": CollapsibleSelectionGroup
};
