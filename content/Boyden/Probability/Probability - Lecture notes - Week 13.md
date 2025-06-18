---
cssclasses:
  - hide-embedded-header
title: Week 13 notes
---
## Deviation and Large Numbers

### 01 Theory - Sample mean

> [!concept] Sample mean and its variance
> The **sample mean** of a set $X_1,\,X_2,\,\dots\,$ of IID random variables is an RV that averages the first $n$ instances: $$M_n(X)\quad=\quad \frac{1}{n}\Big(X_1+\cdots+X_n\Big)$$
> 
> Statistics of the sample mean (for any $i$): $$E[M_n(X)]\;=\; E[X_i]\qquad\qquad \mathrm{Var}[M_n(X)]\;=\; \frac{\mathrm{Var}[X_i]}{n}$$

The sample mean is typically applied to repeated trials of an experiment. The trials are independent, and the probability distribution of outcomes should be identical from trial to trial.

Notice that the variance of the sample mean limits to 0 as $n\to\infty$. As more trials are repeated, and the average of all results is taken, the fluctuations of this average will shrink toward zero. 

As $n\to\infty$ the *distribution* of $M_n(X)$ will converge to a PMF with all the probability concentrated at $E[X_i]$ and none elsewhere.

### 02 Theory - Tail estimation

Every distribution must trail off to zero for large enough $|X|$. The regions where $X$ trails off to zero (large magnitude of $X$) are informally called ‘tails’.

> [!concept] Tail probabilities
> A **tail probability** is a probability with one of these forms: 
> 
> $$P\big[\,X\geq c\,\big]\qquad P\big[\,X\leq -c\,\big]\qquad P\big[\,|X-\mu_X|\geq c\,\big]$$

> [!concept] Markov’s inequality
> Assume that $X\geq 0$. Take any $c>0$.
> 
> Then the **Markov’s inequality** states: 
> 
> $$P\big[\,X\geq c\,\big] \quad\leq\quad \frac{\mu_X}{c}$$

> [!concept] Chebyshev’s inequality
> Take any $X$, and $c>0$.
> 
> Then the **Chebyshev’s inequality** states: 
> 
> $$P\big[\,|X-\mu_X|\geq c\,\big] \quad\leq\quad \frac{\sigma_X^2}{c^2}$$

> [!tip] Markov vs. Chebyshev
> Chebyshev’s inequality works for any $X$, and it usually gives a better estimate than Markov’s inequality.
> 
> The main value of Markov’s inequality is that it only requires knowledge of $\mu_X$.
> 
> Think of Chebyshev’s inequality as a tightening of Markov’s inequality using the additional data of $\sigma_X$.

> [!extra] Derivation of Markov’s inequality - Continuous RV
> Under the hypothesis that $X\geq 0$ and $c>0$, we have: 
> 
> $$\mu_X=E[x]\;=\; \int_0^\infty x f_X(x)\,dx\quad = \quad \int_0^c x f_X(x)\,dx + \int_c^\infty x f_X(x)\,dx$$
> 
> On the range $c\leq x<\infty$ we may convert $x$ to $c$, making the integrand bigger: 
> 
> $$\int_c^\infty x f_X(x)\,dx\quad\geq\quad \int_c^\infty c f_X(x)\,dx$$
> 
> Simplify: 
> 
> $$\int_c^\infty c f_X(x)\,dx ⨠⨠ \quad c\int_c^\infty f_X(x)\,dx \quad ⨠⨠ \quad cP\big[\,X\geq c\,\big]$$
> 
> Also: 
> 
> $$\int_0^c x f_X(x)\,dx\quad\geq\quad 0$$
> 
> Therefore: 
> 
> $$\begin{gathered}\int_0^\infty x f_X(x)\,dx\quad\geq\quad cP\big[\,X\geq c\,\big]\\\\ ⨠⨠ \quad E[x]\quad\geq\quad cP\big[\,X\geq c\,\big] \end{gathered}$$

> [!extra] Extra - Derivation of Chebyshev’s inequality
> Notice that the variable $(X-\mu_X)^2$ is always positive. Chebyshev’s inequality is a simple application of Markov’s inequality to this variable.
> 
> Specifically, using $c^2$ as the Markov constant, Markov’s inequality yields: 
> 
> $$P\big[\,(X-\mu_X)^2\geq c^2\,\big]\quad\leq\quad \frac{E\big[\,(X-\mu_X)^2\,\big]}{c^2}$$
> 
> Then, by monotonicity of square roots: 
> 
> $$(X-\mu_X)^2\geq c^2\quad\iff\quad |X-\mu_X|\geq c$$
> 
> And of course $E\big[\,(X-\mu_X)^2\,\big]=\sigma_X^2$. Chebyshev’s inequality follows.

### 03 Illustration

> [!exercise] Markov’s inequality derivation - Discrete RV
> Derive Markov’s inequality for a discrete RV.

