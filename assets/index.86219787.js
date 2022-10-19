(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&r(a)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();function w(){}const vn=n=>n;function hn(n){return n()}function en(){return Object.create(null)}function j(n){n.forEach(hn)}function H(n){return typeof n=="function"}function I(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}function wn(n){return Object.keys(n).length===0}const mn=typeof window<"u";let xn=mn?()=>window.performance.now():()=>Date.now(),Z=mn?n=>requestAnimationFrame(n):w;const S=new Set;function bn(n){S.forEach(t=>{t.c(n)||(S.delete(t),t.f())}),S.size!==0&&Z(bn)}function kn(n){let t;return S.size===0&&Z(bn),{promise:new Promise(e=>{S.add(t={c:n,f:e})}),abort(){S.delete(t)}}}function b(n,t){n.appendChild(t)}function gn(n){if(!n)return document;const t=n.getRootNode?n.getRootNode():n.ownerDocument;return t&&t.host?t:n.ownerDocument}function En(n){const t=y("style");return Sn(gn(n),t),t.sheet}function Sn(n,t){return b(n.head||n,t),t.sheet}function v(n,t,e){n.insertBefore(t,e||null)}function g(n){n.parentNode.removeChild(n)}function Nn(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function y(n){return document.createElement(n)}function N(n){return document.createTextNode(n)}function O(){return N(" ")}function On(){return N("")}function nn(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function x(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function qn(n){return Array.from(n.childNodes)}function jn(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function rn(n,t,e,r){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,r?"important":"")}function on(n,t){for(let e=0;e<n.options.length;e+=1){const r=n.options[e];if(r.__value===t){r.selected=!0;return}}n.selectedIndex=-1}function Cn(n){const t=n.querySelector(":checked")||n.options[0];return t&&t.__value}function Tn(n,t,{bubbles:e=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,e,r,t),o}const P=new Map;let z=0;function Ln(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}function An(n,t){const e={stylesheet:En(t),rules:{}};return P.set(n,e),e}function an(n,t,e,r,o,i,a,l=0){const p=16.666/r;let c=`{
`;for(let $=0;$<=1;$+=p){const m=t+(e-t)*i($);c+=$*100+`%{${a(m,1-m)}}
`}const d=c+`100% {${a(e,1-e)}}
}`,s=`__svelte_${Ln(d)}_${l}`,u=gn(n),{stylesheet:f,rules:h}=P.get(u)||An(u,n);h[s]||(h[s]=!0,f.insertRule(`@keyframes ${s} ${d}`,f.cssRules.length));const _=n.style.animation||"";return n.style.animation=`${_?`${_}, `:""}${s} ${r}ms linear ${o}ms 1 both`,z+=1,s}function Fn(n,t){const e=(n.style.animation||"").split(", "),r=e.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=e.length-r.length;o&&(n.style.animation=r.join(", "),z-=o,z||Yn())}function Yn(){Z(()=>{z||(P.forEach(n=>{const{ownerNode:t}=n.stylesheet;t&&g(t)}),P.clear())})}let tn;function L(n){tn=n}const T=[],ln=[],G=[],sn=[],Gn=Promise.resolve();let J=!1;function Mn(){J||(J=!0,Gn.then(yn))}function q(n){G.push(n)}const K=new Set;let Y=0;function yn(){const n=tn;do{for(;Y<T.length;){const t=T[Y];Y++,L(t),Pn(t.$$)}for(L(null),T.length=0,Y=0;ln.length;)ln.pop()();for(let t=0;t<G.length;t+=1){const e=G[t];K.has(e)||(K.add(e),e())}G.length=0}while(T.length);for(;sn.length;)sn.pop()();J=!1,K.clear(),L(n)}function Pn(n){if(n.fragment!==null){n.update(),j(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(q)}}let C;function zn(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function W(n,t,e){n.dispatchEvent(Tn(`${t?"intro":"outro"}${e}`))}const M=new Set;let k;function Bn(){k={r:0,c:[],p:k}}function Un(){k.r||j(k.c),k=k.p}function E(n,t){n&&n.i&&(M.delete(n),n.i(t))}function A(n,t,e,r){if(n&&n.o){if(M.has(n))return;M.add(n),k.c.push(()=>{M.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}const Hn={duration:0};function un(n,t,e,r){let o=t(n,e),i=r?0:1,a=null,l=null,p=null;function c(){p&&Fn(n,p)}function d(u,f){const h=u.b-i;return f*=Math.abs(h),{a:i,b:u.b,d:h,duration:f,start:u.start,end:u.start+f,group:u.group}}function s(u){const{delay:f=0,duration:h=300,easing:_=vn,tick:$=w,css:m}=o||Hn,D={start:xn()+f,b:u};u||(D.group=k,k.r+=1),a||l?l=D:(m&&(c(),p=an(n,i,u,h,f,_,m)),u&&$(0,1),a=d(D,h),q(()=>W(n,u,"start")),kn(F=>{if(l&&F>l.start&&(a=d(l,h),l=null,W(n,a.b,"start"),m&&(c(),p=an(n,i,a.b,a.duration,0,_,o.css))),a){if(F>=a.end)$(i=a.b,1-i),W(n,a.b,"end"),l||(a.b?c():--a.group.r||j(a.group.c)),a=null;else if(F>=a.start){const $n=F-a.start;i=a.a+a.d*_($n/a.duration),$(i,1-i)}}return!!(a||l)}))}return{run(u){H(o)?zn().then(()=>{o=o(),s(u)}):s(u)},end(){c(),a=l=null}}}const In=typeof window<"u"?window:typeof globalThis<"u"?globalThis:global;function Q(n){n&&n.c()}function B(n,t,e,r){const{fragment:o,after_update:i}=n.$$;o&&o.m(t,e),r||q(()=>{const a=n.$$.on_mount.map(hn).filter(H);n.$$.on_destroy?n.$$.on_destroy.push(...a):j(a),n.$$.on_mount=[]}),i.forEach(q)}function U(n,t){const e=n.$$;e.fragment!==null&&(j(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Vn(n,t){n.$$.dirty[0]===-1&&(T.push(n),Mn(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function V(n,t,e,r,o,i,a,l=[-1]){const p=tn;L(n);const c=n.$$={fragment:null,ctx:[],props:i,update:w,not_equal:o,bound:en(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(p?p.$$.context:[])),callbacks:en(),dirty:l,skip_bound:!1,root:t.target||p.$$.root};a&&a(c.root);let d=!1;if(c.ctx=e?e(n,t.props||{},(s,u,...f)=>{const h=f.length?f[0]:u;return c.ctx&&o(c.ctx[s],c.ctx[s]=h)&&(!c.skip_bound&&c.bound[s]&&c.bound[s](h),d&&Vn(n,s)),u}):[],c.update(),d=!0,j(c.before_update),c.fragment=r?r(c.ctx):!1,t.target){if(t.hydrate){const s=qn(t.target);c.fragment&&c.fragment.l(s),s.forEach(g)}else c.fragment&&c.fragment.c();t.intro&&E(n.$$.fragment),B(n,t.target,t.anchor,t.customElement),yn()}L(p)}class R{$destroy(){U(this,1),this.$destroy=w}$on(t,e){if(!H(e))return w;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!wn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Rn(n){let t,e,r;return{c(){t=y("button"),t.innerHTML=`<div class="menu-button svelte-2azsi7"></div> 
	<div class="menu-button svelte-2azsi7"></div> 
	<div class="menu-button svelte-2azsi7"></div>`,x(t,"class","top-6 block fixed left-6")},m(o,i){v(o,t,i),e||(r=nn(t,"click",function(){H(n[0]())&&n[0]().apply(this,arguments)}),e=!0)},p(o,[i]){n=o},i:w,o:w,d(o){o&&g(t),e=!1,r()}}}function Dn(n,t,e){let{onToggle:r}=t;return document.addEventListener("keydown",o=>{o.key==="Escape"&&r()}),n.$$set=o=>{"onToggle"in o&&e(0,r=o.onToggle)},[r]}class Kn extends R{constructor(t){super(),V(this,t,Dn,Rn,I,{onToggle:0})}}function Wn(n){const t=n-1;return t*t*t+1}function fn(n,{delay:t=0,duration:e=400,easing:r=Wn,axis:o="x"}={}){const i=getComputedStyle(n),a=+i.opacity,l=o==="y"?"height":"width",p=parseFloat(i[l]),c=o==="y"?["top","bottom"]:["left","right"],d=c.map(m=>`${m[0].toUpperCase()}${m.slice(1)}`),s=parseFloat(i[`padding${d[0]}`]),u=parseFloat(i[`padding${d[1]}`]),f=parseFloat(i[`margin${d[0]}`]),h=parseFloat(i[`margin${d[1]}`]),_=parseFloat(i[`border${d[0]}Width`]),$=parseFloat(i[`border${d[1]}Width`]);return{delay:t,duration:e,easing:r,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*a};${l}: ${m*p}px;padding-${c[0]}: ${m*s}px;padding-${c[1]}: ${m*u}px;margin-${c[0]}: ${m*f}px;margin-${c[1]}: ${m*h}px;border-${c[0]}-width: ${m*_}px;border-${c[1]}-width: ${m*$}px;`}}function cn(n){let t,e,r,o,i,a,l,p,c,d;return{c(){t=y("nav"),e=y("ul"),r=y("li"),o=y("button"),o.textContent="About",i=O(),a=y("a"),a.textContent="wah",x(o,"class","top-10 bg-yellow border-spacing-1 hover:bg-blue"),x(a,"href","https://gawgua.github.io"),x(a,"class","svelte-10vxrls"),rn(a,"visibility",n[0]?"visible":"hidden",!1),x(t,"class","svelte-10vxrls")},m(s,u){v(s,t,u),b(t,e),b(e,r),b(r,o),b(r,i),b(r,a),p=!0,c||(d=nn(o,"click",n[3]),c=!0)},p(s,u){u&1&&rn(a,"visibility",s[0]?"visible":"hidden",!1)},i(s){p||(q(()=>{l||(l=un(t,fn,{duration:500},!0)),l.run(1)}),p=!0)},o(s){l||(l=un(t,fn,{duration:500},!1)),l.run(0),p=!1},d(s){s&&g(t),s&&l&&l.end(),c=!1,d()}}}function Jn(n){let t,e,r,o;t=new Kn({props:{onToggle:n[2]}});let i=n[1]&&cn(n);return{c(){Q(t.$$.fragment),e=O(),i&&i.c(),r=On()},m(a,l){B(t,a,l),v(a,e,l),i&&i.m(a,l),v(a,r,l),o=!0},p(a,[l]){const p={};l&4&&(p.onToggle=a[2]),t.$set(p),a[1]?i?(i.p(a,l),l&2&&E(i,1)):(i=cn(a),i.c(),E(i,1),i.m(r.parentNode,r)):i&&(Bn(),A(i,1,1,()=>{i=null}),Un())},i(a){o||(E(t.$$.fragment,a),E(i),o=!0)},o(a){A(t.$$.fragment,a),A(i),o=!1},d(a){U(t,a),a&&g(e),i&&i.d(a),a&&g(r)}}}function Qn(n,t,e){let{showChildren:r=!1}=t,{showSidebar:o=!1}=t,{switchState:i=()=>{e(1,o=!o)}}=t;const a=()=>e(0,r=!r);return n.$$set=l=>{"showChildren"in l&&e(0,r=l.showChildren),"showSidebar"in l&&e(1,o=l.showSidebar),"switchState"in l&&e(2,i=l.switchState)},[r,o,i,a]}class Xn extends R{constructor(t){super(),V(this,t,Qn,Jn,I,{showChildren:0,showSidebar:1,switchState:2})}}const X={b2_1:"print('Python is a programming language that lets you work more quickly and integrate your systems more effectively')",b2_3:`print("""
**********
*        *
*        *
**********
""")`,b2_4:`print('Goodbye\\n')
print('See you again')`,b3_4:`from math import pi

r = 5
dien_tich = pi * r ** 2

print(f'{dien_tich:0.2f}')`,b3_5:`from math import sqrt

a = 5
b = 6

canh_huyen = sqrt(a**2 + b ** 2)

print(f'{canh_huyen:0.2f}')`,b4_1:`a = int(input())
b = int(input())

chu_vi = (a+b) * 2
dien_tich = a * b

print(chu_vi)
print(dien_tich)`,b4_2:`x = int(input())

ket_qua = x**10 + x**5 + 1
print(ket_qua)`,b4_3:`a = int(input())
b = int(input())

ket_qua = a**3 + b**3 + a*b

print(ket_qua)`,b4_4:`from math import sqrt

h = int(input())
g = 9.8

v = sqrt(2*g*h)

print(v)`,b4_5:`from math import sqrt

x = int(input())
y = int(input())

khoang_cach = sqrt(x**2 + y**2)

print(khoang_cach)`,b4_6:`from math import sqrt


a = float(input())
b = float(input())
c = float(input())

p = (a + b + c) / 2

s = sqrt(p * (p-a) * (p-b) * (p-c))

print(s)`,b6_3:`a = int(input('a = '))
absVal = a

if a < 0:
    absVal = -absVal

print('Gia tri tuyet doi bang', absVal)`,b6_4:`a = float(input('a = '))
b = float(input('b = '))
c = float(input('c = '))

if a > 0 and b > 0 and c > 0:
    print('Ca ba so deu duong')`,b6_5:`n = int(input())
m = int(input())

if n % m == 0:
    print('YES')
else:
    print('NO')`,b6_6:`a = float(input())
b = float(input())
c = float(input())

if (a + b >= c) or (a + c >= b) or (b + c >= a):
    print('YES')
else:
    print("NO")`,b7_2:`a = int(input())

if a >= 100:
    print('NO')
    exit()

print('YES')`,b7_3:`a = float(input('a = '))
b = float(input('b = '))
c = float(input('c = '))

if not ((a > 0) and (b > 0) and (c > 0) and (a + b > c) and (a + c > b) and (b + c > a)):
    print('KHONG')
elif ((a**2 + b**2 == c**2) or (a**2 + c**2 == b**2) or (b**2 + c**2 == a**2)):
    print('VUONG')
else:
    print('CO')`,b7_4:`x = int(input())
y = int(input())

if x > y:
    print(x**2)
elif x == y:
    print(x + y)
elif x < y:
    print(y ** 2)`,b7_5:`x = int(input())

if x % 2 == 0:
    print('CHAN')
else:
    print('LE')`,b7_6:`x = float(input())

if x >= 8.0:
    print('GIOI')
elif x >= 6.5:
    print('KHA')
elif x >= 5.0:
    print('TRUNG BINH')
else:
    print('YEU')`,b7_7:`x = int(input())

if 1 <= x < 51:
    tien = 1678 * x

elif 51 <= x < 101:
    tien = 83900 + (x - 50) * 1734

elif 101 <= x < 201:
    tien = 170600 + (x - 100) * 2014

elif 201 <= x < 300:
    tien = 372000 + (x - 200) * 2536

elif 301 <= x < 401:
    tien = 625600 + (x - 300) * 2834

elif x >= 401:
    tien = 909000 + (x - 400) * 2927

print(tien)`,b8_2:`n = int(input())
days = 0

while n < 1_000_000:
    n *= 2
    days += 1

print(days)`,b8_3:`t = float(input())

for i in range(0, 10):
    t += t * 0.07
    print(t + "trieu dong")`,th1_1:`a = float(input('a = '))
b = float(input('b = '))

print(f'Nghi\xE1\xBB\u2021m c\xE1\xBB\xA7a ph\xC6\xB0\xC6\xA1ng tr\xC3\xACnh l\xC3\xA0: {-b / a}')`,th1_2:`from math import sqrt

a = float(input())
b = float(input())

ket_qua = sqrt(-b / a)

print(ket_qua)`,th1_3:`n = int(input())
a = n // 10
b = n % 10

print(f'Tong cac chu so cua so {n} bang {a + b}')`,th1_4:`a = list(map(int, input()))

total = 0
for i in a:
    total += i

print(total)`,th1_5:`a = int(input())

total = 0

for i in range(1, a + 1):
    total += i

print(total)`,th1_6:`m = int(input())
n = int(input())

so_o = m * n
tong = 0
so_hat_o_sau = 1

for i in range(1, so_o + 1):
    tong += so_hat_o_sau
    so_hat_o_sau = so_hat_o_sau * 2

print(tong)`,th2_1:`a = float(input())
b = float(input())
c = float(input())
d = float(input())

if (b >= c and a <= c) or (d >= a and c <= a):
    print('YES')
else:
    print('NO')`,th2_2:`a = int(input())
b = int(input())

if a > b:
    print(a)
else:
    print(b)`,th2_3:`a = int(input())
b = int(input())
c = int(input())

if a < b < c or b < a < c:
    print(c)
elif b < c < a or c < b < a:
    print(a)
elif a < c < b or c < a < b:
    print(b)`,th2_4:`p = int(input())
q = int(input())
r = int(input())

a = q / p
if q * a == r:
    print('YES')
else:
    print('NO')`,th2_5:`m, n, k = map(int, input().split())

a= m * n * k
if a % 10 == 0 and not a // 10 < 10:
    print('YES')
else:
    print('NO')`,th2_6:`year = int(input())

if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
    print(366)

else:
    print(365)`,th2_7:`month = int(input())
year = int(input())

isLeap = False

if year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):
    isLeap = True
else:
    isLeap = False

if month == 2:
    if isLeap:
        print(29)
    else:
        print(28)
elif month in [1, 3, 5, 7, 8, 10, 12]:
    print(31)
else:
    print(30)`,th2_8:`a = input()

if a.lower() != a.upper():
    print('YES')
else:
    print('NO')`,th2_9:`a = int(input())
b = int(input())
c = int(input())

if (a + b >= c) or (a + c >= b) or (b + c >= a):
    if a == b and b == c:
        print("DEU")
    elif a == b or b == c or a == c:
        print("CAN")
    elif (a**2 + b**2 == c**2) or (a**2 + c**2 == b**2) or (c**2 + b**2 == a**2):
        print("VUONG")
    else:
        print("THUONG")`,"th3_1.2":`n = int(input('n = '))

for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,"th3_2.1":`pi = 1
a = 1
for i in range(1, 1000000):
    a = a + 2
    if i % 2 == 1:
        pi -= 1 / a
    else:
        pi += 1 / a

print(4 * pi)`,"th3_2.2":`from math import factorial

e = 2
n = int(input())

for i in range(2, n + 1):
    e += 1/factorial(n)

print(e)`,"th3_2.3":`n = int(input())
w = 0

for i in range(1, n + 1):
    if n % i == 0:
        w += 1

print(w)`,"th3_3.2":`for i in range(1, 11):
    for j in range(0, 100, 10):
        print(i + j, end=' ')
    print()`,"th3_3.3":`for i in range(100, 0, -1):
    if i % 10 == 0:
        print()
    print(i, end=' ')`,th4_1:`n = int(input())
lenght = len(str(n))
total = 0

for i in range(0, lenght):
    total += n % 10
    n //= 10

print(lenght)
print(total)`,th4_2:`n = int(input())

if n == 1 or n == 2:
    print(1)
else:
    a = 1
    b = 1
    for i in range(0, n - 1):
        next = a + b
        a = b
        b = next

print(a)`,th4_3:`import math  

n = int(input())

while n % 2 == 0:  
    print(2, end=' ')  
    n = n / 2  
  
for i in range(3, int(math.sqrt(n)) + 1, 2):  
    while n % i == 0:  
        print(i, end=' ')  
        n = n / i  

if n > 2:  
    print(n, end=' ')`,th4_4:`n = int(input())

if n == 1: print('NO')

if n < 4: print('YES')

j: int = 2
while j <= n:
    if n % j == 0:
        if j == n: 
            print('YES')
            break
        else: 
            print('NO')
            break
    j += 1`,th4_5:`k = int(input())

for i in range(2, k + 1):
    j: int = 2
    while j <= i:
        if i % j == 0:
            if j == i: 
                if k % i == 0:
                    print(i)
                    break
        j += 1`};const{document:Zn}=In;function pn(n,t,e){const r=n.slice();return r[4]=t[e],r}function dn(n){let t,e=n[4]+"",r,o;return{c(){t=y("option"),r=N(e),o=O(),t.__value=n[4],t.value=t.__value},m(i,a){v(i,t,a),b(t,r),b(t,o)},p:w,d(i){i&&g(t)}}}function _n(n){let t,e=X[`${n[0]}`]+"",r;return{c(){t=y("code"),r=N(e)},m(o,i){v(o,t,i),b(t,r)},p(o,i){i&1&&e!==(e=X[`${o[0]}`]+"")&&jn(r,e)},d(o){o&&g(t)}}}function nt(n){let t,e,r,o,i,a,l,p,c,d=n[1],s=[];for(let f=0;f<d.length;f+=1)s[f]=dn(pn(n,d,f));let u=n[0]!=null&&_n(n);return{c(){t=y("link"),e=O(),r=y("select");for(let f=0;f<s.length;f+=1)s[f].c();o=O(),i=y("pre"),a=N(` \r
	`),u&&u.c(),l=N(`\r
`),x(t,"rel","stylesheet"),x(t,"href","./prism/prism.css"),n[0]===void 0&&q(()=>n[2].call(r)),x(i,"class","language-python svelte-1m3tvjd")},m(f,h){b(Zn.head,t),v(f,e,h),v(f,r,h);for(let _=0;_<s.length;_+=1)s[_].m(r,null);on(r,n[0]),v(f,o,h),v(f,i,h),b(i,a),u&&u.m(i,null),b(i,l),p||(c=nn(r,"change",n[2]),p=!0)},p(f,[h]){if(h&2){d=f[1];let _;for(_=0;_<d.length;_+=1){const $=pn(f,d,_);s[_]?s[_].p($,h):(s[_]=dn($),s[_].c(),s[_].m(r,null))}for(;_<s.length;_+=1)s[_].d(1);s.length=d.length}h&3&&on(r,f[0]),f[0]!=null?u?u.p(f,h):(u=_n(f),u.c(),u.m(i,l)):u&&(u.d(1),u=null)},i:w,o:w,d(f){g(t),f&&g(e),f&&g(r),Nn(s,f),f&&g(o),f&&g(i),u&&u.d(),p=!1,c()}}}function tt(n,t,e){let r,o=Object.keys(X),i=document.createElement("script");i.src="./prism/prism.js",i.type="text/javascript",i.setAttribute("defer","true"),document.querySelector("head").append(i);function a(){r=Cn(this),e(0,r),e(1,o)}return e(0,r=""),[r,o,a]}class et extends R{constructor(t){super(),V(this,t,tt,nt,I,{})}}function it(n){let t,e,r,o,i,a;return r=new Xn({}),i=new et({}),{c(){t=y("main"),e=y("div"),Q(r.$$.fragment),o=O(),Q(i.$$.fragment),x(e,"class","sidebar")},m(l,p){v(l,t,p),b(t,e),B(r,e,null),b(t,o),B(i,t,null),a=!0},p:w,i(l){a||(E(r.$$.fragment,l),E(i.$$.fragment,l),a=!0)},o(l){A(r.$$.fragment,l),A(i.$$.fragment,l),a=!1},d(l){l&&g(t),U(r),U(i)}}}class rt extends R{constructor(t){super(),V(this,t,null,it,I,{})}}new rt({target:document.getElementById("app")});
