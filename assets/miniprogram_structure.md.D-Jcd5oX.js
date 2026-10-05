import{_ as s,o as n,c as e,a2 as p}from"./chunks/framework.BWuWLRhz.js";const u=JSON.parse('{"title":"家长端目录结构","description":"家长端小程序的工程结构说明（开发者）","frontmatter":{"title":"家长端目录结构","description":"家长端小程序的工程结构说明（开发者）"},"headers":[],"relativePath":"miniprogram/structure.md","filePath":"miniprogram/structure.md","lastUpdated":1791170056000}'),i={name:"miniprogram/structure.md"};function l(t,a,o,c,r,d){return n(),e("div",null,[...a[0]||(a[0]=[p(`<h1 id="目录结构-开发者" tabindex="-1">目录结构（开发者） <a class="header-anchor" href="#目录结构-开发者" aria-label="Permalink to &quot;目录结构（开发者）&quot;">​</a></h1><p>家长端小程序位于独立仓库 <code>AgoraIn-weixin-amp</code>，使用微信小程序原生框架 + TDesign 组件库。</p><div class="language- vp-adaptive-theme"><button title="Copy Code" class="copy"></button><span class="lang"></span><pre class="shiki shiki-themes github-light github-dark vp-code" tabindex="0"><code><span class="line"><span>AgoraIn-weixin-amp/</span></span>
<span class="line"><span>├── app.js / app.json / app.wxss     # 全局配置与样式</span></span>
<span class="line"><span>├── utils/</span></span>
<span class="line"><span>│   ├── request.js                   # 统一请求封装（携带 JWT、错误提示）</span></span>
<span class="line"><span>│   ├── auth.js                      # 登录态与路由守卫</span></span>
<span class="line"><span>│   └── parent.js                    # 家长端接口封装（绑定 / 概览 / 通知 / 成绩 …）</span></span>
<span class="line"><span>├── pages/</span></span>
<span class="line"><span>│   ├── login/                       # 登录（用户名@区域）</span></span>
<span class="line"><span>│   ├── parent/</span></span>
<span class="line"><span>│   │   ├── index/                   # 家长首页（孩子信息 + 快捷入口）</span></span>
<span class="line"><span>│   │   ├── bind/                    # 邀请码绑定与多孩切换</span></span>
<span class="line"><span>│   │   ├── notices/                 # 通知列表与已读上报</span></span>
<span class="line"><span>│   │   ├── messages/                # 与老师留言</span></span>
<span class="line"><span>│   │   ├── scores/                  # 成绩概览</span></span>
<span class="line"><span>│   │   ├── duty/                    # 值日安排</span></span>
<span class="line"><span>│   │   └── resources/               # 班级资源</span></span>
<span class="line"><span>│   └── …                            # 其余业务页</span></span>
<span class="line"><span>└── project.config.json</span></span></code></pre></div><h2 id="接口对接" tabindex="-1">接口对接 <a class="header-anchor" href="#接口对接" aria-label="Permalink to &quot;接口对接&quot;">​</a></h2><ul><li>全部请求走 <code>https://agorain.615mc.cn/api/v4/...</code>，登录使用 <code>/auth/login</code></li><li>家长相关接口集中在 <code>/parent/*</code>：绑定、概览、通知、留言、成绩、值日、资源</li><li>令牌存于本地存储，过期后由 <code>auth.js</code> 引导重新登录</li></ul><h2 id="构建与发布" tabindex="-1">构建与发布 <a class="header-anchor" href="#构建与发布" aria-label="Permalink to &quot;构建与发布&quot;">​</a></h2><ol><li>用微信开发者工具打开仓库根目录</li><li>在 <code>app.js</code> 中确认服务器地址（v4 起固定为 <code>https://agorain.615mc.cn</code>）</li><li>上传体验版 → 提交审核 → 发布</li></ol><h2 id="相关阅读" tabindex="-1">相关阅读 <a class="header-anchor" href="#相关阅读" aria-label="Permalink to &quot;相关阅读&quot;">​</a></h2><ul><li><a href="/miniprogram/">小程序总览</a> · <a href="/api.html">API 文档</a></li></ul>`,9)])])}const m=s(i,[["render",l]]);export{u as __pageData,m as default};
