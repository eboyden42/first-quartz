#### 02 - Normal approximation: Heads v. tails
Flip a coin 10,000 times. Let $H$ measure the number of heads, and $T$ measure the number of tails. Estimate the probability that $H$ and $T$ are within 100 of each other.
Hint: Write an inequality for the condition, then sub a formula for $T$ in terms of $H$.

**Solution**

Let $H$ and $T$ be the number of heads and tails respectively. Then we have the following two conditions: $$\begin{align*}H+T&=10000\\|H-T|&\le100\end{align*}$$
Thus, $T=10000-H\implies$ $|H-(10000-H)\le100\implies$ $|2H-10000|\le100\implies-100\le2H-10000\le100\implies4950\le H\le5050$.
Let $H_i$ be the event that the $i$-th flip is a head. Then $H_i\sim\text{Ber}(\frac{1}{2})$ for each $i$ and $H=\sum\limits_{i=1}^{10000}H_i$. Thus, by CLT, $H\sim\mathcal{N}(10000\cdot0.5,10000\cdot0.5\cdot0.5)=\mathcal{N}(5000,2500)$. 
By the normal approximation, using the continuity correction, we have: $$\begin{align*}P(4950\le H\le5050)&\approx P(4949.5<H<5050.5)\\& =\Phi\left(\frac{5050.5-5000}{50}\right)-\Phi\left(\frac{4949.5-5000}{50}\right)\\&=\Phi(1.01)-\Phi(-1.01)\\&=2\Phi(1.01)-1\\&\approx2(0.8438)-1=0.687 \end{align*}$$

#### 03 - Deviation estimation - Exponential
Let $X\sim\mathrm{Exp}(\lambda)$ with $\lambda=0.5$.
(a) Compute the Markov bound on $P[X>5]$.
(b) Compute the Chebyshev bound on $P[X>5]$. 
(c) Find the exact value of $P[X>5]$ and compare with yours answers in (a) and (b).

**Solution**

(a)
$\mathbb{E}[X]=\mu_0=\frac{1}{\lambda}=2$.
By Markov's Inequality, $P[X\ge5]=P[X>5]\le\frac{\mu_0}{x}=\frac{2}{5}$.
(b)
$\sigma^2=\frac{1}{\lambda^2}=4$.
Chebyshev Inequality: $P[X>x]\le P[|X-\mu_0|\ge c]\le\frac{\sigma^2}{c^2}$ where $c$ such that $\mu_0+c=x$.
Thus, $P[X>5]\le P[|X-2|\ge3]\le \frac{4}{9}$.
(c)
Since $X$ exponential, $$\begin{align*}P[X>5]&=\int_{5}^\infty\frac{1}{2}e^{-\frac{1}{2}x}\;dx\\&=\lim\limits_{a\to\infty}\int_5^a\frac{1}{2}e^{-\frac{1}{2}x}\;dx\\&=\lim\limits_{a\to\infty}\left[e^{-\frac{1}{2}x}\right]_5^a\\&=e^{-2.5}\approx0.082\end{align*}$$
Clearly, the actual answer is quite small compared to our previously found upper bounds.

#### 05 - Deviation estimation - Factory production
Suppose a factory produces an average of $50$ items per week.
(a) How likely is it that more than 75 items are produced this week? (Find an upper bound.) 
(b) Suppose the variance is known to be 25 items. Now what can you say about (a)? (Hint: Monotonicity.) 
(c) What do you know about the probability that the number of items produced differs from the average by at most 10?

**Solution**

(a)
Let $X$ be the number of items produced in a week. We know $\mu_0=50$. By Markov's Inequality, $P[X>75]\le\frac{50}{75}$
(b)
By the Chebyshev Inequality, $P[X>75]\le P[|X-50|>25]=\frac{1}{25}$ 
(c)
Similarly, by the Chebyshev Inequality, $P[|X-50|\le10]=1-P[|X-50|\ge10]\ge1-\frac{25}{100}=\frac{3}{4}$. Our inequality switches to $\ge$ since the Chebyshev Inequality gives an upper bound for $P[|X-50|\ge10]$, and we have a negative sign in front of the concerned quantity.

#### 07 - Testing paperclips - Likelihood of error
A factory assembly line machine is cutting paperclips to length before folding. Each paperclip is supposed to be $3\,\mathrm{in}$ long. The length of paperclips is approximately normally distributed with standard deviation $0.2\,\mathrm{in}$.
(a) Design a significance test with $\alpha=0.02$ that is based on the average of 5 measurements (sample mean). What is the rejection region? What is the probability of Type I error? 
(b) What is the probability of  Type II error, given that the average paperclip length on the machine is actually $3.1\,\mathrm{in}$?

**Solution**

(a)
Null Hypothesis $H_0$: "The expected paper clip length is not $3$ inches"
Alternative Hypothesis $H_1$: "The expected paper clip length is $3$ inches"
Let $X$ be the length of the paperclips for our sample. For the sample, assume $\mu=3$ and $\text{Var}[X]=\frac{\sigma^{2}}{n}$ $=\frac{0.04}{5}=0.008$. Thus, $X\sim\mathcal{N}(3,0.008)$.
By symmetry, since we want a two-tailed test, it suffices to find the rejection region at one tail (we can then extrapolate for the second tail). We then have, for $c$ the lower rejection region: $$\begin{align*}P[X\le c]&=0.01 &&\text{since we want the upper bound}\\\Phi\left(\frac{c-3}{\sqrt{0.008}}\right)&=0.01\end{align*}$$
Solving for $c$, we have $c=2.792$. By symmetry, the lower bound for our upper rejection region is $d=3+(3-2.792)=3.208$. Thus, our rejection region is $X\le2.792,X\ge3.208$
By definition, $P(\text{Type-}1\text{ error})=\alpha=0.02$.
(b)
A Type-II error occurs when the Null Hypothesis is incorrectly accepted, when it is actually false.
Thus, $P[\text{Type-II error}]=P[2.792\le X\le3.208|\mu=3.1]$. Thus, now let $X\sim\mathcal{N}(3.1,0.008)$. We then have: $$\begin{align*}P[2.792\le X\le3.208]&=\Phi\left(\frac{3.208-3.1}{\sqrt{0.008}}\right)-\Phi\left(\frac{2.792-3.1}{\sqrt{0.008}}\right)\\&\approx0.000291+0.888\\&=0.8883\end{align*}$$
