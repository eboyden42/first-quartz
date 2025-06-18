## Functions of two variables, covariance, correlation

#### 01 - Covariance and correlation
The joint PMF of $X$ and $Y$ is given by the table:

| $Y \downarrow X \rightarrow$ | 0              | 1              | 2              | 3              |
| ---------------------------- | -------------- | -------------- | -------------- | -------------- |
| 1                            | $\frac{1}{15}$ | $\frac{1}{15}$ | $\frac{2}{15}$ | $\frac{1}{15}$ |
| 2                            | $\frac{1}{10}$ | $\frac{1}{10}$ | $\frac{1}{5}$  | $\frac{1}{10}$ |
| 3                            | $\frac{1}{30}$ | $\frac{1}{30}$ | 0              | $\frac{1}{10}$ |
Compute: 
(a) $E[X + Y]$         (b) $E\left[(X - Y)^{2}\right]$       (c) $\text{Cov}[X, Y]$         (d) $\rho[X, Y]$

**Solution**

**(a)**
1. & Note that the formula for $E\left[h(X, Y)\right] = \sum_{x}\sum_{y}h(x, y)p(x, y)$.
$$\begin{align*} E[X + Y] &= \sum_{x}\sum_{y}(x + y)p(x, y) \\ 
&= 1\left(\frac{1}{15}\right) + 2\left(\frac{1}{10} + \frac{1}{15}\right) + 3\left(\frac{1}{30} + \frac{2}{15} + \frac{1}{10}\right) + 4\left(\frac{1}{15} + \frac{1}{5} + \frac{1}{30}\right) + 5\left(\frac{1}{10}\right) + 6\left(\frac{1}{10}\right) \\
&= \frac{7}{2} 
\end{align*}$$

**(b)**
1. & Compute $E\left[(X - Y)^{2}\right]$ using the same formula.
$$\begin{align*}
E\left[(X - Y)^{2}\right] &= \sum_{x}\sum_{y}(x - y)^{2}p(x, y) \\
&= 1\left(\frac{1}{15} + \frac{1}{10} \frac{2}{15} + \frac{1}{10}\right) + 2\left(\frac{1}{10} + \frac{1}{30} + \frac{1}{15}\right) + 9\left(\frac{1}{30}\right) \\
&= 1.5\end{align*}$$

**(c)**
1. & Recall the formula for $\text{Cov}[X, Y]$.
$$\text{Cov}[X, Y] = E[XY] + E[X]E[Y]$$
2. & Compute $E[X]$ and $E[Y]$.
$$\begin{align*}
E[X] &= 1\left(\frac{1}{15} + \frac{1}{10} + \frac{1}{30}\right) + 2\left(\frac{2}{15} + \frac{1}{5}\right) + 3\left(\frac{1}{15} + \frac{1}{10} + \frac{1}{10}\right) \\ &= \frac{5}{3} \\
E[Y] &= 1\left(\frac{1}{15} + \frac{1}{15} + \frac{2}{15} + \frac{1}{15}\right) + 2\left(\frac{1}{10} + \frac{1}{10} + \frac{1}{5} + \frac{1}{10}\right) + 3\left(\frac{1}{30} + \frac{1}{30} + \frac{1}{10}\right) \\ &= \frac{11}{6}\end{align*}$$
3. & Compute $E[XY]$.
$$E[XY] = 1\left(\frac{1}{15}\right) + 2\left(\frac{1}{10} + \frac{2}{15}\right) + 3\left(\frac{1}{30} + \frac{1}{15}\right) + 4\left(\frac{1}{5}\right) + 6\left(\frac{1}{10}\right) + 9\left(\frac{1}{10}\right) = \frac{47}{15}$$
4. & Compute $\text{Cov}[X, Y]$.
$$\text{Cov}[X, Y] = \frac{47}{15} - \frac{5}{3}\cdot\frac{11}{6} = \frac{7}{90}$$

