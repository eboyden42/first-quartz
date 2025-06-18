#### 01 - Sample space - roll a die, flip a coin
A normal $6$-sided die is cast, and then a coin is flipped. All results are recorded.
- (a) Define a sample space for this experiment.
- (b) How many possible *events* are there?

**Solution**
**(a)**
1. & Describe the sample space.
    - Since there are 6 possible results of rolling a die, and $2$ possible results of a coin flip, our sample space has $12$ elements.
2. & Use set builder notation to describe the sample space $\Omega$. $$\Omega = \{(i, j): i\in\{1, \dots, 6\}, j\in\{H, T\}\}$$

**(b)**
1. ! Note that the number of possible events amount to counting how many subsets there are of $\Omega$. In other words, we are asked to compute $|\mathcal{P}(\Omega)|$.
2. & Compute $|\mathcal{P}(\Omega)|$. $$|\mathcal{P}(\Omega)| = 2^{|\Omega|} = 2^{12} = 4096$$

#### 02 - Sample space - roll a die then flip coin(s)
A normal $6$-sided die is cast. If the result is even, flip a coin two times; if the result is odd, flip a coin one time. All results are recorded.
- (a) Define a sample space for this experiment.
- (b) How many possible *events* are there?

**Solution**
**(a)**
1. && Divide the sample space into two disjoint sets.
    - Denote $\Omega_{1}$ as the sample space where the result of the die is even.
    - Denote $\Omega_{2}$ as the sample space where the result of the die is odd.
    - $\Omega = \Omega_{1} \cup \Omega_{2}$.
2. & Describe $\Omega_{1}$.
    - There are $3$ even numbers on a die, and $2$ possible results of each coin flip. Since coin flips are independent $\Omega_{1}$ has $3 \cdot 2^{2} = 12$ elements.
3. & Write $\Omega_{1}$ using set builder notation. $$\Omega_{1} = \{(i, j, k): i \in \{2, 4, 6\}, j, k\in\{H, T\}\}$$
4. & Describe $\Omega_{2}$.
    - There are $3$ odd numbers on a die, and 2 possible results of a coin flip. $\Omega_{2}$ has $3 \cdot 2$ elements. 
5. & Write $\Omega_{2}$ using set builder notation. $$\Omega_{2} = \left\{(i, j): i \in \{1, 3, 5\}, j \in \{H, T\}\right\}$$
6. & Describe $\Omega$.
    - As above, $\Omega = \Omega_{1} \cup \Omega_{2} = \{(i_{1}, j_{1}), (i_{2}, j_{2}, k) : i_{1} \in \{1, 3, 5\}, i_{2} \in \{2, 4, 6\}, j_{1}, j_{2}, k \in \{H, T\}\}$.
    - Since $\Omega_{1}$ and $\Omega_{2}$ are disjoint, $|\Omega| = |\Omega_{1}| + |\Omega_{2}| = 12 + 6 = 18$.

**(b)**
1. ! Note that the number of possible events amount to counting how many subsets there are of $\Omega$. In other words, we are asked to compute $|\mathcal{P}(\Omega)|$.
2. & Compute $|\mathcal{P}(\Omega)|$. $$|\mathcal{P}(\Omega)| = 2^{|\Omega|} = 2^{18} = 262144$$

#### 03 - Events - descriptions to sets
You are modelling quality assurance for cars coming off an assembly line. They are either good (G) or broken (B). You watch 4 cars come off and record their status as a sequence of these letters, for example 'GGBG'.

Determine the *sets* defined by the events having the following descriptions:
- (a) ''third car is broken''
- (b) ''all cars have the same status''
- (c) ''at least one car is broken''
- (d) ''no consecutive cars have the same status''

**Solution**
**(a)**
1. & Since only the third car is broken, and the other three cars can have any status, the relevant set $S_{1}$ is $$S_{1} = \left\{abcd \in \{G, B\}^{4}: c= B\right\}$$

**(b)**
1. & In this case, either all cars are good or all cars are broken. Therefore, the relevant set $S_{2}$ is $$S_{2} = \left\{abcd \in \{G, B\}^{4} : a= b= c= d\right\}$$

