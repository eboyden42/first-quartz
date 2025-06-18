#### 03-01 - Rolling two dice
Two dice are rolled. Find the probabilities of the following events:
 - $A$, the event that the sum is 10
 - $B$, the event that the sum is 12
 - $C$, the event that the two numbers are equal

**Solution**
1. & Consider the total number of outcomes.
    - Since there are two dice being rolled, there are 36 total outcomes.
2. & Consider the total number of desired outcomes for $A$.
    - There are 3 total desired outcomes, $(5, 5)$, $(4, 6)$, (6, 4).
3. & Use formula to find $P(A)$.
    $$P(A) = \frac{\text{desired outcomes}}{\text{total outcomes}} = \frac{3}{36} = \frac{1}{12}$$
4. & Consider the total number of desired outcomes for $B$.
    - There is only 1 desired outcome, $(6, 6)$.
5. & Use formula to find $P(B)$.
$$P(B) = \frac{\text{desired outcomes}}{\text{total outcomes}} = \frac{1}{36}$$
6. & Consider the total number of desired outcomes for $C$.
    - 
     - There are 6 total desired outcomes: $(1, 1)$, $(2, 2)$, $(3, 3)$, $(4, 4)$, $(5, 5)$, $(6, 6)$
7. & Use formula to find $P(C)$.
$$P(C) = \frac{\text{desired outcomes}}{\text{total outcomes}} = \frac{1}{6}$$

#### 03-02 -  Binomial - Repeated coin flips
A coin is flipped $7$ times and the sequence of results recorded as an outcome.
- (a) How many possible outcomes have exactly 3 heads?
- (b) How many possible outcomes have at least 3 heads?

**Solution**
**(a)**
1. & Out of $7$ trials, we choose $3$ of them to be heads. Thus,
$$\binom{7}{3} = 35$$
**(b)**
1. & Out of 7 trials, we choose at least 3 of them to be heads. 
    - Using summation notation, we get $$\sum_{k = 3}^{7}\binom{7}{k} = 99$$

#### 03-03 - Multinomial - Colored marbles in a line
How many ways are there to line up 10 colored marbles (2 red, 3 white, 5 blue), assuming you cannot distinguish marbles of the same color?

**Solution**
1. & Use the multinomial coefficient.
    - Use that $n = 10$.
    - We have three bins, $k_{1} = 2$, $k_{2} = 3$, and $k_{3} = 5$.
    - Thus, $$\frac{n!}{k_{1}!k_{2}!k_{3}!} = \frac{10!}{2!\cdot3!\cdot5!} = 2520$$
#### 03-04 - Multinomial - Many rolls of a die
Roll a die 100 times.
- (a) What is the probability that you rolled exactly 16 ones and 17 twos? Hint: use three bins. What are the bins?
- (b) Using summation notation, write down a formula for the probability of rolling exactly 25 ones and *at least* 50 twos.

For this problem, use "desired outcomes over total outcomes" (simple counting), not repeated trials theory (next section).

**Solution**
**(a)**
1. & Consider total number of outcomes.
    - You roll a die $100$ times, so there are $6^{100}$ total outcomes.
2. & Consider total number of desired outcomes.
    - We choose 16 of the 100 to be ones.
    - We choose 17 of the remaining 100 - 16 = 84 to be twos.
    - The other $84 - 17 = 67$ can be any of $3, 4, 5, 6$. So, there are $4^{67}$ remaining outcomes.
3. & Set up formula.
$$\frac{\text{desired outcomes}}{\text{total outcomes}} = \frac{\binom{100}{16}\binom{84}{17}4^{67}}{6^{100}}$$
**(b)**
1. & Consider total number of desired outcomes.
    - We choose 25 of the 100 to be ones.
    - Out of the remaining 100 - 25 = 75 rolls, we choose at least 50 to be two.
    - The remaining $75 - x$ rolls, where $x \geq 50$, can be any of $3$, $4$, $5$, $6$. So, there are $4^{75 - x}$ remaining outcomes.
2. & Set up formula.
$$\frac{\text{desired outcomes}}{\text{total outcomes}} = \sum_{k = 50}^{75}\frac{\binom{100}{25}\binom{75}{k}4^{75-k}}{6^{100}}$$

#### 03-05 - Independent trials - At least 45 good paper clips
For a paper clip production line, $90\%$ of the paper clips come off good, and $10\%$ come off broken.

You buy a box of 50 paper clips from this line. What is the probability that at least 45 of them are good?

**Solution**
1. &&& State the formula for a binomial distribution.
$$P(X = x) = \binom{n}{x}p^{x}q^{n - x}$$
2. & State parameters of binomial distribution.
    - $n = 50$ since you buy $50$ paper clips.
    - $x$ ranges from $45$ to $50$.
    - $p = 0.9$.
    - $q = 0.1$.
3. & Use summation notation to find $P(X \geq 45)$.
$$P(X \geq 45) = \sum_{x = 45}^{50}\binom{50}{x}(0.9)^{x}q^{50-x} = 0.6161$$

