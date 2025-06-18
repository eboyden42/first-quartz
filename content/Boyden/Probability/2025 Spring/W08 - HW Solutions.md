## Functions on two random variables
#### 01: Review practice: Function on one variable
Suppose the PDF of $X$ is given by: $$f_X(x)=\begin{cases}\frac{2}{3}x&1\leq x\leq 2\\ 0&\text{otherwise}\end{cases}$$
Find the CDF and PDF of $W=\ln X$.

**Solution**
1. Start by finding the CDF of $W$, $F_W(w)=\mathbb{P}(W\le w)$ $=\mathbb{P}(\ln X\le w)$ $=\mathbb{P}(W\le e^w)$. First, let us compute the CDF of $X$, $F_X(x)$: $$\begin{align*}F_X(x)&=\int_{1}^x \frac{2}{3}t\,dt\\&=\left[\frac{t^2}{3}\right]_1^x\\&=\frac{x^2-1}{3}\end{align*}$$
   Thus, we have that $F_W(w)=\mathbb{P}(W\le e^w)$ $=\begin{cases}0&& e^w<1\\ \frac{e^{2w}-1}{3}&& 1\le e^{w}\le 2\\1&&\text{else}\end{cases}$ $=\begin{cases}0&& w<0\\\frac{e^{2w}-1}{3}&&0\le w\le\ln2\\1&&w>\ln2\end{cases}$ 
2. Finally, differentiate to find the density function of $W$, $f_W(w)$: $$\begin{align*}f_W(w)&=\frac{d}{dw} F_W(w)\\&=\begin{cases}\frac{d}{dw}0&& w<0\\\frac{d}{dw}\frac{e^{2w}-1}{3}&&0\le w\le\ln2\\\frac{d}{dw}1&&w>\ln2\end{cases}\\&=\begin{cases}0&& w<0\\\frac{2e^{2w}}{3}&&0\le w\le\ln2\\0&&w>\ln2\end{cases}\end{align*}$$

#### 02: PDF of min and max
Suppose $X\sim\mathrm{Exp}(2)$ and $Y\sim\mathrm{Exp}(3)$ and these variables are independent. Find:
(a) The PDF of $W=\mathrm{Max}(X,Y)$
(b) The PDF of $W=\mathrm{Min}(X,Y)$

**Solution**
(a)
1. First, we define the PDF's and CDF's of $X$ and $Y$: $$\begin{align*}f_X(x)=\begin{cases}2e^{-2x}&&x\ge0\\0&&\text{else}\end{cases}&&F_X(x)=\begin{cases}1-e^{-2x}&&x\ge0\\0&&\text{else}\end{cases}\\f_Y(y)=\begin{cases}3e^{-3y}&&y\ge0\\0&&\text{else}\end{cases}&&F_Y(y)=\begin{cases}1-e^{-3y}&&y\ge0\\0&&\text{else}\end{cases}
\end{align*}$$
2. Now, $F_W(w)=\mathbb{P}(W\le w)$ $=\mathbb{P}(X\le w, Y\le w)$ since, by definition, $W=\max(X,Y)\ge X,Y$. By independence, $F_W(w)=\mathbb{P}(X\le w)\mathbb{P}(Y\le w)$ $=F_X(w)F_Y(w)$. Thus, we have: $$F_W(w)=\begin{cases}1-e^{-2w}-e^{-3w}+e^{-5w}&&w\ge0\\0&&\text{else}\end{cases}$$ and thus, $$f_W(w)=\begin{cases}2e^{-2w}+3e^{-3w}-5e^{-5w}&&w\ge0\\0&&\text{else}\end{cases}$$

(b)
1. Similarly, for $W=\text{Min}(X,Y)$, we have that $W\le X,Y$. Thus, we have $F_W(w)=P(W\le w)$ $=1-P(W>w)$ $=1-P(X>w,Y>w)$ $=1-P(X>w)P(Y>w)$ by independence. Thus, we have that: $$\begin{align*}F_W(w)&=1-(1-F_X(w))(1-F_Y(y))\\&=\begin{cases}1-e^{-5w}&&w\ge0\\0&&\text{else}\end{cases}\end{align*}$$
2. Thus, the density function is given by: $$f_W(w)=\begin{cases}5e^{-5w}&&w\ge0\\0&&\text{else}\end{cases}$$

