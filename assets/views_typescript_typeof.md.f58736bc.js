import{_ as s,c as n,o as a,O as p}from"./chunks/framework.5117a415.js";const _=JSON.parse('{"title":"","description":"","frontmatter":{},"headers":[],"relativePath":"views/typescript/typeof.md","filePath":"views/typescript/typeof.md"}'),l={name:"views/typescript/typeof.md"},o=p(`<div class="language-typescript"><button title="Copy Code" class="copy"></button><span class="lang">typescript</span><pre class="shiki material-theme-palenight"><code><span class="line"><span style="color:#676E95;font-style:italic;">// typeof 的作用是把「值空间」的数据转换成「类型空间」的数据。</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">const</span><span style="color:#A6ACCD;"> MARKETING_TYPE </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">{</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ISV</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ISV_FOR_MERCHANT</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">ISV_SELF</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">ISV_SELF</span><span style="color:#89DDFF;">&#39;</span><span style="color:#89DDFF;">,</span></span>
<span class="line"><span style="color:#A6ACCD;">  </span><span style="color:#F07178;">MERCHANT</span><span style="color:#89DDFF;">:</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">&#39;</span><span style="color:#C3E88D;">MERCHANT_SELF</span><span style="color:#89DDFF;">&#39;</span></span>
<span class="line"><span style="color:#89DDFF;">}</span></span>
<span class="line"></span>
<span class="line"><span style="color:#C792EA;">type</span><span style="color:#A6ACCD;"> </span><span style="color:#FFCB6B;">MarketingType</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">=</span><span style="color:#A6ACCD;"> </span><span style="color:#89DDFF;">typeof</span><span style="color:#A6ACCD;"> MARKETING_TYPE</span></span>
<span class="line"></span>
<span class="line"><span style="color:#676E95;font-style:italic;">/**</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * type MarketingType = {</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   ISV: string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   ISV_SELF: string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> *   MERCHANT: string</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> * }</span></span>
<span class="line"><span style="color:#676E95;font-style:italic;"> */</span></span></code></pre></div>`,1),t=[o];function e(c,r,y,i,D,F){return a(),n("div",null,t)}const A=s(l,[["render",e]]);export{_ as __pageData,A as default};
