export const code = {
	b2_1: "print('Python is a programming language that lets you work more quickly and integrate your systems more effectively')",
	b2_3: 'print("""\n**********\n*        *\n*        *\n**********\n""")',
	b2_4: "print('Goodbye\\n')\nprint('See you again')",
	b3_4: "from math import pi\n\nr = 5\ndien_tich = pi * r ** 2\n\nprint(f'{dien_tich:0.2f}')",
	b3_5: "from math import sqrt\n\na = 5\nb = 6\n\ncanh_huyen = sqrt(a**2 + b ** 2)\n\nprint(f'{canh_huyen:0.2f}')",
	b4_1: "a = int(input())\nb = int(input())\n\nchu_vi = (a+b) * 2\ndien_tich = a * b\n\nprint(chu_vi)\nprint(dien_tich)",
	b4_2: "x = int(input())\n\nket_qua = x**10 + x**5 + 1\nprint(ket_qua)",
	b4_3: "a = int(input())\nb = int(input())\n\nket_qua = a**3 + b**3 + a*b\n\nprint(ket_qua)",
	b4_4: "from math import sqrt\n\nh = int(input())\ng = 9.8\n\nv = sqrt(2*g*h)\n\nprint(v)",
	b4_5: "from math import sqrt\n\nx = int(input())\ny = int(input())\n\nkhoang_cach = sqrt(x**2 + y**2)\n\nprint(khoang_cach)",
	b4_6: "from math import sqrt\n\n\na = float(input())\nb = float(input())\nc = float(input())\n\np = (a + b + c) / 2\n\ns = sqrt(p * (p-a) * (p-b) * (p-c))\n\nprint(s)",
	b6_3: "a = int(input('a = '))\nabsVal = a\n\nif a < 0:\n    absVal = -absVal\n\nprint('Gia tri tuyet doi bang', absVal)",
	b6_4: "a = float(input('a = '))\nb = float(input('b = '))\nc = float(input('c = '))\n\nif a > 0 and b > 0 and c > 0:\n    print('Ca ba so deu duong')",
	b6_5: "n = int(input())\nm = int(input())\n\nif n % m == 0:\n    print('YES')\nelse:\n    print('NO')",
	b6_6: "a = float(input())\nb = float(input())\nc = float(input())\n\nif (a + b >= c) or (a + c >= b) or (b + c >= a):\n    print('YES')\nelse:\n    print(\"NO\")",
	b7_2: "a = int(input())\n\nif a >= 100:\n    print('NO')\n    exit()\n\nprint('YES')",
	b7_3: "a = float(input('a = '))\nb = float(input('b = '))\nc = float(input('c = '))\n\nif not ((a > 0) and (b > 0) and (c > 0) and (a + b > c) and (a + c > b) and (b + c > a)):\n    print('KHONG')\nelif ((a**2 + b**2 == c**2) or (a**2 + c**2 == b**2) or (b**2 + c**2 == a**2)):\n    print('VUONG')\nelse:\n    print('CO')",
	b7_4: "x = int(input())\ny = int(input())\n\nif x > y:\n    print(x**2)\nelif x == y:\n    print(x + y)\nelif x < y:\n    print(y ** 2)",
	b7_5: "x = int(input())\n\nif x % 2 == 0:\n    print('CHAN')\nelse:\n    print('LE')",
	b7_6: "x = float(input())\n\nif x >= 8.0:\n    print('GIOI')\nelif x >= 6.5:\n    print('KHA')\nelif x >= 5.0:\n    print('TRUNG BINH')\nelse:\n    print('YEU')",
	b7_7: "x = int(input())\n\nif 1 <= x < 51:\n    tien = 1678 * x\n\nelif 51 <= x < 101:\n    tien = 83900 + (x - 50) * 1734\n\nelif 101 <= x < 201:\n    tien = 170600 + (x - 100) * 2014\n\nelif 201 <= x < 300:\n    tien = 372000 + (x - 200) * 2536\n\nelif 301 <= x < 401:\n    tien = 625600 + (x - 300) * 2834\n\nelif x >= 401:\n    tien = 909000 + (x - 400) * 2927\n\nprint(tien)",
	b8_2: "n = int(input())\ndays = 0\n\nwhile n < 1_000_000:\n    n *= 2\n    days += 1\n\nprint(days)",
	b8_3: 't = float(input())\n\nfor i in range(0, 10):\n    t += t * 0.07\n    print(t + "trieu dong")',
	th1_1:
		"a = float(input('a = '))\nb = float(input('b = '))\n\nprint(f'Nghi\u1ec7m c\u1ee7a ph\u01b0\u01a1ng tr\u00ecnh l\u00e0: {-b / a}')",
	th1_2: "from math import sqrt\n\na = float(input())\nb = float(input())\n\nket_qua = sqrt(-b / a)\n\nprint(ket_qua)",
	th1_3: "n = int(input())\na = n // 10\nb = n % 10\n\nprint(f'Tong cac chu so cua so {n} bang {a + b}')",
	th1_4: "a = list(map(int, input()))\n\ntotal = 0\nfor i in a:\n    total += i\n\nprint(total)",
	th1_5: "a = int(input())\n\ntotal = 0\n\nfor i in range(1, a + 1):\n    total += i\n\nprint(total)",
	th1_6:
		"m = int(input())\nn = int(input())\n\nso_o = m * n\ntong = 0\nso_hat_o_sau = 1\n\nfor i in range(1, so_o + 1):\n    tong += so_hat_o_sau\n    so_hat_o_sau = so_hat_o_sau * 2\n\nprint(tong)",
	th2_1:
		"a = float(input())\nb = float(input())\nc = float(input())\nd = float(input())\n\nif (b >= c and a <= c) or (d >= a and c <= a):\n    print('YES')\nelse:\n    print('NO')",
	th2_2: "a = int(input())\nb = int(input())\n\nif a > b:\n    print(a)\nelse:\n    print(b)",
	th2_3:
		"a = int(input())\nb = int(input())\nc = int(input())\n\nif a < b < c or b < a < c:\n    print(c)\nelif b < c < a or c < b < a:\n    print(a)\nelif a < c < b or c < a < b:\n    print(b)",
	th2_4:
		"p = int(input())\nq = int(input())\nr = int(input())\n\na = q / p\nif q * a == r:\n    print('YES')\nelse:\n    print('NO')",
	th2_5:
		"m, n, k = map(int, input().split())\n\na= m * n * k\nif a % 10 == 0 and not a // 10 < 10:\n    print('YES')\nelse:\n    print('NO')",
	th2_6:
		"year = int(input())\n\nif year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):\n    print(366)\n\nelse:\n    print(365)",
	th2_7:
		"month = int(input())\nyear = int(input())\n\nisLeap = False\n\nif year % 400 == 0 or (year % 4 == 0 and year % 100 != 0):\n    isLeap = True\nelse:\n    isLeap = False\n\nif month == 2:\n    if isLeap:\n        print(29)\n    else:\n        print(28)\nelif month in [1, 3, 5, 7, 8, 10, 12]:\n    print(31)\nelse:\n    print(30)",
	th2_8: "a = input()\n\nif a.lower() != a.upper():\n    print('YES')\nelse:\n    print('NO')",
	th2_9:
		'a = int(input())\nb = int(input())\nc = int(input())\n\nif (a + b >= c) or (a + c >= b) or (b + c >= a):\n    if a == b and b == c:\n        print("DEU")\n    elif a == b or b == c or a == c:\n        print("CAN")\n    elif (a**2 + b**2 == c**2) or (a**2 + c**2 == b**2) or (c**2 + b**2 == a**2):\n        print("VUONG")\n    else:\n        print("THUONG")',
	th3_1_2: "n = int(input('n = '))\n\nfor i in range(1, 11):\n    print(f\"{n} x {i} = {n * i}\")",
	th3_2_1:
		"pi = 1\na = 1\nfor i in range(1, 1000000):\n    a = a + 2\n    if i % 2 == 1:\n        pi -= 1 / a\n    else:\n        pi += 1 / a\n\nprint(4 * pi)",
	th3_2_2:
		"from math import factorial\n\ne = 2\nn = int(input())\n\nfor i in range(2, n + 1):\n    e += 1/factorial(n)\n\nprint(e)",
	th3_2_3: "n = int(input())\nw = 0\n\nfor i in range(1, n + 1):\n    if n % i == 0:\n        w += 1\n\nprint(w)",
	th3_3_2: "for i in range(1, 11):\n    for j in range(0, 100, 10):\n        print(i + j, end=' ')\n    print()",
	th3_3_3: "for i in range(100, 0, -1):\n    if i % 10 == 0:\n        print()\n    print(i, end=' ')",
	th4_1:
		"n = int(input())\nlenght = len(str(n))\ntotal = 0\n\nfor i in range(0, lenght):\n    total += n % 10\n    n //= 10\n\nprint(lenght)\nprint(total)",
	th4_2:
		"n = int(input())\n\nif n == 1 or n == 2:\n    print(1)\nelse:\n    a = 1\n    b = 1\n    for i in range(0, n - 1):\n        next = a + b\n        a = b\n        b = next\n\nprint(a)",
	th4_3:
		"import math  \n\nn = int(input())\n\nwhile n % 2 == 0:  \n    print(2, end=' ')  \n    n = n / 2  \n  \nfor i in range(3, int(math.sqrt(n)) + 1, 2):  \n    while n % i == 0:  \n        print(i, end=' ')  \n        n = n / i  \n\nif n > 2:  \n    print(n, end=' ')",
	th4_4:
		"n = int(input())\n\nif n == 1: print('NO')\n\nif n < 4: print('YES')\n\nj: int = 2\nwhile j <= n:\n    if n % j == 0:\n        if j == n: \n            print('YES')\n            break\n        else: \n            print('NO')\n            break\n    j += 1",
	th4_5:
		"k = int(input())\n\nfor i in range(2, k + 1):\n    j: int = 2\n    while j <= i:\n        if i % j == 0:\n            if j == i: \n                if k % i == 0:\n                    print(i)\n                    break\n        j += 1",
	th8_1:
		"def fib(n):\n \n    if n <= 1:\n        return n\n \n    return fib(n - 1) + fib(n - 2)\n\nn = int(input())\nprint(fib(n))",
	th8_2:
		"import math\n\nn = int(input())\nl = list(map(int, input().split()))\ntotal_primeNum = 0\n\ndef isPrime(n):\n    if n == 1: return False\n\n    if n < 4: return True\n\n    i: int = 2\n    while i <= n:\n        if n % i == 0:\n            if i == n: return True\n            else: return False\n        i += 1\n\nfor i in l:\n    if isPrime(i):\n        total_primeNum += 1\n\nnum1 = l[0]\nnum2 = l[1]\ngcd = math.gcd(num1, num2)\n \nfor i in range(2, n - 1):\n    gcd = math.gcd(gcd, l[i])\n\nprint(total_primeNum)\nprint(gcd)",
};

export const name = {};
