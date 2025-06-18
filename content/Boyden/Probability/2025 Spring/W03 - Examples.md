## Repeated trials
#### 19 - Multinomial: Soft drinks preferred
Folks coming to a party prefer Coke (55%), Pepsi (25%), or Dew (20%). If 20 people order drinks in sequence, what is the probability that exactly 12 have Coke and 5 have Pepsi and 3 have Dew?

**Solution**
The multinomial coefficient $\displaystyle {20\choose 12,5,3}$ gives the number of ways to assign 20 people into bins according to preferences matching the given numbers, $C=12$ and $P=5$ and $D=3$.

Each such assignment is one sequence of outcomes. All such sequences have probability $(0.55)^{12}\cdot (0.25)^5\cdot (0.2)^3$.

The answer is therefore: $${20\choose 12,5,3}\cdot (0.55)^{12}\cdot (0.25)^5\cdot (0.2)^3\quad ⨠⨠ \quad \frac{20!}{12!\;5!\;3!}\cdot (0.55)^{12}\cdot (0.25)^5\cdot (0.2)^3$$

## Reliability
#### 20 - Reliability: Series, parallel, series
Suppose a process has internal components arranged like this:
![300](Pasted%20image%2020250126145506.png)
Write $W_i$ for the event that component $i$ succeeds, and $W_i^c$ for the event that it fails.

The success probabilities for each component are given in the chart:

|  1  |  2  |  3  |  4  |  5  |
| :-: | :-: | :-: | :-: | :-: |
| 92% | 89% | 95% | 86% | 91% |

Find the probability that the entire system succeeds.

**Solution**
- && Conjoin components 2 and 3 in series.
    - Compute: $$P[W_2W_3]\quad ⨠⨠ \quad P[W_2]\cdot P[W_3]\quad ⨠⨠ \quad (0.89)\cdot(0.95)= 0.8455$$
    - Therefore: $$P\big[(W_2W_3)^c\big]\quad ⨠⨠ \quad 1-0.846\quad ⨠⨠ \quad  0.1545$$
- && Conjoin components (2-3) with 4 and 5 in parallel.
    - Compute for the complement (failure) first: $$\begin{gather*}P\big[(W_2W_3\cup W_4\cup W_5)^c\big]\quad ⨠⨠ \quad P[(W_2W_3)^c]\cdot P[W_4^c]\cdot P[W_5^c]\\\\ ⨠⨠ \quad  (0.1545)(0.14)(0.09)\quad ⨠⨠ \quad 0.0019467 \end{gather*}$$
    - Flip back to success: $$P\big[W_2W_3\cup W_4\cup W_5\big]\quad ⨠⨠ \quad 1-0.0019467\quad ⨠⨠ \quad 0.9980533$$
- & Conjoin components 1 with (2-3-4-5) in series.
    - Compute: $$\begin{gather*}P\Big[W_1\big(W_2W_3\cup W_4\cup W_5\big)\Big]\quad ⨠⨠ \quad (0.92)(0.9980533)\\\\ ⨠⨠ \quad 0.918209036\quad\approx 91.82\% \end{gather*}$$

## Discrete random variables
#### 21 - PDF and CDF: Roll 2 dice
Roll two dice colored red and green. Let $X_R$ record the number of dots showing on the red die, $X_G$ the number on the green die, and let $S$ be a random variable giving the total number of dots showing after the roll, namely $S=X_R+X_G$.

- Find the PMFs of $X_R$ and of $X_G$ and of $S$.
- Find the CDF of $S$.
- Find $P[S=8]$.

**Solution**
- & Sample space.
    - Denote outcomes with ordered pairs of numbers $(i,j)$, where $i$ is the number showing on the red die and $j$ is the number on the green one.
    - Require that $i,j\in\mathbb{N}$ are integers satisfying $1\leq i,\,j\leq 6$.
    - Events are sets of distinct such pairs.
- && Create chart of outcomes.
    - Chart: ![200](Pasted%20image%2020250126134856.png)
