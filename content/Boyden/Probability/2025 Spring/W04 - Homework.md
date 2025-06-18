In these problems, $\bigstar$ indicates higher likely difficulty.

## Bernoulli process
#### 01
\[duplicated W03-08]
#### 02
> [!problem] PMF and CDF: number of heads in five flips
> Let $X$ count the number of heads resulting from five flips of a coin.
> 
> Write complete formulas (using cases) for the PMF and CDF.
#### 03
> [!problem] Rolling until a six
> A fair die is rolled until a six comes up.
> 
> What are the odds that it takes at least 10 rolls? Use a geometric random variable. ^afgyhm
#### 04
> [!problem] Intersection accidents
> Suppose that the odds of an accident occurring on any given day at the intersection of Ivy and Emmet is 0.05.
> 
> What are the odds of the first accident occurring after day 4 and by day 10?
> 
> (You have calculated the answer before. This time, rework the problem in terms of an appropriate distribution type.)
#### 05
> [!problem] $\bigstar$ A very strange car
> A very strange car with $n$ components will drive if at least half of its components work. Each component will work with the same probability $p$, independently of the others.
> 
> For what values of $p$ is a car with $n=3$ more likely to drive than a car with $n=5$?
> 
> (Start by defining a random variable that counts the number of working components.)
#### 06
> [!problem] Geometric distribution is memoryless
> Suppose that $X\sim \text{Geom}(p)$.
> 
> Derive this equation: $$P\big[X=n+k\;\big|\; X>n\big]\quad=\quad P[X=k]$$
> Interpret the equation. (Inspired by the title.)
#### 07
> [!problem] $\bigstar$ Binomial ratios
> Suppose $X\sim \text{Bin}(n,p)$.
> - Find the value of $k$ that maximizes $P_X(k)$. Do this by studying the successive ratios $P_X(k)/P_X(k-1)$.
> - Use these ratios to compute $P[X\leq 4]$ as a sum of 5 terms without using factorials. Do this by computing $P_X(0)$ directly, and then writing a recursive algorithm that determines $P_X(k)$ in terms of $P_X(k-1)$.
> 
> ![250](Pasted%20image%2020230916133821.png)
#### 08
> [!problem] Prize on the Mall
> A booth on the Mall is running a secret prize game, in which the $5^\text{th}$ passerby wearing a hat wins \$1,000.
> 
> Passersby wear hats independently of each other and with probability 20%.
> 
> Let $N$ be a random variable counting how many passersby pass by before a winner is found.
> 
> (a) What is the name of the distribution for $N$? What are the parameters?
> 
> (b) What is the probability that the $10^\text{th}$ passerby wins the prize?
> 
> (c) What is the probability that at least $7$ passersby are needed before a winner is found? ^e1iui2

## Expectation and variance
#### 09
> [!problem] $\bigstar$ Students and buses expect different crowding
> Bus One has 10 students, Bus Two has 20, Bus Three has 30, and Bus Four has 40.
> 
> - Let $X$ measure the number of students on a given random student’s bus.
> - Let $Y$ measure the number of students on a given random driver’s bus.
> 
> Compute $E[X]$ and $E[Y]$. Are they different? Why or why not?
#### 10
> [!problem] Insurance expected payout
> A car insurance analytics team estimates that the cost of repairs per accident is uniformly distributed between $100 and $1500. The manager wants to offer customers a policy that has a $500 deductible and covers all costs above the deductible.
> 
> How much is the expected payout per accident?
> 
> (Hint: Graph the PDF for the cost of repairs $X$; write a formula for the payout in terms of $X$ using cases; then integrate.) ^gtjjab
#### 11
> [!problem] $\bigstar$ Expectation, variance of geometric variable
> Derive formulas for $E[X]$ and $\mathrm{Var}[X]$ given $X\sim \mathrm{Geom}(p)$.
> 
> Hint: 
> For $E[X]$ you will get a sum that has terms like $nx^{(n-1)}$.  
> This series comes from the geometric series $1/(1-x)=1+x+x^2+x^3+\dots$  
> (Differentiate both sides.)  
>   
> For $E[X^2]$ you will need to consider this general fact of algebra: $A^2=A\cdot(A-1) + A$
> (And apply the same methods as above.)

## Poisson process

\[All on this topic are in HW for W05.]
