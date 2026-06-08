import{R as i,O as M,j as y,M as v}from"./iframe-ChzFirbr.js";import{P as D}from"./pdf-viewer-Ba029N8E.js";import{E as K}from"./Employee-BAk2o20h.js";import{m as P,d as E}from"./makeExternalStore-vg-lJk2e.js";import"./preload-helper-Dp1pzeXC.js";import"./PdfRenderer-DJ3FUz6i.js";import"./index-DHNfIcpn.js";import"./PdfViewer-D8S1-5bF.js";import"./PdfViewer.module.css-D95YnxEu.js";import"./PdfViewerAnnotationLayer-DRGIteoQ.js";import"./constants-DsXMS3N3.js";import"./usePdfDocument-ClmgdFYR.js";import"./PdfViewerOutlineSidebar-BDfMYKFT.js";import"./PdfViewerSidebarHeader-rZVE50Zj.js";import"./useBaseUiId-CBQSgk1r.js";import"./useControlled-pvGvU0My.js";import"./CompositeRoot-4R2swJV7.js";import"./CompositeItem-Tyt-5NQf.js";import"./ToolbarRootContext-CqrL-E_c.js";import"./composite-CpTyj5TA.js";import"./svgIconContainer-DoEma-Y9.js";import"./PdfViewerSearchBar-DRqHOB0M.js";import"./chevron-up-_X9v4GDT.js";import"./chevron-down-Bk55uhoP.js";import"./cross-BvDWxhQz.js";import"./PdfViewerSidebar-C9utHWvK.js";import"./index-BpASHaOd.js";import"./index-DDE3oZn0.js";import"./index-CuW_bheF.js";import"./PdfViewerToolbar-O5BZqAsl.js";import"./Button-bNRGrTKr.js";import"./chevron-right-DcZuw7Js.js";import"./Input-DKhkxxnb.js";import"./minus-CtYGioCG.js";import"./spin-C8GntmCq.js";import"./error-DbxLP1Ho.js";import"./withOsdkMetrics-B88Pfhxi.js";function L(...t){const{observableClient:m}=i.useContext(M),n="$objectType"in t[0],o=!n&&t[2]!=null&&typeof t[2]=="object"?t[2]:void 0,p=n?typeof t[1]=="boolean"?t[1]:!0:o?o.enabled??!0:typeof t[2]=="boolean"?t[2]:!0,f=o==null?void 0:o.$select,d=o==null?void 0:o.$loadPropertySecurityMetadata,b=o==null?void 0:o.$includeAllBaseObjectProperties,O=n?"offline":void 0,s=n?t[0].$objectType:t[0],c=n?t[0].$primaryKey:t[1],l=typeof s=="string"?s:s.apiName,u=i.useMemo(()=>f,[JSON.stringify(f)]),{subscribe:h,getSnapShot:w}=i.useMemo(()=>p?P(r=>m.observeObject(s,c,{mode:O,$includeAllBaseObjectProperties:b,...u?{select:u}:{},...d?{$loadPropertySecurityMetadata:d}:{}},r),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})):P(()=>({unsubscribe:()=>{}}),E({hookType:"useOsdkObject",objectType:l,primaryKey:String(c)})),[p,m,s,l,c,O,u,d,b]),e=i.useSyncExternalStore(h,w),j=i.useCallback(()=>{throw new Error("not implemented")},[]);return i.useMemo(()=>{let r;return e&&"error"in e&&e.error?r=e.error:(e==null?void 0:e.status)==="error"&&(r=new Error("Failed to load object")),{object:e==null?void 0:e.object,isLoading:p&&r==null?(e==null?void 0:e.status)==="loading"||(e==null?void 0:e.status)==="init"||!e:!1,isOptimistic:!!(e!=null&&e.isOptimistic),error:r,forceUpdate:j}},[e,p,j])}const ye={title:"Components/DocumentViewer/Renderers/PdfViewer",component:D,tags:["beta"],parameters:{controls:{expanded:!0}}},a={render:()=>{const{object:t,isLoading:m}=L(K,v);return m||!(t!=null&&t.employeeDocuments)?y.jsx("div",{style:{height:"600px"},children:"Loading OSDK media…"}):y.jsx("div",{style:{height:"600px"},children:y.jsx(D,{media:t.employeeDocuments})})},parameters:{docs:{source:{code:`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />`}}}};var S,x,k;a.parameters={...a.parameters,docs:{...(S=a.parameters)==null?void 0:S.docs,source:{originalSource:`{
  render: () => {
    const {
      object: employee,
      isLoading
    } = useOsdkObject(Employee, MEDIA_EMPLOYEE_PK);
    if (isLoading || !employee?.employeeDocuments) {
      return <div style={{
        height: "600px"
      }}>Loading OSDK media…</div>;
    }
    return <div style={{
      height: "600px"
    }}>
        <PdfViewer media={employee.employeeDocuments} />
      </div>;
  },
  parameters: {
    docs: {
      source: {
        code: \`import { PdfViewer } from "@osdk/react-components/experimental/pdf-viewer";

// Access media from an OSDK object's media reference property
const employee = useOsdkObject(Employee, employeePk);
<PdfViewer media={employee.employeeDocuments} />\`
      }
    }
  }
}`,...(k=(x=a.parameters)==null?void 0:x.docs)==null?void 0:k.source}}};const fe=["Default"];export{a as Default,fe as __namedExportsOrder,ye as default};
