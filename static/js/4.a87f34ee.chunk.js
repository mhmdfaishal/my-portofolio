(this["webpackJsonpreact-tailwindcss-portfolio"]=this["webpackJsonpreact-tailwindcss-portfolio"]||[]).push([[4],{123:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));var a=r(11),c=r(1),s=r(2),n=Object(c.createContext)(),i=function(e){var t=Object(c.useState)(""),r=Object(a.a)(t,2),i=r[0],l=r[1],d=Object(c.useState)(""),o=Object(a.a)(d,2),m=o[0],j=o[1];return Object(s.jsx)(n.Provider,{value:{searchProject:i,setSearchProject:l,selectProject:m,setSelectProject:j},children:e.children})}},124:function(e,t,r){"use strict";var a=r(11),c=r(1),s=r(16),n=r(117),i=r(20),l=r(2),d=function(e){var t=e.id,r=e.title,a=e.category,c=e.image;e.techStack;return Object(l.jsx)(n.a.div,{initial:{opacity:0,y:-180},animate:{opacity:1,y:0},transition:{ease:"easeInOut",duration:.7,delay:.2},children:Object(l.jsx)(i.b,{to:"/projects/"+t,"aria-label":"Single Project",children:Object(l.jsxs)("div",{className:"rounded-xl shadow-lg  h-400 hover:shadow-xl hover:scale-105 transform transition duration-300 ease-in-out mb-10 sm:mb-0 bg-secondary-light dark:bg-ternary-dark-glass",children:[Object(l.jsx)("div",{children:Object(l.jsx)("img",{src:c,className:"rounded-t-xl border-none h-300 w-full",alt:"Single Project"})}),Object(l.jsxs)("div",{className:"text-center px-4 py-6",children:[Object(l.jsx)("p",{className:"font-general-medium text-lg md:text-xl text-ternary-dark dark:text-ternary-light mb-2",children:r}),Object(l.jsx)("span",{className:"text-lg text-ternary-dark dark:text-ternary-light",children:a})]})]})})})},o=["All","PHP","Javascript","Golang","TypeScript"],m=function(e){var t=e.setSelectProject;return Object(l.jsx)("select",{onChange:function(e){t(e.target.value)},className:"font-general-medium  px-4 sm:px-6 py-2 border dark:border-secondary-dark rounded-lg text-sm sm:text-md dark:font-medium bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",children:o.map((function(e){return Object(l.jsx)("option",{className:"text-normal sm:text-md",children:e},e)}))})};t.a=function(e){var t=e.projects,r=Object(c.useState)(""),n=Object(a.a)(r,2),i=n[0],o=n[1],j=Object(c.useState)(""),x=Object(a.a)(j,2),u=x[0],b=x[1],h=t.filter((function(e){return e.techStack.some((function(e){return e.text.toLowerCase().includes(i.toLowerCase())}))})),g=t.filter((function(e){return e.title.toLowerCase().includes(u.toLowerCase())||""===u?e:""}));return Object(l.jsxs)("section",{className:"py-5 sm:py-10 mt-5 sm:mt-10",children:[Object(l.jsx)("div",{className:"text-center",children:Object(l.jsx)("p",{className:"font-general-medium text-2xl sm:text-4xl mb-1 text-ternary-dark dark:text-ternary-light",children:"Projects Portfolio"})}),Object(l.jsxs)("div",{className:"mt-10 sm:mt-16",children:[Object(l.jsx)("h3",{className:"font-general-regular  text-center text-secondary-dark dark:text-ternary-light text-md sm:text-xl mb-3 ",children:"Search projects by title or filter by tech stack"}),Object(l.jsxs)("div",{className:" flex justify-between border-b border-primary-light dark:border-secondary-dark pb-3 gap-3 ",children:[Object(l.jsxs)("div",{className:"flex justify-between gap-2",children:[Object(l.jsx)("span",{className:" hidden sm:block bg-primary-light dark:bg-ternary-dark p-2.5 shadow-sm rounded-xl cursor-pointer ",children:Object(l.jsx)(s.l,{className:"text-ternary-dark dark:text-ternary-light w-5 h-5"})}),Object(l.jsx)("input",{onChange:function(e){b(e.target.value)},className:"font-general-medium  pl-3 pr-1 sm:px-4 py-2 border  border-gray-200 dark:border-secondary-dark rounded-lg text-sm sm:text-md bg-secondary-light dark:bg-ternary-dark text-primary-dark dark:text-ternary-light ",id:"name",name:"name",type:"search",required:"",placeholder:"Search Projects","aria-label":"Name"})]}),Object(l.jsx)(m,{setSelectProject:o})]})]}),Object(l.jsx)("div",{className:"grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 mt-6 sm:gap-10",children:i?h.map((function(e){var t;return Object(l.jsx)(d,{title:e.title,category:e.category,image:null===(t=e.image)||void 0===t?void 0:t.url,techStack:e.techStack},e.id)})):u?g.map((function(e){var t;return Object(l.jsx)(d,{title:e.title,category:e.category,image:null===(t=e.image)||void 0===t?void 0:t.url,techStack:e.techStack},e.id)})):t.map((function(e){var t;return Object(l.jsx)(d,{title:e.title,category:e.category,image:null===(t=e.image)||void 0===t?void 0:t.url,techStack:e.techStack,id:e.id},e.id)}))})]})}},128:function(e,t,r){"use strict";r.r(t);var a=r(124),c=r(123),s=r(2);t.default=function(e){var t=e.projects;return Object(s.jsx)(c.a,{children:Object(s.jsx)("div",{className:"container mx-auto",children:Object(s.jsx)(a.a,{projects:t})})})}}}]);
//# sourceMappingURL=4.a87f34ee.chunk.js.map