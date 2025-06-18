#### Solution: Problem 02-01 - Conditional probability - algebra games
**Problem:**
Assume that $A_{1}$, $A_{2}$, and $A_{3}$ partition the sample space, and assume this data: 

| $P[A_1]$ | $P[A_2]$ | $P[A_3]$ | $P[B\mid A_1]$ | $P[B\mid A_2]$ | $P[B\mid A_3]$ |
| -------- | -------- | -------- | -------------- | -------------- | -------------- |
| $30\%$   | $40\%$   | $30\%$   | $50\%$         | $50\%$         | $60\%$         |

Find these values
- $P[B]$
- $P[A_{1}\mid B]$
- $P[A_{2}\mid B]$
- $P[A_{3}\mid B]$

**Solution:**
1. & Use the Law of Total Probability to find $P[B]$.
    $$P[B] = P[B\mid A_{1}]P[A_{1}] + P[B\mid A_{2}]P[A_{2}] + P[B\mid A_{3}]P[A_{3}] = 0.5\cdot 0.3 + 0.5\cdot 0.4 + 0.6\cdot 0.3 = 0.53$$
2. && Use Bayes' Theorem to find $P[A_{1}\mid B]$.
    $$P[A_{1}\mid B] = \frac{P[B \mid A_{1}]P[A_{1}]}{P[B]} = \frac{0.5\cdot0.3}{0.53} \approx 0.2830$$
3. && Use Bayes' Theorem to find $P[A_{2}\mid B]$.

    $$P[A_{2}\mid B] = \frac{P[B\mid A_{2}]P[A_{2}]}{P[B]} = \frac{0.5\cdot 0.4}{0.53} \approx 0.3774$$
4. && Use Bayes' Theorem to find $P[A_{3}\mid B]$.
    $$P[A_{3}\mid B] = \frac{P[B\mid A_{3}]P[A_{3}]}{P[B]} = \frac{0.6\cdot 0.3}{0.53} \approx 0.3396$$
#### Solution: Problem 02-02 - Conditioning relation
**Problem:**
Suppose you know $P[A \cap B] = 0.036$ and $P[A\mid B] = 0.18$ and $P[B\mid A] = 0.60$.

Calculate $P[A]$ and $P[B]$ and $P[A \cup B]$.

**Solution:**
1. && Set up conditional probability formula.
    - Solve for $P[A]$.
    $$P[B \mid A] = \frac{P[A \cap B]}{P[A]} \qquad ⨠⨠ \qquad P[A] = \frac{P[A \cap B]}{P[B \mid A]}$$
2. & Plug in given values. 
    $$P[A] = \frac{0.036}{0.60} = 0.06$$
3. && Set up conditional probability formula.
    - Solve for $P[B]$.
    $$P[A \mid B] = \frac{P[A \cap B]}{P[B]} \qquad ⨠⨠ \qquad P[B] = \frac{P[A \cap B]}{P[A \mid B]}$$
4. & Plug in given values.

$$P[B] = \frac{0.036}{0.18} = 0.2$$
5. && Use inclusion-exclusion principle to find $P[A \cup B]$. 
$$P[A \cup B] = P[A] + P[B] - P[A\cap B] = 0.06+0.2 - 0.036 = 0.224$$

#### Solution: Problem 02-03 - Interpreting Multiplication - Fund performance
**Problem:**
The odds of the Winning Fund outperforming the market in a random year are $15\%$. The odds that it outperforms the market in a $1$-year period assuming it has done so in the prior year are $30\%$. 

What is the probability of the Winning Fund outperforming the market in $2$ consecutive years?

**Solution:**
1. & Define events.
    - Let $W_{1}$ be the event where the Winning Fund outperforms the first year.
    - Let $W_{2}$ be the event where the Winning Fund outperforms the second year.
    - We are asked to compute $P(W_{1} \cap W_{2})$
2. && Find relevant probabilities.
    - $P(W_{1}) = 0.15$.
    - $P(W_{2}\mid W_{1}) = 0.3$.
