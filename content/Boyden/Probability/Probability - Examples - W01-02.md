---
title: Examples - Unit 01
---
## Events and outcomes
#### 01 - Coin flipping
Flip a fair coin two times and record both results.
- *Outcomes:* sequences, like $HH$ or $TH$.

- *Sample space:* all possible sequences, i.e. the set $S = \{HH,\,HT,\,TH,\,TT\}$.
- *Events:* for example:
    - $A=\{HH,\, HT\}=\text{“first was heads”}$
    
    - $B=\{HT,\,TH\}=\text{“exactly one heads”}$
    - $C=\{HT,\,TH,\,HH\}=\text{“at least one heads”}$

With this setup, we may combine events in various ways to generate other events:
- *Complex events:* for example:
    - $A\cap B=\{HT\}$, or in words: $$\text{“first was heads”}\;\text{AND}\;\text{“exactly one heads”}=\text{“heads-then-tails”}$$
      Notice that the last one is a *complete description*, namely the *outcome* $HT$.

    - $A\cup B=\{HH,\,HT,\,TH\}$, or in words: $$\begin{gather*}\text{“first was heads”}\;\text{OR}\;\text{“exactly one heads”}\\=\text{“starts with heads, else it’s tails-then-heads”}\end{gather*}$$

#### 02 - Coin flipping: counting subsets
Flip a fair coin five times and record the results.

How many elements are in the sample space? (How big is $S$?)
How many events are there? (How big is $\mathcal{F}$?)

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#02%20-%20Coin%20flipping%20counting%20subsets)

## Probability models
#### 03 - Lucia is Host or Player
The professor chooses three students at random for a game in a class of 40, one to be Host, one to be Player, one to be Judge. What is the probability that Lucia is either Host or Player?

**Solution**
- &&& Set up the probability model.
    - Label the students $1$ to $40$. Write $L$ for Lucia’s number.

    - *Outcomes:* assignments such as $(H,P,J)=(2,5,8)$
      - These are ordered triples with *distinct* entries in $1,\,2,\,\dots,40$.
    - *Sample space:* $S$ is the collection of all such distinct triples
    - *Events:* any subset of $S$
    - *Probability measure*: assume all outcomes are equally likely, so $P[(i,j,k)]=P[(r,l,p)]$ for all $i,\,j,\,k,\,r,\,l,\,p$
    - In total there are $40\cdot 39\cdot 38$ triples of distinct numbers.
    - Therefore $P[(i,j,k)]=\frac{1}{40\cdot 39\cdot 38}$ for any *specific* outcome $(i,j,k)$.
    - Therefore $P[A]=\frac{|A|}{40\cdot 39\cdot 38}$ for any event $A$. (Recall $|A|$ is the *number* of outcomes in $A$.)

- && Define the desired event.
    - Want to find $P[\text{“Lucia is Host or Player”}]$

    - Define $A=\text{“Lucia is Host”}$ and $B=\text{“Lucia is Player”}$. Thus: $$A=\big\{(L,j,k)\mid \text{any } j,k\big\},\qquad B=\big\{(i,L,k)\mid \text{any } i,k\big\}$$
    - So we seek $P[A\cup B]$.
- &&& Compute the desired probability.
    - Importantly, $A\cap B=\emptyset$ (mutually exclusive).
      There are no outcomes in $S$ in which Lucia is *both* Host and Player.

    - By *additivity*, we infer $P[A\cup B]=P[A]+P[B]$.
    - Now compute $P[A]$.
        - There are $39\cdot 38$ ways to choose $j$ and $k$ from the students besides Lucia.

        - Therefore $|A|=39\cdot 38$.
        - Therefore: $$P[A]\quad ⨠⨠ \quad \frac{|A|}{40\cdot 39\cdot 38}\quad ⨠⨠ \quad \frac{39\cdot 38}{40\cdot 39\cdot 38}\quad ⨠⨠ \quad \frac{1}{40}$$
    - Now compute $P[B]$. It is similar: $P[B]=\frac{1}{40}$.
    - Finally compute that $P[A]+P[B]=\frac{1}{20}$, so the answer is: $$P[A\cup B]\quad ⨠⨠ \quad P[A]+P[B]\quad ⨠⨠ \quad \frac{1}{20}$$

