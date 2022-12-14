(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();function v(){}const Tn=n=>n;function mn(n){return n()}function un(){return Object.create(null)}function O(n){n.forEach(mn)}function D(n){return typeof n=="function"}function z(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let P;function kn(n,t){return P||(P=document.createElement("a")),P.href=t,n===P.href}function En(n){return Object.keys(n).length===0}function Nn(n,...t){if(n==null)return v;const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Bn(n,t,e){n.$$.on_destroy.push(Nn(t,e))}const gn=typeof window<"u";let Sn=gn?()=>window.performance.now():()=>Date.now(),tn=gn?n=>requestAnimationFrame(n):v;const B=new Set;function yn(n){B.forEach(t=>{t.c(n)||(B.delete(t),t.f())}),B.size!==0&&tn(yn)}function On(n){let t;return B.size===0&&tn(yn),{promise:new Promise(e=>{B.add(t={c:n,f:e})}),abort(){B.delete(t)}}}function m(n,t){n.appendChild(t)}function $n(n){if(!n)return document;const t=n.getRootNode?n.getRootNode():n.ownerDocument;return t&&t.host?t:n.ownerDocument}function qn(n){const t=y("style");return Cn($n(n),t),t.sheet}function Cn(n,t){return m(n.head||n,t),t.sheet}function x(n,t,e){n.insertBefore(t,e||null)}function w(n){n.parentNode.removeChild(n)}function jn(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function y(n){return document.createElement(n)}function T(n){return document.createTextNode(n)}function S(){return T(" ")}function Fn(){return T("")}function en(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function $(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Ln(n){return Array.from(n.childNodes)}function on(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function an(n,t,e,r){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,r?"important":"")}function Yn(n,t,{bubbles:e=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,e,r,t),o}const V=new Map;let H=0;function zn(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}function An(n,t){const e={stylesheet:qn(t),rules:{}};return V.set(n,e),e}function sn(n,t,e,r,o,i,u,a=0){const l=16.666/r;let s=`{
`;for(let c=0;c<=1;c+=l){const _=t+(e-t)*i(c);s+=c*100+`%{${u(_,1-_)}}
`}const d=s+`100% {${u(e,1-e)}}
}`,b=`__svelte_${zn(d)}_${a}`,h=$n(n),{stylesheet:p,rules:f}=V.get(h)||An(h,n);f[b]||(f[b]=!0,p.insertRule(`@keyframes ${b} ${d}`,p.cssRules.length));const g=n.style.animation||"";return n.style.animation=`${g?`${g}, `:""}${b} ${r}ms linear ${o}ms 1 both`,H+=1,b}function Pn(n,t){const e=(n.style.animation||"").split(", "),r=e.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=e.length-r.length;o&&(n.style.animation=r.join(", "),H-=o,H||Gn())}function Gn(){tn(()=>{H||(V.forEach(n=>{const{ownerNode:t}=n.stylesheet;t&&w(t)}),V.clear())})}let rn;function j(n){rn=n}const C=[],ln=[],M=[],fn=[],Mn=Promise.resolve();let Z=!1;function Un(){Z||(Z=!0,Mn.then(wn))}function L(n){M.push(n)}const J=new Set;let G=0;function wn(){const n=rn;do{for(;G<C.length;){const t=C[G];G++,j(t),Vn(t.$$)}for(j(null),C.length=0,G=0;ln.length;)ln.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];J.has(e)||(J.add(e),e())}M.length=0}while(C.length);for(;fn.length;)fn.pop()();Z=!1,J.clear(),j(n)}function Vn(n){if(n.fragment!==null){n.update(),O(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(L)}}let q;function Hn(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function Q(n,t,e){n.dispatchEvent(Yn(`${t?"intro":"outro"}${e}`))}const U=new Set;let k;function In(){k={r:0,c:[],p:k}}function Rn(){k.r||O(k.c),k=k.p}function E(n,t){n&&n.i&&(U.delete(n),n.i(t))}function F(n,t,e,r){if(n&&n.o){if(U.has(n))return;U.add(n),k.c.push(()=>{U.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}const Dn={duration:0};function cn(n,t,e,r){let o=t(n,e),i=r?0:1,u=null,a=null,l=null;function s(){l&&Pn(n,l)}function d(h,p){const f=h.b-i;return p*=Math.abs(f),{a:i,b:h.b,d:f,duration:p,start:h.start,end:h.start+p,group:h.group}}function b(h){const{delay:p=0,duration:f=300,easing:g=Tn,tick:c=v,css:_}=o||Dn,X={start:Sn()+p,b:h};h||(X.group=k,k.r+=1),u||a?a=X:(_&&(s(),l=sn(n,i,h,f,p,g,_)),h&&c(0,1),u=d(X,f),L(()=>Q(n,h,"start")),On(A=>{if(a&&A>a.start&&(u=d(a,f),a=null,Q(n,u.b,"start"),_&&(s(),l=sn(n,i,u.b,u.duration,0,g,o.css))),u){if(A>=u.end)c(i=u.b,1-i),Q(n,u.b,"end"),a||(u.b?s():--u.group.r||O(u.group.c)),u=null;else if(A>=u.start){const xn=A-u.start;i=u.a+u.d*g(xn/u.duration),c(i,1-i)}}return!!(u||a)}))}return{run(h){D(o)?Hn().then(()=>{o=o(),b(h)}):b(h)},end(){s(),u=a=null}}}function nn(n){n&&n.c()}function I(n,t,e,r){const{fragment:o,after_update:i}=n.$$;o&&o.m(t,e),r||L(()=>{const u=n.$$.on_mount.map(mn).filter(D);n.$$.on_destroy?n.$$.on_destroy.push(...u):O(u),n.$$.on_mount=[]}),i.forEach(L)}function R(n,t){const e=n.$$;e.fragment!==null&&(O(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Kn(n,t){n.$$.dirty[0]===-1&&(C.push(n),Un(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function K(n,t,e,r,o,i,u,a=[-1]){const l=rn;j(n);const s=n.$$={fragment:null,ctx:[],props:i,update:v,not_equal:o,bound:un(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:un(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};u&&u(s.root);let d=!1;if(s.ctx=e?e(n,t.props||{},(b,h,...p)=>{const f=p.length?p[0]:h;return s.ctx&&o(s.ctx[b],s.ctx[b]=f)&&(!s.skip_bound&&s.bound[b]&&s.bound[b](f),d&&Kn(n,b)),h}):[],s.update(),d=!0,O(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const b=Ln(t.target);s.fragment&&s.fragment.l(b),b.forEach(w)}else s.fragment&&s.fragment.c();t.intro&&E(n.$$.fragment),I(n,t.target,t.anchor,t.customElement),wn()}j(l)}class W{$destroy(){R(this,1),this.$destroy=v}$on(t,e){if(!D(e))return v;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!En(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const N=[];function Wn(n,t=v){let e;const r=new Set;function o(a){if(z(n,a)&&(n=a,e)){const l=!N.length;for(const s of r)s[1](),N.push(s,n);if(l){for(let s=0;s<N.length;s+=2)N[s][0](N[s+1]);N.length=0}}}function i(a){o(a(n))}function u(a,l=v){const s=[a,l];return r.add(s),r.size===1&&(e=t(o)||v),a(n),()=>{r.delete(s),r.size===0&&(e(),e=null)}}return{set:o,update:i,subscribe:u}}const vn=Wn("b2_1"),pn={b2_1:"print('Python is a programming language that lets you work more quickly and integrate your systems more effectively')",b2_3:`print("""
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
    print(t + "trieu dong")`,b9_2:`def api(n):
      pi=1
      a=1
      for i in range(1,n):
            a=a+2
            if i%a==1:
                  pi-=1/a
            else:
                  pi+=1/a
      return(4*pi)
print(round(api(5),6))`,b9_3:`def one():
      print('..#')
      print('.##')
      print('#.#')
      print('..#')
      print('..#')
def two():
      print('###')
      print('..#')
      print('.#.')
      print('#..')
      print('###')
def zero():
      print('###')
      print('#.#')
      print('#.#')
      print('#.#')
      print('###')
def three():
      print('###')
      print('..#')
      print('###')
      print('..#')
      print('###')
two()
zero()
two()
one()

two()
zero()
two()
three()`,b9_4:`def factorial(n):
      s=1
      if n==0 or n==1:
            return s
      else:
            for i in range(1,n+1):
                  s*=i
            return s
a=10
way=factorial(a)
print(way)`,th1_1:`a = float(input('a = '))
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
print(gcd)`},Y={b2_1:"B\xE0i 2 1",b2_3:"B\xE0i 2 3",b2_4:"B\xE0i 2 4",b3_4:"B\xE0i 3 4",b3_5:"B\xE0i 3 5",b4_1:"B\xE0i 4 1",b4_2:"B\xE0i 4 2",b4_3:"B\xE0i 4 3",b4_4:"B\xE0i 4 4",b4_5:"B\xE0i 4 5",b4_6:"B\xE0i 4 6",b6_3:"B\xE0i 6 3",b6_4:"B\xE0i 6 4",b6_5:"B\xE0i 6 5",b6_6:"B\xE0i 6 6",b7_2:"B\xE0i 7 2",b7_3:"B\xE0i 7 3",b7_4:"B\xE0i 7 4",b7_5:"B\xE0i 7 5",b7_6:"B\xE0i 7 6",b7_7:"B\xE0i 7 7",b8_2:"B\xE0i 8 2",b8_3:"B\xE0i 8 3",b9_2:"B\xE0i 9 2",b9_3:"B\xE0i 9 3",b9_4:"B\xE0i 9 4",th1_1:"Th\u1EF1c h\xE0nh 1 1",th1_2:"Th\u1EF1c h\xE0nh 1 2",th1_3:"Th\u1EF1c h\xE0nh 1 3",th1_4:"Th\u1EF1c h\xE0nh 1 4",th1_5:"Th\u1EF1c h\xE0nh 1 5",th1_6:"Th\u1EF1c h\xE0nh 1 6",th2_1:"Th\u1EF1c h\xE0nh 2 1",th2_2:"Th\u1EF1c h\xE0nh 2 2",th2_3:"Th\u1EF1c h\xE0nh 2 3",th2_4:"Th\u1EF1c h\xE0nh 2 4",th2_5:"Th\u1EF1c h\xE0nh 2 5",th2_6:"Th\u1EF1c h\xE0nh 2 6",th2_7:"Th\u1EF1c h\xE0nh 2 7",th2_8:"Th\u1EF1c h\xE0nh 2 8",th2_9:"Th\u1EF1c h\xE0nh 2 9",th3_1_2:"Th\u1EF1c h\xE0nh 3 1",th3_2_1:"Th\u1EF1c h\xE0nh 3 2",th3_2_2:"Th\u1EF1c h\xE0nh 3 2",th3_2_3:"Th\u1EF1c h\xE0nh 3 2",th3_3_2:"Th\u1EF1c h\xE0nh 3 3",th3_3_3:"Th\u1EF1c h\xE0nh 3 3",th4_1:"Th\u1EF1c h\xE0nh 4 1",th4_10:"Th\u1EF1c h\xE0nh 4 10",th4_11:"Th\u1EF1c h\xE0nh 4 11",th4_2:"Th\u1EF1c h\xE0nh 4 2",th4_3:"Th\u1EF1c h\xE0nh 4 3",th4_4:"Th\u1EF1c h\xE0nh 4 4",th4_5:"Th\u1EF1c h\xE0nh 4 5",th4_6:"Th\u1EF1c h\xE0nh 4 6",th4_7:"Th\u1EF1c h\xE0nh 4 7",th4_8:"Th\u1EF1c h\xE0nh 4 8",th4_9:"Th\u1EF1c h\xE0nh 4 9",th6_1_1:"Th\u1EF1c h\xE0nh 6 1",th6_1_2:"Th\u1EF1c h\xE0nh 6 1",th6_1_3:"Th\u1EF1c h\xE0nh 6 1",th6_1_4:"Th\u1EF1c h\xE0nh 6 1",th8_1:"Th\u1EF1c h\xE0nh 8 1",th8_2:"Th\u1EF1c h\xE0nh 8 2"};function Xn(n){let t;return{c(){t=T("X")},m(e,r){x(e,t,r)},d(e){e&&w(t)}}}function Jn(n){let t;return{c(){t=T("\u2630")},m(e,r){x(e,t,r)},d(e){e&&w(t)}}}function Qn(n){let t,e,r;function o(a,l){return a[1]?Xn:Jn}let i=o(n),u=i(n);return{c(){t=y("button"),u.c(),$(t,"class","svelte-czweca")},m(a,l){x(a,t,l),u.m(t,null),e||(r=en(t,"click",function(){D(n[0]())&&n[0]().apply(this,arguments)}),e=!0)},p(a,[l]){n=a,i!==(i=o(n))&&(u.d(1),u=i(n),u&&(u.c(),u.m(t,null)))},i:v,o:v,d(a){a&&w(t),u.d(),e=!1,r()}}}function Zn(n,t,e){let{onToggle:r}=t,{showSidebar:o}=t;return document.addEventListener("keydown",i=>{i.key==="Escape"&&r()}),n.$$set=i=>{"onToggle"in i&&e(0,r=i.onToggle),"showSidebar"in i&&e(1,o=i.showSidebar)},[r,o]}class nt extends W{constructor(t){super(),K(this,t,Zn,Qn,z,{onToggle:0,showSidebar:1})}}function tt(n){const t=n-1;return t*t*t+1}function hn(n,{delay:t=0,duration:e=400,easing:r=tt,axis:o="x"}={}){const i=getComputedStyle(n),u=+i.opacity,a=o==="y"?"height":"width",l=parseFloat(i[a]),s=o==="y"?["top","bottom"]:["left","right"],d=s.map(_=>`${_[0].toUpperCase()}${_.slice(1)}`),b=parseFloat(i[`padding${d[0]}`]),h=parseFloat(i[`padding${d[1]}`]),p=parseFloat(i[`margin${d[0]}`]),f=parseFloat(i[`margin${d[1]}`]),g=parseFloat(i[`border${d[0]}Width`]),c=parseFloat(i[`border${d[1]}Width`]);return{delay:t,duration:e,easing:r,css:_=>`overflow: hidden;opacity: ${Math.min(_*20,1)*u};${a}: ${_*l}px;padding-${s[0]}: ${_*b}px;padding-${s[1]}: ${_*h}px;margin-${s[0]}: ${_*p}px;margin-${s[1]}: ${_*f}px;border-${s[0]}-width: ${_*g}px;border-${s[1]}-width: ${_*c}px;`}}function _n(n,t,e){const r=n.slice();return r[5]=t[e],r}function dn(n){let t,e,r,o,i,u,a,l,s,d,b,h=Object.keys(Y),p=[];for(let f=0;f<h.length;f+=1)p[f]=bn(_n(n,h,f));return{c(){t=y("nav"),e=y("ul");for(let f=0;f<p.length;f+=1)p[f].c();r=S(),o=y("li"),i=y("button"),i.textContent="About",u=S(),a=y("a"),a.textContent="wah",$(i,"class","svelte-nl9u2e"),$(a,"href","https://gawgua.github.io"),$(a,"class","svelte-nl9u2e"),an(a,"visibility",n[0]?"visible":"hidden",!1),$(o,"class","svelte-nl9u2e"),$(e,"class","svelte-nl9u2e"),$(t,"class","svelte-nl9u2e")},m(f,g){x(f,t,g),m(t,e);for(let c=0;c<p.length;c+=1)p[c].m(e,null);m(e,r),m(e,o),m(o,i),m(o,u),m(o,a),s=!0,d||(b=en(i,"click",n[4]),d=!0)},p(f,g){if(g&8){h=Object.keys(Y);let c;for(c=0;c<h.length;c+=1){const _=_n(f,h,c);p[c]?p[c].p(_,g):(p[c]=bn(_),p[c].c(),p[c].m(e,r))}for(;c<p.length;c+=1)p[c].d(1);p.length=h.length}g&1&&an(a,"visibility",f[0]?"visible":"hidden",!1)},i(f){s||(L(()=>{l||(l=cn(t,hn,{duration:500},!0)),l.run(1)}),s=!0)},o(f){l||(l=cn(t,hn,{duration:500},!1)),l.run(0),s=!1},d(f){f&&w(t),jn(p,f),f&&l&&l.end(),d=!1,b()}}}function bn(n){let t,e,r=Y[n[5]]+"",o,i,u;return{c(){t=y("li"),e=y("button"),o=T(r),$(e,"id",n[5]),$(e,"class","svelte-nl9u2e"),$(t,"class","svelte-nl9u2e")},m(a,l){x(a,t,l),m(t,e),m(e,o),i||(u=en(e,"click",n[3]),i=!0)},p:v,d(a){a&&w(t),i=!1,u()}}}function et(n){let t,e,r,o;t=new nt({props:{onToggle:n[2],showSidebar:n[1]}});let i=n[1]&&dn(n);return{c(){nn(t.$$.fragment),e=S(),i&&i.c(),r=Fn()},m(u,a){I(t,u,a),x(u,e,a),i&&i.m(u,a),x(u,r,a),o=!0},p(u,[a]){const l={};a&2&&(l.showSidebar=u[1]),t.$set(l),u[1]?i?(i.p(u,a),a&2&&E(i,1)):(i=dn(u),i.c(),E(i,1),i.m(r.parentNode,r)):i&&(In(),F(i,1,1,()=>{i=null}),Rn())},i(u){o||(E(t.$$.fragment,u),E(i),o=!0)},o(u){F(t.$$.fragment,u),F(i),o=!1},d(u){R(t,u),u&&w(e),i&&i.d(u),u&&w(r)}}}function it(n,t,e){let r=!1,o=!0,i=()=>{e(1,o=!o)};function u(l){vn.update(s=>l.target.id)}return[r,o,i,u,()=>e(0,r=!r)]}class rt extends W{constructor(t){super(),K(this,t,it,et,z,{})}}function ut(n){let t,e,r,o,i,u,a=Y[`${n[0]}`]+"",l,s,d,b,h,p=pn[`${n[0]}`]+"",f,g;return{c(){t=y("link"),e=y("script"),o=S(),i=y("div"),u=y("h1"),l=T(a),s=S(),d=y("pre"),b=T(` \r
		`),h=y("code"),f=T(p),g=T(`\r
	`),$(t,"href","./prism/prism.css"),$(t,"rel","stylesheet"),kn(e.src,r="./prism/prism.js")||$(e,"src",r),e.defer=!0,$(u,"class","svelte-14905bz"),$(i,"class","svelte-14905bz")},m(c,_){m(document.head,t),m(document.head,e),x(c,o,_),x(c,i,_),m(i,u),m(u,l),m(i,s),m(i,d),m(d,b),m(d,h),m(h,f),m(d,g)},p(c,[_]){_&1&&a!==(a=Y[`${c[0]}`]+"")&&on(l,a),_&1&&p!==(p=pn[`${c[0]}`]+"")&&on(f,p)},i:v,o:v,d(c){w(t),w(e),c&&w(o),c&&w(i)}}}function ot(n,t,e){let{index:r}=t;return n.$$set=o=>{"index"in o&&e(0,r=o.index)},[r]}class at extends W{constructor(t){super(),K(this,t,ot,ut,z,{index:0})}}function st(n){let t,e,r,o,i,u;return r=new rt({}),i=new at({props:{index:n[0]}}),{c(){t=y("main"),e=y("div"),nn(r.$$.fragment),o=S(),nn(i.$$.fragment),$(e,"class","sidebar")},m(a,l){x(a,t,l),m(t,e),I(r,e,null),m(t,o),I(i,t,null),u=!0},p(a,[l]){const s={};l&1&&(s.index=a[0]),i.$set(s)},i(a){u||(E(r.$$.fragment,a),E(i.$$.fragment,a),u=!0)},o(a){F(r.$$.fragment,a),F(i.$$.fragment,a),u=!1},d(a){a&&w(t),R(r),R(i)}}}function lt(n,t,e){let r;return Bn(n,vn,o=>e(0,r=o)),[r]}class ft extends W{constructor(t){super(),K(this,t,lt,st,z,{})}}new ft({target:document.getElementById("app")});
