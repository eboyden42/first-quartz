## Joint distributions
#### 01
> [!problem] Finish a PMF table - Strange families
> Suppose that 15 percent of the families in a strange community have no children, 20 percent have 1 child, 35 percent have 2 children, and 30 percent have 3 children. Assume the odds of a child being a boy or a girl are equal.
> 
> If a family is chosen at random from this community, then $B$, the number of boys, and $G$, the number of girls, in this family will have the joint PMF partially shown in Table 6.2: 
> 
> ![500](Partially-filled-PMF-chart.svg)
> 
> (a) Complete the table by finding the missing entries.
> 
> (b) What is the probability that “$B$ or $G$ is 1”?
#### 02
> [!problem] PMF calculations from a table
> Suppose the joint PMF of $X$ and $Y$ has values given in this table: 
> 
> | $X\backslash Y$ |  0   |  1   |  2   |  3   |
> | :-------------: | :--: | :--: | :--: | :--: |
> |        1        | 0.10 | 0.15 |  0   | 0.05 |
> |        2        | 0.20 | 0.05 | 0.05 | 0.20 |
> |        3        | 0.05 |  0   | $x$  | 0.05 |
> - (a) Find $x$.
> - (b) Find the marginal PMF of $X$.
> - (c) Find the PMF of the random variable $Z=X Y$.
> - (d) Find $P[X=Y]$ and $P[X>Y]$. ^4y9ag1
#### 03
> [!problem] Marginals from joint PMF
> Suppose the discrete joint PMF of $X$ and $Y$ is given by:
> $$P_{X,Y}(x,y)\quad=\quad\frac{x y^2}{30}, \quad x=1,2,3, \quad y=1,2$$
> 
> ![300](Pasted%20image%2020250223212330.png)
> 
> Compute the marginal PMFs $P_X(x)$ and $P_Y(y)$.
#### 04
> [!problem] Joint CDF on box events: All four corners
> Consider the following formula:
> $$\begin{gather}P\big[x_1<X \leq x_2,\, y_1<Y \leq y_2\big]=\\\\F_{X, Y} \left(x_2, y_2\right)-F_{X, Y}\left(x_2, y_1\right)-F_{X, Y}\left(x_1, y_2\right)+F_{X, Y}\left(x_1, y_1\right)\end{gather}$$
> 
> Prove this formula. Hint: Do these steps along the way: 
> - Draw these events in the $xy$-plane: $$\begin{aligned}& A=\big\{X \leq x_1,\, y_1<Y \leq y_2\big\} \\& B=\big\{x_1<X \leq x_2,\, Y \leq y_1\big\} \\& C=\big\{x_1<X \leq x_2,\, y_1<Y \leq y_2\big\}\end{aligned}$$
> 
> - Draw the event $A\cup B\cup C$. Write the probability of this event in terms of $F_{X,Y}$.
#### 05
> [!problem] Marginals from PDF
> Suppose $X$ and $Y$ have joint PDF given by: 
> $$f_{X,Y}(x, y)= \begin{cases}2 e^{-(x+2 y)} & \text { if } x, y>0 \\ 0 & \text { otherwise }\end{cases}$$
> 
> - (a) Find the marginal PDFs for $X$ and $Y$.
> - (b) Find $P[X>Y]$. ^4flgnw

## Independent random variables
#### 06
> [!problem] Random point in a triangle
> Consider a joint distribution whose PDF is constant inside the triangle with vertices $(0,0),(0,1)$, and $(1,0)$, and zero outside. Suppose a point $(X, Y)$ is chosen at random according to this distribution.
> 
> - (a) Find the joint PDF $f_{X, Y}$.
> - (b) Find the marginal PDFs for $X$ and $Y$.
> - (c) Are $X$ and $Y$ independent?
#### 07
> [!problem] $\bigstar$ Factorizing the density
> Consider two joint density functions for $X$ and $Y$: 
> $$
> \begin{align*}
> f_1(x,y) &= 6e^{-2x}e^{-3y}, \qquad x,y>0, \\
> f_2(x,y) &= 2yxe^{x^2}, \qquad x,y\in [0,1],\; x+y\in [0,1].
> \end{align*}
> $$
> (Assume the densities are zero outside the given domain.)
> 
> Supposing $f_1$ is the joint density, are $X$ and $Y$ independent? Why or why not?
> Supposing $f_2$ is the joint density, are $X$ and $Y$ independent? Why or why not? ^96ksx7
#### 08
> [!problem] $\bigstar$ Composite PDF from joint PDF
> The joint density of random variables $X$ and $Y$ is given by: 
> $$
> f_{X,Y}(x,y) \quad=\quad \begin{cases} e^{-x-y} & x,y>0 \\ 0 & \text{otherwise} \end{cases}
> $$
> Compute the PDF of $X/Y$. (Hint: First find the CDF of $X/Y$.) ^v09u4p

