The symbol $\bigstar$ indicates higher difficulty.
## Poisson process
#### 01
> [!problem] Poisson satisfies $F(+\infty)=1$
> Show that a Poisson variable $X\sim\mathrm{Pois}(\lambda)$ satisfies the *total probability* rule for a CDF, namely that $\lim_{x\to\infty}F_X(x)=1$.
#### 02
> [!problem] Expectation of Poisson
> Derive the formula $E[X]=\lambda$ for a Poisson variable $X\sim\mathrm{Pois}(\lambda)$.
#### 03
> [!problem] Application of Poisson: meteor shower
> The UVA astronomy club is watching a meteor shower. Meteors appear at an average rate of $4$ per hour.
> 
> (a) Write a short explanation to justify the use of a Poisson distribution to model the appearance of meteors. Why should appearances be Poisson distributed?
>  
>  (b) What is the probability that the club sees more than 2 meteors in a single hour?
>  
>  (c) Suppose that over a four hour evening, 13 meteors were spotted. What is the probability that none of them happened in the first hour? ^qcgc75
#### 04
> [!problem] Silver dimes
> Suppose 1 out of 350 dimes in circulation is made of silver. Consider a tub of dimes worth \$40.
> 
> (a) Find a formula for the exact probability that this collection contains at least 2 silver dimes. Can your calculator evaluate this formula?
> 
> (b) Estimate the probability in question using a Poisson approximation.
> 
> (This topic for HW only, not for tests.)
#### 05
> [!problem] Application of Poisson approximation of binomial
> Let $X\sim \mathrm{Bin}(10,\frac{1}{10})$ and consider the Poisson approximation to $X$.
> 
> (a) Estimate the possible error of the approximation (for an arbitrary probability).
> 
> (b) Compute the exact error of the approximation for the specific value $P[X\leq 1]$.
> 
> (This topic for HW only, not for tests.)

## Function on a random variable
#### 06
> [!problem] Constants in PDF from expectation
> Suppose $X$ has PDF given by: 
> $$
> f_X(x) = \begin{cases} a+bx^2 & 0\leq x \leq 1 \\ 0 & \text{otherwise} \end{cases}
> $$
> Suppose $E[X]=\frac{7}{10}$. Find the only possible values for $a$ and $b$. Then find $\mathrm{Var}[X]$. ^0x7zfm
#### 07
> [!problem] Variance: Direct integral formula
> Suppose $X$ has PDF given by: $$f_X(x) = \begin{cases} 3e^{-3x} & x\geq 0 \\ 0 & \text{otherwise} \end{cases}$$
> 
> Find $\mathrm{Var}[X]$ using the integral formula. ^066qc5
#### 08
> [!problem] PDF of derived variable for $E[X]$ and $\mathrm{Var}[X]$
> Suppose the PDF of an RV is given by: $$f_X(x)=\begin{cases}\frac{3}{4}x(2-x)&0\leq x\leq 2\\ 0&\text{otherwise}\end{cases}$$
> 
> (a) Find $E[X]$ using the integral formula.
> 
> (b) Find $f_{X^2}(x)$, the PDF of $X^2$ (by calculating the CDF first).
> 
> (c) Find $E[X^2]$ using $f_{X^2}(x)$.
> 
> (d) Find $\mathrm{Var}[X]$ using results of (a) and (c). ^g88r0c

## Continuous wait times
#### 09
> [!problem] Mean and variance of exponential
> Show that $E[X]=\frac{1}{\lambda}$ and $\mathrm{Var}[X] = \frac{1}{\lambda^2}$ for $X\sim \mathrm{Exp}(\lambda)$.
#### 10
> [!problem] $\bigstar$ Vehicle lifetimes
> Suppose that vehicle lifetimes follow an exponential distribution with an expected lifetime of 10 years.
> 
> Suppose you have one car that is 5 years old, and one that is 15 years old, at the present moment.
> 
> What is the probability that the first car outlives the second? (I.e. that the second breaks at an earlier time than the first breaks, both starting now.)
#### 11
> [!problem] $\bigstar$ Wait time for 5 calls - two methods
> Consider the Poisson process of phone calls coming to a call center at an average rate of 1 call every 6 minutes.
> 
> Let us model the wait time for 5 calls to come in. You may use Desmos or similar to perform the integration numerically.
> 
> (a) Method One: An arrival of ‘1-call’ comes in at an average rate of $\lambda=10$ calls per hour. So a Bundle of ‘5-calls’ comes in at an average wait of $\lambda_B=2$ Bundles per hour. Use an exponential variable with $\lambda_B=2$ to determine the probability that the wait time for a Bundle (of 5 calls) is at most $1\,\mathrm{hr}$.
> 
> (b) Method Two: Use $\lambda=10$ calls per hour with an Erlang distribution at $\ell=5$ to determine the probability that the wait time for 5 calls is at most $1\,\mathrm{hr}$.
> 
> (c) Compare the results of (a) and (b). Can you explain why they agree or disagree? Which is correct??

