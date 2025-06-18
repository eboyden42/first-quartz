---
cssclasses:
  - hide-embedded-header
title: Week 14 notes
---
## Statistical testing cont’d
### 01 Theory - Binary testing, MAP and ML

> [!concept] Binary hypothesis test
> Ingredients of a binary hypothesis test:
> - Complementary hypotheses $H_0$ and $H_1$
>     - Maybe also know the **prior probabilities** $P[H_0]$ and $P[H_1]$
>     - Goal: determine which case we are in, $H_0$ or $H_1$
> - Decision rule made of complementary events $A_0$ and $A_1$
>     - $A_0$ is likely given $H_0$, while $A_1$ is likely given $H_1$
>     - Decision rule: outcome $A_0$, accept $H_0$; outcome $A_1$, accept $H_1$
>     - Usually: $A_i$ written in terms of **decision statistic** $X$ using a **design** 
>     - We cover three **designs**:
>         - MAP and ML (minimize ‘error probability’)
>         - MC (minimizes ‘error cost’)
>     - Designs use $P_{X|H_0}$ and $P_{X|H_1}$ (or $f_{X|H_0}$, $f_{X|H_1}$) to construct $A_0$ and $A_1$

> [!concept] MAP design
> Suppose we know: 
> - Both prior probabilities $P[H_0]$ and $P[H_1]$
> - Both conditional distributions $P_{X|H_0}(x)$ and $P_{X|H_1}(x)$ (or $f_{X|H_0}(x)$ and $f_{X|H_1}(x)$)
> 
> The **maximum a posteriori probability (MAP)** design for a decision statistic $X$: 
> 
> $$A_0\quad=\quad \text{set of $x$ for which:}\qquad $$
> 
> Discrete case: 
> 
> $$P_{X\mid H_0}(x)\cdot P[H_0] \quad \geq\quad P_{X\mid H_1}(x)\cdot P[H_1]$$
> 
> Continuous case: 
> 
> $$f_{X\mid H_0}(x)\cdot P[H_0] \quad \geq\quad f_{X\mid H_1}(x)\cdot P[H_1]$$
> 
> Then $A_1\;=\; \{x\in\mathbb{R}\mid x\notin A_0\}$.
> 
> The MAP design minimizes the total probability of error.

> [!concept] ML design
> Suppose we know only: 
> - Both conditional distributions
> 
> The **maximum likelihood (ML)** design for $X$:  
> 
> $$A_0\quad=\quad \text{set of $x$ for which:}\qquad \begin{align*}P_{X\mid H_0}(x)\;&\geq\; P_{X\mid H_1}(x)\qquad \text{(discrete)}\\\\ f_{X\mid H_0}(x)\;&\geq\; f_{X\mid H_1}(x)\qquad\text{(continuous)}\end{align*}$$
> 
> ML is a simplified version of MAP. $\quad$ (Set $P[H_0]$ and $P[H_1]$ to $0.5$.)

---

The probability of a *false alarm*, a Type I error, is called $P_{FA}$.

The probability of a *miss*, a Type II error, is called $P_{\text{Miss}}$.

$$\begin{align*}P_{FA}\quad&= \quad P[A_1\mid H_0]\\\\ P_{\text{Miss}}\quad&= \quad P[A_0\mid H_1]\end{align*}$$

Total probability of error: 

$$P_{\text{ERR}}\quad=\quad P[A_1\mid H_0]\cdot P[H_0]+P[A_0\mid H_1]\cdot P[H_1]$$

> [!warning] False alarm $\neq$ false alarm
> Suppose $A_1$ sets off a smoke alarm, and $H_0$ is ‘no fire’ and $H_1$ is ‘yes fire’.
> 
> Then $P_{FA}$ is the odds that we get an alarm *assuming there is no fire*.
> 
>  This is *not* the odds of *experiencing* a false alarm (no context). That would be $P[A_1 H_0]$.
>  
>  This is *not* the odds of a *given* alarm being a false one. That would be $P[H_0\mid A_1]$.


### 02 Illustration