**(d)**
1. && Recall the formula for $\rho[X, Y]$.
$$\rho[X, Y] = \frac{\text{Cov}[X, Y]}{\sqrt{\text{Var}[X]\text{Var}[Y]}}$$
2. & Compute $E\left[X^{2}\right]$ and $E\left[Y^{2}\right]$.
$$\begin{align*}
E\left[X^{2}\right] &= 1\left(\frac{1}{15} + \frac{1}{10} + \frac{1}{30}\right) + 4\left(\frac{2}{15} + \frac{1}{5}\right) + 9\left(\frac{1}{15} + \frac{1}{10} + \frac{1}{10}\right) \\ &= \frac{59}{15} \\
E\left[Y^{2}\right] &= 1\left(\frac{1}{15} + \frac{1}{15} + \frac{2}{15} + \frac{1}{15}\right) + 4\left(\frac{1}{10} + \frac{1}{10} + \frac{1}{5} + \frac{1}{10}\right) + 9\left(\frac{1}{30} + \frac{1}{30} + \frac{1}{10}\right) \\ &= \frac{23}{6}\end{align*}$$
3. & Compute $\text{Var}[X]$ and $\text{Var}[Y]$.
$$\begin{align*}
\text{Var}[X] &= E\left[X^{2}\right] - \left(E[X]\right)^{2} = \frac{59}{15} - \left(\frac{5}{3}\right)^{2} = \frac{52}{45} \\ \text{Var}[Y] &= E\left[Y^{2}\right] - \left(E[Y]\right)^{2} = \frac{23}{6} - \left(\frac{11}{6}\right)^{2} = \frac{17}{36}\end{align*} $$
4. & Compute $\rho[X, Y]$
$$\rho[X, Y] = \frac{\frac{7}{90}}{\sqrt{\frac{52}{45} \cdot \frac{17}{36}} } \approx 0.1053$$

#### 02 - Covariance etc. from independent densities
Suppose $X$ and $Y$ are independent variables with the following densities:
$$f_{X}(x) = \begin{cases} \frac{1}{3}e^{-\frac{x}{3}} & x > 0 \\ 0 & \text{otherwise} \end{cases} \qquad f_{Y}(y) = \begin{cases} \frac{1}{8}e^{-\frac{y}{8}} & y > 0 \\ 0 & \text{otherwise} \end{cases} $$

Compute:
(a) $P[X > Y]$       (b) $E[XY]$          (c) $\text{Cov}[X, Y]$          (d) $\rho[X, Y]$

**Solution**

**(a)** 
1. && Compute $P[X > Y]$
$$\begin{align*} P[X > Y] &= \int_{0}^{\infty}\int_{y}^{\infty}f_{X}(x)f_{Y}(y)dxdy \\
&= \frac{1}{24}\int_{0}^{\infty}\int_{y}^{\infty}e^{-\frac{x}{3}}e^{-\frac{y}{8}}dxdy \\
&= \frac{1}{24}\int_{0}^{\infty}e^{-\frac{y}{8}}\lim_{b \to \infty}\left.\left[-3e^{-\frac{x}{3}}\right]\right|^{b}_{y}dy \\
&= \frac{1}{8} \int_{0}^{\infty}e^{-\frac{y}{8}}e^{-\frac{y}{3}}dy \\
&= \frac{1}{8} \int_{0}^{\infty}e^{-\frac{11y}{24}}dy \\
&= \frac{3}{11}\lim_{b \to \infty}\left.\left[-e^{-\frac{11}{24}y}\right]\right|^{b}_{0} = \frac{3}{11}
\end{align*} $$

**(b)**
1. & Compute $E[XY]$.
    - Note that $X \sim \text{Exp}\left(\frac{1}{3}\right)$ and $Y \sim \text{Exp}\left(\frac{1}{8}\right)$.
$$\begin{align*}
E[XY] &= E[X] \cdot E[Y] = \frac{1}{\frac{1}{3}} \cdot \frac{1}{\frac{1}{8}} = 24
\end{align*}$$

