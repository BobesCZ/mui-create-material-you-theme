import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as p}from"./Button-CB1mHZ0v.js";import{E as d}from"./Edit-CUHtlVRP.js";import{S as i}from"./Stack-BrBov2nG.js";import{T as m}from"./Typography-_Ge7nhXp.js";import"./index-DRjF_FHU.js";import"./createSimplePaletteValueFilter-B_XaPUuX.js";import"./DefaultPropsProvider-C6ugeVop.js";import"./CircularProgress-3hNtj7Fw.js";import"./ButtonBase-D8Rwr81C.js";import"./useForkRef-Bgr6uVxV.js";import"./useEnhancedEffect-CvtZChyo.js";import"./createSvgIcon-B3jQ-DQK.js";import"./index-Ci6ClzuK.js";const n=({label:a,withIcon:t,...e})=>r.jsx(p,{startIcon:t?r.jsx(d,{}):void 0,...e,children:a}),P={title:"Components/Button",component:n,argTypes:{color:{table:{disable:!0}},variant:{table:{disable:!0}},size:{control:{type:"radio"},options:["small","medium","large"]},disabled:{control:"boolean"},withIcon:{control:"boolean"},label:{table:{disable:!0}}},parameters:{controls:{expanded:!0}},includeStories:["AllVariants"]},u=["primary","secondary","tertiary","error","info","success","warning"],g=["filled","tonal","outlined","elevated","text"],o={args:{size:"medium",disabled:!1,withIcon:!1},render:a=>r.jsx(i,{spacing:4,children:g.map(t=>r.jsxs("div",{children:[r.jsx(m,{variant:"h6",gutterBottom:!0,children:t}),r.jsx(i,{direction:"row",spacing:2,children:u.map(e=>r.jsx(n,{color:e,variant:t,...a,label:`${e}`},`${e}-${t}`))})]},t))})};n.__docgenInfo={description:"",methods:[],displayName:"PreviewButton",props:{label:{required:!0,tsType:{name:"string"},description:""},withIcon:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonProps"]};var s,l,c;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: false,
    withIcon: false
  },
  render: args => <Stack spacing={4}>\r
      {variants.map(variant => <div key={variant}>\r
          <Typography variant="h6" gutterBottom>\r
            {variant}\r
          </Typography>\r
          <Stack direction="row" spacing={2}>\r
            {colors.map(color => <PreviewButton key={\`\${color}-\${variant}\`} color={color} variant={variant} {...args} label={\`\${color}\`} />)}\r
          </Stack>\r
        </div>)}\r
    </Stack>
}`,...(c=(l=o.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const E=["PreviewButton","AllVariants"];export{o as AllVariants,n as PreviewButton,E as __namedExportsOrder,P as default};
