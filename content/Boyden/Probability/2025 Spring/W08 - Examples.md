## Functions on two random variables
#### PMF of $XY^2$ from chart
Suppose the joint PMF of $X$ and $Y$ is given by this chart:

| $Y\downarrow\; X\to$ | $1$  | $2$ |
| :------------------: | :--: | :-: |
|         $-1$         | 0.2  | 0.2 |
|         $0$          | 0.35 | 0.1 |
|         $1$          | 0.05 | 0.1 |
Define $W=XY^2$.
- (a) Find the PMF $P_W(w)$.
- (b) Find the expectation $E[W]$.

#### Max and Min from joint PDF
Suppose the joint PDF of $X$ and $Y$ is given by: 
$$f_{X,Y}(x,y)\quad=\quad \begin{cases}\frac{3}{2}(x^2+y^2)&x,\,y\in[0,1]\\0&\text{otherwise}\end{cases}$$

Find the PDFs:
- (a) $W=\mathrm{Max}(X,Y)$
- (b) $W=\mathrm{Min}(X,Y)$

**Solution**
(a)
1. &&& Compute CDF of $W$.
    - Convert to event form: $$F_W(w)\quad=\quad P\big[\mathrm{Max}(X,Y)\leq w\big]$$
    - Interpret: $$⨠⨠ \quad P\big[X\leq w\;\text{and}\;Y\leq w\big]$$
    - Integrate PDF over the region, assuming $w\in[0,1]$: $$\int_{-\infty}^w\int_{-\infty}^w f_{X,Y}(x,y)\,dx\,dy$$
    - Insert PDF formula: $$\int_0^w\int_0^w \tfrac{3}{2}(x^2+y^2)\,dx\,dy\quad ⨠⨠ \quad w^4$$
2. & Differentiate to find $f_W(w)$.
    - $f_W=\frac{d}{dw}F_W(w)$: $$f_W(w)\quad=\quad\begin{cases}4w^3&w\in[0,1]\\0&\text{otherwise}\end{cases}$$

(b)
1. &&& Compute CDF of $W$.
    - Convert to event form: $$F_W(w)\;=\; P\big[\mathrm{Min}(X,Y)\leq w\big]$$
    - Consider complement event to interpret: $$⨠⨠ \quad 1-P\big[\mathrm{Min}(X,Y)>w\big] \quad ⨠⨠ \quad 1-P[X>w\;\text{and}\;Y>w]$$
    - Integrate PDF over the region: $$P[X>w\;\text{and}\;Y>w]\quad ⨠⨠ \quad \int_w^1\int_w^1\tfrac{3}{2}(x^2+y^2)\,dx\,dy$$
    - Compute integral: $$\quad ⨠⨠ \quad w^4-w^3-w+1$$
    - Therefore: $$F_W(w)\;=\;w+w^3-w^4$$
2. & Differentiate to find $f_W(w)$.
    - $f_W=\frac{d}{dw}F_W(w)$: $$f_W(w)\quad=\quad\begin{cases}1+3w^2-4w^3&w\in[0,1]\\0&\text{otherwise}\end{cases}$$

#### PDF of a quotient
Suppose the joint PDF of $X$ and $Y$ is given by: 
$$f_{X, Y}(x, y)= \begin{cases}\lambda \mu e^{-(\lambda x+\mu y)} & x,\,y \geq 0 \\ 0 & \text {otherwise}\end{cases}$$

Find the PDF of $W=Y / X$.

1. &&& Find the CDF using logic.
    - Convert to event form: $$F_W(w)\;=\;P[Y / X \leq w]$$
    - Re-express: $$⨠⨠ \quad P[Y \leq w X]$$
    - Diagram: ![center|150](Pasted%20image%2020250302142928.png)
    - Compute: $$\begin{aligned}P[Y \leq w X] \quad &=\quad\int_0^{\infty}\int_0^{w x} f_{X, Y}(x, y)\,dy\,dx \\\\& ⨠⨠ \quad \quad\int_0^{\infty} \lambda e^{-\lambda x}\int_0^{w x} \mu e^{-\mu y}\,dy\,dx \\\\& ⨠⨠ \quad \quad\int_0^{\infty} \lambda e^{-\lambda x}\left(-e^{-\mu w x}+1\right) d x \\\\& ⨠⨠ \quad \quad1-\frac{\lambda}{\lambda+\mu w}\end{aligned}$$
2. & Differentiate to find PDF.
    - Compute $\frac{d}{dw}F_W(w)$: $$f_W(w)= \begin{cases}\displaystyle\frac{\lambda \mu}{(\lambda+\mu w)^2} & w \geq 0 \\\\ 0 & \text {otherwise}\end{cases}$$

## Sums of random variables

#### Sum of parabolic random variables
Suppose $X$ is an RV with PDF given by: 
$$f_X(x)=\begin{cases}\tfrac{3}{4}(1-x^2)&x\in[-1,1]\\0&\text{otherwise}\end{cases}$$

Let $Y$ be an independent copy of $X$. So $f_Y=f_X$, but $Y$ is independent of $X$.

Find the PDF of $X+Y$.

**Solution**
The graph of $f_X(w-x)$ matches the graph of $f_X(x)$ except (i) flipped in a vertical mirror, (ii) shifted by $w$ to the left.

