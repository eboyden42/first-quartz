# Poisson process
#### 01 - Poisson satisfies $F(+\infty) = 1$
Show that a Poisson variable $X \sim \text{Pois}(\lambda)$ satisfies the *total probability* rule for a CDF, namely that $\lim_{x\to\infty}F_{X}(x) = 1$.

**Solution**
1. & State CDF of a Poisson distribution.
    - We know that $P_{X}(k) = e^{-\lambda}\frac{\lambda^{k}}{k!}$
    - We know that $F_{X}(k) = P[X \leq k]$.
    $$F_{X}(k) = \sum_{k = 0}^{\infty}e^{-\lambda}\frac{\lambda^{k}}{k!}$$
2. & Compute limit as $k \to \infty$.
    - Note that $e^{x} = \sum_{n = 0}^{\infty}\frac{x^{n}}{n!}$
$$\lim_{k \to\infty}F_{X}(x) = e^{-\lambda}\lim_{k\to\infty}\sum_{k = 0}^{\infty}\frac{\lambda^{k}}{k!}=e^{-\lambda}e^{\lambda} = 1$$

#### 02 - Expectation of Poisson
Derive the formula $E[X] = \lambda$ for a Poisson variable $X \sim \text{Pois}(\lambda)$.

**Solution**
1. & State PMF of a Poisson distribution.
    $$P_{X}(k) = e^{-\lambda}\frac{\lambda^{k}}{k!}$$
2. & Find expectation.
    - We know that $E[X] = \sum_{k = 0}^{\infty}kP_{X}(k)$.
$$E[X] = \sum_{k=0}^{\infty}e^{-\lambda}\frac{\lambda^{k}}{(k-1)!} = \lambda e^{-\lambda}\sum_{k = 0}^{\infty}\frac{\lambda^{k - 1}}{(k-1)!} = \lambda e^{-\lambda}e^{\lambda} = \lambda$$

#### 03 - Application of Poisson: meteor shower
The UVA astronomy club is watching a meteor shower. Meteors appear at an average rate of 4 per hour.

- (a) Write a short explanation to justify the use of a Poisson distribution to model the appearance of meteors Why should appearances be Poisson distributed?
- (b) What is the probability that the club sees more than 2 meteors in a single hour?
- (c) Suppose that over a four hour evening, 13 meteors were spotted. What is the probability that none of them happened in the first hour?

**Solution**
**(a)**
1. & Write explanation.
     - You use Poisson distribution if events occur randomly and you know the mean number of events that occur within a given interval of time.
     - In addition, Poisson distributions are advantageous when describing rare events. Since meteors are a rare occurrence, it makes sense to use a Poisson distribution.

**(b)**
1. & Compute probability.
    - Since $P[X > 2] = 1 - P[X \leq 2]$, it's easier to compute the latter.
$$1- P[X \leq 2] = 1 - \frac{e^{-4}\lambda^{0}}{0!} - \frac{e^{-4}4^1}{1!}-\frac{e^{-4}4^{2}}{2!} \approx 0.7619$$

**(c)**
1. & Compute probability.
    - We know that there are 13 meteors in 4 hours, so we see an average of $\lambda = \frac{13}{4}$ meteors per hour. Let $Y \sim \text{Pois}\left(\frac{13}{4}\right).$
    - We wish to find the probability $P_{Y}(0)$.
    $$P_{Y}(0) = e^{-\frac{13}{4}}\frac{\left(\frac{13}{4}\right)^{0}}{0!} = 0.0388$$

#### 04 - Silver dimes
Suppose 1 our of 350 dimes in circulation is made of silver. Consider a tub of dimes worth $\$40$. 
- (a) Find a formula for the exact probability that this collection contains at least 2 silver dimes. Can your calculator evaluate this formula?
- (b) Estimate the probability in question using a Poisson approximation.

**Solution**
**(a)**
1. & Identify distribution.
    - Clearly, this scenario follows a binary distribution.
    - We have a $\frac{1}{350}$ chance that the dime is made of silver.
    - Since we have $\$40$ worth of dimes, there are 400 dimes.
    - Thus, $X \sim \text{Bin}\left(400, \frac{1}{350}\right)$.
