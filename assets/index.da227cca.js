(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function v(){}const wn=n=>n;function bn(n){return n()}function un(){return Object.create(null)}function O(n){n.forEach(bn)}function R(n){return typeof n=="function"}function Y(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let P;function kn(n,t){return P||(P=document.createElement("a")),P.href=t,n===P.href}function En(n){return Object.keys(n).length===0}const gn=typeof window<"u";let Nn=gn?()=>window.performance.now():()=>Date.now(),tn=gn?n=>requestAnimationFrame(n):v;const N=new Set;function yn(n){N.forEach(t=>{t.c(n)||(N.delete(t),t.f())}),N.size!==0&&tn(yn)}function Bn(n){let t;return N.size===0&&tn(yn),{promise:new Promise(e=>{N.add(t={c:n,f:e})}),abort(){N.delete(t)}}}function b(n,t){n.appendChild(t)}function $n(n){if(!n)return document;const t=n.getRootNode?n.getRootNode():n.ownerDocument;return t&&t.host?t:n.ownerDocument}function On(n){const t=y("style");return qn($n(n),t),t.sheet}function qn(n,t){return b(n.head||n,t),t.sheet}function w(n,t,e){n.insertBefore(t,e||null)}function x(n){n.parentNode.removeChild(n)}function Sn(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function y(n){return document.createElement(n)}function B(n){return document.createTextNode(n)}function F(){return B(" ")}function Cn(){return B("")}function en(n,t,e,u){return n.addEventListener(t,e,u),()=>n.removeEventListener(t,e,u)}function g(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function jn(n){return Array.from(n.childNodes)}function Fn(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function on(n,t,e,u){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,u?"important":"")}function Ln(n,t,{bubbles:e=!1,cancelable:u=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,e,u,t),r}const U=new Map;let V=0;function Yn(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}function An(n,t){const e={stylesheet:On(t),rules:{}};return U.set(n,e),e}function an(n,t,e,u,r,i,o,s=0){const l=16.666/u;let a=`{
`;for(let h=0;h<=1;h+=l){const m=t+(e-t)*i(h);a+=h*100+`%{${o(m,1-m)}}
`}const _=a+`100% {${o(e,1-e)}}
}`,d=`__svelte_${Yn(_)}_${s}`,c=$n(n),{stylesheet:p,rules:f}=U.get(c)||An(c,n);f[d]||(f[d]=!0,p.insertRule(`@keyframes ${d} ${_}`,p.cssRules.length));const $=n.style.animation||"";return n.style.animation=`${$?`${$}, `:""}${d} ${u}ms linear ${r}ms 1 both`,V+=1,d}function Pn(n,t){const e=(n.style.animation||"").split(", "),u=e.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=e.length-u.length;r&&(n.style.animation=u.join(", "),V-=r,V||Gn())}function Gn(){tn(()=>{V||(U.forEach(n=>{const{ownerNode:t}=n.stylesheet;t&&x(t)}),U.clear())})}let rn;function C(n){rn=n}const S=[],sn=[],z=[],ln=[],zn=Promise.resolve();let X=!1;function Mn(){X||(X=!0,zn.then(xn))}function L(n){z.push(n)}const J=new Set;let G=0;function xn(){const n=rn;do{for(;G<S.length;){const t=S[G];G++,C(t),Un(t.$$)}for(C(null),S.length=0,G=0;sn.length;)sn.pop()();for(let t=0;t<z.length;t+=1){const e=z[t];J.has(e)||(J.add(e),e())}z.length=0}while(S.length);for(;ln.length;)ln.pop()();X=!1,J.clear(),C(n)}function Un(n){if(n.fragment!==null){n.update(),O(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(L)}}let q;function Vn(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function Q(n,t,e){n.dispatchEvent(Ln(`${t?"intro":"outro"}${e}`))}const M=new Set;let T;function Hn(){T={r:0,c:[],p:T}}function In(){T.r||O(T.c),T=T.p}function k(n,t){n&&n.i&&(M.delete(n),n.i(t))}function j(n,t,e,u){if(n&&n.o){if(M.has(n))return;M.add(n),T.c.push(()=>{M.delete(n),u&&(e&&n.d(1),u())}),n.o(t)}else u&&u()}const Rn={duration:0};function fn(n,t,e,u){let r=t(n,e),i=u?0:1,o=null,s=null,l=null;function a(){l&&Pn(n,l)}function _(c,p){const f=c.b-i;return p*=Math.abs(f),{a:i,b:c.b,d:f,duration:p,start:c.start,end:c.start+p,group:c.group}}function d(c){const{delay:p=0,duration:f=300,easing:$=wn,tick:h=v,css:m}=r||Rn,W={start:Nn()+p,b:c};c||(W.group=T,T.r+=1),o||s?s=W:(m&&(a(),l=an(n,i,c,f,p,$,m)),c&&h(0,1),o=_(W,f),L(()=>Q(n,c,"start")),Bn(A=>{if(s&&A>s.start&&(o=_(s,f),s=null,Q(n,o.b,"start"),m&&(a(),l=an(n,i,o.b,o.duration,0,$,r.css))),o){if(A>=o.end)h(i=o.b,1-i),Q(n,o.b,"end"),s||(o.b?a():--o.group.r||O(o.group.c)),o=null;else if(A>=o.start){const Tn=A-o.start;i=o.a+o.d*$(Tn/o.duration),h(i,1-i)}}return!!(o||s)}))}return{run(c){R(r)?Vn().then(()=>{r=r(),d(c)}):d(c)},end(){a(),o=s=null}}}function Z(n){n&&n.c()}function H(n,t,e,u){const{fragment:r,after_update:i}=n.$$;r&&r.m(t,e),u||L(()=>{const o=n.$$.on_mount.map(bn).filter(R);n.$$.on_destroy?n.$$.on_destroy.push(...o):O(o),n.$$.on_mount=[]}),i.forEach(L)}function I(n,t){const e=n.$$;e.fragment!==null&&(O(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Dn(n,t){n.$$.dirty[0]===-1&&(S.push(n),Mn(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function D(n,t,e,u,r,i,o,s=[-1]){const l=rn;C(n);const a=n.$$={fragment:null,ctx:[],props:i,update:v,not_equal:r,bound:un(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:un(),dirty:s,skip_bound:!1,root:t.target||l.$$.root};o&&o(a.root);let _=!1;if(a.ctx=e?e(n,t.props||{},(d,c,...p)=>{const f=p.length?p[0]:c;return a.ctx&&r(a.ctx[d],a.ctx[d]=f)&&(!a.skip_bound&&a.bound[d]&&a.bound[d](f),_&&Dn(n,d)),c}):[],a.update(),_=!0,O(a.before_update),a.fragment=u?u(a.ctx):!1,t.target){if(t.hydrate){const d=jn(t.target);a.fragment&&a.fragment.l(d),d.forEach(x)}else a.fragment&&a.fragment.c();t.intro&&k(n.$$.fragment),H(n,t.target,t.anchor,t.customElement),xn()}C(l)}class K{$destroy(){I(this,1),this.$destroy=v}$on(t,e){if(!R(e))return v;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(e),()=>{const r=u.indexOf(e);r!==-1&&u.splice(r,1)}}$set(t){this.$$set&&!En(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const E=[];function Kn(n,t=v){let e;const u=new Set;function r(s){if(Y(n,s)&&(n=s,e)){const l=!E.length;for(const a of u)a[1](),E.push(a,n);if(l){for(let a=0;a<E.length;a+=2)E[a][0](E[a+1]);E.length=0}}}function i(s){r(s(n))}function o(s,l=v){const a=[s,l];return u.add(a),u.size===1&&(e=t(r)||v),s(n),()=>{u.delete(a),u.size===0&&(e(),e=null)}}return{set:r,update:i,subscribe:o}}const vn=Kn("b2_1"),cn={b2_1:"print('Python is a programming language that lets you work more quickly and integrate your systems more effectively')",b2_3:`print("""
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
print(total)`,th4_10:`n = int(input())

b = bin(n).strip('0b')
print(b)`,th4_11:`n = int(input())
for i in range(1, n + 1):
    for j in range(0, n - i):
        print(end=' ')
    for j in range(0, 2 * i - 1):
        print('*', end='')
    print()`,th4_2:`n = int(input())

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

for n in range(1, k + 1):
    if n > 1:
        for i in range(2, n//2 + 1):
            if (n % i) == 0:
                break
        else:
            print(n, end=" ")`,th4_6:`from math import gcd, lcm

a, b = map(int, input().split())

print(gcd(a, b))
print(lcm(a, b))`,th4_7:`from math import factorial

n = float(input())

print(factorial(n))`,th4_8:`a = int(input())
n = int(input())

print(a**n)`,th4_9:`n = input()
if n == n[::-1]:
    print("YES")
else:
    print("NO")`,th6_1_1:`s = input()

if s == s[::-1]:
    print("YES")
else:
    print("NO")`,th6_1_2:`s = input()

if s.find("Covid-19") != -1:
    print("YES")
else:
    print("NO")`,th6_1_3:`s = input()
print(len(s))`,th6_1_4:"",th8_1:`def fib(n):
 
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
print(gcd)`},nn={b2_1:"B\xE0i 2 1",b2_3:"B\xE0i 2 3",b2_4:"B\xE0i 2 4",b3_4:"B\xE0i 3 4",b3_5:"B\xE0i 3 5",b4_1:"B\xE0i 4 1",b4_2:"B\xE0i 4 2",b4_3:"B\xE0i 4 3",b4_4:"B\xE0i 4 4",b4_5:"B\xE0i 4 5",b4_6:"B\xE0i 4 6",b6_3:"B\xE0i 6 3",b6_4:"B\xE0i 6 4",b6_5:"B\xE0i 6 5",b6_6:"B\xE0i 6 6",b7_2:"B\xE0i 7 2",b7_3:"B\xE0i 7 3",b7_4:"B\xE0i 7 4",b7_5:"B\xE0i 7 5",b7_6:"B\xE0i 7 6",b7_7:"B\xE0i 7 7",b8_2:"B\xE0i 8 2",b8_3:"B\xE0i 8 3",th1_1:"Th\u1EF1c h\xE0nh 1 1",th1_2:"Th\u1EF1c h\xE0nh 1 2",th1_3:"Th\u1EF1c h\xE0nh 1 3",th1_4:"Th\u1EF1c h\xE0nh 1 4",th1_5:"Th\u1EF1c h\xE0nh 1 5",th1_6:"Th\u1EF1c h\xE0nh 1 6",th2_1:"Th\u1EF1c h\xE0nh 2 1",th2_2:"Th\u1EF1c h\xE0nh 2 2",th2_3:"Th\u1EF1c h\xE0nh 2 3",th2_4:"Th\u1EF1c h\xE0nh 2 4",th2_5:"Th\u1EF1c h\xE0nh 2 5",th2_6:"Th\u1EF1c h\xE0nh 2 6",th2_7:"Th\u1EF1c h\xE0nh 2 7",th2_8:"Th\u1EF1c h\xE0nh 2 8",th2_9:"Th\u1EF1c h\xE0nh 2 9",th3_1_2:"Th\u1EF1c h\xE0nh 3 1",th3_2_1:"Th\u1EF1c h\xE0nh 3 2",th3_2_2:"Th\u1EF1c h\xE0nh 3 2",th3_2_3:"Th\u1EF1c h\xE0nh 3 2",th3_3_2:"Th\u1EF1c h\xE0nh 3 3",th3_3_3:"Th\u1EF1c h\xE0nh 3 3",th4_1:"Th\u1EF1c h\xE0nh 4 1",th4_10:"Th\u1EF1c h\xE0nh 4 10",th4_11:"Th\u1EF1c h\xE0nh 4 11",th4_2:"Th\u1EF1c h\xE0nh 4 2",th4_3:"Th\u1EF1c h\xE0nh 4 3",th4_4:"Th\u1EF1c h\xE0nh 4 4",th4_5:"Th\u1EF1c h\xE0nh 4 5",th4_6:"Th\u1EF1c h\xE0nh 4 6",th4_7:"Th\u1EF1c h\xE0nh 4 7",th4_8:"Th\u1EF1c h\xE0nh 4 8",th4_9:"Th\u1EF1c h\xE0nh 4 9",th6_1_1:"Th\u1EF1c h\xE0nh 6 1",th6_1_2:"Th\u1EF1c h\xE0nh 6 1",th6_1_3:"Th\u1EF1c h\xE0nh 6 1",th6_1_4:"Th\u1EF1c h\xE0nh 6 1",th8_1:"Th\u1EF1c h\xE0nh 8 1",th8_2:"Th\u1EF1c h\xE0nh 8 2"};function Wn(n){let t,e,u;return{c(){t=y("button"),t.textContent="\u2630",g(t,"class","svelte-czweca")},m(r,i){w(r,t,i),e||(u=en(t,"click",function(){R(n[0]())&&n[0]().apply(this,arguments)}),e=!0)},p(r,[i]){n=r},i:v,o:v,d(r){r&&x(t),e=!1,u()}}}function Jn(n,t,e){let{onToggle:u}=t;return document.addEventListener("keydown",r=>{r.key==="Escape"&&u()}),n.$$set=r=>{"onToggle"in r&&e(0,u=r.onToggle)},[u]}class Qn extends K{constructor(t){super(),D(this,t,Jn,Wn,Y,{onToggle:0})}}function Xn(n){const t=n-1;return t*t*t+1}function pn(n,{delay:t=0,duration:e=400,easing:u=Xn,axis:r="x"}={}){const i=getComputedStyle(n),o=+i.opacity,s=r==="y"?"height":"width",l=parseFloat(i[s]),a=r==="y"?["top","bottom"]:["left","right"],_=a.map(m=>`${m[0].toUpperCase()}${m.slice(1)}`),d=parseFloat(i[`padding${_[0]}`]),c=parseFloat(i[`padding${_[1]}`]),p=parseFloat(i[`margin${_[0]}`]),f=parseFloat(i[`margin${_[1]}`]),$=parseFloat(i[`border${_[0]}Width`]),h=parseFloat(i[`border${_[1]}Width`]);return{delay:t,duration:e,easing:u,css:m=>`overflow: hidden;opacity: ${Math.min(m*20,1)*o};${s}: ${m*l}px;padding-${a[0]}: ${m*d}px;padding-${a[1]}: ${m*c}px;margin-${a[0]}: ${m*p}px;margin-${a[1]}: ${m*f}px;border-${a[0]}-width: ${m*$}px;border-${a[1]}-width: ${m*h}px;`}}function hn(n,t,e){const u=n.slice();return u[5]=t[e],u}function _n(n){let t,e,u,r,i,o,s,l,a,_,d,c=Object.keys(nn),p=[];for(let f=0;f<c.length;f+=1)p[f]=dn(hn(n,c,f));return{c(){t=y("nav"),e=y("ul");for(let f=0;f<p.length;f+=1)p[f].c();u=F(),r=y("li"),i=y("button"),i.textContent="About",o=F(),s=y("a"),s.textContent="wah",g(i,"class","svelte-nl9u2e"),g(s,"href","https://gawgua.github.io"),g(s,"class","svelte-nl9u2e"),on(s,"visibility",n[0]?"visible":"hidden",!1),g(r,"class","svelte-nl9u2e"),g(e,"class","svelte-nl9u2e"),g(t,"class","svelte-nl9u2e")},m(f,$){w(f,t,$),b(t,e);for(let h=0;h<p.length;h+=1)p[h].m(e,null);b(e,u),b(e,r),b(r,i),b(r,o),b(r,s),a=!0,_||(d=en(i,"click",n[4]),_=!0)},p(f,$){if($&8){c=Object.keys(nn);let h;for(h=0;h<c.length;h+=1){const m=hn(f,c,h);p[h]?p[h].p(m,$):(p[h]=dn(m),p[h].c(),p[h].m(e,u))}for(;h<p.length;h+=1)p[h].d(1);p.length=c.length}$&1&&on(s,"visibility",f[0]?"visible":"hidden",!1)},i(f){a||(L(()=>{l||(l=fn(t,pn,{duration:500},!0)),l.run(1)}),a=!0)},o(f){l||(l=fn(t,pn,{duration:500},!1)),l.run(0),a=!1},d(f){f&&x(t),Sn(p,f),f&&l&&l.end(),_=!1,d()}}}function dn(n){let t,e,u=nn[n[5]]+"",r,i,o;return{c(){t=y("li"),e=y("button"),r=B(u),g(e,"id",n[5]),g(e,"class","svelte-nl9u2e"),g(t,"class","svelte-nl9u2e")},m(s,l){w(s,t,l),b(t,e),b(e,r),i||(o=en(e,"click",n[3]),i=!0)},p:v,d(s){s&&x(t),i=!1,o()}}}function Zn(n){let t,e,u,r;t=new Qn({props:{onToggle:n[2]}});let i=n[1]&&_n(n);return{c(){Z(t.$$.fragment),e=F(),i&&i.c(),u=Cn()},m(o,s){H(t,o,s),w(o,e,s),i&&i.m(o,s),w(o,u,s),r=!0},p(o,[s]){o[1]?i?(i.p(o,s),s&2&&k(i,1)):(i=_n(o),i.c(),k(i,1),i.m(u.parentNode,u)):i&&(Hn(),j(i,1,1,()=>{i=null}),In())},i(o){r||(k(t.$$.fragment,o),k(i),r=!0)},o(o){j(t.$$.fragment,o),j(i),r=!1},d(o){I(t,o),o&&x(e),i&&i.d(o),o&&x(u)}}}function nt(n,t,e){let u=!1,r=!1,i=()=>{e(1,r=!r)};function o(l){vn.update(a=>l.target.id)}return[u,r,i,o,()=>e(0,u=!u)]}class tt extends K{constructor(t){super(),D(this,t,nt,Zn,Y,{})}}function mn(n){let t,e=cn[`${n[0]}`]+"",u;return{c(){t=y("code"),u=B(e)},m(r,i){w(r,t,i),b(t,u)},p(r,i){i&1&&e!==(e=cn[`${r[0]}`]+"")&&Fn(u,e)},d(r){r&&x(t)}}}function et(n){let t,e,u,r,i,o,s,l=n[0]!=null&&mn(n);return{c(){t=y("link"),e=y("script"),r=F(),i=y("pre"),o=B(` \r
	`),l&&l.c(),s=B(`\r
`),g(t,"href","./prism/prism.css"),g(t,"rel","stylesheet"),kn(e.src,u="./prism/prism.js")||g(e,"src",u),e.defer=!0,g(i,"class","svelte-16u6mjg")},m(a,_){b(document.head,t),b(document.head,e),w(a,r,_),w(a,i,_),b(i,o),l&&l.m(i,null),b(i,s)},p(a,[_]){a[0]!=null?l?l.p(a,_):(l=mn(a),l.c(),l.m(i,s)):l&&(l.d(1),l=null)},i:v,o:v,d(a){x(t),x(e),a&&x(r),a&&x(i),l&&l.d()}}}function it(n,t,e){let{index:u}=t;return n.$$set=r=>{"index"in r&&e(0,u=r.index)},[u]}class rt extends K{constructor(t){super(),D(this,t,it,et,Y,{index:0})}}function ut(n){let t,e,u,r,i,o;return u=new tt({}),i=new rt({props:{index:n[0]}}),{c(){t=y("main"),e=y("div"),Z(u.$$.fragment),r=F(),Z(i.$$.fragment),g(e,"class","sidebar")},m(s,l){w(s,t,l),b(t,e),H(u,e,null),b(t,r),H(i,t,null),o=!0},p(s,[l]){const a={};l&1&&(a.index=s[0]),i.$set(a)},i(s){o||(k(u.$$.fragment,s),k(i.$$.fragment,s),o=!0)},o(s){j(u.$$.fragment,s),j(i.$$.fragment,s),o=!1},d(s){s&&x(t),I(u),I(i)}}}function ot(n,t,e){let u;return vn.subscribe(r=>e(0,u=r)),[u]}class at extends K{constructor(t){super(),D(this,t,ot,ut,Y,{})}}new at({target:document.getElementById("app")});