#### 04 - iPhones and iPads
At Mr. Jefferson’s University, 25% of students have an iPhone, 30% have an iPad, and 60% have neither.

What is the probability that a randomly chosen student has *some* iProduct? (Q1)

What about *both*? (Q2)

**Solution**
- &&& Set up the probability model.
    - A student is chosen at random: an *outcome* is the chosen student.

    - *Sample space* $S$ is the set of all students.
    - Write $O=\text{“has iPhone”}$ and $A=\text{“has iPad”}$ concerning the chosen student.
    - All students are equally likely to be chosen: therefore $P[E]=\frac{|E|}{|S|}$ for any event $E$.
    - Therefore $P[O]=0.25$ and $P[A]=0.30$.
    - Furthermore, $P[O^c A^c]=0.60$. This means 60% have “not iPhone AND not iPad”.

- & Define the desired event.
    - Q1: $\text{desired event} = O\cup A$

    - Q2: $\text{desired event} = OA$
- &&& Compute the probabilities.
    - We do not believe $O$ and $A$ are exclusive.

    - Try: apply inclusion-exclusion: $$P[O\cup A]=P[O]+P[A]-P[OA]$$
    - We know $P[O]=0.25$ and $P[A]=0.30$. So this formula, with given data, RELATES Q1 and Q2.
    - Notice the complements in $O^cA^c$ and try *Negation*.
    - *Negation:* $$P[(OA)^c]=1-P[OA]$$
      DOESN’T HELP.
    - Try again: *Negation:* $$P[(O^cA^c)^c]=1-P[O^cA^c]$$
    - And De Morgan (or a Venn diagram!): $$(O^cA^c)^c\quad ⨠⨠ \quad O\cup A$$
    - Therefore: $$\begin{gather*}P[O\cup A]\quad ⨠⨠ \quad P[(O^cA^c)^c]\quad\\\\ ⨠⨠ \quad 1-P[O^cA^c]\quad ⨠⨠ \quad 1-0.6=0.4\end{gather*}$$
    - We have found Q1: $P[O\cup A]=0.40$.
    - Applying the RELATION from inclusion-exclusion, we get Q2: $$\begin{gather*}P[O\cup A]=P[O]+P[A]-P[OA]\\\\ ⨠⨠ \quad 0.40=0.25+0.30-P[OA]\\\\ ⨠⨠ \quad P[OA]=0.15\end{gather*}$$

## Conditional probability
#### 05 - Simplifying conditionals inclusion
Let $A\subset B$. Simplify the following values: $$P[A\mid B],\quad P[A\mid B^c],\quad P[B\mid A],\quad P[B\mid A^c]$$

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#07%20-%20Simplifying%20conditionals)

#### 06 - Coin flipping: at least 2 heads
Flip a fair coin 4 times and record the outcomes as sequences, like $HHTH$.

Let $A_{\geq 2}$ be the event that there are at least two heads, and $A_{\geq 1}$ the event that there is at least one heads.

First let’s calculate $P[A_{\geq 2}]$.

Define $A_2$, the event that there were exactly 2 heads, and $A_3$, the event of exactly 3, and $A_4$ the event of exactly 4. These events are exclusive, so: $$P[A_{\geq 2}]=P[A_2\cup A_3\cup A_4]\quad ⨠⨠ \quad P[A_2]+P[A_3]+P[A_4]$$
Each term on the right can be calculated by counting: 
$$\begin{align*}P[A_2]&= \frac{|A_2|}{2^4}\quad ⨠⨠ \quad \frac{4\choose2}{16}\quad ⨠⨠ \quad \frac{6}{16}\\\\ P[A_3] &= \frac{|A_3|}{2^4}\quad ⨠⨠ \quad \frac{4\choose1}{16}\quad ⨠⨠ \quad \frac{4}{16}\\\\ P[A_4]&= \frac{|A_4|}{2^4}\quad ⨠⨠ \quad \frac{4\choose0}{16}\quad ⨠⨠ \quad \frac{1}{16}\end{align*}$$

