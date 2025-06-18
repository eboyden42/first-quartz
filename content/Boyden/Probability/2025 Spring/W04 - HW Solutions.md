## Bernoulli Process
#### 04-02 - PMF and CDF: number of heads in five flips
Let $X$ count the number of heads resulting from five flips of a coin.

Write complete formulas (using cases) for the PMF and CDF.

**Solution**
1. & Identify distribution.
    - We have that $X \sim \text{Bin}(5, 0.5)$, since there are $5$ trials and $p = 0.5$.
2. && Use binomial distribution formula to get PMF.
   $$P(X = k) = \begin{cases}\binom{5}{k}(0.5)^{k}(0.5)^{5-k} & k \in \{0, \dots, 5\}  \\0 & \text{otherwise}\end{cases}$$
3. & Find CDF.
    - Since $F(x) = P(X \leq x)$, we have
    $$F(x) = \sum_{k = 0}^{\lfloor x\rfloor}\binom{5}{k}(0.5)^{k}(0.5)^{5-k}$$
4. & Write out explicit values of CDF.
   $$F(x) = \begin{cases} 0 & x < 0 \\\frac{1}{32} & 0 \leq x < 1 \\\frac{3}{16} & 1 \leq x < 2 \\\frac{1}{2} & 2 \leq x < 3 \\\frac{13}{16} & 3 \leq x < 4 \\\frac{21}{32} & 4 \leq x < 5 \\1 & 5 \leq x\end{cases}$$

#### 04-03 - Rolling until a six
A fair die is rolled until a six comes up.

What are the odds that it takes at least 10 rolls? Use a geometric random variable.

**Solution**
1. & Define random variables.
    - Let $X \sim \text{Geom}\left(\frac{1}{6}\right)$.
    - We wish to find $P(X \geq 10)$.
    - For all $X = k$, $k \geq 10$, the first $k - 1$ trials result in failure, and the $k^{\text{th}}$ trial is a success.

2. && Compute probability.
    - Note that the summation is simplified using the formula for a geometric series.
      $$\begin{align*}\\ P(X \geq 10) &= \sum_{k = 10}^{\infty}\frac{1}{6}\left(1 - \frac{1}{6}\right)^{k - 1} \\ &= \frac{1}{6}\sum_{k =10}^{\infty}\left(\frac{5}{6}\right)^{k - 1} \\\\ &= \frac{1}{6}\left(\frac{\left(\frac{5}{6}\right)^{9}}{1 - \frac{5}{6}}\right) \\ &= \left(\frac{5}{6}\right)^{9} \approx0.1938\end{align*} $$

#### 04-04 - Intersection accidents
Suppose that the odds of an accident occurring on any given day at the intersection of Ivy and Emmett is 0.05.

What are the odds of the first accident occurring after day 4 and by day 10?

(You have calculated the answer before. This time, rework the problem in terms of an appropriate distribution type.)

**Solution**
1. & Define random variables.
    - Let $X \sim \text{Geom}(0.05)$.
    - We wish to find $P(5 \leq X \leq 10)$.
2. & Compute $P(5 \leq X \leq 10)$ using the formula for a geometric distribution.
   $$P(5 \leq X \leq 10) = \sum_{k = 5}^{10}0.05(0.95)^{k - 1} \approx 0.2158$$

#### 04-05 - Components of a car
A very strange car with $n$ components will drive if at least half of its components work. Each component will work with the same probability $p$, independently of the others.

For what values of $p$ is a car with $n = 3$ more likely to drive than a car with $n = 5$?

(Start by defining a random variable that counts the number of working components.)

**Solution**
1. & Define random variables.
    - Let $X_{3} \sim \text{Bin}(3, p)$ represent the car with three components.
    - Let $X_{5} \sim \text{Bin}(5, p)$ represent the car with five components.
2. && Find probabilities that both cars work.
    - For the three-component car, we want $P(X_{3} \geq 2)$, so
    $$P(X_{3} \geq 2) = \sum_{k = 2}^{3}\binom{3}{k}p^{k}(1-p)^{3-k}= 3p^2-2p^3$$
    - For the five-component car, we want $P(X_{5} \geq 3)$, so
      $$P(X_{5}\geq 3) = \sum_{k = 3}^{5}\binom{5}{k}p^{k}(1-p)^{5-k}= 10p^{3}-15p^4+6p^{5}$$
3. && Find when $P(X_{3} \geq 2) > P(X_{5} \geq 3)$.
    - Solve the inequality for $p$.
    $$\begin{align*}3p^{2}-2p^{3} &> 10p^{3}-15p^4+6p^5\\6p^5-15p^4+12p^3-3p^2&< 0 \\3p^2(2p^3-5p^2+4p-1)&< 0\\3p^2(p-1)^2(2p-1)&< 0 \implies 0<p<\frac{1}{2}\end{align*}$$
#### 04-06 - Geometric distribution is memoryless
Suppose that $X \sim \text{Geom}(p)$.

