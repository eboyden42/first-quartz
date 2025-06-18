## Joint Distributions
#### 01 - Finish a PMF table - Strange families
Suppose that 15 percent of the families in a strange community have no children, 20 percent have 1 child, 35 percent have 2 children, and 30 percent have 3 children. Assume the odds of a child being a boy or a girl are equal.

If a family is chosen at random from this community, then $B$, the number of boys, and $G$, the number of girls, in this family will have the joint PMF partially shown in Table 6.2:

- (a) Complete the table by finding the missing entries.
- (b) What is the probability that "$B$ or $G$ is $1$"?

**Solution**
**(a)**
1. & Fill the cells using the respective column sum or row sum.
    - $P(B = 2, G = 0):$ We have $P(G = 0) = 0.375$, so $$P(B = 2, G = 0) = 0.375 - 0.15 - 0.1 - 0.0375 = 0.0875$$
    - $P(B = 2, G = 1)$: We have $P(G = 1) = 0.3875$, so $$P(B = 2, G = 1) = 0.3875 - 0.1- 0.175 = 0.1125$$
    - $P(B = 0, G = 2)$: We have $P(B = 0) = 0.375$, so $$P(B = 0, G = 2) = 0.375 - 0.15 - 0.1 - 0.0375 = 0.0875$$
    - $P(B = 1, G = 2)$: We have $P(B = 1) = 0.3875$, so $$P(B = 1, G = 2) = 0.3875 - 0.1- 0.175 = 0.1125$$

**(b)**
1. & Add up the probabilities in which either $B = 1$ or $G = 1$.
    $$P(B = 1 \text{ or } G = 1) = 0.1 + 0.1 + 0.175 + 0.1125+ 0.1125 = 0.6$$  
2. && Alternatively, you could use the inclusion-exclusion principle using the marginal sums.
$$\begin{gather*}P(B = 1 \text{ or } G = 1)\\\\ = P(B = 1) + P(G = 1) - P(B = 1 \text{ and } G = 1)\\\\ = 0.3875 + 0.3875 - 0.175 = 0.6\end{gather*}$$

#### 02 - PMF calculations from a table
Suppose the joint PMF of $X$ and $Y$ has values given in this table:

- (a) Find $x$.
- (b) Find the marginal PMF of $X$.
- (c) Find the PMF of the random variable $Z= XY$.
- (d) Find $P[X = Y]$ and $P[X > Y]$.

**Solution**
**(a)**
1. & We know that $\sum_{x}\sum_{y}p(x, y) = 1$. Use this to find $x$.
$$0.1 + 5(0.05) + 0.15 + 2(0.2) + x = 1 \implies x = 1 - 0.1 - 5(0.05) - 0.15 - 2(0.2) = 0.1$$

**(b)**
1. & The marginal PMF of $X$ is given by adding up the rows corresponding to each possible $X$ value.
    $$ p_{X}(x) = \begin{cases} 0.1 + 0.15 + 0.05 = 0.3 & x = 1 \\ 2(0.2) + 2(0.05)  = 0.5 & x = 2 \\ 2(0.05) + 0.1 = 0.2 & x = 3\end{cases} $$

**(c)**
1. & Define the possible values of $Z$.
- Since $X \in \{1, 2, 3\}$ and $Y \in \{0, 1, 2, 3\}$, we have that $Z \in \{0, 1, 2, 3, 4, 6, 9\}$.

1. && Define PMF of $Z$.
    - Go through each possible value of $Z$ and see when it occurs.
    $$p_{Z}(z) = \begin{cases} P[Y = 0] & z = 0 \\ P[X = 1 \cap Y = 1] & z = 1 \\ P[X = 1 \cap Y = 2] + P[X = 2 \cap Y = 1] & z = 2 \\ P[X = 1 \cap Y = 3] + P[X = 3 \cap Y = 1] & z = 3 \\ P[X = 2 \cap Y= 2] & z = 4 \\ P[X = 2 \cap Y = 3] + P[X = 3 \cap Y = 2] & z = 6 \\ P[X = 3 \cap Y = 3] & z = 9\end{cases}$$