Therefore, $P[A_{\geq 2}]=\frac{11}{16}$.

Now suppose we find out that “at least one heads definitely came up”. (Meaning that we know $A_{\geq 1}$.) For example, our friend is running the experiment and tells us this fact about the outcome.

Now what is our estimate of likelihood of $A_{\geq 2}$?

The formula for conditioning gives: $$P[A_{\geq 2}\mid A_{\geq 1}]=\frac{P[A_{\geq 2}\cap A_{\geq 1}]}{P[A_{\geq 1}]}$$
Now $A_{\geq 2}\cap A_{\geq 1}=A_{\geq 2}$. (Any outcome with at least two heads automatically has at least one heads.) We already found that $P[A_{\geq 2}]=\frac{11}{16}$. To compute $P[A_{\geq 1}]$ we simply *add* the probability $P[A_1]$, which is $\frac{4}{16}$, to get $P[A_{\geq 1}]=\frac{15}{16}$.

Therefore: $$P[A_{\geq 2}\mid A_{\geq 1}]=\frac{11/16}{15/16}\quad ⨠⨠ \quad \frac{11}{15}$$

#### 07 - Multiplication: flip a coin, then roll dice
Flip a coin. If the outcome is heads, roll two dice and add the numbers. If the outcome is tails, roll a single die and take that number. What is the probability of getting a tails AND a number at least 3?

**Solution**
This “two-stage” experiment lends itself to a solution using the multiplication rule for conditional probability.

- & Label the events of interest.
    - Let $H$ and $T$ be the events that the coin showed heads and tails, respectively.
    - Let $A_1,\,\dots,\,A_{12}$ be the events that the final number is $1,\,\dots,\,12$, respectively.
    - The value we seek is $P[TA_{\geq 3}]$.
- & Observe known (conditional) probabilities.
    - We know that $P[H]=\frac{1}{2}$ and $P[T]=\frac{1}{2}$.
    - We know that $P[A_5\mid T]=\frac{1}{6}$, for example, or that $P[A_2\mid H]=\frac{1}{36}$.
- && Apply “multiplication” rule.
    - This rule gives: $$P[TA_{\geq 3}]=P[T]\cdot P[A_{\geq 3}\mid T]$$
    - We know $P[T]=\frac{1}{2}$ and can see by counting that $P[A_{\geq 3}\mid T]=\frac{2}{3}$.
    - Therefore $P[TA_{\geq 3}]=\frac{1}{3}$.

#### 08 - Multiplication: draw two cards
Two cards are drawn from a standard deck (without replacement).

What is the probability that the first is a 3, and the second is a 4?

**Solution**
This “two-stage” experiment lends itself to a solution using the multiplication rule for conditional probability.
- & Label events.
    - Write $T$ for the event that the first card is a 3
    - Write $F$ for the event that the second card is a 4.
    - We seek $P[TF]$.
- & Write down knowns.
    - We know $P[T]=\frac{4}{52}$. (It does not depend on the second draw.)
    - Easily find $P[F\mid T]$.
        - If the first is a 3, then there are four 4s remaining and 51 cards.
        - So $P[F\mid T]=\frac{4}{51}$.
- & Apply multiplication rule.
    - Multiplication rule: $$\begin{align*}P[TF]&= P[T]\cdot P[F\mid T]\\\\ P[TF] &= \frac{4}{52}\cdot \frac{4}{51}\quad ⨠⨠ \quad \frac{4}{13\cdot 51}\end{align*}$$
    - Therefore $P[TF]=\frac{4}{663}$

