import{j as r}from"./jsx-runtime-SwSI87LU.js";import{S as i}from"./Stack-cxUdDYm1.js";import{T as c}from"./Typography-BP1m041B.js";import{B as m}from"./Button-gEyXszgu.js";import{E as d}from"./Edit-CWww3WoY.js";import"./index-C5e9SFkp.js";import"./createSimplePaletteValueFilter-Duk3_k5H.js";import"./DefaultPropsProvider-BrQqfoFg.js";import"./index-C9QDBZnb.js";import"./useId-coydJ4dM.js";import"./ButtonBase-HRlQieUH.js";import"./useTimeout-mwS7l5NA.js";import"./useEnhancedEffect-CRWTCLtS.js";import"./useForkRef-rWh6d7Kr.js";import"./CircularProgress-CXoaLttF.js";import"./createSvgIcon-BlxEbIiR.js";const n=({label:a,withIcon:t,...e})=>r.jsx(m,{startIcon:t?r.jsx(d,{}):void 0,...e,children:a}),_={title:"Components/Button",component:n,argTypes:{color:{table:{disable:!0}},variant:{table:{disable:!0}},size:{control:{type:"radio"},options:["small","medium","large"]},disabled:{control:"boolean"},withIcon:{control:"boolean"},label:{table:{disable:!0}}},parameters:{controls:{expanded:!0}},includeStories:["AllVariants"]},u=["primary","secondary","tertiary","error","info","success","warning"],g=["filled","tonal","outlined","elevated","text"],o={args:{size:"medium",disabled:!1,withIcon:!1},render:a=>r.jsx(i,{spacing:4,children:g.map(t=>r.jsxs("div",{children:[r.jsx(c,{variant:"h6",gutterBottom:!0,children:t}),r.jsx(i,{direction:"row",spacing:2,children:u.map(e=>r.jsx(n,{color:e,variant:t,...a,label:`${e}`},`${e}-${t}`))})]},t))})};n.__docgenInfo={description:"",methods:[],displayName:"PreviewButton",props:{label:{required:!0,tsType:{name:"string"},description:""},withIcon:{required:!1,tsType:{name:"boolean"},description:""}},composes:["ButtonProps"]};var s,l,p;o.parameters={...o.parameters,docs:{...(s=o.parameters)==null?void 0:s.docs,source:{originalSource:`{
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
}`,...(p=(l=o.parameters)==null?void 0:l.docs)==null?void 0:p.source}}};const z=["PreviewButton","AllVariants"];export{o as AllVariants,n as PreviewButton,z as __namedExportsOrder,_ as default};
