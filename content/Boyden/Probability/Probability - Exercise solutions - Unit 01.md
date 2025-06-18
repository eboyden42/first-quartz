---
title: Exercise solutions - Unit 01
---
## Events and outcomes
#### 02 - Coin flipping: counting subsets
There are $2^5=32$ possible sequences, so $|S|=32$.

To count the number of possible subsets, consider that we have 32 distinct items, and a subset is uniquely determined by the binary information – for each item – of whether it is in or out. Thus there are $2^{32}$ possibilities. So $|\mathcal{F}|=2^{32}$.

## Conditional probability
#### 07 - Simplifying conditionals
- $P[A\mid B]$
    - Definition of ‘conditional’: $\;P[A\mid B]=\frac{P[A\cap B]}{P[B]}$
    - The problem assumes that $A\subset B$. Therefore $A\cap B=A$.
    - Therefore, answer: $\;\frac{P[A]}{P[B]}$.
- $P[A\mid B^c]$
    - Definition of ‘conditional’: $\;P[A\mid B^c]=\frac{P[A\cap B^c]}{P[B^c]}$
    - Since $A\subset B$, we know $A\cap B^c=\emptyset$.
    - Therefore $P[A\cap B^c]=0$ and answer $=0$.
- $P[B\mid A]$
    - Definition of ‘conditional’: $\;P[B\mid A]=\frac{P[B\cap A]}{P[A]}$
    - Since $A\subset B$, we have $B\cap A=A$.
    - Therefore, answer $=1$.
- $P[B\mid A^c]$
    - Definition of ‘conditional’: $\;P[B\mid A^c]=\frac{P[B\cap A^c]}{P[A^c]}$
    - There is no way to simplify further.
    - We could write $P[A^c]=1-P[A]$ if desired.

#### 09 - Division into Cases
1. & Label events.
    - Event $T_R$: a red marble is transferred
    - Event $T_G$: a green marble is transferred
    - Event $D_R$: a red marble is drawn from Bin 2
    - Event $D_G$: a green marble is drawn from Bin 2
    - Answer will be $P[D_R]$.
2. !! Division into Cases.
    - General formula: $P[B] = P[A]\cdot P[B\mid A] + P[A^c]\cdot P[B\mid A^c]$
    - We seek $P[D_R]$, use $\;B\quad ⨠⨠ \quad D_R$
    - Use $A\quad ⨠⨠ \quad T_R$ and therefore $A^c\quad ⨠⨠ \quad T_G$
    - So we use: $$P[D_R]=P[T_R]\cdot P[D_R\mid T_R]+P[T_G]\cdot P[D_R\mid T_G]$$
3. && Plug in data and compute the answer.
    - Know $\;P[T_R]=5/9$
    - Know $\;P[T_G]=4/9$
    - Know $\;P[D_R\mid T_R]=5/10$
    - Know $\;P[D_R\mid T_G]=4/10$
    - Therefore: $$P[D_R]\quad ⨠⨠ \quad \frac{5}{9}\cdot\frac{5}{10}+\frac{4}{9}\cdot\frac{4}{10}=\frac{41}{90}$$

#### 11 - Inferring bin from marble
1. & Label events.
    - Event $B_1$: friend chooses Bin 1
    - Event $B_2$: friend chooses Bin 2
    - Event $R$: friend draws a red marble
    - Event $G$: friend draws a green marble
    - Answer will be $P[B_1\mid R]$
2. && Identify knowns.
    - Know $\;P[R\mid B_1]=7/12$
    - Know $\;P[G\mid B_1]=5/12$
    - Know $\;P[R\mid B_2]=4/7$
    - Know $\;P[G\mid B_2]=3/7$
    - Know $\;P[B_1]=P[B_2]=1/2$
3. !! Translate Bayes’ Theorem
    - Bayes’ Theorem for $P[B_1\mid R]$: $$P[B_1\mid R]=P[R\mid B_1]\cdot\frac{P[B_1]}{P[R]}$$
    - Division into Cases for the denominator: $$P[R]=P[B_1]\cdot P[R\mid B_1]+P[B_2]\cdot P[R\mid B_2]$$
4. && Plug in data and compute the answer.
    - Denominator: $$P[R]\quad ⨠⨠ \quad \frac{1}{2}\cdot\frac{7}{12}+\frac{1}{2}\cdot\frac{4}{7}\quad ⨠⨠ \quad \frac{97}{168}$$
    - Desired event: $$P[B_1\mid R]\quad ⨠⨠ \quad \frac{7}{12}\cdot\frac{1/2}{97/168}\quad ⨠⨠ \quad \frac{49}{97}$$

