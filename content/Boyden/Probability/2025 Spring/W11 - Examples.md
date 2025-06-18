## Conditional distribution

#### Conditioning on a fixed event
Suppose $X$ measures the lengths of some items and has the following PMF: 
$$P_X(k) \quad=\quad \begin{cases}0.15 & k=1,2,3,4 \\ 0.1 & k=5,6,7,8 \\ 0 & \text { otherwise }\end{cases}$$
Let $L$ be the event that $X\geq 5$.

(a) Find the PMF of $X$ conditioned on $L$.

(b) Find the conditional expected value and variance of $X$ given $L$.

**Solution**
(a)
1. By the definition: $$P_{X \mid L}(x) \quad=\quad \begin{cases}\displaystyle\frac{P_X(x)}{P[L]} & x=5,6,7,8 \\ 0 & \text { otherwise }\end{cases}$$
2. Adding exclusive probabilities: $$P[L]\;=\; \sum_{k=5}^8 P_X(k)\quad ⨠⨠ \quad 0.4$$
3. Note that $0.1/0.4=0.25$. Therefore: $$P_{X \mid L}(k)\quad=\quad \begin{cases}0.25 & k=5,6,7,8 \\ 0 & \text { otherwise }\end{cases}$$

(b)
1. Find $E[\,X\mid L\,]$: $$\begin{gather*}E[\,X \mid L\,]\;=\; \sum_{k=5}^8 k\, P_{X \mid L}(k)\\\\ ⨠⨠ \quad 5\cdot(0.25)+6\cdot(0.25)+7\cdot(0.25)+8\cdot(0.25)\\\\ ⨠⨠ \quad 6.5\,\mathrm{min}\end{gather*}$$
2. Find $E[\,X^2\mid L\,]$: $$\begin{gather*}E[\,X^2 \mid L\,]\;=\; \sum_{k=5}^8 k^2\, P_{X \mid L}(k)\\\\ ⨠⨠ \quad 5^2\cdot(0.25)+6^2\cdot(0.25)+7^2\cdot(0.25)+8^2\cdot(0.25)\\\\ ⨠⨠ \quad 43.5\,\mathrm{min}^2\end{gather*}$$
3. Find $\mathrm{Var}[\,X\mid L\,]$: $$\mathrm{Var}[\,X\mid L\,]\quad=\quad E[\,X^2\mid L\,] - E[\,X\mid L\,]^2 \quad ⨠⨠ \quad 1.25\,\mathrm{min}^2$$


#### Conditioning on variable events, discrete PMF function
Suppose $X$ and $Y$ have joint PMF given by: $$P_{X,Y}(k,\ell)\quad=\quad \begin{cases}\displaystyle\frac{k+\ell}{21}& k=1,2,3; \ell=1,2\\0&\text{otherwise}\end{cases}$$

Find $P_{X|Y}(k|\ell)$ and $P_{Y|X}(\ell,k)$.

**Solution**
First compute the marginal PMFs:

$$P_X(k)\quad=\quad \frac{2k+3}{21},\qquad k=1,2,3$$

$$P_Y(\ell)\quad=\quad \frac{\ell+2}{7},\qquad \ell=1,2$$

Therefore, assuming $\ell=1$ or $2$, then for any $k=1,2,3$ we have: $$P_{X|Y}(k,\ell)\quad=\quad \frac{P_{X,Y}(k,\ell)}{P_Y(\ell)}\quad ⨠⨠ \quad \frac{k+\ell}{3\ell+6}$$

And, assuming $k=1$, $2$, or $3$, then for any $\ell=1,2$ we have: $$P_{Y|X}(\ell,k)\quad=\quad \frac{P_{Y,X}(\ell,k)}{P_X(k)}\quad ⨠⨠ \quad \frac{k+\ell}{2k+3}$$


## Conditional expectation

#### Proof of Iterated Expectation, continuous case
Prove Iterated Expectation for the continuous case.

#### Conditional expectations from joint density
Suppose $X$ and $Y$ are random variables with joint density given by: $$f_{X,Y}(x,y)=\begin{cases}\displaystyle\frac{1}{y}e^{-x/y}e^{-y} &x,y\in(0,\infty)\\ 0&\text{otherwise}\end{cases}$$

Find $E[\,X\mid Y=y\,]$. Use this to compute $E[X]$.

