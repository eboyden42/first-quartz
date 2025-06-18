#### 01 - Rolling Mixed Dice
You have three dice. One has 4, one has 6, and one has 12 sides. How many 4s do you expect to see if you roll these dice together?

**Solution**

Call the $4$-sided, $6$-sided, and $12$-sided dice, dice $1,2,3$ respectively. Let $X_i$ be the event that dice $i$ rolls a $4$. Then $X_1\sim\text{Ber}(\frac{1}{4})$, $X_2\sim\text{Ber}(\frac{1}{6})$, and $X_3\sim\text{Ber}(\frac{1}{12})$. 
Let $S$ be the number of $4$'s that are rolled. Then $S=X_1+X_2+X_3$. Thus, $\mathbb{E}[S]=\mathbb{E}[X_1+X_2+X_3]=\mathbb{E}[X_1]+\mathbb{E}[X_2]+\mathbb{E}[X_3]$ $=\frac{1}{4}+\frac{1}{6}+\frac{1}{12}$ $=\frac{1}{2}$ by linearity of expectation. Thus, we expect to see $\frac{1}{2}$ $4$'s if we roll these dice together.

#### 02 - Jumble of Coins
In my pocket I have a jumble of coins: 5 dimes, 4 quarters, 3 nickels, 3 pennies, and one big 50¢-piece. I draw three at random. What is the expected value of the three?

**Solution**

Let $X_1$ be the value of the first coin drawn, let $X_2$ be the value of the second coin drawn, and let $X_3$ be the value of the third coin drawn. The central trick to efficiently solve this problem is to notice that $X_1,X_2,X_3$ are all identically distributed. One can see this by the following argument: using an ordered triple $(X_1,X_2,X_3)$, write down all possible permutations of drawings. Notice that the number of triples where $X_1$ is a dime is equal to the number of triples where $X_2$ is a dime is equal to the number of triples where $X_3$ is a dime. We can further extend this observation to all the values. Thus, the distributions of $X_1,X_2,X_3$ are all the same. 
Another, nicer, argument is to notice that we can swap $X_1$ and $X_2$ in these ordered triples without changing the overall set, and similarly for $X_1,X_3$ and $X_2,X_3\implies$ there exists a bijection between $X_1, X_2$; $X_2,X_3$; and $X_1,X_3\implies$ identical distribution.
Thus, we have that $\mathbb{E}[X_1]=\mathbb{E}[X_2]=\mathbb{E}[X_3]$. 
Let $S$ be the sum of the values of the three coins. Then $\mathbb{E}[S]=\mathbb{E}[X_1+X_2+X_3]=\mathbb{E}[X_1]+\mathbb{E}[X_2]+\mathbb{E}[X_3]=3\mathbb{E}[X_1]$. 
Now, $\mathbb{E}[X_1]=\sum\limits_{i=1,5,10,25,50}\mathbb{P}(X_1=i)\cdot i$ $=10\cdot\frac{5}{16}+5\cdot\frac{3}{16}+25\cdot\frac{4}{16}+1\cdot\frac{3}{16}+50\cdot\frac{1}{16}=$ $13.625$.
Thus, $\mathbb{E}[S]=3\cdot13.625=40.875$. 

#### 03 - Counting flip flops
A bag contains 50 marbles, 30 blue and 20 red. A sequence of zeros and ones is created by pulling the marbles out one at a time (without replacement) and writing a 1 if the marble drawn is blue and a zero if it is red.
How many pairs of adjacent digits in the sequence are expected to differ from each other?
Hint: Use a sum of 49 indicators.

**Solution**

Let $X_1,...,X_{49}$ be a sequence of indicators where $X_{i}$ is the event that the $i$-th entry differs from the $i+1$-th entry. By a similar argument to above, the $X_i$ are identically distributed for each $i$, and are, in fact, independent. 
Let $S$ be the number of pairs of entries that differ from each other. Then $S=\sum\limits_{i=1}^{49}X_i$. By the above, $\mathbb{E}[S]=49\mathbb{E}[X_{1}]=49\left(0\cdot\mathbb{P}[X_1=0]+1\cdot\mathbb{P}[X_1=1]\right)$.
Let $Y_i$ denote the $i$-th entry. Now, $\mathbb{P}[X_1=1]=\mathbb{P}[Y_1=1,Y_2=0]+\mathbb{P}[Y_1=0,Y_2=1]$ $=\frac{30}{50}\cdot\frac{20}{49}+\frac{20}{50}\cdot\frac{30}{49}$ $=\frac{24}{49}$.
Thus, $\mathbb{E}[S]=49\cdot\frac{24}{49}=24$.

#### 04 - Normal approximation - Eating hot dogs
Frank is a competitive hot dog eater. He eats $1\,\mathrm{hd}$ in $15\,\mathrm{sec}$ with $\sigma=4\,\mathrm{sec}$.
What is the probability that Frank manages to consume $64\,\mathrm{hd}$ in $15\,\mathrm{min}$ or less, in an upcoming competition? Use a normal approximation from the CLT to estimate this probability.
State the reason that the normal approximation is applicable.

**Solution**