#### 09 - Marble transferred, marble drawn
Setup:
- Bin 1 holds five red and four green marbles.
- Bin 2 holds four red and five green marbles.

Experiment:
- You take a random marble from Bin 1 and put it in Bin 2 and shake Bin 2.
- Then you draw a random marble from Bin 2 and look at it.

What is the probability that the marble you look at is red?

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#09%20-%20Division%20into%20Cases)

## Bayes’ Theorem
#### 10 - Bayes’ Theorem: COVID tests
Assume that 0.5% of people have COVID. Suppose a COVID test gives a (true) positive on 96% of patients who have COVID, but gives a (false) positive on 2% of patients who do not have COVID. Bob tests positive. What is the probability that Bob has COVID?

**Solution**
- & Label events.
    - Event $A_P$: Bob is actually positive for COVID
    - Event $A_N$: Bob is actually negative; note $A_N=A_P^c$
    - Event $T_P$: Bob tests positive
    - Event $T_N$: Bob tests negative; note $T_N=T_P^c$
- && Identify knowns.
    - Know: $\;P[T_P\mid A_P]=96\%$
    - Know: $\;P[T_P\mid A_N]=2\%$
    - Know: $\;P[A_P]=0.5\%$ and therefore $\;P[A_N]=99.5\%$
    - We seek: $\;P[A_P\mid T_P]$
- ! Translate Bayes’ Theorem.
    - Using $A=T_P$ and $B=A_P$ in the formula: $$P[A_P\mid T_P] = P[A_P]\cdot \frac{P[T_P\mid A_P]}{P[T_P]}$$
    - We know all values on the right except $P[T_P]$
- !! Use Division into Cases.
    - Observe: $$T_P=T_P\cap A_P \;\bigcup\; T_P\cap A_N$$
    - Division into Cases yields: $$P[T_P]=P[A_P]\cdot P[T_P\mid A_P]+P[A_N]\cdot P[T_P\mid A_N]$$
    - !!! Important to notice this technique!
        - It is a common element of Bayes’ Theorem application problems.
        - It is frequently needed *for the denominator*.
    - Plug in data and compute: $$⨠⨠\quad P[T_P]= \frac{5}{1000}\cdot \frac{96}{100} + \frac{995}{1000}\cdot \frac{2}{100}\quad ⨠⨠ \quad \approx 0.0247$$
- & Compute answer.
    - Plug in and compute: $$\begin{gather*}P[A_P\mid T_P] = P[A_P]\cdot \frac{P[T_P\mid A_P]}{P[T_P]}\\\\ ⨠⨠ \quad 0.96\cdot \frac{0.005}{0.0247}\quad ⨠⨠ \quad \approx 19\%\end{gather*}$$

#### 11 - Inferring bin from marble
There are marbles in bins in a room:
- Bin 1 holds 7 red and 5 green marbles.
- Bin 2 holds 4 red and 3 green marbles.

Your friend goes in the room, shuts the door, and selects a random bin, then draws a random marble. (Equal odds for each bin, then equal odds for each marble in that bin.) He comes out and shows you a red marble.

What is the probability that this red marble was taken from Bin 1?

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#11%20-%20Inferring%20bin%20from%20marble)

## Independence
#### 12 - Independence and complements
Prove that these are logically equivalent statements: 
- $A$ and $B$ are independent
- $A$ and $B^c$ are independent
- $A^c$ and $B^c$ are independent

Make sure you demonstrate both directions of each equivalency.

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#12%20-%20Independence%20and%20complements)

#### 13 - Independence by hand: red and green marbles
A bin contains 4 red and 7 green marbles. Two marbles are drawn.

Let $R_1$ be the event that the first marble is red, and let $G_2$ be the event that the second marble is green.

- (a) Show that $R_1$ and $G_2$ are independent if the marbles are drawn *with replacement*.
- (b) Show that $R_1$ and $G_2$ are not independent if the marbles are drawn *without replacement*.