2. & Find formula for probability.
$$P[X \geq 2] = \sum_{k = 2}^{400}\binom{400}{k}\left(\frac{1}{350}\right)^{k}\left(1-\frac{1}{350}\right)^{400-k}$$

**(b)**
1. & Find corresponding Poisson distribution.
    - Let $Y \sim \text{Pois}(np)$.
    - $Y \sim \text{Pois}\left(\frac{8}{7}\right)$.
2. & Compute probability.
    - We have that $P[Y \geq 2] = 1 - P[Y < 2]$.
    $$1- P[Y < 2] = 1- e^{-\frac{8}{7}}\frac{\left(\frac{8}{7}\right)^{0}}{0!} - e^{-\frac{8}{7}}\frac{\left(\frac{8}{7}\right)^{1}}{1!} \approx 0.3166$$
#### 05 - Applications of Poisson approximation of binomial
Let $X \sim \text{Bin}\left(10,\frac{1}{10}\right)$ and consider the Poisson approximation to $X$.

 - (a) Estimate the possible error of the approximation (for an arbitrary probability).
 - (b) Compute the exact error of the approximation for the specific value $P[X \leq 1]$.

**Solution**
**(a)**
1. & Define random variable that is the Poisson approximation to $X$.
    - $Y \sim \text{Pois}(np) = 1$.
2. & Estimate error.
$$\left|P_{X}(k) - P_{Y}(k)\right| \leq np^{2} = 10\left(\frac{1}{10}\right)^{2} = \frac{1}{10}$$

**(b)**
1. & Compute $P[X \leq 1]$ using the binomial distribution. 
    - We have that $P[X \leq 1] = P[X = 0] + P[X = 1]$.
    $$P[X \leq 1] = \binom{10}{0}\left(\frac{1}{10}\right)^{0}\left(\frac{9}{10}\right)^{10} + \binom{10}{1}\left(\frac{1}{10}\right)^{1}\left(\frac{9}{10}\right)^{9} \approx 0.7361$$
2. & Compute $P[X \leq 1]$ using the Poisson distribution.
$$P[X \leq 1] = e^{-1}\frac{1^{0}}{0!} + e^{-1}\frac{1^{1}}{1!} \approx 0.7358$$
1. & Compute error.
$$\text{error} = |0.7361 - 0.7358| = 0.0003$$

#### 06 - Constants in PDF from expectation.
Suppose $X$ has PDF given by $$f_{X}(x) = \begin{cases} a + bx^{2} & 0 \leq x \leq 1 \\ 0 & \text{otherwise} \end{cases} $$ Suppose $E[X] = \frac{7}{10}$. Find the only possible values for $a$ and $b$. Then, find $\text{Var}[X]$.

**Solution**
1. & Recall formula for expectation of a continuous random variable. 
    $$E[X] = \int_{-\infty}^{\infty}xf_{X}(x)dx$$
2. & Use formula to find an equation relating $a$ and $b$.
$$\begin{align*}
\int_{0}^{1}x\left(a+bx^{2}\right)dx &= \frac{7}{10} \\ \left.\left[\frac{ax^{2}}{2} + \frac{bx^{4}}{4}\right]\right|_{0}^{1} &= \frac{7}{10} \\
\frac{a}{2} + \frac{b}{4} = \frac{7}{10}
\end{align*} $$
3. & Recall that integrating a PDF should yield $1$. Integrate the PDF and find a second equation relating $a$ and $b$.
$$\begin{align*}\int_{0}^{1}a+bx^{2}dx &= 1 \\ \left.\left[ax + \frac{bx^{3}}{3}\right]\right|_{0}^{1} &= 1 \\ a + \frac{b}{3} &= 1\end{align*} $$
3. & Solve system of equations for $a$ and $b$.
    - Isolating $a$ in the second equation yields $a = 1 - \frac{b}{3}$.
    - Plugging this expression into the first equation yields $\frac{1- \frac{b}{3}}{2} + \frac{b}{4} = \frac{7}{10}$ .
    - Solving for $b$ yields 2.4, and thus $a = 0.2$.
