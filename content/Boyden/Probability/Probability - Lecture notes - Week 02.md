---
cssclasses:
  - hide-embedded-header
title: Week 02 notes
---
## Bayes’ Theorem
### 01 Theory

> [!concept] Bayes’ Theorem
> For any events $A$ and $B$: $$P[B\mid A]=P[B]\cdot \frac{P[A\mid B]}{P[A]}$$

- !! Bayes’ Theorem is sometimes called Bayes’ Rule.

> [!extra] Bayes’ Theorem - Derivation
> Start with the observation that $AB=BA$, or event “$A$ AND $B$” equals event “$B$ AND $A$”.
> 
> Apply the *multiplication rule* to each of order: $$\begin{align*}P[AB]&= P[A]\cdot P[B\mid A]\\\\ P[BA]&= P[B]\cdot P[A\mid B]\end{align*}$$
> 
> Equate them and rearrange: $$\begin{align*}P[AB]=P[BA]\quad ⨠⨠&\quad P[A]\cdot P[B\mid A]= P[B]\cdot P[A\mid B]\\\\ ⨠⨠& \quad P[B\mid A]=P[B]\cdot\frac{P[A\mid B]}{P[A]}\end{align*}$$

The main application of Bayes’ Theorem is to calculate $P[A\mid B]$ when it is easy to calculate $P[B\mid A]$ from the problem setup. Often this occurs in **multi-stage experiments** where event $A$ describes outcomes of an intermediate stage.

Note: these notes use *alphabetical order* $A$, $B$ as a mnemonic for *temporal or logical order*, i.e. that $A$ comes *first* in time, or that otherwise that $A$ is the *prior* conditional from which it is easier to calculate $B$.

### 02 Illustration