**Solution**
(a) With replacement.
- & Identify knowns.
    - Know: $\;P[R_1]=\frac{4}{11}$
    - Know: $\;P[G_2]=\frac{7}{11}$
- & Compute both sides of independence relation.
    - Relation is $P[R_1G_2]=P[R_1]\cdot P[G_2]$
    - Right side is $\frac{4}{11}\cdot\frac{7}{11}$
    - For $P[R_1G_2]$, have $4\cdot 7$ ways to get $R_1G_2$, and $11^2$ total outcomes.
    - So left side is $\frac{4\cdot 7}{11^2}$, which equals the right side.

(b) Without replacement.
- & Identify knowns.
    - Know: $\;P[R_1]=\frac{4}{11}$ and therefore $P[R_1^c]=\frac{7}{11}$
    - We seek: $\;P[G_2]$ and $P[R_1G_2]$
- && Find $P[G_2]$ using Division into Cases.
    - Division into cases: $$G_2=G_2\cap R_1\;\bigcup\;G_2\cap R_1^c$$
    - Therefore: $$P[G_2]=P[R_1]\cdot P[G_2\mid R_1]+P[R_1^c]\cdot P[G_2\mid R_1^c]$$
    - Find these by counting and compute: $$⨠⨠ \quad P[G_2]=\frac{4}{11}\cdot\frac{7}{10}+\frac{7}{11}\cdot\frac{6}{10}\quad ⨠⨠ \quad \frac{70}{110}$$
- & Find $P[R_1G_2]$ using Multiplication rule.
    - Multiplication rule (implicitly used above already): $$P[R_1G_2]=P[R_1]\cdot P[G_2\mid R_1]\quad ⨠⨠ \quad \frac{4}{11}\cdot\frac{7}{10}\quad ⨠⨠ \quad \frac{28}{110}$$
- & Compare both sides.
    - Left side: $P[R_1G_2]=\frac{28}{110}$
    - Whereas, right side: $$P[R_1]\cdot P[G_2]=\frac{4}{11}\cdot \frac{70}{110}=\frac{28}{121}$$
    - But $\frac{28}{110}\neq \frac{28}{121}$ so $P[R_1G_2]\neq P[R_1]\cdot P[G_2]$ and they are *not independent.*

## Tree diagrams
#### 14 - Marble transferred, marble drawn
Setup:
- Bin 1 holds five red and four green marbles.
- Bin 2 holds four red and five green marbles.

Experiment:
- You take a random marble from Bin 1 and put it in Bin 2 and shake Bin 2.
- Then you draw a random marble from Bin 2 and look at it.

Questions:
- (a) What is the probability you *draw* a red marble?
- (b) Supposing that you drew a red marble, what is the probability that a red marble was *transferred*?

**Solution**
- &&& Construct the tree diagram.
    - Identify sub-experiments, label events, compute probabilities: ![350](Pasted%20image%2020250121175439.png)
- & For (a), compute $P[D_R]$.
    - Add up leaf numbers for $D_R$ at leaf: $$P[D_R]=\frac{25}{90}+\frac{16}{90}=\frac{41}{90}$$
- & For (b), compute $P[T_R\mid D_R]$.
    - Conditional probability: $$P[T_R\mid D_R]=\frac{P[T_R D_R]}{P[D_R]}$$
    - Plug in data and compute: $$⨠⨠ \quad \frac{25/90}{41/90}\quad ⨠⨠ \quad \frac{25}{41}$$
    - Interpretation: mass of desired pathway over mass of possible pathways.

## Counting

#### 15 - Counting teams with Cooper
A team of 3 student volunteers is formed at random from a class of 40. What is the probability that Cooper is on the team?

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#15%20-%20Counting%20teams%20with%20Cooper)

#### 16 - Haley and Hugo from 2 groups of 3
The class has 40 students. Suppose the professor chooses 3 students Wednesday at random, and again 3 on Friday. What is the probability that Haley is chosen today and Hugo on Friday?