**(c)**
1. & Compute $\text{Cov}[X, Y]$.
    - Since $X$ and $Y$ are known to be independent, $\text{Cov}[X, Y] = 0$.

**(d)**
4. & Compute $\rho[X, Y]$
    - Since $\text{Cov}[X, Y] = 0$, $\rho[X, Y] = 0$. 

#### 03 - Plumber completion time
A plumber is coming to fix the sink. He will arrive between 2:00 and 4:00 with uniform distribution in that range.

Sink fixes take an average of 45 minutes with completion times following an exponential distribution.

When do you expect the plumber to finish the job?

What is the variance for the finish time?

**Solution**
1. & Define random variables to describe the problem.
    - Let $X \sim \mathcal{U}[0, 120]$ to represent the arrival time of the plumber.
    - Let $Y \sim \text{Exp}\left(\frac{1}{45}\right)$ represent the completion time of the sink fix.
2. && Compute $E[X + Y]$
    - This represents the expected time the plumber finishes the job. 
      $$E[X + Y] = E[X] + E[Y] = 60 + 45 = 105 $$
    - Thus, we expect the plumber to finish at $3:45$.
3. & Compute the variance of the finish time. 
   $$\text{Var}[X + Y] = \text{Var}[X] + \text{Var}[Y] + 2\text{Cov}[X, Y] = \frac{120^{2}}{12} + \frac{1}{\left(\frac{1}{45}\right)^{2}} = 3225 \text{ min}^{2}$$

#### 04 - Correlation between overlapping coin flip sequences
Suppose a coin is flipped 30 times.

Let $X$ count the number of heads among the first 20 flips, and $Y$ count the heads in the last 20.

Find $\rho[X, Y]$.

**Solution**

1. & Define random variables for partitioning the 30 flips into groups of 10.
    - Let $A$ be the number of heads in the first 10 flips.
    - Let $B$ be the number of heads in the middle 10 flips.
    - Let $C$ be the number of heads in the last 10 flips.
    - Clearly, $A, B, C \sim \text{Bin}\left(10, \frac{1}{2}\right)$ and are independent.
    - Note that $X = A + B$ and $Y = B + C$.
2. & Compute $E[X]$ and $E[Y]$ 
   $$\begin{align*} E[X] &= E[A + B] = E[A] + E[B] = 5 + 5 = 10 \\E[Y] &= E[B + C] = E[B] + E[C] = 5 +5 = 10\end{align*}$$
3. && Compute $E[XY]$
    $$\begin{align*} E[XY] &= E\left[(A + B)(B +C)\right] \\
    &= E[AB] + E[AC] + E[BC] + E\left[B^{2}\right] \\
    &= E[A]E[B] + E[A]E[C] + E[B]E[C] + E\left[B^{2}\right] \\
    &= 75 + E\left[B^{2}\right]
\end{align*}$$
4. && Compute $E\left[B^{2}\right]$
    - Since $E[B] = 5$ and $\text{Var}[B] = \frac{5}{2}$, $E\left[B^{2}\right] = 5^{2} + \frac{5}{2} =  \frac{55}{2}$.
    - Thus, $E[XY] = \frac{205}{2}$
5. & Compute $\text{Cov}[X, Y]$
$$\text{Cov}[X, Y] = E[XY] - E[X]E[Y] = \frac{205}{2} - 10\cdot 10 = \frac{5}{2}$$
6. & Compute $\rho[X, Y]$.
$$\rho[X, Y] = \frac{\text{Cov}[X, Y]}{\sqrt{\text{Var}[X]\text{Var}[Y]}} = \frac{\frac{5}{2}}{\sqrt{5\cdot 5}} = \frac{1}{2}$$

#### 05 - Variance puzzle: indicators
Suppose $A$ and $B$ are events satisfying
$$P[A] = 0.5, \qquad P[B] = 0.2, \qquad P[AB] = 0.1$$

