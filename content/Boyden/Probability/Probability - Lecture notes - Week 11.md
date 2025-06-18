---
cssclasses:
  - hide-embedded-header
title: Week 11 notes
---

Recall some items related to conditional probability.

Conditioning definition: $$P[-\mid A]\quad=\quad \frac{P[-\cap A]}{P[A]}$$
Multiplication rule: $$P[AB]\quad=\quad P[A]\, P[B\mid A]$$
Division into Cases / Total Probability: $$P[B] \quad=\quad  P[B\mid A_1]\,P[A_1]+\cdots+P[B\mid A_n]\,P[A_n]$$

## Conditional distribution
### 01 Theory

> [!concept] Conditional distribution, by a fixed event
> Suppose $X$ is a random variable and $A\subset\mathbb{R}$. The distribution of $X$ **conditioned on $A$** describes the probabilities of values of $X$ given the hypothesis that $X\in A$ is known.
> 
> Discrete case: $$P_{X|A}(k)\quad=\quad \begin{cases}\displaystyle\frac{P_X(k)}{P[A]}&k\in A\\ 0&k\notin A\end{cases}$$
> 
> Continuous case: $$f_{X|A}(x)\quad=\quad \begin{cases}\displaystyle\frac{f_X(x)}{P[A]}&x\in A\\ 0& x\notin A\end{cases}$$

We can also condition the CDF directly and derive the PDF from the CDF: $$F_{X|A}(x)\;=\; P[X\leq x\mid A],\qquad f_{X|A}(x)\;=\; \frac{dF_{X|A}(x)}{dx}$$

We can also translate Division into Cases / Total Probability into distributional terms: 
$$\begin{align*}P_X(k) \quad &=\quad  P_{X|A_1}(k)\,P[A_1]+\cdots+P_{X|A_n}(k)\,P[A_n]\\\\ f_X(x) \quad &=\quad  f_{X|A_1}(x)\,P[A_1]+\cdots+f_{X|A_n}(x)\,P[A_n]\end{align*}$$

---

> [!concept] Conditional distribution, by a variable event
> Suppose $X$ and $Y$ are any two random variables. The **distribution of $X$ conditioned on $Y$** describes the probabilities of values of $X$ in terms of $y$, given the hypothesis that $Y=y$ is known.
> 
> Discrete case: $$\begin{align*}P_{X|Y}(k|\ell) \quad &=\quad  P[X=k \mid Y=\ell] \\\\ &=\quad \frac{P_{X,Y}(k,\ell)}{P_Y(\ell)}\qquad(\text{assuming }P_Y(\ell)\neq 0)\end{align*}$$
> 
> Continuous case: $$f_{X|Y}(x|y) \quad =\quad \frac{f_{X,Y}(x,y)}{f_Y(y)}\qquad(\text{assuming }f_Y(y)\neq 0)$$

Notice:
- $P_{X,Y}(k,\ell)$ is the probability of “$X=k$ and $Y=\ell$.”
- $P_{X|Y}(k|\ell)$ is the probability of $X=k$, given the hypothesis that $Y=\ell$ is known.

Sometimes it is useful to rewrite the formulas this way, for example to describe a “continuous probability tree:” $$\begin{align*}P_{X,Y}(k,\ell) \quad&=\quad P_{X|Y}(k|\ell)\,P_Y(\ell) \\\\ f_{X,Y}(x,y) \quad &=\quad  f_{X|Y}(x|y)\,f_Y(y)\end{align*}$$

> [!extra] Extra - Deriving $f_{X|Y}(x|y)$
> The density $f_{X|Y}$ ought to be such that $f_{X|Y}(x|y)\,dx$ gives the probability of $X\in[x,x+dx]$, on the hypothesis that $Y\in[y,y+dy]$ is known. Calculate this probability: $$\begin{gather*}P\Big[x\leq X\leq x+dx\;\Big|\;y\leq Y\leq y+dy\Big]\\\\ ⨠⨠ \quad  \frac{P\Big[x\leq X\leq x+dx,\;y\leq Y\leq y+dy\Big]}{P\Big[y\leq Y\leq y+dy\Big]}\\\\⨠⨠ \quad  \frac{f_{X,Y}(x,y)\,dx\,dy}{f_Y(y)\,dy}\\\\ ⨠⨠ \quad \frac{f_{X,Y}(x,y)}{f_Y(y)}\,dx\end{gather*}$$

## Conditional expectation
### 02 Theory

> [!concept] Expectation conditioned by a fixed event
> Suppose $X$ is a random variable and $A\subset\mathbb{R}$. The **expectation of $X$ conditioned on $A$** describes the typical value of $X$ given the hypothesis that $X\in A$ is known.
> 
> Discrete case: $$\begin{align*}E[\,X\mid A\,]\quad&=\quad \sum_{k}k\,P_{X|A}(k)\\\\ E[\,g(X)\mid A\,]\quad&=\quad \sum_{k}g(k)\,P_{X|A}(k)\end{align*}$$
> 
> Continuous case: $$\begin{align*}E[\,X\mid A\,]\quad&=\quad \int_{-\infty}^{+\infty}x\,f_{X|A}(x)\,dx\\\\ E[\,g(X)\mid A\,]\quad&=\quad \int_{-\infty}^{+\infty}g(x)\,f_{X|A}(x)\,dx\end{align*}$$

Conditional variance: $$\mathrm{Var}[\,X\mid A\,]\quad=\quad E\Big[(X-\mu_{X|A})^2\mid A\Big]\quad=\quad E\big[X^2\mid A\big]-\mu_{X|A}^2$$

