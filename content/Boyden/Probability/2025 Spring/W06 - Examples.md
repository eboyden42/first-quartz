## Normal distribution

#### Basic generalized normal calculation
Suppose $X\sim \mathcal{N}(-3,4)$. Find $P[X\geq -1.7]$.

**Solution**
First write $X$ as a linear transformation of $Z$: $$X\sim 2Z-3$$
Then: $$X\geq -1.7 \quad\iff\quad Z\geq 0.65$$

Look in a table to find that $\Phi(0.65)\approx 0.74$ and therefore: $$P[Z\geq 0.65]\quad ⨠⨠ \quad 1-P[Z\leq 0.65]\quad ⨠⨠ \quad \approx 1-0.74\quad=\quad0.26$$

#### Gaussian: interval of $2/3$
Find the number $a$ such that $P\big[-a\leq Z\leq +a\big]=2/3$.

**Solution**
First convert the question: $$\begin{align*}P\big[-a\leq Z\leq +a\big] \quad &⨠⨠ \quad F_Z(a)-F_Z(-a) \\\\&⨠⨠ \quad \Phi(a)-\Phi(-a)\\\\&⨠⨠ \quad 2\Phi(a) - 1\end{align*}$$
Solve for $a$ so that this value is $2/3$: $$2\Phi(a)-1=2/3\quad ⨠⨠ \quad \Phi(a)=5/6\quad ⨠⨠ \quad a=\Phi^{-1}(5/6)$$

Use a $\Phi$ table to conclude $a\approx 0.97$.


#### Heights of American males
Suppose that the height of an American male in inches follows the normal distribution $\mathcal{N}(71,6.25)$.
- (a) What percent of American males are over 6 feet, 2 inches tall?
- (b) What percent of those over 6 feet tall are also over 6 feet, 5 inches tall?
  
**Solution**
(a)
Let $H$ be a random variable measuring the height of American males in inches, so $H\sim \mathcal{N}(71,2.5^2)$. Thus $H\sim 2.5Z + 71$, and: $$\begin{align*} P[H> 74] \quad &⨠⨠ \quad 1-P[H\leq 74] \\\\ &⨠⨠ \quad 1-P[2.5Z + 71 \leq 74] \\\\ &⨠⨠ \quad 1-P[Z\leq 1.20] \\\\ &⨠⨠ \quad 1-0.8849 \approx 11.5\% \end{align*}$$

(b)
We seek $P[H> 77 \mid H> 72]$ as the answer. Compute as follows:

$$\begin{align*}  P[H> 77 \mid H> 72] \quad &=\quad  \frac{P[H> 77]}{P[H> 72]} \\\\ &⨠⨠ \quad  \frac{P[2.5Z+71> 77]}{P[2.5Z+71> 72]} \\\\ &⨠⨠ \quad  \frac{1-P[Z\leq 2.4]}{1-P[Z\leq 0.4]} =\frac{1-0.9918}{1-0.6554}\approx 2.38\% \end{align*}$$

#### Variance of normal from CDF table
Suppose $X\sim \mathcal{N}(5,\sigma^2)$, and suppose you know $P[X>9]=0.2$.

Find the approximate value of $\sigma^2$ using a $\Phi$ table.

**Solution**
$X\sim \mathcal{N}(5,\sigma^2)$ implies $X\sim \sigma Z + 5$.

So $1-P[X\leq 9]=0.2$ and thus $P[\sigma Z + 5 \leq 9]=0.8$. Then: $$P[\sigma Z+5\leq 9]\quad=\quad P[Z\leq 4/\sigma]$$so $P[Z \leq 4/\sigma]=0.8$.

Looking in the chart of $\Phi$ for the nearest inverse of 0.8, we obtain $4/\sigma=0.842$, hence $\sigma=4.75$.

