import Basic from "./basic";
import Selection from "./selection";
import SelectionCustomOutput from "./selection-custom-output";
import Collapsible from "./collapsible";
import CollapsibleSelection from "./collapsible-selection";
import CollapsibleSelectionGroup from "./collapsible-selection-group";
import CustomSlots from "./custom-slots";
import CrudTable from "./crud-table";
import Pagination from "./pagination";

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
    id: "basic",
  },
  Selection: {
    title: "selection",
    id: "selection",
  },
  SelectionCustomOutput: {
    title: "selection custom output",
    id: "selection-custom-output",
  },
  Collapsible: {
    title: "collapsible",
    id: "collapsible",
  },
  CollapsibleSelection: {
    title: "collapsible selection",
    id: "collapsible-selection",
  },
  CollapsibleSelectionGroup: {
    title: "collapsible selection group",
    id: "collapsible-selection-group",
  },
  Slots: {
    title: "custom slots",
    id: "custom-slots",
  },
  CRUD: {
    title: "CRUD table",
    id: "crud",
  },
  pagination: {
    title: "pagination",
    id: "pagination",
  },
};
export const examples = {
  basic: Basic,
  selection: Selection,
  "selection-custom-output": SelectionCustomOutput,
  collapsible: Collapsible,
  "collapsible-selection": CollapsibleSelection,
  "collapsible-selection-group": CollapsibleSelectionGroup,
  "custom-slots": CustomSlots,
  crud: CrudTable,
  pagination: Pagination,
};