4. & Compute variance using the formula $\text{Var}[X] = E\left[X^{2}\right] - \left(E[X]\right)^{2}$ 
     - Compute $E\left[X^{2}\right]$.
         $$E\left[X^{2}\right] = \int_{0}^{1}x^{2}\left(a+bx^{2}\right)dx = \left.\left[\frac{ax^{3}}{3} + \frac{bx^{5}}{5}\right]\right|_{0}^{1} = \frac{a}{3} + \frac{b}{5} = \frac{41}{75}$$
    - $\text{Var}[X] = \frac{41}{75} - \left(\frac{7}{10}\right)^{2} = \frac{17}{300}$.


#### 07 - Variance: Direct integral formula
Suppose $X$ has PDF given by: $$f_{X}(x) = \begin{cases} 3e^{-3x} & x \geq 0 \\ 0 & \text{otherwise} \end{cases} $$
Find $\text{Var}[X]$ using the integral formula.

**Solution**
1. & Recall the integral formula for variance.
    - Use the fact that $\text{Var}[X] = E\left[(X - \mu)^{2}\right]$ 
$$\text{Var}[X] = \int_{-\infty}^{\infty} (x - \mu)^{2}f_{X}(x)dx$$
2. & Compute $\mu = E[X]$.
$$E[X] = \int_{0}^{\infty}3xe^{-3x}dx = \lim_{b \to \infty}\left.\left[-xe^{-3x}-\frac{e^{-3x}}{3}\right]\right|_{0}^{b} = \frac{1}{3}$$
1. && Compute $\text{Var}[X]$
$$\text{Var}[X] = \int_{0}^{\infty}\left(x - \frac{1}{3}\right)^{2}3e^{-3x}dx  = \lim_{b \to \infty}\int_{0}^{b}3x^{2}e^{-3x}-2xe^{-3x}+\frac{e^{-3x}}{3}dx$$
$$= \lim_{b\to\infty}\left.\left[-x^{2}e^{-3x}-\frac{e^{-3x}}{9}\right]\right|_{0}^{b} = \frac{1}{9}$$
#### 08 - PDF of derived variable for $E[X]$ and $\text{Var}[X]$
Suppose the PDF of an RV is given by $$f_{X}(x) = \begin{cases} \frac{3}{4}x(2-x) & 0 \leq x \leq 2 \\ 0 & \text{otherwise} \end{cases} $$
- (a) Find $E[X]$ using the integral formula.
- (b) Find $f_{X^{2}}(x)$, the PDF of $X^{2}$ (by calculating the CDF first).
- (c) Find $E\left[X^{2}\right]$ using $f_{X^{2}}(x)$.
- (d) Find $\text{Var}[X]$ using results of (a) and (c).

**Solution**
**(a)**
1. & Compute $E[X]$.
$$E[X] = \int_{0}^{2}\frac{3}{4}x^{2}(2-x)dx = \left.\left[\frac{x^{3}}{2}-\frac{3}{16}x^{4}\right]\right|_{0}^{2} = 1$$

**(b)**
1. & Find the CDF of $X$.
$$F_{X}(x) = \int_{-\infty}^{x}f_{X}(t)dt = \int_{0}^{x}\frac{3}{4}t(2-t)dt = \left.\left[\frac{3}{4}t^{2}-\frac{t^{3}}{4}\right]\right|_{0}^{x} = \frac{3}{4}x^{2}-\frac{1}{4}x^{3}$$
2. Find the CDF of $X^{2}$.
    - Since $X^{2}$ is monotone increasing, $F_{X^{2}}(x) = F_{X}\left(\sqrt{x}\right)$.
$$F_{X}\left(\sqrt{x}\right) = \begin{cases} 0 & x < 0 \\ \frac{3}{4}x - \frac{1}{4}x^{\frac{3}{2}} & 0 \leq x < 4 \\ 1 &4  \leq x \end{cases} $$
3. & Find the PDF of $X^{2}$ by differentiating.
     $$f_{X^{2}}(x) = \begin{cases} 0 & x < 0 \\ \frac{3}{4} - \frac{3}{8}x^{\frac{1}{2}} & 0 \leq x < 4 \\ 0 & 4 \leq x \end{cases} $$

**(c)**
1. & Find $E\left[X^{2}\right]$.
$$E\left[X^{2}\right] = \int_{0}^{4}x\left(\frac{3}{4}-\frac{3}{8}x^{\frac{1}{2}}\right)dx = \left.\left[\frac{3}{8}x^{2}-\frac{3}{20}x^{\frac{5}{2}}\right]\right|_{0}^{4} = \frac{6}{5}$$