When $w\in [-2,0]$, the integrand is nonzero only for $x\in [-1,w+1]$:
$$\begin{align*}f_{X+Y}(w)&\quad=\quad \left(\frac{3}{4}\right)^2\int_{-1}^{w+1} \big(1-(w-x)^2\big)\big(1-x^2\big)\,dx \\&\quad=\quad \frac{9}{16}\left( \frac{w^5}{30} - \frac{2w^3}{3} - \frac{4w^2}{3} + \frac{16}{15} \right)\end{align*}$$
When $w\in [0,+2]$, the integrand is nonzero only for $x\in[w-1,+1]$: 
$$\begin{align*}f_{X+Y}(w)&\quad=\quad \left(\frac{3}{4}\right)^2\int_{w-1}^{+1} \big(1-(w-x)^2\big)\big(1-x^2\big)\,dx \\&\quad=\quad \frac{9}{16}\left( -\frac{w^5}{30} + \frac{2w^3}{3} - \frac{4w^2}{3} + \frac{16}{15} \right)\end{align*}$$

Final result is: 
$$f_{X+Y}(w)\quad=\quad \begin{cases}\displaystyle\frac{9}{16}\left( \frac{w^5}{30} - \frac{2w^3}{3} - \frac{4w^2}{3} + \frac{16}{15} \right) & w\in[-2,0]\\\\ \displaystyle\frac{9}{16}\left( -\frac{w^5}{30} + \frac{2w^3}{3} - \frac{4w^2}{3} + \frac{16}{15} \right)& w\in[0,2]\\\\ 0&\text{otherwise}\end{cases}$$

![center|600](Pasted%20image%2020231030171632.png)

%% https://www.desmos.com/calculator/7afb3h8mgo %%

#### Discrete PMF formula for a sum
Prove the discrete formula for the PMF of a sum.
(Apply the general formula for the PMF of $g(X,Y)$.)

#### Vandermonde’s identity from the binomial sum rule
Show that this “Vandermonde identity” holds for positive integers $n,\,m,\,\ell$: 
$$\sum_{j+k=\ell} {n\choose j}{m\choose k} = {n+m\choose \ell}$$

Hint: The binomial sum rule is:
$$\text{“}\mathrm{Bin}(n,p)+\mathrm{Bin}(m,p)\,\sim\, \mathrm{Bin}(n+m,p)$$

Set $p=q=1/2$. Compute the PMF of the left side using convolution. Compute the PMF of the right side directly. Set these PMFs equal.

#### Convolution practice
- Suppose $X$ is an RV with density: $$f_X=\begin{cases}2x & x\in[0,1]\\0&\text{otherwise}\end{cases}$$
- Suppose $Y$ is uniform on $[0,1]$.

Find the PDF of $X+Y$. Sketch the graph of this PDF.


#### Exp plus Exp equals Erlang
Let us verify this formula by direct calculation: 
$$\text{“}\mathrm{Exp}(\lambda)+\mathrm{Exp}(\lambda)\;=\;\mathrm{Erlang}(2,\lambda)\text{”}$$

**Solution**
Let $X,\,Y\sim\mathrm{Exp}(\lambda)$ be independent RVs.

Therefore: 
$$f_X=f_Y\quad=\quad \begin{cases}\lambda e^{-\lambda x}&x\geq 0\\ 0&\text{otherwise}\end{cases}$$
Now compute the convolution: 
$$\begin{gather*}f_{X+Y}(w)\quad=\quad \int_{-\infty}^{+\infty} f_X(w-x)f_Y(x)\,dx\\\\ ⨠⨠ \quad \int_0^w \lambda^2 e^{-\lambda(w-x)}e^{-\lambda x}\,dx\quad ⨠⨠ \quad \lambda^2 \int_0^w e^{-\lambda w}\,dx\quad ⨠⨠ \quad \lambda^2 w e^{-\lambda w}\end{gather*}$$

This is the Erlang PDF: $$f_X(t)=\left.\frac{\lambda^\ell}{(\ell-1)!}t^{\ell-1}e^{-\lambda t}\right|_{\ell=2}$$

#### Erlang induction step
By direct computation with PDFs and convolution, derive the formula: 
$$\text{“}\mathrm{Exp}(\lambda)+\mathrm{Erlang}(\ell,\lambda)\;=\;\mathrm{Erlang}(\ell+1,\lambda)\text{”}$$

#### Combining normals
Suppose $X\sim\mathcal{N}(40,16)$, $Y\sim\mathcal{N}(15,9)$. Find the probability that $X\geq 2Y$.

**Solution**
Define $W=X-2Y$. Using the formulas above, we see $W\sim\mathcal{N}(10,52)$, or $W\sim \sqrt{52}Z+10$ for a standard normal $Z$. Then: 
$$\begin{gather*}P[X\geq 2Y]\quad ⨠⨠ \quad P[W\geq 0] \quad ⨠⨠ \quad  P\left[Z\geq \tfrac{-10}{\sqrt{52}}\right]\\\\ ⨠⨠ \quad  P[Z\leq 1.39]\quad ⨠⨠ \quad \approx 0.918\end{gather*}$$

