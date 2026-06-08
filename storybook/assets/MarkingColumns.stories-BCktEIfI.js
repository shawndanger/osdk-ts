import{f as n,j as t}from"./iframe-ChzFirbr.js";import{O as p}from"./object-table-BhSo5NMn.js";import{E as m}from"./Employee-BAk2o20h.js";import"./preload-helper-Dp1pzeXC.js";import"./Table-QS6MEkYY.js";import"./index-DHNfIcpn.js";import"./Dialog-B76bcIy6.js";import"./cross-BvDWxhQz.js";import"./svgIconContainer-DoEma-Y9.js";import"./useBaseUiId-CBQSgk1r.js";import"./InternalBackdrop-WQSFGob4.js";import"./composite-CpTyj5TA.js";import"./index-DDE3oZn0.js";import"./index-CuW_bheF.js";import"./index-4K4G_fBB.js";import"./useEventCallback-CNWGXz_N.js";import"./SkeletonBar-LGpkoIQ0.js";import"./LoadingCell-S9roXpO2.js";import"./ColumnConfigDialog-B-wMECfj.js";import"./DraggableList-BgBgbWKJ.js";import"./Input-DKhkxxnb.js";import"./useControlled-pvGvU0My.js";import"./Button-bNRGrTKr.js";import"./small-cross-2Hl7TWrg.js";import"./ActionButton-DCK1BQeW.js";import"./Checkbox-PMETPG5t.js";import"./minus-CtYGioCG.js";import"./useValueChanged-Diu7Mykn.js";import"./caret-down-Bsfh-j86.js";import"./CollapsiblePanel-D5_ithZW.js";import"./MultiColumnSortDialog-K8lk5JtB.js";import"./MenuTrigger-B9AMbYZL.js";import"./CompositeItem-Tyt-5NQf.js";import"./ToolbarRootContext-CqrL-E_c.js";import"./getDisabledMountTransitionStyles-CQrb_6Pd.js";import"./getPseudoElementBounds-BTF2Fxxm.js";import"./chevron-down-Bk55uhoP.js";import"./index-BpASHaOd.js";import"./error-DbxLP1Ho.js";import"./BaseCbacBanner-BeMaEsHV.js";import"./makeExternalStore-vg-lJk2e.js";import"./Tooltip-Z-HdoclB.js";import"./PopoverPopup-DBIlQb00.js";import"./toNumber-Vj1G1h57.js";import"./useOsdkClient-CnaBDecZ.js";import"./DropdownField-B4J4NLiw.js";import"./withOsdkMetrics-B88Pfhxi.js";const or={title:"Components/ObjectTable/Features",component:p,tags:["beta"],parameters:{msw:{handlers:[...n.handlers]},docs:{description:{component:"Exercises the full OSDK metadata → `useColumnDefs` → `renderDefaultCell` chain. The `Employee` mock includes a MANDATORY `classificationMarking` and a CBAC `clearanceMarking` array; `ObjectTable` reads `typeMetadata.markingType` from the wire metadata and routes each cell through the matching renderer (`CbacBanner` for CBAC, one banner per marking for MANDATORY)."}}}},r={args:{objectType:m,columnDefinitions:[{locator:{type:"property",id:"fullName"}},{locator:{type:"property",id:"department"}},{locator:{type:"property",id:"classificationMarking"}},{locator:{type:"property",id:"clearanceMarking"}}]},render:a=>t.jsx("div",{style:{height:480},children:t.jsx(p,{...a})})};var o,e,i;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`{
  args: {
    objectType: Employee,
    columnDefinitions: [{
      locator: {
        type: "property",
        id: "fullName"
      }
    }, {
      locator: {
        type: "property",
        id: "department"
      }
    }, {
      locator: {
        type: "property",
        id: "classificationMarking"
      }
    }, {
      locator: {
        type: "property",
        id: "clearanceMarking"
      }
    }]
  },
  render: args => <div style={{
    height: 480
  }}>
      <ObjectTable {...args} />
    </div>
}`,...(i=(e=r.parameters)==null?void 0:e.docs)==null?void 0:i.source}}};const er=["MarkingColumns"];export{r as MarkingColumns,er as __namedExportsOrder,or as default};