**(d)**
1. & Compute $\text{Var}[X]$.
$$\text{Var}[X] = E\left[X^{2}\right] - \left(E[X]\right)^{2} = \frac{6}{5} - 1 = \frac{1}{5}$$

#### 09 - Mean and variance of exponential
Show that $E[X] = \frac{1}{\lambda}$ and $\text{Var}[X] = \frac{1}{\lambda^{2}}$ for $X \sim \text{Exp}(\lambda)$.

**Solution**
1. & State the PDF of an exponential distribution.
$$f_{X}(x) = \lambda e^{-\lambda x}, \qquad x > 0 $$
2. && Compute $E[X]$ using the integral formula.
    $$E[X] = \int_{0}^{\infty}\lambda x e^{-\lambda x}dx  = \lim_{b \to \infty}\left.\left[-  xe^{-\lambda x} - \frac{e^{-\lambda x}}{\lambda}\right]\right|_{0}^{b} = \frac{1}{\lambda}$$
3. && Compute $E\left[X^{2}\right]$ using the integral formula.
$$E\left[X^{2}\right] = \int_{0}^{\infty}\lambda x^{2}e^{-\lambda x}dx = \lim_{b \to \infty}\left.\left[- x^{2}e^{-\lambda x} - \frac{2 xe^{-\lambda x}}{\lambda} - \frac{2e^{-\lambda x}}{\lambda^{2}} \right]\right|_{0}^{b} = \frac{2}{\lambda^{2}}$$
4. & Compute $\text{Var}[X]$
$$\text{Var}[X] = E\left[X^{2}\right]- \left(E[X]\right)^{2} = \frac{2}{\lambda^{2}} - \frac{1}{\lambda^{2}} = \frac{1}{\lambda^{2}}$$

#### 10 - Vehicle lifetimes
Suppose that vehicle lifetimes follow an exponential distribution with an expected lifetime of 10 years.

Suppose you have one car that is 5 years old, and one that is 15 years old.

What is the probability that the first car outlives the second?

**Solution**
1. & Recall the memoryless property of exponential distributions.
    - Elapsed time has no effect on future events.
    - Therefore, the fact that one car is older than the other has no effect on the remaining lifetimes.
2. & Derive conclusions.
    - Since both cars have the same remaining lifetime distribution, the probability that either car outlives the other is 0.5.

#### 11 - Wait time for 5 calls - two methods
Consider the Poisson process of phone calls coming to a call center at an average rate of 1 call every 6 minutes. 

Let us model the wait time for 5 calls to come in.

- (a) Method One: An arrival of '1-call' comes in at an average rate of $\lambda = 10$ calls per hour. So, a Bundle of '5-calls' comes in at an average wait of $\lambda_{B} = 2$ Bundles per hour. Use an exponential variable with $\lambda_{B} = 2$ to determine the probability that the wait time for a Bundle (of 5 calls) is at most 1 hr.
- (b) Method Two: Use $\lambda = 10$ calls per hour with an Erlang distribution at $\ell = 5$ to determine the probability that the wait time for 5 calls is at most 1 hr.
- (c) Compare the results of (a) and (b). Can you explain why they agree or disagree? Which is correct?

**Solution**
**(a)**
1. & Compute probability the wait time for a Bundle is at most 1 hr.
    - Our bounds will be from 0 to 1 since we are only concerned about 1 hour.
$$P[X \leq 1] = \int_{0}^{1}2e^{-2x}dx = \left.\left[-e^{-2t}\right]\right|_{0}^{1} \approx 0.8647$$

**(b)**
1. & State the Erlang distribution.
$$f_{Y}(y) = \frac{\lambda^{\ell}}{(\ell - 1)!}y^{\ell - 1}e^{-\lambda y}, \qquad y \geq 0$$
2. & Compute desired probability.
$$P[Y \leq 1] = \int_{0}^{1}\frac{{10}^{5}}{4!}y^{4}e^{-10y}dy \approx 0.9707$$

**(c)**
1. State conclusions.
    - Clearly, the results disagree. This is because method 1 considers calls coming in at bundles at a time instead of considering 5 discrete calls. Method 2 is more accurate since it considers the rates of individual calls. 