Let $X$ count the number of these events that occurs. (So, the possible values are $X = 0,1, 2.$)

Find $\text{Var}[X]$.


1. & Define indicator variables $X_{A}$ and $X_{B}$
    - Let $X_{A}$ denote whether $A$ occurs
    - Let $X_{B}$ denote whether $B$ occurs.
    - Note that they are independent since $A$ and $B$ are independent ($P[AB] = P[A]P[B]$).
    - Let $X = X_{A} + X_{B}$.
2. & Compute $\text{Var}[X]$.
    $$\begin{align*}
    \text{Var}[X] &= \text{Var}[X_{A} + X_{B}] \\
    &= \text{Var}[X_{A}] + \text{Var}[X_{B}] \\
    &= \left(E\left[X_{A}^{2}\right] - \left(E[X_{A}]\right)^{2}\right) +\left(E\left[X_{B}^{2}\right] - \left(E[X_{B}]\right)^{2}\right) \\
    &= \left(0.5 - 0.5^{2}\right) + \left(0.2-0.2^{2}\right) \\
    &= 0.25 + 0.16 = 0.41 \end{align*}$$

#### 06 - When $\rho[X, Y] = 1$
Suppose $\rho[X, Y] = 1$ for two random variables $X$ and $Y$.

Show that $Y = aX + b$, where $a = \frac{\sigma_{Y}}{\sigma_{X}}$ .

Find the formula for $b$.

**Solution**
1. & Recall the formula for $\rho[X, Y]$. 
   $$\rho[X, Y] = \frac{\text{Cov}[X, Y]}{\sigma_{X}\sigma_{Y}}$$
    - Therefore, if $\rho = 1$, then $\text{Cov}[X, Y] = \sigma_{X}\sigma_{Y}$, and note that $\rho[X, Y] = \text{Cov}\left[\widetilde{X}, \widetilde{Y}\right] = 1$.
2. && Compute $E\left[\left(\widetilde{X} - \widetilde{Y}\right)^{2}\right]$ .
$$E\left[\left(\widetilde{X} - \widetilde{Y}\right)^{2}\right] = E\left[\widetilde{X}^{2}\right] - 2E\left[\widetilde{X}\widetilde{Y}\right] + E\left[\widetilde{Y}^{2}\right] = 1 - 2 + 1 = 0 $$
    - Thus, $\frac{X - \mu_{X}}{\sigma_{X}} = \frac{Y - \mu_{Y}}{\sigma_{Y}}$.
3. & Isolate $Y$ in the above equation. 
   $$Y = \frac{\sigma_{Y}}{\sigma_{X}}X - \frac{\sigma_{Y}}{\sigma_{X}}\mu_{X} + \mu_{Y}$$
    - Thus, $Y = aX + b$, where $b = -\frac{\sigma_{Y}}{\sigma_{X}} + \mu_{Y}$.

#### 07 - Further practice: Covariance etc. from joint density
Suppose $X$ and $Y$ are random variables with the following joint density:
$$f_{X, Y}(x, y) = \begin{cases}
\frac{3}{2}\left(x^{2} + y^{2}\right) & x, y \in [0, 1] \\ 0 & \text{otherwise}
\end{cases}$$

Compute:
(a) $E[X]$        (b) $E[Y]$        (c) $E[XY]$        (d) $\text{Var}[X]$
(e) $\text{Var}[Y]$      (f) $\text{Cov}[X, Y]$        (g) $\rho[X, Y]$        (h) Are $X$ and $Y$ independent?

**Solution**

