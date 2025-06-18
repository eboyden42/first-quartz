## Functions of two variables, covariance, correlation
#### 01
> [!problem] Covariance and correlation
> The joint PMF of $X$ and $Y$ is given by the table: 
> 
> | $Y\downarrow\; X\to$ |       0        |       1        |       2        |       3        |
> | :-------------: | :------------: | :------------: | :------------: | :------------: |
> |        1        | $\frac{1}{15}$ | $\frac{1}{15}$ | $\frac{2}{15}$ | $\frac{1}{15}$ |
> |        2        | $\frac{1}{10}$ | $\frac{1}{10}$ | $\frac{1}{5}$  | $\frac{1}{10}$ |
> |        3        | $\frac{1}{30}$ | $\frac{1}{30}$ |       0        | $\frac{1}{10}$ |
> 
> Compute:
> 
> (a) $E[X+Y]$ $\quad$ (b) $E[\,(X-Y)^2\,]$ $\quad$ (c) $\mathrm{Cov}[X,Y]$ $\quad$ (d) $\rho[X,Y]$
#### 02
> [!problem] Covariance etc. from independent densities
> Suppose $X$ and $Y$ are independent variables with the following densities: 
> 
> $$f_X(x)= \begin{cases}\frac{1}{3} e^{-x / 3} & x>0 \\ 0 & \text { otherwise }\end{cases} \qquad f_Y(y)= \begin{cases}\frac{1}{8} e^{-y / 8} & y>0 \\ 0 & \text { otherwise }\end{cases}$$
> 
> Compute: 
> 
> (a) $P[X>Y]$ $\quad$ (b) $E[XY]$ $\quad$ (c) $\mathrm{Cov}[X,Y]$ $\quad$ (d) $\rho[X,Y]$
#### 03
> [!problem] Plumber completion time
> A plumber is coming to fix the sink. He will arrive between 2:00 and 4:00 with uniform distribution in that range.
> 
> Sink fixes take an average of 45 minutes with completion times following an exponential distribution.
> 
> When do you expect the plumber to finish the job?
> 
> What is the variance for the finish time?
#### 04
> [!problem] Correlation between overlapping coin flip sequences
> Suppose a coin is flipped 30 times.
> 
> Let $X$ count the number of heads among the first 20 flips, and $Y$ count the heads in the last 20.
> 
> Find $\rho[X,Y]$.
> 
> Hint: Partition the flips into three groups of 10. Create *three* variables, counting heads, and express $X$ and $Y$ using these. What is the variance of a binomial distribution? ^94knbr
#### 05
> [!problem] Variance puzzle: indicators
> Suppose $A$ and $B$ are events satisfying: $$P[A]=0.5,\qquad P[B]=0.2,\qquad P[AB]=0.1$$
> 
> Let $X$ count the number of these events that occurs. (So the possible values are $X=0,1,2$.)
> 
> Find $\mathrm{Var}[X]$.
> 
> Hint: Try setting $X=X_A+X_B$. ^qx5ftt
#### 06
> [!problem] $\bigstar$ When $\rho[X,Y]=1$
> Suppose $\rho[X,Y]=1$ for two random variables $X$ and $Y$.
> 
> Show that $Y=aX+b$, where $a=\sigma_Y/\sigma_X$.
> 
> Find the formula for $b$.
> 
> Hint: Study the proof that $-1\leq \rho[X]\leq 1$, and think about $E[(\tilde{X}-\tilde{Y})^2]$.
> 
> (Note: A similar result and argument holds for $\rho[X,Y]=-1$.)
#### 07
> [!problem] Further practice: Covariance etc. from joint density
> Suppose $X$ and $Y$ are random variables with the following joint density: 
> 
> $$f_{X, Y}(x, y)= \begin{cases}\frac{3}{2}\left(x^2+y^2\right) & x,y\in [0,1] \\ 0 & \text { otherwise }\end{cases}$$
> 
> Compute: 
> 
> (a) $E[X]$ $\quad$ (b) $E[Y]$ $\quad$ (c) $E[X Y]$ $\quad$ (d) $\mathrm{Var}[X]$
> 
> (e) $\mathrm{Var}[Y]$ $\quad$ (f) $\mathrm{Cov}[X,Y]$ $\quad$ (g) $\rho[X,Y]$ $\quad$ (h) Are $X$ and $Y$ independent?
> 
> (It is worth thinking through which of these can be computed in multiple ways.) ^guak5w

