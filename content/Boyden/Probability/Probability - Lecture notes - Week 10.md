---
cssclasses:
  - hide-embedded-header
title: Week 10 notes
---
## Expectation for two variables

### 01 Theory

> [!concept] Expectation for a function on two variables
> Discrete case: $$E[\,g(X,Y)\,] \quad=\quad  \sum_{k,\ell} g(k,\ell)\,P_{X,Y}(k,\ell)\qquad \text{(sum over possible values)}$$
> 
> Continuous case: $$E[\,g(X,Y)\,] \quad=\quad  \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} g(x,y)\,f_{X,Y}(x,y)\,dx\,dy$$

These formulas are *not trivial to prove*, and we omit the proofs. (Recall the technical nature of the proof we gave for $E[\,g(X)\,]$ in the discrete case.)

---

> [!concept] Expectation sum rule
> Suppose $X$ and $Y$ are *any* two random variables on the same probability model.
> 
> Then: $$E[X+Y] = E[X] + E[Y]$$

We already know that expectation is linear in a single variable: $E[aX+b]=aE[X]+b$.

Therefore this two-variable formula implies: 
$$E[aX+bY+c]=aE[X]+bE[Y]+c$$

> [!concept] Expectation product rule: independence
> Suppose that $X$ and $Y$ are *independent*.
> 
> Then we have: $$E[XY]=E[X]E[Y]$$

---

> [!extra] Extra - Proof: Expectation sum rule, continuous case
> Suppose $f_X$ and $f_Y$ give marginal PDFs for $X$ and $Y$, and $f_{X,Y}$ gives their joint PDF.
> 
> Then: 
> $$
> \begin{align*}
> E[X+Y] \quad &⨠⨠ \quad \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} (x+y)f_{X,Y}(x,y)\,dx\,dy  \\\\
> &⨠⨠ \quad \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} xf_{X,Y} \,dx\,dy + \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} yf_{X,Y}\,dx\,dy \\\\
> &⨠⨠ \quad \int_{-\infty}^{+\infty} xf_X(x)\,dx + \int_{-\infty}^{+\infty} yf_Y(y)\,dy \\\\
> &⨠⨠ \quad E[X] + E[Y]
> \end{align*}
> $$
> 
> Observe that this calculation relies on the formula for $E[\,g(X,Y)\,]$, specifically with $g(x,y)=x+y$.

> [!extra] Extra - Proof: Expectation product rule
> $$
> \begin{align*}
> E[XY] \quad &⨠⨠ \quad  \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} (xy) f_{X,Y}(x,y) \,dx\,dy \\\\
> &⨠⨠ \quad  \int_{-\infty}^{+\infty} \int_{-\infty}^{+\infty} (xy) f_X(x)f_Y(y)\,dx\,dy \\\\
> &⨠⨠ \quad \int_{-\infty}^{+\infty}xf_X(x)\,dx \int_{-\infty}^{+\infty} yf_Y(y)\,dy \\\\
> &⨠⨠ \quad E[X]E[Y]
> \end{align*}
> $$

### 02 Illustration

