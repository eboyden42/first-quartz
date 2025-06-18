## Law of Large Numbers

#### Markov and Chebyshev
A tire shop has 500 customers per day on average.

(a) Estimate the odds that more than 700 customers arrive today.

(b) Assume the variance in daily customers is 10. Repeat (a) with this information.

**Solution**

Write $X$ for the number of daily customers.

(a) Using Markov’s inequality with $c=700$, we have: 

$$P\big[\,X\geq 700\,\big]\quad\leq\quad \frac{500}{700}\approx 0.71$$

(b) Using Chebyshev’s inequality with $c=200$, we have: 

$$P\big[\,|X-500|\geq 200\,\big]\quad\leq\quad \frac{100}{200^2}\approx 0.0025$$

The Chebyshev estimate is much smaller!

#### LLN: Average winnings
A roulette player bets as follows: he wins \$100 with probability 0.48 and loses \$100 with probability 0.52. The expected winnings after a single round is therefore $\$100\cdot 0.48 - \$100\cdot 0.52$ which equals $-\$4$.

By the LLN, if the player plays repeatedly for a long time, he expects to lose $\$4$ per round on average.

The ‘expects’ in the last sentence means: the PMF of the cumulative average winnings approaches this PMF:

$$P_{M_n(X)}(k)=\begin{cases}1&k=\$4\\0&k\neq \$4\end{cases}$$

This is by contrast to the ‘expects’ of expected value: the probability of achieving the expected value (or something near) may be low or zero! For example, a single round of this game.

#### Enough samples
Suppose $X_1,\,X_2,\,\dots\,$ are IID samples of $X\sim\mathrm{Ber}(0.6)$.

(a) Compute $E [X]$ and $\operatorname{Var}[X]$ and $\operatorname{Var}\left[M_{100}(X)\right]$.

(b) Use the finite LLN to find $\alpha$ such that: 

$$P\big[\,\left|M_{100}(X)-0.6\right| \geq 0.05\,\big] \leq \alpha$$

(c) How many samples $n$ are needed that to guarantee that: 

$$P\big[\,\left|M_n(X)-0.6\right| \geq 0.1\,\big] \leq 0.05$$

## Statistical testing

#### One-tail test: Weighted die
Your friend gives you a single regular die, and say she is worried that it has been weighted to prefer the outcome of 2. She wants you to test it.

Design a significance test for the data of 20 rolls of the die to determine whether the die is weighted. Use significance level $\alpha=0.05$.

**Solution**

Let $X$ count the number of 2s that come up.

The Claim: “the die is weighted to prefer 2”
The null hypothesis $H_0$: “the die is normal”

Assuming $H_0$ is true, then $X\sim\mathrm{Bin}(20,1/6)$, and therefore: 

$$P_{X|H_0}(k)\quad=\quad {20\choose k}(1/6)^k(5/6)^{20-k}$$

---

⚠️ Notice that “prefer 2” implies the claim is for *more* 2s than normal.

Therefore: Choose a one-tail rejection set.

Need $r$ such that $P[X\geq r\mid H_0]=0.05$
- Equivalently: $P[X<r\mid H_0]=0.95$

---

Solve for $r$ by computing conditional CDF values: 

|        $k:$         |   0   |   1   |   2   |   3   |   4   |   5   |   6   |   7   |
| :-----------------: | :---: | :---: | :---: | :---: | :---: | :---: | :---: | :---: |
| $F_{X\mid H_0}(k):$ | 0.026 | 0.130 | 0.329 | 0.567 | 0.769 | 0.898 | 0.963 | 0.989 |

Therefore, choose $r=6$. Then $P[X\geq 6\mid H_0]<0.04$ and no smaller (integer) $r$ will have Type I error below 0.05.

The final answer is: $$\colorbox{aqua}{$R\;=\; \{x\mid x\geq 6\}$}$$

#### Two-tail test: Circuit voltage
A boosted AC circuit is supposed to maintain an average voltage of $130\,\mathrm{V}$ with a standard deviation of $2.1\,\mathrm{V}$. Nothing else is known about the voltage distribution.

Design a two-tail test incorporating the data of 40 independent measurements to determine if the expected value of the voltage is truly $130\,\mathrm{V}$. Use $\alpha=0.02$.

**Solution**

Use $M_{40}(V)$ as the decision statistic, i.e. the sample mean of 40 measurements of $V$.

The Claim to test: $\;E[V]\neq 130$
The null hypothesis $H_0$: $\;E[V]=130$

Rejection region: $$|M_{40}-130|\geq c$$

where $c$ is chosen so that $P\big[\;|M_{40}-130|\geq c\;\big]=0.02$

---

Assuming $H_0$, we expect that: 

$$E[M_{40}]=130\qquad \sigma^2=\mathrm{Var}[M_{40}]=\frac{2.1^2}{40}\approx 0.110$$

Recall Chebyshev’s inequality: 

$$P\big[\;|M_{40}-130|\geq c\;\big]\leq\frac{\sigma^2}{c^2}\approx\frac{0.110}{c^2}$$

---

Now solve: 

$$\frac{0.110}{c^2}=0.02\quad ⨠⨠ \quad c\approx 2.348$$

Therefore the rejection region should be: 

$$\colorbox{aqua}{$M_{40}<127.65\quad\cup\quad 132.35<M_{40}$}$$


#### One-tail test with a Gaussian: Weight loss drug
Assume that in the background population in a specific demographic, the distribution of a person’s weight $W$ satisfies $W\sim\mathcal{N}(190,24)$. Suppose that a pharmaceutical company has developed a weight-loss drug and plans to test it on a group of 64 individuals.

Design a test at the $\alpha=0.01$ significance level to determine whether the drug is effective.

**Solution**

Since the drug is tested on 64 individuals, we use the sample mean $M_{64}(W)$ as the decision statistic.

The Claim: “the drug is effective in reducing weight”
The null hypothesis $H_0$: “no effect: weights on the drug still follow $\mathcal{N}(190,24)$”

Assuming $H_0$ is true, then $W\sim\mathcal{N}(190,24)$.

⚠️ One-tail test because the drug is expected to *reduce* weight (unidirectional).

Rejection region: $$M_{64}(W)\leq r$$

---

Compute that $\sigma_{M_{64}}=\frac{24}{\sqrt{64}}=3$.

Since $W\sim\mathcal{N}(190,24)$, we know that $M_{64}(W)\sim\mathcal{N}(190,3^2)$.

---

Furthermore: $$\frac{M_{64}(W)-190}{3}\quad\sim\quad\mathcal{N}(0,1)$$

Then: 

$$\begin{align*}P[M_{64}(W)<r]\quad&= \quad P\left[Z<\frac{r-190}{3}\right]\\\\&= \quad \Phi\left(\frac{r-190}{3}\right)\end{align*}$$

---

Solve: 

$$\begin{gather*}P[M_{64}(W)<r]=0.01\\\\ ⨠⨠ \quad \Phi\left(\frac{r-190}{3}\right)=0.01\\\\⨠⨠ \quad \Phi\left(\frac{190-r}{3}\right)=0.99\\\\ ⨠⨠ \quad \frac{190-r}{3}=2.33\\\\ ⨠⨠ \quad r=183.01\end{gather*}$$

Therefore, the rejection region: $$\colorbox{aqua}{$M_{64}(W)\leq 183.01$}$$