> [!mexample] Example - ML test: Smoke detector
> ![ML test: Smoke detector](Probability/2025%20Spring/W14%20-%20Examples.md#ML%20test%20Smoke%20detector)

> [!mexample] Example - MAP test: Smoke detector
> ![MAP test: Smoke detector](Probability/2025%20Spring/W14%20-%20Examples.md#MAP%20test%20Smoke%20detector)

### 03 Theory - MAP criterion proof

> [!extra] Explanation of MAP criterion - discrete case
> First, we show that the MAP design selects for $A_0$ all those $x$ which render $H_0$ more likely than $H_1$.
> 
> Observe this Calculation: 
> 
> $$\begin{align*}P[H_i\mid X=x]\;&= \; P[X=x\mid H_i]\cdot\frac{P[H_i]}{P[X]}\tag{Bayes’ Rule}\\\\ &= \; P_{X|H_i}(x)\cdot \frac{P[H_i]}{P[X]}\tag{Conditional PMF}\end{align*}$$
> 
> Now, take the condition for $A_0$, and cross-multiply: 
> 
> $$⨠⨠ \quad P_{X|H_0}(x)\cdot P[H_0]\;\geq\; P_{X|H_1}(x)\cdot P[H_1]$$
> 
> Divide both sides by $P[X]$ and apply the above Calculation in reverse: 
> 
> $$⨠⨠ \quad P[H_0\mid X=x]\;\geq\; P[H_1\mid X=x]$$
> 
> This is what we sought to prove.
> 
> ---
> 
> Next, we verify that the MAP design minimizes the total probability of error.
> 
> The total probability of error is: 
> 
> $$P_{\mathrm{ERR}}\quad=\quad P[A_1\mid H_0]\cdot P[H_0]+P[A_0\mid H_1]\cdot P[H_1]$$
> 
> Expand this with summation notation (assuming the discrete case): 
> 
> $$⨠⨠ \quad \sum_{x\in A_1}P_{X|H_0}(x)\cdot P[H_0] + \sum_{x\in A_0}P_{X|H_1}(x)\cdot P[H_1]$$
> 
> Now, how do we choose the set $A_0\subset\mathbb{R}$ (and thus $A_1=A_0^c$) in such a way that this sum is minimized?
> 
> Since all terms are positive, and any $x\in\mathbb{R}$ may be placed in $A_1$ or in $A_0$ freely and independently of all other choices, the total sum is minimized when we minimize the impact of placing each $x$.
> 
> So, for each $x$, we place it in $A_0$ if: 
> 
> $$\quad P_{X|H_0}(x)\cdot P[H_0]\;\geq\; P_{X|H_1}(x)\cdot P[H_1]$$
> 
> That is equivalent to the MAP condition.

### 04 Theory - MC design

- Write $C_{10}$ for cost of false alarm, i.e. cost when $H_0$ is true but decided $H_1$.
    - Probability of incurring cost $C_{10}$ is $P_{FA}\cdot P[H_0]$.
- Write $C_{01}$ for cost of miss, i.e. cost when $H_1$ is true but decided $H_0$.
    - Probability of incurring cost $C_{01}$ is $P_{\text{Miss}}\cdot P[H_1]$.

> [!abstract] Expected value of cost incurred
> $$E[C]\quad=\quad P[A_1\mid H_1]\cdot P[H_0]\cdot C_{10} + P[A_0\mid H_1]\cdot P[H_1]\cdot C_{01}$$

> [!concept] MC design
> Suppose we know: 
> - Both prior probabilities $P[H_0]$ and $P[H_1]$
> - Both conditional distributions $P_{X|H_0}(x)$ and $P_{X|H_1}(x)$ (or $f_{X|H_0}(x)$ and $f_{X|H_1}(x)$)
> 
> The **minimum cost (MC)** design for a decision statistic $X$: 
> 
> $$A_0\quad=\quad \text{set of $x$ for which:}\qquad $$
> 
> Discrete case: 
> 
> $$P_{X\mid H_0}(x)\cdot P[H_0]\cdot C_{10} \quad \geq\quad P_{X\mid H_1}(x)\cdot P[H_1]\cdot C_{01}$$
> 
> Continuous case: 
> 
> $$f_{X\mid H_0}(x)\cdot P[H_0]\cdot C_{10} \quad \geq\quad f_{X\mid H_1}(x)\cdot P[H_1]\cdot C_{01}$$
> 
> Then $A_1\;=\; \{x\in\mathbb{R}\mid x\notin A_0\}$.
> 
> The MC design minimizes the expected value of the cost of error.

> [!extra] MC minimizes expected cost
> Inside the argument that MAP minimizes total probability of error, we have this summation: 
> 
> $$P_{\mathrm{ERR}}\quad=\quad \sum_{x\in A_1}P_{X|H_0}(x)\cdot P[H_0] + \sum_{x\in A_0}P_{X|H_1}(x)\cdot P[H_1]$$
> 
> The expected value of the cost has a similar summation: 
> 
> $$E[C]\quad=\quad \sum_{x\in A_1}P_{X|H_0}(x)\cdot P[H_0]\cdot C_{10} + \sum_{x\in A_0}P_{X|H_1}(x)\cdot P[H_1]\cdot C_{01}$$
> 
> Following the same reasoning, we see that the cost is minimized if each $x$ is placed into $A_0$ precisely when the MC design condition is satisfied, and otherwise it is placed into $A_1$.

### 05 Illustration

> [!mexample] Example - MC Test: Smoke detector
> ![MC Test: Smoke detector](Probability/2025%20Spring/W14%20-%20Examples.md#MC%20Test%20Smoke%20detector)

## Mean square error
### 06 Theory - Minimum mean square error

Suppose our problem is to *estimate* or *guess* or *predict* the value of a random variable $X$ in one run of the experiment. Assume we have the distribution of $X$. Which value do we choose?

There is no single best answer to this question. The best answer is a function of additional factors in the problem context.

One method is to pick a value where the PMF or PDF of $X$ is maximal. This is a value of highest probability. (There may be more than one.)

Another method is to pick the expected value $E[X]$.

For the normal distribution, or any symmetrical distribution, these are the same value. For most distributions they are not the same value.

---

> [!concept] Mean square error
> Given an estimate $\hat{x}\in\mathbb{R}$ for a random variable $X$, the **mean square error (MSE)** of $\hat{x}$ is: $$E\big[(X-\hat{x})^2\big]$$

The MSE quantifies the typical (square of the) error, meaning the difference between the true value $X$ and the estimate $\hat{x}$. The expected value calculates the typical value of this error.

Other error estimates are reasonable and useful in niche contexts. For example, $E\,[\,|X-\hat{x}|\,]$ or $\mathrm{Max}\,|X-\hat{x}|$. They are not frequently used, so we do not consider their theory further.

---

In problem contexts where large errors are more costly than small errors (many real problems), the most likely value of $X$ (point with maximal PDF) may fare poorly as an estimate.

It turns out the *expected value $E[X]$* also happens to be the value that *minimizes the MSE*.

> [!abstract] Minimal mean square error
> Given a random variable $X$, its expectation $\hat{x}=E[X]$ provides the estimate with **minimal mean square error**.
> 
> The MSE error itself of $\hat{x}=E[X]$: 
> 
> $$\text{MSE error when $\hat{x}=E[X]$:}\qquad E[(X-\hat{x})^2]\quad=\quad \mathrm{Var}[X]$$

> [!extra] Proof that $E[X]$ gives minimal MSE
> Expand the MSE error: 
> 
> $$E[(X-\hat{x})^2]\quad ⨠⨠ \quad E[X^2]-2\hat{x}E[X]+\hat{x}^2$$
> 
> Minimize this parabola. Differentiate: 
> 
> $$\frac{d}{d\hat{x}}E[(X-\hat{x})^2]\quad ⨠⨠ \quad 0-2E[X]+2\hat{x}$$
> 
> Find zeros: 
> 
> $$\begin{gather*}0-2E[X]+2\hat{x}\quad=\quad 0\\\\ ⨠⨠ \quad  2\hat{x}\quad=\quad 2E[X]\\\\ ⨠⨠ \quad\hat{x}\quad=\quad E[x] \end{gather*}$$


---

When the estimate $\hat{x}$ is made in the absence of information (besides the distribution of $X$), it is called a **blind estimate**. Therefore, $\hat{x}_B=E[X]$ is the blind minimal MSE estimate, and $e_B=\mathrm{Var}[X]$ is the error of this estimate.

In the presence of additional information, namely that event $A$ is known, then the MSE estimate is $\hat{x}_A=E[X\mid A]$ and the error of this estimate is $e_{X|A}=\mathrm{Var}[X\mid A]$.

The MSE estimate can also be conditioned on another variable, say $Y$.

> [!concept] Minimal MSE of $X$ given $Y$
> The minimal MSE estimate of $X$ given another variable $Y$: 
> 
> $$\hat{x}_M(y)\quad=\quad E[X\mid Y=y]$$
> 
> The error of this estimate is $\mathrm{Var}[X\mid Y=y]$, which equals $E[(X-\hat{x}_M(y))^2\mid Y=y]$.

Notice that the minimal MSE of $X$ given $Y$ can be used to define a random variable: 

$$\hat{X}_M(Y)\quad=\quad E[X\mid Y]$$

This variable is a derived variable of $Y$ given by post-composition with the function $\hat{x}_M$.

The variable $\hat{X}_M(Y)$ provides the minimal MSE estimates of $X$ when experimental outcomes are viewed as providing the information of $Y$ only, and the model is used to derive estimates of $X$ from this information.

### 07 Illustration


> [!mexample] Example - Minimal MSE estimate given PMF, given fixed event
> ![Minimal MSE estimate given PMF](Probability/2025%20Spring/W14%20-%20Examples.md#Minimal%20MSE%20estimate%20given%20PMF)

> [!exercise] Exercise - Minimal MSE estimate from joint PDF
> ![Minimal MSE estimate from joint PDF](Probability/2025%20Spring/W14%20-%20Examples.md#Minimal%20MSE%20estimate%20from%20joint%20PDF)


### 08 Theory - Line of minimal MSE

Linear approximation is very common in applied math.

One could consider the linearization of $\hat{x}_M(y)$ (its tangent line) instead of the exact function $\hat{x}_M(y)$.

Instead, one can minimize the MSE over all possible linear functions of $Y$. The line with minimal MSE is called the **linear estimator**.

> [!concept] Line of minimal MSE
> Let $L(y)$ be the line $L(y)=ay+b$. Let $\hat{X}_L(Y)=L(Y)=aY+b$.
> 
> The mean square error (MSE) of $L$ is: 
> 
> $$e_L(a,b)\quad=\quad  E\Big[\big(X-\hat{X}_L(Y)\big)^2\Big]$$
> 
> The **linear estimator** is the line $L_\mathrm{min}$ with minimal MSE, and it is: 
> 
> $$L_{\mathrm{min}}(y)\quad=\quad \rho_{X,Y}\frac{\sigma_X}{\sigma_Y}(y-\mu_Y)+\mu_X$$
> 
> The minimal error value $e_{L_\mathrm{min}}$ is: 
> 
> $$e_{L_\mathrm{min}}\quad=\quad \sigma_X^2(1-\rho_{X,Y}^2)$$
> 
> The variable of minimal error, $X-\hat{X}_{L_\mathrm{min}}(Y)$, is uncorrelated with $Y$.

> [!tip] Slope and $\rho_{X,Y}$
> Notice: 
> 
> $$\frac{\hat{X}_{L_\mathrm{min}}(Y)-\mu_X}{\sigma_X}\quad=\quad \rho_{X,Y}\cdot \left(\frac{Y-\mu_Y}{\sigma_Y}\right)$$
> 
> Thus, $\rho_{X,Y}$ is the *slope* of the minimal MSE line for *standardized* variables $X$ and $Y$.

![center|600](Pasted%20image%2020250413150424.png)

In each graph, $E[X]=E[Y]=0$ and $\mathrm{Var}[X]=\mathrm{Var}[Y]=1$.

The line of minimal MSE is the “best fit” line, $\hat{X}_{L_\mathrm{min}}(Y)=\rho_{X,Y}\, Y$.

### 09 Illustration

> [!mexample] Example - Estimating on a variable interval
> ![Estimating on a variable interval](Probability/2025%20Spring/W14%20-%20Examples.md#Estimating%20on%20a%20variable%20interval)

> [!exercise] Exercise - Line of minimal MSE given joint PDF
> ![Line of minimal MSE given joint PDF](Probability/2025%20Spring/W14%20-%20Examples.md#Line%20of%20minimal%20MSE%20given%20joint%20PDF)