**(a)**
1. & Compute $E[X]$ by integrating the joint PDF.
$$\begin{align*} E[X] &= \frac{3}{2}\int_{0}^{1}\int_{0}^{1}x\left(x^{2} + y^{2}\right)dydx  \\ &= \frac{3}{2}\int_{0}^{1}\int_{0}^{1}x^{3} + xy^{2}dydx \\
&= \frac{3}{2}\int_{0}^{1}\left.\left[x^{3}y + \frac{xy^{3}}{3}\right]\right|_{0}^{1}dx \\
&= \frac{3}{2}\int_{0}^{1}x^{3} + \frac{x}{3} dx \\
&= \frac{3}{2} \left.\left[\frac{x^{4}}{4} + \frac{x^{2}}{6}\right]\right|_{0}^{1} \\
&= \frac{3}{2}\left[\frac{1}{4} + \frac{1}{6}\right] = \frac{5}{8}\end{align*} $$

**(b)**
1. & Compute $E[Y]$.
$$\begin{align*} E[Y] &= E[X] = \frac{5}{8}
\end{align*} $$

**(c)**
1. & Compute $E[XY]$ 
   $$\begin{align*}
E[XY] &= \frac{3}{2}\int_{0}^{1}\int_{0}^{1}xy\left(x^{2} + y^{2}\right)dydx \\
&= \frac{3}{2}\int_{0}^{1}\int_{0}^{1}x^{3}y + xy^{3}dydx \\
&= \frac{3}{2}\int_{0}^{1}\left.\left[\frac{x^{3}y^{2}}{2} + \frac{xy^{4}}{4}\right]\right|_{0}^{1}dx \\
&= \frac{3}{2}\int_{0}^{1}\frac{x^{3}}{2} + \frac{x}{4}dx \\
&= \frac{3}{2}\left.\left[\frac{x^{4}}{8} + \frac{x^{2}}{8}\right]\right|_{0}^{1} \\
&= \frac{3}{2}\left[\frac{1}{8} + \frac{1}{8}\right] = \frac{3}{8}
\end{align*}$$

**(d)**
1. & Compute $E\left[X^{2}\right]$
   $$\begin{align*} E\left[X^{2}\right] &= \frac{3}{2}\int_{0}^{1}\int_{0}^{1}x^{2}\left(x^{2} + y^{2}\right)dydx \\&= \frac{3}{2}\int_{0}^{1}\left.\left[x^{4}y + \frac{x^{2}y^{3}}{3}\right]\right|_{0}^{1}dx \\&= \frac{3}{2}\int_{0}^{1}x^{4} +\frac{x^{2}}{3}dx \\&= \frac{3}{2}\left.\left[\frac{x^{5}}{5} + \frac{x^{3}}{9}\right]\right|_{0}^{1} \\&= \frac{3}{2}\left[\frac{1}{5} +\frac{1}{9}\right] = \frac{7}{15}\end{align*}$$

2. & Compute $\text{Var}[X]$.
$$\text{Var}[X] + E\left[X^{2}\right] - \left(E[X]\right)^{2} = \frac{7}{15} - \left(\frac{5}{8}\right)^{2} = \frac{73}{960}$$

**(e)**
1. & Compute $E\left[X^{2}\right]$
$$\begin{align*}
E\left[Y^{2}\right] = E\left[X^{2}\right] = \frac{7}{15}
\end{align*}$$
2. & Compute $\text{Var}[Y]$.
$$\text{Var}[Y] = \text{Var}[X] = \frac{73}{960}$$

**(f)**
1. & Compute $\text{Cov}[X, Y]$
$$\text{Cov}[X, Y] = E[XY] - E[X][EY] = \frac{3}{8} - \frac{25}{64} =-\frac{1}{64}$$

**(g)**
1. & Compute $\rho[X, Y]$.
$$\rho[X, Y] = \frac{\text{Cov}[X, Y]}{\sqrt{\text{Var}[X]\text{Var}[Y]}} = \frac{-\frac{1}{64}}{\sqrt{\left(\frac{73}{960}\right)^{2}}} = -\frac{15}{73}$$

**(h)**
1. & Determine independence.
    - Since $\text{Cov}[X, Y] \neq 0$, we can conclude that $X$ and $Y$ are not independent.