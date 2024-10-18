"use strict";(self.webpackChunkdocs_project_maker_fr=self.webpackChunkdocs_project_maker_fr||[]).push([[7914],{8271:(e,s,n)=>{n.r(s),n.d(s,{assets:()=>o,contentTitle:()=>d,default:()=>h,frontMatter:()=>l,metadata:()=>t,toc:()=>a});var r=n(4848),i=n(8453);const l={sidebar_position:1},d="/users",t={id:"api/endpoints/users",title:"/users",description:"Overview",source:"@site/docs/api/endpoints/users.md",sourceDirName:"api/endpoints",slug:"/api/endpoints/users",permalink:"/docs/docs/api/endpoints/users",draft:!1,unlisted:!1,tags:[],version:"current",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"apiSidebar",previous:{title:"authentification",permalink:"/docs/docs/api/authentification"},next:{title:"/users/projects",permalink:"/docs/docs/api/endpoints/projects"}},o={},a=[{value:"Overview",id:"overview",level:2},{value:"Endpoints",id:"endpoints",level:2},{value:"<code>GET /users/</code>",id:"get-users",level:3},{value:"Request",id:"request",level:4},{value:"Query Parameters",id:"query-parameters",level:4},{value:"Response",id:"response",level:4},{value:"<code>POST /users</code>",id:"post-users",level:3},{value:"Request",id:"request-1",level:4},{value:"Body Parameters",id:"body-parameters",level:4},{value:"Response",id:"response-1",level:4},{value:"<code>GET /users/:id</code>",id:"get-usersid",level:3},{value:"Request",id:"request-2",level:4},{value:"Path Parameters",id:"path-parameters",level:4},{value:"Response",id:"response-2",level:4},{value:"<code>PUT /users/:id</code>",id:"put-usersid",level:3},{value:"Request",id:"request-3",level:4},{value:"Path Parameters",id:"path-parameters-1",level:4},{value:"Body Parameters",id:"body-parameters-1",level:4},{value:"Response",id:"response-3",level:4},{value:"<code>DELETE /users/:id</code>",id:"delete-usersid",level:3},{value:"Request",id:"request-4",level:4},{value:"Path Parameters",id:"path-parameters-2",level:4},{value:"Response",id:"response-4",level:4},{value:"Error Codes",id:"error-codes",level:2},{value:"Examples",id:"examples",level:2},{value:"Example Request: GET /users",id:"example-request-get-users",level:3},{value:"Example Response: GET /users",id:"example-response-get-users",level:3},{value:"FAQ",id:"faq",level:2},{value:"How do I authenticate requests?",id:"how-do-i-authenticate-requests",level:3},{value:"What is the rate limit for the API?",id:"what-is-the-rate-limit-for-the-api",level:3}];function c(e){const s={code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",header:"header",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.R)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(s.header,{children:(0,r.jsx)(s.h1,{id:"users",children:"/users"})}),"\n",(0,r.jsx)(s.h2,{id:"overview",children:"Overview"}),"\n",(0,r.jsxs)(s.p,{children:["The ",(0,r.jsx)(s.code,{children:"/users"})," endpoint allows you to manage user data, including creating new users, retrieving user information, updating user details, and deleting users."]}),"\n",(0,r.jsx)(s.h2,{id:"endpoints",children:"Endpoints"}),"\n",(0,r.jsx)(s.h3,{id:"get-users",children:(0,r.jsx)(s.code,{children:"GET /users/"})}),"\n",(0,r.jsx)(s.p,{children:"Retrieve a list of users."}),"\n",(0,r.jsx)(s.h4,{id:"request",children:"Request"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Method:"})," GET"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"URL:"})," ",(0,r.jsx)(s.code,{children:"/users"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Headers:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Authorization: Bearer <token>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"query-parameters",children:"Query Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"page"})," (optional): Page number for pagination."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"limit"})," (optional): Number of users to return per page."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"response",children:"Response"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Status:"})," 200 OK"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "users": [\r\n    {\r\n      "id": 1,\r\n      "name": "John Doe",\r\n      "email": "john.doe@example.com"\r\n    },\r\n    {\r\n      "id": 2,\r\n      "name": "Jane Smith",\r\n      "email": "jane.smith@example.com"\r\n    }\r\n  ],\r\n  "page": 1,\r\n  "totalPages": 10\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"post-users",children:(0,r.jsx)(s.code,{children:"POST /users"})}),"\n",(0,r.jsx)(s.p,{children:"Create a new user."}),"\n",(0,r.jsx)(s.h4,{id:"request-1",children:"Request"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Method:"})," POST"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"URL:"})," ",(0,r.jsx)(s.code,{children:"/users"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Headers:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Content-Type: application/json"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Authorization: Bearer <token>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"body-parameters",children:"Body Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"name"})," (required): The name of the user."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"email"})," (required): The email of the user."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"password"})," (required): The password for the user."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"response-1",children:"Response"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Status:"})," 201 Created"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "id": 3,\r\n  "name": "Alice Johnson",\r\n  "email": "alice.johnson@example.com"\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"get-usersid",children:(0,r.jsx)(s.code,{children:"GET /users/:id"})}),"\n",(0,r.jsx)(s.p,{children:"Retrieve information about a specific user."}),"\n",(0,r.jsx)(s.h4,{id:"request-2",children:"Request"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Method:"})," GET"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"URL:"})," ",(0,r.jsx)(s.code,{children:"/users/:id"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Headers:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Authorization: Bearer <token>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"path-parameters",children:"Path Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"id"}),": The ID of the user."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"response-2",children:"Response"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Status:"})," 200 OK"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "id": 1,\r\n  "name": "John Doe",\r\n  "email": "john.doe@example.com"\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"put-usersid",children:(0,r.jsx)(s.code,{children:"PUT /users/:id"})}),"\n",(0,r.jsx)(s.p,{children:"Update information for a specific user."}),"\n",(0,r.jsx)(s.h4,{id:"request-3",children:"Request"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Method:"})," PUT"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"URL:"})," ",(0,r.jsx)(s.code,{children:"/users/:id"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Headers:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Content-Type: application/json"})}),"\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Authorization: Bearer <token>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"path-parameters-1",children:"Path Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"id"}),": The ID of the user."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"body-parameters-1",children:"Body Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"name"})," (optional): The updated name of the user."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"email"})," (optional): The updated email of the user."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"response-3",children:"Response"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Status:"})," 200 OK"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Body:"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "id": 1,\r\n  "name": "John Doe",\r\n  "email": "john.doe@example.com"\r\n}\n'})}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h3,{id:"delete-usersid",children:(0,r.jsx)(s.code,{children:"DELETE /users/:id"})}),"\n",(0,r.jsx)(s.p,{children:"Delete a specific user."}),"\n",(0,r.jsx)(s.h4,{id:"request-4",children:"Request"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Method:"})," DELETE"]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"URL:"})," ",(0,r.jsx)(s.code,{children:"/users/:id"})]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Headers:"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsx)(s.li,{children:(0,r.jsx)(s.code,{children:"Authorization: Bearer <token>"})}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"path-parameters-2",children:"Path Parameters"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"id"}),": The ID of the user."]}),"\n"]}),"\n",(0,r.jsx)(s.h4,{id:"response-4",children:"Response"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.strong,{children:"Status:"})," 204 No Content"]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"error-codes",children:"Error Codes"}),"\n",(0,r.jsxs)(s.ul,{children:["\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"400 Bad Request"}),": The request was invalid or cannot be otherwise served."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"401 Unauthorized"}),": Authentication is required and has failed or has not yet been provided."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"404 Not Found"}),": The requested resource could not be found."]}),"\n",(0,r.jsxs)(s.li,{children:[(0,r.jsx)(s.code,{children:"500 Internal Server Error"}),": An error occurred on the server."]}),"\n"]}),"\n",(0,r.jsx)(s.h2,{id:"examples",children:"Examples"}),"\n",(0,r.jsx)(s.h3,{id:"example-request-get-users",children:"Example Request: GET /users"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'curl -X GET "https://api.example.com/users" -H "Authorization: Bearer <token>"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"example-response-get-users",children:"Example Response: GET /users"}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-json",children:'{\r\n  "users": [\r\n    {\r\n      "id": 1,\r\n      "name": "John Doe",\r\n      "email": "john.doe@example.com"\r\n    },\r\n    {\r\n      "id": 2,\r\n      "name": "Jane Smith",\r\n      "email": "jane.smith@example.com"\r\n    }\r\n  ],\r\n  "page": 1,\r\n  "totalPages": 10\r\n}\n'})}),"\n",(0,r.jsx)(s.h2,{id:"faq",children:"FAQ"}),"\n",(0,r.jsx)(s.h3,{id:"how-do-i-authenticate-requests",children:"How do I authenticate requests?"}),"\n",(0,r.jsxs)(s.p,{children:["All requests must include the ",(0,r.jsx)(s.code,{children:"Authorization"})," header with a valid token. For example:"]}),"\n",(0,r.jsx)(s.pre,{children:(0,r.jsx)(s.code,{className:"language-bash",children:'-H "Authorization: Bearer <token>"\n'})}),"\n",(0,r.jsx)(s.h3,{id:"what-is-the-rate-limit-for-the-api",children:"What is the rate limit for the API?"}),"\n",(0,r.jsx)(s.p,{children:"The API rate limit is 1000 requests per hour."})]})}function h(e={}){const{wrapper:s}={...(0,i.R)(),...e.components};return s?(0,r.jsx)(s,{...e,children:(0,r.jsx)(c,{...e})}):c(e)}},8453:(e,s,n)=>{n.d(s,{R:()=>d,x:()=>t});var r=n(6540);const i={},l=r.createContext(i);function d(e){const s=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function t(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:d(e.components),r.createElement(l.Provider,{value:s},e.children)}}}]);