The normal approximation in this case is applicable since:
(1) Frank eats a large number of hot dogs $\implies$ the sample size, or $n$, is sufficiently large
(2) We assume that the amount of time Frank spends on each hot dog does not depend on how many he has had previously $\implies$ the times to consume each hot dog are independent and identically distributed
Let $X_i$ be the time taken to eat the $i$-th hot dog. Let $S=X_1+...+X_{64}$ be the time taken to eat $64$ hot dogs. Then $\mu=\mathbb{E}[X_i]=15$ seconds with $\sigma=4$ seconds. 
Since $15$ minutes is $900$ seconds, by the CLT we have: $$\begin{align*}P[S\le900]&\approx\Phi\left(\frac{500-64\mu}{\sigma\sqrt{64}}\right)\\&=\Phi\left(-1.875\right)\\&\approx 1-\Phi(1.88)\\&=0.0301\end{align*}$$

#### 06 - Normal approximation - Ventilator filters
A mechanical ventilator model uses air filters that last 100 hours on average with a standard deviation of 30 hours.
How many filters should be stocked so that the supply lasts 2,000 hours with probability at least 95%? Use a normal approximation to estimate the answer. 
State the reason that the normal approximation is applicable.

**Solution**

In this case the normal approximation is applicable since we have a large sample size (need a large number of filters to last $2000$ hours) and they follow follow independent but identical distributions. 
Let $X_i$ be how long the $i$-th filter lasts. Let $S=\sum\limits_{i=1}^n X_i$ where we want to find $n$ such that $P[S\ge2000]\ge0.95$. By normal approximation and the Central Limit Theorem, we have $$\begin{align*}\Phi\left(\frac{2000-n\cdot100}{30\cdot \sqrt{n}}\right)&\ge0.95\\\Phi\left(-\frac{2000-n\cdot100}{30\sqrt{n}}\right)&\le0.05&&\text{by symmetry of normal distribution}\\\frac{2000-100n}{30\sqrt{n}}&\le \Phi^{-1}(0.05)\\n&\ge22.3\end{align*}$$
and thus $n=23$ filters are required. 

#### 08 - Indicator method, exchangeability, summation rules
A class has 40 students: 24 women and 16 men. Each period the teacher selects a random student to present an exercise on the board from among those who have not presented already.
Let $X$ count the number of times a man was chosen after 15 class periods. 
(a) $\star$ Find $E[X]$. 
(b) $\bigstar$ Find $\mathrm{Var}[X]$. 
Hint: Is $X_j$ independent of $X_i$? Do you know $E[X_j]$ anyway?

**Solution**

(a)
Let $X_i$ be the indicator that a man was chosen in the $i$-th period. Then $X_i\sim\text{Ber}(\frac{16}{40})$ for each $i$, and the $X_i$ are independent for each $i$. Let $X$ be the total number of times a man was chosen. We can use a similar argument to Problems 2 or 3, or we can simply use linearity of expectation: 
$$\begin{align*}\mathbb{E}[X]&=\mathbb{E}[X_1+...+X_{15}]\\&=\mathbb{E}[X_1]+...+\mathbb{E}[X_{15}]\\&=15\cdot\frac{16}{40}\\&=6\end{align*}$$
(b)
Using the standard formula for the variance of a sum of random variables, we have:
$$\begin{align*}\text{Var}[X]&=\text{Var}[X_1+...+X_{15}]\\&=\text{Var}[X_1]+...+\text{Var}[X_{15}]+2\sum\limits_{1\le i<j\le 15}\text{Cov}(X_i,X_j)\end{align*}$$
Since the variables are identically distributed, their variances are equal. Thus, $$\begin{align*}\text{Var}[X]&=15\text{Var}[X_1]+2\sum\limits_{1 \le i<j\le15}\text{Cov}(X_i,X_j)  \end{align*}$$
Now, the sum has $\begin{pmatrix}15\\2\end{pmatrix}$ terms, and since each $X_i$ is identically distributed, each term is identical. Thus, $2\sum\limits_{1\le i<j\le 15}\text{Cov}(X_i,X_j)=\begin{pmatrix}15\\2\end{pmatrix}\text{Cov}(X_i,X_j)$ for some fixed $i\neq j$. 
We then have $\text{Cov}(X_i,X_j)=\text{Cov}(X_1,X_2)=\mathbb{E}[X_iX_j]-\mathbb{E}[X_i]\mathbb{E}[X_j]$ $=(1\cdot P(X_iX_j=1)+0\cdot P(X_iX_j=0))-\mathbb{E}[X_i]\mathbb{E}[X_j]$ $=P(X_1=1,X_2=1)-\left(\frac{16}{40}\right)^2$ $\frac{16}{40}\cdot\frac{15}{39}-\frac{4}{25}$ $=-\frac{2}{325}$
Finally, $\mathbb{E}[X_1^2]$ $=1^2\cdot P(X_1=1)+0^2\cdot P(X_1=0)$ $=\frac{2}{5}$, and thus $\text{Var}[X_1]=15\cdot\frac{6}{25}$
Plugging these values in, we have $\text{Var}[X]=15\cdot\frac{6}{25}-\frac{4}{325}\cdot105$ $\approx2.308$. 