3. & Compute $P(W_{1} \cap W_{2})$
$$P(W_{1} \cap W_{2}) = P(W_{1})\cdot P(W_{2} \mid W_{1}) = 0.15 \cdot 0.3 = 0.045$$

#### Solution: Problem 02-04 - Stolen computer
**Problem:**
Someone in a coffee shop "promises" to watch your computer while you're in the bathroom.

If she does watch it, the probability that it gets stolen is 10%.
If she doesn't watch it, the probability that it gets stolen is 70%.
You think there's a 90% chance she is honest enough to watch it, having promised.

When you come back from the bathroom, the computer is gone.
What is the probability that she witnessed the theft?

**Solution:**
1. && Define events.
    - Let $W$ be the event that she watches it.
    - Let $S$ be the event that the computer is stolen.
    - We are given the probabilities $P(S\mid W) = 0.1$, $P(S \mid \sim W) = 0.7$, $P(W) = 0.9$.
    - We are asked to compute $P(W \mid S)$.
2. && Set up formula $P(W\mid S)$ using Bayes' Theorem.
$$P(W\mid S) = \frac{P(S\mid W)P(W)}{P(S)} = \frac{P(S\mid W)P(W)}{P(S\mid W)P(W) + P(S\mid \sim W)P(\sim W)}$$
3. & Plug in values.
    $$P(W\mid S) = \frac{0.1\cdot 0.9}{0.1\cdot 0.9 + 0.7 \cdot 0.1} = 0.5625$$

#### Solution: Problem 02-05 - Bayes' Theorem - Inferring die from roll
**Problem:**
A bag contains one 4-sided die, one 6-sided die, and one 12-sided die. You draw a random die from the bag, roll it, and get a 4.

What is the probability that you drew the 6-sided die?

**Solution:**
1. & Define events.
    - Let $D_{4}$ be the event in which you draw the 4-sided die, $D_{6}$ be the event in which you draw the 6-sided die, and $D_{12}$ be the event in which you draw the 12-sided die.
    - We are asked to compute $P(D_{6}\mid 4)$.
2. && Define obvious probabilities.
     - $P(4\mid D_{6}) = \frac{1}{6}$.
     - $P(4\mid D_{4}) = \frac{1}{4}$.
     - $P(4\mid D_{12}) = \frac{1}{12}$.
     - $P(D_{6}) = P(D_{4}) = P(D_{12}) = \frac{1}{3}$.
3. && Use Bayes' Theorem to set up the formula for $P(D_{6}\mid 4)$.
$$P(D_{6}\mid 4) = \frac{P(4 \mid D_{6})P(D_{6})}{P(4)} = \frac{P(4\mid D_{6})P(D_{6})}{P(4\mid D_{6})P(D_{6}) + P(4\mid D_{4})P(D_{4}) + P(4\mid D_{12})P(D_{12})}$$
4. & Plug in values and solve.
    $$P(D_{6} \mid 4) = \frac{\frac{1}{6} \cdot \frac{1}{3}}{\frac{1}{6}\cdot\frac{1}{3}+\frac{1}{4}\cdot\frac{1}{3}+\frac{1}{12}\cdot\frac{1}{3}} = \frac{1}{3}$$
#### Solution: Problem 02-06 - Bayes' Theorem - DNA evidence
**Problem:**
A crime is committed in a town of 100,000 citizens. After all 100,000 citizen's DNA is analyzed, your friend Jim is found to have a DNA match to evidence at the scene. A forensics expert says that the probability of a random person matching this evidence is $0.01\%$. How likely is it that Jim is guilty?

**Solution:**
1. & Define events.
    - Let $G$ be the event that Jim is guilty.
    - Let $M$ be the event in which the DNA matches.
    - We are given that $P(M \mid \sim G) = 0.0001$.
    - We know that $P(M\mid G) = 1$.
    - Since there are 100,000 citizens, $P( G) = 0.00001$, $P(\sim G) = 0.99999$.
    - We are asked to compute $P(G \mid M)$.
