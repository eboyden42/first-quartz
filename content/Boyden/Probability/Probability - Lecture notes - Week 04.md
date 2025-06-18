---
cssclasses:
  - hide-embedded-header
title: Week 04 notes
---
## Bernoulli process
### 01 Theory - Bernoulli, binomial, geometric, Pascal, uniform

In a Bernoulli process, an experiment with binary outcomes is repeated; for example flipping a coin repeatedly. Several discrete random variables may be defined in the context of some Bernoulli process.

Notice that the sample space of a Bernoulli process is infinite: an outcome is any sequence of trial outcomes, e.g. $HTHHTTHHHTTTHHHHTTTT\cdots$

> [!concept] Bernoulli variable
> A random variable $X_i$ is a **Bernoulli indicator**, written $X_i\sim\mathrm{Ber}(p)$, when $X_i$ indicates whether a success event, having probability $p$, took place in trial number $i$ of a Bernoulli process.
> 
> Bernoulli indicator PMF: $$\begin{align*}P_{X_i}(1)&= p\\\\ P_{X_i}(0)&= 1-p\\\\ P_{X_i}(x)&= 0 \qquad (x\neq 1,\,0)\end{align*}$$

- %& An RV that always gives either $0$ or $1$ for every outcome is called an **indicator** variable.

> [!concept] Binomial variable
> A random variable $S$ is **binomial**, written $S\sim \text{Bin}(n,\,p)$, when $S$ counts the *number of successes* in a Bernoulli process, each having probability $p$, over a specified number $n$ of trials.
> 
> Binomial PMF: $$P_S(k)={n\choose k} p^k (1-p)^{n-k}$$

- For example, if $S\sim\mathrm{Bin}(10,\,0.2)$, then $P_S(5)$ gives the odds that success happens exactly 5 times over 10 trials, with probability $0.2$ of success for each trial.
- In terms of the Bernoulli indicators, we have: $S=X_1+X_2+\dots+X_n$
- If $A$ is the success event, then $p=P[A]$, and $1-p$ is the probability of failure.

---

> [!concept] Geometric variable
> A random variable $N$ is **geometric**, written $N\sim\mathrm{Geom}(p)$, when $N$ counts the *discrete wait time* in a Bernoulli process until the *first success* takes place, given that success has probability $p$ in each trial.
> 
> Geometric PMF: $$P_N(k)=(1-p)^{k-1}p$$

- For example, if $N\sim\mathrm{Geom}(30\%)$, then $P_N(7)$ gives the probability of getting: failure on the first $6$ trials AND success on the $7^\text{th}$ trial.

---

> [!concept] Pascal variable
> A random variable $L$ is **Pascal**, written $L\sim\mathrm{Pasc}(\ell,\,p)$, when $L$ counts the *discrete wait time* in a Bernoulli process until success happens *$\ell$ times*, given that success has probability $p$ in each trial.
> 
> Pascal PMF: $$P_L(k)={k-1\choose\ell-1}(1-p)^{k-\ell}p^\ell$$

- For example, if $L\sim\mathrm{Pasc}(3,\,0.25)$, then $P_L(8)$ gives the probability of getting: the $3^\text{rd}$ success on (precisely) the $8^\text{th}$ trial.
- Interpret the formula: $\#$ ways to arrange $2$ successes among $7$ ‘prior’ trials, times the probability of exactly $3$ successes and $5$ failures in one particular sequence.
- The Pascal distribution is also called the **negative binomial** distribution, e.g. $L\sim\mathrm{Negbin}(\ell,\,p)$.

---

> [!concept] Uniform variable
> A discrete random variable $X$ is **uniform** on a finite set  $A\subset S$, written $X\sim \mathrm{Unif(A)}$, when the probability is a fixed constant for outcomes in $A$ and zero for outcomes outside $A$.
> 
> Discrete uniform PMF: $$P_X(k)=\begin{cases}\frac{1}{|A|} & \text{when }k\in A\\ 0&\text{when }k\notin A\end{cases}$$
> 
> Continuous uniform PDF: $$f_X(x)=\begin{cases}\frac{1}{P[A]}&\text{when }x\in A\\ 0&\text{when }x\notin A\end{cases}$$

