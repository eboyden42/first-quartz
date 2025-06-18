---
cssclasses:
  - hide-embedded-header
title: Week 05 notes
---
## Discrete families: summary
### 01 Theory

 > [!warning] Memorize this info!

**Bernoulli:** $X\sim\mathrm{Ber}(p)$
- Indicates a win.
- $P_X(1)=p,\; P_X(0)=q$
- $E[X]=p$
- $\mathrm{Var}[X]=pq$

**Binomial:** $X\sim\mathrm{Bin}(n,p)$
- Counts number of wins.
- $P_X(k)={n\choose k}p^kq^{n-k}$
- $E[X]=np$
- $\mathrm{Var}[X]=npq$
- These are $n$ times the Bernoulli numbers.

**Geometric:** $X\sim\mathrm{Geom}(p)$
- Counts discrete wait time until first win.
- $P_X(k)=q^{k-1}p$
- $E[X]=\frac{1}{p}$
- $\mathrm{Var}[X]=\frac{q}{p^2}$

**Pascal:** $X\sim\mathrm{Pasc}(\ell,p)$
- Counts discrete wait time until $\ell^\text{th}$ win.
- $P_X(k)={k-1\choose \ell-1}q^{k-\ell}p^\ell$
- $E[X]=\frac{\ell}{p}$
- $\mathrm{Var}[X]=\frac{\ell q}{p^2}$
- These are $\ell$ times the Geometric numbers.

**Poisson:** $X\sim\mathrm{Pois}(\lambda)$
- Counts “arrivals” during time interval.
- $P_X(k)=e^{-\lambda}\frac{\lambda^k}{k!}$
- $E[X]=\lambda$
- $\mathrm{Var}[X]=\lambda$

## Function on a random variable

### 02 Theory

By composing any function $g:\mathbb{R}\to\mathbb{R}$ with a random variable $X:S\to\mathbb{R}$ we obtain a new random variable $g\circ X$. The new one is called a **derived** random variable.

- %& Write $g(X)$ for this derived random variable $g\circ X$.

> [!concept] Expectation of derived variables
> Discrete case: $$E\big[g(X)\big] = \sum_{k} g(k)\cdot P_X(k)$$
> (Here the sum is over all possible values $k$ of $X$.)
> 
> Continuous case: $$E\big[g(X)\big] = \int_{-\infty}^{+\infty} g(x)\cdot f_X(x)\,dx$$

- ! Notice: when applied to outcome $s\in S$:
    - $k$ is the output of $X$
    - $g(k)$ is the output of $g\circ X$

The proofs of these formulas are *not trivial*, since one must relate the PDF or PMF of $X$ to that of $g(X)$.

> [!extra] Proof - Discrete case - Expectation of derived variable
> $$\begin{align*}E[g(X)] &= \sum_y y\cdot P_{g(X)}(y) \\\\ &= \sum_y y\cdot \sum_{k\in g^{-1}(y)} P_X(k) \\\\ &= \sum_y \sum_{k\in g^{-1}(y)} g(k)\cdot P_X(k) \\\\ &= \sum_k g(k)\cdot P_X(k)\end{align*}$$

---

> [!concept] Linearity of expectation
> For constants $a$ and $b$: $$E[aX+b] = aE[X] + b$$
> 
> For any $X$ and $Y$ on the same probability model: $$E[X+Y] = E[X] + E[Y]$$

> [!exercise] Exercise - Linearity of expectation
> Using the definition of expectation, verify both linearity formulas for the discrete case.

> [!warning] Be careful!
> Usually $E\big[g(X)\big]\neq g(E[X])$.
> 
> For example, usually $E[X\cdot X]\neq E[X]\cdot E[X]$. We distribute $E$ over *sums* but *not products*.

---

> [!concept] Variance squares the scale factor
> For constants $a$ and $b$: 
> $$\mathrm{Var}[aX+b] = a^2 \,\mathrm{Var}[X]$$

Thus variance *ignores the offset* and *squares the scale factor*. It is not linear!

> [!extra] Proof - Variance squares the scale factor
> $$\begin{align*}\mathrm{Var}[aX+b] &= E[(aX+b - E[aX+b])^2]\\\\&= E[(aX+b - a\mu_X-b)^2]\\\\&= E[(aX-a\mu_X)^2]\\\\&= E[a^2(X-\mu_X)^2]\\\\&= a^2\, E[(X-\mu_X)^2]\\\\&= a^2\,\mathrm{Var}[X]\end{align*}$$

