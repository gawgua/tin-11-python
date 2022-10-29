(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))o(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const a of i.addedNodes)a.tagName==="LINK"&&a.rel==="modulepreload"&&o(a)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function o(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function v(){}const vn=n=>n;function mn(n){return n()}function rn(){return Object.create(null)}function j(n){n.forEach(mn)}function R(n){return typeof n=="function"}function z(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let Y;function xn(n,t){return Y||(Y=document.createElement("a")),Y.href=t,n===Y.href}function kn(n){return Object.keys(n).length===0}const bn=typeof window<"u";let En=bn?()=>window.performance.now():()=>Date.now(),nn=bn?n=>requestAnimationFrame(n):v;const S=new Set;function gn(n){S.forEach(t=>{t.c(n)||(S.delete(t),t.f())}),S.size!==0&&nn(gn)}function Nn(n){let t;return S.size===0&&nn(gn),{promise:new Promise(e=>{S.add(t={c:n,f:e})}),abort(){S.delete(t)}}}function y(n,t){n.appendChild(t)}function yn(n){if(!n)return document;const t=n.getRootNode?n.getRootNode():n.ownerDocument;return t&&t.host?t:n.ownerDocument}function Sn(n){const t=$("style");return qn(yn(n),t),t.sheet}function qn(n,t){return y(n.head||n,t),t.sheet}function w(n,t,e){n.insertBefore(t,e||null)}function g(n){n.parentNode.removeChild(n)}function On(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function $(n){return document.createElement(n)}function q(n){return document.createTextNode(n)}function O(){return q(" ")}function Cn(){return q("")}function tn(n,t,e,o){return n.addEventListener(t,e,o),()=>n.removeEventListener(t,e,o)}function x(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function jn(n){return Array.from(n.childNodes)}function Tn(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function on(n,t,e,o){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,o?"important":"")}function an(n,t){for(let e=0;e<n.options.length;e+=1){const o=n.options[e];if(o.__value===t){o.selected=!0;return}}n.selectedIndex=-1}function Fn(n){const t=n.querySelector(":checked")||n.options[0];return t&&t.__value}function Ln(n,t,{bubbles:e=!1,cancelable:o=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,e,o,t),r}const U=new Map;let I=0;function An(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}function Pn(n,t){const e={stylesheet:Sn(t),rules:{}};return U.set(n,e),e}function ln(n,t,e,o,r,i,a,l=0){const h=16.666/o;let s=`{
`;for(let b=0;b<=1;b+=h){const f=t+(e-t)*i(b);s+=b*100+`%{${a(f,1-f)}}
`}const m=s+`100% {${a(e,1-e)}}
}`,p=`__svelte_${An(m)}_${l}`,c=yn(n),{stylesheet:_,rules:d}=U.get(c)||Pn(c,n);d[p]||(d[p]=!0,_.insertRule(`@keyframes ${p} ${m}`,_.cssRules.length));const u=n.style.animation||"";return n.style.animation=`${u?`${u}, `:""}${p} ${o}ms linear ${r}ms 1 both`,I+=1,p}function Yn(n,t){const e=(n.style.animation||"").split(", "),o=e.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=e.length-o.length;r&&(n.style.animation=o.join(", "),I-=r,I||Gn())}function Gn(){nn(()=>{I||(U.forEach(n=>{const{ownerNode:t}=n.stylesheet;t&&g(t)}),U.clear())})}let en;function L(n){en=n}const F=[],sn=[],B=[],un=[],Bn=Promise.resolve();let Q=!1;function Mn(){Q||(Q=!0,Bn.then($n))}function C(n){B.push(n)}const W=new Set;let G=0;function $n(){const n=en;do{for(;G<F.length;){const t=F[G];G++,L(t),Un(t.$$)}for(L(null),F.length=0,G=0;sn.length;)sn.pop()();for(let t=0;t<B.length;t+=1){const e=B[t];W.has(e)||(W.add(e),e())}B.length=0}while(F.length);for(;un.length;)un.pop()();Q=!1,W.clear(),L(n)}function Un(n){if(n.fragment!==null){n.update(),j(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(C)}}let T;function In(){return T||(T=Promise.resolve(),T.then(()=>{T=null})),T}function J(n,t,e){n.dispatchEvent(Ln(`${t?"intro":"outro"}${e}`))}const M=new Set;let k;function Vn(){k={r:0,c:[],p:k}}function Hn(){k.r||j(k.c),k=k.p}function E(n,t){n&&n.i&&(M.delete(n),n.i(t))}function A(n,t,e,o){if(n&&n.o){if(M.has(n))return;M.add(n),k.c.push(()=>{M.delete(n),o&&(e&&n.d(1),o())}),n.o(t)}else o&&o()}const Rn={duration:0};function fn(n,t,e,o){let r=t(n,e),i=o?0:1,a=null,l=null,h=null;function s(){h&&Yn(n,h)}function m(c,_){const d=c.b-i;return _*=Math.abs(d),{a:i,b:c.b,d,duration:_,start:c.start,end:c.start+_,group:c.group}}function p(c){const{delay:_=0,duration:d=300,easing:u=vn,tick:b=v,css:f}=r||Rn,N={start:En()+_,b:c};c||(N.group=k,k.r+=1),a||l?l=N:(f&&(s(),h=ln(n,i,c,d,_,u,f)),c&&b(0,1),a=m(N,d),C(()=>J(n,c,"start")),Nn(P=>{if(l&&P>l.start&&(a=m(l,d),l=null,J(n,a.b,"start"),f&&(s(),h=ln(n,i,a.b,a.duration,0,u,r.css))),a){if(P>=a.end)b(i=a.b,1-i),J(n,a.b,"end"),l||(a.b?s():--a.group.r||j(a.group.c)),a=null;else if(P>=a.start){const wn=P-a.start;i=a.a+a.d*u(wn/a.duration),b(i,1-i)}}return!!(a||l)}))}return{run(c){R(r)?In().then(()=>{r=r(),p(c)}):p(c)},end(){s(),a=l=null}}}function X(n){n&&n.c()}function V(n,t,e,o){const{fragment:r,after_update:i}=n.$$;r&&r.m(t,e),o||C(()=>{const a=n.$$.on_mount.map(mn).filter(R);n.$$.on_destroy?n.$$.on_destroy.push(...a):j(a),n.$$.on_mount=[]}),i.forEach(C)}function H(n,t){const e=n.$$;e.fragment!==null&&(j(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function zn(n,t){n.$$.dirty[0]===-1&&(F.push(n),Mn(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function D(n,t,e,o,r,i,a,l=[-1]){const h=en;L(n);const s=n.$$={fragment:null,ctx:[],props:i,update:v,not_equal:r,bound:rn(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(h?h.$$.context:[])),callbacks:rn(),dirty:l,skip_bound:!1,root:t.target||h.$$.root};a&&a(s.root);let m=!1;if(s.ctx=e?e(n,t.props||{},(p,c,..._)=>{const d=_.length?_[0]:c;return s.ctx&&r(s.ctx[p],s.ctx[p]=d)&&(!s.skip_bound&&s.bound[p]&&s.bound[p](d),m&&zn(n,p)),c}):[],s.update(),m=!0,j(s.before_update),s.fragment=o?o(s.ctx):!1,t.target){if(t.hydrate){const p=jn(t.target);s.fragment&&s.fragment.l(p),p.forEach(g)}else s.fragment&&s.fragment.c();t.intro&&E(n.$$.fragment),V(n,t.target,t.anchor,t.customElement),$n()}L(h)}class K{$destroy(){H(this,1),this.$destroy=v}$on(t,e){if(!R(e))return v;const o=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return o.push(e),()=>{const r=o.indexOf(e);r!==-1&&o.splice(r,1)}}$set(t){this.$$set&&!kn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}function Dn(n){let t,e,o;return{c(){t=$("button"),t.textContent="\u2630",x(t,"class","svelte-180ytwc")},m(r,i){w(r,t,i),e||(o=tn(t,"click",function(){R(n[0]())&&n[0]().apply(this,arguments)}),e=!0)},p(r,[i]){n=r},i:v,o:v,d(r){r&&g(t),e=!1,o()}}}function Kn(n,t,e){let{onToggle:o}=t;return document.addEventListener("keydown",r=>{r.key==="Escape"&&o()}),n.$$set=r=>{"onToggle"in r&&e(0,o=r.onToggle)},[o]}class Wn extends K{constructor(t){super(),D(this,t,Kn,Dn,z,{onToggle:0})}}function Jn(n){const t=n-1;return t*t*t+1}function cn(n,{delay:t=0,duration:e=400,easing:o=Jn,axis:r="x"}={}){const i=getComputedStyle(n),a=+i.opacity,l=r==="y"?"height":"width",h=parseFloat(i[l]),s=r==="y"?["top","bottom"]:["left","right"],m=s.map(f=>`${f[0].toUpperCase()}${f.slice(1)}`),p=parseFloat(i[`padding${m[0]}`]),c=parseFloat(i[`padding${m[1]}`]),_=parseFloat(i[`margin${m[0]}`]),d=parseFloat(i[`margin${m[1]}`]),u=parseFloat(i[`border${m[0]}Width`]),b=parseFloat(i[`border${m[1]}Width`]);return{delay:t,duration:e,easing:o,css:f=>`overflow: hidden;opacity: ${Math.min(f*20,1)*a};${l}: ${f*h}px;padding-${s[0]}: ${f*p}px;padding-${s[1]}: ${f*c}px;margin-${s[0]}: ${f*_}px;margin-${s[1]}: ${f*d}px;border-${s[0]}-width: ${f*u}px;border-${s[1]}-width: ${f*b}px;`}}function pn(n){let t,e,o,r,i,a,l,h,s,m;return{c(){t=$("nav"),e=$("ul"),o=$("li"),r=$("button"),r.textContent="About",i=O(),a=$("a"),a.textContent="wah",x(r,"class","top-10 bg-yellow border-spacing-1 hover:bg-blue "),x(a,"href","https://gawgua.github.io"),x(a,"class","svelte-2yi07y"),on(a,"visibility",n[0]?"visible":"hidden",!1),x(t,"class","svelte-2yi07y")},m(p,c){w(p,t,c),y(t,e),y(e,o),y(o,r),y(o,i),y(o,a),h=!0,s||(m=tn(r,"click",n[3]),s=!0)},p(p,c){c&1&&on(a,"visibility",p[0]?"visible":"hidden",!1)},i(p){h||(C(()=>{l||(l=fn(t,cn,{duration:500},!0)),l.run(1)}),h=!0)},o(p){l||(l=fn(t,cn,{duration:500},!1)),l.run(0),h=!1},d(p){p&&g(t),p&&l&&l.end(),s=!1,m()}}}function Qn(n){let t,e,o,r;t=new Wn({props:{onToggle:n[2]}});let i=n[1]&&pn(n);return{c(){X(t.$$.fragment),e=O(),i&&i.c(),o=Cn()},m(a,l){V(t,a,l),w(a,e,l),i&&i.m(a,l),w(a,o,l),r=!0},p(a,[l]){const h={};l&4&&(h.onToggle=a[2]),t.$set(h),a[1]?i?(i.p(a,l),l&2&&E(i,1)):(i=pn(a),i.c(),E(i,1),i.m(o.parentNode,o)):i&&(Vn(),A(i,1,1,()=>{i=null}),Hn())},i(a){r||(E(t.$$.fragment,a),E(i),r=!0)},o(a){A(t.$$.fragment,a),A(i),r=!1},d(a){H(t,a),a&&g(e),i&&i.d(a),a&&g(o)}}}function Xn(n,t,e){let{showChildren:o=!1}=t,{showSidebar:r=!1}=t,{switchState:i=()=>{e(1,r=!r)}}=t;const a=()=>e(0,o=!o);return n.$$set=l=>{"showChildren"in l&&e(0,o=l.showChildren),"showSidebar"in l&&e(1,r=l.showSidebar),"switchState"in l&&e(2,i=l.switchState)},[o,r,i,a]}class Zn extends K{constructor(t){super(),D(this,t,Xn,Qn,z,{showChildren:0,showSidebar:1,switchState:2})}}const Z={b2_1:"print('Python is a programming language that lets you work more quickly and integrate your systems more effectively')",b2_3:`print("""
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

print(f'Nghi\u1EC7m c\u1EE7a ph\u01B0\u01A1ng tr\xECnh l\xE0: {-b / a}')`,th1_2:`from math import sqrt

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
        print("THUONG")`,th3_1_2:`n = int(input('n = '))

for i in range(1, 11):
    print(f"{n} x {i} = {n * i}")`,th3_2_1:`pi = 1
a = 1
for i in range(1, 1000000):
    a = a + 2
    if i % 2 == 1:
        pi -= 1 / a
    else:
        pi += 1 / a

print(4 * pi)`,th3_2_2:`from math import factorial

e = 2
n = int(input())

for i in range(2, n + 1):
    e += 1/factorial(n)

print(e)`,th3_2_3:`n = int(input())
w = 0

for i in range(1, n + 1):
    if n % i == 0:
        w += 1

print(w)`,th3_3_2:`for i in range(1, 11):
    for j in range(0, 100, 10):
        print(i + j, end=' ')
    print()`,th3_3_3:`for i in range(100, 0, -1):
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
        j += 1`,th8_1:`def fib(n):
 
    if n <= 1:
        return n
 
    return fib(n - 1) + fib(n - 2)

n = int(input())
print(fib(n))`,th8_2:`import math

n = int(input())
l = list(map(int, input().split()))
total_primeNum = 0

def isPrime(n):
    if n == 1: return False

    if n < 4: return True

    i: int = 2
    while i <= n:
        if n % i == 0:
            if i == n: return True
            else: return False
        i += 1

for i in l:
    if isPrime(i):
        total_primeNum += 1

num1 = l[0]
num2 = l[1]
gcd = math.gcd(num1, num2)
 
for i in range(2, n - 1):
    gcd = math.gcd(gcd, l[i])

print(total_primeNum)
print(gcd)`};function _n(n,t,e){const o=n.slice();return o[3]=t[e],o}function dn(n){let t,e=n[3]+"",o,r;return{c(){t=$("option"),o=q(e),r=O(),t.__value=n[3],t.value=t.__value},m(i,a){w(i,t,a),y(t,o),y(t,r)},p:v,d(i){i&&g(t)}}}function hn(n){let t,e=Z[`${n[0]}`]+"",o;return{c(){t=$("code"),o=q(e)},m(r,i){w(r,t,i),y(t,o)},p(r,i){i&1&&e!==(e=Z[`${r[0]}`]+"")&&Tn(o,e)},d(r){r&&g(t)}}}function nt(n){let t,e,o,r,i,a,l,h,s,m,p,c=n[1],_=[];for(let u=0;u<c.length;u+=1)_[u]=dn(_n(n,c,u));let d=n[0]!=null&&hn(n);return{c(){t=$("link"),e=$("script"),r=O(),i=$("select");for(let u=0;u<_.length;u+=1)_[u].c();a=O(),l=$("pre"),h=q(` \r
	`),d&&d.c(),s=q(`\r
`),x(t,"href","./prism/prism.css"),x(t,"rel","stylesheet"),xn(e.src,o="./prism/prism.js")||x(e,"src",o),e.defer=!0,n[0]===void 0&&C(()=>n[2].call(i)),x(l,"class","svelte-1di2e8v")},m(u,b){y(document.head,t),y(document.head,e),w(u,r,b),w(u,i,b);for(let f=0;f<_.length;f+=1)_[f].m(i,null);an(i,n[0]),w(u,a,b),w(u,l,b),y(l,h),d&&d.m(l,null),y(l,s),m||(p=tn(i,"change",n[2]),m=!0)},p(u,[b]){if(b&2){c=u[1];let f;for(f=0;f<c.length;f+=1){const N=_n(u,c,f);_[f]?_[f].p(N,b):(_[f]=dn(N),_[f].c(),_[f].m(i,null))}for(;f<_.length;f+=1)_[f].d(1);_.length=c.length}b&3&&an(i,u[0]),u[0]!=null?d?d.p(u,b):(d=hn(u),d.c(),d.m(l,s)):d&&(d.d(1),d=null)},i:v,o:v,d(u){g(t),g(e),u&&g(r),u&&g(i),On(_,u),u&&g(a),u&&g(l),d&&d.d(),m=!1,p()}}}function tt(n,t,e){let o,r=Object.keys(Z);function i(){o=Fn(this),e(0,o),e(1,r)}return e(0,o=""),[o,r,i]}class et extends K{constructor(t){super(),D(this,t,tt,nt,z,{})}}function it(n){let t,e,o,r,i,a;return o=new Zn({}),i=new et({}),{c(){t=$("main"),e=$("div"),X(o.$$.fragment),r=O(),X(i.$$.fragment),x(e,"class","sidebar")},m(l,h){w(l,t,h),y(t,e),V(o,e,null),y(t,r),V(i,t,null),a=!0},p:v,i(l){a||(E(o.$$.fragment,l),E(i.$$.fragment,l),a=!0)},o(l){A(o.$$.fragment,l),A(i.$$.fragment,l),a=!1},d(l){l&&g(t),H(o),H(i)}}}class rt extends K{constructor(t){super(),D(this,t,null,it,z,{})}}new rt({target:document.getElementById("app")});
