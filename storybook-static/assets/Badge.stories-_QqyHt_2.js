import{j as r}from"./jsx-runtime-DiklIkkE.js";import{M as i}from"./Mail-DAKTQnSU.js";import{B as e}from"./Badge-B79g79Hd.js";import{S as a}from"./Stack-BrBov2nG.js";import{B as s}from"./Box-BT1jdQWj.js";import{T as n}from"./Typography-_Ge7nhXp.js";import"./index-DRjF_FHU.js";import"./createSvgIcon-B3jQ-DQK.js";import"./createSimplePaletteValueFilter-B_XaPUuX.js";import"./DefaultPropsProvider-C6ugeVop.js";import"./useSlotProps-C8n4eVha.js";import"./resolveComponentProps-DJo_Xt02.js";import"./useForkRef-Bgr6uVxV.js";import"./index-Ci6ClzuK.js";const w={title:"Components/Badge",component:e,parameters:{controls:{hideNoControlsWarning:!0}},argTypes:{color:{table:{disable:!0}},variant:{table:{disable:!0}},badgeContent:{table:{disable:!0}},children:{table:{disable:!0}}}},c=["default","primary","secondary","tertiary","error","info","success","warning"],t={render:()=>r.jsxs(a,{spacing:4,children:[r.jsxs(s,{children:[r.jsx(n,{variant:"h6",gutterBottom:!0,children:"Standard"}),r.jsx(a,{direction:"row",spacing:3,children:c.map(o=>r.jsx(e,{color:o,badgeContent:4,children:r.jsx(i,{})},o))})]}),r.jsxs(s,{children:[r.jsx(n,{variant:"h6",gutterBottom:!0,children:"Dot"}),r.jsx(a,{direction:"row",spacing:3,children:c.map(o=>r.jsx(e,{color:o,variant:"dot",children:r.jsx(i,{})},o+"-dot"))})]})]})};var d,p,l;t.parameters={...t.parameters,docs:{...(d=t.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Stack spacing={4}>\r
      <Box>\r
        <Typography variant="h6" gutterBottom>\r
          Standard\r
        </Typography>\r
        <Stack direction="row" spacing={3}>\r
          {colors.map(color => <Badge key={color} color={color} badgeContent={4}>\r
              <MailIcon />\r
            </Badge>)}\r
        </Stack>\r
      </Box>\r
\r
      <Box>\r
        <Typography variant="h6" gutterBottom>\r
          Dot\r
        </Typography>\r
        <Stack direction="row" spacing={3}>\r
          {colors.map(color => <Badge key={color + '-dot'} color={color} variant="dot">\r
              <MailIcon />\r
            </Badge>)}\r
        </Stack>\r
      </Box>\r
    </Stack>
}`,...(l=(p=t.parameters)==null?void 0:p.docs)==null?void 0:l.source}}};const C=["AllBadges"];export{t as AllBadges,C as __namedExportsOrder,w as default};
