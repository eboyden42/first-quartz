## Statistical testing cont’d

#### ML test: Smoke detector
Suppose that a smoke detector sensor is configured to produce $8\,\mathrm{V}$ when there is smoke, and $0\,\mathrm{V}$ otherwise. But there is background noise with distribution $\mathcal{N}(0,3^2\,\mathrm{V})$.

Design an ML test for the detector electronics to decide whether to activate the alarm.

What are the three error probabilities? (Type I, Type II, Total.)

**Solution**

First, establish the conditional distributions: 

$$X\mid H_0 \;\sim \mathcal{N}(0,3^2)\qquad X\mid H_1 \;\sim \mathcal{N}(8,3^2)$$
Density functions: 
$$f_{X|H_0}\;=\; \frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-0}{3}\right)^2}\qquad f_{X|H_1}\;=\; \frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-8}{3}\right)^2}$$
---

The ML condition becomes: 

$$
\begin{gather*}
\frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-0}{3}\right)^2}\quad\overset{?}{\geq} \quad \frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-8}{3}\right)^2}\\\\ 
⨠⨠ \quad -\frac{1}{2}\left(\frac{x-0}{3}\right)^2 \quad\overset{?}{\geq}\quad -\frac{1}{2} \left(\frac{x-8}{3}\right)^2\\\\ 
⨠⨠ \quad x^2\quad \overset{?}{\leq}\quad (x-8)^2\\\\
⨠⨠ \quad x\leq 4
\end{gather*}
$$

---

Therefore, $A_0$ is $x\leq 4$, while $A_1$ is $x>4$.

The decision rule is: activate alarm when $x> 4$.

---

Type I error: 

$$\begin{gather*}P_{FA}\;=\; P[A_1\mid H_0]\quad ⨠⨠ \quad P[X>4\mid H_0]\\\\ ⨠⨠ \quad 1-P\left[\frac{X-0}{3}\leq \frac{4}{3}\;\Bigg|\;H_0\right]\\\\ ⨠⨠ \quad 1-P[Z\leq 1.3333]\quad ⨠⨠ \quad \approx 0.0912\end{gather*}$$

Type II error: 

$$\begin{gather*}P_{\text{Miss}}\quad=\quad P[A_0\mid H_1]\quad ⨠⨠ \quad P[X\leq 4\mid H_1] \\\\ ⨠⨠ \quad P\left[ \frac{X-8}{3}\leq \frac{4-8}{3}\;\Bigg|\; H_1 \right]\\\\ ⨠⨠ \quad P[Z\leq -1.3333]\quad ⨠⨠ \quad \approx 0.0912\end{gather*}$$

Total error: 

$$P_{\mathrm{ERR}}\;=\; P_{FA}\cdot 0.5 + P_{\text{Miss}}\cdot 0.5\quad\approx \quad 0.0912$$

#### MAP test: Smoke detector
Suppose that a smoke detector sensor is configured to produce $8\,\mathrm{V}$ when there is smoke, and $0\,\mathrm{V}$ otherwise. But there is background noise with distribution $\mathcal{N}(0,3^2\,\mathrm{V})$.

Suppose that the background chance of smoke is $5\%$. Design a MAP test for the alarm.

What are the three error probabilities? (Type I, Type II, Total.)

**Solution**

First, establish priors: 

$$P[H_0]\;=\; 0.95\qquad P[H_1]\;=\; 0.05$$

The MAP condition becomes: 