2. & Substitute values in for each probability.
    $$p_{Z}(z) = \begin{cases} 0.35 & z = 0 \\ 0.15 & z = 1 \\ 0.05 & z =2 \\ 0.05 & z = 3 \\ 0.05 & z =4 \\ 0.3 & z = 6 \\ 0.05 & z = 9\end{cases}$$

**(d)**
1. & Find $P[X = Y]$
    $$\begin{gather*}P[X = Y]\\\\ = P[X = 1 \cap Y = 1] + P[X = 2 \cap Y = 2] + P[X = 3 \cap Y = 3]\\\\ = 0.15 + 0.05 + 0.05 = 0.25\end{gather*}$$
2. & Find $P[X > Y]$
$$\begin{gather*}P[X > Y]\\\\=  P[Y = 0] + P[X = 2 \cap Y = 1] + P[X  =3 \cap Y = 1] + P[X = 3 \cap Y = 2] \\\\= 0.35 + 0.05 + 0.1 = 0.5\end{gather*}$$

#### 03 - Marginals from joint PMF
Suppose the discrete joint PMF of $X$ and $Y$ is given by:
$$P_{X, Y}(x, y) = \frac{xy^{2}}{30}, \quad x = 1, 2, 3, \quad y = 1, 2$$
Compute the marginal PMFs $P_{X}(x)$ and $P_{Y}(y)$. 

**Solution**
1. Compute $P_{X}(x)$ by summing over $y$.
$$P_{X}(x) = \sum_{y}P_{X, Y}(x, y) = P_{X, Y}(x, 1) + P_{X, Y}(x, 2) = \frac{x}{30}\left(1^{2} + 2^{2}\right) = \frac{x}{6}$$
2. Compute $P_{Y}(y)$ by summing over $x$.
$$P_{Y}(y) = \sum_{x}P_{X, Y}(x, y) = \frac{y^{2}}{30}(1 + 2 + 3) = \frac{y^{2}}{5}$$

#### 04 - Joint CDF on box events: All four corners
Consider the following formula:
$$P[x_{1} < X \leq x_{2}, y_{1} < Y \leq y_{2}] = $$
$$F_{X, Y}(x_{2}, y_{2}) - F_{X, Y}(x_{2},y_{1}) - F_{X, Y}(x_{1}, y_{2}) + F_{X, Y}(x_{1}, y_{1})$$
Prove this formula. Hint: Do these steps along the way:
- Draw these events in the $xy$-plane:
    $$\begin{align*}
    A &= \{X\leq x_{1}, y_{1} < Y \leq y_{2}\} \\ B &= \{x_{1}< X \leq x_{2}, Y \leq y_{1}\} \\ C &= \{x_{1} < X \leq x_{2}, y_{1} < Y \leq y_{2}\} \end{align*}$$
 - Draw the event $A \cup B \cup C$. Write the probability of this event in terms of $F_{X, Y}$.

**Solution**
1. & Write the event $A \cup B \cup C$ in terms of $F_{X, Y}$.
$$P[A \cup B \cup C] = F_{X, Y}(x_{2}, y_{2}) - F_{X, Y}(x_{1}, y_{1})$$
2. & Write the terms $P[A]$, $P[B]$, and $P[C]$ in terms of $F_{X, Y}$.
    $$\begin{align*} 
    P[A] &= F_{X, Y}(x_{1}, y_{2}) - F_{X, Y}(x_{1}, y_{1}) \\
     P[B] &= F_{X, Y}(x_{2}, y_{1}) - F_{X, Y}(x_{1}, y_{1}) \\
    P[C] &= P[A \cup B \cup C] - \left(P[A] + P[B]\right)
    \end{align*} $$