#### 03-06 - Geometric wait time - Takes 10 rolls to get 6
A fair die is rolled until a six comes up. What are the odds that it takes at least 10 rolls?

**Solution**
1. & Describe the situation.
    - Let $x \geq 10$.
    - If it takes at least $10$ rolls for a $6$ to come up, then the first $x - 1$ rolls resulting in a number that is *not* a six.
2. & Compute relevant probabilities.
    - The probability that you roll a six is $\frac{1}{6}$.
    - The probability that you do not roll a six is $1 - \frac{1}{6} = \frac{5}{6}$.
3. & Set up formula.
$$P(\text{it takes at least 10 rolls to get a 6}) = \sum_{x = 10}^{\infty}\left(\frac{5}{6}\right)^{x - 1}\frac{1}{6}$$
1. &&& Use the formula for geometric series to evaluate the sum.
    $$\sum_{x = 10}^{\infty}\left(\frac{5}{6}\right)^{x- 1}\frac{1}{6} = \frac{\frac{1}{6}\left(\frac{5}{6}\right)^{9}}{1-\frac{5}{6}} = \left(\frac{5}{6}\right)^{9}$$

#### 03-07 - Intersection accidents
Suppose that the odds of an accident occurring on any given day at the intersection of Ivy and Emmett is 0.05.
- (a) What are the odds of a perfect week? (No accidents.)
- (b) What are the odds of exactly 2 accidents in 30 days?
- (c) What are the odds of the first accident occurring after day 4 and by day 10?

**Solution**
**(a)**
1. & The odds of a perfect week follows a binomial distribution.
    - $n = 7$ since there are $7$ days to account for.
    - We choose $0$ of them to have accidents.
$$\binom{7}{0}(0.05)^{0}(0.95)^{4} = 0.95^{4} \approx 0.8145$$
**(b)**
1. & The odds of exactly 2 accidents in 30 days follows a binomial distribution.
    - $n = 30$ since there are 30 days to account for.
    - We choose $2$ of these days to have accidents.
$$\binom{30}{2}(0.05)^{2}(0.95)^{28} \approx 0.2586$$
**(c)**
1. && Describe the situation.
    - We want four perfect days before an accident occurs.
    - Over the course of the next six days, we want at least one accident occurring.
    - Since these are independent trials, multiplying the individual probabilities together will yield the desired value.
2. & Set up the first condition.
    - $n = 4$ since we want to account for 4 days.
    - We choose $0$ of these days to have accidents.
    $$\binom{4}{0}(0.05)^{0}(0.95)^{4} = 0.95^{4}$$
3. & Set up second condition.
    - $n = 6$ since we now want to account for the next six days.
    - We choose $k$ of these days to have accidents, where $k$ ranges from $1$ through $6$.
    $$\sum_{k = 1}^{6}\binom{6}{k}(0.05)^{k}(0.95)^{6-k}$$
4. & Multiply the two expressions.
$$0.95^{4}\sum_{k= 1}^{6}\binom{6}{k}(0.05)^{k}(0.95)^{6-k} \approx 0.2158$$

#### 03-08 - Guessing on a test
Your odds of getting any given exam question right are 80$\%$. The exam has 4 questions, and you need to answer 3 correctly to pass.
- What is the probability that you pass?
- After finishing the exam, you are $100\%$ sure that you got the second question right. Now, what are the odds that you pass?

**Solution**
1. & The probability that you pass follows a binomial distribution.
    - $n = 4$ since there are 4 questions to account for.
    - We choose $k$ questions to be correct, where $k = 3$ or $4$.
$$P(\text{pass}) = \sum_{k= 3}^{4}\binom{4}{k}(0.8)^{k}(0.2)^{4-k} \approx 0.8192$$
1. && Describe the situation wherein you get the second question right.
    - Now, out of the remaining three questions, you need to answer at least two correctly.
    - This too follows a binomial distribution.
2. & Set up binomial distribution formula.
    - $n = 3$, since we only need to account for the remaining 3 questions.
    - We choose $k$ questions to be correct, where $k = 2$ or $3$.
    $$$P(\text{pass}) = \sum_{k = 2}^{3}\binom{3}{k}(0.8)^{k}(0.2)^{3-k}\approx 0.896$$

#### 03-09 - Reliability for complex process
Consider a process with the following diagram of components in series and parallel:

Use $W_{i}$ to denote the event that component $i$ succeeds.

Suppose the success probabilities per component are given by this chart:

What are the odds of success for the whole process?

**Solution**
1. &&& Describe dependencies of components.
    - The series 4, 5 runs parallel to component 3.
    - The components 2, 3, 4, 5, 6 all run in a series.
    - The latter is parallel to component 7
    - The circuit starts at component 1 and ends at component 8
