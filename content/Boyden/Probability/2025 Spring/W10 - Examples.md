## Functions on two random variables
#### $E[\,X^2+Y\,]$ from joint PMF chart
Suppose the joint PMF of $X$ and $Y$ is given by this chart:

| $Y\downarrow\; X\to$ | $1$  | $2$ |
| :------------------: | :--: | :-: |
|         $-1$         | 0.2  | 0.2 |
|         $0$          | 0.35 | 0.1 |
|         $1$          | 0.05 | 0.1 |
Define $W=X^2+Y$. Find the expectation $E[W]$.

**Solution**
First compute the values of $W$ for each pair $(X,Y)$ in the chart:

| $Y\downarrow\; X\to$ | $1$ | $2$ |
| :------------------: | :-: | :-: |
|         $-1$         |  0  |  3  |
|         $0$          |  1  |  4  |
|         $1$          |  2  |  5  |
Now take the sum, weighted by probabilities: $$\begin{gather*}0\cdot(0.2)+3\cdot(0.2)+1\cdot(0.35)\\+4\cdot(0.1)+2\cdot(0.05)+5\cdot(0.1)\end{gather*}\quad ⨠⨠ \quad 1.95\;=\;E[W]$$

#### $E[Y]$ two ways, and $E[XY]$, from joint density
Suppose $X$ and $Y$ are random variables with the following joint density: 
$$f_{X, Y}(x, y)= \begin{cases}\frac{3}{16}xy^2 & x,y\in [0,2] \\ 0 & \text { otherwise }\end{cases}$$

(a) Compute $E[Y]$ using two methods.

(b) Compute $E[XY]$.

**Solution**
(a) <u>Method One:</u> via marginal PDF $f_Y(y)$: $$f_Y(y)\quad=\quad \int_0^2\frac{3}{16}xy^2\,dx\quad ⨠⨠ \quad \begin{cases}\frac{3}{8}y^2&y\in[0,2\\0&\text{otherwise}\end{cases}$$

Then expectation: $$E[Y]\;=\; \int_0^2y\,f_Y(y)\,dy\quad ⨠⨠ \quad \int_0^2\frac{3}{8}y^3\,dy\quad ⨠⨠ \quad 3/2$$

(a) <u>Method Two:</u> directly, via two-variable formula: $$E[Y]\;=\; \int_0^2\int_0^2 y\cdot \frac{3}{16}xy^2\,dy\,dx ⨠⨠ \quad \int_0^2\frac{3}{4}x\,dx\quad ⨠⨠ \quad 3/2$$

(b) Directly, via two-variable formula: $$\begin{gather*}E[XY]\quad=\quad \int_0^2\int_0^2 xy\cdot \frac{3}{16}xy^2\,dy\,dx\\\\ ⨠⨠ \quad \int_0^2 \frac{3}{4}x^2\,dx\quad ⨠⨠ \quad 2\end{gather*}$$

#### Covariance from PMF chart
Suppose the joint PMF of $X$ and $Y$ is given by this chart:

| $Y\downarrow\; X\to$ | $1$  | $2$ |
| :------------------: | :--: | :-: |
|         $-1$         | 0.2  | 0.2 |
|         $0$          | 0.35 | 0.1 |
|         $1$          | 0.05 | 0.1 |
Find $\mathrm{Cov}[X,Y]$.

**Solution**
We need $E[X]$ and $E[Y]$ and $E[XY]$.

$$E[X]\;= \; 1\cdot(0.2+0.35+0.05)+2\cdot(0.2+0.1+0.1)\quad ⨠⨠ \quad 1.4$$
$$\begin{gather*}E[Y] \;= \; -1\cdot(0.2+0.2)+0\cdot(0.35+0.1)+1\cdot(0.05+0.1)\\\\ ⨠⨠ \quad -0.25\end{gather*}$$
$$E[XY]\;=\; -1\cdot(0.2)-2\cdot(0.2)+0+1\cdot(0.05)+2\cdot(0.1)\quad ⨠⨠ \quad -0.35$$

Therefore: $$\begin{gather*}\mathrm{Cov}[X,Y]\;=\; E[XY]-E[X]E[Y]\\\\ ⨠⨠ \quad -0.35-(1.4)(-0.25)\quad ⨠⨠ \quad 0\end{gather*}$$

#### Variance of sum of indicators
An urn contains 3 red balls and 2 yellow balls.

Suppose 2 balls are drawn without replacement, and $X$ counts the number of red balls drawn.

Find $\mathrm{Var}[X]$.

**Solution**
Let $X_1$ indicate (one or zero) whether the first ball is red, and $X_2$ indicate whether the second ball is red, so $X=X_1+X_2$.

Then $X_1X_2$ indicates whether both drawn balls are red; so it is Bernoulli with success probability $\frac{3}{5}\frac{2}{4}=\frac{3}{10}$. Therefore $E[X_1X_2]=\frac{3}{10}$.

We also have $E[X_1]=E[X_2]=\frac{3}{5}$.

The variance sum rule gives: 
$$\begin{align*}\mathrm{Var}[X]\quad &= \quad  \mathrm{Var}[X_1]+\mathrm{Var}[X_2]+2\mathrm{Cov}[X_1,X_2] \\\\&⨠⨠ \quad  E[X_1^2]-E[X_1]^2 + E[X_2^2]-E[X_2]^2 + 2(E[X_1X_2]-E[X_1]E[X_2]) \\\\&⨠⨠ \quad  \frac{3}{5}-\left(\frac{3}{5}\right)^2 + \frac{3}{5}-\left(\frac{3}{5}\right)^2 + 2\left(\frac{3}{10}-\frac{3}{5}\cdot\frac{3}{5}\right)\quad ⨠⨠ \quad \frac{9}{25}\end{align*}$$


