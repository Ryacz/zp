"use strict";(self["webpackChunkxx_shopping"]=self["webpackChunkxx_shopping"]||[]).push([[8],{8:function(t,s,e){e.r(s),e.d(s,{default:function(){return l}});e(7658);var r=function(){var t=this,s=t._self._c;return s("div",{staticClass:"search"},[s("van-nav-bar",{attrs:{fixed:"",title:"商品列表","left-arrow":""},on:{"click-left":function(s){return t.$router.go(-1)}}}),s("van-search",{attrs:{readonly:"",shape:"round",background:"#ffffff",value:t.querySearch||"搜索商品","show-action":""},on:{click:function(s){return t.$router.push("/search")}},scopedSlots:t._u([{key:"action",fn:function(){return[s("van-icon",{staticClass:"tool",attrs:{name:"apps-o"}})]},proxy:!0}])}),t._m(0),s("div",{staticClass:"goods-list"},t._l(t.proList,(function(t){return s("GoodsItem",{key:t.goods_id,attrs:{item:t}})})),1)],1)},a=[function(){var t=this,s=t._self._c;return s("div",{staticClass:"sort-btns"},[s("div",{staticClass:"sort-item"},[t._v("综合")]),s("div",{staticClass:"sort-item"},[t._v("销量")]),s("div",{staticClass:"sort-item"},[t._v("价格 ")])])}],o=e(9716),n=e(1787),i={name:"SearchIndex",components:{GoodsItem:o.Z},computed:{querySearch(){return this.$route.query.search}},data(){return{page:1,proList:[]}},async created(){const{data:{list:t}}=await(0,n.Fs)({categoryId:this.$route.query.categoryId,goodsName:this.querySearch,page:this.page});this.proList=t.data}},c=i,u=e(1001),d=(0,u.Z)(c,r,a,!1,null,"dde3c886",null),l=d.exports},1787:function(t,s,e){e.d(s,{Aw:function(){return o},Fs:function(){return a},U3:function(){return n}});var r=e(4471);const a=t=>{const{categoryId:s,goodsName:e,page:a}=t;return r.Z.get("/goods/list",{params:{categoryId:s,goodsName:e,page:a}})},o=t=>r.Z.get("/goods/detail",{params:{goodsId:t}}),n=(t,s)=>r.Z.get("/comment/listRows",{params:{goodsId:t,limit:s}})}}]);
//# sourceMappingURL=8.1ebed55e.js.map