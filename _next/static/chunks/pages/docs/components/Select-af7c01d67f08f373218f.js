(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[6274],{3334:function(e,l,t){"use strict";t.r(l),t.d(l,{default:function(){return I},meta:function(){return N}});var n=t(2809),u=t(7841),i=t(3464),o=t(7294),a=t(3905),r=t(8055),d=t(1786),c=t(9568),k=t(5893),s=t(2471),p=t(2261),h=t(1411),m=t(1600),f=[(0,k.jsx)(s.Z,{value:"jack",children:"Jack"},"k0"),(0,k.jsx)(s.Z,{value:"asghar",children:"Asghar"},"k1"),(0,k.jsx)(s.Z,{value:"jolie",children:"Jolie"},"k2"),(0,k.jsx)(s.Z,{value:"kyle",children:"Kyle"},"k3"),(0,k.jsx)(s.Z,{value:"ali",children:"Ali"},"k4"),(0,k.jsxs)(p.Z,{title:"Group 1",children:[(0,k.jsx)(s.Z,{value:"michael",children:"Michael"},"k6"),(0,k.jsx)(s.Z,{value:"lucie",children:"Lucie"},"k7"),(0,k.jsx)(s.Z,{value:"maria",children:"Maria"},"k8"),(0,k.jsx)(s.Z,{value:"reza",children:"Reza"},"k9"),(0,k.jsx)(s.Z,{value:"mostafa",children:"Mostafa"},"k10")]},"k5")],S=function(e){return e.map((function(e){return e}))},v=function(){return(0,k.jsx)(m.Z,{code:'import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";;\nimport * as React from "react";\n\nconst children = [\n  <SelectOption value="jack" key="k0">Jack</SelectOption>,\n  <SelectOption value="asghar" key="k1">Asghar</SelectOption>,\n  <SelectOption value="jolie" key="k2">Jolie</SelectOption>,\n  <SelectOption value="kyle" key="k3">Kyle</SelectOption>,\n  <SelectOption value="ali" key="k4">Ali</SelectOption>,\n  <SelectOptionGroup key="k5" title="Group 1">\n    <SelectOption value="michael" key="k6">\n      Michael\n    </SelectOption>\n    <SelectOption value="lucie" key="k7">\n      Lucie\n    </SelectOption>\n    <SelectOption value="maria" key="k8">\n      Maria\n    </SelectOption>\n    <SelectOption value="reza" key="k9">\n      Reza\n    </SelectOption>\n    <SelectOption value="mostafa" key="k10">\n      Mostafa\n    </SelectOption>\n  </SelectOptionGroup>\n];\n\nconst renderChildren = children => {\n  return children.map(child => child);\n};\n\nconst Demo: React.FC = () => {\n  return (\n    <React.Fragment>\n      <Select\n        fluid\n        placeholder="Placeholder"\n        name="input"\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="Filled variant"\n        name="input"\n        variant="filled"\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="Searchable"\n        name="input"\n        searchable\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="Multiple"\n        name="input"\n        searchable\n        multiple\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="With searchable + multiple"\n        name="input"\n        searchable\n        multiple\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="Disabled"\n        name="input"\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="With default value"\n        name="input"\n        defaultValue="kyle"\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="With default value"\n        name="input"\n        defaultValue={["ali", "kyle"]}\n        multiple\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="With default value"\n        name="input"\n        defaultValue={["ali", "kyle"]}\n        multiple\n        disabled\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="With default value + disabled"\n        name="input"\n        defaultValue="kyle"\n        disabled\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="With rounded + hasError"\n        name="input"\n        hasError\n        rounded\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="With helperText"\n        name="input"\n        helperText="This is an informative helper text."\n      >\n        {renderChildren(children)}\n      </Select>\n      <Select\n        fluid\n        placeholder="Small"\n        name="input"\n        size="small"\n      >\n        {renderChildren(children)}\n      </Select>\n    </React.Fragment>\n  );\n};\n\nexport default Demo;',children:(0,k.jsxs)(o.Fragment,{children:[(0,k.jsx)(h.Z,{fluid:!0,placeholder:"Placeholder",name:"input",className:"demoSubject",children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"Filled variant",name:"input",variant:"filled",className:"demoSubject",children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"Searchable",name:"input",className:"demoSubject",searchable:!0,children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"Multiple",name:"input",className:"demoSubject",searchable:!0,multiple:!0,children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"With searchable + multiple",name:"input",className:"demoSubject",searchable:!0,multiple:!0,children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"Disabled",name:"input",disabled:!0,className:"demoSubject",children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"With default value",name:"input",className:"demoSubject",defaultValue:"kyle",children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"With default value",name:"input",className:"demoSubject",defaultValue:["ali","kyle"],multiple:!0,children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"With default value",name:"input",className:"demoSubject",defaultValue:["ali","kyle"],multiple:!0,disabled:!0,children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"With default value + disabled",name:"input",className:"demoSubject",defaultValue:"kyle",disabled:!0,children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"With rounded + hasError",name:"input",className:"demoSubject",hasError:!0,rounded:!0,children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,placeholder:"With helperText",name:"input",className:"demoSubject",helperText:"This is an informative helper text.",children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,multiple:!0,placeholder:"Large",name:"input",className:"demoSubject",size:"large",children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,multiple:!0,placeholder:"Medium (default)",name:"input",className:"demoSubject",size:"medium",children:S(f)}),(0,k.jsx)(h.Z,{fluid:!0,multiple:!0,placeholder:"Small",name:"input",className:"demoSubject",size:"small",children:S(f)})]})})};v.displayName="SelectSimpleDemo";var y=v,b=t(9961),O=function(){var e=o.useState(""),l=(0,b.Z)(e,2),t=l[0],n=l[1];return(0,k.jsx)(m.Z,{code:'import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";;\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  const [value, setValue] = React.useState("");\n  \n  return (\n    <React.Fragment>\n      <Select\n        value={value}\n        onChange={(_, v) => void setValue(v)}\n        fluid\n        placeholder="Placeholder"\n        name="input"\n      >\n        <SelectOption value="jack" key="k0">Jack</SelectOption>,\n        <SelectOption value="asghar" key="k1">Asghar</SelectOption>,\n        <SelectOption value="jolie" key="k2">Jolie</SelectOption>,\n        <SelectOption value="kyle" key="k3">Kyle</SelectOption>,\n        <SelectOption value="ali" key="k4">Ali</SelectOption>,\n        <SelectOptionGroup key="k5" title="Group 1">\n          <SelectOption value="michael" key="k6">\n            Michael\n          </SelectOption>\n          <SelectOption value="lucie" key="k7">\n            Lucie\n          </SelectOption>\n          <SelectOption value="maria" key="k8">\n            Maria\n          </SelectOption>\n          <SelectOption value="reza" key="k9">\n            Reza\n          </SelectOption>\n          <SelectOption value="mostafa" key="k10">\n            Mostafa\n          </SelectOption>\n        </SelectOptionGroup>\n      </Select>\n    </React.Fragment>\n  );\n};\n\nexport default Demo;',children:(0,k.jsx)(o.Fragment,{children:(0,k.jsxs)(h.Z,{value:t,onChange:function(e,l){n(l)},fluid:!0,placeholder:"Placeholder",name:"input",children:[(0,k.jsx)(s.Z,{value:"jack",children:"Jack"},"k0"),(0,k.jsx)(s.Z,{value:"asghar",children:"Asghar"},"k1"),(0,k.jsx)(s.Z,{value:"jolie",children:"Jolie"},"k2"),(0,k.jsx)(s.Z,{value:"kyle",children:"Kyle"},"k3"),(0,k.jsx)(s.Z,{value:"ali",children:"Ali"},"k4"),(0,k.jsxs)(p.Z,{title:"Group 1",children:[(0,k.jsx)(s.Z,{value:"michael",children:"Michael"},"k6"),(0,k.jsx)(s.Z,{value:"lucie",children:"Lucie"},"k7"),(0,k.jsx)(s.Z,{value:"maria",children:"Maria"},"k8"),(0,k.jsx)(s.Z,{value:"reza",children:"Reza"},"k9"),(0,k.jsx)(s.Z,{value:"mostafa",children:"Mostafa"},"k10")]},"k5")]})})})};O.displayName="SelectControlledValueDemo";var j=O,x=function(){var e=o.useState(!1),l=(0,b.Z)(e,2),t=l[0],n=l[1];return(0,k.jsx)(m.Z,{code:'import Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";;\nimport * as React from "react";\n\nconst Demo: React.FC = () => {\n  const [open, setOpen] = React.useState(false);\n  \n  return (\n    <React.Fragment>\n      <Select\n        open={open}\n        onOpen={() => void setOpen(true)}\n        onClose={() => void setOpen(false)}\n        fluid\n        placeholder="Placeholder"\n        name="input"\n      >\n        <SelectOption value="jack" key="k0">Jack</SelectOption>,\n        <SelectOption value="asghar" key="k1">Asghar</SelectOption>,\n        <SelectOption value="jolie" key="k2">Jolie</SelectOption>,\n        <SelectOption value="kyle" key="k3">Kyle</SelectOption>,\n        <SelectOption value="ali" key="k4">Ali</SelectOption>,\n        <SelectOptionGroup key="k5" title="Group 1">\n          <SelectOption value="michael" key="k6">\n            Michael\n          </SelectOption>\n          <SelectOption value="lucie" key="k7">\n            Lucie\n          </SelectOption>\n          <SelectOption value="maria" key="k8">\n            Maria\n          </SelectOption>\n          <SelectOption value="reza" key="k9">\n            Reza\n          </SelectOption>\n          <SelectOption value="mostafa" key="k10">\n            Mostafa\n          </SelectOption>\n        </SelectOptionGroup>\n      </Select>\n    </React.Fragment>\n  );\n};\n\nexport default Demo;',children:(0,k.jsx)(o.Fragment,{children:(0,k.jsxs)(h.Z,{open:t,onOpen:function(){n(!0)},onClose:function(){n(!1)},fluid:!0,placeholder:"Placeholder",name:"input",children:[(0,k.jsx)(s.Z,{value:"jack",children:"Jack"},"k0"),(0,k.jsx)(s.Z,{value:"asghar",children:"Asghar"},"k1"),(0,k.jsx)(s.Z,{value:"jolie",children:"Jolie"},"k2"),(0,k.jsx)(s.Z,{value:"kyle",children:"Kyle"},"k3"),(0,k.jsx)(s.Z,{value:"ali",children:"Ali"},"k4"),(0,k.jsxs)(p.Z,{title:"Group 1",children:[(0,k.jsx)(s.Z,{value:"michael",children:"Michael"},"k6"),(0,k.jsx)(s.Z,{value:"lucie",children:"Lucie"},"k7"),(0,k.jsx)(s.Z,{value:"maria",children:"Maria"},"k8"),(0,k.jsx)(s.Z,{value:"reza",children:"Reza"},"k9"),(0,k.jsx)(s.Z,{value:"mostafa",children:"Mostafa"},"k10")]},"k5")]})})})};x.displayName="SelectControlledOpenDemo";var g=x,Z=t(9008),C=t(4069),T=t(7210);function w(e,l){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);l&&(n=n.filter((function(l){return Object.getOwnPropertyDescriptor(e,l).enumerable}))),t.push.apply(t,n)}return t}function A(e){for(var l=1;l<arguments.length;l++){var t=null!=arguments[l]?arguments[l]:{};l%2?w(Object(t),!0).forEach((function(l){(0,n.Z)(e,l,t[l])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):w(Object(t)).forEach((function(l){Object.defineProperty(e,l,Object.getOwnPropertyDescriptor(t,l))}))}return e}var N={title:"Select",description:"Select component is used to select values from a list of options.",getLayout:function(){return function(e){return(0,a.kt)(c.Z,{mdxType:"WithSidebar"},e)}}},P={meta:N};function I(e){var l=e.components,t=(0,i.Z)(e,["components"]);return(0,a.kt)("wrapper",A(A(A({},P),t),{},{components:l,mdxType:"MDXLayout"}),(0,a.kt)(Z.default,{mdxType:"Head"},(0,T.aT)("".concat(N.title," | Sonnat Developer Tools, React Components & Resources")),(0,T.u2)(N.description),(0,T.ai)("".concat(C.z,"/docs/components/").concat(N.title)),(0,T.hL)([].concat((0,u.Z)(C.t),["select"]))),(0,a.kt)("h1",null,(0,a.kt)("span",null,N.title),(0,a.kt)(d.Z,{anchorId:"overview",mdxType:"AnchorButton"}),(0,a.kt)(r.Z,{href:"pages/docs/components/".concat(N.title,".mdx"),mdxType:"PageEditButton"})),(0,a.kt)("p",null,N.description),(0,a.kt)("p",null,"A dropdown menu for displaying choices. An elegant alternative to the native"," ",(0,a.kt)("inlineCode",null,"<select>")," element.",(0,a.kt)("br",null),"Utilizing"," ",(0,a.kt)("a",{href:"/docs/components/Radio",title:"Radio documentation"},"Radio")," ","is recommended when there are fewer total options (less than 5)."),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Simple Selects"),(0,a.kt)(d.Z,{anchorId:"simple-selects",mdxType:"AnchorButton"})),(0,a.kt)(y,{mdxType:"SelectSimpleDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Controlled Select Value"),(0,a.kt)(d.Z,{anchorId:"controlled-select-value",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",null,"value"),", and"," ",(0,a.kt)("inlineCode",null,"onChange")," properties to control the value of the select."),(0,a.kt)(j,{mdxType:"SelectControlledValueDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"Controlled Open State"),(0,a.kt)(d.Z,{anchorId:"controlled-open-state",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"You can use the ",(0,a.kt)("inlineCode",null,"open"),", ",(0,a.kt)("inlineCode",null,"onOpen"),", and ",(0,a.kt)("inlineCode",null,"onClose")," properties to control the open state of the select's menu."),(0,a.kt)(g,{mdxType:"SelectControlledOpenDemo"}),(0,a.kt)("h2",null,(0,a.kt)("span",null,"API"),(0,a.kt)(d.Z,{anchorId:"api",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"Learn more about the properties and the customization points."),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Usage"),(0,a.kt)(d.Z,{anchorId:"usage",mdxType:"AnchorButton"})),(0,a.kt)("pre",null,(0,a.kt)("code",A({parentName:"pre"},{className:"language-typescript"}),'// recommended\nimport Select, { SelectOption, SelectOptionGroup } from "@sonnat/ui/Select";\n\n//or\nimport { Select, SelectOption, SelectOptionGroup } from "@sonnat/ui";\n')),(0,a.kt)("h3",null,(0,a.kt)("span",null,"Properties"),(0,a.kt)(d.Z,{anchorId:"properties",mdxType:"AnchorButton"})),(0,a.kt)("p",null,"Note that the documentation avoids mentioning all the native props (there are a lot) in this section of the components."),(0,a.kt)("h4",null,(0,a.kt)("span",null,(0,a.kt)("mark",null,"Select")," Properties"),(0,a.kt)(d.Z,{anchorId:"select-properties",mdxType:"AnchorButton"})),(0,a.kt)("table",{cols:4},(0,a.kt)("caption",null,"Select Properties"),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"children"),(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The content of the component.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"className"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"name"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The name of the select.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"placeholder"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The ",(0,a.kt)("inlineCode",null,"placeholder")," property of the select.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,"string[] | string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The value of the select. Providing an empty string will Select no options.",(0,a.kt)("br",null),"If the value is an object it must have reference equality with the option in order to be selected. If the value is not an object, the string representation must match with the string representation of the option in order to be selected.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"defaultValue"),(0,a.kt)("td",null,"string[] | string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The default value. Use when the component is not controlled.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"helperText"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The helper text content.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"helperIcon"),(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The helper icon element placed before the helper text.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"leadingAdornment"),(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The leading adornment for this component. This can be used to add a prefix, an action, or an icon to the leading of your input.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"trailingAdornment"),(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The trailing adornment for this component. This can be used to add a suffix, an action, or an icon to the trailing of your input.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"searchPlaceholder"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The ",(0,a.kt)("inlineCode",null,"placeholder")," property of the search field.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"searchEmptyStatementText"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The empty statement text when search results are empty.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"size"),(0,a.kt)("td",null,'"large"',(0,a.kt)("br",null),'| "medium"',(0,a.kt)("br",null),'| "small"'),(0,a.kt)("td",null,'"medium"'),(0,a.kt)("td",null,"The size of the select.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"variant"),(0,a.kt)("td",null,'"filled"',(0,a.kt)("br",null),'| "outlined"'),(0,a.kt)("td",null,'"outlined"'),(0,a.kt)("td",null,"The variant of the select.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"rounded"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the select will be rounded.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the select will be disabled.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"focused"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the select will be focused.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"autoFocus"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the select will be focused on mount.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"required"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the select will be required.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"hasError"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the select will indicate invalid input.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"multiple"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the menu will be searchable.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"preventPageScrolling"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the menu will block the page's scrolling.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"searchable"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the menu will support multiple selections (",(0,a.kt)("inlineCode",null,"value")," must be an array).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"fluid"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the select will be fluid (max-width: 100%)")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"open"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the menu will be open.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"inputProps"),(0,a.kt)("td",null,"object"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The properties applied to the ",(0,a.kt)("inlineCode",null,"input")," element.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onOpen"),(0,a.kt)("td",null,"function"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The callback fires when the menu has opened.",(0,a.kt)("br",null),(0,a.kt)("em",null,(0,a.kt)("strong",null,"Signature:"))," ",(0,a.kt)("inlineCode",null,"function() => void"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onClose"),(0,a.kt)("td",null,"function"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The callback fires when the menu has closed.",(0,a.kt)("br",null),(0,a.kt)("em",null,(0,a.kt)("strong",null,"Signature:"))," ",(0,a.kt)("inlineCode",null,"function() => void"))),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onChange"),(0,a.kt)("td",null,"function"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The callback fires when the state has changed.",(0,a.kt)("br",null),(0,a.kt)("em",null,(0,a.kt)("strong",null,"Signature:"))," ",(0,a.kt)("inlineCode",null,"function(event: React.SyntheticEvent, value: string[] | string) => void")))),(0,a.kt)("tfoot",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colSpan:"4"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"The ",(0,a.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,a.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,a.kt)("h4",null,(0,a.kt)("span",null,(0,a.kt)("mark",null,"Select/Option")," Properties"),(0,a.kt)(d.Z,{anchorId:"select-option-properties",mdxType:"AnchorButton"})),(0,a.kt)("table",{cols:4},(0,a.kt)("caption",null,"Select/Option Properties"),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"children"),(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The content of the option.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"className"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"value"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The value of the option.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"label"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"If a label was provided, the select component will use it as the item's display in the menu. It is mandatory to use it when the"," ",(0,a.kt)("inlineCode",null,"children")," prop contains complex content (i.e. containing multiple elements).")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"disabled"),(0,a.kt)("td",null,"boolean"),(0,a.kt)("td",null,"false"),(0,a.kt)("td",null,"If ",(0,a.kt)("inlineCode",null,"true"),", the option will be disabled.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"onClick"),(0,a.kt)("td",null,"function"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The callback fires when the option has been clicked.",(0,a.kt)("br",null),(0,a.kt)("em",null,(0,a.kt)("strong",null,"Signature:"))," ",(0,a.kt)("inlineCode",null,"function(event: React.MouseEvent) => void")))),(0,a.kt)("tfoot",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colSpan:"4"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"The ",(0,a.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,a.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))),(0,a.kt)("h4",null,(0,a.kt)("span",null,(0,a.kt)("mark",null,"Select/OptionGroup")," Properties"),(0,a.kt)(d.Z,{anchorId:"select-optiongroup-properties",mdxType:"AnchorButton"})),(0,a.kt)("table",{cols:4},(0,a.kt)("caption",null,"Select/OptionGroup Properties"),(0,a.kt)("thead",null,(0,a.kt)("tr",null,(0,a.kt)("th",null,"Name"),(0,a.kt)("th",null,"Type"),(0,a.kt)("th",null,"Default"),(0,a.kt)("th",null,"Description"))),(0,a.kt)("tbody",null,(0,a.kt)("tr",null,(0,a.kt)("td",null,"children"),(0,a.kt)("td",null,"node"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The content of the group.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"className"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Append to the class names applied to the component so you can override or extend the styles.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"titleClassName"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"Append to the classNames applied to the title so you can override or extend the styles.")),(0,a.kt)("tr",null,(0,a.kt)("td",null,"title"),(0,a.kt)("td",null,"string"),(0,a.kt)("td",null,"-"),(0,a.kt)("td",null,"The title of the group."))),(0,a.kt)("tfoot",null,(0,a.kt)("tr",null,(0,a.kt)("td",{colSpan:"4"},(0,a.kt)("ul",null,(0,a.kt)("li",null,"The ",(0,a.kt)("inlineCode",null,"ref")," is forwarded to the root element."),(0,a.kt)("li",null,"Any other properties supplied will be provided to the root element.")))))))}I.isMDXComponent=!0},9538:function(e,l,t){(window.__NEXT_P=window.__NEXT_P||[]).push(["/docs/components/Select",function(){return t(3334)}])}},function(e){e.O(0,[2423,2981,4523,1411,5725,9774,2888,179],(function(){return l=9538,e(e.s=l);var l}));var l=e.O();_N_E=l}]);