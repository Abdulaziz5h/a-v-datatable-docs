export const componentProps = [
  {
    prop: `headers`,
    default: `Empty Array []`,
    type: `Array: required`,
    details: `
      Each item inside the array should have two reuired attributes <span class="text-primary">label</span> and <span class="text-primary">value</span>
    `,
  },
  {
    prop: `headerOptions`,
    default: `{
    label: "label",
    value: "value"
}`,
    type: `Object: Optional`,
    details: `Change headers object attributes name`,
    children: [
      {
        attribute: "label",
        description:
          "name of the attribute which will preview at the table <span class='text-primary'>header</span>",
      },
      {
        attribute: "value",
        description:
          "name of the attribute which will link header with <span class='text-primary'>data</span>",
      },
    ],
  },
  {
    prop: `items`,
    default: `Empty Array []`,
    type: `Array: required`,
    details: `Table data where you will link headers with the attributes which you want to preview at the table`,
  },
  {
    prop: `uniqueId`,
    default: `id`,
    type: `String: Optional`,
    details: `Your data uniqueId`,
  },
  {
    prop: `selectOptions`,
    default: `{
    enable: false,
    label: "selected"
}`,
    type: `Object: Optional`,
    details: `To enable select and if you have data depend on an attribute to detect selection for row you can change attribute name depend on your data`,
    children: [
      {
        attribute: "enable",
        description: "Activation of selection",
      },
      {
        attribute: "label",
        description: `selection attribute name which a-v datatable will depend on to get selection items from your data to push it to the value selected array,<br />
          <span class="text-warning">warning: a-v datatable will not change the value in the futher so you can't use it to get selected items</span>`,
      },
    ],
  },
  {
    prop: `reduce`,
    default: `() => null`,
    type: `Function: Optional`,
    details: `Detect data you want to return from the table on fire select event`,
  },
  {
    prop: `collapseOptoins`,
    default: `{
    enable: false,
    label: "children",
    uniqueId: "id",
    headers: []
}`,
    type: `Object: Optional`,
    details: `Enable collapse on your table`,
    children: [
      {
        attribute: "enable",
        description: "Activation of collapse",
      },
      {
        attribute: "label",
        description: "Set children array attribute name",
      },
      {
        attribute: "uniqueId",
        description: "Children uniqueId name",
      },
      {
        attribute: "headers",
        description:
          "Array of header it is similar to the headers examplained above",
      },
    ],
  },
];

export const componentSlots = [
  {
    slot: "header-th",
    details: `Table head cells slot, To add common update for all head cells`,
    'slot-scope': ['th']
  },
  {
    slot: "header-th.[cell name]",
    details: `Table head cell slots, To update specific cell`,
    'slot-scope': ['th', 'label']
  },
  // {
  //   slot: "header-select-input",
  //   details: `To change header checkbox`,
  //   'slot-scope': []
  // }
  // {
  //   slot: "body-select-input",
  //   details: `To change body checkbox`,
  //   'slot-scope': []
  // }
  {
    slot: "row-td",
    details: `Table body cells slot, To add common update for all body cells`,
    'slot-scope': ['row', 'value', 'argkey']
  },
  {
    slot: "collapse-icon",
    details: `Add custom icon for collapse arrow`,
    'slot-scope': []
  },
  {
    slot: "actions",
    details: `in case of you have action headers cell you can use two another slots <span class="text-primary">remove</span> and <span class="text-primary">details</span>`,
    'slot-scope': ['row']
  }
];

export const componentEvents = [
  {
    name: "details",
    args: "(1 arg) object",
    details: "on click 'd' button from actions cell"
  },
  {
    name: "update",
    args: "(1 arg) object",
    details: "on call custom method update from the table"
  },
  {
    name: "remove",
    args: "(1 arg) object",
    details: "on click 'x' button from actions cell"
  },
  {
    name: "lostId",
    args: "(1 arg) losted uniqueId",
    details: "This event emits when you try to (delete, update) item is not found or add to parent is not found"
  }
]

export const componentMethods = [
  {
    name: "add",
    args: "(2 args) <code>{row: Object, parentId?: any}</code> ",
    details: "To add new a row of data to the a-v datatable you will have to pass row of data,<br /> If you want to add a row to the childern table you just have to add parent uniqueId"
  },
  {
    name: "remove",
    args: "(2 args) <code>{id: any, parentId?: any}</code> ",
    details: "To remove a row from a-v datatable will have to pass row's uniqueId,<br /> If you want to remove a row from the childern table you just have to add parent uniqueId"
  },
  {
    name: "remove",
    args: "(3 args) <code>{id: any, row: Object, parentId?: any}</code> ",
    details: "To update a row from a-v datatable will have to pass row's uniqueId with new row of data,<br /> If you want to update a row from the childern table you just have to add parent uniqueId"
  },
  {
    name: "init",
    args: "(0 arg)",
    details: "You can use this method to rereinitialize a-v datatable"
  }
]