$$
\begin{gather*}
\frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-0}{3}\right)^2}\cdot \colorbox{yellow}{0.95} \quad\overset{?}{\geq} \quad \frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-8}{3}\right)^2}\cdot \colorbox{yellow}{0.05} \\\\ 
⨠⨠ \quad e^{-\frac{1}{2}\left(\frac{x-0}{3}\right)^2} \quad\overset{?}{\geq}\quad e^{-\frac{1}{2} \left(\frac{x-8}{3}\right)^2}\cdot \frac{0.05}{0.95}\\\\ 
⨠⨠ \quad -\frac{1}{2}\left(\frac{x-0}{3}\right)^2 \quad\overset{?}{\geq}\quad -\frac{1}{2} \left(\frac{x-8}{3}\right)^2 + \ln\left(\frac{0.05}{0.95}\right)\\\\
⨠⨠ \quad x^2\quad \overset{?}{\leq}\quad (x-8)^2 - 18\ln\left(\frac{0.05}{0.95}\right)\\\\
⨠⨠ \quad x\leq 7.31
\end{gather*}
$$

---

Therefore, $A_0$ is $x\leq 7.31$, while $A_1$ is $x>7.31$.

The decision rule is: activate alarm when $x> 7.31$.

---

Type I error: 

$$\begin{gather*}P_{FA}\;=\; P[A_1\mid H_0]\quad ⨠⨠ \quad P[X>7.31\mid H_0]\\\\ ⨠⨠ \quad 1-P[Z\leq 2.4367]\quad ⨠⨠ \quad \approx 0.007411\end{gather*}$$

Type II error: 

$$\begin{gather*}P_{\text{Miss}}\quad=\quad P[A_0\mid H_1]\quad ⨠⨠ \quad P[X\leq 7.31\mid H_1] \\\\ ⨠⨠ \quad P[Z\leq -0.23]\quad ⨠⨠ \quad \approx 0.4090\end{gather*}$$

Total error: 

$$P_{\mathrm{ERR}}\;=\; P_{FA}\cdot 0.95 + P_{\text{Miss}}\cdot 0.05\quad\approx \quad 0.02749$$

#### MC Test: Smoke detector
Suppose that a smoke detector sensor is configured to produce $8\,\mathrm{V}$ when there is smoke, and $0\,\mathrm{V}$ otherwise. But there is background noise with distribution $\mathcal{N}(0,3\,\mathrm{V})$.

Suppose that the background chance of smoke is $5\%$. Suppose the cost of a miss is $50\times$ the cost of a false alarm. Design an MC test for the alarm.

Compute the expected cost.

**Solution**

We have priors: 

$$P[H_0]\;=\; 0.95\qquad P[H_1]\;=\; 0.05$$

And we have costs: 

$$C_{10}=1\qquad C_{01}=50$$

(The ratio of these numbers is all that matters in the inequalities of the condition.)

The MC condition becomes: 

$$
\begin{gather*}
\frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-0}{3}\right)^2}\cdot 0.95\cdot \colorbox{yellow}{$1$} \quad\overset{?}{\geq} \quad \frac{1}{\sqrt{2\pi 9}} e^{-\frac{1}{2}\left(\frac{x-8}{3}\right)^2}\cdot 0.05\cdot \colorbox{yellow}{$50$} \\\\ 
⨠⨠ \quad e^{-\frac{1}{2}\left(\frac{x-0}{3}\right)^2} \quad\overset{?}{\geq}\quad e^{-\frac{1}{2} \left(\frac{x-8}{3}\right)^2}\cdot \frac{2.5}{0.95}\\\\ 
⨠⨠ \quad -\frac{1}{2}\left(\frac{x-0}{3}\right)^2 \quad\overset{?}{\geq}\quad -\frac{1}{2} \left(\frac{x-8}{3}\right)^2 + \ln\left(\frac{2.5}{0.95}\right)\\\\
⨠⨠ \quad x^2\quad \overset{?}{\leq}\quad (x-8)^2 - 18\ln\left(\frac{2.5}{0.95}\right)\\\\
⨠⨠ \quad x\leq 2.91
\end{gather*}
$$

---

Therefore, $A_0$ is $x\leq 2.91$, while $A_1$ is $x>2.91$.

The decision rule is: activate alarm when $x> 2.91$.

---

Type I error: 

