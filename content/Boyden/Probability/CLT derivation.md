---
cssclasses:
  - hide-embedded-header
title: Derivation of CLT
---
### Theory - Moment generating functions

In order to show why the CLT is true, we introduce the technique of **moment generating functions**. Recall that the $n^{th}$ moment of a distribution $X$ is simply $E[X^n]$. Write $\mu_n$ for this value.

Recall the power series for $e^x$: 
$$
e^x=1+x+\frac{1}{2!}x^2+\frac{1}{3!}x^3+\dots
$$
The function $f(x)=e^x$ has the property of being a bijective differentiable map from $\mathbb{R}$ to $\mathbb{R}^{>0}$, and it converts addition to multiplication: $e^{x+y}=e^x\cdot e^y$.

Given a random variable $X$, we can compose $X$ with $f(x)=e^x$ to obtain a new variable. Define the **moment generating function of $X$** as follows: 
$$
M_X(t) = E[e^{tX}].
$$
This is a function of $t\in\mathbb{R}$ and returns values in $\mathbb{R}$. It is called the moment generating function because it contains the data of all the higher moments $\mu_n$. They can be extracted by taking derivatives and evaluating at zero: 
$$
\begin{align*}
M_X(t) &= 1 + E[X]t + E[X^2]\frac{t^2}{2!} + E[X^3]\frac{t^3}{3!} + \dots \\
M_X^{(n)}(0) &= E[X^n]=\mu_n.
\end{align*}
$$
It is reasonable to consider $M_X(t)$ as a formal power series in the variable $t$ that has the higher moments for coefficients.

> [!mexample] Example - Moment generating function of a standard normal
> We compute $M_Z(t)$ where $Z\sim\mathcal{N}(0,1)$. From the formula for expected value of a function of a random variable, we have: 
> $$
> E[e^{tZ}] = \frac{1}{\sqrt{2\pi}} \int_{-\infty}^{+\infty} e^{tx-x^2/2}\,dx.
> $$
> Complete the square in the exponent: $tx-x^2/2=-\tfrac{1}{2}(x-t)^2+\tfrac{1}{2}t^2$. Thus: 
> $$
> e^{tx-x^2/2}=e^{-\tfrac{1}{2}(x-t)^2}e^{\tfrac{1}{2}t^2}.
> $$
> The last factor can be taken outside the integral: 
> $$
> E[e^{tZ}] = e^{t^2/2}\frac{1}{\sqrt{2\pi}}\int_{-\infty}^{+\infty} e^{-\tfrac{1}{2}(x-t)^2}\,dx = e^{t^2/2}=M_Z(t).
> $$

> [!exercise] Exercise - Moment generating function of an exponential variable
> Compute $M_X(t)$ for $X\sim\mathrm{Exp}(\lambda)$.

Moment generating functions have the remarkable property of encoding the distribution itself: 

> [!abstract] Distributions determined by MGFs
> Assume $M_X(t)$ and $M_Y(t)$ both converge. If $M_X(t)=M_Y(t)$, then $X\sim Y$.
> 
> Moreover, if $M_X(t)=M_Y(t)$ for any interval of values $t\in(-\varepsilon,\varepsilon)$, then $M_X(t)=M_Y(t)$ for all $t$ and $X\sim Y$.

> [!warning] Be careful about moments vs. generating functions!
> Sometimes the moments all exist, but they grow so fast that the moment generating function does not converge. For example, the log-normal distribution $e^Z$ for $Z\sim\mathcal{N}(0,1)$ has this property.
> 
> The fact above does not apply when this happens.

When moment generating functions *approximate* each other, their corresponding distributions also approximate each other: 

> [!abstract] Distributions converge when MGFs converge
> Suppose that $M_{X_n}(t)\to M_X(t)$ for all $t$ on some interval $t\in (-\varepsilon,+\varepsilon)$. (In particular, assume that $M_X(t)$ converges on some such interval.) Then for any $[a,b]$, we have: 
> $$
> \lim_{n\to\infty} P(X_n\in [a,b]) = P(X\in [a,b]).
> $$

