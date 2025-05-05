import{j as t}from"./jsx-runtime-DiklIkkE.js";import{A as a,a as p}from"./AlertTitle-DVDDivq8.js";import{S as l}from"./Stack-DNp63DRO.js";import"./index-DRjF_FHU.js";import"./createSimplePaletteValueFilter-DuTtVzJL.js";import"./DefaultPropsProvider-BmGrrXpS.js";import"./useSlot-CPg5sONg.js";import"./resolveComponentProps-CY12Kfy7.js";import"./useForkRef-Bgr6uVxV.js";import"./createSvgIcon-BjPS0fQs.js";import"./IconButton-CMnFOafX.js";import"./CircularProgress-DiP3Mdcu.js";import"./ButtonBase-DoOomGae.js";import"./useEnhancedEffect-CvtZChyo.js";import"./Paper-DLhAyXSV.js";import"./useTheme-ClLI4F8W.js";import"./Typography-D9-ECb7z.js";import"./index-DCZTZMIM.js";const _={title:"Components/Alert",component:a,argTypes:{severity:{table:{disable:!0}},onClose:{table:{disable:!0}},variant:{control:"radio",options:["standard","outlined","filled"]}},parameters:{controls:{expanded:!0}}},m=["error","warning","info","success"],e={args:{variant:"standard"},render:n=>t.jsx(l,{spacing:2,children:m.map(r=>t.jsxs(a,{severity:r,onClose:()=>{},...n,children:[t.jsx(p,{children:r.toUpperCase()}),"This is a ",r," alert."]},r))})};var s,i,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    variant: 'standard'
  },
  render: args => <Stack spacing={2}>\r
      {severities.map(severity => <Alert key={severity} severity={severity} onClose={() => undefined} {...args}>\r
          <AlertTitle>{severity.toUpperCase()}</AlertTitle>\r
          This is a {severity} alert.\r
        </Alert>)}\r
    </Stack>
}`,...(o=(i=e.parameters)==null?void 0:i.docs)==null?void 0:o.source}}};const w=["AllSeverities"];export{e as AllSeverities,w as __namedExportsOrder,_ as default};