## Sums of random variables
#### 03: PDF of sum from joint PDF
Suppose the joint PDF of $X$ and $Y$ is given by: $$f_{X,Y}\quad=\quad\begin{cases}\frac{8}{81}xy &0\leq y\leq x\leq 3\\0&\text{otherwise}\end{cases}$$
Find the PDF of $X+Y$.

**Solution**
1. Let $S=X+Y$. We want to find $f_S(s)$, which we shall do using the convolution formula. Loosely, we have that $f_S(s)=P(S=s)=P(X+Y=s)=P(X=x,Y=s-x)$ for acceptable values of $x$ and $s$. 
2. First, consider the range of $S$: Since $0\le x,y$ and $3\ge x,y$, we have that $P(s>6)= P(s<0)=0$. Thus, we need only concern ourselves with the case when $0\le s\le6$. 
3. Now that we have a range for $s$, we must now find acceptable values of $x$. Since both $x,y\ge0$ and $s=x+y$, we have that $x\le s$. However, $x\le3$, by the condition for the JPDF given above. Thus, $x\le\min(3,s)$. 
4. Similarly, $x\ge0$ and $x\ge y=s-x$. Solving the second equation, we have that $2x\ge s\implies$ $x\ge \frac{s}{2}$. Thus, $x\ge\max(\frac{s}{2},0)$. Since $0\le s\le 6$, $\frac{s}{2}\ge0$, $\max(\frac{s}{2},0)=\frac{s}{2}$. Thus, we can restrict our condition to $x\ge\frac{s}{2}$. 
5. Now that we have bounds, we can finally apply the convolution formula: $$\begin{align*}f_S(s)&=\int_{\frac{s}{2}}^{\min(s,3)}\frac{8}{81}x(s-x)\;dx\\&=\frac{8}{81}\left[\frac{x^2s}{2}-\frac{1}{3}x^3\right]_{\frac{s}{2}}^{\min(s,3)}\end{align*}$$
6. We now take cases to deal with the upper bound: when $0\le s\le3$, $\min(s,3)=s$, and so our upper bound is $s$. If $3< s\le6$, and $\min(s,3)=3$, so our upper bound is $3$. Plugging these values in and evaluating, we have our density function: $$f_S(s)=\begin{cases}\frac{2}{243}s^3&&0\le s\le3\\-\frac{8}{9}+\frac{4}{9}s-\frac{2}{243}s^3&&3\lt s\le6\\0&&\text{else}\end{cases}$$

#### 04: Poisson plus Bernoulli
Suppose that: 
$X\sim\mathrm{Pois}(\lambda)$
$Y\sim\mathrm{Ber}(p)$
$X$ and $Y$ are independent.
Find a formula for the PMF of $X+Y$.
Apply your formula with $\lambda=2$ and $p=0.3$ to find $P_{X+Y}(7)$.

**Solution**
1. We have that $$\begin{align*}f_X(x)=\begin{cases}\frac{e^{-\lambda}\lambda^k}{k!}&&k\in\mathbb{Z}_{\ge0}\\0&&\text{else}\end{cases}&&f_Y(y)=\begin{cases}p&&y=1\\1-p&&y=0\\0&&\text{else}\end{cases}\end{align*}$$
2. Let $S=X+Y$. Then $P(S=s)=P(X+Y=s)=P(X=s-y,Y=y)=P(X=s-y)P(Y=y)$. Now, since $P(Y=y)>0$ only if $y=0,1$, we have that $P(S=s)=P(X=s)P(Y=0)+P(X=s-1)P(Y=1)$ . Thus, $$P(S=s)=\begin{cases}\frac{e^{-\lambda}\lambda^s}{s!}(1-p)+\frac{e^{-\lambda}\lambda^{s-1}}{{(s-1)!}}p&&s>0\\e^{-\lambda}(1-p)&&s=0\\0&&\text{else}\end{cases}$$
3. Plugging in $\lambda=2$, $p=0.3$, and $s=7$ into our PDF above, we have that $P_S(7)\approx0.006015$. 

#### 05: Convolution for uniform distributions over intervals
Suppose that:
- $X \sim \text{Unif}[a, b]$
- $Y \sim \text{Unif}[c, d]$
- $X$ and $Y$ are independent

Find the PDF of $X + Y$.

**Solution**

1. Define $W = X + Y$. 
    - We know that $f_{W}(w) = (f_{X} * f_{Y})(w) = \int_{-\infty}^{\infty}f_{X}(x)f_{Y}(w- x)dx$