**Solution**
First derive the marginal density $f_Y(y)$: 
$$\begin{gather*}f_Y(y) \quad ⨠⨠ \quad  \int_{0}^{+\infty} \tfrac{1}{y}e^{-x/y}e^{-y}\,dx \\\\ ⨠⨠ \quad -e^{-x/y}e^{-y}\Big|_{x=0}^{\infty} \quad⨠⨠ \quad e^{-y}\end{gather*}$$

Use $f_Y(y)$ to compute $f_{X|Y}(x|y)$: 
$$\begin{gather*}f_{X|Y}(x|y) \quad ⨠⨠ \quad  \frac{f_{X,Y}(x,y)}{f_Y(y)} \\\\ ⨠⨠ \quad \tfrac{1}{y}e^{-x/y}e^{-y}\cdot (e^{-y})^{-1} \quad ⨠⨠ \quad \tfrac{1}{y}e^{-x/y}\end{gather*}$$

Use $f_{X|Y}(x|y)$ to calculate expectation conditioned on the variable event: 
$$\begin{gather*}E[X\mid Y=y] \quad ⨠⨠ \quad  \int_{-\infty}^{+\infty}x\,f_{X|Y}(x|y)\,dx \\\\ ⨠⨠ \quad  \int_0^{\infty} \tfrac{x}{y}e^{-x/y}\,dx \quad ⨠⨠ \quad  y\end{gather*}$$

So, set $g(y)=y$. By Iterated Expectation, we know that $E[X] = E[g(Y)]$.

Therefore: $$\begin{gather*}E[X]=E[g(Y)] \quad=\quad  \int_{-\infty}^{+\infty} g(y)\,f_Y(y)\,dy\\\\ ⨠⨠ \quad \int_{0}^{+\infty}y\,e^{-y}\,dy \quad ⨠⨠ \quad  1\end{gather*}$$

Notice that $g(Y)=Y$, so $E[\,X\mid Y\,]=Y$, and Iterated Expectation says that $E[X]=E[Y]$.

#### Flip coin, choose RV
Suppose $X\sim\mathrm{Ber}(1/3)$ and $Y\sim\mathrm{Ber}(1/4)$ represent two biased coins, giving 1 for heads and 0 for tails.

Here is the experiment:
1. Flip a fair coin.
2. If heads, flip the $X$ coin; if tails, flip the $Y$ coin.
3. Record the outcome as $Z$.

What is $E[Z]$?

**Solution**
Let $G\sim\mathrm{Ber}(1/2)$ describe the fair coin.

Then: 
$$\begin{gather*}E[Z] \quad=\quad  E[\,E[Z\mid G\,]\,] \\\\⨠⨠ \quad  E[\,Z\mid G=0\,]\,P_G(0) + E[\,Z\mid G=1\,]\,P_G(1) \\\\⨠⨠ \quad  E[Y]\,P_G(0) + E[X]\,P_G(1) \\\\⨠⨠ \quad  \frac{1}{4}\cdot \frac{1}{2} + \frac{1}{3}\cdot \frac{1}{2} \quad⨠⨠ \quad \frac{7}{24}\end{gather*}$$

#### Sum of random number of RVs
Let $N$ denote the number of customers that enter a store on a given day.
Let $X_i$ denote the amount spent by the $i^{th}$ customer.
Assume that $E[N]=50$ and $E[X_i]=\$8$ for each $i$.

What is the expected total spend of all customers in a day?

**Solution**
A formula for the total spend is $X=\sum_{i=1}^N X_i$.

By Iterated Expectation, we know $E[X]=E[\,E[\,X\mid N\,]\,]$.

Now compute $E[X\mid N]$ as a function of $N$: 
$$\begin{align*}E[X\mid N=n] \quad &⨠⨠ \quad   E\left[ \left(\sum_{i=1}^N X_i\right) \mid N=n \right] \\\\ &⨠⨠ \quad  E\left[ \left(\sum_{i=1}^n X_i\right) \mid N=n \right] \\\\ &⨠⨠ \quad  \sum_{i=1}^n E[ X_i \mid N=n ] \\\\ &⨠⨠ \quad  \sum_{i=1}^n E[X_i] \quad ⨠⨠ \quad  8n\end{align*}$$

Therefore $g(n)=8n$ and $g(N)=8N$ and $E[\,X\mid N\,]=8N$.

Then by Iterated Expectation, $E[X]=E[8N]=8E[N]=\$400$.
