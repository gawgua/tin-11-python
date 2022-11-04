(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const r of document.querySelectorAll('link[rel="modulepreload"]'))u(r);new MutationObserver(r=>{for(const i of r)if(i.type==="childList")for(const o of i.addedNodes)o.tagName==="LINK"&&o.rel==="modulepreload"&&u(o)}).observe(document,{childList:!0,subtree:!0});function e(r){const i={};return r.integrity&&(i.integrity=r.integrity),r.referrerpolicy&&(i.referrerPolicy=r.referrerpolicy),r.crossorigin==="use-credentials"?i.credentials="include":r.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function u(r){if(r.ep)return;r.ep=!0;const i=e(r);fetch(r.href,i)}})();function x(){}const On=n=>n;function yn(n){return n()}function on(){return Object.create(null)}function S(n){n.forEach(yn)}function K(n){return typeof n=="function"}function A(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let G;function Bn(n,t){return G||(G=document.createElement("a")),G.href=t,n===G.href}function qn(n){return Object.keys(n).length===0}function Sn(n,...t){if(n==null)return x;const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Cn(n,t,e){n.$$.on_destroy.push(Sn(t,e))}function jn(n,t,e){return n.set(e),t}const $n=typeof window<"u";let zn=$n?()=>window.performance.now():()=>Date.now(),rn=$n?n=>requestAnimationFrame(n):x;const q=new Set;function vn(n){q.forEach(t=>{t.c(n)||(q.delete(t),t.f())}),q.size!==0&&rn(vn)}function Fn(n){let t;return q.size===0&&rn(vn),{promise:new Promise(e=>{q.add(t={c:n,f:e})}),abort(){q.delete(t)}}}function g(n,t){n.appendChild(t)}function xn(n){if(!n)return document;const t=n.getRootNode?n.getRootNode():n.ownerDocument;return t&&t.host?t:n.ownerDocument}function Ln(n){const t=y("style");return Yn(xn(n),t),t.sheet}function Yn(n,t){return g(n.head||n,t),t.sheet}function k(n,t,e){n.insertBefore(t,e||null)}function $(n){n.parentNode.removeChild(n)}function kn(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function y(n){return document.createElement(n)}function T(n){return document.createTextNode(n)}function N(){return T(" ")}function An(){return T("")}function un(n,t,e,u){return n.addEventListener(t,e,u),()=>n.removeEventListener(t,e,u)}function v(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Pn(n){return Array.from(n.childNodes)}function wn(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function ln(n,t,e,u){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,u?"important":"")}function Gn(n,t,{bubbles:e=!1,cancelable:u=!1}={}){const r=document.createEvent("CustomEvent");return r.initCustomEvent(n,e,u,t),r}const H=new Map;let I=0;function Mn(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}function Un(n,t){const e={stylesheet:Ln(t),rules:{}};return H.set(n,e),e}function an(n,t,e,u,r,i,o,a=0){const c=16.666/u;let l=`{
`;for(let _=0;_<=1;_+=c){const h=t+(e-t)*i(_);l+=_*100+`%{${o(h,1-h)}}
`}const b=l+`100% {${o(e,1-e)}}
}`,m=`__svelte_${Mn(b)}_${a}`,d=xn(n),{stylesheet:f,rules:s}=H.get(d)||Un(d,n);s[m]||(s[m]=!0,f.insertRule(`@keyframes ${m} ${b}`,f.cssRules.length));const p=n.style.animation||"";return n.style.animation=`${p?`${p}, `:""}${m} ${u}ms linear ${r}ms 1 both`,I+=1,m}function Vn(n,t){const e=(n.style.animation||"").split(", "),u=e.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),r=e.length-u.length;r&&(n.style.animation=u.join(", "),I-=r,I||Hn())}function Hn(){rn(()=>{I||(H.forEach(n=>{const{ownerNode:t}=n.stylesheet;t&&$(t)}),H.clear())})}let L;function z(n){L=n}function Tn(){if(!L)throw new Error("Function called outside component initialization");return L}function In(n,t){return Tn().$$.context.set(n,t),t}function Rn(n){return Tn().$$.context.get(n)}const j=[],sn=[],U=[],fn=[],Dn=Promise.resolve();let Z=!1;function Kn(){Z||(Z=!0,Dn.then(En))}function Y(n){U.push(n)}const Q=new Set;let M=0;function En(){const n=L;do{for(;M<j.length;){const t=j[M];M++,z(t),Wn(t.$$)}for(z(null),j.length=0,M=0;sn.length;)sn.pop()();for(let t=0;t<U.length;t+=1){const e=U[t];Q.has(e)||(Q.add(e),e())}U.length=0}while(j.length);for(;fn.length;)fn.pop()();Z=!1,Q.clear(),z(n)}function Wn(n){if(n.fragment!==null){n.update(),S(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(Y)}}let C;function Jn(){return C||(C=Promise.resolve(),C.then(()=>{C=null})),C}function X(n,t,e){n.dispatchEvent(Gn(`${t?"intro":"outro"}${e}`))}const V=new Set;let w;function Qn(){w={r:0,c:[],p:w}}function Xn(){w.r||S(w.c),w=w.p}function E(n,t){n&&n.i&&(V.delete(n),n.i(t))}function F(n,t,e,u){if(n&&n.o){if(V.has(n))return;V.add(n),w.c.push(()=>{V.delete(n),u&&(e&&n.d(1),u())}),n.o(t)}else u&&u()}const Zn={duration:0};function cn(n,t,e,u){let r=t(n,e),i=u?0:1,o=null,a=null,c=null;function l(){c&&Vn(n,c)}function b(d,f){const s=d.b-i;return f*=Math.abs(s),{a:i,b:d.b,d:s,duration:f,start:d.start,end:d.start+f,group:d.group}}function m(d){const{delay:f=0,duration:s=300,easing:p=On,tick:_=x,css:h}=r||Zn,O={start:zn()+f,b:d};d||(O.group=w,w.r+=1),o||a?a=O:(h&&(l(),c=an(n,i,d,s,f,p,h)),d&&_(0,1),o=b(O,s),Y(()=>X(n,d,"start")),Fn(P=>{if(a&&P>a.start&&(o=b(a,s),a=null,X(n,o.b,"start"),h&&(l(),c=an(n,i,o.b,o.duration,0,p,r.css))),o){if(P>=o.end)_(i=o.b,1-i),X(n,o.b,"end"),a||(o.b?l():--o.group.r||S(o.group.c)),o=null;else if(P>=o.start){const Nn=P-o.start;i=o.a+o.d*p(Nn/o.duration),_(i,1-i)}}return!!(o||a)}))}return{run(d){K(r)?Jn().then(()=>{r=r(),m(d)}):m(d)},end(){l(),o=a=null}}}function nn(n){n&&n.c()}function R(n,t,e,u){const{fragment:r,after_update:i}=n.$$;r&&r.m(t,e),u||Y(()=>{const o=n.$$.on_mount.map(yn).filter(K);n.$$.on_destroy?n.$$.on_destroy.push(...o):S(o),n.$$.on_mount=[]}),i.forEach(Y)}function D(n,t){const e=n.$$;e.fragment!==null&&(S(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function nt(n,t){n.$$.dirty[0]===-1&&(j.push(n),Kn(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function W(n,t,e,u,r,i,o,a=[-1]){const c=L;z(n);const l=n.$$={fragment:null,ctx:[],props:i,update:x,not_equal:r,bound:on(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(c?c.$$.context:[])),callbacks:on(),dirty:a,skip_bound:!1,root:t.target||c.$$.root};o&&o(l.root);let b=!1;if(l.ctx=e?e(n,t.props||{},(m,d,...f)=>{const s=f.length?f[0]:d;return l.ctx&&r(l.ctx[m],l.ctx[m]=s)&&(!l.skip_bound&&l.bound[m]&&l.bound[m](s),b&&nt(n,m)),d}):[],l.update(),b=!0,S(l.before_update),l.fragment=u?u(l.ctx):!1,t.target){if(t.hydrate){const m=Pn(t.target);l.fragment&&l.fragment.l(m),m.forEach($)}else l.fragment&&l.fragment.c();t.intro&&E(n.$$.fragment),R(n,t.target,t.anchor,t.customElement),En()}z(c)}class J{$destroy(){D(this,1),this.$destroy=x}$on(t,e){if(!K(e))return x;const u=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return u.push(e),()=>{const r=u.indexOf(e);r!==-1&&u.splice(r,1)}}$set(t){this.$$set&&!qn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const B=[];function tt(n,t=x){let e;const u=new Set;function r(a){if(A(n,a)&&(n=a,e)){const c=!B.length;for(const l of u)l[1](),B.push(l,n);if(c){for(let l=0;l<B.length;l+=2)B[l][0](B[l+1]);B.length=0}}}function i(a){r(a(n))}function o(a,c=x){const l=[a,c];return u.add(l),u.size===1&&(e=t(r)||x),a(n),()=>{u.delete(l),u.size===0&&(e(),e=null)}}return{set:r,update:i,subscribe:o}}const tn={b2_1:"print('Python is a programming language that lets you work more quickly and integrate your systems more effectively')",b2_3:`print("""
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
print(gcd)`},en={b2_1:"B\xE0i 2 1",b2_3:"B\xE0i 2 3",b2_4:"B\xE0i 2 4",b3_4:"B\xE0i 3 4",b3_5:"B\xE0i 3 5",b4_1:"B\xE0i 4 1",b4_2:"B\xE0i 4 2",b4_3:"B\xE0i 4 3",b4_4:"B\xE0i 4 4",b4_5:"B\xE0i 4 5",b4_6:"B\xE0i 4 6",b6_3:"B\xE0i 6 3",b6_4:"B\xE0i 6 4",b6_5:"B\xE0i 6 5",b6_6:"B\xE0i 6 6",b7_2:"B\xE0i 7 2",b7_3:"B\xE0i 7 3",b7_4:"B\xE0i 7 4",b7_5:"B\xE0i 7 5",b7_6:"B\xE0i 7 6",b7_7:"B\xE0i 7 7",b8_2:"B\xE0i 8 2",b8_3:"B\xE0i 8 3",th1_1:"Th\u1EF1c h\xE0nh 1 1",th1_2:"Th\u1EF1c h\xE0nh 1 2",th1_3:"Th\u1EF1c h\xE0nh 1 3",th1_4:"Th\u1EF1c h\xE0nh 1 4",th1_5:"Th\u1EF1c h\xE0nh 1 5",th1_6:"Th\u1EF1c h\xE0nh 1 6",th2_1:"Th\u1EF1c h\xE0nh 2 1",th2_2:"Th\u1EF1c h\xE0nh 2 2",th2_3:"Th\u1EF1c h\xE0nh 2 3",th2_4:"Th\u1EF1c h\xE0nh 2 4",th2_5:"Th\u1EF1c h\xE0nh 2 5",th2_6:"Th\u1EF1c h\xE0nh 2 6",th2_7:"Th\u1EF1c h\xE0nh 2 7",th2_8:"Th\u1EF1c h\xE0nh 2 8",th2_9:"Th\u1EF1c h\xE0nh 2 9",th3_1_2:"Th\u1EF1c h\xE0nh 3 1",th3_2_1:"Th\u1EF1c h\xE0nh 3 2",th3_2_2:"Th\u1EF1c h\xE0nh 3 2",th3_2_3:"Th\u1EF1c h\xE0nh 3 2",th3_3_2:"Th\u1EF1c h\xE0nh 3 3",th3_3_3:"Th\u1EF1c h\xE0nh 3 3",th4_1:"Th\u1EF1c h\xE0nh 4 1",th4_10:"Th\u1EF1c h\xE0nh 4 10",th4_11:"Th\u1EF1c h\xE0nh 4 11",th4_2:"Th\u1EF1c h\xE0nh 4 2",th4_3:"Th\u1EF1c h\xE0nh 4 3",th4_4:"Th\u1EF1c h\xE0nh 4 4",th4_5:"Th\u1EF1c h\xE0nh 4 5",th4_6:"Th\u1EF1c h\xE0nh 4 6",th4_7:"Th\u1EF1c h\xE0nh 4 7",th4_8:"Th\u1EF1c h\xE0nh 4 8",th4_9:"Th\u1EF1c h\xE0nh 4 9",th6_1_1:"Th\u1EF1c h\xE0nh 6 1",th6_1_2:"Th\u1EF1c h\xE0nh 6 1",th6_1_3:"Th\u1EF1c h\xE0nh 6 1",th6_1_4:"Th\u1EF1c h\xE0nh 6 1",th8_1:"Th\u1EF1c h\xE0nh 8 1",th8_2:"Th\u1EF1c h\xE0nh 8 2"};function et(n){let t,e,u;return{c(){t=y("button"),t.textContent="\u2630",v(t,"class","svelte-180ytwc")},m(r,i){k(r,t,i),e||(u=un(t,"click",function(){K(n[0]())&&n[0]().apply(this,arguments)}),e=!0)},p(r,[i]){n=r},i:x,o:x,d(r){r&&$(t),e=!1,u()}}}function it(n,t,e){let{onToggle:u}=t;return document.addEventListener("keydown",r=>{r.key==="Escape"&&u()}),n.$$set=r=>{"onToggle"in r&&e(0,u=r.onToggle)},[u]}class rt extends J{constructor(t){super(),W(this,t,it,et,A,{onToggle:0})}}function ut(n){const t=n-1;return t*t*t+1}function pn(n,{delay:t=0,duration:e=400,easing:u=ut,axis:r="x"}={}){const i=getComputedStyle(n),o=+i.opacity,a=r==="y"?"height":"width",c=parseFloat(i[a]),l=r==="y"?["top","bottom"]:["left","right"],b=l.map(h=>`${h[0].toUpperCase()}${h.slice(1)}`),m=parseFloat(i[`padding${b[0]}`]),d=parseFloat(i[`padding${b[1]}`]),f=parseFloat(i[`margin${b[0]}`]),s=parseFloat(i[`margin${b[1]}`]),p=parseFloat(i[`border${b[0]}Width`]),_=parseFloat(i[`border${b[1]}Width`]);return{delay:t,duration:e,easing:u,css:h=>`overflow: hidden;opacity: ${Math.min(h*20,1)*o};${a}: ${h*c}px;padding-${l[0]}: ${h*m}px;padding-${l[1]}: ${h*d}px;margin-${l[0]}: ${h*f}px;margin-${l[1]}: ${h*s}px;border-${l[0]}-width: ${h*p}px;border-${l[1]}-width: ${h*_}px;`}}function hn(n,t,e){const u=n.slice();return u[7]=t[e],u}function _n(n){let t,e,u,r,i,o,a,c,l,b,m,d=Object.keys(en),f=[];for(let s=0;s<d.length;s+=1)f[s]=dn(hn(n,d,s));return{c(){t=y("nav"),e=y("ul");for(let s=0;s<f.length;s+=1)f[s].c();u=N(),r=y("li"),i=y("button"),i.textContent="About",o=N(),a=y("a"),a.textContent="wah",v(i,"class","svelte-k16zsf"),v(a,"href","https://gawgua.github.io"),v(a,"class","svelte-k16zsf"),ln(a,"visibility",n[0]?"visible":"hidden",!1),v(r,"class","svelte-k16zsf"),v(e,"class","svelte-k16zsf"),v(t,"class","svelte-k16zsf")},m(s,p){k(s,t,p),g(t,e);for(let _=0;_<f.length;_+=1)f[_].m(e,null);g(e,u),g(e,r),g(r,i),g(r,o),g(r,a),l=!0,b||(m=un(i,"click",n[6]),b=!0)},p(s,p){if(p&4){d=Object.keys(en);let _;for(_=0;_<d.length;_+=1){const h=hn(s,d,_);f[_]?f[_].p(h,p):(f[_]=dn(h),f[_].c(),f[_].m(e,u))}for(;_<f.length;_+=1)f[_].d(1);f.length=d.length}p&1&&ln(a,"visibility",s[0]?"visible":"hidden",!1)},i(s){l||(Y(()=>{c||(c=cn(t,pn,{duration:500},!0)),c.run(1)}),l=!0)},o(s){c||(c=cn(t,pn,{duration:500},!1)),c.run(0),l=!1},d(s){s&&$(t),kn(f,s),s&&c&&c.end(),b=!1,m()}}}function dn(n){let t,e,u=en[n[7]]+"",r,i,o;function a(){return n[5](n[7])}return{c(){t=y("li"),e=y("button"),r=T(u),v(e,"class","svelte-k16zsf"),v(t,"class","svelte-k16zsf")},m(c,l){k(c,t,l),g(t,e),g(e,r),i||(o=un(e,"click",a),i=!0)},p(c,l){n=c},d(c){c&&$(t),i=!1,o()}}}function ot(n){let t,e,u,r;t=new rt({props:{onToggle:n[3]}});let i=n[1]&&_n(n);return{c(){nn(t.$$.fragment),e=N(),i&&i.c(),u=An()},m(o,a){R(t,o,a),k(o,e,a),i&&i.m(o,a),k(o,u,a),r=!0},p(o,[a]){o[1]?i?(i.p(o,a),a&2&&E(i,1)):(i=_n(o),i.c(),E(i,1),i.m(u.parentNode,u)):i&&(Qn(),F(i,1,1,()=>{i=null}),Xn())},i(o){r||(E(t.$$.fragment,o),E(i),r=!0)},o(o){F(t.$$.fragment,o),F(i),r=!1},d(o){D(t,o),o&&$(e),i&&i.d(o),o&&$(u)}}}function lt(n,t,e){let u,r=!1,i=!1,o=()=>{e(1,i=!i)},a=tt("b2_1");return Cn(n,a,b=>e(2,u=b)),In("idx",a),[r,i,u,o,a,b=>jn(a,u=`${b}`,u),()=>e(0,r=!r)]}class at extends J{constructor(t){super(),W(this,t,lt,ot,A,{})}}function bn(n,t,e){const u=n.slice();return u[2]=t[e],u}function mn(n){let t,e=n[2]+"",u,r;return{c(){t=y("option"),u=T(e),r=N(),t.__value=n[2],t.value=t.__value},m(i,o){k(i,t,o),g(t,u),g(t,r)},p:x,d(i){i&&$(t)}}}function gn(n){let t,e=tn[`${n[0]}`]+"",u;return{c(){t=y("code"),u=T(e)},m(r,i){k(r,t,i),g(t,u)},p(r,i){i&1&&e!==(e=tn[`${r[0]}`]+"")&&wn(u,e)},d(r){r&&$(t)}}}function st(n){let t,e,u,r,i,o,a,c,l,b,m,d=n[1],f=[];for(let p=0;p<d.length;p+=1)f[p]=mn(bn(n,d,p));let s=n[0]!=null&&gn(n);return{c(){t=y("link"),e=y("script"),r=N(),i=y("select"),o=y("option"),a=T(n[0]);for(let p=0;p<f.length;p+=1)f[p].c();c=N(),l=y("pre"),b=T(` \r
	`),s&&s.c(),m=T(`\r
`),v(t,"href","./prism/prism.css"),v(t,"rel","stylesheet"),Bn(e.src,u="./prism/prism.js")||v(e,"src",u),e.defer=!0,o.__value="f",o.value=o.__value,v(l,"class","svelte-3mpvij")},m(p,_){g(document.head,t),g(document.head,e),k(p,r,_),k(p,i,_),g(i,o),g(o,a);for(let h=0;h<f.length;h+=1)f[h].m(i,null);k(p,c,_),k(p,l,_),g(l,b),s&&s.m(l,null),g(l,m)},p(p,[_]){if(_&1&&wn(a,p[0]),_&2){d=p[1];let h;for(h=0;h<d.length;h+=1){const O=bn(p,d,h);f[h]?f[h].p(O,_):(f[h]=mn(O),f[h].c(),f[h].m(i,null))}for(;h<f.length;h+=1)f[h].d(1);f.length=d.length}p[0]!=null?s?s.p(p,_):(s=gn(p),s.c(),s.m(l,m)):s&&(s.d(1),s=null)},i:x,o:x,d(p){$(t),$(e),p&&$(r),p&&$(i),kn(f,p),p&&$(c),p&&$(l),s&&s.d()}}}function ft(n,t,e){let{index:u="b2_1"}=t,r=Object.keys(tn);return n.$$set=i=>{"index"in i&&e(0,u=i.index)},[u,r]}class ct extends J{constructor(t){super(),W(this,t,ft,st,A,{index:0})}}function pt(n){let t,e,u,r,i,o;return u=new at({}),i=new ct({props:{index:n[0]}}),{c(){t=y("main"),e=y("div"),nn(u.$$.fragment),r=N(),nn(i.$$.fragment),v(e,"class","sidebar")},m(a,c){k(a,t,c),g(t,e),R(u,e,null),g(t,r),R(i,t,null),o=!0},p(a,[c]){const l={};c&1&&(l.index=a[0]),i.$set(l)},i(a){o||(E(u.$$.fragment,a),E(i.$$.fragment,a),o=!0)},o(a){F(u.$$.fragment,a),F(i.$$.fragment,a),o=!1},d(a){a&&$(t),D(u),D(i)}}}function ht(n,t,e){let u;return e(0,u=Rn("idx")),[u]}class _t extends J{constructor(t){super(),W(this,t,ht,pt,A,{})}}new _t({target:document.getElementById("app")});
