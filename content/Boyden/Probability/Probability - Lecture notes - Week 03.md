---
cssclasses:
  - hide-embedded-header
title: Week 03 notes
---
## Repeated trials
### 01 Theory

> [!concept] Repeated trials
> When a single experiment type is repeated many times, and we assume each instance is *independent* of the others, we say it is a sequence of **repeated trials** or **independent trials**.
> 
> The probability of any sequence of outcomes is derived using independence together with the probabilities of outcomes of each trial.

---
A simple type of trial, called a **Bernoulli trial**, has two possible outcomes, 1 and 0, or success and failure, or $T$ and $F$. A sequence of repeated Bernoulli trials is called a **Bernoulli process**.

- Write sequences like $TFFTTF$ for the outcomes of repeated trials of this type.
- Independence implies $$P[TFFTTF]=P[T]\cdot P[F]\cdot P[F]\cdot P[T]\cdot P[T]\cdot P[F]$$
- Write $p=P[T]$ and $q=P[F]$, and because these are all outcomes (exclusive and exhaustive), we have $q=1-p$. Then: $$P[TFFTTF]\quad ⨠⨠ \quad pqqppq\quad ⨠⨠ \quad p^3q^3$$
- This gives a formula for the probability of any sequence of these trials.

---
A more complex trial may have three outcomes, $A$, $B$, and $C$.

- Write sequences like $ABBACABCA$ for the outcomes.
- Label $p=P[A]$ and $q=P[B]$ and $r=P[C]$. We must have $p+q+r=1$.
- Independence implies $$P[ABBACABCA]\quad ⨠⨠ \quad pqqprpqrp\quad ⨠⨠ \quad p^4q^3r^2$$
- This gives a formula for the probability of any sequence of these trials.

---
Let $S$ stand for the *sum of successes* in some Bernoulli process. So, for example, “$S=3$” stands for the event that the number of successes is exactly 3. The probabilities of $S$ events follow a **binomial distribution**.

Suppose a coin is biased with $P[H]=20\%$, and $H$ is ‘success’. Flip the coin 20 times. Then: $$P[S=3]\quad ⨠⨠ \quad {20\choose 3}\cdot (0.2)^3\cdot (0.8)^{17}$$
Each outcome with exactly 3 heads and 17 tails has probability $(0.2)^3\cdot (0.8)^{17}$. The *number* of such outcomes is the number of ways to choose 3 of the flips to be heads out of the 20 total flips.

The probability of at least 18 heads would then be: $$\begin{gather*}P[S\geq 18]\quad ⨠⨠ \quad P[S=18]+P[S=19]+P[S=20]\\\\ ⨠⨠ \quad {20\choose 18}\cdot (0.2)^{18}\cdot (0.8)^2 + {20\choose 19}\cdot (0.2)^{19}\cdot (0.8)^1 + {20\choose 20}\cdot (0.2)^{20}\cdot (0.8)^0\end{gather*}$$

---
With three possible outcomes, $A$, $B$, and $C$, we can write sum variables like $S_A$ which counts the number of $A$ outcomes, and $S_B$ and $S_C$ similarly. The probabilities of events like $\text{“}(S_A,\,S_B,\,S_C)=(2,\,3,\,5)\text{”}$ follow a **multinomial distribution**.

