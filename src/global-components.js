import Vue from "vue";

import aTable from "@core/components/a-table";
import aDialog from "@core/components/a-dialog";
import aActivaitor from "@core/components/a-dialog/activaitor";
import aFileSystemTreeview from "@core/components/a-file-system-treeview";
import aPagination from "@core/components/a-pagination";
import aTableCollapse from "@core/components/a-table-collapse";
import aTree from "@core/components/a-tree/Tree.vue";
import aLoading from "@core/components/loading";
import aDropDown from "@core/components/a-drop-down";

// --- items
import aUserDropdown from "@core/layout/vertical/components/a-navbar/components/a-user-dropdown";
// -- forms
import aInputGroup from "@core/components/a-forms/a-input-group";
import aPreviewGallery from "@core/components/a-preview-gallery";
import aInputFile from "@core/components/a-forms/a-input-file";
import aInputDatepicker from "@core/components/a-forms/a-input-datepicker";
import aInputSelect from "@core/components/a-forms/a-input-select";
import aInputText from "@core/components/a-forms/a-input-text";
import aIinputTextarea from "@core/components/a-forms/a-input-textarea";
import { ValidationObserver } from "vee-validate";


import logoPrimary from "@core/layout/logo-primary";
import logoWhite from "@core/layout/logo-white";



Vue.component('a-logo-white', logoWhite)
Vue.component('a-logo-primary', logoPrimary)

Vue.component('a-table', aTable)
Vue.component('a-dialog', aDialog)
Vue.component('a-activaitor', aActivaitor)
Vue.component('a-file-system-treeview', aFileSystemTreeview)
Vue.component('a-pagination', aPagination)
Vue.component('a-table-collapse', aTableCollapse)
Vue.component('a-tree', aTree)
Vue.component('a-loading', aLoading)
Vue.component('a-drop-down', aDropDown)

// -- items
Vue.component('a-user-dropdown', aUserDropdown)

// -- forms
Vue.component('a-input-group', aInputGroup)
Vue.component('a-preview-gallery', aPreviewGallery)
Vue.component('a-input-file', aInputFile)
Vue.component('a-input-datepicker', aInputDatepicker)
Vue.component('a-input-select', aInputSelect)
Vue.component('a-input-text', aInputText)
Vue.component('a-input-textarea', aIinputTextarea)
Vue.component('validation-observer', ValidationObserver)

