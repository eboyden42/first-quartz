## Conditional distribution
#### 01 - Conditional density from joint density
Suppose that $X$ and $Y$ have joint probability density given by: 
    $$f_{X, Y}(x, y) = \begin{cases}
    \frac{12}{5}x(2-x-y) & x, y \in [0, 1] \\
    0 & \text{otherwise}
    \end{cases}$$
(a) Compute $f_{X|Y}(x|y)$, for $y \in [0, 1]$.
(b) Compute $P\left[X > \frac{1}{2} \mid Y = y\right]$.

**Solution**

**(a)**
1. Write out formula for conditional distribution.
$$f_{X, Y}(x\mid y) = \frac{f_{X, Y}(x, y)}{f_{Y}(y)}$$
2. Compute marginal distribution for $Y$.
$$f_{Y}(y) = \frac{12}{5}\int_{0}^{1}2x-x^{2}-xydx = \frac{12}{5}\left.\left[x^{2} - \frac{x^{3}}{3} - \frac{x^{2}y}{2}\right]\right|_{0}^{1} = \frac{12}{5}\left(\frac{2}{3}-\frac{y}{2}\right)$$
3. Find conditional density function.
    $$f_{X \mid Y}(x \mid y) = \frac{\frac{12}{5}x(2-x-y)}{\frac{12}{5}\left(\frac{2}{3} - \frac{y}{2}\right)} = \frac{6x(2-x-y)}{4-3y}$$
    $$f_{X|Y}(x|y) = \begin{cases}
    \frac{6x(2-x-y)}{4-3y} & x, y \in [0, 1] \\
    0 & \text{otherwise}
    \end{cases}$$
**(b)**
4. Integrate to find the desired probability.
$$\begin{align*}
P\left[X > \frac{1}{2} \mid Y = y\right] &= \int_{\frac{1}{2}}^{1}\frac{6x(2-x-y)}{4-3y}dx \\
&= \frac{6}{4-3y}\int_{\frac{1}{2}}^{1}2x-x^{2}-xydx \\
&= \frac{6}{4-3y}\left.\left[x^{2}-\frac{x^{3}}{3}-\frac{x^{2}y}{2}\right]\right|_{\frac{1}{2}}^{1} \\
&= \frac{11-9y}{4(4-3y)}
\end{align*}$$
5. State final answer.
$$P\left[X > \frac{1}{2} \mid Y = y\right] = \begin{cases}
\frac{11-9y}{4(4-3y)} & y \in [0, 1] \\
0 & \text{otherwise}
\end{cases}$$

#### 02 - From conditional to joint, and back again
Suppose we have the following data about random variables $X$ and $Y$:
$$\begin{align*}
f_{X}(x) &= \begin{cases}
3x^{2} & 0 \leq x \leq 1 \\
0 & \text{otherwise}
\end{cases} \\
f_{Y \mid X}(y \mid x) &= \begin{cases}
2y/x^{2} & 0 \leq y \leq x \\
0 & \text{otherwise}
\end{cases}
\end{align*}$$
(a) Find the joint distribution $f_{X, Y}(x, y)$.
(b) Find $f_{X \mid Y}(x \mid y)$.

**Solution**

**(a)**
1. State formula
$$f_{Y \mid X}(y\mid x)= \frac{f_{X, Y}(x, y)}{f_{X}(x)} \implies f_{X, Y}(x, y) = f_{Y \mid X}(y \mid x)f_{X}(x)$$
2. Find joint distribution.
$$f_{X, Y}(x, y) = \begin{cases}
3x^{2} \frac{2y}{x^{2}} = 6y & 0 \leq y \leq x \leq 1 \\
0 & \text{otherwise}
\end{cases}$$
**(b)**
3. State formula
$$f_{X\mid Y}(x \mid y) = \frac{f_{X, Y}(x, y)}{f_{Y}(y)}$$
4. Find marginal distribution of $Y$.
$$f_{Y}(y) = \int_{y}^{1}6ydx = \left.6yx\right|_{y}^{1} = 6y - 6y^{2} = 6y(1-y)$$
5. Find conditional distribution.
$$f_{X \mid Y}(x \mid y) = \frac{f_{X, Y}(x, y)}{f_{Y}(y)} = \begin{cases}
\frac{1}{1-y} & 0 \leq y \leq x \leq 1 \\
0 & \text{otherwise}
\end{cases}$$