> [!mexample] Example - Bayes’ Theorem - COVID tests
> ![10 - Bayes’ Theorem: COVID tests](Probability%20-%20Examples%20-%20W01-02.md#10%20-%20Bayes’%20Theorem%20COVID%20tests)

%%  %%
> [!tip] Intuition - COVID testing
> Some people find the low number surprising. In order to repair your intuition, think about it like this: roughly 2.5% of tests are positive, with roughly 2% coming from *false* positives, and roughly 0.5% from *true* positives. The true ones make up only $1/5$ of the positive results!
> 
> (This rough approximation is by assuming $96\%=100\%$.)
> 
> If *two* tests both come back positive, the odds of COVID are now 98%.
> 
> If *only people with symptoms* are tested, so that, say, 20% of those tested have COVID, that is, $P[A_P\mid T_P]=20\%$, then one positive test implies a COVID probability of 92%.

%%  %%
> [!exercise] Exercise - Bayes’ Theorem and Multiplication: Inferring bin from marble
> ![11 - Inferring bin from marble](Probability%20-%20Examples%20-%20W01-02.md#11%20-%20Inferring%20bin%20from%20marble)

%% Skipped Bayesian Reasoning, “Inference to an Explanation” in Packet 03 %%

## Independence

### 03 Theory
Two events are independent when information about one of them does not change our probability estimate for the other. Mathematically, there are three ways to express this fact:

> [!concept] Independence
> Events $A$ and $B$ are **independent** when these (logically equivalent) equations hold: 
> - $P[B\mid A] = P[B]$
> - $P[A\mid B] = P[A]$
> - $P[BA]=P[B]\cdot P[A]$

- ! The last equation is symmetric in $A$ and $B$.
    - Check: $\;BA=AB\;$ and $\;P[B]\cdot P[A]=P[A]\cdot P[B]$
    - This symmetric version is the preferred definition of the concept.

> [!extra] Multiple-independence
> A *collection* of events $A_1,\,\dots,\,A_n$ is **mutually independent** when every subcollection $A_{i_1},\,\dots,\,A_{i_k}$ satisfies: 
> $$
> P[A_{i_1}\cdots A_{i_k}] = P[A_{i_1}]\cdots P[A_{i_k}]
> $$
> 
> A potentially *weaker condition* for a collection $A_1,\dots,A_n$ is called **pairwise independence**, which holds when all 2-member subcollections are independent: 
> $$P[A_iA_j]=P[A_i]\cdot P[A_j]\quad \text{for all}\; i\neq j$$
> 
> One could also define $3$-member independence, or $n$-member independence. Plain ‘independence’ means *any*-member independence.

%% Skipping conditional independence, see Packet 03. %%

### 04 Illustration

> [!exercise] Exercise - Independence and complements
> ![12 - Independence and complements](Probability%20-%20Examples%20-%20W01-02.md#12%20-%20Independence%20and%20complements)

%%  %%
> [!mexample] Example - Checking independence by hand
> ![13 - Independence by hand: red and green marbles](Probability%20-%20Examples%20-%20W01-02.md#13%20-%20Independence%20by%20hand%20red%20and%20green%20marbles)

## Tree diagrams
### 05 Theory
A **tree diagram** depicts the components of a **multi-stage experiment**. Nodes, or *branch points*, represent sources of randomness.
![center|300](Pasted%20image%2020250121165910.png)

An *outcome* of the experiment is represented by a *pathway* taken from the root (left-most node) to a leaf (right-most node). The branch chosen at a given node junction represents the outcome of the “sub-experiment” constituting that branch point. So a pathway encodes the outcomes of all sub-experiments.

Each branch from a node is labeled with a probability number. This is the probability that the sub-experiment of that node has the outcome of that branch.

- The probability label on some branch is the conditional probability of that branch, assuming the pathway from root to prior node.
    - In the example: $\;0.8=P[A\mid B_1]$.
    - Therefore, branch labels from given node sum to 1. (Law of Total Probability)
- The probability of a given (overall) outcome is the *product* of the probabilities on each branch of the pathway to that outcome.
    - Makes sense, because (e.g.): $\;P[AB_1]=P[A]\cdot P[B_1\mid A]$
    - More generally: remember that (e.g.): $\;P[ABCD]=P[ABC]\cdot P[D\mid ABC]$
    - This overall outcome probability may be written at the leaf.

One can also use a tree diagram to remember quickly how to calculate certain probabilities.

For example, what is $P[A]$ in the diagram?
Answer: add up the pathway probabilities (leaf numbers) terminating in $A$. That makes $0.24+0.36+0.18=0.78$

For example, what is $P[B_1\mid N]$?
Answer: divide the leaf probability of $B_1N$ by the total probability of $N$. That makes: $$P[B_1\mid N]=\frac{0.06}{0.06+0.04+0.12}\approx 0.27$$

### 06 Illustration
> [!mexample] Example - Tree diagrams: Marble transferred, marble drawn
> ![14 - Marble transferred, marble drawn](Probability%20-%20Examples%20-%20W01-02.md#14%20-%20Marble%20transferred,%20marble%20drawn)

## Counting
### 07 Theory
In many “games of chance”, it is assumed by symmetry principles that all outcomes are equally likely. From this assumption we infer the rule for $P[-]$: $$P[A]=\frac{|A|}{|S|}$$
In words: the probability of event $A$ is the number of outcomes in $A$ divided by the number of possible outcomes.

When this formula applies, it is important to be able to count total outcomes, as well as outcomes satisfying various conditions.

> [!concept] Permutations
> **Permutations** count the number of *ordered lists* one can form from some items. For a list of $r$ items taken from a total collection of $n$, the number of permutations is: $$\frac{n!}{(n-r)!}$$

To see where this comes from:
There are $n$ choices for the first item, then $n-1$ for the second, then ... then $n-r+1$ for the $r^\text{th}$ item. So the number is $n(n-1)(n-2)\cdots(n-r+1)$. Observe: 
$$\begin{gather*}\frac{n!}{(n-r)!}=\frac{n(n-1)(n-2)\cdots(n-r+1)(n-r)(n-r-1)\cdots 1}{\phantom{n(n-1)(n-2)\cdots(n-r+1)}(n-r)(n-r-1)\cdots 1}\\\\ \quad ⨠⨠ \quad n(n-1)(n-2)\cdots(n-r+1)\end{gather*}$$

> [!concept] Combinations, binomial coefficient
> **Combinations** count the number of *sets* (ignoring order) one can form from some items. We define a notation for it like this: $${n\choose r}=\frac{n!}{r!(n-r)!}$$
> This counts the number of sets of $r$ distinct elements taken from a total collection of $n$ items.
> 
> Another name for combinations is the **binomial coefficient**.

This formula can be derived from the formula for permutations. The possible permutations can be partitioned into combinations: each combination gives a set, and by specifying an ordering of elements in the set, we get a permutation. For a set of $r$ elements taken from $n$ items, there are $r!$ ways to put them into a specific order. So the number of permutations must be a factor of $r!$ greater than the number of combinations.

This notation, $\displaystyle {n\choose r}$, is also called the **binomial coefficient** because it provides the coefficients of a binomial expansion: 
$$(x+y)^n=\sum_{i=1}^n {n\choose i} x^{n-i}y^{i}$$
For example: $$(x+y)^4=x^4+4x^3y+6x^2y^2+4xy^3+y^4$$

There are also ‘higher’ combinations: 
> [!concept] Multinomial coefficient
> The general multinomial coefficient is defined by the formula: $${n\choose r_1, r_2,\dots,r_k}=\frac{n!}{r_1! r_2! \cdots r_k!}$$
> 
>where $r_i\in\mathbb{N}$ and $r_1+r_2+\cdots+r_k=n$.
> 
> The multinomial coefficient measures the number of ways to partition $n$ items into sets with sizes $r_1,\,r_2,\,\dots,\,r_k$, respectively.

Notice that $\displaystyle {5\choose 3,2}=\displaystyle {5\choose 3}$ so we already defined these values $(k=2)$ with binomial coefficients. But with $k>2$, we have new values. They correspond to the coefficients in multinomial expansions. For example $k=3$ gives coefficients for $(x+y+z)^n$.

### 08 Illustration

> [!exercise] Exercise - Combinations: Counting teams with Cooper
> ![15 - Counting teams with Cooper](Probability%20-%20Examples%20-%20W01-02.md#15%20-%20Counting%20teams%20with%20Cooper)

%%  %%

> [!mexample] Example - Combinations: Groups with Haley and Hugo
> ![16 - Haley and Hugo from 2 groups of 3](Probability%20-%20Examples%20-%20W01-02.md#16%20-%20Haley%20and%20Hugo%20from%202%20groups%20of%203)

%%  %%

> [!mexample] Example - Counting VA license plates
> ![17 - Counting VA license plates](Probability%20-%20Examples%20-%20W01-02.md#17%20-%20Counting%20VA%20license%20plates)

%%  %%
> [!exercise] Counting out 4 teams
> ![18 - Counting out 4 teams](Probability%20-%20Examples%20-%20W01-02.md#18%20-%20Counting%20out%204%20teams)