Division into Cases / Total Probability applied to expectation: $$E[X]\quad=\quad E[\,X\mid A_1\,]\,P[A_1]+\cdots+E[\,X\mid A_n\,]\,P[A_n]$$

Linearity of conditional expectation: $$E[\,aX_1+bX_2+c\mid Y=y\,] = a\,E[\,X_1\mid Y=y\,] + b\,E[\,X_2\mid Y=y\,] + c$$

> [!extra] Extra - Proof: Division of Expectation into Cases
> We prove the discrete case only.
> 
> 1. Expectation formula: $$E[X]\quad=\quad \sum_k k\,P_X(k)$$
> 2. Division into Cases for the PMF: $$P_X(k) \quad =\quad  \sum_{i=1}^n P_{X|A_i}(k)\,P[A_i]$$
> 3. Substitute in the formula for $E[X]$: $$\begin{gather*}\sum_k k\,P_X(k)\quad ⨠⨠ \quad \sum_k k\,\sum_{i=1}^n P_{X|A_i}(k)\,P[A_i]\\\\ ⨠⨠ \quad \sum_{i=1}^n P[A_i]\sum_k k\,P_{X|A_i}(k)\\\\ ⨠⨠ \quad \sum_{i=1}^n P[A_i]\,E[\,X\mid A_i\,]\end{gather*}$$

---

> [!concept] Expectation conditioned by a variable event
> Suppose $X$ and $Y$ are any two random variables. The **expectation of $X$ conditioned on $Y=y$** describes the typical of value of $X$ in terms of $y$, given the hypothesis that $Y=y$ is known.
> 
> Discrete case: $$\begin{align*}E[\,X\mid Y=y\,] \quad&= \quad  \sum_k k\, P_{X|Y}(k|y)\quad\text{($k$ over all poss. vals.)}\\\\ E[\,g(X,Y)\mid Y=y\,] \quad&= \quad  \sum_k g(k,y)\, P_{X|Y}(k|y)\end{align*}$$
> 
> Continuous case: $$\begin{align*}E[\,X\mid Y=y\,]\quad&= \quad \int_{-\infty}^{+\infty}x\,f_{X|Y}(x|y)\,dx\\\\ E[\,g(X,Y)\mid Y=y\,]\quad&= \quad \int_{-\infty}^{+\infty}g(x,y)\,f_{X|Y}(x|y)\,dx\end{align*}$$

### 03 Illustration

> [!mexample] Example - Conditioning on a fixed event
> ![Conditioning on a fixed event](Probability/2025%20Spring/W11%20-%20Examples.md#Conditioning%20on%20a%20fixed%20event)

> [!mexample] Example - Conditioning on variable events, discrete PMF function
> ![Conditioning on variable events, discrete PMF function](Probability/2025%20Spring/W11%20-%20Examples.md#Conditioning%20on%20variable%20events,%20discrete%20PMF%20function)

### 04 Theory

> [!concept] Expectation conditioned by a random variable
> Suppose $X$ and $Y$ are any two random variables. The **expectation of $X$ conditioned on $Y$** is a random variable giving the typical value of $X$ on the assumption that $Y$ has value determined by an outcome of the experiment.
> 
> $$E[\,X\mid Y\,]\quad=\quad g(Y)\quad \text{where}\;\; g(y) = E[\,X\mid Y=y\,]$$

In other words, start by defining a function $g(y)$: $$\begin{align*}g:\mathbb{R}&\to\mathbb{R}\\ y&\mapsto E[\,X\mid Y=y\,]\end{align*}$$

Now $E[\,X\mid Y\,]$ is defined as the composite random variable $g(Y)$.

Considered as a random variable, $E[\,X\mid Y\,]$ takes an outcome $s\in S$, computes $Y(s)$, sets $y=Y(s)$, then returns the expectation of $X$ conditioned on $Y=y$.

Notice that $X$ is *not* evaluated at $s$, only $Y$ is.

Because the value of $E[\,X\mid Y\,]$ depends only on $Y(s)$, and not on any additional information about $s$, it is common to *represent* a conditional expectation $E[\,X\mid Y\,]$ using only the function $g$.

---

> [!abstract] Iterated Expectation
> $$E[\;E[X\mid Y]\;] = E[X]$$

> [!extra] Proof of Iterated Expectation, discrete case
> $$\begin{align*}E[\,E[\,X\mid Y\,]\,] \quad&=\quad  \sum_\ell E[X\mid Y=\ell]\,P_Y(\ell) \\\\ &=\quad \sum_\ell \sum_k k\,P_{X|Y}(k|\ell)\,P_Y(\ell) \\\\ &=\quad \sum_k k\sum_\ell P_{X,Y}(k,\ell) \\\\ &=\quad \sum_k k\,P_X(k) = E[X]\end{align*}$$

### 05 Illustration

> [!exercise] Exercise - Proof of Iterated Expectation, continuous case
> ![Proof of Iterated Expectation, continuous case](Probability/2025%20Spring/W11%20-%20Examples.md#Proof%20of%20Iterated%20Expectation,%20continuous%20case)

> [!mexample] Example - Conditional expectations from joint density
> ![Conditional expectations from joint density](Probability/2025%20Spring/W11%20-%20Examples.md#Conditional%20expectations%20from%20joint%20density)

> [!mexample] Example - Flip coin, choose RV
> ![Flip coin, choose RV](Probability/2025%20Spring/W11%20-%20Examples.md#Flip%20coin,%20choose%20RV)

> [!mexample] Example - Sum of random number of RVs
> ![Sum of random number of RVs](Probability/2025%20Spring/W11%20-%20Examples.md#Sum%20of%20random%20number%20of%20RVs)