> [!exercise] Exercise Using an MGF
> Suppose $X$ is nonnegative and $M_X(t)=(1-2t)^{-3/2}$ when $t<1/2$ and $M_X(t)=\infty$ when $t\geq 1/2$. Find a bound on $P(X>8)$ using (a) Markov’s Inequality, and (b) Chebyshev’s Inequality.

### Theory - Proof of CLT

The main role of moment generating functions in the proof of the CLT is to convert the sum $X_1+\dots+X_n$ into a product $e^{X_1}\cdots e^{X_n}$ by putting the sum into an exponent.

We have $S_n=X_1+\dots+X_n$, and recall $Z_n=\frac{S_n-n\mu}{\sigma\sqrt{n}}$, so $E[Z_n]=0$ and $\mathrm{Var}(Z_n)=1$. First, compute the MGF of $Z_n$. We have: 

$$M_{Z_n}(t) = E[e^{tZ_n}] = E\left[e^{t\frac{S_n-n\mu}{\sigma\sqrt{n}}}\right]$$

Exchange the sum in the exponent for a product of exponentials: 

$$
\begin{align*}
\mathrm{exp}\left({t\frac{S_n-n\mu}{\sigma\sqrt{n}}}\right) &\;=\;  \mathrm{exp}\left({\frac{t}{\sigma\sqrt{n}}\sum_{i=1}^n(X_i-\mu)}\right) \\
&\;=\;  \prod_{i=1}^n \mathrm{exp}\left({\frac{t}{\sigma\sqrt{n}}(X_i-\mu)}\right)
\end{align*}
$$

Now since the $X_i$ are independent, the factors $\mathrm{exp}\left({\frac{t}{\sigma\sqrt{n}}(X_i-\mu)}\right)$ are also independent of each other. Use the product rule $E[XY]=E[X]E[Y]$ when $X,Y$ are independent to obtain: 

$$M_{Z_n}(t) = \prod_{i=1}^n E\left[\mathrm{exp}\left({\frac{t}{\sigma\sqrt{n}}(X_i-\mu)}\right)\right]$$

Now expand the exponential in its Taylor series and use linearity of expectation: 

$$
\begin{align*}
M_{Z_n}(t) &=  \prod_{i=1}^n E\left[ 1 + \frac{t}{\sigma\sqrt{n}}(X_i-\mu) + \frac{1}{2!} \left(\frac{t}{\sigma\sqrt{n}}\right)^2(X_i-\mu)^2 + \dots \right] \\
&= \prod_{i=1}^n \left( 1 + \frac{t}{\sigma\sqrt{n}}E[X_i-\mu] + \frac{1}{2!} \left(\frac{t}{\sigma\sqrt{n}}\right)^2 E[(X_i-\mu)^2] + \dots \right) \\
&= \prod_{i=1}^n \left( 1 + 0 + \frac{t^2}{2!n} + \dots \right) \\
&\approx \prod_{i=1}^n \left(1+\frac{t^2}{2n}\right).
\end{align*}
$$

We don’t give a complete argument for the final approximation, but a few remarks are worthwhile. For fixed $n,\sigma,\mu$, and assuming the moments $E[(X_i-\mu)^k]$ have adequately bounded growth in $k$, the series in each factor converges for all $t$. Using Taylor’s theorem we could write an error term as a shrinking function of $n$. The real trick of analysis is to show that in the product of $n$ factors, these error terms shrink fast enough that the limit value is not affected.

In any case, the factors of the last line are independent of $n$, so we have: 

$$M_{Z_n}(t) \approx \left(1+\frac{t^2}{2n}\right)^n \quad \underset{n\to\infty}{\longrightarrow}\quad \mathrm{exp}\left({\frac{t^2}{2}}\right)$$

But $e^{\frac{t^2}{2}}$ is the MGF of $Z\sim\mathcal{N}(0,1)$. Therefore $M_{Z_n}(t)\to M_Z(t)$, so $F_{Z_n}(x)\to F_Z(x)$.