- & Definitions of $X_R$, $X_G$, and $S$.
    - We have $X_R(i,j)=i$ and $X_G(i,j)=j$.
    - Therefore $S(i,j)=i+j$.
- && Find PMF of $X_R$.
    - Use variable $n$ for each possible value of $X_R$, so $n=1,\,2,\,\dots,\,6$.
    - Find $P_{X_R}(n)$: $$\begin{gather*}P_{X_R}(n)\quad ⨠⨠ \quad P[X_R=n]\\\\ ⨠⨠ \quad \frac{|\text{outcomes with $n$ on red}|}{|\text{all outcomes}|}\quad ⨠⨠ \quad \frac{6}{36}=\frac{1}{6}\end{gather*}$$
    - Therefore $P_{X_R}(n)=1/6$ for every $n$.
- & Find PMF of $X_G$.
    - Same as for $X_R$: $$P_{X_G}(n)=\frac{1}{6}\quad\text{for all}\;n$$
- &&& Find PMF of $S$.
    - Find $P_{S}(n)$: $$P_{S}(n)\quad ⨠⨠ \quad P[S=n]\quad ⨠⨠ \quad \frac{|\text{outcomes with sum $n$}|}{|\text{all outcomes}|}$$
    - !! Count outcomes along *diagonal lines* in the chart.
    - Create table of $P_S(n)$: ![500](Pasted%20image%2020230908154832.png)
    - Create bar chart of $P_S(n)$: ![200](Pasted%20image%2020250126134926.png)
    - Evaluate: $P[S=8]\quad ⨠⨠ \quad 5/36$.
- &&& Find CDF of $S$.
    - CDF definition: $$F_S(x)=P[S\leq x]$$
    - Apply definition: add new PMF value at each increment: $$F_S(n)=\begin{cases}0&\phantom{1\leq}x<2\\ 1/36&2\leq x<3\\ 3/36&3\leq x<4\\ 6/36&4\leq x<5\\ 10/36&5\leq x<6\\ 15/36&6\leq x<7\\ 21/36&7\leq x<8\\ 26/36&8\leq x<9\\ 30/36&9\leq x<10\\ 33/36&10\leq x<11\\ 35/36&11\leq x<12\\ 36/36&12\leq x\end{cases}$$

#### 22 - PMF for total heads count; binomial expansion of 1
A fair coin is flipped $n$ times.

Let $X$ be the random variable that counts the total number of heads in each sequence.

The PMF of $X$ is given by: $$P_X(k)={n\choose k}\left(\frac{1}{2}\right)^n$$
Since the total probability must add to 1, we know this formula must hold:
$$\begin{align*}1&= \sum_{\text{possible $k$}}P_X(k)\\\\\quad ⨠⨠ \quad 1&= \sum_{k=0}^n {n\choose k}\left(\frac{1}{2}\right)^n\end{align*}$$

Is this equation really true?

There is another way to view this equation: it is the binomial expansion $(x+y)^n$ where $x=\frac{1}{2}$ and $y=\frac{1}{2}$: $$\left(\frac{1}{2}+\frac{1}{2}\right)^n=\sum_{k=0}^n {n\choose k}\left(\frac{1}{2}\right)^n$$

#### 23 - Life insurance payouts
A life insurance company has two clients, $A$ and $B$, each with a policy that pays \$100,000 upon death. Consider events $D_1$ that the older client dies next year, and $D_2$ that the younger dies next year. Suppose $P[D_1]=0.10$ and $P[D_2]=0.05$.

Define a random variable $X$ measuring the total money paid out next year in units of \$1,000. The possible values for $X$ are 0, 100, 200. We calculate: 
$$\begin{align} P[X=0] \quad ⨠⨠& \quad P[D_1^c]P[D_2^c] = 0.95\cdot 0.90 = 0.86 \\\\ P[X=100] \quad ⨠⨠& \quad 0.05\cdot 0.90 + 0.95\cdot 0.10 = 0.14 \\\\ P[X=200] \quad ⨠⨠& \quad 0.05\cdot 0.10 = 0.005 \end{align}$$

