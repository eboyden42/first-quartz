---
cssclasses:
  - hide-embedded-header
title: Week 07 notes
---
## Joint distributions

### 01 Theory
Joint distributions describe the probabilities of events associated with multiple random variables simultaneously.

In this course we consider only two variables at a time, typically called $X$ and $Y$. It is easy to extend this theory to vectors of $n$ random variables.

> [!concept] Joint PMF and joint PDF
> Discrete joint PMF: 
> $$P_{X,Y}(k,\ell) \quad=\quad P_{X,Y}\big[X=x,\,Y=\ell\big]$$
> 
> Continuous joint PDF: 
> $$f_{X,Y}(x,y)\quad =\quad \text{density at}\;(x,y)$$

![center|300](Pasted%20image%2020231023204355.png)

![center|200](Pasted%20image%2020231009112240.png)

**Probabilities of events: Discrete case**
If $B\subset\mathbb{R}^2$ is a set of points in the plane, then an *event $\mathcal{B}$* is formed by the set of all outcomes $s$ mapped by $X$ and $Y$ to points in $B$: 
$$\mathcal{B} = \Big\{s\in S\;\Big|\; \big(X(s),\,Y(s)\big)\in B\Big\}$$

The probabilities of such events can be measured using the joint PMF: 
$$P\big[(X,Y)\in B\big]=P[\mathcal{B}] \quad=\quad \sum_{(k,\ell)\in B}P_{X,Y}(k,\ell)$$

**Probabilities of events: Continuous case**
Let $\mathcal{V}=[a,b]\times [c,d]\subset\mathbb{R}^2$ be the rectangular region defined by $(x,y)\in \mathbb{R}^2$ such that $a\leq x\leq b$ and $c\leq y\leq d$. Then: 
$$P\big[(x,y)\in \mathcal{V}\big] = P\Big[a\leq X\leq b,\; c\leq Y\leq d\Big] \quad=\quad \int_c^d\int_a^b f_{X,Y}(x,y)\,dx\,dy$$
For more general regions $\mathcal{V}\subset\mathbb{R}^2$: 
$$P\Big[ (X,Y)\in \mathcal{V} \Big] \quad=\quad \iint_\mathcal{V} f_{X,Y}(x,y)\,dA$$

---

The existence of a variable $Y$ does not change the theory for a variable $X$ considered by itself.

However, it is possible to *relate* the theory for $X$ to the theory for $(X,Y)$, in various ways.

The simplest relationship is the **marginal distribution** for $X$, which is merely the distribution of $X$ *itself*, considered as a single random variable, but in a context where it is *derived from the joint* distribution for $(X,Y)$.

> [!concept] Marginal PMF, marginal PDF
> Marginal distributions are obtained from joint distributions by *summing* the probabilities over all possibilities of the *other* variable.
> 
> Discrete marginal PMF: 
> $$\begin{align*}P_{X}(k) \quad&= \quad \sum_\ell P_{X,Y}(k,\ell)\\\\ P_{Y}(\ell) \quad&= \quad \sum_k P_{X,Y}(k,\ell)\end{align*}$$
> 
> Continuous marginal PMF: 
> $$\begin{align*}f_{X}(x) \quad&= \quad \int_{-\infty}^{+\infty} f_{X,Y}(x,y)\,dy\\\\ f_{Y}(y) \quad&= \quad \int_{-\infty}^{+\infty} f_{X,Y}(x,y)\,dx\end{align*}$$

---

> [!extra] Infinitesimal method
> Suppose $X$ has density $f_X(x)$ that is continuous at $x_0$. Then for small $dx>0$: $$P[x_0<X\leq x_0+dx]\quad\approx\quad f_X(x)\,dx$$
> 
> Suppose $X$ and $Y$ have joint density $f_{X,Y}(x,y)$ that is continuous at $(x_0,y_0)$. Then for small $dx,\,dy>0$: $$P\big[x_0<X \leq x_0+dx,\; y_0<Y \leq y_0+dy\big]\quad \approx \quad f_{X, Y}(x_0, y_0)\,dxdy$$

> [!warning] Joint densities depend on coordinates
> The density $f_{X,Y}(x,y)$ in these integration formulas depends on the way $X$ and $Y$ act as Cartesian coordinates and determine differential areas $dx\,dy$ as little rectangles.
> 
> To find a density $f_{R,\Theta}(r,\theta)$ in polar coordinates, for example, it is *not enough* to solve for $x(r,\theta)$ and $y(r,\theta)$ and plug into $f_{X,Y}$. We must consider the differential area $dx\,dy$ vs. $dr\,d\theta$. We find that $dx\,dy=r\,dr\,d\theta$. So we will add a factor of $r$. See an example below for details.

> [!extra] Joint densities may not exist
> It is not always *possible* to form a joint PDF $f_{X,Y}$ from any two continuous RVs $X$ and $Y$.
> 
> For example, if $X=Y$, then $(X,Y)$ cannot have a joint PDF, since $P[X=Y]=1$ but the integral over the region $X=Y$ will always be 0. (The area of a line is zero.)

