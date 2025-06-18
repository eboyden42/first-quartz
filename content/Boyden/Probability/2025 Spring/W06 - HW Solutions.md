## Normal distribution
#### 01 - Converting to standard normal
Let $X \sim \mathcal{N}\left(\mu, \sigma^{2}\right)$. Show that $Z = \frac{X - \mu}{\sigma}$ is a standard normal random variable.

In other words, verify that the PDF of $Z$ is $\varphi_{Z}(x) = \frac{1}{\sqrt{2\pi}}e^{-x^{2}/2}$.

Hint: Use a method analogous to one in the lecture notes.

**Solution**
1. & Express $X$ in terms of $Z$.
$$Z = \frac{X - \mu}{\sigma} \implies X = \sigma Z + \mu$$
2. & Compute $\frac{dX}{dZ}$.
$$\frac{dX}{dZ} = \sigma$$
3. & State formula for finding the PDF of $Z$.
$$f_{Z}(z) = f_{X}(x)\cdot\left|\frac{dX}{dZ}\right| = f_{X}(\sigma z + \mu)\cdot\left|\frac{dX}{dZ}\right|$$
4. & State PDF for $X$.
    $$f_{X}(x) = \frac{1}{\sqrt{2\pi\sigma^{2}}}e^{-\frac{(x-\mu)^{2}}{2\sigma^{2}}} \implies f_{X}(\sigma z + \mu) = \frac{1}{\sqrt{2\pi\sigma^{2}}}e^{-\frac{(\sigma z)^{2}}{2\sigma^{2}}} = \frac{1}{\sqrt{2\pi\sigma^{2}}}e^{-\frac{z^{2}}{2}}$$
5. & Compute PDF for $Z$ using the formula.
$$f_{Z}(z) = \frac{1}{\sqrt{2\pi\sigma^{2}}}e^{-\frac{z^{2}}{2}}\cdot\sigma = \frac{1}{\sqrt{2\pi}}e^{-\frac{z^{2}}{2}}$$

#### 02 - Symmetry of $\varphi$
Show that $\Phi(-x) = 1 - \Phi(x)$ for all $x \in \mathbb{R}$.

**Solution**
1. & Recall the definition of $\Phi(x)$.
$$\Phi(x) = \int_{-\infty}^{x}\frac{1}{\sqrt{2\pi}}e^{-\frac{t^{2}}{2}}dt \implies \Phi(-x) = \int_{-\infty}^{-x}\frac{1}{\sqrt{2\pi}}e^{-\frac{t^{2}}{2}}dt$$
2. Use $u$-substitution to simplify the integral.
    - Let $u = -t \implies du = -dt$
    - Change the bounds, $t= -x \implies u = x$ and $t = -\infty \implies u = \infty$.
$$\Phi(-x) = -\int_{\infty}^{x}\frac{1}{\sqrt{2\pi}}e^{-\frac{u^{2}}{2}}du = \int_{x}^{\infty}\frac{1}{\sqrt{2\pi}}e^{-\frac{u^{2}}{2}}du$$
3. & Recall that integrating a PDF from $-\infty$ to $\infty$ yields $1$.
$$\int_{-\infty}^{x}\frac{1}{\sqrt{2\pi}}e^{-\frac{u^{2}}{2}}du + \int_{x}^{\infty}\frac{1}{\sqrt{2\pi}}e^{-\frac{u^{2}}{2}}du = 1 \implies \Phi(x) + \Phi(-x) = 1 \implies \Phi(-x) = 1 - \Phi(x)$$

#### 03 - Generalized normal - misc
Let $X$ be generalized normal variable with $\mu = 3$ and $\sigma = 2$. Using a chart of $\Phi$ values, find:

 - (a) $P[2 < X  <6]$
 - (b) $c$ such that $F_{X}(c) = 0.67$
 - (c) $E\left[X^{2}\right]$ (Hint: Use $\mu$ and $\sigma$ to avoid integration.)

**Solution**
**(a)**
1. & Write desired probability in terms of $\Phi$ values. 
$$P[2 < X < 6] = P\left[\frac{2-3}{2} < Z < \frac{6 - 3}{2}\right] = \Phi\left(\frac{3}{2}\right) - \Phi\left(-\frac{1}{2}\right) = \Phi\left(\frac{3}{2}\right) +\Phi\left(\frac{1}{2}\right)- 1$$
2. & Evaluate using a $\Phi$ value table.
$$\Phi\left(\frac{3}{2}\right) + \Phi\left(\frac{1}{2}\right) - 1 \approx 0.9332 + 0.6915 - 1 = 0.6247$$

