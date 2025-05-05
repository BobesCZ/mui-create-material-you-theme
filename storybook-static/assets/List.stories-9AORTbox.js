import{j as r}from"./jsx-runtime-DiklIkkE.js";import{B as m}from"./Box-BlCakfgx.js";import{L as n}from"./listItemTextClasses-DVK7I-xb.js";import{L as t,a as e,b as a,I as c}from"./Inbox-SZi7pIc5.js";import{M as B}from"./Mail-DC-35BUQ.js";import"./index-DRjF_FHU.js";import"./DefaultPropsProvider-BmGrrXpS.js";import"./createSimplePaletteValueFilter-DuTtVzJL.js";import"./index-DCZTZMIM.js";import"./useEnhancedEffect-CvtZChyo.js";import"./useForkRef-Bgr6uVxV.js";import"./ButtonBase-DoOomGae.js";import"./useSlot-CPg5sONg.js";import"./resolveComponentProps-CY12Kfy7.js";import"./Typography-D9-ECb7z.js";import"./createSvgIcon-BjPS0fQs.js";const O={title:"Components/List",parameters:{controls:{expanded:!0}}},s={render:()=>r.jsx(m,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:r.jsxs(n,{children:[r.jsx(t,{selected:!0,children:r.jsx(e,{primary:"Inbox"})}),r.jsx(t,{children:r.jsx(e,{primary:"Starred"})}),r.jsx(t,{children:r.jsx(e,{primary:"Send email"})})]})})},i={render:()=>r.jsx(m,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:r.jsxs(n,{children:[r.jsxs(t,{selected:!0,children:[r.jsx(a,{children:r.jsx(c,{})}),r.jsx(e,{primary:"Inbox"})]}),r.jsxs(t,{children:[r.jsx(a,{children:r.jsx(B,{})}),r.jsx(e,{primary:"Sent Mail"})]}),r.jsxs(t,{children:[r.jsx(a,{children:r.jsx(c,{})}),r.jsx(e,{primary:"Drafts"})]})]})})},o={render:()=>r.jsx(m,{sx:{width:"100%",maxWidth:360,bgcolor:"background.paper"},children:r.jsxs(n,{children:[r.jsx(t,{selected:!0,children:r.jsx(e,{primary:"Primary Text",secondary:"Secondary Text"})}),r.jsx(t,{children:r.jsx(e,{primary:"Another Item",secondary:"Secondary description"})})]})})};var d,x,p;s.parameters={...s.parameters,docs:{...(d=s.parameters)==null?void 0:d.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>\r
      <List>\r
        <ListItemButton selected>\r
          <ListItemText primary="Inbox" />\r
        </ListItemButton>\r
        <ListItemButton>\r
          <ListItemText primary="Starred" />\r
        </ListItemButton>\r
        <ListItemButton>\r
          <ListItemText primary="Send email" />\r
        </ListItemButton>\r
      </List>\r
    </Box>
}`,...(p=(x=s.parameters)==null?void 0:x.docs)==null?void 0:p.source}}};var I,L,l;i.parameters={...i.parameters,docs:{...(I=i.parameters)==null?void 0:I.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>\r
      <List>\r
        <ListItemButton selected>\r
          <ListItemIcon>\r
            <Inbox />\r
          </ListItemIcon>\r
          <ListItemText primary="Inbox" />\r
        </ListItemButton>\r
        <ListItemButton>\r
          <ListItemIcon>\r
            <Mail />\r
          </ListItemIcon>\r
          <ListItemText primary="Sent Mail" />\r
        </ListItemButton>\r
        <ListItemButton>\r
          <ListItemIcon>\r
            <Inbox />\r
          </ListItemIcon>\r
          <ListItemText primary="Drafts" />\r
        </ListItemButton>\r
      </List>\r
    </Box>
}`,...(l=(L=i.parameters)==null?void 0:L.docs)==null?void 0:l.source}}};var u,h,j;o.parameters={...o.parameters,docs:{...(u=o.parameters)==null?void 0:u.docs,source:{originalSource:`{
  render: () => <Box sx={{
    width: '100%',
    maxWidth: 360,
    bgcolor: 'background.paper'
  }}>\r
      <List>\r
        <ListItemButton selected>\r
          <ListItemText primary="Primary Text" secondary="Secondary Text" />\r
        </ListItemButton>\r
        <ListItemButton>\r
          <ListItemText primary="Another Item" secondary="Secondary description" />\r
        </ListItemButton>\r
      </List>\r
    </Box>
}`,...(j=(h=o.parameters)==null?void 0:h.docs)==null?void 0:j.source}}};const R=["BasicList","ListWithIcons","ListWithDifferentText"];export{s as BasicList,o as ListWithDifferentText,i as ListWithIcons,R as __namedExportsOrder,O as default};
