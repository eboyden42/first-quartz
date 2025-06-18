## Conditional distribution
#### 01
> [!problem] Conditional density from joint density
> Suppose that $X$ and $Y$ have joint probability density given by: 
> 
> $$f_{X,Y}(x,y) \quad=\quad \begin{cases}\displaystyle\frac{12}{5} x(2-x-y) & x,y\in[0,1] \\ 0 & \text { otherwise }\end{cases}$$
> 
> (a) Compute $f_{X\mid Y}(x|y)$, for $y\in[0,1]$.
> 
> (b) Compute $P[\,X>1/2\mid Y=y\,]$. ^0bn43d
#### 02
> [!problem] From conditional to joint, and back again
> Suppose we have the following data about random variables $X$ and $Y$: 
> $$\begin{gathered}f_X(x)= \begin{cases}3 x^2 & 0 \leq x \leq 1 \\0 & \text { otherwise }\end{cases} \\\\ f_{Y \mid X}(y | x)= \begin{cases}2 y / x^2 & 0 \leq y \leq x \\0 & \text { otherwise }\end{cases}\end{gathered}$$
> 
> (a) Find the joint distribution $f_{X,Y}(x,y)$.
> 
> (b) Find $f_{X|Y}(x|y)$.

## Conditional expectation
#### 03
> [!problem] Conditional distribution and expectation from joint PMF
> Suppose that $X$ and $Y$ have the following joint PMF: 
> $$P_{X, Y}(k, \ell)\;=\; \begin{cases}c & k=1,2,3,4 ; \quad \ell=1, \ldots, k \\ 0 & \text { otherwise }\end{cases}$$
> 
> Notice that the possibilities for $\ell$ depend on the choice of $k$.
> 
> First, show that $c=1/10$ must be true. Then compute: 
> 
> (a) $P_X$ $\quad$ (b) $P_{Y|X}$ $\quad$ (c) $E[\,Y\mid X=4\,]$ $\quad$ (d) $E[\,Y\mid X\,]$
#### 04
> [!problem] Conditional distribution and expectation from joint PDF
> Suppose that $X$ and $Y$ have the following joint PDF: 
> $$f_{X, Y}(x, y)\;=\; \begin{cases}c x y & 0<y<1,\;0<x<y \\ 0 & \text { otherwise }\end{cases}$$
> 
> Notice that the range of possibilities for $x$ depends on the choice of $y$.
> 
> First, show that $c=8$ must be true. Then compute: 
> 
> (a) $f_X$ $\quad$ (b) $f_{Y|X}$ $\quad$ (c) $E[\,Y\mid X=0.5\,]$ $\quad$ (d) $E[\,Y\mid X\,]$ ^0srb83
#### 05
> [!problem] “Plug In” Expectation Identity
> Suppose $h(x,y)$ is a function, and $X$ and $Y$ are two random variables.
> 
> Verify this formula in the *continuous case*, using the definitions: 
> $$E[\,h(X,Y)\mid Y=y\,] \quad=\quad E[\,h(X,y)\mid Y=y\,]$$
> 
> Using that formula, prove this formula:  
> $$E[\,a(Y)b(X)\mid Y\,] = a(Y)\,E[\,b(X)\mid Y\,]$$
> for two functions $a(y)$ and $b(x)$ and random variables $X$ and $Y$. Notice that here the expectations are viewed as random variables.
> 
> Hint for second question: Both sides are functions of $Y$. Write these functions as $g_1(Y)$ and $g_2(Y)$ and check equality of the functions.
#### 06
> [!problem] Expectation Multiplication Rule
> Prove the following identity using Iterated Expectation along with the previous exercise: $$E[\,XY\,]=E[\,Y\, E[X\mid Y]\,]$$
> 
> Note: The solution is short once you find it – please clearly identify your choices for $a(y)$ and $b(x)$ functions.
#### 07
> [!problem] $\bigstar$ How many customers buy a cake?
> Let $N$ count the number of customers that visit a bakery on a random day, and assume $N\sim\mathrm{Pois}(\lambda)$.
> 
> Let $X$ count the number of customers that make a purchase. Each customer entering the bakery smells the cakes, and this produces a probability $p$ of buying a cake for that customer. The customers are independent.
> 
> Find $\mathrm{Cov}[N,X]$. Are $N$ and $X$ positively or negatively correlated?
> 
> Hint: Compute $P_{X\mid N}(x|n)$, and use this to compute $E[\,X\mid N\,]$ in terms of $N$. Now deduce $E[X]$ using Iterated Expectation. Finally, compute $E[NX]$ using the Expectation Multiplication Rule from the previous exercise. Now put everything together to find $\mathrm{Cov}[N,X]$. ^5u50sp

