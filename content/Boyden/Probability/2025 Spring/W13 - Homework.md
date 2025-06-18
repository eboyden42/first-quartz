## Normal approximation - further problems
#### 01
> [!problem] Normal approximation: Double ones
> 
> Roll a pair of dice 10,000 times. Estimate the odds that the number of “double ones” obtained is in the range $[290,300]$.
#### 02
> [!problem] Normal approximation: Heads v. tails
> 
> Flip a coin 10,000 times. Let $H$ measure the number of heads, and $T$ measure the number of tails. Estimate the probability that $H$ and $T$ are within 100 of each other.
> 
> Hint: Write an inequality for the condition, then sub a formula for $T$ in terms of $H$. ^r1cw8c


## Deviation and Large Numbers
#### 03
> [!problem] Deviation estimation - Exponential
> Let $X\sim\mathrm{Exp}(\lambda)$ with $\lambda=0.5$.
> 
> (a) Compute the Markov bound on $P[X>5]$.
> 
> (b) Compute the Chebyshev bound on $P[X>5]$.
> 
> (c) Find the exact value of $P[X>5]$ and compare with yours answers in (a) and (b). ^lt2pbi
#### 04
> [!problem] Deviation estimation - How many samples required?
> Suppose the expected value of a score on the Probability final exam is 80 and the variance is 10. Assume the students’ scores are independent.
> 
> How many students must take the exam before the average score in the class is known to lie within 5 points of 80 with a probability of 90%? What about 95%?
#### 05
> [!problem] Deviation estimation - Factory production
> Suppose a factory produces an average of $50$ items per week.
> 
> (a) How likely is it that more than 75 items are produced this week? (Find an upper bound.)
> 
> (b) Suppose the variance is known to be 25 items. Now what can you say about (a)? (Hint: Monotonicity.)
> 
> (c) What do you know about the probability that the number of items produced differs from the average by at most 10? ^qz495a

%% 
> [!problem] Normal v. Chebyshev - Jewelry insurance
> A jewelry insurance provider has 2500 customers. The expected payout to a customer each year is \$1000 with a standard deviation of \$900.
> 
> What premium should be charged to each customer to ensure that the premiums will cover the claims, with probability at least 99.9\%?
> 
> (a) Solve the problem using a normal approximation.
> 
> (b) Solve the problem using Chebyshev’s inequality.

> [!problem] Chebyshev
> Suppose $X$ is an RV with $E[X]=17$ and $E[X^2]=298$.
> 
> Use Chebyshev’s inequality to find: 
> 
> (a) A lower bound for $P[\,10<X<24\,]$.
> 
> (b) An upper bound for $P[\,|X-17| \geq 16\,]$.
 
 %%

^i74w8f
#### 06
> [!problem] $\bigstar$ Random walk forward
> You play a game where you roll a die, and if the outcome is 1 or 2 you take a step forward, otherwise you take two steps forward. Let $X_n$ be your position (measured in steps forward) after playing the game $n$ times.
> 
> (a) Estimate $P[\,X_{90}\geq 160\,]$ using a normal approximation for a certain relevant binomial distribution.
> 
> (b) Find $\lim_{n\to\infty} P[\,X_n>1.6n\,]$ and $\lim_{n\to\infty} P[\,X_n>1.7n\,]$.
> 
> Hint: Rewrite the conditions into a form where you can apply the Law of Large Numbers.


## Significance testing
#### 07
> [!problem] Testing paperclips - Likelihood of error
> A factory assembly line machine is cutting paperclips to length before folding. Each paperclip is supposed to be $3\,\mathrm{in}$ long. The length of paperclips is approximately normally distributed with standard deviation $0.2\,\mathrm{in}$.
> 
> (a) Design a significance test with $\alpha=0.02$ that is based on the average of 5 measurements (sample mean). What is the rejection region? What is the probability of Type I error?
> 
> (b) What is the probability of  Type II error, given that the average paperclip length on the machine is actually $3.1\,\mathrm{in}$? ^bj1nh8

