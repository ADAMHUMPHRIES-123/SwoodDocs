import{j as e,P as r,S as t,T as s,a as d,I as l,K as i,M as n,Z as o}from"./index-D64WPYac.js";import{I as a}from"./ImageComponent-DzwmHrKf.js";const x=()=>e.jsxs(e.Fragment,{children:[e.jsx(r,{title:"Methods of displaying edgebands on images"}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#Overview",children:"Overview"})}),e.jsx("li",{children:e.jsx("a",{href:"#standard",children:"Standard method"})}),e.jsx("li",{children:e.jsx("a",{href:"#all-edgebands",children:"All edgebands method"})})]})}),e.jsxs(t,{id:"Overview",title:"Overview",children:[e.jsxs(s,{children:[e.jsx(d,{})," provides users with the ability to display edgebands on panel images, offering two distinct methods for customization. Each method has its own set of features, benefits, and potential limitations, making them suitable for different use cases."]}),e.jsx(s,{children:"The following sections will explore these methods in greater detail, outlining their use cases, limitations, and examples of generated images to help you choose the most appropriate option for your needs."})]}),e.jsxs(t,{id:"standard",title:"Standard method",children:[e.jsxs(s,{children:["This is the default approach used by ",e.jsx(l,{}),", designed primarily for simple, rectangular panels. It allows users to showcase basic edge information, such as material, description or order. However, this method is best suited for straightforward designs where all edges are perpendicular, and the panels are uniformly shaped. It might not perform well with more complex or angled geometries. An example is shown below."]}),e.jsx(s,{variant:"h6",children:"Rectangular Panel"}),e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:2,justifyContent:"center"},children:[e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"SolidWorks Model"})]}),e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-standard-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"Generated Image"})]})]}),e.jsx(s,{variant:"h6",children:"Non-Rectangular Panel"}),e.jsx(s,{children:"This method is not suitable for edgebands that are angled or curved. See the example below."}),e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:2,justifyContent:"center"},children:[e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-non-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"SolidWorks Model"})]}),e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-standard-non-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"Generated Image"})]})]})]}),e.jsxs(t,{id:"all-edgebands",title:"All edgebands method",children:[e.jsx(s,{children:"This alternative method expands on the capabilities of the standard approach. It can accommodate more complex designs, including angled and curved edgebands. Additionally, it adds a balloon with a leader line to display detailed information about each edgeband, making it easier to identify specific edges in more intricate panels. This method is versatile and provides a clearer visual representation for complex panel geometries but may introduce certain quirks or bugs under specific conditions. An example is shown below."}),e.jsx(s,{variant:"h6",children:"Rectangular Panel"}),e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:2,justifyContent:"center"},children:[e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"SolidWorks Model"})]}),e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-alledgebands-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"Generated Image"})]})]}),e.jsx(s,{variant:"h6",children:"Non-Rectangular Panel"}),e.jsx(s,{children:"This method is compatible with angled and curved edgebands, as demonstrated below."}),e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:2,justifyContent:"center"},children:[e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-non-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"SolidWorks Model"})]}),e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-alledgebands-non-rectangular.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"Generated Image"})]})]}),e.jsx(s,{variant:"h6",children:"Known Issues"}),e.jsx(s,{children:"As of the current version, there is a known issue where edgeband balloons may not align correctly when the panel's length direction is not set to 0°. Refer to the example below:"}),e.jsxs(i,{sx:{display:"grid",gridTemplateColumns:"repeat(auto-fit, minmax(300px, 1fr))",gap:2,justifyContent:"center"},children:[e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-non-rectangular-bug.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"SolidWorks Model"})]}),e.jsxs(n,{spacing:0,alignItems:"center",children:[e.jsx(a,{source:"./images/EB-alledgebands-non-rectangular-bug.png",size:"400px",sx:{paddingBottom:"5px"}}),e.jsx(s,{color:"textDisabled",children:"Generated Image"})]})]}),e.jsx(s,{variant:"h6",children:"How to enable the all edgebands method"}),e.jsxs(s,{children:["To display all edgebands, open ",e.jsx(o,{}),", navigate to ",e.jsx("span",{className:"param",children:"Images > Panel Image"}),", then disable ",e.jsx("span",{className:"highlight",children:"Edgeband Visible"})," and enable ",e.jsx("span",{className:"highlight",children:"All Edgeband Visible"}),"."]}),e.jsx(a,{source:"./images/EB-enable-alledgebands.png",size:"800px"})]})]});export{x as default};
