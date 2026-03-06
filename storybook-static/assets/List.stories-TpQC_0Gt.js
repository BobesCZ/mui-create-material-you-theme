import{j as t}from"./jsx-runtime-SwSI87LU.js";import{B as x}from"./Box-D5Cb9CRV.js";import{a as U,L as l}from"./List-DV6omC5H.js";import{L as I,c as e,a as s,b as p,I as y}from"./Inbox-D4R9bMah.js";import{r as B}from"./index-C5e9SFkp.js";import{a as z,c as D}from"./DefaultPropsProvider-BrQqfoFg.js";import{g as E,a as F,c as H,s as N}from"./createSimplePaletteValueFilter-Duk3_k5H.js";import{A as L}from"./Avatar-Dqv49IuM.js";import{c as u}from"./createSvgIcon-BlxEbIiR.js";import{M as _}from"./Mail-CSSuxu69.js";import"./index-C9QDBZnb.js";import"./useEnhancedEffect-CRWTCLtS.js";import"./useForkRef-rWh6d7Kr.js";import"./ButtonBase-HRlQieUH.js";import"./useTimeout-mwS7l5NA.js";import"./useSlot-CEEMfV3Y.js";import"./isMuiElement-DKj4ZibN.js";import"./listItemTextClasses-Cc8uyV6O.js";import"./Typography-BP1m041B.js";function O(r){return E("MuiListItemAvatar",r)}F("MuiListItemAvatar",["root","alignItemsFlexStart"]);const q=r=>{const{alignItems:a,classes:i}=r;return H({root:["root",a==="flex-start"&&"alignItemsFlexStart"]},O,i)},G=N("div",{name:"MuiListItemAvatar",slot:"Root",overridesResolver:(r,a)=>{const{ownerState:i}=r;return[a.root,i.alignItems==="flex-start"&&a.alignItemsFlexStart]}})({minWidth:56,flexShrink:0,variants:[{props:{alignItems:"flex-start"},style:{marginTop:8}}]}),h=B.forwardRef(function(a,i){const d=z({props:a,name:"MuiListItemAvatar"}),{className:V,...k}=d,P=B.useContext(U),j={...d,alignItems:P.alignItems},R=q(j);return t.jsx(G,{className:D(R.root,V),ownerState:j,ref:i,...k})}),K=u(t.jsx("path",{d:"m13.127 14.56 1.43-1.43 6.44 6.443L19.57 21zm4.293-5.73 2.86-2.86c-3.95-3.95-10.35-3.96-14.3-.02 3.93-1.3 8.31-.25 11.44 2.88M5.95 5.98c-3.94 3.95-3.93 10.35.02 14.3l2.86-2.86C5.7 14.29 4.65 9.91 5.95 5.98m.02-.02-.01.01c-.38 3.01 1.17 6.88 4.3 10.02l5.73-5.73c-3.13-3.13-7.01-4.68-10.02-4.3"})),Q=u(t.jsx("path",{d:"M21 19V5c0-1.1-.9-2-2-2H5c-1.1 0-2 .9-2 2v14c0 1.1.9 2 2 2h14c1.1 0 2-.9 2-2M8.5 13.5l2.5 3.01L14.5 12l4.5 6H5z"})),X=u(t.jsx("path",{d:"M20 6h-4V4c0-1.11-.89-2-2-2h-4c-1.11 0-2 .89-2 2v2H4c-1.11 0-1.99.89-1.99 2L2 19c0 1.11.89 2 2 2h16c1.11 0 2-.89 2-2V8c0-1.11-.89-2-2-2m-6 0h-4V4h4z"})),ht={title:"Components/List",parameters:{controls:{expanded:!0}}},o={render:()=>t.jsx(x,{sx:({palette:r})=>({width:"100%",maxWidth:360,bgcolor:r.surfaceContainer.main}),children:t.jsxs(l,{children:[t.jsx(s,{selected:!0,children:t.jsx(e,{primary:"Inbox"})}),t.jsx(s,{children:t.jsx(e,{primary:"Starred"})}),t.jsx(s,{children:t.jsx(e,{primary:"Send email"})})]})})},n={render:()=>t.jsx(x,{sx:({palette:r})=>({width:"100%",maxWidth:360,bgcolor:r.surfaceContainer.main}),children:t.jsxs(l,{children:[t.jsxs(s,{selected:!0,children:[t.jsx(p,{children:t.jsx(y,{})}),t.jsx(e,{primary:"Inbox"})]}),t.jsxs(s,{children:[t.jsx(p,{children:t.jsx(_,{})}),t.jsx(e,{primary:"Sent Mail"})]}),t.jsxs(s,{children:[t.jsx(p,{children:t.jsx(y,{})}),t.jsx(e,{primary:"Drafts"})]})]})})},m={render:()=>t.jsx(x,{sx:({palette:r})=>({width:"100%",maxWidth:360,bgcolor:r.surfaceContainer.main}),children:t.jsxs(l,{children:[t.jsx(s,{selected:!0,children:t.jsx(e,{primary:"Primary Text",secondary:"Secondary Text"})}),t.jsx(s,{children:t.jsx(e,{primary:"Another Item",secondary:"Secondary description"})})]})})},c={render:()=>t.jsx(x,{sx:({palette:r})=>({width:"100%",maxWidth:360,bgcolor:r.surfaceContainer.main}),children:t.jsxs(l,{children:[t.jsxs(I,{children:[t.jsx(h,{children:t.jsx(L,{children:t.jsx(Q,{})})}),t.jsx(e,{primary:"Photos",secondary:"Jan 9, 2014"})]}),t.jsxs(I,{children:[t.jsx(h,{children:t.jsx(L,{children:t.jsx(X,{})})}),t.jsx(e,{primary:"Work",secondary:"Jan 7, 2014"})]}),t.jsxs(I,{children:[t.jsx(h,{children:t.jsx(L,{children:t.jsx(K,{})})}),t.jsx(e,{primary:"Vacation",secondary:"July 20, 2014"})]})]})})};var f,v,g;o.parameters={...o.parameters,docs:{...(f=o.parameters)==null?void 0:f.docs,source:{originalSource:`{
  render: () => <Box sx={({
    palette
  }) => ({
    width: '100%',
    maxWidth: 360,
    bgcolor: palette.surfaceContainer.main
  })}>\r
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
}`,...(g=(v=o.parameters)==null?void 0:v.docs)==null?void 0:g.source}}};var A,S,T;n.parameters={...n.parameters,docs:{...(A=n.parameters)==null?void 0:A.docs,source:{originalSource:`{
  render: () => <Box sx={({
    palette
  }) => ({
    width: '100%',
    maxWidth: 360,
    bgcolor: palette.surfaceContainer.main
  })}>\r
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
}`,...(T=(S=n.parameters)==null?void 0:S.docs)==null?void 0:T.source}}};var C,b,M;m.parameters={...m.parameters,docs:{...(C=m.parameters)==null?void 0:C.docs,source:{originalSource:`{
  render: () => <Box sx={({
    palette
  }) => ({
    width: '100%',
    maxWidth: 360,
    bgcolor: palette.surfaceContainer.main
  })}>\r
      <List>\r
        <ListItemButton selected>\r
          <ListItemText primary="Primary Text" secondary="Secondary Text" />\r
        </ListItemButton>\r
        <ListItemButton>\r
          <ListItemText primary="Another Item" secondary="Secondary description" />\r
        </ListItemButton>\r
      </List>\r
    </Box>
}`,...(M=(b=m.parameters)==null?void 0:b.docs)==null?void 0:M.source}}};var W,w,J;c.parameters={...c.parameters,docs:{...(W=c.parameters)==null?void 0:W.docs,source:{originalSource:`{
  render: () => <Box sx={({
    palette
  }) => ({
    width: '100%',
    maxWidth: 360,
    bgcolor: palette.surfaceContainer.main
  })}>\r
      <List>\r
        <ListItem>\r
          <ListItemAvatar>\r
            <Avatar>\r
              <Image />\r
            </Avatar>\r
          </ListItemAvatar>\r
          <ListItemText primary="Photos" secondary="Jan 9, 2014" />\r
        </ListItem>\r
        <ListItem>\r
          <ListItemAvatar>\r
            <Avatar>\r
              <Work />\r
            </Avatar>\r
          </ListItemAvatar>\r
          <ListItemText primary="Work" secondary="Jan 7, 2014" />\r
        </ListItem>\r
        <ListItem>\r
          <ListItemAvatar>\r
            <Avatar>\r
              <BeachAccess />\r
            </Avatar>\r
          </ListItemAvatar>\r
          <ListItemText primary="Vacation" secondary="July 20, 2014" />\r
        </ListItem>\r
      </List>\r
    </Box>
}`,...(J=(w=c.parameters)==null?void 0:w.docs)==null?void 0:J.source}}};const ut=["BasicListItemButton","BasicListItemIcon","BasicListItemText","BasicListItemAvatar"];export{c as BasicListItemAvatar,o as BasicListItemButton,n as BasicListItemIcon,m as BasicListItemText,ut as __namedExportsOrder,ht as default};