## Conditional expectation
#### 03 - Conditional distribution and expectation from joint PMF
Suppose that $X$ and $Y$ have the following joint PMF:
$$P_{X, Y}(k, \ell) = \begin{cases}
c & k = 1, 2, 3, 4; \quad \ell = 1,\dots, k \\
0 & \text{otherwise}\end{cases}$$
Notice that the possibilities for $\ell$ depend on the choice of $k$.

First, show that $c = \frac{1}{10}$ must be true. Then, compute
(a) $P_{X}$       
(b) $P_{Y \mid X}$
(c) $E[Y \mid X = 4]$
(d) $E[Y \mid X]$

**Solution**

1. Find possible combinations of $k$ and $\ell$.
    - For a given value of $k$, there are $k$ possible options for $\ell$.
    - Thus, in total, there are $1 + 2 + 3 + 4 = 10$ possible combinations. 
    - Since $10 \cdot c = 1$, we have that $c = \frac{1}{10}$.
**(a)**
2. We have that 
$$\begin{align*} 
P_{X}(1) &= \frac{1}{10} \\
P_{X}(2) &= \frac{2}{10} \\
P_{X}(3) &= \frac{3}{10} \\
P_{X}(4) &= \frac{4}{10}
\end{align*}$$
Thus, 
$$P_{X}(k) = \begin{cases}
\frac{k}{10} & k = 1, 2, 3, 4\\
0 & \text{otherwise}
\end{cases}$$
**(b)**
1. State formula
$$P_{Y \mid X}(\ell \mid k) = \frac{P_{X, Y}(k, \ell)}{P_{X}(k)} = \frac{c}{kc} = \frac{1}{k}$$
2. State final answer
$$P_{Y  \mid X}(\ell \mid k) = \begin{cases}
\frac{1}{k} & \ell = 1, \dots, k \\
0 & \text{otherwise}
\end{cases}$$
**(c)**
3. Compute expectation:
$$E[Y \mid X = 4] = \sum_{\ell = 1}^{4}\frac{\ell}{4} = \frac{5}{2}$$
**(d)**
4. Find formula for expectation.
$$E[Y \mid X] = \sum_{\ell = 1}^{x} \frac{\ell}{x} = \frac{1}{x}\sum_{\ell = 1}^{x}\ell = \frac{1}{x}\frac{x(x + 1)}{2} = \frac{x+ 1}{2}$$

#### 04 - Conditional distribution and expectation from joint PDF
Suppose that $X$ and $Y$ have the following joint PDF:
    $$f_{X, Y}(x, y) = \begin{cases}
    cxy & 0 < y < 1, 0 < x < y \\
    0 & \text{otherwise}
    \end{cases}$$
Notice that the range of possibilities for $x$ depends on the choice of $y$.

First, show that $c = 8$ must be true. Then compute:
(a) $f_{X}$
(b) $f_{Y \mid X}$
(c) $E[Y \mid X = 0.5]$
(d) $E[Y \mid X]$

**Solution**

1. Integrate joint PDF and solve for $c$.
$$\begin{align*}
\int_{0}^{1}\int_{0}^{y}cxydxdy &= 1 \\
\int_{0}^{1}\frac{cy^{3}}{2}dy &= 1\\
\frac{c}{8}&=1 \implies c = 8
\end{align*}$$
**(a)**
2. Integrate joint PDF with respect to $y$ to obtain $f_{X}$
$$f_{X}(x) = \int_{x}^{1}8xydy = 8x\left.\left[\frac{y^{2}}{2}\right]\right|_{x}^{1} = 4x\left(1-x^{2}\right)$$

**(b)**
1. Use formula for conditional distribution.
$$f_{Y \mid X}(y \mid x) = \frac{f_{x, y}(x, y)}{f_{X}(x)} = \frac{8xy}{4x\left(1-x^{2}\right)} = \frac{2y}{1- x^{2}}, \qquad x < y$$

**(c)**
1. Plug in $x = 0.5$ into the formula found in part (b)
$$f_{Y \mid X}(y\mid 0.5) = \frac{2y}{1-0.5^{2}} = \frac{8y}{3}$$

