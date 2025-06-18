## Joint distributions

#### Joint and marginal PMFs - Smaller and bigger roll
Roll two dice, and let $X$ indicate the smaller of the numbers rolled, and let $Y$ indicate the bigger number.

Make a chart showing the PMF. Compute the marginal probabilities, and write them in the margins of the chart.

**Solution**

![400](Pasted%20image%2020250223214232.png)

#### Event probability drawn from PMF table
Here is a joint PMF table: 
$$\begin{array}{c|cccc}P_{Q, G}(q, g) & g=0 & g=1 & g=2 & g=3 \\\hline q=0 & 0.06 & 0.18 & 0.24 & 0.12 \\q=1 & 0.04 & 0.12 & 0.16 & 0.08\end{array}$$

Using the table, compute the following event probabilities: 
(a) $P [Q=0]$
(b) $P [Q=G]$
(c) $P [G>1]$
(d) $P [G>Q]$

#### Joint and marginal PMFs - Coin flipping
Flip a fair coin four times. Let $X$ measure the number of heads in the first two flips, and let $Y$ measure the total number of heads.

Make a chart showing the PMF. Compute the marginal probabilities, and write them in the margins of the chart.

#### Marginal and event probability from joint density
Suppose the joint density of $X$ and $Y$ is given by: 
$$f_{X,Y}(x,y) \quad=\quad \begin{cases} 2xe^{x^2-y} & y>x^2,\,x\in [0,1] \\ 0 & \text{otherwise} \end{cases}$$
Find $f_Y(y)$ and $P\big[Y<3X^2\big]$.

**Solution**
Compute the marginal PDF: 
$$\begin{gather*}f_Y(y) = \int_{-\infty}^{+\infty} f_{X,Y}(x,y)\,dx \\\\ ⨠⨠ \quad  \int_0^{\sqrt{y}} 2xe^{x^2}e^{-y}\,dx \quad ⨠⨠ \quad  1-e^{-y}\end{gather*}$$

Find probability of the event $Y<3X^2$: 
$$\begin{gather*}P\big[Y<3X^2\big] = \int_0^1 \int_{x^2}^{3x^2} 2xe^{x^2-y}\,dy\,dx \\\\ ⨠⨠ \quad  \int_0^1 2xe^{x^2}\left(e^{-x^2}-e^{-3x^2}\right)\,dx\\\\ ⨠⨠ \quad \tfrac{1}{2}\left(1+e^{-2}\right)\end{gather*}$$

#### Marginals from joint density
The joint PDF for $X$ and $Y$ is given by: 
$$f_{X, Y}(x, y)= \begin{cases}6\left(x+y^2\right) / 5 & 0 \leq x,y \leq 1 \\ 0 & \text { otherwise }\end{cases}$$

Find $f_X(x)$ and $f_Y(y)$.

#### Event probability from joint density
The joint PDF for $X$ and $Y$ is given by: 
$$f_{X,Y}(x,y) = \begin{cases} 2e^{-x}e^{-2y} & x,y>0 \\ 0 & \text{else} \end{cases}$$
Compute $P[X<Y]$.


## Independent random variables

#### Event probability - Meeting in the park
A man and a woman arrange to meet in the park between 12:00 and 1:00 am. They both arrive at a random time with uniform distribution over that hour, and do not coordinate with each other.

Find the probability that the first person to arrive has to wait longer than 15 minutes for the second person to arrive.

**Solution**
Let $X$ denote the time the man arrives. Use minutes starting from 12:00, so $X\in(0,60)$. Let $Y$ denote the time the woman arrives, using the same interval.

The probability we seek is: $$P[X+15<Y]+P[Y+15<X]$$
Because $X$ and $Y$ are symmetrical in probability, these terms have the same value, so we just double the first one for our answer.

Since the arrivals are independent of each other, we have $f_{X,Y}=f_X\cdot f_Y$.

Since each arrival time is uniform over the interval, we have: $$f_X(x)=\begin{cases}1/60&x\in(0,60)\\0&\text{otherwise,}\end{cases}\qquad\qquad f_Y(y)=\begin{cases}1/60&y\in(0,60)\\0&\text{otherwise}\end{cases}$$
Therefore the joint density is $f_{X,Y}=\left(\frac{1}{60}\right)^2$. Calculate: 
$$\begin{aligned}2 P\big[X+15<Y\big] & =2 \iint_{x+15<y} f(x, y)\, d x\, d y \\\\& =2 \iint_{x+15<y} f_X(x) f_Y(y)\, d x\, d y \\\\& =2 \int_{15}^{60} \int_0^{y-15}\left(\frac{1}{60}\right)^2 d x\, d y \\\\& =\frac{2}{(60)^2} \int_{15}^{60}y-15\, d y \\\\& =\frac{9}{16}\end{aligned}$$

#### Uniform disk: Cartesian vs. polar
Suppose that a point is chosen uniformly at random on the unit disk.

