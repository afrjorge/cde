define(["../../../lib/jquery"],function(e){var o={loglevel:"log",pagination:{throttleTimeMilliseconds:500
},Root:{renderers:void 0,sorter:void 0,view:{styles:[],throttleTimeMilliseconds:10,
templates:{},slots:{selection:".filter-root-control",header:".filter-root-header",
footer:".filter-root-footer",children:".filter-root-items",overlay:".filter-overlay"
},childConfig:{withChildrenPrototype:"Group",withoutChildrenPrototype:"Item",className:"filter-root-child",
appendTo:".filter-root-items"},overlaySimulateClick:!0}},Group:{renderers:void 0,
sorter:void 0,view:{throttleTimeMilliseconds:10,templates:{},slots:{selection:".filter-group-header:eq(0)",
children:".filter-group-items"},childConfig:{withChildrenPrototype:"Group",withoutChildrenPrototype:"Item",
className:"filter-group-child"}}},Item:{renderers:void 0,sorter:void 0,view:{styles:[],
throttleTimeMilliseconds:10,templates:{},slots:{selection:".filter-item-container"
}}}};return e.extend(!0,{},o,{pagination:{pageSize:1/0},search:{serverSide:!1,matcher:void 0
},selectionStrategy:{type:"LimitedSelect",limit:500},Root:{options:{className:"multi-select",
styles:void 0,showCommitButtons:!0,showFilter:!1,showGroupSelection:!0,showButtonOnlyThis:!1,
showSelectedItems:!1,showNumberOfSelectedItems:!0,showValue:!1,showIcons:!0,scrollThreshold:12,
isResizable:!0,useOverlay:!0,expandMode:"absolute"},strings:{isDisabled:"Unavailable",
allItems:"All",noItems:"None",groupSelection:"All",btnApply:"Apply",btnCancel:"Cancel"
},view:{scrollbar:{engine:"mCustomScrollbar",options:{theme:"dark",alwaysTriggerOffsets:!1,
onTotalScrollOffset:100}}}},Group:{options:{showFilter:!1,showCommitButtons:!1,showGroupSelection:!1,
showButtonOnlyThis:!1,showButtonCollapse:!1,showValue:!1,showIcons:!0,scrollThreshold:1/0,
isResizable:!1},strings:{allItems:"All",noItems:"None",groupSelection:"All",btnApply:"Apply",
btnCancel:"Cancel"}},Item:{options:{showButtonOnlyThis:!1,showValue:!1,showIcons:!0
},strings:{btnOnlyThis:"Only"}}})});