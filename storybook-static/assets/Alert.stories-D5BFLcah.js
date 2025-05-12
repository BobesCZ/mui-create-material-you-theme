import{j as t}from"./jsx-runtime-DiklIkkE.js";import{A as a,a as p}from"./AlertTitle-D6RLBm3I.js";import{S as l}from"./Stack-BrBov2nG.js";import"./index-DRjF_FHU.js";import"./createSimplePaletteValueFilter-B_XaPUuX.js";import"./DefaultPropsProvider-C6ugeVop.js";import"./useSlot-BaLEgHhp.js";import"./resolveComponentProps-DJo_Xt02.js";import"./useForkRef-Bgr6uVxV.js";import"./createSvgIcon-B3jQ-DQK.js";import"./IconButton-D_dlOLCs.js";import"./CircularProgress-3hNtj7Fw.js";import"./ButtonBase-D8Rwr81C.js";import"./useEnhancedEffect-CvtZChyo.js";import"./Paper-BWmIWIGO.js";import"./useTheme-CAP5uvpg.js";import"./Typography-_Ge7nhXp.js";import"./index-Ci6ClzuK.js";const _={title:"Components/Alert",component:a,argTypes:{severity:{table:{disable:!0}},onClose:{table:{disable:!0}},variant:{control:"radio",options:["standard","outlined","filled"]}},parameters:{controls:{expanded:!0}}},m=["error","warning","info","success"],e={args:{variant:"standard"},render:n=>t.jsx(l,{spacing:2,children:m.map(r=>t.jsxs(a,{severity:r,onClose:()=>{},...n,children:[t.jsx(p,{children:r.toUpperCase()}),"This is a ",r," alert."]},r))})};var s,i,o;e.parameters={...e.parameters,docs:{...(s=e.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
