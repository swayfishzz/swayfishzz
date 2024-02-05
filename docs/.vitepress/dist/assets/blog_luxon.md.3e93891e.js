import{_ as s,o as a,c as o,Q as n}from"./chunks/framework.8048b864.js";const F=JSON.parse('{"title":"luxon","description":"","frontmatter":{},"headers":[],"relativePath":"blog/luxon.md","filePath":"blog/luxon.md"}'),l={name:"blog/luxon.md"},p=n(`<h1 id="luxon" tabindex="-1">luxon <a class="header-anchor" href="#luxon" aria-label="Permalink to &quot;luxon&quot;">​</a></h1><p><a href="https://luxon.nodejs.cn/" target="_blank" rel="noreferrer">luxon</a> 是一个强大的、现代的、且友好的 JavaScript 日期和时间封装器。</p><div class="language-bash vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">bash</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#B392F0;">npm</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">i</span><span style="color:#E1E4E8;"> </span><span style="color:#9ECBFF;">luxon</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#6F42C1;">npm</span><span style="color:#24292E;"> </span><span style="color:#032F62;">i</span><span style="color:#24292E;"> </span><span style="color:#032F62;">luxon</span></span></code></pre></div><h2 id="基础用法" tabindex="-1">基础用法 <a class="header-anchor" href="#基础用法" aria-label="Permalink to &quot;基础用法&quot;">​</a></h2><h3 id="创建日期时间对象" tabindex="-1">创建日期时间对象 <a class="header-anchor" href="#创建日期时间对象" aria-label="Permalink to &quot;创建日期时间对象&quot;">​</a></h3><p>使用 <code>DateTime</code> 类来创建日期时间对象：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">now</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> DateTime.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">()</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(now.</span><span style="color:#B392F0;">toISO</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">// 输出当前日期和时间的 ISO 字符串</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">now</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> DateTime.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">()</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(now.</span><span style="color:#6F42C1;">toISO</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// 输出当前日期和时间的 ISO 字符串</span></span></code></pre></div><h3 id="解析日期时间字符串" tabindex="-1">解析日期时间字符串 <a class="header-anchor" href="#解析日期时间字符串" aria-label="Permalink to &quot;解析日期时间字符串&quot;">​</a></h3><p>你可以使用 <code>DateTime.fromISO</code> 方法来解析 ISO 格式的日期时间字符串：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dt</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> DateTime.</span><span style="color:#B392F0;">fromISO</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;2024-01-07T12:00:00.000Z&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(dt.</span><span style="color:#B392F0;">toISO</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">// 输出解析后的日期和时间的 ISO 字符串</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dt</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> DateTime.</span><span style="color:#6F42C1;">fromISO</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;2024-01-07T12:00:00.000Z&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(dt.</span><span style="color:#6F42C1;">toISO</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// 输出解析后的日期和时间的 ISO 字符串</span></span></code></pre></div><h3 id="格式化日期时间" tabindex="-1">格式化日期时间 <a class="header-anchor" href="#格式化日期时间" aria-label="Permalink to &quot;格式化日期时间&quot;">​</a></h3><p>使用 <code>toFormat</code> 方法来格式化日期时间：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">formatted</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> now.</span><span style="color:#B392F0;">toFormat</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;yyyy-MM-dd HH:mm:ss&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(formatted) </span><span style="color:#6A737D;">// 输出类似于 &quot;2024-01-07 12:00:00&quot; 的字符串</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">formatted</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> now.</span><span style="color:#6F42C1;">toFormat</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;yyyy-MM-dd HH:mm:ss&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(formatted) </span><span style="color:#6A737D;">// 输出类似于 &quot;2024-01-07 12:00:00&quot; 的字符串</span></span></code></pre></div><h3 id="进行日期时间运算" tabindex="-1">进行日期时间运算 <a class="header-anchor" href="#进行日期时间运算" aria-label="Permalink to &quot;进行日期时间运算&quot;">​</a></h3><p>Luxon 提供了丰富的方法来进行日期时间运算：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark has-diff vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">futureDate</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> now.</span><span style="color:#B392F0;">plus</span><span style="color:#E1E4E8;">({ days: </span><span style="color:#79B8FF;">7</span><span style="color:#E1E4E8;">, hours: </span><span style="color:#79B8FF;">3</span><span style="color:#E1E4E8;"> })</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(futureDate.</span><span style="color:#B392F0;">toISO</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">// 输出将来日期时间的 ISO 字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">diff</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> futureDate.</span><span style="color:#B392F0;">diff</span><span style="color:#E1E4E8;">(now)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(diff.</span><span style="color:#B392F0;">as</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;hours&#39;</span><span style="color:#E1E4E8;">)) </span><span style="color:#6A737D;">// 输出两个日期时间之间的小时差</span></span></code></pre><pre class="shiki github-light has-diff vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">futureDate</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> now.</span><span style="color:#6F42C1;">plus</span><span style="color:#24292E;">({ days: </span><span style="color:#005CC5;">7</span><span style="color:#24292E;">, hours: </span><span style="color:#005CC5;">3</span><span style="color:#24292E;"> })</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(futureDate.</span><span style="color:#6F42C1;">toISO</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// 输出将来日期时间的 ISO 字符串</span></span>
<span class="line"></span>
<span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">diff</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> futureDate.</span><span style="color:#6F42C1;">diff</span><span style="color:#24292E;">(now)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(diff.</span><span style="color:#6F42C1;">as</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;hours&#39;</span><span style="color:#24292E;">)) </span><span style="color:#6A737D;">// 输出两个日期时间之间的小时差</span></span></code></pre></div><h3 id="时区处理" tabindex="-1">时区处理 <a class="header-anchor" href="#时区处理" aria-label="Permalink to &quot;时区处理&quot;">​</a></h3><p>Luxon 支持时区处理，可以在创建日期时间对象时指定时区：</p><div class="language-js vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang">js</span><pre class="shiki github-dark vp-code-dark"><code><span class="line"><span style="color:#F97583;">const</span><span style="color:#E1E4E8;"> </span><span style="color:#79B8FF;">dtWithTimeZone</span><span style="color:#E1E4E8;"> </span><span style="color:#F97583;">=</span><span style="color:#E1E4E8;"> DateTime.</span><span style="color:#B392F0;">now</span><span style="color:#E1E4E8;">().</span><span style="color:#B392F0;">setZone</span><span style="color:#E1E4E8;">(</span><span style="color:#9ECBFF;">&#39;America/New_York&#39;</span><span style="color:#E1E4E8;">)</span></span>
<span class="line"><span style="color:#E1E4E8;">console.</span><span style="color:#B392F0;">log</span><span style="color:#E1E4E8;">(dtWithTimeZone.</span><span style="color:#B392F0;">toISO</span><span style="color:#E1E4E8;">()) </span><span style="color:#6A737D;">// 输出带有时区信息的 ISO 字符串</span></span></code></pre><pre class="shiki github-light vp-code-light"><code><span class="line"><span style="color:#D73A49;">const</span><span style="color:#24292E;"> </span><span style="color:#005CC5;">dtWithTimeZone</span><span style="color:#24292E;"> </span><span style="color:#D73A49;">=</span><span style="color:#24292E;"> DateTime.</span><span style="color:#6F42C1;">now</span><span style="color:#24292E;">().</span><span style="color:#6F42C1;">setZone</span><span style="color:#24292E;">(</span><span style="color:#032F62;">&#39;America/New_York&#39;</span><span style="color:#24292E;">)</span></span>
<span class="line"><span style="color:#24292E;">console.</span><span style="color:#6F42C1;">log</span><span style="color:#24292E;">(dtWithTimeZone.</span><span style="color:#6F42C1;">toISO</span><span style="color:#24292E;">()) </span><span style="color:#6A737D;">// 输出带有时区信息的 ISO 字符串</span></span></code></pre></div>`,19),e=[p];function t(c,r,y,E,i,d){return a(),o("div",null,e)}const u=s(l,[["render",t]]);export{F as __pageData,u as default};