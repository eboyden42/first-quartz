## Mean square error
#### 01
> [!problem] MSE of a derived variable
> Suppose that $X\sim\mathrm{Unif}([0,2])$, and $Y=X^2$.
> 
> You are using the sample mean with 50 samples, namely $M_{50}(Y)$, to estimate $E[Y]$.
> 
> What is the mean square error of $M_{50}(Y)$? (Errors are deviations of this variable from $E[Y]$.)
#### 02
> [!problem] Estimates from joint PDF
> Suppose $X$ and $Y$ have the following joint PDF: 
> 
> $$f_{X, Y}(x, y)= \begin{cases}\frac{6(y-x)}{27} & 0 \leq x \leq y \leq 3 \\ 0 & \text {otherwise}\end{cases}$$
> 
> (a) Find $f_X(x)$ and the blind estimate $\hat{x}_B$.
> 
> (b) Compute $\hat{x}_G$, the MMSE estimate of $X$ assuming the event $G=\{X<3/2\}$.
> 
> (c) Find $f_Y(y)$ and the blind estimate $\hat{y}_B$.
> 
> (d) Compute $\hat{y}_H$, the MMSE estimate of $Y$ assuming the event $H=\{Y>3/2\}$. ^rdu3he
#### 03
> [!problem] MMSE exact estimator from joint PDF
> Suppose $X$ and $Y$ have the following joint PDF: 
> 
> $$f_{X, Y}(x, y)= \begin{cases}2(y+x) & 0 \leq x \leq y \leq 1 \\ 0 & \text {otherwise}\end{cases}$$
> 
> (a) What is $\hat{x}_M(y)$, the MMSE estimate of $X$ given $Y=y$?
> 
> (b) What is $\hat{y}_M(x)$, the MMSE estimate of $Y$ given $X=x$? ^knff8y
#### 04
> [!problem] MMSE linear estimator from joint PDF
> Suppose $X$ and $Y$ have the following joint PDF: 
> 
> $$f_{X, Y}(x, y)= \begin{cases}2(y+x) & 0 \leq x \leq y \leq 1 \\ 0 & \text {otherwise}\end{cases}$$
> 
> (a) What is $\hat{X}_L(Y)$, the MMSE linear estimator of $X$ in terms of $Y$?
> 
> (b) What is $\hat{Y}_L(X)$, the MMSE linear estimator of $Y$ in terms of $X$?
#### 05
> [!problem] MMSE linear estimator from joint PMF
> Suppose $X$ and $Y$ have the following joint PMF: 
> 
> | $Y\downarrow\; X\to$ |      $-1$      |      $0$       |      $1$       |
> | :------------------: | :------------: | :------------: | :------------: |
> |         $1$          | $\frac{1}{6}$  | $\frac{1}{12}$ |       0        |
> |         $3$          | $\frac{1}{8}$  | $\frac{1}{12}$ | $\frac{1}{24}$ |
> |         $5$          | $\frac{1}{24}$ | $\frac{1}{12}$ | $\frac{1}{8}$  |
> |         $7$          |       0        | $\frac{1}{12}$ | $\frac{1}{6}$  |
> 
> (a) Find the minimal MSE linear estimator for $X$ in terms of $Y$.
> 
> (b) What is the MMSE error for this linear estimator?
> 
> (c) Use (a) to estimate $X$ given $Y=1$ and $Y=5$. ^bsbl4v



%% 
MMSE linear estimator from joint density
In HW 10-07, you studied this joint PDF: 

$$f_{X, Y}(x, y)= \begin{cases}\frac{3}{2}\left(x^2+y^2\right) & x,y\in [0,1] \\ 0 & \text { otherwise }\end{cases}$$

What is the minimal MSE linear estimator for $X$ in terms of $Y$?

What is the linear estimate of $X$ given $Y=0.7$?

(You may use the data you found in HW 10-07, you don’t need to repeat those calculations.)
  %%



%% 
A telemetry signal, $T$, transmitted from a temperature sensor on a communications satellite is a Gaussian random variable with $E [T]=0$ and $\operatorname{Var}[T]=9$. The receiver at mission control receives $R=T+X$, where $X$ is a noise voltage independent of $T$ with PDF

$$
f_X(x)= \begin{cases}1 / 6 & -3 \leq x \leq 3 \\ 0 & \text { otherwise }\end{cases}
$$

The receiver uses $R$ to calculate a linear estimate of the telemetry voltage:

$$
\hat{t}_L(r)=a r+b
$$

(a) What is $E [R]$, the expected value of the received voltage?
(b) What is $\operatorname{Var}[R]$, the variance of the received voltage?
(c) What is $\operatorname{Cov}[T, R]$, the covariance of the transmitted voltage and the received voltage?
(d) What is the correlation coefficient $\rho_{T, R}$ of $T$ and $R$ ?
(e) What are $a^*$ and $b^*$, the optimum mean square values of $a$ and $b$ in the linear estimator?
(f) What is $e_L^*$, the minimum mean square error of the linear estimate?
 %%
 