> [!mexample] Example - Markov and Chebyshev
> ![Markov and Chebyshev](Probability/2025%20Spring/W13%20-%20Examples.md#Markov%20and%20Chebyshev)

### 04 Theory - Law of Large Numbers

Let $X_1,\,X_2,\,\dots\,$ be a collection of IID random variables with $\mu=E[X_i]$ for any $i$, and $\sigma^2=\mathrm{Var}[X_i]$ for any $i$.

Recall the sample mean: 

$$M_n(X)\quad=\quad \frac{1}{n}\Big(X_1+\cdots+X_n\Big)$$

Recall that $\mathrm{Var}[M_n(X)]=\frac{\sigma^2}{n}$.

> [!concept] Law of Large Numbers (weak form)
> For any $\varepsilon>0$, by Chebyshev’s inequality we have: 
> 
> $$P\big[\,\big|M_n(X)-\mu\big|\geq \varepsilon\,\big]\quad\leq\quad \frac{\sigma^2}{n\varepsilon^2}\tag{finite LLN}$$
> 
> Therefore: 
> 
> $$\lim_{n\to\infty}\;P\big[\,\big|M_n(X)-\mu\big|\geq \varepsilon\,\big]\quad=\quad 0$$
> 
> And the complement: 
> 
> $$\lim_{n\to\infty}\;P\big[\,\big|M_n(X)-\mu\big|< \varepsilon\,\big]\quad=\quad 1\tag{infinite LLN}$$


### 05 Illustration

> [!mexample] Example - LLN: Average winnings
> ![LLN: Average winnings](Probability/2025%20Spring/W13%20-%20Examples.md#LLN%20Average%20winnings)

> [!exercise] Exercise - Enough samples
> ![Enough samples](Probability/2025%20Spring/W13%20-%20Examples.md#Enough%20samples)

## Statistical testing

### 06 Theory - Significance testing

> [!concept] Significance test
> Ingredients of a significance test (unary hypothesis test): 
> - Null hypothesis event $H_0$
>     - Identify a Claim
>     - Then: $H_0$ is background assumption (supposing Claim isn’t known)
>     - Goal is to *invalidate $H_0$* in favor of Claim
> - Rejection Region (decision rule): an event $R$
>     - $R$ is *unlikely* assuming $H_0$
>     - Directionality: $R$ is *more likely* if Claim
>     - Write $R$ in terms of **decision statistic** $X$ and **significance level $\alpha$**
> - Ability to compute $P[R\mid H_0]$
>     - Usually: inferred from $f_{X|H_0}$ or $P_{X|H_0}$
>     - Adjust $R$ to achieve $P[R\mid H_0]=\alpha$

> [!concept] Significance level
> Suppose we are given a null hypothesis $H_0$ and a rejection region $R$.
> 
> The **significance level of $R$** is: 
> 
> $$\begin{align*}\alpha\quad&= \quad P\big[\,\text{reject }H_0\mid H_0\text{ is true}\,\big]\\\\ &= \quad P[R\mid H_0]\end{align*}$$
> 
> Sometimes the condition is dropped and we write $\alpha=P[R]$, e.g. when a background model without assuming $H_0$ is not known.

> [!tip] Null hypothesis implies a distribution
> Frequently $H_0$ will *not* take the form of an event in a sample space, $H_0\subset S$.
> 
> Usually $S$ is unspecified, yet $H_0$ determines a known distribution.
> 
> At a minimum, the assumption of $H_0$ must determine numbers $P[R\mid H_0]$.

More generally, we do **not** need these details: 
- Background sample space $S$
- Non-conditional distribution (full model): $f_{X}$ or $P_X$
- Complement conditionals: $f_{X|H_0^c}$ or $P_{X|H_0^c}$

---

In basic statistical inference theory, there are two kinds of error.

- Type I error concludes with rejecting $H_0$ when $H_0$ is true.
- Type II error concludes with maintaining $H_0$ when $H_0$ is false.

Type I error is usually a bigger problem. We want to consider $H_0$ “innocent until proven guilty.”

|                          | $H_0$ is true                                      | $H_0$ is false                                          |
| ------------------------ | -------------------------------------------------- | ------------------------------------------------------- |
| Maintain null hypothesis | Made right call                                    | Wrong acceptance <br>$\colorbox{orange}{Type II Error}$ |
| Reject null hypothesis   | Wrong rejection <br>$\colorbox{red}{Type I Error}$ | Made right call                                         |

---

To *design a significance test at $\alpha$,* we must identify $H_0$, and specify $R$ with the property that $P[R\mid H_0]=\alpha$.

When $R$ is written using a variable $X$, we must choose between: 
- One-tail rejection region: $x$ with $R(x)\leq r$ or $x$ with $R(x)\geq r$
- Two-tail rejection region: $x$ with $|R(x)-\mu|\geq c$

### 07 Illustration

> [!mexample] Example - One-tail test: Weighted die
> ![One-tail test: Weighted die](Probability/2025%20Spring/W13%20-%20Examples.md#One-tail%20test%20Weighted%20die)

> [!mexample] Two-tail test: Circuit voltage
> ![Two-tail test: Circuit voltage](Probability/2025%20Spring/W13%20-%20Examples.md#Two-tail%20test%20Circuit%20voltage)

> [!mexample] One-tail test with a Gaussian: Weight loss drug
> ![One-tail test with a Gaussian: Weight loss drug](Probability/2025%20Spring/W13%20-%20Examples.md#One-tail%20test%20with%20a%20Gaussian%20Weight%20loss%20drug)