### 02 Illustration
> [!mexample] Example - Roll die until
> ![25 - Roll die until](Probability%20-%20Examples%20-%20W04-06.md#25%20-%20Roll%20die%20until)

> [!mexample] Example - Winning the World Series
> ![26 - Cubs winning the World Series](Probability%20-%20Examples%20-%20W04-06.md#26%20-%20Cubs%20winning%20the%20World%20Series)

## Expectation and variance
### 03 Theory - Expectation and variance

> [!concept] Expected value
> The **expected value** $E[X]$ of random variable $X$ is the weighted average of the values of $X$, weighted by the probability of those values.
> 
> Discrete formula using PMF: $$E[X] = \sum_{k} k\cdot P_X(k)$$
> 
> Continuous formula using PDF: $$E[X] = \int_{-\infty}^{+\infty} x\cdot f_X(x)\,dx$$

Notes:
- Expected value is sometimes called **expectation**, or even just **mean**, although the latter is best reserved for statistics.
- The Greek letter $\mu$ is also used in contexts where ‘mean’ is used.

---

Let $X$ be a random variable, and write $E[X]=\mu$.

> [!concept] Variance
> The **variance** $\mathrm{Var}[X]$ measures the average *squared deviation* of $X$ from $\mu$. It estimates how *concentrated* $X$ is around $\mu$.
> 
> - Defining formula: $$\mathrm{Var}[X] = E[(X-\mu)^2]$$
> - Shorter formula: $$\mathrm{Var}[X] = E[X^2] - E[X]^2$$

> [!summary] Calculating variance
> - Discrete formula using PMF: $$\mathrm{Var}[X] = \sum_k (k-\mu)^2 P_X(k)$$
> - Continuous formula using PDF: $$\mathrm{Var}[X] = \int_{-\infty}^{+\infty} (x-\mu)^2 f_X(x)\,dx$$

> [!concept] Standard deviation
> The quantity $\sigma_X = \sqrt{\mathrm{Var}[X]}$ is called the **standard deviation** of $X$.

### 04 Illustration
> [!exercise] Exercise - Tokens in bins
> ![27 - Gambling game - tokens in bins](Probability%20-%20Examples%20-%20W04-06.md#27%20-%20Gambling%20game%20-%20tokens%20in%20bins)

![400](Pasted%20image%2020230923180422.png)

> [!mexample] Example - Expected value: rolling dice
> ![28 - Expected value - rolling dice](Probability%20-%20Examples%20-%20W04-06.md#28%20-%20Expected%20value%20-%20rolling%20dice)

> [!mexample] Example - Expected value by finding new PMF
> ![29 - Expectation from PMF of related](Probability%20-%20Examples%20-%20W04-06.md#29%20-%20Expectation%20from%20PMF%20of%20related)

> [!exercise] Exercise - Variance using simplified formula
> ![30 - Variance for composite using PMF and simpler formula](Probability%20-%20Examples%20-%20W04-06.md#30%20-%20Variance%20for%20composite%20using%20PMF%20and%20simpler%20formula)

## Poisson process

### 05 Theory - Poisson variable
> [!concept] Poisson variable
> A random variable $X$ is **Poisson**, written $X\sim\mathrm{Pois}(\lambda)$, when $X$ counts the number of “arrivals” in a fixed “interval.” It is applicable when:
> - The arrivals come at a *constant average rate $\lambda$*.
> - The arrivals are independent of each other.
> 
> Poisson PMF: $$P_X(k)=e^{-\lambda}\frac{\lambda^k}{k!}$$

A Poisson variable is comparable with a binomial variable. Both count the occurrences of some “arrivals” over some “space of opportunity.”
- The binomial opportunity is a set of *$n$ repetitions* of a trial.
- The Poisson opportunity is a *continuous interval* of time.

In the binomial case, success occurs at some rate $p$, since $p=P[A]$ where $A$ is the success event.

In the Poisson case, arrivals occur at some rate $\lambda$.

---

The Poisson distribution is actually the limit of binomial distributions by taking $n\to\infty$ while $np$ remains fixed, so $p\to 0$ in perfect balance with $n\to\infty$.

Let $X_{n,p}\sim\mathrm{Bin}(n,\,p)$ and let $Y_\lambda\sim\mathrm{Pois}(\lambda)$. Fix $\lambda$ and let $p=\lambda/n$. Then for any $k\in\mathbb{N}$: $$P_{X_{n,p}}(k)\quad\overset{n\to\infty}{\longrightarrow}\quad P_{Y_\lambda}(k)$$

For example, let $X_{n,3/n}\sim\mathrm{Bin}(n,\,3/n)$, so $np=3$, and look at $P_{X_{n,3/n}}(1)$ as $n\to\infty$: 
$$\begin{gather*}P_{X_{n,3/n}}(1)\quad ⨠⨠ \quad {n\choose 1}\left(\frac{3}{n}\right)^1\left(1-\frac{3}{n}\right)^{n-1}\\\\ ⨠⨠ \quad 3\left(1-\frac{3}{n}\right)^{n-1}\quad\longrightarrow\quad 3e^{-3}\quad\text{as}\; n\to\infty\end{gather*}$$

> [!info] Interpretation - Binomial model of rare events
> Let us interpret the assumptions of this limit. For $n$ large but $p$ small such that $\lambda=np$ remains moderate, the binomial distribution describes a large number of trials, a low probability of success per trial, but a moderate total count of successes.
> 
> This setup describes a physical system with a large number of parts that may activate, but each part is unlikely to activate; and yet the number of parts is so large that the total number of arrivals is still moderate.

### 06 Illustration
> [!mexample] Example - Radioactive decay is Poisson
> Consider a macroscopic sample of Uranium.
> 
> Each atom decays independently of the others, and the likelihood of a single atom popping off is very low; but the product of this likelihood by the total number of atoms is a moderate number.
> 
> So there is some constant average rate of atoms in the sample popping off, and the number of pops per minute follows a Poisson distribution.

> [!mexample] Calls to a call center is Poisson
> Consider a call center that receives help requests from users of a popular phone manufacturer.
> 
> The total number of users is very large, and the likelihood of any given user calling in a given minute is very small, but the product of these rates is moderate.
> 
> So there is some constant average rate of calls to the center, and the number of calls per minute follows a Poisson distribution.

> [!exercise] Exercise - Typos per page
> A draft of a textbook has an average of 6 typos per page.
> 
> What is the probability that a randomly chosen page has $\geq 4$ typos?
> 
> Answer: 0.849
> 
> Hint: study the complementary event.

> [!mexample] Example - Arrivals at a post office
> ![32 - Arrivals at a post office](Probability%20-%20Examples%20-%20W04-06.md#32%20-%20Arrivals%20at%20a%20post%20office)

### 07 Theory - Poisson limit of binomial
> [!extra] Extra - Derivation of binomial limit to Poisson
> Consider a random variable $X\sim\mathrm{Bin}(n,p)$, and suppose $n$ is very large.
> 
> Suppose also that $p$ is very small, such that $E[X]=np$ is *not* very large, but the extremes of $n$ and $p$ counteract each other. (Notice that then $npq$ will *not* be large so the normal approximation does *not* apply.) In this case, the binomial PMF can be approximated using a factor of $e^{-np}$. Consider the following rearrangement of the binomial PMF: 
> $$\begin{gather*}P_{X}(k) \quad ⨠⨠ \quad {n\choose k} p^kq^{n-k}\\\\ \quad ⨠⨠ \quad \frac{n(n-1)\cdots(n-k+1)}{k!}p^k(1-p)^n \frac{1}{q^k}\\\\ \quad ⨠⨠ \quad (1-p)^n \frac{(np)^k}{k!}\left[\frac{n}{n}\cdot\frac{n-1}{n}\cdot\frac{n-2}{n}\cdots\frac{n-k+1}{n}\right]\frac{1}{q^k}\end{gather*}$$
> Since $n$ is very large, the factor in brackets is approximately $1$, and since $p$ is very small, the last factor of $1/q^k$ is also approximately 1 (provided we consider $k$ small compared to $n$). So we have: 
> $$
> P_{X}(k) \approx (1-p)^n \frac{(np)^k}{k!}.
> $$
> Write $\lambda=np$, a moderate number, to find: 
> $$
> P_{X}(k) \approx \left(1-\frac{\lambda}{n}\right)^n \frac{\lambda^k}{k!}.
> $$
> Here at last we find $e^{-\lambda}$, since $\left(1-\frac{\lambda}{n}\right)^n\to e^{-\lambda}$ as $n\to \infty$. So as $n\to \infty$: 
> $$
> P_{X}(k) \approx e^{-\lambda} \frac{\lambda^k}{k!}.
> $$

---

> [!extra] Extra - Binomial limit to Poisson and divisibility
> Consider a sequence of increasing $n$ with decreasing $p$ such that $\lambda=np$ is held fixed. For example, let $n=1,2,3,\dots$ while $p=\frac{\lambda}{n}$.
> 
> Think of this process as increasing the number of causal agents represented: group the agents together into $n$ bunches, and consider the odds that such a bunch activates. (For the call center, a bunch is a group of users; for radioactive decay, a bunch is a unit of mass of Uranium atoms.)
> 
> As $n$ doubles, we imagine the number of agents per bunch to drop by half. (For the call center, we divide a group in half, so twice as many groups but half the odds of one group making a call; for the Uranium, we divide a chunk of mass in half, getting twice as many portions with half the odds of a decay occurring in each portion.
> 
> This process is formally called *division of a distribution*, and the fact that the Poisson distribution arises as the limit of such division means that it is infinitely divisible.

---

> [!extra] Extra - Theorem: Poisson approximation of the binomial
> Suppose $X\sim \mathrm{Bin}(n,\,p)$ and $Y\sim \mathrm{Pois}(np)$. Then: 
> $$\Big| P_X(k)-P_Y(k)\Big| \leq np^2$$
> for any $k\in\mathbb{N}$.

In consequence of this theorem, a Poisson distribution may be used to approximate the probabilities of a binomial distribution for large $n$ when it is impracticable (even for a computer) to calculate large binomial coefficients.

The theorem shows that the Poisson approximation is appropriate when $np$ is a moderate number while $np^2$ is a small number.

