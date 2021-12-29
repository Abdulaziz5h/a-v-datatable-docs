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
        description: "name of the attribute which will preview at the table <span class='text-primary'>header</span>"
      },
      {
        attribute: "value",
        description: "name of the attribute which will link header with <span class='text-primary'>data</span>"
      }
    ]
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
        description: "Activation of selection"
      },
      {
        attribute: "label",
        description: `selection attribute name which a-v datatable will depend on to get selection items from your data to push it to the value selected array,<br />
          <span class="text-warning">warning: a-v datatable will not change the value in the futher so you can't use it to get selected items</span>`
      }
    ]
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
        description: "Activation of collapse"
      },
      {
        attribute: "label",
        description: "Set children array attribute name"
      },
      {
        attribute: "uniqueId",
        description: "Children uniqueId name"
      },
      {
        attribute: "headers",
        description: "Array of header it is similar to the headers examplained above"
      }
    ]
  },
];