3. && Simplify expression for $P[C]$.
    $$\begin{align*}
    P[C] &= F_{X, Y}(x_{2}, y_{2}) - F_{X, Y}(x_{1}, y_{1}) - F_{X, Y}(x_{1}, y_{2}) - F_{X, Y}(x_{2}, y_{1}) + 2F_{X, Y}(x_{1}, y_{1}) \\
    &= F_{X, Y}(x_{2}, y_{2}) - F_{X, Y}(x_{2}, y_{1}) - F_{X, Y}(x_{1}, y_{2}) + F_{X, Y}(x_{1}, y_{2})\end{align*}$$

#### 05 - Marginals from PDF
Suppose $X$ and $Y$ have joint PDF given by
    $$f_{X, Y}(x, y) = \begin{cases}
    2e^{-(x + 2y)} & \text{if } x, y > 0 \\
    0 & \text{otherwise}
    \end{cases}$$
- (a) Find the marginal PDFs for $X$ and $Y$.
- (b) Find $P[X > Y]$.

**Solution**

**(a)**
1. & Find the marginal PDF for $X$ by integrating the joint PDF with respect to $y$.
$$f_{X}(x) = \int_{0}^{\infty}2e^{-(x + 2y)}dy = \lim_{b \to \infty}\int_{0}^{b}2e^{-(x + 2y)}dy = -\lim_{b \to \infty}\left.\left[e^{-(x + 2y)}\right]\right|_{0}^{b} = e^{-x}$$
2. & Find the marginal PDF for $Y$ by integrating the joint PDF with respect to $x$.
$$f_{Y}(y) = \int_{0}^{\infty}2e^{-(x + 2y)}dx = -\lim_{b \to \infty}\left.\left[2e^{-(x + 2y)}\right]\right|^{b}_{0} = 2e^{-2y}$$

**(b)**
1. && Note that the region of interest is the one above the line $y = x$. Integrate the PDF over this region.
$$\begin{gather*}P[X > Y] = \int_{0}^{\infty}\int_{0}^{x}2e^{-(x + 2y)}dydx = \int_{0}^{\infty}e^{-x}-e^{-3x}\,dx\\\\ = -e^{-x}+\frac{1}{3}e^{-3x}\Big|_0^\infty = -0+\frac{1}{3}\cdot 0 - (-1)-\frac{1}{3}\cdot1=\frac{2}{3}\end{gather*}$$

#### 06 - Random point in a triangle
Consider a joint distribution whose PDF is constant inside the triangle with $(0, 0)$, $(0, 1)$, and $(1, 0)$, and zero outside. Suppose a point $(X, Y)$ is chosen at random according to this distribution. 
- (a) Find the joint PDF $f_{X, Y}$.
- (b) Find the marginal PDFs for $X$ and $Y$.
- (c) Are $X$ and $Y$ independent?

**Solution**

**(a)**
1. & Find the area of the triangle, and find a formula for the PDF.
    - The area of the triangle is $\frac{1}{2}$. Therefore the PDF is
    $$f_{X, Y}(x, y) = \begin{cases}
    \frac{1}{1/2} = 2 & 0 \leq x \leq 1, 0 \leq y \leq 1 - x \\
    0 & \text{otherwise}
    \end{cases}$$

**(b)**
1. & Integrate with respect to $y$ to find the marginal PDF for $X$.
$$f_{X}(x) = \int_{0}^{1- x}2dy = \left.2y\right|_{0}^{1-x} = 2(1- x) $$
$$f_{X}(x) = \begin{cases}
2(1-x) & 0 \leq x \leq 1 \\
0 & \text{otherwise}
\end{cases}$$
2. & Integrate with respect to $x$ to find the marginal PDF for $Y$.
$$f_{Y}(y) = \int_{0}^{1-y}2dx = \left.2x\right|_{0}^{1-y} = 2(1-y)$$
    $$f_{Y}(y) = \begin{cases}
    2(1- y) & 0 \leq y \leq 1 \\
    0 & \text{otherwise}
    \end{cases}$$