---

> [!extra] Extra - Moments
> The **$n^\text{th}$ moment** of $X$ is defined as the expectation of $X^n$:
> 
> Discrete case: $$E[X^n] = \sum_{k} k^n\cdot p(k)$$
> Continuous case: $$E[X^n] = \int_{-\infty}^{+\infty} x^n\cdot f(x)\,dx$$
> 
> A **central moment of $X$** is a moment of the variable $X-E[X]$: $$E\big[(X-E[X])^n\big]$$

The data of all the moments collectively determines the probability distribution. This fact can be very useful! In this way moments give an analogue of a series representation, and are sometimes more useful than the PDF or CDF for encoding the distribution.

### 03 Illustration

> [!mexample] Example - Function given by chart
> ![33 - Expectation of function on RV given by chart](Probability%20-%20Examples%20-%20W04-06.md#33%20-%20Expectation%20of%20function%20on%20RV%20given%20by%20chart)

> [!mexample] Variance of uniform random variable
> ![34 - Variance of uniform random variable](Probability%20-%20Examples%20-%20W04-06.md#34%20-%20Variance%20of%20uniform%20random%20variable)

> [!exercise] Exercise - Probabilities via CDF
> ![36 - Probabilities via CDF](Probability%20-%20Examples%20-%20W04-06.md#36%20-%20Probabilities%20via%20CDF)

### 04 Theory
Suppose we are given the PDF $f_X(x)$ of $X$, a continuous RV.

What is the PDF $f_{g(X)}$, the PDF of the derived variable given by composing $X$ with $g:\mathbb{R}\to\mathbb{R}$?

> [!warning] PDF of derived
> The PDF of $g(X)$ is *not* (usually) equal to $g\circ f_X(x)$.

> [!summary] Relating PDF and CDF
> When the CDF of $X$ is differentiable, we have: 
> $$\begin{align*}F_X(x)=\int_{-\infty}^x f_X(t)\,dt\quad &\implies\quad f_X(x)=\frac{d}{dx}F_X(x)\\\\ F_{g(X)}(x)=\int_{-\infty}^x f_{g(X)}(t)\,dt\quad &\implies\quad f_{g(X)}(x)=\frac{d}{dx}F_{g(X)}(x)\end{align*}$$

Therefore, if we know $f_X(x)$, we can find $f_{g(X)}(x)$ using a 3-step process:

1. & Find $F_X(x)$, the CDF of $X$, by integration.
    - Compute $\int_{-\infty}^x f_X(t)\,dt$.
    - Now remember that $F_X(x)=P[X\leq x]$.
2. && Find $F_{g(X)}(x)$, the CDF of $g(X)$, by direct comparison to $F_X(x)$.
    - When $g$ is monotone increasing, we have equivalent conditions: $$g(X)\leq x\quad\iff\quad X\leq g^{-1}(x)$$
    - Therefore: $$P[g(X)\leq x]\quad=\quad P[X\leq g^{-1}x]$$
    - By definition of CDFs: $$F_{g(X)}(x)\quad=\quad F_X(g^{-1}(x))$$
3. & Find $f_{g(X)}(x)$, the PDF of $g(X)$, by differentiation.
    - Use $f_X(x)=\frac{d}{dx}F_{g(X)}(x)$.

### 05 Illustration

> [!mexample] Example - PDF of derived from CDF
> ![35 - PDF of derived from CDF](Probability%20-%20Examples%20-%20W04-06.md#35%20-%20PDF%20of%20derived%20from%20CDF)

## Continuous wait times

### 06 Theory

> [!concept] Exponential variable
> A random variable $X$ is **exponential**, written $X\sim \text{Exp}(\lambda)$, when $X$ measures the *wait time until first arrival* in a Poisson process with rate $\lambda$.
> 
> Exponential PDF: $$f_X(t)=\begin{cases} \lambda e^{-\lambda t} & t\geq 0 \\ 0 & t<0 \end{cases}$$

- The exponential distribution is the continuous counterpart of the geometric distribution.
    - Analogous to how the Poisson distribution is a like a continuous binomial.
- Notice that: $$\int_0^\infty e^{-\lambda t}\,dt \quad ⨠⨠ \quad  -\lambda^{-1} (e^{-\lambda\cdot \infty}-1)\quad ⨠⨠ \quad \lambda^{-1}$$so the coefficient of $\lambda$ in $f_X$ is there to ensure that $P[-\infty\leq X\leq\infty]=1$.

- ! Notice also that the “tail probability” $P[X>t]$ is given by $e^{-\lambda t}$, an exponential decay.
    - Compute the improper integral to find this.

---

> [!concept] Erlang variable
> A random variable $X$ is **Erlang**, written $X\sim\mathrm{Erlang}(\ell,\lambda)$, when $X$ measures the *wait time until $\ell^\text{th}$ arrival* in a Poisson process with rate $\lambda$.
> 
> Erlang PDF: $$f_X(t)=\frac{\lambda^\ell}{(\ell-1)!}t^{\ell-1}e^{-\lambda t}$$

- The Erlang distribution is the continuous counterpart of the Pascal distribution.

### 07 Illustration

> [!mexample] Example - Earthquake wait time
> ![37 - Earthquake wait time](Probability%20-%20Examples%20-%20W04-06.md#37%20-%20Earthquake%20wait%20time)

### 08 Theory

> [!abstract] The memoryless distribution is exponential
> **The exponential distribution is memoryless.** This means that knowledge that an event has not yet occurred does not affect the probability of its occurring in future time intervals: 
> $$
> P[X>t+s\mid X>t] = P[X>s].
> $$
> This is easily checked using the PDF: $e^{-\lambda(t+s)}\big/ e^{-\lambda t}=e^{-\lambda s}$.
> 
> **No other continuous distribution is memoryless.** This means any other (continuous) memoryless distribution agrees in probability with the exponential distribution. The reason is that the memoryless property can be rewritten as $P[X>t+s]=P[X>t] P[X>s]$. Consider $P[X>x]$ as a function of $x$, and notice that this function *converts sums into products*. Only the exponential function can do this.
> 
> **The geometric distribution is the discrete memoryless one.**
> $$\begin{gather*}P[X>n] \quad ⨠⨠ \quad  \sum_{k=n+1}^\infty q^{k-1}p \quad ⨠⨠ \quad  q^np(1+q+q^2+\dots) \\\\ ⨠⨠ \quad  q^n\frac{p}{1-q} \quad ⨠⨠ \quad  q^n\end{gather*}$$
> 
> and by substituting $n+k$, we also know $P[X>n+k]=q^{n+k}$.
> 
> Then: $$\begin{gather*}P[X=n+k\mid X>n] \quad ⨠⨠ \quad  \frac{P[X=n+k]}{P[X>n]} \quad ⨠⨠ \quad  \frac{q^{n+k-1}p}{q^n} \\\\ ⨠⨠ \quad  q^{k-1}p \quad ⨠⨠ \quad  P[X=k]\end{gather*}$$

> [!extra] Extra - Inversion of decay rate factor in exponential
> For constants $a$ and $\lambda$: $$\mathrm{Exp}(a\lambda)\sim \tfrac{1}{a}\mathrm{Exp}(\lambda)$$
> **Derivation**
> Let $X\sim \mathrm{Exp}(\lambda)$ and observe that $P[X>t]=e^{-\lambda t}$ (the “tail probability”).
> 
> Now observe that: $$P[a^{-1}X>t]=P[X>a t] = e^{-\lambda at}$$
> Let $Y\sim \mathrm{Exp}(a\lambda)$. So we see that: $$P[a^{-1}X>t]=P[Y>t]$$
> 
> Since the tail event is complementary to the cumulative event, these two distributions have the same CDF, and therefore they are equal.

> [!extra] Extra - Geometric limit to exponential
> Divide the waiting time into small intervals. Let $p=\frac{\lambda}{n}$ be the probability of at least one success in the time interval $[a,a+\frac{1}{n}]$ for any $a$. Assume these events are independent.
> 
> A random variable $T_n$ measuring the end time of the first interval $[\frac{k-1}{n},\frac{k}{n}]$ containing a success would have a geometric distribution with $\frac{k}{n}$ in place of $k$: $$P\left[T_n = \frac{k}{n}\right] = \left(1-\frac{\lambda}{n}\right)^{k-1} \frac{\lambda}{n}$$
> 
> By taking the sum of a geometric series, one finds: $$P[T_n>x]=\left( 1-\frac{\lambda}{n} \right)^{\lfloor nx \rfloor}$$
> 
> Thus $P[T_n>x]\to e^{-\lambda x}$ as $n\to\infty$.