**(c)** 
1. & In this scenario, the only combination not in the relevant set is 'GGGG'. Therefore, $$S_{3} = \left\{abcd \in \{G, B\}^{4}: abcd \neq GGGG\right\}$$

**(d)**
1. & In this scenario, given two cars $a_{i}$ and $a_{i + 1}$, $a_{i} \neq a_{i + 1}$. Therefore, $$S_{4} = \left\{a_{1}a_{2}a_{3}a_{4} \in \{G, B\}^{4}: a_{i} \neq a_{i + 1}, i \in \{1, 2, 3\}\right\}$$

#### 04 - Venn diagrams - sets rules and Kolmogorov additivity
Suppose we know three probabilities of events: $P[A] = 0.4$, $P[B] = 0.3$ and $P[A \cap B] = 0.1$.

Calculate: $P[A \cup B], P\left[A^{c}\right], P\left[B^{c}\right], P\left[A \cap B^{c}\right]$, and $P\left[(A \cap B)^{c}\right]$.

**Solution**
1. && $P[A \cup B]$ is computed by directly applying the inclusion-exclusion principle. $$P[A \cup B] = P[A] + P[B] - P[A \cap B] = 0.4+ 0.3 - 0.1 = 0.6 $$
2. & $$P\left[A^{c}\right] = 1- P[A] = 1- 0.4= 0.6$$
3. & $$P\left[B^{c}\right] = 1- P[B] = 1- 0.3 = 0.7$$
4. && We can express $P[A]$ as $P[A \cap B] + P\left[A \cap B^{c}\right]$. Therefore, $$P\left[A \cap B^{c}\right] = P[A] - P[A \cap B] = 0.4 - 0.1 = 0.3$$
5. &  $$P\left[(A \cap B)^{c}\right] = 1 - P[A \cap B] = 1 - 0.1 = 0.9$$

#### 05 - Inclusion-exclusion reasoning.
Your friend says: "according to my calculations, the probability of $A$ is $0.5$ and the probability of $B$ is $0.7$, but the probability of $A$ and $B$ both happening is only $0.001$."

You tell your friend they don't understand probability. Why?

**Solution**
1. & State the inclusion-exclusion principle. $$P(A \cup B) = P(A) + P(B) - P(A \cap B)$$
2. & Examine possibilities based on given values.
    - Given that $P(A)$ is $0.5$ and $P(B)$ is $0.7$, we have that $P(A) + P(B) = 1.2$.
    - Since $P(A \cup B) \leq 1$, we know that $P(A \cap B) \geq 0.2$.
    - Therefore, $P(A \cap B) \neq 0.001$.

#### 06 - Inclusion-exclusion reasoning.
Suppose $P(A) = 0.4$ and $P(B) = 0.7$. Show that $0.1 \leq P(AB) \leq 0.4$.

**Solution**
1. & State the inclusion-exclusion principle. $$P(A \cup B) = P(A) +P(B) - P(A \cap B)$$
2. & Examine the maximum value of $P(A \cup B)$.
    - We know that $P(A \cup B) \leq 1$. 
    - Given that $P(A) = 0.4$ and $P(B) = 0.7$, $P(AB) \geq 0.1$.
3. & Examine the minimum value of $P(A \cup B)$.
    - The minimum value of $P(A \cup B)$ is the maximum of the individual values.
    - $\min P(A \cup B) = \max\left(P(A), P(B)\right) = 0.7$.
    - Therefore, $P(AB) \leq 0.4$.

#### 07 - At least two heads from three flips
A coin is flipped three times.

What is the probability that at least two heads appear?

**Solution**
1. & Describe the sample size of this experiment. $$\Omega = \{H, T\}^{3}$$
2. & Find the probability that at least two heads appear.
    - The sequences of flips that contain at least two heads are $HHT$, $HHH$, $HTH$, $THH$.
    - We know that $|\Omega| = 2^{3} = 8$, thus $$P(\text{at least two heads appear}) = \frac{4}{8} = \frac{1}{2}$$
