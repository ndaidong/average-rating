/**
 * average-rating@2.0.0
 * built with esbuild at: 2022-01-03T14:48:10.361Z
 * repository: https://github.com/ndaidong/average-rating
 * maintainer: @ndaidong
 * License: MIT
**/
var n=(t,e)=>{if(t===0&&e===0)return 0;let o=((t+1.9208)/(t+e)-1.96*Math.sqrt(t*e/(t+e)+.9604)/(t+e))/(1+3.8416/(t+e));return Number(o.toFixed(2))},x=t=>{let e=t.length,o=t[0],c=t[e-1],u=(1/(e-1)).toFixed(2),s=e-1;for(let r=1;r<s;r++){let l=(u*r).toFixed(2);c+=t[r]*l,o+=t[s-r]*l}return n(c,o)},d=t=>{let e=t.reduce((s,r)=>s+r,0);if(e===0)return 0;let o=0,c=1;t.forEach(s=>{o+=s*c,c++});let u=o/e;return Number(u.toFixed(1))};export{d as average,x as rate,n as score};
