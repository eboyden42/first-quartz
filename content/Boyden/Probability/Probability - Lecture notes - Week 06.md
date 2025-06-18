---
cssclasses:
  - hide-embedded-header
title: Week 06 notes
---
## Continuous families: summary

### 01 Theory

 > [!warning] Memorize this info!

**Uniform:** $X\sim\mathrm{Unif}([a,b])$
- All times $a\leq t\leq b$ equally likely.
- $f_X(t)=\frac{1}{b-a}$
- $E[X]=\frac{a+b}{2}$
- $\mathrm{Var}[X]=\frac{1}{12}(b-a)^2$

**Exponential:** $X\sim\mathrm{Exp}(\lambda)$
- Measures wait time until first arrival.
- $f_X(t)=\lambda e^{-\lambda t}$
- $E[X]=\frac{1}{\lambda}$
- $\mathrm{Var}[X]=\frac{1}{\lambda^2}$

**Erlang:** $X\sim\mathrm{Erlang}(\ell,\lambda)$
- Measures wait time until $\ell^\text{th}$ arrival.
- $f_X(t)=\frac{\lambda^\ell}{(\ell-1)!}t^{\ell-1}e^{-\lambda t}$
- $E[X]=\frac{\ell}{\lambda}$
- $\mathrm{Var}[X]=\frac{\ell}{\lambda^2}$

**Normal:** $X\sim\mathcal{N}(\mu,\sigma^2)$
- Limiting distribution of large sums.
- $f_X(x)=\frac{1}{\sqrt{2\pi\sigma^2}}e^{-(x-\mu)^2/2\sigma^2}$
- $E[X]=\mu$
- $\mathrm{Var}[X]=\sigma^2$

## Normal distribution

### 02 Theory

> [!concept] Normal distribution
> A variable $X$ has a **normal distribution**, written $X\sim\mathcal{N}(\mu,\sigma^2)$, when it has PDF given by: $$f_X(x)=\frac{1}{\sqrt{2\pi\sigma^2}}e^{-(x-\mu)^2/2\sigma^2}$$
> 
> The **standard normal** is $Z\sim\mathcal{N}(0,1)$ and its PDF is usually **denoted by $\varphi$**: $$\varphi(x) = \frac{1}{\sqrt{2\pi}} e^{-x^2/2}$$
> 
> The standard normal CDF is **denoted by $\Phi(z)$**: $$\Phi(z) = \int_{-\infty}^z \frac{1}{\sqrt{2\pi}} e^{-u^2/2}\,du$$

- To show that $\varphi(x)$ is a valid probability density, we must show that $\int_{-\infty}^{+\infty}\varphi(x)\,dx = 1$.
    - This calculation is *not trivial*; it requires a double integral in polar coordinates!
- There is *no explicit antiderivative* of $\varphi$
    - A computer is needed for numerical calculations.
    - A *chart of approximate values* of $\Phi$ is provided for exams.

---

- Check that $E[Z]=0$
    - Observe that $x\varphi(x)$ is an *odd function*, i.e. symmetric about the $y$-axis.
    - One must also verify that the integral converges.
- Check that $\mathrm{Var}[Z]=1$
    - Since $\mu=E[Z]=0$, we find: $$\mathrm{Var}[Z]=E[Z^2] \quad ⨠⨠ \quad  \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} x^2 e^{-x^2/2}\,dx =: I$$
    -  Use integration by parts to compute that $I=1$. (Select $u=x$ and $dv=xe^{-x^2/2}\,dx$.)

---

Generalized normal distributions are related to standard normal distributions by linear transformations. The generalized normal $X\sim \mathcal{N}(\mu,\sigma^2)$ satisfies $X\sim\sigma Z + \mu$, where $Z\sim \mathcal{N}(0,1)$.

Let us check directly that $X\sim\sigma Z+\mu$ by showing their PDFs are equal. Computing the CDF of $X$, we find: 
$$\begin{align*}F_X(x) &= P[X\leq x]\\\\&= P[\sigma Z + \mu\leq x]\\\\&= P[Z\leq \tfrac{x-\mu}{\sigma}]\\\\&= \Phi\left(\tfrac{x-\mu}{\sigma}\right)\end{align*}$$

Then we can find the PDF of $X$ by differentiating $F_X$: 
$$\begin{align*}f_X(x)&= \frac{d}{dx}F_X(x)\\\\&= \frac{d}{dx} \Phi\left(\frac{x-\mu}{\sigma}\right) \\\\&= \frac{1}{\sigma} \varphi\left(\frac{x-\mu}{\sigma}\right)\\\\&= \frac{1}{\sqrt{2\pi \sigma^2}} e^{-(x-\mu)^2/2\sigma^2}\end{align*}$$

Now since we know $X \sim \sigma Z + \mu$, we can infer that $E[X]=\mu$ and $\mathrm{Var}[X]=\sigma^2$.

### 03 Illustration

> [!mexample] Example - Basic generalized normal calculation
> ![Basic generalized normal calculation](Probability/2025%20Spring/W06%20-%20Examples.md#Basic%20generalized%20normal%20calculation)

> [!mexample] Example - Gaussian: interval of $2/3$
> ![Gaussian: interval of $2/3$](Probability/2025%20Spring/W06%20-%20Examples.md#Gaussian%20interval%20of%20$2/3$)

> [!mexample] Example - Heights of American males
> ![Heights of American males](Probability/2025%20Spring/W06%20-%20Examples.md#Heights%20of%20American%20males)

> [!mexample] Example - Variance of normal from CDF table
> ![Variance of normal from CDF table](Probability/2025%20Spring/W06%20-%20Examples.md#Variance%20of%20normal%20from%20CDF%20table)

