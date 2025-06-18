---
cssclasses:
  - hide-embedded-header
title: Week 12 notes
---
## Summations

### 01 Theory

In many contexts it is useful to consider random variables that are summations of a large number of variables.

> [!concept] Summation formulas: $E[X]$ and $\mathrm{Var}[X]$
> Suppose $X$ is a large sum of random variables: $$X\;=\; X_1+X_2+\cdots +X_n$$
> 
> Then: $$\begin{gather*}E[X] \;=\; E[X_1] + E[X_2] + \dots + E[X_n]\\\\ \mathrm{Var}[X] \;=\; \mathrm{Var}[X_1]+\dots+\mathrm{Var}[X_n] + 2\sum_{i<j}\mathrm{Cov}[X_i,X_j]\end{gather*}$$
> 
> If $X_i$ and $X_j$ are uncorrelated (e.g. if they are independent): $$\mathrm{Var}[X] \;=\; \mathrm{Var}[X_1]+\dots+\mathrm{Var}[X_n]$$

> [!extra] Extra - Derivation of variance of a sum
> Using the definition: 
> $$
> \begin{align*}
> \mathrm{Var}[X_1+\dots+X_n] \;&=\; E\Big[(X_1+\dots+X_n-(\mu_{X_1}+\dots+\mu_{X_n}))^2\Big] \\\\
> &=\; E\Big[\Big((X_1-\mu_{X_1})+\dots+(X_n-\mu_{X_n})\Big)^2\Big] \\\\
> &=\; E\left[ \sum_{i,j}(X_i-\mu_{X_i})(X_j-\mu_{X_j}) \right] \\\\
> &=\; \sum_{i,j} \mathrm{Cov}(X_i,X_j) \\\\
> &=\; \sum_i \mathrm{Var}[X_i] + 2\sum_{i<j}\mathrm{Cov}[X_i,X_j]
> \end{align*}
> $$
> 
> In the last line we use the fact that $\mathrm{Cov}[X,X]=\mathrm{Var}[X]$ for the first term, and the symmetry property of covariance for the second term with the factor of 2.

### 02 Illustration

