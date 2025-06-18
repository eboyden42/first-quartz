# Poisson process
#### 05-01 - Poisson satisfies $F(+\infty) = 1$
Show that a Poisson variable $X \sim \text{Pois}(\lambda)$ satisfies the *total probability* rule for a CDF, namely that $\lim_{x\to\infty}F_{X}(x) = 1$.

**Solution**
1. & State CDF of a Poisson distribution.
    - We know that $P_{X}(k) = e^{-\lambda}\frac{\lambda^{k}}{k!}$
    - We know that $F_{X}(k) = P[X \leq k]$.
    $$F_{X}(k) = \sum_{k = 0}^{\infty}e^{-\lambda}\frac{\lambda^{k}}{k!}$$
2. & Compute limit as $k \to \infty$.
    - Note that $e^{x} = \sum_{n = 0}^{\infty}\frac{x^{n}}{n!}$
$$\lim_{k \to\infty}F_{X}(x) = e^{-\lambda}\lim_{k\to\infty}\sum_{k = 0}^{\infty}\frac{\lambda^{k}}{k!}=e^{-\lambda}e^{\lambda} = 1$$

#### 05-02 - Expectation of Poisson
Derive the formula $E[X] = \lambda$ for a Poisson variable $X \sim \text{Pois}(\lambda)$.

**Solution**
1. & State PMF of a Poisson distribution.
    $$P_{X}(k) = e^{-\lambda}\frac{\lambda^{k}}{k!}$$
2. & Find expectation.
    - We know that $E[X] = \sum_{k = 0}^{\infty}kP_{X}(k)$.
$$E[X] = \sum_{k=0}^{\infty}e^{-\lambda}\frac{\lambda^{k}}{(k-1)!} = \lambda e^{-\lambda}\sum_{k = 0}^{\infty}\frac{\lambda^{k - 1}}{(k-1)!} = \lambda e^{-\lambda}e^{\lambda} = \lambda$$

#### 05-03 - Application of Poisson: meteor shower
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

#### 05-04 - Silver dimes
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
#### 05-05 - Applications of Poisson approximation of binomial
Let $X \sim \text{Bin}\left(10,\frac{1}{10}\right)$ and consider the Poisson approximation to $X$.

 - (a) Estimate the possible error of the approximation (for an arbitrary probability).
 - (b) Compute the exact error of the approximation for the specific value $P[X \leq 1]$.

**Solution**
**(a)**
1. & Define random variable that is the Poisson approximation to $X$.
    - $Y \sim \text{Pois}(np) = \text{Pois}(1)$.
2. & Estimate error.
   $$\left|P_{X}(k) - P_{Y}(k)\right| \leq np^{2} = 10\left(\frac{1}{10}\right)^{2} = \frac{1}{10}$$

**(b)**
1. && Compute $P[X \leq 1]$, the exact value.
    $$P[X \leq 1] = \binom{10}{0}\left(\frac{1}{10}\right)^{0}\left(\frac{9}{10}\right)^{10} + \binom{10}{1}\left(\frac{1}{10}\right)^{1}\left(\frac{9}{10}\right)^{9} = 0.7361...$$
2. & Compute $P[Y \leq 1]$. 
$$P[Y \leq 1] = e^{-1}\frac{1^{0}}{0!} + e^{-1}\frac{1^{1}}{1!} = 0.7358...$$
1. & Compute difference.
$$\left|P[X \leq 1] - P[Y \leq 1]\right| \approx  0.00034$$
#### 05-06 - Constants in PDF from expectation
Suppose $X$ has PDF given by:
$$f_{X}(x) = \begin{cases} 
a + b x^{2} & 0 \leq x \leq 1 \\ 0 & \text{otherwise}
\end{cases}$$

Suppose $E[X] = \frac{7}{10}$. Find the only possible values for $a$ and $b$. Then, find $\text{Var}[X]$.

**Solution**
1. && Integrate expression for $E[X]$.
   $$E[X] = \int_{0}^{1}x\left(a+bx^{2}\right) dx= \left.\left[\frac{ax^{2}}{2} + \frac{bx^{4}}{4}\right]\right|^{1}_{0} = \frac{2a + b}{4} = \frac{7}{10}$$
2. & Integrate original PDF.
   $$\int_{0}^{1}a+bx^{2}dx = \left.\left[ax + \frac{bx^{3}}{3}\right]\right|_{0}^{1} = a + \frac{b}{3} = 1$$
3. & Solve system of equations for $a$ and $b$.
    - We have that $a = 1 - \frac{b}{3}$.
    - Plugging into the first equation yields $b = \frac{12}{5}$
    - Plugging $b = \frac{12}{5}$ into the second equation yields $a = \frac{1}{5}$.
4. & Find $E\left[X^{2}\right]$.
   $$E\left[X^{2}\right] = \dots$$