(a) Let $X$ and $Y$ be the Cartesian coordinates of the chosen point. Are $X$ and $Y$ independent?

(b) Let $R$ and $\Theta$ give the polar coordinates of the chosen point. Are $R$ and $\Theta$ independent?

**Solution** 
**(a)**
Write $f_{X,Y}$ for the joint distribution of $X$ and $Y$. We have: $$f_{X,Y}=\begin{cases}1/\pi& x^2+y^2\leq 1\\ 0&\text{otherwise}\end{cases}$$

Then computing $f_X(x)$, we obtain: 
$$\begin{gather*}\int_{-\sqrt{1-x^2}}^{+\sqrt{1-x^2}}\frac{1}{\pi}\,dy\qquad ⨠⨠ \qquad \frac{2}{\pi}\sqrt{1-x^2} \\\\⨠⨠ \qquad f_X(x)\quad=\quad\begin{cases}\frac{2}{\pi}\sqrt{1-x^2}&x\in[-1,1]\\0&\text{otherwise}\end{cases}\end{gather*}$$

By similar reasoning, $f_Y(y)=\frac{2}{\pi}\sqrt{1-y^2}$ for $y\in [0,1]$.

The product $f_X(x)f_Y(y)$ is not equal to $f_{X,Y}(x,y)$, so $X$ and $Y$ are *not* independent. Information about the value of $X$ does provide constraints on the possible values of $Y$, so this result makes sense.

**(b)**
To find the marginals $f_R(r)$ and $f_\Theta(\theta)$, the standard method is to integrate the density $f_{R,\Theta}$ in the opposite variables.

- !! The probability density $f_{R,\Theta}(r,\theta)$ is not constant! The area of a differential sector $dr\,d\theta$ depends on $r$.

We can take two approaches to finding the density $f_{R,\Theta}$.
- (i) Area of a differential sector divided by total area $\quad=\displaystyle\frac{r\,dr\,d\theta}{\pi}\quad ⨠⨠ \quad \frac{r}{\pi}dr\,d\theta$ 
    - So the density is $f_{R,\Theta}=\frac{r}{\pi}$
- (ii) Compute CDF first, then use partial derivatives.

> [!extra] Elaborating on (ii): joint CDF then partials for joint PDF
> The region ‘below’ a given point $(r,\theta)$, in polar coordinates, is a sector with area $\tfrac{\theta}{2\pi}\cdot\pi r^2$. The factor $\frac{\theta}{2\pi}$ is a percentage of the circle with area $\pi r^2$.
> 
> The density is a constant $\frac{1}{\pi}$ across the disk, so the CDF at $(r,\theta)$ is this same area times $\frac{1}{\pi}$. Thus: $$F_{R,\Theta}=\frac{\theta r^2}{2\pi}$$
> Then in polar coordinates the density is given by taking partial derivatives: 
> $$f_{R,\Theta}(r,\theta) \quad=\quad \frac{\partial^2}{\partial r \partial \theta} \left(\frac{1}{2\pi}\theta r^2\right) \quad ⨠⨠ \quad \frac{r}{\pi}$$

Once we have $f_{R,\Theta}$, integrate to get the marginals: 
$$\begin{align*}f_R(r)&= \int_{\theta=0}^{2\pi} f_{R,\Theta}\,d\theta\quad ⨠⨠ \quad \int_0^{2\pi}\frac{r}{\pi}\,d\theta\quad ⨠⨠ \quad 2r\\\\ f_\Theta(\theta)&= \int_{r=0}^1 f_{R,\Theta}\,dr\quad ⨠⨠ \quad \int_0^1\frac{r}{\pi}\,dr\quad ⨠⨠ \quad \frac{1}{2\pi}\end{align*}$$

Check independence: 
$$f_{R,\Theta}=\frac{r}{\pi}\qquad \overset{\checkmark}{=} \qquad (2r)\left(\frac{1}{2\pi}\right)=f_R\cdot f_\Theta$$

In this problem it is feasible to find the marginals *directly*, without computing the new density, only using some geometric reasoning.

> [!extra] Direct geometric approach
> The probability $P\big[R\in(r,r+dr)\big]$ is the area (over $\pi$) of a thickened circle with radius $r$ and thickness $dr$. The *circumference* of a circle at radius $r$ is $2\pi r$. So the area of the thickened circle is $2\pi r\,dr$. So the probability is $2r\,dr$. This tells us that the marginal probability density is $P_R(r)=2r$.
> 
> The probability $P\big[\Theta\in (\theta,\theta+d\theta)\big]$ is the area (over $\pi$) of a thin sector with radius 1 and angle $d\theta$. This area is $\frac{1}{2}1^2\,d\theta$. So the probability is $\frac{1}{2\pi}\,d\theta$. This tells us that the marginal probability density is $P_\Theta(\theta)=\frac{1}{2\pi}$.
> 
> These results agree with those of the ‘calculus’ approach above!

