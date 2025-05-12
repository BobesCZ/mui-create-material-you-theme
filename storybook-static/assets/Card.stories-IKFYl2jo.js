import{j as r}from"./jsx-runtime-DiklIkkE.js";import{c as l}from"./createSvgIcon-B3jQ-DQK.js";import{S as f}from"./Stack-BrBov2nG.js";import{T as g}from"./Typography-_Ge7nhXp.js";import{C as S,a as A,b as k,c as B}from"./CardHeader-BgQg-4Sk.js";import{I as p}from"./IconButton-D_dlOLCs.js";import{A as T}from"./Avatar-BguJyJgC.js";import{a as R,t as w}from"./DefaultPropsProvider-C6ugeVop.js";import{r as E}from"./index-DRjF_FHU.js";import{g as N,a as P,s as O,c as U,b as V}from"./createSimplePaletteValueFilter-B_XaPUuX.js";import"./index-Ci6ClzuK.js";import"./Paper-BWmIWIGO.js";import"./useTheme-CAP5uvpg.js";import"./useSlot-BaLEgHhp.js";import"./resolveComponentProps-DJo_Xt02.js";import"./useForkRef-Bgr6uVxV.js";import"./CircularProgress-3hNtj7Fw.js";import"./ButtonBase-D8Rwr81C.js";import"./useEnhancedEffect-CvtZChyo.js";function _(t){return N("MuiCardMedia",t)}P("MuiCardMedia",["root","media","img"]);const z=t=>{const{classes:o,isMediaComponent:e,isImageComponent:a}=t;return V({root:["root",e&&"media",a&&"img"]},_,o)},F=O("div",{name:"MuiCardMedia",slot:"Root",overridesResolver:(t,o)=>{const{ownerState:e}=t,{isMediaComponent:a,isImageComponent:n}=e;return[o.root,a&&o.media,n&&o.img]}})({display:"block",backgroundSize:"cover",backgroundRepeat:"no-repeat",backgroundPosition:"center",variants:[{props:{isMediaComponent:!0},style:{width:"100%"}},{props:{isImageComponent:!0},style:{objectFit:"cover"}}]}),W=["video","audio","picture","iframe","img"],D=["picture","img"],H=E.forwardRef(function(o,e){const a=R({props:o,name:"MuiCardMedia"}),{children:n,className:y,component:s="div",image:i,src:M,style:u,...j}=a,c=W.includes(s),I=!c&&i?{backgroundImage:`url("${i}")`,...u}:u,C={...a,component:s,isMediaComponent:c,isImageComponent:D.includes(s)},b=z(C);return r.jsx(F,{className:U(b.root,y),as:s,role:!c&&i?"img":void 0,ref:e,style:I,ownerState:C,src:c?i||M:void 0,...j,children:n})}),L=l(r.jsx("path",{d:"m12 21.35-1.45-1.32C5.4 15.36 2 12.28 2 8.5 2 5.42 4.42 3 7.5 3c1.74 0 3.41.81 4.5 2.09C13.09 3.81 14.76 3 16.5 3 19.58 3 22 5.42 22 8.5c0 3.78-3.4 6.86-8.55 11.54z"})),G=l(r.jsx("path",{d:"M12 8c1.1 0 2-.9 2-2s-.9-2-2-2-2 .9-2 2 .9 2 2 2m0 2c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2m0 6c-1.1 0-2 .9-2 2s.9 2 2 2 2-.9 2-2-.9-2-2-2"})),$=l(r.jsx("path",{d:"M18 16.08c-.76 0-1.44.3-1.96.77L8.91 12.7c.05-.23.09-.46.09-.7s-.04-.47-.09-.7l7.05-4.11c.54.5 1.25.81 2.04.81 1.66 0 3-1.34 3-3s-1.34-3-3-3-3 1.34-3 3c0 .24.04.47.09.7L8.04 9.81C7.5 9.31 6.79 9 6 9c-1.66 0-3 1.34-3 3s1.34 3 3 3c.79 0 1.5-.31 2.04-.81l7.12 4.16c-.05.21-.08.43-.08.65 0 1.61 1.31 2.92 2.92 2.92s2.92-1.31 2.92-2.92-1.31-2.92-2.92-2.92"})),ur={title:"Components/Card",parameters:{controls:{hideNoControlsWarning:!0}}},d={title:"Shrimp and Chorizo Paella",subheader:"September 14, 2016",image:"https://mui.com/static/images/cards/paella.jpg",description:"This impressive paella is a perfect party dish and a fun meal to cook together with your guests."},q=["elevation","outlined","filled"],m={render:()=>r.jsx(f,{direction:"row",spacing:3,children:q.map(t=>r.jsxs("div",{children:[r.jsx(g,{variant:"h6",gutterBottom:!0,children:t}),r.jsxs(S,{variant:t,sx:{maxWidth:350},children:[r.jsx(A,{avatar:r.jsx(T,{sx:{bgcolor:w[500]},children:"R"}),action:r.jsx(p,{children:r.jsx(G,{})}),title:d.title,subheader:d.subheader}),r.jsx(H,{component:"img",height:"140",image:d.image,alt:"Paella dish"}),r.jsx(k,{children:r.jsx(g,{variant:"body2",color:"text.secondary",children:d.description})}),r.jsxs(B,{disableSpacing:!0,children:[r.jsx(p,{children:r.jsx(L,{})}),r.jsx(p,{children:r.jsx($,{})})]})]})]},t))})};var h,x,v;m.parameters={...m.parameters,docs:{...(h=m.parameters)==null?void 0:h.docs,source:{originalSource:`{
  render: () => <Stack direction="row" spacing={3}>\r
      {variants.map(variant => <div key={variant}>\r
          <Typography variant="h6" gutterBottom>\r
            {variant}\r
          </Typography>\r
\r
          <Card variant={variant} sx={{
        maxWidth: 350
      }}>\r
            <CardHeader avatar={<Avatar sx={{
          bgcolor: red[500]
        }}>R</Avatar>} action={<IconButton>\r
                  <MoreVertIcon />\r
                </IconButton>} title={cardContent.title} subheader={cardContent.subheader} />\r
            <CardMedia component="img" height="140" image={cardContent.image} alt="Paella dish" />\r
            <CardContent>\r
              <Typography variant="body2" color="text.secondary">\r
                {cardContent.description}\r
              </Typography>\r
            </CardContent>\r
            <CardActions disableSpacing>\r
              <IconButton>\r
                <FavoriteIcon />\r
              </IconButton>\r
              <IconButton>\r
                <ShareIcon />\r
              </IconButton>\r
            </CardActions>\r
          </Card>\r
        </div>)}\r
    </Stack>
}`,...(v=(x=m.parameters)==null?void 0:x.docs)==null?void 0:v.source}}};const Cr=["AllVariants"];export{m as AllVariants,Cr as __namedExportsOrder,ur as default};