#### 12 - Independence and complements
(1) We show that $P[AB]=P[A]\cdot P[B]\iff P[AB^c]=P[A]\cdot P[B^c]$ 
1. &&& Assume $P[AB]=P[A]\cdot P[B]$ and show $P[AB^c]=P[A]\cdot P[B^c]$.
    - Divide $A$ into the $B$ cases: $$P[A]=P[AB]+P[AB^c]$$
    - Apply the assumption: $$⨠⨠ \quad P[A] = P[A]\cdot P[B]+P[AB^c]$$
    - Algebra: $$⨠⨠ \quad P[A]\big(1-P[B]\big)=P[AB^c]$$
    - Negation rule: $$⨠⨠ \quad P[A]\cdot P[B^c]=P[AB^c]$$
2. & Assume $P[AB^c]=P[A]\cdot P[B^c]$ and show $P[AB]=P[A]\cdot P[B]$
    - !! In the above sequence, apply *this* assumption to break up the *second* term instead.

(2)
 1. & Show that $P[AB^c]=P[A]\cdot P[B^c]$ and $P[A^cB^c]=P[A^c]\cdot P[B^c]$ are equivalent.
    - ! In the first equivalence, replace $A$ with $B^c$ and $B$ with $A$. Use $AB=BA$ too.

## Counting
#### 15 - Counting teams with Cooper
There are $\begin{pmatrix} 39 \\ 2 \end{pmatrix}$ teams that include Cooper, and $\begin{pmatrix} 40 \\ 3 \end{pmatrix}$ teams in total. So we have: 
$$P=\frac{39!}{2!37!} \bigg/ \frac{40!}{3!37!}=\frac{3}{40}$$



#### 18 - Counting out 3 teams
This is just the multinomial coefficient with this data:

| $n$ | $r_1$ | $r_2$ | $r_3$ | $r_4$ |
| :-: | :---: | :---: | :---: | :---: |
| 17  |   4   |   4   |   4   |   5   |
So we have: $$\#\text{teams} = \frac{n!}{r_1!\,r_2!\,r_3!\,r_4!} \quad ⨠⨠ \quad \frac{17!}{4!\, 4!\, 4!\, 5!}\quad ⨠⨠ \quad 214414200$$
## Expectation and variance
#### 27 - Gambling game - tokens in bins
1. & Setup.
    - Let $X$ be a random variable measuring your winnings in the game.
    - The possible values of $X$ are 1, 50, and 1000.
2. && Find PDF $P_X(k)$.
    - For $k=1$ have $P_X(1)=\frac{1}{2}\cdot\frac{9}{10}+\frac{1}{2}\cdot\frac{5}{10}\quad ⨠⨠ \quad \frac{7}{10}$
    - For $k=50$ have $P_X(50)=\frac{1}{2}\cdot\frac{5}{10}\quad ⨠⨠ \quad \frac{1}{4}$
    - For $k=1000$ have $P_X(1000)=\frac{1}{2}\cdot\frac{1}{10}\quad ⨠⨠ \quad \frac{1}{20}$
    - These add to 1, and $P_X(x)=0$ for all other $x$.
3. && Find $E[X]$.
    - Using the discrete formula: $$\begin{gather*}E[X]=\sum_{k}k\cdot P_X(k)\quad ⨠⨠ \quad 1\cdot P_X(1)+50\cdot P_X(50)+1000\cdot P_X(1000)\\\\ ⨠⨠ \quad 1\cdot\frac{7}{10}+50\cdot\frac{1}{4}+1000\cdot\frac{1}{20}\quad ⨠⨠ \quad \approx 63.2\end{gather*}$$
4. & Conclusion
    - Since $63.2>50$, if you play it a lot at \$50 you will generally make money.
- Challenge Q:
    - If you start with \$200 and keep playing to infinity, how likely is it that you go broke?

## Function on a random variable
#### 36 - Probabilities via CDF
(a)
$$F_X(1)=\frac{1}{1+e^{-1}}\quad ⨠⨠ \quad \approx 0.731$$

(b)
Same as (a) because $P[X=1]=0$ (single point in a continuous distribution).

(c)
$$F_X(0.2)-F_X(-0.5)\quad ⨠⨠ \quad \frac{1}{1+e^{-0.2}}-\frac{1}{1+e^{0.5}}\quad ⨠⨠ \quad \approx 0.172$$

(d)
$$1-F_X(-2)\quad ⨠⨠ \quad 1-\frac{1}{1+e^2}\quad ⨠⨠ \quad \approx 0.881$$




