(function(t){function e(e){for(var a,r,n=e[0],l=e[1],c=e[2],m=0,u=[];m<n.length;m++)r=n[m],Object.prototype.hasOwnProperty.call(s,r)&&s[r]&&u.push(s[r][0]),s[r]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(t[a]=l[a]);d&&d(e);while(u.length)u.shift()();return o.push.apply(o,c||[]),i()}function i(){for(var t,e=0;e<o.length;e++){for(var i=o[e],a=!0,n=1;n<i.length;n++){var l=i[n];0!==s[l]&&(a=!1)}a&&(o.splice(e--,1),t=r(r.s=i[0]))}return t}var a={},s={app:0},o=[];function r(e){if(a[e])return a[e].exports;var i=a[e]={i:e,l:!1,exports:{}};return t[e].call(i.exports,i,i.exports,r),i.l=!0,i.exports}r.m=t,r.c=a,r.d=function(t,e,i){r.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:i})},r.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},r.t=function(t,e){if(1&e&&(t=r(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var i=Object.create(null);if(r.r(i),Object.defineProperty(i,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)r.d(i,a,function(e){return t[e]}.bind(null,a));return i},r.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return r.d(e,"a",e),e},r.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},r.p="/";var n=window["webpackJsonp"]=window["webpackJsonp"]||[],l=n.push.bind(n);n.push=e,n=n.slice();for(var c=0;c<n.length;c++)e(n[c]);var d=l;o.push([0,"chunk-vendors"]),i()})({0:function(t,e,i){t.exports=i("56d7")},"4a12":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mt-4"},[i("div",{staticClass:"jumbotron"},[i("h1",{staticClass:"display-4 text-center"},[t._v("Bem vindo ao minha Lista!")]),i("p",{staticClass:"lead"},[t._v("Todas as informações são salvas em seu localstorage não utilizamos banco de dados particular.")]),i("hr",{staticClass:"my-4"}),i("p",[t._v("Clique em começar para adicionar suas listas de compras")]),i("a",{staticClass:"btn btn-primary btn-lg text-white ",attrs:{role:"button"},on:{click:t.redirectLista}},[t._v("Começar")])])])},s=[],o={name:"Home",methods:{redirectLista:function(){this.$router.push("/lista")}}},r=o,n=i("2877"),l=Object(n["a"])(r,a,s,!1,null,"bdc21e0a",null);e["a"]=l.exports},"56d7":function(t,e,i){"use strict";i.r(e),function(t){i("e260"),i("e6cf"),i("cca6"),i("a79d");var e=i("2b0e"),a=i("8c4f"),s=i("4a12"),o=i("9e80"),r=i("d616");e["a"].use(a["a"]),e["a"].config.productionTip=!1;var n=[{path:"/",component:s["a"]},{path:"/Lista",component:r["a"]},{path:"/detalhe/:id",component:o["a"]}],l=new a["a"]({mode:"history",base:t,routes:n});new e["a"]({el:"#app",router:l,render:function(t){return t("router-view")}})}.call(this,"/")},"5f70":function(t,e,i){"use strict";var a=i("dbad"),s=i.n(a);s.a},"98f1":function(t,e,i){"use strict";var a=i("bdd2"),s=i.n(a);s.a},"9e80":function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",[i("div",{staticClass:"container"},[i("button",{staticClass:"btn btn-primary btn-sm m-2",attrs:{type:"button"},on:{click:t.redirectLista}},[t._v("Voltar")]),i("div",{staticClass:" col-md-4 m-auto border p-2 text-center"},[i("div",{staticClass:"text-center"},[i("h5",[t._v("LISTA")]),i("hr"),i("b",[t._v("ID")]),t._v(" : "+t._s(t.lista.id)+" "),i("br"),i("b",[t._v("Nome")]),t._v(" : "+t._s(t.lista.nome)+" "),i("br"),i("b",[t._v("Status")]),t._v(" : "+t._s(t.lista.status)+" "),i("br")])]),i("div",{staticClass:"row border p-4 m-3"},[i("div",{staticClass:"col-md-12"},[t.acaoEditar?t._e():i("h5",{staticClass:"text-center"},[t._v("Novo item")]),t.acaoEditar?i("h5",{staticClass:"text-center"},[t._v("Editar item Código ("+t._s(this.item.id)+")")]):t._e(),i("hr")]),i("div",{staticClass:"form-group col-md-8"},[i("label",[t._v("Nome")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.nome,expression:"item.nome"}],staticClass:"form-control",domProps:{value:t.item.nome},on:{input:function(e){e.target.composing||t.$set(t.item,"nome",e.target.value)}}})]),i("div",{staticClass:"form-group col-md-2"},[i("label",[t._v("Quantidade")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.quantidade,expression:"item.quantidade"}],staticClass:"form-control",attrs:{step:"0"},domProps:{value:t.item.quantidade},on:{input:function(e){e.target.composing||t.$set(t.item,"quantidade",e.target.value)}}})]),i("div",{staticClass:"form-group col-md-2"},[i("label",[t._v("Preço")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.item.preco,expression:"item.preco"}],staticClass:"form-control",attrs:{step:"2"},domProps:{value:t.item.preco},on:{input:function(e){e.target.composing||t.$set(t.item,"preco",e.target.value)}}})]),i("div",{staticClass:"col-md-12 text-right"},[t.acaoEditar?t._e():i("button",{staticClass:"btn btn-primary btn-sm m-1",on:{click:t.saveItem}},[t._v("Salvar")]),t.acaoEditar?i("button",{staticClass:"btn btn-primary btn-sm m-1",on:{click:t.salvarEdicao}},[t._v("Salvar Edição ")]):t._e(),i("button",{staticClass:"btn btn-danger btn-sm m-1",on:{click:t.cancelarELimpar}},[t._v("Cancelar")])])]),i("div",{staticClass:"col-md-12",staticStyle:{overflow:"auto"}},[i("table",{staticClass:"table table-bordered"},[t._m(0),i("tbody",[t._l(t.items,(function(e,a){return i("tr",{key:e.id},[i("td",[t._v(t._s(++a))]),i("td",[t._v(t._s(e.id))]),i("td",[t._v(t._s(e.nome))]),i("td",[t._v(t._s(e.preco))]),i("td",[t._v(t._s(e.quantidade))]),i("td",[t._v(t._s(e.total.toFixed(2)))]),i("td",[i("ul",[i("li",[i("a",{staticClass:"btn btn-sm btn-primary text-white m-1",on:{click:function(i){return t.editarItem(e.id)}}},[t._v("Editar")])]),i("li",[i("a",{staticClass:"btn btn-sm btn-danger text-white",on:{click:function(i){return t.removeItem(e.id)}}},[t._v("Remover")])])])])])})),i("tr",[i("th",{attrs:{colspan:"5"}}),i("th",[t._v(t._s(t.total.toFixed(2)))]),i("th")])],2)])])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",[i("tr",{staticClass:"bg-light"},[i("th",{staticClass:"text-center",attrs:{colspan:"7"}},[t._v("ITEMS")])]),i("tr",[i("th",[t._v("#")]),i("th",[t._v("Codigo")]),i("th",[t._v("Nome")]),i("th",[t._v("Preço")]),i("th",[t._v("Quantidade")]),i("th",[t._v("Total")]),i("th",[t._v("Ação")])])])}],o=(i("4de4"),i("7db0"),i("b680"),i("acd8"),i("ac1f"),i("5319"),{name:"ListaDetalhe",data:function(){return{lista:{},items:[],item:{id:"",nome:"",quantidade:"",preco:"",total:""},acaoEditar:!1,total:0}},methods:{getLista:function(t){var e=JSON.parse(localStorage.getItem("listas"))||[],i=e.find((function(e){return e.id==t}));i?(this.lista=i,this.getItems()):this.$router.push("/")},saveItem:function(){if(""==this.item.nome||""==this.item.quantidade||this.item.quantidade<0||""==this.item.preco||this.item.preco<0)alert("campos Nome,Quantidade e Preço são obrigatorios");else{this.item.total=this.item.preco*this.item.quantidade,this.item.listaId=this.lista.id;var t=localStorage.getItem("idListaItem")>0?localStorage.getItem("idListaItem"):0;t++,localStorage.setItem("idListaItem",t),this.item.id=t;var e=JSON.parse(localStorage.getItem("items"))||[];e.push(this.item),localStorage.setItem("items",JSON.stringify(e)),this.getItems(this.lista.id),this.item={id:"",nome:"",quantidade:"",preco:"",total:""}}},redirectLista:function(){this.$router.push("/Lista")},getItems:function(t){var e,i=JSON.parse(localStorage.getItem("items"))||[];for(this.items=i.filter((function(e){return e.listaId==t})),this.total=0,e=0;e<this.items.length;e++)this.total+=parseFloat(this.items[e].total)},removeItem:function(t){this.items=this.items.filter((function(e){return e.id!=t})),localStorage.setItem("items",JSON.stringify(this.items)),this.getItems(this.lista.id)},editarItem:function(t){var e=this.items.find((function(e){return e.id==t}));""!=e.id?(this.item=Object.assign(e),this.acaoEditar=!0):alert("Não foi encontrado!")},salvarEdicao:function(){if(""==this.item.nome||""==this.item.quantidade||this.item.quantidade<1||""==this.item.preco||this.item.preco<1)alert("campos Nome,Quantidade e Preço são obrigatorios");else{this.items;var t=!1,e=0;for(e;e<this.items.length;e++)if(this.items[e].id==this.item.id){t=!0;break}0!=t?(this.items[e].nome=this.item.nome,this.items[e].quantidade=this.item.quantidade,this.items[e].preco=this.item.preco,this.items[e].total=this.item.preco*this.item.quantidade,localStorage.setItem("items",JSON.stringify(this.items)),this.item={id:"",nome:"",quantidade:"",preco:"",total:""},this.acaoEditar=!1,this.getItems(this.lista.id)):alert("Não foi possivel encontrar item da lista")}},cancelarELimpar:function(){this.item={id:"",nome:"",quantidade:"",preco:"",total:""},this.acaoEditar=!1}},watch:{"item.quantidade":function(t){this.item.quantidade=t.replace(/[^\d]+/g,"")},"item.preco":function(t){var e=t.replace(/\D/g,"");e=(e/100).toFixed(2)+"",e=e.replace(/(\d)(\d{3}),/g,"$2."),this.item.preco=e}},beforeMount:function(){this.getLista(this.$route.params.id),this.getItems(this.$route.params.id)}}),r=o,n=(i("5f70"),i("2877")),l=Object(n["a"])(r,a,s,!1,null,"224a802c",null);e["a"]=l.exports},bdd2:function(t,e,i){},d616:function(t,e,i){"use strict";var a=function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("div",{staticClass:"container mt-4"},[i("div",{staticClass:"col-md-6 m-auto border p-4"},[this.acaoEditar?t._e():i("h5",{staticClass:"text-center"},[t._v("Nova Lista")]),this.acaoEditar&&""!==this.lista.id?i("h5",{staticClass:"text-center"},[t._v("Editar Lista Código ("+t._s(this.lista.id)+")")]):t._e(),i("hr"),i("div",{staticClass:"form-group"},[i("label",[t._v("Nome da Lista")]),i("input",{directives:[{name:"model",rawName:"v-model",value:t.lista.nome,expression:"lista.nome"}],staticClass:"form-control",domProps:{value:t.lista.nome},on:{input:function(e){e.target.composing||t.$set(t.lista,"nome",e.target.value)}}})]),i("div",{staticClass:"text-right mt-4"},[t.acaoEditar?t._e():i("button",{staticClass:"btn btn-primary btn-sm m-2",attrs:{type:"button"},on:{click:t.saveLista}},[t._v("Salvar ")]),t.acaoEditar?i("button",{staticClass:"btn btn-primary btn-sm m-2",attrs:{type:"button"},on:{click:t.salvarEdicao}},[t._v("Alterar ")]):t._e(),i("button",{staticClass:"btn btn-danger btn-sm m-2",attrs:{type:"button"},on:{click:t.cancelarELimpar}},[t._v("Cancelar")])])]),i("div",{staticClass:"col-md-12",staticStyle:{overflow:"auto"}},[i("table",{staticClass:"table mt-4 table-bordered"},[t._m(0),i("tbody",t._l(t.listas,(function(e,a){return i("tr",{key:e.id},[i("td",{staticStyle:{width:"5px"}},[t._v(t._s(++a))]),i("td",{staticStyle:{width:"5px"}},[t._v(t._s(e.id))]),i("td",{staticStyle:{width:"200px"}},[t._v(t._s(e.nome))]),i("td",{staticStyle:{width:"50px"}},[i("ul",[i("li",[i("a",{staticClass:"btn btn-sm btn-primary text-white m-1",on:{click:function(i){return t.editarLista(e.id)}}},[t._v("Editar")])]),i("li",[i("a",{staticClass:"btn btn-sm btn-danger text-white m-1",on:{click:function(i){return t.removeLista(e.id)}}},[t._v("Remover")])]),i("li",[i("a",{staticClass:"btn btn-sm btn-info text-white m-1",on:{click:function(i){return t.redirectItems(e.id)}}},[t._v(" Items")])])])])])})),0)])])])},s=[function(){var t=this,e=t.$createElement,i=t._self._c||e;return i("thead",{staticClass:"text-left"},[i("tr",[i("th",{staticClass:"text-center bg-light",attrs:{colspan:"5"}},[t._v("LISTAS")])]),i("tr",[i("th",[t._v("#")]),i("th",[t._v("Código")]),i("th",[t._v("Nome")]),i("th",[t._v("Ação")])])])}],o=(i("4de4"),i("7db0"),{name:"Lista",data:function(){return{listas:[],lista:{id:"",nome:""},acaoEditar:!1}},methods:{saveLista:function(){if(""!=this.lista.nome){var t=this.listas,e=localStorage.getItem("idLista")>0?localStorage.getItem("idLista"):0;e++,this.lista.id=e,localStorage.setItem("idLista",e),t.push(this.lista),localStorage.setItem("listas",JSON.stringify(t)),this.lista={id:"",nome:""},this.getListas()}else alert("O nome da lista  é obrigatorio")},getListas:function(){this.listas=JSON.parse(localStorage.getItem("listas"))||[]},removeLista:function(t){this.listas=this.listas.filter((function(e){return e.id!=t})),localStorage.setItem("listas",JSON.stringify(this.listas));var e=JSON.parse(localStorage.getItem("items"))||[],i=e.filter((function(e){return console.log(e.listaId!=t),e.listaId!=t}));localStorage.setItem("items",JSON.stringify(i))},editarLista:function(t){var e=this.listas.find((function(e){return e.id==t}));""!=e.id?(this.lista=Object.assign(e),this.acaoEditar=!0):alert("Não foi encontrado!")},salvarEdicao:function(){if(""!=this.lista.nome&&""!=this.lista.status){this.listas;var t=!1,e=0;for(e;e<this.listas.length;e++)if(this.listas[e].id==this.lista.id){t=!0;break}0!=t?(this.listas[e].nome=this.lista.nome,this.listas[e].status=this.lista.status,localStorage.setItem("listas",JSON.stringify(this.listas)),this.lista={id:"",nome:""},this.acaoEditar=!1,this.getListas()):alert("Não foi possivel encontrar item da lista")}else alert("O nome da lista e o status é obrigatorio")},cancelarELimpar:function(){this.lista={id:"",nome:""},this.acaoEditar=!1},redirectItems:function(t){this.$router.push("detalhe/".concat(t))}},beforeMount:function(){this.getListas()}}),r=o,n=(i("98f1"),i("2877")),l=Object(n["a"])(r,a,s,!1,null,"e7dfb068",null);e["a"]=l.exports},dbad:function(t,e,i){}});
//# sourceMappingURL=app.8ab3e369.js.map