2. && Use Bayes' Theorem to set up the formula for $P(G\mid M)$.
$$P(G\mid M) = \frac{P(M \mid G)P(G)}{P(M)} = \frac{P(M \mid G)P(G)}{P(M\mid G)P(G) + P(M\mid \sim G)P(\sim G)}$$
3. & Plug in values.
    $$P(G\mid M) = \frac{1\cdot 0.00001}{1\cdot0.00001 + 0.0001 \cdot 0.99999} \approx 0.0909$$

#### Solution: Problem 02-07 - Independence puzzle
**Problem:**
Assume $A_{1}$, $A_{2}$, and $A_{3}$ are mutually independent. Compute $P[A_{1}A_{2}\cup A_{3}]$ in terms of $P[A_{1}]$, $P[A_{2}]$, and $P[A_{3}]$.

**Solution:**
1. & Use inclusion-exclusion principle. 
$$P[A_{1}A_{2}\cup A_{3}] = P[A_{1}A_{2}] + P[A_{3}] - P[A_{1}A_{2}A_{3}]$$
2. & Use the fact that they are mutually independent.
$$P[A_{1}A_{2}\cup A_{3}] = P[A_{1}]P[A_{2}] + P[A_{3}] - P[A_{1}]P[A_{2}]P[A_{3}]$$

#### Solution: Problem 02-08 - Pairwise independent, and mutually independent: three coin flips
**Problem:**
Flip a coin three times in sequence. Label events like this:
- $A$ - exactly one heads among first and second flips
- $B$ - exactly one heads among second and third flips
- $C$ - exactly one heads among first and third flips

Verify that $A$, $B$, $C$ are *pairwise* independent but not actually *mutually* independent.

**Solution:**
1. & Find probabilities for individual events.
    - $P(A) = \frac{1}{2}$
    - $P(B) = \frac{1}{2}$
    - $P(C) = \frac{1}{2}$.
2. & Compute pairwise probabilities.
     - The only way $A$ and $B$ happen is when the second flip is heads and the first and third flip are tails, and when  the first and third are heads and when the second is heads. So, $P(A \cap B) = \frac{1}{4} = P(A)P(B)$.
    - The only way $B$ and $C$ happen is when only the third flip is heads or when only the first and second flip are heads. So, $P(B \cap C) = \frac{1}{4} = P(B)P(C)$.
    - The only way $A$ and $C$ happen is when only the first flip is heads or when only the second and third flip are heads. So, $P(A \cap C) = \frac{1}{4}=P(A)P(C)$.
3. & Disprove mutual independence.
    - $A$, $B$, and $C$ cannot happen simultaneously, so $P(A\cap B \cap C) = 0 \neq \frac{1}{2}\cdot\frac{1}{2}\cdot\frac{1}{2}$.

#### Solution: Problem 02-09 - Bin marbles
**Problem:**
A bin contains $5$ red marbles, $7$ blue marbles, and 3 white marbles.

We draw a random marble. If it's red, we put it back, if it's not red, we keep it. We do this three times.
- (a) What is the probability of getting red then white then blue?
- (b) Suppose the last draw was blue. What is the probability that the first was red?

**Solution:**
**(a)**
1. & Define events.
     - We define the sample space as $\Omega = \{abc: a, b, c \in \{R, W, B\}\}$ . 
     - $a$ is the first ball drawn, $b$ the second, and $c$ the third.
     - $R$ represents the event in which a red ball is drawn, $W$ represents the event in which a white ball is drawn, $B$ represents the event in which a blue ball is drawn.
2. & Compute $P(RWB)$.
    $$P(RWB) = \frac{5}{15}\cdot \frac{3}{15} \cdot \frac{7}{14} = \frac{1}{30}$$
