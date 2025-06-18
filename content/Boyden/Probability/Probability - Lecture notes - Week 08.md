---
cssclasses:
  - hide-embedded-header
title: Week 08 notes
---
## Functions on two random variables
### 01 Theory

> [!concept] PMF of any function of two variables
> Suppose $W=g(X,Y)$ and $X,Y$ are discrete RVs.
> 
> The PMF of $W$: $$P_W(w)=\sum_{\overset{(x, y)\text{ s.t.}}{g(x, y)=w}} P_{X, Y}(x, y)$$

> [!concept] CDF of continuous function of two variables
> Suppose $W=g(X,Y)$ and $X,Y$ are continuous RVs, and $g$ is a continuous function.
> 
> The CDF of $W$:
> $$F_W(w)\;=\;P[W \leq w]\;=\;\iint\limits_{g(x, y) \leq w} f_{X, Y}(x, y)\,dxdy$$

One can then compute the PDF of $W$ by differentiation: 
$$f_W(w)\;=\;\frac{d}{dw}F_W(w)$$

### 02 Illustration

> [!mexample] Example - PDF of a quotient
> ![PDF of a quotient](Probability/2025%20Spring/W08%20-%20Examples.md#PDF%20of%20a%20quotient)

> [!exercise] Exercise - PMF of $XY^2$ from chart
> ![PMF of $XY^2$ from chart](Probability/2025%20Spring/W08%20-%20Examples.md#PMF%20of%20$XY%202$%20from%20chart)

> [!mexample] Example - Max and Min from joint PDF
> ![Max and Min from joint PDF](Probability/2025%20Spring/W08%20-%20Examples.md#Max%20and%20Min%20from%20joint%20PDF)

## Sums of random variables
### 03 Theory

The special case where $g(X,Y)=X+Y$ is very useful to study in further depth.

> [!abstract] THEOREM: Continuous PDF of a sum
> Suppose $f_{X,Y}(x,y)$ is the joint PDF for continuous RVs $X$ and $Y$.
> 
> Then the PDF $f_W(w)$ of $W=X+Y$ is given by the formula: 
> $$f_{W}(w)\quad=\quad\int_{-\infty}^{+\infty} f_{X,Y}(w-x,x)\,dx$$
> 
> When $X$ and $Y$ are *independent*, so $f_{X,Y}=f_X f_Y$, the formula turns into the **convolution** of $f_X$ and $f_Y$: 
> $$f_{W}(w)\quad=\quad f_X*f_Y\quad=\quad\int_{-\infty}^{+\infty} f_X(w-x)f_Y(x)\,dx$$

- ! There is no particular reason to choose the $x$-slot for $w-x$.
    - Equally valid to write: $f_{W}(w)\;=\;\int_{-\infty}^{+\infty} f_{X,Y}(x,w-x)\,dx$

> [!extra] Extra - Derivation of continuous PDF of a sum
> The joint CDF of $X+Y$ is given by: 
> $$F_{X+Y}(w) = P[X+Y\leq w] \quad=\quad \iint_{x+y\leq w} f_{X,Y}(x,y)\,dx\,dy$$
> 
> From this we can find $f_{X+Y}$ by taking the derivative: 
> $$f_{X+Y}(w) = \frac{d}{dw} F_{X+Y}(w) \quad ⨠⨠ \quad  \frac{d}{dw} \iint_{x+y\leq w} f_{X,Y}(x,y)\,dx\,dy$$
> 
> In order to calculate this derivative, we change variables by setting $x=x$ and $s=x+y$. The Jacobian is 1, so $dx\,dy$ becomes $dx\,dw$, and we have: 
> $$⨠⨠ \quad \frac{d}{dw}\int_{-\infty}^w\int_{-\infty}^{+\infty}f_{X,Y}(x,s-x)\,dx\,ds\quad ⨠⨠ \quad  \int_{-\infty}^{+\infty}f_{X,Y}(x,w-x)\,dx$$

### 04 Illustration

> [!mexample] Example - Sum of parabolic random variables
> ![Sum of parabolic random variables](Probability/2025%20Spring/W08%20-%20Examples.md#Sum%20of%20parabolic%20random%20variables)

> [!abstract] THEOREM: Discrete PMF of a sum
> Suppose $P_{X,Y}(k,\ell)$ is the joint PMF for discrete RVs $X$ and $Y$.F
> 
> Assume that the possible value pairs are $(k,\ell)$ with $k,\,\ell\in\mathbb{Z}$ (integers only).
> 
> Then the PMF of $W=X+Y$ is given by the formula: 
> $$P_{X+Y}(j)=P_W(j)\quad=\quad \sum_{i=-\infty}^{+\infty}P_{X,Y}(j-i,i)$$

> [!exercise] PMF of $X+Y$ for discrete variables
> ![Discrete PMF formula for a sum](Probability/2025%20Spring/W08%20-%20Examples.md#Discrete%20PMF%20formula%20for%20a%20sum)

### 05 Theory

> [!concept] Convolution
> The **convolution** of two continuous functions $f(x)$ and $g(x)$ is defined by: 
> $$(f*g)(x) \quad=\quad \int_{-\infty}^{+\infty} f(x-t)g(t)\,dt$$

![200](Pasted%20image%2020231030133017.png)

For more example calculations, look at 9.6.1 and 9.6.2 at [this page](https://math.libretexts.org/Bookshelves/Differential_Equations/Introduction_to_Partial_Differential_Equations_(Herman)/09%3A_Transform_Techniques_in_Physics/9.06%3A_The_Convolution_Operation).

**Applications of convolution**
- Convolutional neural networks (machine learning theory: translation invariant NN, low pre-processing)
- Image processing: edge detection, blurring
- Signal processing: smoothing and interpolation estimation
- Electronics: linear translation-invariant (LTI) system response: convolution with impulse function

> [!extra] Extra - Convolution
> **Geometric meaning of convolution**
> Convolution does not have a neat and precise geometric meaning, but it does have an imprecise intuitive sense.
> 
> The product of two quantities tends to be large when *both* quantities are large; when one of them is small or zero, the product will be small or zero. This behavior is different from the behavior of a sum, where one summand being large is sufficient for the sum to be large. A large summand overrides a small co-summand, whereas a large factor is scaled down by a small cofactor.
> 
> The upshot is that a convolution will be large when two functions *have similar overall shape*. (Caveat: one function must be flipped in a vertical mirror before the overlay is considered.) The argument value where the convolution is largest will correspond to the horizontal offset needed to get the closest overlay of the functions.
> 
> **Algebraic properties of convolution**
> - $f*g=g*f$
> - $f*(g*h)=(f*g)*h$
> - $f*(g+h)=f*g + f*h$
> - $a(f*g)=(af)*g=f*(ag)$
> - $(f*g)'=f'*g=f*g'$
> 
> The last of these is *not* the typical Leibniz rule for derivatives of products!
> 
> All of these properties can be checked by simple calculations with iterated integrals.
> 
> **Convolution in more variables**
> Given $f,g:\mathbb{R}^n\to \mathbb{R}$, their convolution at $\mathbf{x}$ is defined by integrating the shifted products over the whole domain: 
> $$(f*g)(\mathbf{x}) = \iiint_{\mathbb{R}^n} f(\mathbf{x}-\mathbf{y})g(\mathbf{y})\,dy$$

### 06 Illustration

> [!exercise] Exercise - Convolution practice
> ![Convolution practice](Probability/2025%20Spring/W08%20-%20Examples.md#Convolution%20practice)

### 07 Theory

Some pairs of density functions have convolutions that can be described neatly in terms of the densities of known distributions, and sometimes this relationship has its own interpretation in the applied context of a probability model.

> [!abstract] Bernoulli plus Binomial
> Suppose $X_i\sim\mathrm{Ber}(p)$ for $i=1,\,2,\,3,\,\dots$ are *independent* Bernoulli variables.
> 
> Define $S_n=X_1+\dots+X_n$, and notice that $S_n\sim\mathrm{Bin}(n,p)$.
> 
> Then $S_n+X_{n+1} \sim S_{n+1}$ where $S_{n+1}\sim\mathrm{Bin}(n+1,p)$.
> 
> In other words: adding a Bernoulli to a Binomial creates a bigger Binomial.

> [!extra] Extra - Proof of Bernoulli sum rule
> For the PMF of $X_{n+1}$, we have $P_{X_{n+1}}(k)=p^k(1-p)^{1-k}$ for $k=0,1$, and $P_{X_{n+1}}(k)=0$ for other $k$.
> 
> For the PMF of $S_n$ we have $P_{S_n}(k)={n\choose k}p^k(1-p)^{n-k}$ for $k=0,\dots,n$ and $P_{S_n}(k)=0$ for other $k$.
> 
> We seek the discrete convolution $(P_{S_n}*P_{X_{n+1}})(\ell)$.
> 
> The factor $P_{X_{n+1}}(\ell-k)$ in the convolution is nonzero only when $k=\ell$ or $k=\ell-1$. So we have: 
> $$
> \begin{align*}
> &\qquad\qquad\sum_{k=-\infty}^{+\infty}P_{S_n}(k)P_{X_n}(\ell-k)\\\\ &=\quad  P_{S_n}(\ell)(1-p) + P_{S_n}(\ell-1)p \\\\
> &=\quad \frac{n!}{\ell!(n-\ell!)}p^\ell(1-p)^{n-\ell+1} + \frac{n!}{(\ell-1)!(n-\ell+1)!}p^{\ell}(1-p)^{n-\ell+1} \\\\
> &=\quad \frac{n!(n-\ell+1)+n!\ell}{\ell!(n-\ell+1)!} p^{\ell} (1-p)^{n-\ell+1} \\\\
> &=\quad \frac{(n+1)!}{\ell!(n+1-\ell)!} p^{\ell}(1-p)^{n+1-\ell} \\\\
> &=\quad {n+1\choose \ell}p^\ell (1-p)^{n+1-\ell}
> \end{align*}
> $$
> This is the PMF of $S_{n+1}$, so we are done.

> [!abstract] Binomial sum rule
> Suppose $X\sim\mathrm{Bin}(n,p)$ and $Y\sim\mathrm{Bin}(m,p)$ are independent RVs with the given binomial distributions (same $p$, different numbers of trials).
> 
> Then $X+Y\sim\mathrm{Bin}(n+m,p)$.

> [!extra] Extra - Proof of binomial sum rule
> Of course, $X+Y$ measures the number of successes in $n+m$ independent trials, each with success probability $p$.

### 08 Illustration

> [!exercise] Exercise - Vandermonde’s identity from the binomial sum rule
> ![Vandermonde’s identity from the binomial sum rule](Probability/2025%20Spring/W08%20-%20Examples.md#Vandermonde’s%20identity%20from%20the%20binomial%20sum%20rule)

### 09 Theory

Recall that a Poisson variable counts ‘arrivals’ in a fixed time window. It applies to events like phone calls per hour or Uranium decays per second. Each interval is independent of the others, and the rate of occurrences is proportional to the size of the interval.

An implication of this meaning of the Poisson variable is a sum rule. If you divide a Poisson interval into subintervals, the distribution corresponding to each subinterval should still be Poisson, and the distribution of arrivals in each subinterval should *add up* to give the distribution of arrivals for the total interval.

> [!abstract] Poisson sum rule
> Suppose $X\sim \mathrm{Pois}(\lambda)$ and $Y\sim \mathrm{Pois}(\mu)$ and $X$ and $Y$ are independent.
> 
> Then $X+Y\sim \mathrm{Pois}(\lambda + \mu)$.

> [!extra] Extra - Proof of Poisson sum rule
> Write $p_X(k)=e^{-\lambda}\frac{\lambda^k}{k!}$ and $p_Y(k)=e^{-\mu}\frac{\mu^k}{k!}$. Then: 
> $$\begin{align*}P_{X+Y}(n)\quad&=\quad P[X+Y=n] \\\\&=\quad \sum_{k=-\infty}^{+\infty} P_X(k)P_Y(n-k) \\\\&=\quad \sum_{k=0}^n e^{-(\lambda+\mu)}\frac{\lambda^k \mu^{n-k}}{k!(n-k)!}\\\\&=\quad \frac{e^{-(\lambda+\mu)}}{n!}\sum_{k=0}^n {n\choose k} \lambda^k \mu^{n-k} \\\\&=\quad e^{-(\lambda+\mu)} \frac{(\lambda+\mu)^n}{n!}\end{align*}$$

---

Recall that in a Bernoulli process:
- An RV measuring the discrete wait time until one success has a geometric distribution.
- An RV measuring discrete wait time until $\ell^\text{th}$ success has a Pascal distribution.

Since the wait times between successes are *independent*, we expect that the *sum of geometric distributions is a Pascal distribution*. This is true!

> [!abstract] Pascal Sum Rule
> Specify a given Bernoulli process with success probability $p$. Suppose that: 
> - $X\sim\mathrm{Pascal}(r,p)$
> - $Y\sim\mathrm{Pascal}(s,p)$
> - $X$ and $Y$ are independent
> 
> Then $X+Y\sim\mathrm{Pascal}(r+s,p)$.

> [!tip] Geom plus Geom is Pascal
> Recall that $\mathrm{Pascal}(1,p)\sim\mathrm{Geom}(p)$. So we could say: $$\text{“}\mathrm{Geom}(p)+\mathrm{Geom}(p)\;=\;\mathrm{Pascal}(2,p)\text{”}$$
> 
> And: $$\text{“}\mathrm{Geom}(p)+\mathrm{Pascal}(r,p)\;=\;\mathrm{Pascal}(r+1,p)\text{”}$$

The Pascal Sum Rule can be justified in two ways:
- (1) by directly computing the discrete convolution of two Pascal variables
- (2) by observing that the sum $X+Y$ counts the trials until exactly $r+s$ successes
    - Waiting for $r$ successes and then waiting for $s$ successes is the same as waiting for $r+s$ successes

---

Recall that in a Poisson process:
- An RV measuring continuous wait time until one arrival has an exponential distribution.
- An RV measuring continuous wait time until $\ell^\text{th}$ arrival has an Erlang distribution.

Since the wait times between arrivals are *independent*, we expect that the *sum of exponential distributions is an Erlang distribution*. This is true!

> [!abstract] Erlang sum rule
> Specify a given Bernoulli process with success probability $p$. Suppose that: 
> - $X\sim\mathrm{Erlang}(r,\lambda)$
> - $Y\sim\mathrm{Erlang}(s,\lambda)$
> - $X$ and $Y$ are independent
> 
> Then $X+Y\sim\mathrm{Erlang}(r+s,\lambda)$.

> [!tip] Exp plus Exp is Erlang
> Recall that $\mathrm{Erlang}(1,\lambda)\sim\mathrm{Exp}(\lambda)$. So we could say: $$\text{“}\mathrm{Exp}(\lambda)+\mathrm{Exp}(\lambda)\;=\;\mathrm{Erlang}(2,\lambda)\text{”}$$
> 
> And: $$\text{“}\mathrm{Exp}(\lambda)+\mathrm{Erlang}(\ell,\lambda)\;=\;\mathrm{Erlang}(\ell+1,\lambda)\text{”}$$

### 10 Illustration

> [!mexample] Example - Exp plus Exp equals Erlang
> ![Exp plus Exp equals Erlang](Probability/2025%20Spring/W08%20-%20Examples.md#Exp%20plus%20Exp%20equals%20Erlang)

> [!exercise] Exercise - Erlang induction step
> ![Erlang induction step](Probability/2025%20Spring/W08%20-%20Examples.md#Erlang%20induction%20step)

By repeated iteration of the above formula, starting with $\ell=1$, one can derive the PMF for any Erlang variable as the sum of exponential variables: 
$$\text{“}\overbrace{\mathrm{Exp}(\lambda)+\dots+\mathrm{Exp}(\lambda)}^{\ell\text{ terms}} \;=\;\mathrm{Erlang}(\ell,\lambda)\text{”}$$

This fully explains the formula for the Erlang PDF.

### 11 Theory

> [!abstract] Normal sum rule
> Suppose we know:
> - $X\sim\mathcal{N}(\mu_X,\sigma_X^2)$
> - $Y\sim\mathcal{N}(\mu_Y,\sigma_Y^2)$
> - $X$ and $Y$ are independent
> 
> Then: $$X+Y\;\sim\;\mathcal{N}\big(\mu_X+\mu_Y,\;\sigma_X^2+\sigma_Y^2\big)$$

Recall that $aX+b$ is normal if $X$ is normal; more specifically $aX+b\sim\mathcal{N}(a\mu_X+b,a^2\sigma_X^2)$ when $X\sim\mathcal{N}(\mu_X,\sigma_X^2)$.

This fact, combined with the sum rule, implies that $W = aX + bY + c$ is normal when $X$ and $Y$ are *independent* normals. Then $E[W]$ and $\mathrm{Var}[W]$ are easily computed using the linearity rules: 
$$\mu_W = a\,\mu_X+b\,\mu_Y+c,\quad \sigma_W^2=(a\,\sigma_X)^2+(b\,\sigma_Y)^2$$

### 12 Illustration

> [!mexample] Combining normals
> ![Combining normals](Probability/2025%20Spring/W08%20-%20Examples.md#Combining%20normals)

