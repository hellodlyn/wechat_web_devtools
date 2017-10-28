'use strict';var _extends=Object.assign||function(a){for(var b,c=1;c<arguments.length;c++)for(var d in b=arguments[c],b)Object.prototype.hasOwnProperty.call(b,d)&&(a[d]=b[d]);return a};!function(require,directRequire){function a(a,b,c){return new Promise(async(a,e)=>{let f=q(b,c),g=p.srcPath,h=c&&c.pages.map((a)=>{return d.posix.join(c.root,a)})||b.pages,i=0,j=[],n={};for(let b in f.forEach((a)=>{n[a]=!0}),h.forEach((a)=>{n[`${a}.wxss`]&&(i++,j.push(`./${a}.wxss`),delete n[`${a}.wxss`])}),n)j.push(`./${b}`);let o=['-db','-pc',i].concat(j),r=k(m,o,{cwd:g}),s=[],t=[];r.on('close',(b)=>{if(0===b){let b=Buffer.concat(s).toString(),c=b.split('='),d={};for(let a=0,b=c.length;a<b&&c[a+1];a+=2)d[c[a]]=c[a+1];return a(d)}let c=Buffer.concat(t).toString(),d=new Error(`编译 .wxss 文件错误，错误信息如上，可在控制台查看更详细信息`);return d.code=l,d.msgForConsole=c,e(d)}),r.stdout.on('data',(a)=>{s.push(a)}),r.stderr.on('data',(a)=>{t.push(a)})})}function b(a,b){let c=d.extname(b);'.wxss'===c?o():'app.json'==b&&o()}async function c(a){let c=await i(a);p&&p.srcPath==c.srcPath||(o(),p&&p.unWatch(b),p=c,p.watch(b))}const d=require('path'),e=require('./1dea83a77e99a7c94f6b6f01f5c175b0.js'),f=require('./d28a711224425b00101635efe1034c99.js'),g=require('child_process'),h=require('./949d8235c744ced2a80121e4dba34c28.js'),i=require('./162bf2ee28b76d3b3d95b685cede4146.js'),j=require('./d3976cc01aeebc5b09e11c4135b6bd8d.js'),k=g.spawn,l=h.TRANS_WXSS_JS_ERR,m=f.getWXSSParsePath();var n={};const o=()=>{n={}};var p;const q=(a,b)=>{let c=p.getAllWXSSFiles();if(a.subPackages){let d=c.filter((b)=>{let c=!0;return a.subPackages.forEach((a)=>{0==b.indexOf(a.root)&&(c=!1)}),c});c=b?d.concat(c.filter((a)=>{return 0==a.indexOf(b.root)})):d}return c};module.exports=async function(b,d={}){let{app:f,page:g}=d;await c(b);let h=await e(b);if(f){if('undefined'==typeof n.comm){let c=await a(b,h);n=_extends({},n,c)}return n.comm}let i=`./${g}.wxss`,k=j.checkIsInSubPackage(h,g);if(!k)return{page:n[i]};if('undefined'==typeof n[i]){let c=await a(b,h,k);n[k.root]=c.comm,delete c.comm,n=_extends({},n,c)}return{comm:n[k.root],page:n[i]}}}(require('lazyload'),require);