#### 08 - Conditioning - restrict to 4th-year students
What is the likelihood that a randomly chosen 4th year student passed the test? What about for 1st-year students?

**Solution**
1. & We are asked to compute $P(\text{pass}\mid \text{4th})$. Set up the conditional probability formula. $$P(\text{pass}\mid\text{4th}) = \frac{P(\text{pass }\cap \text{ 4th})}{P(\text{4th})}$$
2. & We have from the table that $P(\text{pass }\cap \text{ 4th}) = 0.160$ and $P(\text{4th}) = 0.160 + 0.010 = 0.170$. Therefore, $$P(\text{pass}\mid\text{4th}) = \frac{P(\text{pass }\cap \text{ 4th})}{P(\text{4th})} = \frac{0.160}{0.170} \approx 0.9412$$
3. & For 1st-year students, we have $$P(\text{pass}\mid\text{1st}) = \frac{P(\text{pass }\cap \text{ 1st})}{P(\text{1st})} = \frac{0.155}{0.155 + 0.025} \approx 0.8611$$

#### 09 - Conditioning - two dice, at least one if 5
Two dice are rolled, and at least one is a 5.

What is the probability that their sum is 10?

**Solution**
1. & Let $D_{1}$ be the outcome of the first die and $D_{2}$ be the outcome of the second die. We are asked to compute $$P(D_{1}+D_{2} = 10\mid D_{1}=5\cup D_{2}= 5) = \frac{P(D_{1} + D_{2} = 10 \cap (D_{1} = 5 \cup D_{2} = 5))}{P(D_{1} = 5 \cup D_{2} = 5)}$$
2. && Compute individual probabilities. 
    - There is only one combination out of the 36 possible combinations of two dice rolls in which at least 1 die rolls a 5 and both sum up to 10 (5, 5).
    - There are  $2 \cdot 6 - 1 = 11$ combinations of dice rolls in which at least one is a $5$.
3. & Plug into formula. $$P(D_{1}+D_{2}=10\mid D_{1}  = 5 \cup D_{2} = 5) = \frac{\frac{1}{36}}{\frac{11}{36}} = \frac{1}{11}$$

#### 10 - Conditioning - two dice, differing numbers.
Two dice are rolled, and the outcomes are different.

What is the probability of getting at least one $1$?

**Solution**
1. & Let $D_{1}$ be the outcome of the first die and $D_{2}$ be the outcome of the second die. We are asked to compute $$P(D_{1} =1\cup D_{2} = 1 \mid D_{1} \neq D_{2}) = \frac{P((D_{1} = 1 \cup D_{2} = 1)\cap D_{1} \neq D_{2})}{P(D_{1} \neq D_{2})}$$
2. && Compute individual probabilities.
    - There are $2 \cdot 6 - 1 = 11$ combinations in which at least one die rolled a $1$. Since one of these combinations is $(1, 1)$, we have 10 combinations in which the outcomes are unequal.
    - There are $36 - 6 = 30$ combinations in which the outcome of the two dice differ.
3. & Plug into formula. $$P(D_{1} = 1\cup D_{2} = 1) \mid D_{1} \neq D_{2}) = \frac{\frac{10}{36}}{\frac{30}{36}} = \frac{1}{3}$$

#### 11 - Multiplication - drawing two hearts 
Two cards are drawn from a standard deck (without replacement).

- (a) What is the probability that both are hearts?
- (b) What is the probability that both are $4$?

**Solution**
**(a)**
1. & Let $C_{1}$ be the outcome of the first card, $C_{2}$ be the outcome of the second card, and $H$ denote "hearts". Since there are 52 cards in a standard deck with 13 of them being hearts, we have $$P(C_{1} = H \cap C_{2} = H) = \frac{13}{52} \cdot \frac{12}{51} = \frac{1}{17}$$

**(b)**
1. & Similarly to part (a), we have $$P(C_{1} = 4 \cap C_{2} = 4) = \frac{4}{52}\cdot\frac{3}{51} = \frac{1}{221}$$

- ! End

