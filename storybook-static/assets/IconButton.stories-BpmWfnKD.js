import{j as r}from"./jsx-runtime-DiklIkkE.js";import{I as l}from"./IconButton-D_dlOLCs.js";import{S as n}from"./Stack-BrBov2nG.js";import{T as m}from"./Typography-_Ge7nhXp.js";import{D as p}from"./Delete-4-dy2GHL.js";import"./index-DRjF_FHU.js";import"./createSimplePaletteValueFilter-B_XaPUuX.js";import"./DefaultPropsProvider-C6ugeVop.js";import"./CircularProgress-3hNtj7Fw.js";import"./ButtonBase-D8Rwr81C.js";import"./useForkRef-Bgr6uVxV.js";import"./useEnhancedEffect-CvtZChyo.js";import"./index-Ci6ClzuK.js";import"./createSvgIcon-B3jQ-DQK.js";const $={title:"Components/IconButton",component:l,argTypes:{color:{table:{disable:!0}},variant:{table:{disable:!0}},size:{control:{type:"radio"},options:["small","medium","large"]},disabled:{control:"boolean"}},parameters:{controls:{expanded:!0}},includeStories:["AllVariants"]},d=["primary","secondary","tertiary","error","info","success","warning"],u=["standard","filled","tonal","outlined"],o={args:{size:"medium",disabled:!1},render:a=>r.jsx(n,{spacing:4,children:u.map(t=>r.jsxs("div",{children:[r.jsx(m,{variant:"h6",gutterBottom:!0,children:t}),r.jsx(n,{direction:"row",spacing:2,children:d.map(e=>r.jsx(l,{color:e,variant:t,...a,children:r.jsx(p,{fontSize:a.size})},`${e}-${t}`))})]},t))})};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
  args: {
    size: 'medium',
    disabled: false
  },
  render: args => <Stack spacing={4}>\r
      {variants.map(variant => <div key={variant}>\r
          <Typography variant="h6" gutterBottom>\r
            {variant}\r
          </Typography>\r
          <Stack direction="row" spacing={2}>\r
            {colors.map(color => <IconButton key={\`\${color}-\${variant}\`} color={color} variant={variant} {...args}>\r
                <Delete fontSize={args.size} />\r
              </IconButton>)}\r
          </Stack>\r
        </div>)}\r
    </Stack>
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const w=["AllVariants"];export{o as AllVariants,w as __namedExportsOrder,$ as default};