### 02 Illustration

> [!mexample] Example - Smaller and bigger rolls
> ![Joint and marginal PMFs - Smaller and bigger roll](Probability/2025%20Spring/W07%20-%20Examples.md#Joint%20and%20marginal%20PMFs%20-%20Smaller%20and%20bigger%20roll)

> [!exercise] Exercise - Reading a PMF table
> ![Event probability drawn from PMF table](Probability/2025%20Spring/W07%20-%20Examples.md#Event%20probability%20drawn%20from%20PMF%20table)

> [!exercise] Exercise - Coin flipping
> ![Joint and marginal PMFs - Coin flipping](Probability/2025%20Spring/W07%20-%20Examples.md#Joint%20and%20marginal%20PMFs%20-%20Coin%20flipping)

> [!mexample] Example - Marginal and event probability from joint density
> ![Marginal and event probability from joint density](Probability/2025%20Spring/W07%20-%20Examples.md#Marginal%20and%20event%20probability%20from%20joint%20density)

> [!exercise] Exercise - Marginals from joint density
> ![Marginals from joint density](Probability/2025%20Spring/W07%20-%20Examples.md#Marginals%20from%20joint%20density)

> [!exercise] Exercise - Event probability from joint density
> ![Event probability from joint density](Probability/2025%20Spring/W07%20-%20Examples.md#Event%20probability%20from%20joint%20density)

### 03 Theory

> [!concept] Joint CDF
> The joint CDF of $X$ and $Y$ is defined by: 
> $$F_{X,Y}(x,y) \quad=\quad P\Big[X\leq x,\,Y\leq y\Big]$$

We can relate the joint CDF to the joint PDF using integration: 
$$F_{X,Y}(x,y) \quad=\quad \int_{-\infty}^y \int_{-\infty}^x f_{X,Y}(s,t)\,ds\,dt$$
![center|350](Pasted%20image%2020250222141429.png)

Conversely, if $X$ and $Y$ have a continuous joint PDF $f_{X,Y}(x,y)$ that is also *differentiable*, we can obtain the PDF from the CDF using partial derivatives: 
$$f_{X,Y}(x,y) \quad=\quad \frac{\partial^2}{\partial x \partial y}\, F_{X,Y}(x,y)$$

---

There is also a **marginal CDF** that is computed using a limit: 
$$F_X(x) = \lim_{y\to+\infty} F_{X,Y}(x,y)$$

This could also be written, somewhat abusing notation, as $F_X(x)=F_{X,Y}(x,+\infty)$.

### 04 Illustration

> [!exercise] Exercise - Properties of joint CDFs
> (a) Show with a drawing that if both $x<x'$ and $y<y'$, we know: 
> $$F_{X,Y}(x,y)\leq F_{X,Y}(x',y')$$
> 
> (b) Explain why:
> - $F_X(x)=F_{X,Y}(x,\infty)$
> - $F_Y(y)=F_{X,Y}(\infty,y)$
> 
> (c) Explain why: 
> - $F_{X,Y}(x,-\infty)=0$
> - $F_{X,Y}(-\infty,y)=0$

## Independent random variables
### 05 Theory

> [!concept] Independent random variables
> Random variables $X,\,Y$ are **independent** when they satisfy the *product rule* for all valid subsets $B_1,\,B_2\subset \mathbb{R}$: 
> $$P\big[X\in B_1,\,Y\in B_2\big] = P\big[X\in B_1\big]\cdot P\big[Y\in B_2\big]$$

Since $\{X\in B_1,\,Y\in B_2\}= \{X\in B_1\}\cap \{Y\in B_2\}$, this definition is equivalent to independence of *all events* constructible using the variables $X$ and $Y$.

For discrete random variables, it is enough to check independence for simple events of type $\{X=k\}$ and $\{Y=\ell\}$ for $k$ and $\ell$ any *possible values* of $X$ and $Y$.

---

The independence criterion for random variables can be cast entirely in terms of their distributions and written using the PMFs or PDFs.

> [!concept] Independence using PMF and PDF
> Discrete case: 
> $$P_{X,Y}(k,\ell) \quad=\quad P_X(k)\cdot P_Y(\ell)$$
> 
> Continuous case: 
> $$f_{X,Y}(x,y) \quad=\quad f_X(x)\cdot f_Y(y)$$

> [!extra] Independence via joint CDF
> Random variables $X$ and $Y$ are independent when their CDFs obey the product rule: $$F_{X,Y}(x,y) \quad=\quad F_X(x)\cdot F_Y(y)$$

### 06 Illustration

> [!mexample] Example - Meeting in the park
> ![Event probability - Meeting in the park](Probability/2025%20Spring/W07%20-%20Examples.md#Event%20probability%20-%20Meeting%20in%20the%20park)

> [!mexample] Example - Uniform disk: Cartesian vs. polar
> ![Uniform disk: Cartesian vs. polar](Probability/2025%20Spring/W07%20-%20Examples.md#Uniform%20disk%20Cartesian%20vs.%20polar)