2. Note that the range of $W$ is $[a + c, b + d]$.
3. Divide into cases.
    - $a + c \leq w \leq b +c$: $$f_{W}(w) = \int_{a}^{w - c}\frac{1}{b - a}\cdot\frac{1}{d-c}dx = \frac{w - a - c}{(b-a)(d-c)}$$
    - $b + c \leq w \leq a + d$: $$f_{W}(w) = \int_{a}^{b}\frac{1}{b - a}\cdot\frac{1}{d-c}dx = \frac{1}{d-c}$$
    - $a + d \leq w \leq b + d$: $$f_{W}(w) = \int_{w - d}^{b}\frac{1}{b - a}\frac{1}{d-c}dx = \frac{b + d -w}{(b-a)(d-c)}$$
    - $w > b + d: f_{W}(w) = 0$.
4. Formalize final answer.
$$f_{X + Y}(w) = \begin{cases}
0 & w < a - c, w > b + d \\
\frac{w - a - c}{(b-a)(d-c)} & a + c \leq w \leq b +c \\
\frac{1}{d-c} & b + c \leq w \leq a + d \\ \frac{b + d - w}{(b - a)(d - c) } & a + d \leq w \leq b + d
\end{cases}$$

#### 06: Sums of normals
(a) Suppose $X,\,Y\sim\mathcal{N}(\mu,\sigma^2)$ are independent variables. Find the values of $\mu$ and $\sigma$ for which $X+X\sim X+Y$, or prove that none exist.

(b) Suppose $\mu=0$, $\sigma=1$ in part (a). Find $P[X>Y+2]$.

(c) Suppose $X\sim\mathcal{N}(0,\sigma_X)$ and $Y\sim\mathcal{N}(0,\sigma_Y)$. Find $P[X-3Y>0]$.

**Solution**
(a)
1. Suppose $X,Y\sim\mathcal{N}(\mu,\sigma^2)$ and $X,Y$ are independent (since they have the same distribution, they are called independent identically distributed, or IID, random variables). Now suppose that $X+X\sim X+Y$. Notice that if $X+X\sim X+Y$, then $\mathbb{E}(X+X)=\mathbb{E}(X+Y)$ and $\text{Var}(X+Y)=\text{Var}(X+X)$. 
2. For the first condition, we have $\mathbb{E}(X+X)=\mathbb{E}(X)+\mathbb{E}(X)=2\mu=\mathbb{E}(X)+\mathbb{E}(Y)=\mathbb{E}(X+Y)$, and thus the first condition holds for any $\mu\in\mathbb{R}$. 
3. For the second condition, by independence, we must have $\text{Var}(X+X)=\text{Var}(2X)=\text{Var}(X+Y)=\text{Var}(X)+\text{Var}(Y)$. Then we must have $4\text{Var}(X)=4\sigma^2=\sigma+\sigma=2\sigma^2$. Since $\sigma\in\mathbb{R}$, we must have that $\sigma=0$ as the only solution. 
4. Thus, $\mu\in\mathbb{R}$ and $\sigma=0$, which signals that $X,Y$ are constants, are the only values that satisfy the given condition.

(b)
1. Define $W = X - Y -2$.
    - The mean is $\mu_{W} = \mu - \mu - 2 = -2$.
    - The variance is $\sigma^{2}_{W} = \sigma^{2} + \sigma^{2} = 2$
    - Thus, $W \sim \mathcal{N}(-2, 2)$.
2. Note that $P[X > Y + 2] = P[W > 0]$. Standardize $W$ and use the lookup table.
$$\begin{align*}P[W > 0] &= P\left[Z > \frac{2}{\sqrt{2}}\right] \\ &= 1 - P\left[Z < \frac{2}{\sqrt{2}}\right] \\ &\approx 1 - \Phi(1.4142) \\ &\approx 1 - 0.9213 = 0.0787 
\end{align*}$$

(c)
1. Let $W = X - 3Y$. 
    - $\mu_{W}  = 0$.
    - $\sigma^{2}_{W} = \sigma^{2}_{X} + 3^{2}\sigma_{Y}^{2}$.
2. Note that $P[X - 3Y > 0] = P[W > 0]$. Standardize $W$ and use the lookup table.
$$\begin{align*} P[W > 0] &= P[Z > 0] = 0.5 \end{align*}$$