**(b)**
1. & Use the $\Phi$ value table to find $z$ if $\Phi(z) = 0.67$
$$\Phi(z) = 0.67 \implies z \approx 0.4399$$
2. & Solve for $c$ knowing that $X = \sigma Z + \mu$.
$$c = 2(0.4399) + 3 = 3.8798$$

**(c)**
1. & Recall formula for $\text{Var}[X]$ and solve for $E\left[X^{2}\right]$
$$\text{Var}[X] = E\left[X^{2}\right] - \left(E[X]\right)^{2} \implies E\left[X^{2}\right] = \text{Var}[X] + \left(E[X]\right)^{2}$$
2. Plug in $\mu$ for $E[X]$ and $\sigma^{2}$ for $\text{Var}[X]$ and compute $E\left[X^{2}\right]$.
$$E\left[X^{2}\right] = 3^{2} + 2^{2} = 13 $$

#### 04 - Normal distribution - test scores
In a large probability theory exam, the scores are normally distributed with a mean of 75 and a standard deviation of 10.

- (a) What is the probability that a student scored between 70 and 80?
- (b) What is the lowest score a student can achieve to be in the top 5$\%$?
- (c) What score corresponds to the 25th percentile?

**Solution**
**(a)**
1. & Write desired probability in terms of $\Phi$ values.
$$P[70 \leq X \leq 80] = P\left[\frac{70-75}{10} \leq Z \leq \frac{80-75}{10}\right] = \Phi\left(\frac{1}{2}\right)-\Phi\left(-\frac{1}{2}\right) = 2\Phi\left(\frac{1}{2}\right)-1$$
2. & Use table to evaluate expression.
$$2\Phi\left(\frac{1}{2}\right) - 1 \approx 2(0.6915) - 1 = 0.383$$

**(b)**
1. & Interpret problem.
    - Since we wish to find the top $5\%$, we wish to find $z$ such that $\Phi(z) =0.95$.
2. & Use lookup table to find $z$.
$$\Phi(z) = 0.95 \implies z \approx 1.6449$$
3. & Given that $X = \sigma Z + \mu$, solve for $X$.
$$X \approx 10(1.6449) + 75 = 91.449$$

**(c)**
1. & Interpret problem.
    - Since we wish to find the 25th percentile, we wish to find $z$ such that $\Phi(z) = 0.25$.
2. & Use lookup table to find $z$.
$$\Phi(z) = 0.25 \implies z \approx -0.6745$$
3. & Given that $X = \sigma Z + \mu$, solve for $X$.
$$X \approx 10(-0.6745) + 75 = 68.255$$

#### 05 - Normal distribution - cars passing toll booth
The number of cars passing a toll booth on Wednesdays has a normal distribution $\mathcal{N}(1200, 40000)$.

- (a) What is the probability that on a randomly chosen Wednesday, more than 1,400 cars pass the toll booth?
- (b) What is the probability that between 1,000 and 1,400 cars pass the toll booth on a random Wednesday?
- (c) Suppose it is also known that at least 1200 cars passed the toll booth last Wednesday. What is the probability that at least 1300 cars passed the toll booth that day?

**Solution**
**(a)**
1. Write desired probability in terms of $\Phi$ values.
$$P[X > 1400] = 1 - P[X \leq 1400] = 1 - P\left[Z \leq \frac{1400-1200}{200}\right] = 1 - \Phi\left(1\right)$$
2. Use lookup table to compute probability.
$$1 - \Phi(1) \approx 1 - 0.8413 = 0.1587$$

**(b)**
1. Write desired probability in terms of $\Phi$ values.
$$P[1000 < X < 1400] = P\left[\frac{1000-1200}{200} < Z < \frac{1400-1200}{200}\right] = \Phi(1) - \Phi(-1) = 2\Phi(1) - 1$$
2. Use lookup table to compute probability.
$$2\Phi(1) - 1 \approx 2(0.8413) - 1 = 0.6826$$

**(c)**
1. Set up conditional probability expression.
$$P[X \geq 1300 \mid X \geq 1200] = \frac{P[X \geq 1300 \cap X \geq 1200]}{P[X \geq 1200]} = \frac{P[X \geq 1300]}{P[X \geq 1200]}$$
2. Write desired probability in terms of $\Phi$ values.
$$\frac{P[X \geq 1300]}{P[X \geq 1200]} = \frac{1 - P[X < 1300]}{1- P[X < 1200]} = \frac{1-P\left[Z < \frac{1300-1200}{200}\right]}{1-P\left[Z < \frac{1200-1200}{200}\right]} = \frac{1 - \Phi\left(\frac{1}{2}\right)}{1-\Phi(0)}$$
3. Use lookup table to compute probability.
$$\frac{1 - \Phi\left(\frac{1}{2}\right)}{1 - \Phi(0)} \approx \frac{1-0.6915}{1-0.5} = 0.617$$