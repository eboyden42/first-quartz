> [!question] Hypergeometric distribution: male chickens
> It is notoriously difficult to determine the sex of a chicken before it matures. Suppose that a randomly chosen chick from a pen of $N$ chicks is male with probability $1/3$. Suppose you draw $n$ chicks from the pen. Do the odds that $k$ of them are male depend upon the value of $N$?


> [!question] Components of a car
> A certain car includes $n$ components, and it needs at least half of its components to function in order to drive. Each component functions with probability $p$, independently of the others. For what values of $p$ is a car with $n=3$ more likely to drive than a car with $n=5$? Start by defining a random variable that measures the number of functioning components.



> [!note] Construct random variable from PMF
> The probability space $\Omega=\{H,T\}^{\mathbb{N}}$ is the set of infinite strings of $H$ or $T$, for example $HTTHTHHTTH\dots\in \Omega$. There is a probability measure $P$ determined by the interpretation of $H$ or $T$ as the outcome of a fair coin flip. For a subset $A$ containing all strings with specified (given) values of the first $n$ letters, then $P(A)=2^{-n}$. E.g. if $A = \{HTTT\cdots,\,HTTH\cdots,\,HTHT\cdots,\,\dots\}$ is everything starting with $HT$, then $P(A)=1/4$.
> 
> Construct a random variable $X$ on $\Omega$ such that the PMF of $X$ is given by: 
> $$
> p(k) = \begin{cases} 3/8 & \text{for } k=0 \\
> 1/8 & \text{for } k=5 \\
> 1/2 & \text{for } k=17 \\
> 0 & \text{else} \end{cases}
> $$


> [!note] Fair coin, $n$ flips, $P(H)=1/4$
> Repeat the previous example with a biased coin having $P(H)=1/4$.


> [!note] Random point in $[0,1]^2$, PDF of $X$ and $X^2$
> A random point is chosen in the unit square $[0,1]\times [0,1]$.
> 
> Outcomes are *points* $(x,y)$ in this square. Events are *regions* in the square. The probability of a region $A$ is the *area* of $A$.
> 
> Define the random variable $X$ by $X(x,y)=x$. This is just the $x$-coordinate of the random point.
> Then the random variable $X^2$ is given by $X^2(x,y)=x^2$. This is just the squared $x$-coordinate of the random point.
> 
> - (a) Describe the PDF of $X$.
> - (b) Describe the PDF of $X^2$.