> [!mexample] Example - Binomial expectation and variance
> ![Binomial expectation and variance](Probability/2025%20Spring/W12%20-%20Examples.md#Binomial%20expectation%20and%20variance)

> [!mexample] Example - Pascal expectation and variance
> ![Pascal expectation and variance](Probability/2025%20Spring/W12%20-%20Examples.md#Pascal%20expectation%20and%20variance)

%% Probably should remove the next one: doesn’t apply variance summation, just regular sum. %%

> [!mexample] Example - Multinomial covariances
> ![Multinomial covariances](Probability/2025%20Spring/W12%20-%20Examples.md#Multinomial%20covariances)

> [!mexample] Example - Hats in the air
> ![Hats in the air](Probability/2025%20Spring/W12%20-%20Examples.md#Hats%20in%20the%20air)

> [!mexample] Months with a birthday
> ![Months with a birthday](Probability/2025%20Spring/W12%20-%20Examples.md#Months%20with%20a%20birthday)

## Central Limit Theorem
### 03 Theory

> [!concept] IID variables
> Random variables are called **independent, identically distributed** when they are independent and have the same distribution.

> [!warning] IID variables: Same distribution, different values
> Independent variables cannot be correlated, so the values taken by IID variables will disagree on all (most) outcomes.
> 
> We do have: $$\text{same distribution}\quad \iff \quad \text{same PMF or PDF}$$

> [!concept] Standardization
> Suppose $X$ is any random variable.
> 
> The **standardization** of $X$ is:
> 
> $$Z\quad=\quad \frac{X-\mu_X}{\sigma_X}$$
> 
> The variable $Z$ has $E[Z]=0$ and $\mathrm{Var}[Z]=1$. We can reconstruct $X$ by:
> 
> $$X\;=\; \sigma_X Z + \mu_X$$


---

Suppose $X_1,\,X_2,\,\dots,\,X_n$ is a collection of IID random variables.

Define: $$S_n=\sum_{i=1}^n X_i \qquad\qquad Z_n=\frac{S_n-n\mu}{\sigma\sqrt{n}}$$

where: $$\mu\;=\; E[X_i] \qquad \sigma^2\;=\; \mathrm{Var}[X_i]\qquad(\text{every }i)$$

So $Z_n$ is the standardization of $S_n$.

Let $Z$ be a standard normal random variable, $Z\sim\mathcal{N}(0,1)$.

> [!abstract] Central Limit Theorem
> Suppose $S_n\;=\; \sum_{i=1}^n X_i$ for IID variables $X_i$, and $Z_n$ are the standardizations of $S_n$.
> 
> Then for any interval $[a,b]\subset\mathbb{R}$: $$\lim_{n\to\infty}\; P\Big[\,Z_n\in [a,b]\,\Big] \quad=\quad P\big[\,Z\in[a,b]\,\big] \;=\; \Phi(b)-\Phi(a)$$
> 
> We say that $Z_n$ *converges in probability* to the standard normal $Z$.

---

Here is a good [explainer video](https://www.youtube.com/watch?v=zeJD6dqJ5lo&list=PLZHQObOWTQDOMxJDswBaLu8xBMKxSTvg8) by 3blue1brown.

The distribution of *a very large sum* of IID variables is determined merely by $\mu$ and $\sigma^2$ from the original IID variables, while the data of higher moments fades away.

The name “**normal distribution**” is used because it arises from a large sum of repetitions of *any* other kind of distribution. It is therefore ubiquitous in applications.

> [!warning] Misuse of the CLT
> It is important to learn when the CLT is applicable and when it is not. Many people (even professionals) apply it wrongly.
> 
> For example, sometimes one hears the claim that *if enough students take an exam, the distribution of scores will be approximately normal*. This is totally wrong!

> [!tip] Intuition for the CLT
> The CLT is about the *distribution of simultaneity*, or (in other words) about *accumulated alignment* between independent variables.
> 
> With a large $n$, deviations of the total sum are predominantly created by *simultaneous* (correlated) deviations of a large portion of summands away from their means, rather than the contributions of individual summands deviating a large amount.
> 
> Simultaneity across a large $n$ of independent items is described by... the bell curve.

> [!extra] Extra - Derivation of CLT
> [CLT derivation](CLT%20derivation.md)

### 04 Illustration

> [!exercise] Exercise - Test scores distribution
> ![Test scores distribution](Probability/2025%20Spring/W12%20-%20Examples.md#Test%20scores%20distribution)

> [!exercise] Exercise - Height follows a bell curve
> ![Height follows a bell curve](Probability/2025%20Spring/W12%20-%20Examples.md#Height%20follows%20a%20bell%20curve)

### 05 Theory

Normal approximations rely on the limit stated in the CLT to approximate probabilities for large sums of variables.

> [!concept] Normal approximation
> Let $S_n\;=\; X_1+\cdots+X_n$ for IID variables $X_i$ with $\mu=E[X_i]$ and $\sigma^2=\mathrm{Var}[X_i]$.
> 
> The **normal approximation** of $S_n$ is: 
> 
> $$F_{S_n}(s)\quad\approx\quad \Phi\left(\frac{s-n\mu}{\sigma\sqrt{n}}\right)$$

For example, suppose $X_i\sim\mathrm{Ber}(p)$, so $S_n\sim \mathrm{Bin}(n,p)$. We know $\mu=p$ and $\sigma=pq$. Therefore: $$F_{S_n}(s)\quad\approx\quad \Phi\left(\frac{s-np}{\sqrt{npq}}\right)$$

A rule of thumb is that the normal approximation to the binomial is effective when $npq>10$.

> [!tip] Efficient computation
> This CDF is *far* easier to compute for large $n$ than the CDF of $S_n$ itself. The factorials in $n\choose k$ are hard even for a computer when $n$ is large, and the summation adds another $n$ factor to the scaling cost.

### 06 Illustration

> [!mexample] Example - Binomial estimation: 10,000 flips
> ![Binomial estimation: 10,000 flips](Probability/2025%20Spring/W12%20-%20Examples.md#Binomial%20estimation%2010,000%20flips)

> [!mexample] Example - Summing 1000 dice
> ![Summing 1000 dice](Probability/2025%20Spring/W12%20-%20Examples.md#Summing%201000%20dice)

> [!exercise] Exercise - Estimating $S_{1000}$
> The odds of a random poker hand containing one pair is 0.42.
> 
> Estimate the probability that at least 450 out of 1000 poker hands will contain one pair.

> [!exercise] Exercise - Nutrition study
> ![Nutrition study](Probability/2025%20Spring/W12%20-%20Examples.md#Nutrition%20study)

### 07 Theory

> [!concept] De Moivre-Laplace Continuity Correction Formula
> The normal approximation to a discrete distribution, for *integers $a$ and $b$ close together*, should be improved by adding 0.5 to the range on either side: $$\begin{align*}P[\,a\leq S_n\leq b\,]\quad &\approx\quad P\left[\,a-0.5\leq \sigma\sqrt{n}\,Z+n\mu\leq b+0.5\right]\\\\ &\approx \Phi\left(\frac{b+0.5-n\mu}{\sigma\sqrt{n}}\right)-\Phi\left(\frac{a-0.5-n\mu}{\sigma\sqrt{n}}\right)\end{align*}$$

### 08 Illustration

> [!mexample] Example - Continuity correction of absurd normal approximation
> ![Continuity correction of absurd normal approximation](Probability/2025%20Spring/W12%20-%20Examples.md#Continuity%20correction%20of%20absurd%20normal%20approximation)