2. Integrate to find expectation.
$$E[Y \mid X = 0.5] = \int_{0.5}^{1}\frac{8y^{2}}{3}dy = \frac{8}{3}\left.\left[\frac{y^{3}}{3}\right]\right|_{0.5}^{1} = \frac{7}{9}$$

**(d)** Integrate formula in part (b) with respect to $y$.

$$E[Y \mid X = x] = \int_{x}^{1}\frac{2y^{2}}{1-x^{2}}dy =\frac{2}{1-x^{2}}\left.\left[\frac{y^{3}}{3}\right]\right|_{x}^{1} = \frac{2\left(1-x^{3}\right)}{3\left(1-x^{2}\right)}$$


#### 05 - "Plug In" Expectation Identity
Suppose $h(x, y)$ is a function, and $X$ and $Y$ are two random variables.

Verify this formula in the *continuous case*, using the definitions:
$$E\left[h(X, Y)\mid Y = y\right] = E\left[h(X, y)\mid Y = y\right]$$
Using that formula, prove this formula:
$$E\left[a(Y)b(X)\mid Y\right] = a(Y)E\left[b(X)\mid Y\right]$$
for two functions $a(y)$ and $b(x)$ and random variables $X$ and $Y$. Notice that here the expectations are viewed as random variables.

**Solution**

1. State formula for expectation given $Y= y$.
$$E\left[h(X, Y)\mid Y = y\right] = \int_{-\infty}^{\infty}h(x, y)f_{X \mid Y}(x \mid y)dx$$

2. Note that $Y =y$ is fixed inside the conditional expectation.
    - Treat $h(X, Y)$ as $h(X, y)$ inside integral.

$$E\left[h(X, Y)\mid Y = y\right] = \int_{-\infty}^{\infty}h(x, y)f_{X \mid Y}(x \mid y)dx = E\left[h(X, y)\mid Y = y\right]$$

3. Prove the second formula.
$$E\left[a(Y)b(X)\mid Y = y\right] = \int a(y)b(x)f_{X \mid Y}(x \mid y)dx = a(y)\int b(x)f_{X \mid Y}(x \mid y)dx = a(y)E\left[b(X)\mid Y = y\right]$$
4. State final answer.
$$E\left[a(Y)b(X) \mid Y\right] = a(Y)E\left[b(X) \mid Y\right]$$

#### 06 - Iterated Expectation Identity
Prove the following identity using iterated expectation along with the previous exercise:
$$E[XY] = E\left[YE[X \mid Y]\right]$$
**Solution**

1. Let $a(Y) = Y$ and $b(X) = X$.
$$E[XY] = E\left[E\left[b(X)a(Y)\mid Y\right]\right] = E\left[a(Y)E\left[b(X)\mid Y\right]\right] = E\left[Y E[X \mid Y]\right]$$

#### 07 - How many customers buy a cake?
Let $N$ count the number of customers that visit a bakery on a random day, and assume $N \sim \text{Pois}(\lambda)$.

Let $X$ count the number of customers that make a purchase. Each customer entering the bakery smells the cakes, and this produces a probability $p$ of buying a cake for that customer. The customers are independent. 

Find $\text{Cov}[N, X]$. Are $N$ and $X$ positively or negatively correlated?


**Solution**

1. Find $E[X \mid N]$.
    - Note that this follows a binomial distribution with parameters $n, p$.
    - Thus, $E[X \mid N] = Np$
2. Find $E[X]$ using iterated expectation.
$$E[X] = E\left[E[X \mid N]\right] = E[Np] = p\lambda$$
3. Find $E[NX]$
$$\begin{align*}
E[NX] &= E\left[NE[X \mid N]\right] = E\left[N^{2}p\right] = pE\left[N^{2}\right] \\
E\left[N^{2}\right] &= \text{Var}[N] + E\left[N^{2}\right] = \lambda + \lambda^{2} \\
E[NX] &= p\left(\lambda + \lambda^{2}\right) 
\end{align*}$$
4. Find covariance
$$\text{Cov}[N, X] = E[NX] - E[N]E[X] = p\left(\lambda + \lambda^{2}\right) - p\lambda^{2} = p\lambda$$
5. State final conclusions.
    - Since the covariance is positive, $N$ and $X$ are *positively* correlated.