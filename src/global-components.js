import Vue from "vue";

import aTable from "@core/components/a-table";
import aDialog from "@core/components/a-dialog";
import aActivator from "@core/components/a-dialog/activator";
import aFileSystemTreeView from "@core/components/a-file-system-tree-view";
import aPagination from "@core/components/a-pagination";
import aTree from "@core/components/a-tree/Tree.vue";
import aLoading from "@core/components/loading";
import aDropDown from "@core/components/a-drop-down";

// --- items
import aUserDropdown from "@core/components/a-user-dropdown";
import aHtml from "@core/components/a-html";

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

Vue.component("a-logo-white", logoWhite);
Vue.component("a-logo-primary", logoPrimary);

Vue.component("a-table", aTable);
Vue.component("a-dialog", aDialog);
Vue.component("a-activator", aActivator);
Vue.component("a-file-system-tree-view", aFileSystemTreeView);
Vue.component("a-pagination", aPagination);
Vue.component("a-tree", aTree);
Vue.component("a-loading", aLoading);
Vue.component("a-drop-down", aDropDown);

// -- items
Vue.component("a-user-dropdown", aUserDropdown);
Vue.component("a-html", aHtml);

// -- forms
Vue.component("a-input-group", aInputGroup);
Vue.component("a-preview-gallery", aPreviewGallery);
Vue.component("a-input-file", aInputFile);
Vue.component("a-input-datepicker", aInputDatepicker);
Vue.component("a-input-select", aInputSelect);
Vue.component("a-input-text", aInputText);
Vue.component("a-input-textarea", aIinputTextarea);
Vue.component("validation-observer", ValidationObserver);