$$\begin{gather*}P_{FA}\;=\; P[A_1\mid H_0]\\\\ ⨠⨠ \quad P[X>2.91\mid H_0]\quad ⨠⨠ \quad \approx 0.1660\end{gather*}$$

Type II error: 

$$\begin{gather*}P_{\text{Miss}}\quad=\quad P[A_0\mid H_1]\\\\ ⨠⨠ \quad P[X\leq 2.91]\quad ⨠⨠ \quad \approx 0.04488\end{gather*}$$

Total error: 

$$P_{\mathrm{ERR}}\;=\; P_{FA}\cdot 0.95 + P_{\text{Miss}}\cdot 0.05\quad\approx \quad 0.1599$$

---

PMF of total cost: 

$$P_C(c)\quad=\quad \begin{cases}0.002244& c=50\\ 0.1577& c=1\\ 0.840056& c=0\end{cases}$$

Therefore $E[C]\;=\; 0.27$.

## Mean square error

#### Minimal MSE estimate given PMF
Suppose $X$ has the following PMF: 

|   $k$    |  1   |  2   |  3   |  4   |  5   |
| :------: | :--: | :--: | :--: | :--: | :--: |
| $P_X(k)$ | 0.15 | 0.28 | 0.26 | 0.19 | 0.13 |

Find the minimal MSE estimate of $X$, given that $X$ is even. What is the error of this estimate?

**Solution**

The minimal MSE given $A$ is just $E[X\mid A]$ where $A=\{2,4\}$.

First compute the conditional PMF: 

$$P_{X|A}(k)\quad=\quad \begin{cases}0.19/0.47&k=4\\ 0.28/0.47& k=2\\ 0&k\neq 2,4\end{cases}$$

Therefore: 

$$\hat{x}_A\quad=\quad 2\frac{0.28}{0.47}+4\frac{0.19}{0.47}\quad\approx\quad  2.80851$$

The error is: 

$$\begin{gather*}e_{X|A}\quad=\quad (2-2.81)^2\frac{0.28}{0.47}+(4-2.81)^2\frac{0.19}{0.47}\\\\ ⨠⨠ \quad \approx 0.9633\end{gather*}$$

#### Minimal MSE estimate from joint PDF
Here is the joint PDF of $X$ and $Y$: 

$$f_{X,Y}\quad=\quad \begin{cases}8xy &0\leq y\leq x\leq 1 \\ 0&\text{otherwise}\end{cases}$$

Find the minimal MSE estimate of $X$ in terms of $Y$.

What is the estimate of $X$ when $Y=0.2$? When $Y=0.8$?

**Answer**

$\displaystyle\hat{x}_M(y)\quad=\quad \frac{2}{3}\cdot\frac{1-y^3}{1-y^2}$

$\hat{x}_M(0.2)\;=\; 0.6889 \qquad \hat{x}_M(0.8)\;=\; 0.9037$


#### Estimating on a variable interval
Suppose that $R\sim\mathrm{Unif}((0,1))$ and suppose $X\sim\mathrm{Unif}(0,R)$.

(a) Find $\hat{x}_M(r)$ $\qquad$ (b) Find $\hat{r}_M(x)$ $\qquad$ (c) Find $\hat{R}_{L_\mathrm{min}}(X)$

**Solution**

(a) Find $\hat{x}_M(r)$.

We know $\hat{x}_M(r)=E[X\mid R=r]$.

Given $R=r$, so $X$ is uniform on $(0,r)$, we have $E[X\mid R=r]=\frac{r}{2}$.

---

(b) Find $\hat{r}_M(x)$.

We know $\hat{r}_M(x)=E[R\mid X=x]$.

To compute this function, we calculate a sequence of densities.

---

We know $f_R$ and $f_{X|R}$. From these we derive the joint distribution $f_{X,R}$: 

