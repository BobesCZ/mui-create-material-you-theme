import{j as r}from"./jsx-runtime-SwSI87LU.js";import{I as m}from"./IconButton-BK2-7LpP.js";import{S as n}from"./Stack-cxUdDYm1.js";import{T as p}from"./Typography-BP1m041B.js";import{D as l}from"./Delete-CMVNmeUS.js";import"./index-C5e9SFkp.js";import"./DefaultPropsProvider-BrQqfoFg.js";import"./createSimplePaletteValueFilter-Duk3_k5H.js";import"./useId-coydJ4dM.js";import"./ButtonBase-HRlQieUH.js";import"./useTimeout-mwS7l5NA.js";import"./useEnhancedEffect-CRWTCLtS.js";import"./useForkRef-rWh6d7Kr.js";import"./CircularProgress-CXoaLttF.js";import"./index-C9QDBZnb.js";import"./createSvgIcon-BlxEbIiR.js";const A={title:"Components/IconButton",component:m,argTypes:{color:{table:{disable:!0}},variant:{table:{disable:!0}},size:{control:{type:"radio"},options:["small","medium","large"]},disabled:{control:"boolean"}},parameters:{controls:{expanded:!0}},includeStories:["AllVariants"]},d=["primary","secondary","tertiary","error","info","success","warning"],u=["standard","filled","tonal","outlined"],o={args:{size:"medium",disabled:!1},render:a=>r.jsx(n,{spacing:4,children:u.map(t=>r.jsxs("div",{children:[r.jsx(p,{variant:"h6",gutterBottom:!0,children:t}),r.jsx(n,{direction:"row",spacing:2,children:d.map(e=>r.jsx(m,{color:e,variant:t,...a,children:r.jsx(l,{fontSize:a.size})},`${e}-${t}`))})]},t))})};var i,s,c;o.parameters={...o.parameters,docs:{...(i=o.parameters)==null?void 0:i.docs,source:{originalSource:`{
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
}`,...(c=(s=o.parameters)==null?void 0:s.docs)==null?void 0:c.source}}};const D=["AllVariants"];export{o as AllVariants,D as __namedExportsOrder,A as default};