### 02 Illustration
> [!mexample] Example - Multinomial: Soft drinks preferred
> ![19 - Multinomial: Soft drinks preferred](Probability/2025%20Spring/W03%20-%20Examples.md#19%20-%20Multinomial%20Soft%20drinks%20preferred)

## Reliability
### 03 Theory
Consider some process schematically with **components in series** and **components in parallel**:

![400](Pasted%20image%2020250125192255.png)

- Each component has a probability of success or failure.
- Event $W_i$ indicates ‘success’ of that component (same name).
- Then $P[W_i]$ is the probability of $W_i$ succeeding.

---
Success for a *series* of components requires success of *each* member.
- Series components *rely on each other*.
- Success of the whole is success of part 1 AND success of part 2 AND part 3, etc.

Failure for *parallel* components requires failure of *each* member.
- Parallel components represent *redundancy*.
- Success of the whole is success of part 1 OR success of part 2 OR part 3, etc.

For series components: $$P[W]=P[W_1W_2W_3]=P[W_1]\cdot P[W_2]\cdot P[W_3]$$

For parallel components: $$\begin{gather*}P[W^c]=\text{“failure”}\quad ⨠⨠ \quad P[W_1^c W_2^c W_3^c]\\\\ ⨠⨠ \quad (1-P[W_1])(1-P[W_2])(1-P[W_3])\end{gather*}$$

If $P[W_i]=p$ for all components $i$, then: 
- Series components: $P[W]=p^3$
- Parallel components: $P[W]=1-(1-p)^3$

---
To analyze a complex diagram of series and parallel components, bundle each:
- pure series set as a single compound component with its own success probability (the product)
- pure parallel set as a single compound component with its own success probability (using the failure formula)

This is like the analysis of resistors and inductors.

### 04 Illustration
> [!mexample] Example - Series, parallel, series
> ![20 - Reliability: Series, parallel, series](Probability/2025%20Spring/W03%20-%20Examples.md#20%20-%20Reliability%20Series,%20parallel,%20series)


## Discrete random variables

### 05 Theory
> [!concept] Random variable
> A **random variable (RV)** $X$ on a probability space $(S,\mathcal{F},P)$ is a function $X:S \to \mathbb{R}$.
> 
> So $X$ assigns to each *outcome* a *number*.

- !!! The word ‘variable’ indicates that the RV outputs *numbers*.

Random variables can be formed from other random variables using mathematical operations on the output numbers.

Given random variables $X$ and $Y$, we can form these new ones: $$\frac{1}{2}(X+Y),\qquad X\cdot Y,\qquad \cos X,\qquad X^2,\qquad\text{etc.}$$
Suppose $s\in S$ is some particular outcome. Then, for example, $(X+Y)(s)$ is by definition $X(s)+Y(s)$.

---
Random variables determine events.
- Given $a\in\mathbb{R}$, the event “$X=a$” is equal to the set $X^{-1}(a)$
- That is: the set of outcomes mapped to $a$ by $X$
- That is: the event “$X$ took the value $a$”

Such events have probabilities. We write them like this: $$P[X=a]\quad ⨠⨠ \quad P[X^{-1}(a)]$$

This generalized to events where $X$ lies in some range or set, for example: $$P[a\leq X<b],\qquad P\big[X\in \{2,4,5,6,9\}\big]$$

---
The axioms of probability translate into rules for these events.

For example, additivity leads to: $$P[X<0]+P[X=0]+P[0<X\leq 3]+P[3<X]=1$$

---
A **discrete** random variable has probability concentrated at a discrete set of real numbers.
- A ‘discrete set’ means *finite or countably infinite*.
- The distribution of probability is recorded using a **probability mass function (PMF)** that assigns probabilities to each of the discrete real numbers.
- Numbers with nonzero probability are called **possible values**.

> [!concept] PMF
> The PMF function for $X$ (a discrete RV) is defined by: $$P_X(k):=P[X=k]$$
> 
> for $k\in\mathbb{R}$ a possible value.

A **continuous** random variable has probability spread out over the space of real numbers.
- The distribution of probability is recorded using a **probability density function (PDF)** which is *integrated over intervals* to determine probabilities.

> [!concept] PDF
> The PDF function for $Y$ (a CRV) is written $f_Y(x)$ for $x\in\mathbb{R}$, and probabilities are calculated like this: $$P\big[a\leq Y\leq b\big]=\int_a^b f_Y(x)\,dx$$

![500](Pasted%20image%2020250126073815.png)

---
For any RV, whether discrete or continuous, the distribution of probability is encoded by a function: 

> [!concept] CDF
> The **cumulative distribution function (CDF)** for a random variable $X$ is defined for all $x\in \mathbb{R}$ by: $$F_X(x) = P[X\leq x]$$

Notes:
- Sometimes the relation to $X$ is omitted and one sees just “$F(x)$.”
- Sometimes the CDF is called, simply, “the distribution function” because:
- ! The CDF works equally well for discrete and continuous RVs.
    - Not true for PMF (discrete only) or PDF (continuous only).
    - There are *mixed* cases (partly discrete, partly continuous) for which the CDF is *essential*.

---
The CDF of a discrete RV is always a stepwise increasing function. At each step up, the jump size matches the PMF value there.

From this graph of $F_X(x)$:
![300](Pasted%20image%2020230908152449.png)

we can infer the PMF values based on the jump sizes:

| $P_X(-1)$ | $P_X(0)$ | $P_X(1)$ | $P_X(2)$ | $P_X(3)$ | $P_X(4)$ |
| :-------: | :------: | :------: | :------: | :------: | :------: |
|    $0$    |  $1/8$   |  $3/8$   |  $3/8$   |  $1/8$   |   $0$    |

---
For a discrete RV, the CDF and the PMF can be calculated from each other using formulas.

> [!summary] PMF from CDF from PMF
> Given a PMF $P_X(x)$, the CDF is determined by: $$F_X(x) = \sum_{k_i\leq x} P_X(k_i)$$
> where $\{k_1,\,k_2,\,\dots\}$ is the set of possible values of $X$.
> 
> Given a CDF $F_X(x)$, the PMF is determined by: $$P_X(k) = F_X(k) - \lim_{x\to k^-} F_X(x) \quad = \;\text{“jump” at }k$$

### 06 Illustration

> [!mexample] Example - PDF and CDF: Roll 2 dice
> ![21 - PDF and CDF: Roll 2 dice](Probability/2025%20Spring/W03%20-%20Examples.md#21%20-%20PDF%20and%20CDF%20Roll%202%20dice)

%%  %%
> [!mexample] Example - Total heads count; binomial expansion of 1
> ![22 - PMF for total heads count; binomial expansion of 1](Probability/2025%20Spring/W03%20-%20Examples.md#22%20-%20PMF%20for%20total%20heads%20count;%20binomial%20expansion%20of%201)

%%  %%
> [!mexample] Example - Life insurance payouts
> ![23 - Life insurance payouts](Probability/2025%20Spring/W03%20-%20Examples.md#23%20-%20Life%20insurance%20payouts)