$$f_R(r)=\begin{cases}1&r\in(0,1)\\0 &\text{otherwise}\end{cases}\qquad f_{X|R}(x|r)=\begin{cases}1/r&x\in(0,r) \\0&\text{otherwise}\end{cases}$$

$$⨠⨠ \quad f_{X,R}(x,r)\quad=\quad f_{X|R}\cdot f_R\;=\; \begin{cases}1/r& 0< x<r< 1 \\0&\text{else}\end{cases}$$

Now extract the marginal $f_X$: 

$$\begin{gather*}⨠⨠ \quad f_X(x)\quad=\quad \int_{-\infty}^{\infty}f_{X,R}(x,r)\,dr\\\\ ⨠⨠ \quad \int_x^1 \frac{1}{r}\,dr\quad ⨠⨠ \quad -\ln x\qquad (0< x< 1)\end{gather*}$$

Now deduce the conditional $f_{R|X}$: 

$$f_{R|X}\quad=\quad \frac{f_{X,R}}{f_X}\;=\; \begin{cases}\frac{-1}{r\ln x}& 0<x<r<1 \\0&\text{otherwise}\end{cases}$$

---

Then: 

$$\begin{gather*}E[R\mid X=x]\quad ⨠⨠ \quad \int_x^1 r\frac{-1}{r\ln x}\,dr\\\\ ⨠⨠ \quad \frac{x-1}{\ln x}\end{gather*}$$

So $\hat{r}_M(x)=\frac{x-1}{\ln x}$.

---

(c) Find $\hat{R}_{L_\mathrm{min}}(X)$.

We need all the basic statistics.

$E[R]\;=\; 1/2$ because $R\sim\mathrm{Unif}((0,1))$.

$\sigma_R^2\;=\; \frac{(b-a)^2}{12}\;=\; 1/12$.

$E[X]\;=\; 1/4$ using the marginal PDF $f_X(x)=-\ln x$ on $x\in(0,1)$. (IBP and L’Hopital are needed.)

$\sigma_X\;=\; \sqrt{7}/12$ also using the marginal $f_X(x)=-\ln x$.

---

$E[XR]=1/6$ using $f_{X,R}(x,r)$, namely: 

$$\begin{gather*}E[XR]\;=\; \int_{r=0}^1 \int_{x=0}^r xr\frac{1}{r}\,dx\,dr\\\\ ⨠⨠ \quad \int_0^1 \frac{x^2}{2}\,dx\quad ⨠⨠ \quad \frac{1}{6}\end{gather*}$$

From this we infer $\mathrm{Cov}[X,R]=1/24$ and $\rho_{X,R}=\sqrt{3/7}$.

---

Hence: 

$$L_{\mathrm{min}}(x)\;=\; \frac{6}{7}x+\frac{2}{7}$$

Thus: 

$$\hat{R}_{L_\mathrm{min}}(X)\;=\; \frac{6}{7}X+\frac{2}{7}$$


![center|400](Pasted%20image%2020250413161015.png)

%% https://www.desmos.com/calculator/l0gas4a9fv %%


#### Line of minimal MSE given joint PDF
Here is the joint PDF of $X$ and $Y$: 

$$f_{X,Y}\quad=\quad \begin{cases}8xy &0\leq y\leq x\leq 1 \\ 0&\text{otherwise}\end{cases}$$

Find the line giving the linear MSE estimate of $X$ in terms of $Y$.

What is the expected error of this line, $e_{L_\mathrm{min}}$?

What is the estimate of $X$ when $Y=0.2$? When $Y=0.8$?

**Answer** 

$\hat{X}_{L_\mathrm{min}}(Y)\;=\; 0.3637\, Y + 0.6060$

$e_{L_\mathrm{min}}\;=\; 0.02020$

$\hat{x}_{L_\mathrm{min}}(0.2)\;=\; 0.67874\qquad \hat{x}_{L_\mathrm{min}}(0.8)\;=\; 0.89696$