2. && Find the probability the component 4 and 5 succeeded. (Denote as $S_{1}$)
$$P(S_{1}) = 0.8 \cdot 0.9 = 0.72$$
3. && Find the probability 3, and $S_{1}$ succeed. Note that these are in parallel. (Denote as $S_{2}$)
    $$P(S_{2}) = 1 - P(S_{1}^{c})P(W_{3}^{c}) = 1- 0.28\cdot 0.6 = 0.832$$
4. && Find the probability 2, $S_{2}$, and 6 succeed. (Denote as $S_{3}$)
$$P(S_{3}) = P(W_{2})P(S_{2})P(W_{6}) = 0.6\cdot 0.832\cdot 0.5 = 0.2496$$
5. && Find the probability 7 and $S_{3}$ succeed. Note that these are in parallel. (Denote as $S_{4}$)
    $$P(S_{4}) = 1- P(S_{4}^{c})P(W_{7}^{c}) = 1-0.7504\cdot0.3=0.77488$$
6. && Lastly, find the probability $1$, $S_{4}$, and 8 succeed. (Denote as $S$).
$$P(S) = P(W_{1})P(S_{4})P(W_{8}) = 0.8\cdot0.77488\cdot 0.9 \approx 0.5579$$

#### 03-10 - Digit of a real number
Suppose a real number is chosen randomly in the unit interval $[0, 1]$. Consider the decimal expansion of this number. Let $Y$ be a random variable giving the first digit after the decimal point. Find the possible values, the PMF, and the CDF of $Y$.

1. & Find the possible values of $Y$.
    - After the decimal point, any of the 10 digits can appear, so $Y \in \{0, 1, \dots, 9\}$.
2. & Find the PMF of $Y$.
    - Each digit has a $\frac{1}{10}$ chance of appearing. So, the PMF of $Y$ is 
    $$p_{Y}(y) = \begin{cases} \frac{1}{10} & y \in \{0, 1, \dots, 9\} \\
    0 & \text{otherwise}
    \end{cases}$$
3. && Find the CDF of $Y$.
    - The CDF of $Y$ $F_{Y}(y) = P(Y \leq y)$ is given as follows.
$$F_{Y}(y)\begin{cases}
0 & y < 0 \\
\frac{1}{10}(y+1) & 0 \leq y \leq 9 \\
1 & y >9
\end{cases}$$
    - Listing out the individual cumulative probabilities for each $y$ is also acceptable.

#### 03-11 - Gambling with a coin
Two players, A and B, are flipping a fair coin together. If it comes up heads, A pays $\$1$ to B, and if it comes up tails, B pays $\$1$ to A. 

They play five rounds. Let $X$ be a random variable recording A's final winnings.

- (a) Describe the set of possible values of $X$.
- (b) Describe the PMF and CDF of $X$.

**Solution**
**(a)**
1. && Describe the situation.
    - Let $X_{i}$ be A's (not total) winnings after the $i^{\text{th}}$ round.
    - Since A either loses one dollar or gains one dollar each round, $X_{i} \in \{\pm1\}$.
    - $X = \sum_{i = 1}^{5}X_{i}$, so $X \in \{-5, -3, 1, 3, 5\}$.
**(b)**
1. && Describe the PMF of $X$.
    - $X = 5$ if and only if all 5 rounds are tails, so $P(X = 5) = \frac{1}{2^{5}} = \frac{1}{32}$.
    - $X = -5$ if and only if all 5 rounds are heads, so $P(X=-5)=P(X = 5) = \frac{1}{32}$.
    - $X = 3$ if 4 rounds are tails, and $X = -3$ if 4 rounds are heads. Since the coin is fair, $P(X = 3) = P(X = -3) = \binom{5}{4}(0.5)^{4}(0.5)^{1} = \frac{5}{32}$.
    - $X = 1$ if 3 rounds are heads, and $X = -1$ if 3 rounds are tails. Since the coin is fair, $P(X = 1) = P(X = -1) = \binom{5}{3}(0.5)^{3}(0.5)^{2} = \frac{10}{32}$.
2. & Define the PMF of $X$.
$$p_{X}(x) = \begin{cases}
\frac{1}{32} & x = -5 \\
\frac{5}{32} & x = -3 \\
\frac{10}{32} & x = -1 \\
\frac{10}{32} & x = 1 \\
\frac{5}{32} & x = 3 \\
\frac{1}{32} & x = 5 \\
0 & \text{otherwise}
 \end{cases}$$
 
 
 3. && Define the CDF of $X$.
     - Note that the jumps in the PDF are the possible discrete values of $X$.
     $$F_{X}(x) = \begin{cases}
     0 & x < -5 \\
     \frac{1}{32} & -5 \leq x < -3 \\
     \frac{6}{32} & -3 \leq x < -1 \\
     \frac{16}{32} & -1 \leq x < 1 \\
     \frac{26}{32} & 1 \leq x < 3 \\
     \frac{31}{32} & 3 \leq x < 5 \\
     1 & 5\leq x
     \end{cases}$$