Derive this equation:
$$P[X = n + k \mid X > n] = P[X = k]$$
Interpret the equation.

**Solution**
1. & Set up conditional probability formula.
   $$P[X = n + k \mid X > n] = \frac{P[X = n + k \cap X > n]}{P[X > n]} = \frac{P[X = n + k]}{P[X > n]}$$
2. && Find formulas for numerator and denominator.
    - $P[X = n + k] = p(1-p)^{n + k -1}$
    - $P[X >n] = \sum_{x = n + 1}^{\infty}(1-p)^{x-1}p = \frac{p(1-p)^{n}}{1 - (1 - p)} = (1-p)^{n}$
3. & Plug in values into initial formula
   $$\begin{align*}\\ P[X =n+k \mid X > n] &= \frac{p(1-p)^{n + k - 1}}{(1-p)^{n}} = p(1-p)^{k-1} = P[X = k] \end{align*}$$

#### 04-07 - Binomial ratios
Suppose $X \sim \text{Bin}(n, p)$.
- Find the value of $k$ that maximizes $P_{X}(k)$. Do this by studying the successive ratios $P_{X}(k)/P_{X}(k - 1)$.
- Use these ratios to compute $P[X \leq 4]$ as a sum of 5 terms without using factorials. Do this by computing $P_{X}(0)$ directly, and then writing a recursive algorithm that determines $P_{X}(k)$ in terms of $P_{X}(k-1)$.

**Solution**
1. & Find formula for ratio $P_{X}(k)/P_{X}(k - 1)$.
    $$\begin{align*}\frac{P_{X}(k)}{P_{X}(k-1)} &= \frac{\binom{n}{k}p^{k}(1-p)^{n-k}}{\binom{n}{k-1}p^{k-1}(1-p)^{n - (k-1)}} \\ &= \frac{\frac{n!}{k!(n-k)!}p}{\frac{n!}{(k-1)!(n-k+1)!}(1-p)} \\ &= \frac{(n-k+1)p}{k(1-p)} \end{align*}$$
2. && Interpret ratio.
     - We want $P_{X}(k) \geq P_{X}(k-1)$, so $(n - k + 1)p \geq k(1-p)$.
     - Solving for $k$, we get $k \leq (n + 1)p$.
     - Since $k$ is an integer, the $P_{X}(k)$ is maximized when $k = \lfloor (n+1)p \rfloor$ .
3. & Compute $P_{X}(0)$ directly.
    - Based on the figure, $n = 10$ and $p = \frac{1}{2}$.
      $$P_{X}(0) = \binom{n}{0}p^{0}(1-p)^{n} = (1-p)^{n} = \left(\frac{1}{2}\right)^{10}$$
4. & Use ratio to solve for successive terms.
   $$\begin{align*}\frac{P_{X}(1)}{P_{X}(0)} &= \frac{np}{(1-p)} \\ P_{X}(1) &= \frac{5}{\frac{1}{2}}\left(\frac{1}{2}\right)^{10} &= 5\left(\frac{1}{2}\right)^{9} \\\\ P_{X}(2) &= \frac{5}{\frac{1}{2}}\cdot5\left(\frac{1}{2}\right)^{9} &= 25\left(\frac{1}{2}\right)^{8} \\ \\ P_{X}(3) &= \frac{5}{\frac{1}{2}}\cdot25\left(\frac{1}{2}\right)^{8} &= 125\left(\frac{1}{2}\right)^{7} \\ \\ P_{X}(4) &= \frac{5}{\frac{1}{2}}\cdot125\left(\frac{1}{2}\right)^{7} &= 625\left(\frac{1}{2}\right)^{6}\end{align*}$$
2. & Add up probabilities.
   $$P[X \leq 4] = \sum_{k = 0}^{4}P_{X}(k) \approx 0.3770$$

#### 04-08 - Prize on the Mall
A booth on the Mall is running a secret prize game, in which the $5^{\text{th}}$ passerby wearing a hat wins $\$1,000$.

Passersby wear hats independently of each other and with probability 20$\%$.

Let $N$ be a random variable counting how many passersby pass by before a winner is found.

- (a) What is the name of the distribution of $N$? What are the parameters?
- (b) What is the probability that the $10^{\text{th}}$ passerby wins the prize?
- (c) What is the probability that at least 7 passersby are needed before a winner is found?

**Solution**
**(a)**
1. & Identify the distribution.
    - $N$ follows a negative binomial distribution with parameters $p = 0.2$ and $\ell = 5$. 

**(b)**
1. & Compute  $P_{N}(10)$.
   $$P_{N}(10) = \binom{k-1}{\ell-1}(1-p)^{k-\ell}p^{\ell} = \binom{9}{4}(0.8)^{5}(0.2)^{5} \approx 0.0132$$

