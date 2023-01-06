(function(){const t=document.createElement("link").relList;if(t&&t.supports&&t.supports("modulepreload"))return;for(const o of document.querySelectorAll('link[rel="modulepreload"]'))r(o);new MutationObserver(o=>{for(const i of o)if(i.type==="childList")for(const u of i.addedNodes)u.tagName==="LINK"&&u.rel==="modulepreload"&&r(u)}).observe(document,{childList:!0,subtree:!0});function e(o){const i={};return o.integrity&&(i.integrity=o.integrity),o.referrerpolicy&&(i.referrerPolicy=o.referrerpolicy),o.crossorigin==="use-credentials"?i.credentials="include":o.crossorigin==="anonymous"?i.credentials="omit":i.credentials="same-origin",i}function r(o){if(o.ep)return;o.ep=!0;const i=e(o);fetch(o.href,i)}})();function w(){}const vn=n=>n;function mn(n){return n()}function un(){return Object.create(null)}function O(n){n.forEach(mn)}function R(n){return typeof n=="function"}function A(n,t){return n!=n?t==t:n!==t||n&&typeof n=="object"||typeof n=="function"}let P;function Tn(n,t){return P||(P=document.createElement("a")),P.href=t,n===P.href}function Bn(n){return Object.keys(n).length===0}function En(n,...t){if(n==null)return w;const e=n.subscribe(...t);return e.unsubscribe?()=>e.unsubscribe():e}function Nn(n,t,e){n.$$.on_destroy.push(En(t,e))}const gn=typeof window<"u";let Sn=gn?()=>window.performance.now():()=>Date.now(),tn=gn?n=>requestAnimationFrame(n):w;const N=new Set;function yn(n){N.forEach(t=>{t.c(n)||(N.delete(t),t.f())}),N.size!==0&&tn(yn)}function On(n){let t;return N.size===0&&tn(yn),{promise:new Promise(e=>{N.add(t={c:n,f:e})}),abort(){N.delete(t)}}}function m(n,t){n.appendChild(t)}function $n(n){if(!n)return document;const t=n.getRootNode?n.getRootNode():n.ownerDocument;return t&&t.host?t:n.ownerDocument}function qn(n){const t=y("style");return Cn($n(n),t),t.sheet}function Cn(n,t){return m(n.head||n,t),t.sheet}function k(n,t,e){n.insertBefore(t,e||null)}function x(n){n.parentNode.removeChild(n)}function jn(n,t){for(let e=0;e<n.length;e+=1)n[e]&&n[e].d(t)}function y(n){return document.createElement(n)}function B(n){return document.createTextNode(n)}function S(){return B(" ")}function Fn(){return B("")}function en(n,t,e,r){return n.addEventListener(t,e,r),()=>n.removeEventListener(t,e,r)}function g(n,t,e){e==null?n.removeAttribute(t):n.getAttribute(t)!==e&&n.setAttribute(t,e)}function Ln(n){return Array.from(n.childNodes)}function on(n,t){t=""+t,n.wholeText!==t&&(n.data=t)}function an(n,t,e,r){e===null?n.style.removeProperty(t):n.style.setProperty(t,e,r?"important":"")}function Yn(n,t,{bubbles:e=!1,cancelable:r=!1}={}){const o=document.createEvent("CustomEvent");return o.initCustomEvent(n,e,r,t),o}const D=new Map;let V=0;function An(n){let t=5381,e=n.length;for(;e--;)t=(t<<5)-t^n.charCodeAt(e);return t>>>0}function zn(n,t){const e={stylesheet:qn(t),rules:{}};return D.set(n,e),e}function sn(n,t,e,r,o,i,u,a=0){const l=16.666/r;let s=`{
`;for(let _=0;_<=1;_+=l){const b=t+(e-t)*i(_);s+=_*100+`%{${u(b,1-b)}}
`}const d=s+`100% {${u(e,1-e)}}
}`,h=`__svelte_${An(d)}_${a}`,p=$n(n),{stylesheet:f,rules:c}=D.get(p)||zn(p,n);c[h]||(c[h]=!0,f.insertRule(`@keyframes ${h} ${d}`,f.cssRules.length));const $=n.style.animation||"";return n.style.animation=`${$?`${$}, `:""}${h} ${r}ms linear ${o}ms 1 both`,V+=1,h}function Pn(n,t){const e=(n.style.animation||"").split(", "),r=e.filter(t?i=>i.indexOf(t)<0:i=>i.indexOf("__svelte")===-1),o=e.length-r.length;o&&(n.style.animation=r.join(", "),V-=o,V||Gn())}function Gn(){tn(()=>{V||(D.forEach(n=>{const{ownerNode:t}=n.stylesheet;t&&x(t)}),D.clear())})}let rn;function j(n){rn=n}const C=[],ln=[],M=[],cn=[],Mn=Promise.resolve();let Z=!1;function Un(){Z||(Z=!0,Mn.then(xn))}function L(n){M.push(n)}const J=new Set;let G=0;function xn(){const n=rn;do{for(;G<C.length;){const t=C[G];G++,j(t),Dn(t.$$)}for(j(null),C.length=0,G=0;ln.length;)ln.pop()();for(let t=0;t<M.length;t+=1){const e=M[t];J.has(e)||(J.add(e),e())}M.length=0}while(C.length);for(;cn.length;)cn.pop()();Z=!1,J.clear(),j(n)}function Dn(n){if(n.fragment!==null){n.update(),O(n.before_update);const t=n.dirty;n.dirty=[-1],n.fragment&&n.fragment.p(n.ctx,t),n.after_update.forEach(L)}}let q;function Vn(){return q||(q=Promise.resolve(),q.then(()=>{q=null})),q}function Q(n,t,e){n.dispatchEvent(Yn(`${t?"intro":"outro"}${e}`))}const U=new Set;let v;function Hn(){v={r:0,c:[],p:v}}function In(){v.r||O(v.c),v=v.p}function T(n,t){n&&n.i&&(U.delete(n),n.i(t))}function F(n,t,e,r){if(n&&n.o){if(U.has(n))return;U.add(n),v.c.push(()=>{U.delete(n),r&&(e&&n.d(1),r())}),n.o(t)}else r&&r()}const Rn={duration:0};function fn(n,t,e,r){let o=t(n,e),i=r?0:1,u=null,a=null,l=null;function s(){l&&Pn(n,l)}function d(p,f){const c=p.b-i;return f*=Math.abs(c),{a:i,b:p.b,d:c,duration:f,start:p.start,end:p.start+f,group:p.group}}function h(p){const{delay:f=0,duration:c=300,easing:$=vn,tick:_=w,css:b}=o||Rn,X={start:Sn()+f,b:p};p||(X.group=v,v.r+=1),u||a?a=X:(b&&(s(),l=sn(n,i,p,c,f,$,b)),p&&_(0,1),u=d(X,c),L(()=>Q(n,p,"start")),On(z=>{if(a&&z>a.start&&(u=d(a,c),a=null,Q(n,u.b,"start"),b&&(s(),l=sn(n,i,u.b,u.duration,0,$,o.css))),u){if(z>=u.end)_(i=u.b,1-i),Q(n,u.b,"end"),a||(u.b?s():--u.group.r||O(u.group.c)),u=null;else if(z>=u.start){const kn=z-u.start;i=u.a+u.d*$(kn/u.duration),_(i,1-i)}}return!!(u||a)}))}return{run(p){R(o)?Vn().then(()=>{o=o(),h(p)}):h(p)},end(){s(),u=a=null}}}function nn(n){n&&n.c()}function H(n,t,e,r){const{fragment:o,after_update:i}=n.$$;o&&o.m(t,e),r||L(()=>{const u=n.$$.on_mount.map(mn).filter(R);n.$$.on_destroy?n.$$.on_destroy.push(...u):O(u),n.$$.on_mount=[]}),i.forEach(L)}function I(n,t){const e=n.$$;e.fragment!==null&&(O(e.on_destroy),e.fragment&&e.fragment.d(t),e.on_destroy=e.fragment=null,e.ctx=[])}function Kn(n,t){n.$$.dirty[0]===-1&&(C.push(n),Un(),n.$$.dirty.fill(0)),n.$$.dirty[t/31|0]|=1<<t%31}function K(n,t,e,r,o,i,u,a=[-1]){const l=rn;j(n);const s=n.$$={fragment:null,ctx:[],props:i,update:w,not_equal:o,bound:un(),on_mount:[],on_destroy:[],on_disconnect:[],before_update:[],after_update:[],context:new Map(t.context||(l?l.$$.context:[])),callbacks:un(),dirty:a,skip_bound:!1,root:t.target||l.$$.root};u&&u(s.root);let d=!1;if(s.ctx=e?e(n,t.props||{},(h,p,...f)=>{const c=f.length?f[0]:p;return s.ctx&&o(s.ctx[h],s.ctx[h]=c)&&(!s.skip_bound&&s.bound[h]&&s.bound[h](c),d&&Kn(n,h)),p}):[],s.update(),d=!0,O(s.before_update),s.fragment=r?r(s.ctx):!1,t.target){if(t.hydrate){const h=Ln(t.target);s.fragment&&s.fragment.l(h),h.forEach(x)}else s.fragment&&s.fragment.c();t.intro&&T(n.$$.fragment),H(n,t.target,t.anchor,t.customElement),xn()}j(l)}class W{$destroy(){I(this,1),this.$destroy=w}$on(t,e){if(!R(e))return w;const r=this.$$.callbacks[t]||(this.$$.callbacks[t]=[]);return r.push(e),()=>{const o=r.indexOf(e);o!==-1&&r.splice(o,1)}}$set(t){this.$$set&&!Bn(t)&&(this.$$.skip_bound=!0,this.$$set(t),this.$$.skip_bound=!1)}}const E=[];function Wn(n,t=w){let e;const r=new Set;function o(a){if(A(n,a)&&(n=a,e)){const l=!E.length;for(const s of r)s[1](),E.push(s,n);if(l){for(let s=0;s<E.length;s+=2)E[s][0](E[s+1]);E.length=0}}}function i(a){o(a(n))}function u(a,l=w){const s=[a,l];return r.add(s),r.size===1&&(e=t(o)||w),a(n),()=>{r.delete(s),r.size===0&&(e(),e=null)}}return{set:o,update:i,subscribe:u}}const wn=Wn("b2_1"),pn={b10_2:`from math import sqrt

def Distance(xa, ya, xb, yb):
    return sqrt((xb - xa) ** 2 + (yb - ya) ** 2)

xa, ya, xb, yb = map(float, input().split())
print(Distance(xa, ya, xb, yb))`,b10_3:`def drawBox(a):
    print("**********")
    for i in range(a - 2):
       print("*        *") 
    print("**********")

drawBox(int(input()))`,"b10_4^":"",b11_3:`n = input()
for char in n:
    print(char)`,b2_1:"print('Python is a programming language that lets you work more quickly and integrate your systems more effectively')",b2_3:`print("""
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
    print("NO")`,"th5_1^":`from math import gcd

n = int(input())`,th6_1_1:`s = input()

if s == s[::-1]:
    print("YES")
else:
    print("NO")`,th6_1_2:`s = input()

if s.find("Covid-19") != -1:
    print("YES")
else:
    print("NO")`,th6_1_3:`s = input()
print(len(s))`,"th6_1_4^":"",th6_2_2:`s = input()
print(s[::-1])`,th6_2_3:`s = input()
print("so chu so '0':", s.count("0"))
print("so chu so '1':", s.count("1"))
print("so chu so '2':", s.count("2"))
print("so chu so '3':", s.count("3"))
print("so chu so '4':", s.count("4"))
print("so chu so '5':", s.count("5"))
print("so chu so '6':", s.count("6"))
print("so chu so '7':", s.count("7"))
print("so chu so '8':", s.count("8"))
print("so chu so '9':", s.count("9"))`,th6_2_4:`s = input()
print(s.find(" "))`,th6_2_5:`s = input()
for index, char in enumerate(s):
    if char == "a":
        print(index, end=" ")
    
print(f"\\n{s.count('a')}")`,th6_2_6:`s = input()
l = s.split()
print(len(l))
for word in l:
    print(word)`,th6_2_7:`s = input()
print(s.upper())`,th8_1:`def fib(n):
 
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
print(gcd)`},Y={b10_2:"B\xE0i 1 2",b10_3:"B\xE0i 1 3","b10_4^":"B\xE0i 1 4^",b11_3:"B\xE0i 1 3",b2_1:"B\xE0i 2 1",b2_3:"B\xE0i 2 3",b2_4:"B\xE0i 2 4",b3_4:"B\xE0i 3 4",b3_5:"B\xE0i 3 5",b4_1:"B\xE0i 4 1",b4_2:"B\xE0i 4 2",b4_3:"B\xE0i 4 3",b4_4:"B\xE0i 4 4",b4_5:"B\xE0i 4 5",b4_6:"B\xE0i 4 6",b6_3:"B\xE0i 6 3",b6_4:"B\xE0i 6 4",b6_5:"B\xE0i 6 5",b6_6:"B\xE0i 6 6",b7_2:"B\xE0i 7 2",b7_3:"B\xE0i 7 3",b7_4:"B\xE0i 7 4",b7_5:"B\xE0i 7 5",b7_6:"B\xE0i 7 6",b7_7:"B\xE0i 7 7",b8_2:"B\xE0i 8 2",b8_3:"B\xE0i 8 3",b9_2:"B\xE0i 9 2",b9_3:"B\xE0i 9 3",b9_4:"B\xE0i 9 4",th1_1:"Th\u1EF1c h\xE0nh 1 1",th1_2:"Th\u1EF1c h\xE0nh 1 2",th1_3:"Th\u1EF1c h\xE0nh 1 3",th1_4:"Th\u1EF1c h\xE0nh 1 4",th1_5:"Th\u1EF1c h\xE0nh 1 5",th1_6:"Th\u1EF1c h\xE0nh 1 6",th2_1:"Th\u1EF1c h\xE0nh 2 1",th2_2:"Th\u1EF1c h\xE0nh 2 2",th2_3:"Th\u1EF1c h\xE0nh 2 3",th2_4:"Th\u1EF1c h\xE0nh 2 4",th2_5:"Th\u1EF1c h\xE0nh 2 5",th2_6:"Th\u1EF1c h\xE0nh 2 6",th2_7:"Th\u1EF1c h\xE0nh 2 7",th2_8:"Th\u1EF1c h\xE0nh 2 8",th2_9:"Th\u1EF1c h\xE0nh 2 9",th3_1_2:"Th\u1EF1c h\xE0nh 3 1",th3_2_1:"Th\u1EF1c h\xE0nh 3 2",th3_2_2:"Th\u1EF1c h\xE0nh 3 2",th3_2_3:"Th\u1EF1c h\xE0nh 3 2",th3_3_2:"Th\u1EF1c h\xE0nh 3 3",th3_3_3:"Th\u1EF1c h\xE0nh 3 3",th4_1:"Th\u1EF1c h\xE0nh 4 1",th4_10:"Th\u1EF1c h\xE0nh 4 10",th4_11:"Th\u1EF1c h\xE0nh 4 11",th4_2:"Th\u1EF1c h\xE0nh 4 2",th4_3:"Th\u1EF1c h\xE0nh 4 3",th4_4:"Th\u1EF1c h\xE0nh 4 4",th4_5:"Th\u1EF1c h\xE0nh 4 5",th4_6:"Th\u1EF1c h\xE0nh 4 6",th4_7:"Th\u1EF1c h\xE0nh 4 7",th4_8:"Th\u1EF1c h\xE0nh 4 8",th4_9:"Th\u1EF1c h\xE0nh 4 9","th5_1^":"Th\u1EF1c h\xE0nh 5 1^",th6_1_1:"Th\u1EF1c h\xE0nh 6 1",th6_1_2:"Th\u1EF1c h\xE0nh 6 1",th6_1_3:"Th\u1EF1c h\xE0nh 6 1","th6_1_4^":"Th\u1EF1c h\xE0nh 6 1",th6_2_2:"Th\u1EF1c h\xE0nh 6 2",th6_2_3:"Th\u1EF1c h\xE0nh 6 2",th6_2_4:"Th\u1EF1c h\xE0nh 6 2",th6_2_5:"Th\u1EF1c h\xE0nh 6 2",th6_2_6:"Th\u1EF1c h\xE0nh 6 2",th6_2_7:"Th\u1EF1c h\xE0nh 6 2",th8_1:"Th\u1EF1c h\xE0nh 8 1",th8_2:"Th\u1EF1c h\xE0nh 8 2"};function Xn(n){let t;return{c(){t=B("X")},m(e,r){k(e,t,r)},d(e){e&&x(t)}}}function Jn(n){let t;return{c(){t=B("\u2630")},m(e,r){k(e,t,r)},d(e){e&&x(t)}}}function Qn(n){let t,e,r;function o(a,l){return a[1]?Xn:Jn}let i=o(n),u=i(n);return{c(){t=y("button"),u.c(),g(t,"class","svelte-czweca")},m(a,l){k(a,t,l),u.m(t,null),e||(r=en(t,"click",function(){R(n[0]())&&n[0]().apply(this,arguments)}),e=!0)},p(a,[l]){n=a,i!==(i=o(n))&&(u.d(1),u=i(n),u&&(u.c(),u.m(t,null)))},i:w,o:w,d(a){a&&x(t),u.d(),e=!1,r()}}}function Zn(n,t,e){let{onToggle:r}=t,{showSidebar:o}=t;return document.addEventListener("keydown",i=>{i.key==="Escape"&&r()}),n.$$set=i=>{"onToggle"in i&&e(0,r=i.onToggle),"showSidebar"in i&&e(1,o=i.showSidebar)},[r,o]}class nt extends W{constructor(t){super(),K(this,t,Zn,Qn,A,{onToggle:0,showSidebar:1})}}function tt(n){const t=n-1;return t*t*t+1}function hn(n,{delay:t=0,duration:e=400,easing:r=tt,axis:o="x"}={}){const i=getComputedStyle(n),u=+i.opacity,a=o==="y"?"height":"width",l=parseFloat(i[a]),s=o==="y"?["top","bottom"]:["left","right"],d=s.map(b=>`${b[0].toUpperCase()}${b.slice(1)}`),h=parseFloat(i[`padding${d[0]}`]),p=parseFloat(i[`padding${d[1]}`]),f=parseFloat(i[`margin${d[0]}`]),c=parseFloat(i[`margin${d[1]}`]),$=parseFloat(i[`border${d[0]}Width`]),_=parseFloat(i[`border${d[1]}Width`]);return{delay:t,duration:e,easing:r,css:b=>`overflow: hidden;opacity: ${Math.min(b*20,1)*u};${a}: ${b*l}px;padding-${s[0]}: ${b*h}px;padding-${s[1]}: ${b*p}px;margin-${s[0]}: ${b*f}px;margin-${s[1]}: ${b*c}px;border-${s[0]}-width: ${b*$}px;border-${s[1]}-width: ${b*_}px;`}}function _n(n,t,e){const r=n.slice();return r[5]=t[e],r}function dn(n){let t,e,r,o,i,u,a,l,s,d,h,p=Object.keys(Y),f=[];for(let c=0;c<p.length;c+=1)f[c]=bn(_n(n,p,c));return{c(){t=y("nav"),e=y("ul");for(let c=0;c<f.length;c+=1)f[c].c();r=S(),o=y("li"),i=y("button"),i.textContent="About",u=S(),a=y("a"),a.textContent="wah",g(i,"class","svelte-2kk6pi"),g(a,"href","https://gawgua.github.io"),g(a,"class","svelte-2kk6pi"),an(a,"visibility",n[0]?"visible":"hidden",!1),g(o,"class","svelte-2kk6pi"),g(e,"class","svelte-2kk6pi"),g(t,"class","svelte-2kk6pi")},m(c,$){k(c,t,$),m(t,e);for(let _=0;_<f.length;_+=1)f[_].m(e,null);m(e,r),m(e,o),m(o,i),m(o,u),m(o,a),s=!0,d||(h=en(i,"click",n[4]),d=!0)},p(c,$){if($&8){p=Object.keys(Y);let _;for(_=0;_<p.length;_+=1){const b=_n(c,p,_);f[_]?f[_].p(b,$):(f[_]=bn(b),f[_].c(),f[_].m(e,r))}for(;_<f.length;_+=1)f[_].d(1);f.length=p.length}$&1&&an(a,"visibility",c[0]?"visible":"hidden",!1)},i(c){s||(L(()=>{l||(l=fn(t,hn,{duration:500},!0)),l.run(1)}),s=!0)},o(c){l||(l=fn(t,hn,{duration:500},!1)),l.run(0),s=!1},d(c){c&&x(t),jn(f,c),c&&l&&l.end(),d=!1,h()}}}function bn(n){let t,e,r=Y[n[5]]+"",o,i,u;return{c(){t=y("li"),e=y("button"),o=B(r),g(e,"id",n[5]),g(e,"class","svelte-2kk6pi"),g(t,"class","svelte-2kk6pi")},m(a,l){k(a,t,l),m(t,e),m(e,o),i||(u=en(e,"click",n[3]),i=!0)},p:w,d(a){a&&x(t),i=!1,u()}}}function et(n){let t,e,r,o;t=new nt({props:{onToggle:n[2],showSidebar:n[1]}});let i=n[1]&&dn(n);return{c(){nn(t.$$.fragment),e=S(),i&&i.c(),r=Fn()},m(u,a){H(t,u,a),k(u,e,a),i&&i.m(u,a),k(u,r,a),o=!0},p(u,[a]){const l={};a&2&&(l.showSidebar=u[1]),t.$set(l),u[1]?i?(i.p(u,a),a&2&&T(i,1)):(i=dn(u),i.c(),T(i,1),i.m(r.parentNode,r)):i&&(Hn(),F(i,1,1,()=>{i=null}),In())},i(u){o||(T(t.$$.fragment,u),T(i),o=!0)},o(u){F(t.$$.fragment,u),F(i),o=!1},d(u){I(t,u),u&&x(e),i&&i.d(u),u&&x(r)}}}function it(n,t,e){let r=!1,o=!0,i=()=>{e(1,o=!o)};function u(l){wn.update(s=>l.target.id)}return[r,o,i,u,()=>e(0,r=!r)]}class rt extends W{constructor(t){super(),K(this,t,it,et,A,{})}}function ut(n){let t,e,r,o,i,u,a=Y[`${n[0]}`]+"",l,s,d,h=pn[`${n[0]}`]+"",p;return{c(){t=y("link"),e=y("script"),o=S(),i=y("div"),u=y("h1"),l=B(a),s=S(),d=y("code"),p=B(h),g(t,"href","./prism/prism.css"),g(t,"rel","stylesheet"),Tn(e.src,r="./prism/prism.js")||g(e,"src",r),e.defer=!0,g(u,"class","svelte-dbt2bw"),g(i,"class","box svelte-dbt2bw")},m(f,c){m(document.head,t),m(document.head,e),k(f,o,c),k(f,i,c),m(i,u),m(u,l),m(i,s),m(i,d),m(d,p)},p(f,[c]){c&1&&a!==(a=Y[`${f[0]}`]+"")&&on(l,a),c&1&&h!==(h=pn[`${f[0]}`]+"")&&on(p,h)},i:w,o:w,d(f){x(t),x(e),f&&x(o),f&&x(i)}}}function ot(n,t,e){let{index:r}=t;return n.$$set=o=>{"index"in o&&e(0,r=o.index)},[r]}class at extends W{constructor(t){super(),K(this,t,ot,ut,A,{index:0})}}function st(n){let t,e,r,o,i,u;return r=new rt({}),i=new at({props:{index:n[0]}}),{c(){t=y("main"),e=y("div"),nn(r.$$.fragment),o=S(),nn(i.$$.fragment),g(e,"class","sidebar")},m(a,l){k(a,t,l),m(t,e),H(r,e,null),m(t,o),H(i,t,null),u=!0},p(a,[l]){const s={};l&1&&(s.index=a[0]),i.$set(s)},i(a){u||(T(r.$$.fragment,a),T(i.$$.fragment,a),u=!0)},o(a){F(r.$$.fragment,a),F(i.$$.fragment,a),u=!1},d(a){a&&x(t),I(r),I(i)}}}function lt(n,t,e){let r;return Nn(n,wn,o=>e(0,r=o)),[r]}class ct extends W{constructor(t){super(),K(this,t,lt,st,A,{})}}new ct({target:document.getElementById("app")});
