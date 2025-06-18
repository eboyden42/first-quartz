## Summations
#### 01
> [!problem] Summation of three: Rolling mixed dice
> You have three dice. One has 4, one has 6, and one has 12 sides.
> 
> How many 4s do you expect to see if you roll these dice together?
#### 02
> [!problem] Jumble of coins
> In my pocket I have a jumble of coins: 5 dimes, 4 quarters, 3 nickels, 3 pennies, and one big 50$\textcent$-piece. I draw three at random. What is the expected value of the three?
#### 03
> [!problem] Counting flip flops
> A bag contains 50 marbles, 30 blue and 20 red. A sequence of zeros and ones is created by pulling the marbles out one at a time (without replacement) and writing a 1 if the marble drawn is blue and a zero if it is red.
> 
> How many pairs of adjacent digits in the sequence are expected to differ from each other?
> 
> Hint: Use a sum of 49 indicators. ^t6ysf7

## Central Limit Theorem
#### 04
> [!problem] Normal approximation - Eating hot dogs
> 
> Frank is a competitive hot dog eater. He eats $1\,\mathrm{hd}$ in $15\,\mathrm{sec}$ with $\sigma=4\,\mathrm{sec}$.
> 
> What is the probability that Frank manages to consume $64\,\mathrm{hd}$ in $15\,\mathrm{min}$ or less, in an upcoming competition? Use a normal approximation from the CLT to estimate this probability.
> 
> State the reason that the normal approximation is applicable. ^wued1v
#### 05
> [!problem] Continuity correction: De Moivre-Laplace
> A fair die is rolled 300 times.
> 
> Use a normal approximation to estimate the probability that exactly 100 outcomes are either 3 or 6.
> 
> Do this with and without the continuity correction. ^z00b32
#### 06
> [!problem] Normal approximation - Ventilator filters
> A mechanical ventilator model uses air filters that last 100 hours on average with a standard deviation of 30 hours.
> 
> How many filters should be stocked so that the supply lasts 2,000 hours with probability at least 95%? Use a normal approximation to estimate the answer.
> 
> State the reason that the normal approximation is applicable.
#### 07
> [!problem] Normal approximation - Grading many exams
> An instructor has 50 exams to grade. The grading time for each exam follows a distribution with an average of 20 minutes and variance of 16 minutes. Assume the grading times per exam are independent.
> 
> Roughly what are the odds that after 450 minutes of grading, at least half the exams will be graded? Use a normal approximation to estimate the answer.
> 
> State the reason that the normal approximation is applicable. ^m9281n
#### 08
> [!problem] Indicator method, exchangeability, summation rules
> A class has 40 students: 24 women and 16 men. Each period the teacher selects a random student to present an exercise on the board from among those who have not presented already.
> 
> Let $X$ count the number of times a man was chosen after 15 class periods.
> 
> (a) $\star$ Find $E[X]$.
> (b) $\bigstar$ Find $\mathrm{Var}[X]$.
> 
> Hint: Is $X_j$ independent of $X_i$? Do you know $E[X_j]$ anyway?
#### 09
> [!problem] $\bigstar$ Graphing convergence to a bell curve
> Let $X_i$ be independent RVs each having the following PMF: 
> 
> $$P_{X_i}(x)\;=\; \begin{cases}0.5&x=+1\\ 0.5&x=-1\end{cases}$$
> 
> Notice that $E[X_i]=0$ and $\mathrm{Var}(X_i)=1$ for each $X_i$.
> 
> Define $S_n=X_1+\dots+X_n$. So $E[S_n]=0$ and $\mathrm{Var}(S_n)=n$, and therefore $\mathrm{Var}\left(\displaystyle\frac{S_n}{\sqrt{n}}\right)=1$.
> 
> By the CLT, $\displaystyle\frac{S_n}{\sqrt{n}}$ should converge to the standard normal distribution as $n\to\infty$. In this problem you explore the limit process by direct computation of the cases $n=1,\,2,\,3,\,4,\,5$.
> 
> (a) Compute the PMF of $S_n$ in terms of $n$.
> 
> Hint steps:
> 1. $P_{S_n}(w)$ is the number of sequences of $n$ outcomes of $\pm 1$ having a total sum of $w$, times the probability of any particular such sequence.
> 2. Find the probability of any particular sequence of $n$ outcomes of $\pm 1$.
> 3. There are $n\choose\ell$ ways to get $\ell$ outcomes of $+1$ and $n-\ell$ outcomes of $-1$. Solve for $\ell$ in terms of $w$.
> 4. Put 2. and 3. together in 1. to get your formula.
> 
> (b) Compute the PMF of $\displaystyle\frac{S_n}{\sqrt{n}}$ for $n=1,\,2,\,3,\,4,\,5$ using your formula from (a) together with a scaling (derived variable calculation).
> 
> (c) Draw the graphs of the PMF of $S_n$ and the PMF of $S_n/\sqrt{n}$ for $n=1,\,2,\,3,\,4,\,5$.