**Solution**
- & Count total outcomes.
    - Have $40\choose 3$ possible groups chosen Wednesday.
    - Have $40\choose 3$ possible groups chosen Friday.
    - Therefore ${40\choose 3} \times {40\choose 3}$ possible groups in total.
- && Count desired outcomes.
    - Groups of 3 with Haley are same as groups of 2 taken from others.
    - Therefore have $39\choose 2$ groups that contain Haley.
    - Have $39\choose 2$ groups that contain Hugo.
    - Therefore ${39\choose 2}\times {39\choose 2}$ total desired outcomes.
- && Compute probability.
    - Let $E$ label the desired event.
    - Use formula: $$P[E]=\frac{|E|}{|S|}$$
    - Therefore: $$\begin{gather*}P[E]\quad ⨠⨠ \quad \frac{{39\choose 2}\times {39\choose 2}}{{40\choose 3} \times {40\choose 3}}\\\\ ⨠⨠ \quad \left(\frac{\frac{39\cdot 38}{2!}}{\frac{40\cdot 39\cdot 38}{3!}}\right)^2 \quad ⨠⨠ \quad  \left(\frac{3}{40}\right)^2\end{gather*}$$

#### 17 - Counting VA license plates
A VA license plate has three letters (with no I, O, or Q) followed by four numerals. A random plate is seen on the road.

- (a) What is the probability that the numerals are in increasing order?
- (b) What is the probability that at least one number is repeated?

**Solution**
(a)
- & Count ways to have 4 numerals in increasing order.
    - Any four distinct numerals have a single order that’s increasing.
    - There are $\displaystyle{10\choose 4}$ ways to choose 4 numerals from 10 options.
- & Count ways to have 3 letters in order except I, O, Q.
    - 26 total letters, 3 excluded, thus 23 options.
    - Repetition allowed, thus $23\cdot 23\cdot 23=23^3$ possibilities.
- & Count total plates with increasing numerals.
    - Multiply the options: $$23^3\cdot {10\choose 4}$$
- & Count total plates.
    - Have $23\cdot 23\cdot 23$ options for letters.
    - Have $10\cdot 10\cdot 10\cdot 10$ options for numbers.
    - Thus $23^3\cdot 10^4$ possible plates.
- & Compute probability.
    - Let $E$ label the event that a plate has increasing numerals.
    - Use the formula: $$P[E]=\frac{|E|}{|S|}$$
    - Therefore: $$P[E]\quad ⨠⨠ \quad \frac{23^3\cdot {10\choose 4}}{23^3\cdot 10^4}\quad ⨠⨠ \quad \frac{\frac{10!}{4!6!}}{10000}\quad ⨠⨠ \quad \frac{21}{1000}$$

(b)
- && Count plates with at least one number repeated.
    - ! “At least” is hard! Try *complement*: “no repeats”.
    - Let $E^c$ be event that *no* numbers are repeated. All distinct.
    - Count possibilities: $$|E^c| = 23\cdot 23\cdot 23\cdot 10\cdot 9\cdot 8\cdot 7$$
    - Total license plates is still $23^3\cdot 10^4$.
    - Therefore, license plates with *at least one number repeated*: $$\begin{gather*}|E| = |S|-|E|\\\\ ⨠⨠ \quad  23^3\cdot 10^4 - 23^3\cdot 10\cdot 9\cdot 8\cdot 7\quad ⨠⨠ \quad 60348320\end{gather*}$$
- & Compute probability.
    - Desired outcomes over total outcomes: $$\frac{|E|}{|S|}\quad ⨠⨠ \quad \frac{60348320}{23^3\cdot 10^4}\quad ⨠⨠ \quad 0.496$$

#### 18 - Counting out 4 teams
A board game requires 4 teams of players. How many configurations of teams are there out of a total of 17 players if the number of players per team is 4, 4, 4, 5, respectively.

[Solutions](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#18%20-%20Counting%20out%203%20teams)