**(b)**
1. & We are asked to compute $P(a = R\mid c = B)$. Use Bayes' Theorem to set up formula for $P(a= R \mid c = B)$.
$$P(a = R\mid c = B) = \frac{P(a=R \cap c = B)}{P(c=  B)}$$
3. &&& Find probabilities for all relevant combinations.
    - $P(RRB) = \frac{5}{15}\cdot\frac{5}{15}\cdot\frac{7}{15} = \frac{7}{135}$
    - $P(RBB) = \frac{5}{15}\cdot\frac{7}{15}\cdot\frac{6}{14} = \frac{1}{15}$
    - $P(RWB) = \frac{1}{30}$
    - $P(BRB) = \frac{7}{15}\cdot\frac{5}{14}\cdot\frac{6}{14} =\frac{1}{14}$
    - $P(BBB) = \frac{7}{15}\cdot\frac{6}{14}\cdot\frac{5}{13} = \frac{1}{13}$
    - $P(BWB) =\frac{7}{15}\cdot\frac{3}{14}\cdot\frac{6}{13} = \frac{3}{65}$
    - $P(WRB) = \frac{3}{15}\cdot\frac{5}{14}\cdot\frac{7}{14} = \frac{1}{28}$
    - $P(WBB) = P(BWB) = \frac{3}{65}$
    - $P(WWB) = \frac{3}{15}\cdot\frac{2}{14}\cdot\frac{7}{13}= \frac{1}{65}$
4. & Plug in values.  
    $$P(a=R \mid c = B) = \frac{\frac{7}{135}+\frac{1}{15}+\frac{1}{30}}{\frac{7}{135} + \frac{1}{15} + \frac{1}{30} + \frac{1}{13} + 2\left(\frac{3}{65}\right)+\frac{1}{14} + \frac{1}{28} + \frac{1}{65}} \approx 0.3423$$

#### Solution: Problem 02-10 - Counting outcomes - permutations and combinations
**Problem:**
In a lottery, five distinct numbers are picked at random from 1, 2, 3, $\dots$, 40. How many possible outcomes are there:
- (a) If we care about the order of numbers.
- (b) If the order does not matter.

**Solution:**
**(a)**
1. & If the order matters, then we are dealing with a permutation.
    - We want $5$ distinct numbers, so $$|\Omega| = \frac{40!}{(40-5)!} = 40\cdot39\cdot38\cdot37\cdot36 = 78960960$$
**(b)** 
1. & If the order matters, then we are dealing with a combination.
    - We want $5$ distinct numbers, so $$|\Omega| = \frac{40!}{5!(40-5)!} = \frac{40\cdot39\cdot38\cdot37\cdot36}{5!} = 658008$$

#### Solution: Problem 02-11 - Wisconsin flag 2 of 3 days
**Problem:**
A kindergarten class hangs a random state flag (50 flags) on the wall every day. What is the probability that two days out of three given days have Wisconsin's flag?

**Solution:**
1. && Consider how the days are chosen.
    - Since we just want two days out three given days, it is unordered, so we account for this with the $\binom{3}{2}$ term.
2. && Consider the probability that Wisconsin's flag is hung on the first two days, and not the third.
    - The probability that Wisconsin's flag is hung up is $\frac{1}{50}$, and the probability it's any other flag is $\frac{49}{50}$.
    - Therefore, the desired probability is $\frac{1}{50}\cdot\frac{1}{50}\cdot\frac{49}{50}$.
3. & Combine terms.
    $$P(\text{two days out of three have Wisconsin's flag}) = \binom{3}{2}\cdot\frac{1}{50}\cdot\frac{1}{50}\cdot\frac{49}{50} = 0.001176$$

#### Solution: Problem 02-12 - Drawing balls of distinct color
**Problem:**
A bin contains 3 green and 4 yellow balls. Two balls are drawn out.

What is the probability that they are different colors?

**Solution:**
1. & Define relevant events.
    - If two balls of different colors are drawn out, then we choose one of each color.
    - Since order doesn't matter, our sample space consists of all the ways we choose 2 balls out of 7.
2. && Compute probability.
    $$P(\text{different colors}) = \frac{\binom{3}{1}\cdot\binom{4}{1}}{\binom{7}{2}} = \frac{4}{7}$$