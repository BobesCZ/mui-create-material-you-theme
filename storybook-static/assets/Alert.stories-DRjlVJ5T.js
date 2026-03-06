import{j as t}from"./jsx-runtime-SwSI87LU.js";import{A as a,a as p}from"./AlertTitle-DynbZc0R.js";import{S as l}from"./Stack-cxUdDYm1.js";import"./index-C5e9SFkp.js";import"./DefaultPropsProvider-BrQqfoFg.js";import"./createSimplePaletteValueFilter-Duk3_k5H.js";import"./useSlot-CEEMfV3Y.js";import"./useForkRef-rWh6d7Kr.js";import"./createSvgIcon-BlxEbIiR.js";import"./IconButton-BK2-7LpP.js";import"./useId-coydJ4dM.js";import"./ButtonBase-HRlQieUH.js";import"./useTimeout-mwS7l5NA.js";import"./useEnhancedEffect-CRWTCLtS.js";import"./CircularProgress-CXoaLttF.js";import"./Paper-C2hhBtSJ.js";import"./useTheme-DHgEfyoH.js";import"./Typography-BP1m041B.js";import"./index-C9QDBZnb.js";const w={title:"Components/Alert",component:a,argTypes:{severity:{table:{disable:!0}},onClose:{table:{disable:!0}},variant:{control:"radio",options:["standard","outlined","filled"]}},parameters:{controls:{expanded:!0}}},m=["error","warning","info","success"],e={args:{variant:"standard"},render:n=>t.jsx(l,{spacing:2,children:m.map(r=>t.jsxs(a,{severity:r,onClose:()=>{},...n,children:[t.jsx(p,{children:r.toUpperCase()}),"This is a ",r," alert."]},r))})};var s,i,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'standard'
  },
  render: args => <Stack spacing={2}>\r
      {severities.map(severity => <Alert key={severity} severity={severity} onClose={() => undefined} {...args}>\r
          <AlertTitle>{severity.toUpperCase()}</AlertTitle>\r
          This is a {severity} alert.\r
        </Alert>)}\r
    </Stack>
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const O=["AllSeverities"];export{e as AllSeverities,O as __namedExportsOrder,w as default};
