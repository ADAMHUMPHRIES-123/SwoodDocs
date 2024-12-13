import{r as n,h as S,j as e,P as x,S as r,T as h,i as f}from"./index-D64WPYac.js";import{B as o}from"./BasicTable-DiCwKtCP.js";const O=[{name:"= {equal to}",description:"Checks if two elements are equal. In assignments, assigns the value of the right element to the left"},{name:"> {greater than}",description:"Checks if one element is greater than the other"},{name:"< {less than}",description:"Checks if one element is less than the other"},{name:">= {greater than or equal to}",description:"Checks if one element is greater than or equal to the other"},{name:"<= {less than or equal to}",description:"Checks if one element is less than or equal to the other"},{name:"/= or <> {not equal to}",description:"Checks if two elements are not equal"},{name:"+ {plus}",description:"Adds two elements together"},{name:"- {minus}",description:"Subtracts one element from another"},{name:"* {multiply}",description:"Multiplies two elements"},{name:"/ {divide}",description:"Divides one element by another"},{name:"^ {exponentiation}",description:"Raises a number to the power of another",example:'<span class="CP">8^2</span> represents <span class="value">8²</span>'},{name:"SQR(number) {square root}",description:"Returns the square root of a number",example:'<span class="CP">SQR(64)</span> returns <span class="value">8</span> because <span class="value">8² = 64</span>'}],R=[{name:"AND {conjunction}",description:"Returns true if both conditions are true",example:'<span class="CP">a AND b</span> is <span class="value">TRUE</span> if both a and b are <span class="value">TRUE</span>'},{name:"OR {disjunction}",description:"Returns true if at least one of the conditions is true",example:'<span class="CP">a OR b</span> is <span class="value">TRUE</span> if either a or b is <span class="value">TRUE</span>'},{name:"NOT(boolean) {negation}",description:"Returns the opposite of the boolean value",example:'<span class="CP">NOT(a)</span> is <span class="value">TRUE</span> if a is <span class="value">FALSE</span>'},{name:"NAND {not-and}",example:'<span class="CP">L = NOT(a AND b)</span>'},{name:"NOR {not-or}",example:'<span class="CP">L = NOT(a OR b)</span>'},{name:"XOR {exclusive or}",example:'<span class="CP">L = (a AND NOT(b)) OR (NOT(a) AND b)</span>'},{name:"XNOR {exclusive not-or}",example:'<span class="CP">(a AND b) OR (NOT(a) AND NOT(b))</span>'},{name:"TRUE",description:"Always returns true"},{name:"FALSE",description:"Always returns false"}],g=[{name:"STR(number)",description:"Converts a number into a string",example:'<span class="CP">STR(3)</span> returns <span class="value">3</span>'},{name:"VAL(text)",description:"Converts the numeric part of a string into a number",example:'<span class="CP">VAL("1615")</span> returns <span class="value">1615</span>'},{name:"LEN(text)",description:"Returns the number of characters in a string, including spaces",example:'<span class="CP">LEN("SolidWorks SWOOD")</span> returns <span class="value">16</span>'},{name:"TRIM(text)",description:"Removes extra spaces, keeping only single spaces between words",example:'<span class="CP">TRIM("  SolidWorks SWOOD  ")</span> returns <span class="value">SolidWorks SWOOD</span>'},{name:"MID(text, start, [length])",description:"Returns a substring starting at the specified position with the specified length",example:'<span class="CP">MID("SolidWorks SWOOD", 12, 2)</span> returns <span class="value">SW</span>'},{name:"LEFT(text, length)",description:"Returns the leftmost part of a string with the specified length",example:'<span class="CP">LEFT("SolidWorks SWOOD", 3)</span> returns <span class="value">Sol</span>'},{name:"RIGHT(text, length)",description:"Returns the rightmost part of a string with the specified length",example:'<span class="CP">RIGHT("SolidWorks SWOOD", 3)</span> returns <span class="value">OOD</span>'},{name:"INSTR([start], text, search)",description:"Returns the position of the search string within a text, starting from the left",example:'<span class="CP">INSTR(7, "SolidWorks SWOOD", "W")</span> returns <span class="value">13</span>'},{name:"INSTRREV(text, search, [start])",description:"Returns the position of the search string within a text, starting from the right",example:'<span class="CP">INSTRREV("SolidWorks SWOOD", "W", 12)</span> returns <span class="value">6</span>'},{name:"REPLACE(text, search, replacement, [start], [count])",description:"Replaces occurrences of the search string with the replacement string",example:'<span class="CP">REPLACE("SOLIDWORKS SWOOD", "O", "A", 11, 1)</span> returns <span class="value">SOLIDWORKS SWAOD</span>'},{name:"CONTAINS",description:"Checks if the string contains another string",example:'<span class="CP">SolidWorks SWOOD" CONTAINS "OO</span> returns <span class="value">TRUE</span>'},{name:"STARTSWITH",description:"Checks if the string starts with the specified text",example:'<span class="CP">SolidWorks SWOOD" STARTSWITH "So</span> returns <span class="value">TRUE</span>'},{name:"ENDSWITH",description:"Checks if the string ends with the specified text",example:'<span class="CP">SolidWorks SWOOD" ENDSWITH "OD</span> returns <span class="value">TRUE</span>'},{name:"UCASE(text)",description:"Converts the string to uppercase",example:'<span class="CP">UCASE("SolidWorks SWOOD")</span> returns <span class="value">SOLIDWORKS SWOOD</span>'}],A=[{name:"MSG",description:"Displays a message in test mode or a warning in the FeatureManager",example:'MSG = "Message"'},{name:"VAR.MSG",description:"Displays a message associated with a parameter",example:'VAR.MSG = "Message"'},{name:"VALIDE",description:"Shows an error if set to FALSE, both in test mode and in the FeatureManager",example:"VALIDE = FALSE"},{name:"VAR.VALIDATE",description:"Displays an error related to a specific parameter",example:"VAR.VALIDE = FALSE"},{name:"EXPOSE",description:"Controls whether a parameter is exposed",example:"VAR.EXPOSE = FALSE"},{name:"READONLY",description:"Sets a parameter as read-only",example:"VAR.READONLY = TRUE"},{name:"POSSIBLEVALUES",description:"Defines possible values for a parameter, with optional aliases",example:'VAR.POSSIBLEVALUES = "a|alpha;b|bravo;c|charlie"'},{name:"POSSIBLEVALUESFILTER",description:"Reorganizes or filters possible values of a parameter",example:'VAR.POSSIBLEVALUESFILTER = "2;3"'},{name:"DRIVING",description:"Controls whether a SolidWorks link drives a parameter",example:"VAR.DRIVING = FALSE"}],b=[{name:"STRING",description:"Text variable, usable with String parameters",example:"DIM A AS STRING"},{name:"DOUBLE",description:"Real number variable, usable with the Distance, Angle, Integer and Decimal parameters",example:"DIM A AS DOUBLE"},{name:"BOOLEAN",description:"Boolean variable, usable with Boolean parameters",example:"DIM A AS BOOLEAN"}],l=[{header:"Name",property:"name",width:"20%"},{header:"Description",property:"description",width:"40%"},{header:"Example",property:"example",width:"40%"}],p=(s,c)=>s.map(a=>{var t,i;return(t=a.name)!=null&&t.toLowerCase().includes(c.toLowerCase())||(i=a.description)!=null&&i.toLowerCase().includes(c.toLowerCase())?a:null}).filter(a=>a!==null),D=()=>{const[s,c]=n.useState(""),a=n.useCallback(S(c,300),[]),t=n.useMemo(()=>p(O,s),[s]),i=n.useMemo(()=>p(R,s),[s]),m=n.useMemo(()=>p(g,s),[s]),d=n.useMemo(()=>p(A,s),[s]),u=n.useMemo(()=>p(b,s),[s]);return e.jsxs(e.Fragment,{children:[e.jsx(x,{title:"List of Swood script parameters"}),e.jsx("nav",{children:e.jsxs("ul",{children:[e.jsx("li",{children:e.jsx("a",{href:"#Search",children:"Search"})}),e.jsx("li",{children:e.jsx("a",{href:"#ArithmeticalFunctions",children:"Arithmetical functions"})}),e.jsx("li",{children:e.jsx("a",{href:"#BooleanFunctions",children:"Boolean functions"})}),e.jsx("li",{children:e.jsx("a",{href:"#TextFunctions",children:"Text functions"})}),e.jsx("li",{children:e.jsx("a",{href:"#SwoodFunctions",children:"Swood functions"})}),e.jsx("li",{children:e.jsx("a",{href:"#ScriptVariables",children:"Script Variables"})})]})}),e.jsxs(r,{id:"Search",title:"Search",children:[e.jsx(h,{children:"Use the search box below to filter all tables by typing keywords found in the Name or Description columns."}),e.jsx("br",{}),e.jsx(f,{setFilter:a})]}),t.length===0&&i.length===0&&m.length===0&&d.length===0&&u.length===0&&e.jsx(h,{color:"textDisabled",children:"No matches found."}),t.length>0&&e.jsx(r,{id:"ArithmeticalFunctions",title:"Arithmetical functions",children:e.jsx(o,{columns:l,data:t})}),i.length>0&&e.jsx(r,{id:"BooleanFunctions",title:"Boolean functions",children:e.jsx(o,{columns:l,data:i})}),m.length>0&&e.jsx(r,{id:"TextFunctions",title:"Text functions",children:e.jsx(o,{columns:l,data:m})}),d.length>0&&e.jsx(r,{id:"SwoodFunctions",title:"Swood functions",children:e.jsx(o,{columns:l,data:d})}),u.length>0&&e.jsxs(r,{id:"ScriptVariables",title:"Script Variables",children:[e.jsx(h,{children:"It is possible to define variables that are only used in the script, for example for calculations or intermediate steps. The variable declaration is written as follows:"}),e.jsxs(h,{children:["DIM ",e.jsx("span",{className:"highlight",children:"(variable name)"})," AS ",e.jsx("span",{className:"highlight",children:"(variable type)"})]}),e.jsx(o,{columns:l,data:u})]})]})};export{D as default};