> [!mexample] $E[\,X^2+Y\,]$ from joint PMF chart
> ![$E[\,X^2+Y\,]$ from joint PMF chart](Probability/2025%20Spring/W10%20-%20Examples.md#$E[%20,X%202+Y%20,]$%20from%20joint%20PMF%20chart)

> [!exercise] Exercise - Understanding expectation for two variables
> Suppose you know *only* that $X\sim\mathrm{Geo}(p)$ and $Y\sim\mathrm{Bin}(n,q)$.
> 
> Which of the following can you calculate? $$E[X+Y],\quad E[XY],\quad E[X^2+Y^2],\quad E[(X+Y)^2]$$

> [!mexample] $E[Y]$ two ways, and $E[XY]$, from joint density
> ![$E[Y]$ two ways, and $E[XY]$, from joint density](Probability/2025%20Spring/W10%20-%20Examples.md#$E[Y]$%20two%20ways,%20and%20$E[XY]$,%20from%20joint%20density)

## Covariance and correlation

### 03 Theory

Write $\mu_X=E[X]$ and $\mu_Y=E[Y]$.

Observe that the random variables $X-\mu_X$ and $Y-\mu_Y$ are “centered at zero,” meaning that $E[X-\mu_X]=0=E[Y-\mu_Y]$.

> [!concept] Covariance
> Suppose $X$ and $Y$ are any two random variables on a probability model. The **covariance** of $X$ and $Y$ measures the *typical synchronous deviation* of $X$ and $Y$ from their respective means.
> 
> Then the *defining formula* for covariance of $X$ and $Y$ is: $$\mathrm{Cov}[X,Y] \;=\;  E[\,(X-\mu_X)(Y-\mu_Y)\,]$$
> 
> There is also a *shorter formula*: $$\mathrm{Cov}[X,Y] \;=\;  E[XY] - \mu_X \mu_Y$$

To derive the shorter formula, first expand the product $(X-\mu_X)(Y-\mu_Y)$ and then apply linearity.

Notice that covariance is always *symmetric*: 
$$\mathrm{Cov}[X,Y]\quad=\quad \mathrm{Cov}[Y,X]$$

The *self* covariance equals the variance: $$\mathrm{Cov}[X,X]\quad=\quad \mathrm{Var}[X]$$

The *sign* of $\mathrm{Cov}[X,Y]$ reveals the *correlation type* between $X$ and $Y$: 

| Correlation               | Sign                  |
| ------------------------- | --------------------- |
| **Positively correlated** | $\mathrm{Cov}(X,Y)>0$ |
| **Negatively correlated** | $\mathrm{Cov}(X,Y)<0$ |
| **Uncorrelated**          | $\mathrm{Cov}(X,Y)=0$ |

---

> [!concept] Correlation coefficient
> Suppose $X$ and $Y$ are any two random variables on a probability model.
> 
> Their **correlation coefficient** is a rescaled version of covariance that measures the *synchronicity of deviations*: $$\rho[X,Y] \;=\; \frac{\mathrm{Cov}[X,Y]}{\sigma_X \sigma_Y}$$
> 
> The rescaling ensures: $$-1\,\leq\, \rho_{X,Y}\,\leq\, +1$$

![center|500](Pasted%20image%2020250315213204.png)

Covariance depends on the *separate variances* of $X$ and $Y$ as well as their relationship.

Correlation coefficient, because we have divided out $\sigma_X \sigma_Y$, depends only on their *relationship*.

### 04 Illustration

> [!mexample] Covariance from PMF chart
> ![Covariance from PMF chart](Probability/2025%20Spring/W10%20-%20Examples.md#Covariance%20from%20PMF%20chart)

### 05 Theory

> [!abstract] Covariance bilinearity
> Given any three random variables $X$, $Y$, and $Z$, we have: 
> $$\begin{align*}\mathrm{Cov}[\,X+Y,\,Z\,] \quad&= \quad  \mathrm{Cov}[X,Z] + \mathrm{Cov}[Y,Z]\\\\ \mathrm{Cov}[\,Z,\,X+Y\,] \quad&= \quad  \mathrm{Cov}[Z,X] + \mathrm{Cov}[Z,Y]\end{align*}$$

> [!abstract] Covariance and correlation: shift and scale
> Covariance *scales with each input, and ignores shifts*: 
> $$\mathrm{Cov}[\,aX+b,\,Y\,] \quad=\quad   a\,\mathrm{Cov}[X,Y] \quad=\quad  \mathrm{Cov}[\,X,\,aY+b\,]$$
> 
> Whereas shift or scale in correlation *only affects the sign*: 
> $$\rho[\,aX+b,\,Y\,] \quad=\quad  \mathrm{sign}(a)\,\rho[X,Y] \quad=\quad \rho[\,X,\,aY+b\,]$$

> [!Extra] Extra - Proof of covariance bilinearity
> $$
> \begin{align*}
> \mathrm{Cov}[X+Y,\,Z] \quad &⨠⨠ \quad  E[(X+Y-(\mu_X+\mu_Y))(Z-\mu_Z)] \\\\
> &⨠⨠ \quad E[(X-\mu_X + Y-\mu_Y)(Z-\mu_Z)] \\\\
> &⨠⨠ \quad E[(X-\mu_X)(Z-\mu_Z)] + E[(Y-\mu_Y)(Z-\mu_Z)] \\\\
> &⨠⨠ \quad \mathrm{Cov}[X,Z] + \mathrm{Cov}[Y,Z]
> \end{align*}
> $$

> [!extra] Extra - Proof of covariance shift and scale rule
> $$
> \begin{align*}
> \mathrm{Cov}[aX+b,Y] \quad&⨠⨠ \quad  E[(aX+b)Y]-E[aX+b]E[Y] \\\\
> &⨠⨠ \quad E[aXY + bY] - aE[X]E[Y] - E[b]E[Y] \\\\
> &⨠⨠ \quad aE[XY] + bE[Y] - aE[X]E[Y] - bE[Y] \\\\
> &⨠⨠ \quad a\big(E[XY]-E[X]E[Y]\big)
> \end{align*}
> $$

---

> [!abstract] Independence implies zero covariance
> Suppose that $X$ and $Y$ are any two random variables on a probability model.
> 
> If $X$ and $Y$ are independent, then: $$\mathrm{Cov}[X,Y]=0$$

> [!abstract] Sum rule for variance
> Suppose that $X$ and $Y$ are any two random variables on a probability space.
> 
> Then: $$\mathrm{Var}[X+Y] = \mathrm{Var}[X] + \mathrm{Var}[Y] + 2\mathrm{Cov}[X,Y]$$
> 
> When $X$ and $Y$ are *independent*, the formula simplifies to: $$\mathrm{Var}[X+Y] = \mathrm{Var}[X] + \mathrm{Var}[Y]$$

> [!abstract] Proof: Independence implies zero covariance
> The product rule for expectation, since $X$ and $Y$ are independent: $$E[XY]=E[X]E[Y]$$
> 
> The shorter formula for covariance: $$\mathrm{Cov}[X,Y]\;=\;E[XY]-\mu_X \mu_Y$$
> 
> But $E[XY]=E[X]E[Y]=\mu_X \mu_Y$, so those terms cancel and $\mathrm{Cov}[X,Y]=0$.

> [!extra] Proof: Sum rule for variance
> $$
> \begin{align*}
> \mathrm{Var}[X+Y] \quad &⨠⨠ \quad E\Big[\,\big(X+Y-(\mu_X+\mu_Y)\big)^2\,\Big] \\\\
> &⨠⨠ \quad E\Big[\,\big((X-\mu_X)+(Y-\mu_Y)\big)^2\,\Big] \\\\
> &⨠⨠ \quad  E\Big[\,(X-\mu_X)^2 + (Y-\mu_Y)^2 + 2(X-\mu_X)(Y-\mu_Y)\,\Big] \\\\
> &⨠⨠ \quad  \mathrm{Var}[X] + \mathrm{Var}[Y] + 2\mathrm{Cov}[X,Y]
> \end{align*}
> $$

> [!extra] Proof that $-1\leq \rho \leq +1$
> 1. Create standardizations: $$\tilde{X}\;=\;\frac{X-\mu_X}{\sigma_X},\qquad \tilde{Y}\;=\;\frac{Y-\mu_Y}{\sigma_Y}$$
> 2. Now $\tilde{X}$ and $\tilde{Y}$ satisfy $E[\tilde{X}]=0=E[\tilde{Y}]$ and $\mathrm{Var}[\tilde{X}]=1=\mathrm{Var}[\tilde{Y}]$.
> 3. Observe that $\mathrm{Var}[W]\geq 0$ for any $W$. *Variance can’t be negative.*
> 4. Apply the variance sum rule.
>     - Apply to $\tilde{X}$ and $\tilde{Y}$: $$0\leq\mathrm{Var}[\tilde{X}+\tilde{Y}]\;=\;\mathrm{Var}[\tilde{X}]+\mathrm{Var}[\tilde{Y}]+2\mathrm{Cov}[\tilde{X},\tilde{Y}]$$
>     - Simplify: $$\begin{gather*}⨠⨠ \quad 1+1+2\mathrm{Cov}[\tilde{X},\tilde{Y}]\geq 0\\\\ ⨠⨠ \quad 1+\mathrm{Cov}[\tilde{X},\tilde{Y}]\geq 0\end{gather*}$$
>     - Notice effect of standardization: $$\mathrm{Cov}[\tilde{X},\tilde{Y}]\quad=\quad \rho[X,Y]$$
>     - Therefore $\rho[X,Y]\geq -1$.
> 1. Modify and reapply variance sum rule.
>     - Change to $\tilde{X}-\tilde{Y}$: $$0\leq \mathrm{Var}[\tilde{X}-\tilde{Y}]\;=\;\mathrm{Var}[\tilde{X}]+\mathrm{Var}[-\tilde{Y}]+2\mathrm{Cov}[\tilde{X},\,-\tilde{Y}]$$
>     - Simplify: $$\begin{gather*}⨠⨠ \quad 1+1-2\mathrm{Cov}[\tilde{X},\tilde{Y}]\geq 0\\\\ ⨠⨠ \quad 1-\mathrm{Cov}[\tilde{X},\tilde{Y}]\geq 0\end{gather*}$$

### 06 Illustration

> [!exercise]  Exercise - Covariance rules
> Simplify: $$\mathrm{Cov}[\,2X+5Y+1,\,Z+8W+X+9\,]$$

> [!exercise] Exercise - Independent variables are uncorrelated
> Let $X$ be given with possible values $\{-1,0,+1\}$ and PMF given uniformly by $P_X(k)=1/3$ for all three possible $k$. Let $Y=X^2$.
> 
> Show that $X$ and $Y$ are dependent but uncorrelated.
> 
> Hint: To speed the calculation, notice that $X^3=X$.

> [!mexample] Variance of sum of indicators
> ![Variance of sum of indicators](Probability/2025%20Spring/W10%20-%20Examples.md#Variance%20of%20sum%20of%20indicators)