**(c)**
1. & Compute $P[N \geq 7]$.
    - We know that the minimum number of passersby before a winner is declared is $5$.
    - Therefore, $P[N \geq 7] = 1- P_{N}(5) - P_{N}(6)$.
      $$P[N \geq 7] = 1- \binom{4}{4}(0.8)^{0}(0.2)^{5}-\binom{5}{4}(0.8)^{1}(0.2)^{5} = 0.9984$$

## Expectation and variance
#### 04-09 - Students and buses expect different crowding.
Bus One has $10$ students, Bus Two has $20$, Bus Three has $30$, and Bus Four has $40$.

 - Let $X$ measure the number of students on a given random student's bus.
 - Let $Y$ measure the number of students on a given random driver's bus.

Compute $E[X]$ and $E[Y]$. Are they different? Why or why not?

**Solution**
1. && Compute $E[X]$.
    - There are $100$ total students.
    - Let $P(B_{k})$ be the probability that Bus $k$ is selected, where $k \in \{1, 2, 3, 4\}$.
    - Note that $P(B_{k}) = \frac{k}{10}$.
      $$E[X] = \sum_{k =1}^{4}P(B_{k})(10k) = \sum_{k = 1}^{4}k^{2}= 30$$
2. && Compute $E[Y]$.
    - Let $P(B_{k})$ be the probability that Bus $k$ is selected.
    - Since it's based off the drivers, $P(B_{k}) = \frac{1}{4}$ for all $k$.
      $$E[Y] = \sum_{k = 1}^{4}P(B_{k})10k = \frac{5}{2}\sum_{k=1}^{4}k = 25$$
3. & Interpret solution.
    - $E[Y] \neq E[X]$, because the probability that bus $k$ was selected in both scenarios varied.

#### 04-10 - Insurance expected payout
A car insurance analytics team estimates that the cost of repairs per accident is uniformly distributed between $\$100$ and $\$1500$ . The manager wants to offer customers a policy that has a $\$500$ deductible and covers all costs above the deductible.

How much is the expected payout per accident?

**Solution**
1. && Find PDF of $X$.
    - If $X \leq 500$, insurance covers $\$0$.
    - If $X > 500$, then the insurance covers $X - 500$ dollars.
      $$f_{X}(x) = \begin{cases} 0 & x \leq 500 \\ x - 500 & 500 < x \leq 1500 \end{cases}.$$
2. & Integrate to find $E[X]$.
    - Since the cost of repairs in uniformly distributed, we have $p_(x) = \frac{1}{1400}$, $100 \leq x \leq 1500$.
      $$E[X] = \int_{-\infty}^{\infty}p(x)f_{X}(x) = \frac{1}{1400}\int_{500}^{1500}(x-500)dx =  = \frac{1}{1400}\left.\left[\frac{x^{2}}{2}-500x\right]\right|_{500}^{1500}\approx \$357.14 $$

#### 04-11 - Expectation, variance of geometric variable
Derive formulas for $E[X]$ and $\text{Var}(X)$ given $X \sim \text{Geom}(p)$.

**Solution**
1. && State the pmf of a geometric random variable.
    $$P_{X}(k) = (1-p)^{k-1}p$$
2. && Use formula for expectation to find $E[X]$.
   $$\begin{align*}E[X] &= \sum_{k = 1}^{\infty}k(1-p)^{k-1}p \\ &= p\sum_{k = 1}^{\infty}k(1-p)^{k-1}  \end{align*}$$
3. &&& Apply hint.
    - We have that $\frac{1}{1-x} = \sum_{k = 0}^{\infty}x^{k}$.
    - Differentiating both sides yields $\frac{1}{(1-x)^{2}} = \sum_{k = 1}^{\infty}kx^{k - 1}$.
    - Note that here, $x = (1-p)$, so
    $$E[X] = p\frac{1}{(1-(1-p))^{2}} = \frac{p}{p^{2}} = \frac{1}{p}$$
2. && Find expression $E[X^{2}]$, and note that $\text{Var}[X] = E\left[X^{2}\right] - \left(E[X]\right)^{2}$.
    - Applying the hint, we have $E[X^{2}] = E[X(X-1) + X]$.
    - Using the linearity of expectation, we can write this as $E[X(X-1)] + E[X]$.
3. &&& Find $E[X(X-1)]$ and $E[X^{2}]$
    - First, note that the second derivative of $\frac{1}{1-x}$ is $\frac{2}{(1-x)^{3}} = \sum_{k = 2}^{\infty}k(k-1)x^{k-2}$.
    $$E[X(X-1)] = \sum_{k = 1}^{\infty}k(k-1)(1-p)^{k-1}p = \frac{2-p}{p^{2}}-\frac{1}{p}$$
    - Thus, $E[X^{2}] = \frac{2-p}{p^{2}} - \frac{1}{p} + \frac{1}{p} = \frac{2-p}{p^{2}}$.
4. & Find $\text{Var}[X]$.
   $$\text{Var}[X] = \frac{2-p}{p^{2}} - \frac{1}{p^{2}} = \frac{1-p}{p^{2}} $$