**(c)**
1. & Compute the product $f_{X}(x)f_{Y}(y)$ and compare to $f_{X, Y}(x, y)$.
   $$2 \stackrel{?}{=} 4(1-x)(1-y) $$
2. & Consider the case wherein $x = 1, y = 0$
   $$4(1-1)(1-0) = 0 \neq 2$$
- Therefore, $X$ and $Y$ are not independent.

#### 07 - Factorizing the density
Consider two joint density functions for $X$ and $Y$:
$$\begin{align*}
f_{1}(x, y) &= 6e^{-2x}e^{-3y}, & x, y > 0, \\
f_{2}(x, y) &= 2yxe^{x^{2}}, & x, y \in[0, 1], x + y \in [0, 1].
\end{align*}$$
(Assume the densities are zero outside the given domain).

Supposing $f_{1}$ is the joint density, are $X$ and $Y$ independent? Why or why not?
Suppose $f_{2}$ is the joint density, are $X$ and $Y$ independent? Why or why not?

**Solution**
1. & Compute the marginal distribution of $X$ by integrating $f_{1}$ with respect to $y$.
   $$f_{X}(x) = \int_{0}^{\infty}6e^{-2x}e^{-3y}dy = e^{-2x}\lim_{b \to \infty}\left[-2e^{-3y}\right]_{0}^{b} = 2e^{-2x}, x > 0$$
2. & Compute the marginal distribution of $Y$ by integrating $f_{1}$ with respect to $x$.
   $$f_{Y}(y) = \int_{0}^{\infty}6e^{-2x}e^{-3y}dx = 3e^{-3y}, x > 0$$
3. & Determine independence by multiplying the marginal pdfs.
   $$f_{X}(x)f_{Y}(y) = 6e^{-2x}e^{-3y} = f_{1}$$
    - Since the product of the marginal PDFs equals the joint PDF, we conclude that $X$ and $Y$ are independent.
4. & Compute the marginal distribution of $X$ by integrating $f_{2}$ with respect to $y$.
   $$f_{X}(x) = \int_{0}^{1-x}2yxe^{x^{2}}dy = xe^{x^{2}}\left.\left[y^{2}\right]\right|_{0}^{1-x} = xe^{x^{2}}(1-x)^{2} $$
5. & Compute the marginal distribution of $Y$ by integrating $f_{2}$ with respect to $x$.
   $$f_{Y}(y) = \int_{0}^{1-y}2yxe^{x^{2}}dx = y\left.\left[e^{x^{2}}\right]\right|_{0}^{1-y} = y\left(e^{(1-y)^{2}}-1\right)$$
6. & Determine independence by multiplying the marginal pdfs.
     - $f_{X}(x)f_{Y}(y) = yxe^{x^{2}}(1-x)^{2}\left(e^{(1-y)^{2}}-1\right) \neq f_{2}$
     - Therefore, $X$ and $Y$ are *not* independent.

#### 08 - Composite PDF from joint PDF
The joint density of random variables $X$ and $Y$ is given by 
$$f_{X, Y}(x, y) = \begin{cases}
e^{-x-y} & x, y > 0 \\
0 & \text{otherwise}
\end{cases}$$
Compute the PDF of $X/Y$.

**Solution**
1. && Define $Z = X/Y$ and find the CDF of $Z$.
   $$\begin{align*}P[Z \leq z] &= P[X/Y \leq z] = P[X \leq Yz] \\ &= \int_{0}^{\infty}\int_{0}^{yz}e^{-x}e^{-y}dxdy \\&= -\int_{0}^{\infty}e^{-y}\left.\left[e^{-x}\right]\right|_{0}^{yz}dy \\&= 1-\int_{0}^{\infty}e^{-y(z + 1)dy} \\&= 1 - \frac{1}{z + 1}, \quad z > 0\end{align*}$$
2. & Differentiate to find $f_{Z}(z)$.
   $$f_{Z}(z) = \frac{1}{(z + 1)^{2}}, \quad z > 0$$
