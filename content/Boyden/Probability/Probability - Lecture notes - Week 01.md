---
cssclasses:
  - hide-embedded-header
title: Week 01 notes
---
## Events and outcomes

### 01 Theory

> [!concept] Events and outcomes – informally
> - An **event** is a *description* of something that can happen.
> - An **outcome** is a *complete description* of something that can happen.

All outcomes are events. An event is usually a *partial* description. Outcomes are events given with a *complete* description.

Here ‘complete’ and ‘partial’ are within the context of the **probability model**.

- !! It can be misleading to say that an ‘outcome’ is an ‘observation’.
    - ‘Observations’ occur in the *real world*, while ‘outcomes’ occur in the *model*.
    - To the extent the model is a good one, and the observation conveys *complete* information, we can say ‘outcome’ for the observation.

Notice: 
- ! Because outcomes are *complete*, no two distinct outcomes could *actually happen* in a run of the experiment being modeled.

When an event happens, the *fact* that it has happened constitutes **information**.

> [!concept] Events and outcomes – mathematically
> - The **sample space** is the *set of possible outcomes*, so it is the set of the complete descriptions of everything that can happen.
> - An **event** is a *subset* of the sample space, so it is a *collection of outcomes*.

- % For mathematicians: some “wild” subsets are not *valid* events. Problems with infinity and the continuum...

> [!notation] Notation
> - Write $S$ for the set of possible outcomes, $s\in S$ for a single outcome in $S$.
> 
> - Write $A,\,B,\,C,\,\dots\subset S$ or $A_1,\,A_2,\,A_3,\,\dots\subset S$ for some events, subsets of $S$.
> - Write $\mathcal{F}$ for the collection of all events. This is frequently a *huge* set!
> - Write $|A|$ for the **cardinality** or *size* of a set $A$, i.e. the *number of elements it contains*.

Using this notation, we can consider an *outcome itself as an event* by considering the “singleton” subset $\{\omega\}\subset S$ which contains that outcome alone.

### 02 Illustration

> [!mexample] Example - Coin flipping
> ![01 - Coin flipping](Probability%20-%20Examples%20-%20W01-02.md#01%20-%20Coin%20flipping)

%%  %%
> [!exercise] Exercise - Coin flipping: counting subsets
> ![02 - Coin flipping: counting subsets](Probability%20-%20Examples%20-%20W01-02.md#02%20-%20Coin%20flipping%20counting%20subsets)

### 03 Theory

> [!summary] New events from old
> Given two events $A$ and $B$, we can form new events using set operations: 
> $$\begin{align*}A\cup B \quad\longleftrightarrow&\quad \text{“event } A\;\text{ OR }\;\text{event }B\text{”}\\\\ A\cap B \quad\longleftrightarrow&\quad \text{“event } A\;\text{ AND }\;\text{event }B\text{”}\\\\ A^c \quad\longleftrightarrow&\quad \textbf{not}\text{ event }A\end{align*}$$
> We also use these terms for events $A$ and $B$: 
> - They are **mutually exclusive** when $A\cap B=\emptyset$, that is, they have *no elements in common*.
> 
> - They are **collectively exhaustive** $A\cup B=S$, that is, when they jointly *cover all possible outcomes*.

- ! In probability texts, sometimes $A\cap B$ is written “$A\cdot B$” or even (frequently!) “$AB$”.

> [!extra] Rules for sets
> **Algebraic rules**
> - Associativity: $(A\cup B)\cup C=A\cup (B\cup C)$. Analogous to $(A+B)+C=A+(B+C)$.
> 
> - Distributivity: $A\cap (B\cup C)=(A\cap B) \; \cup \; (A\cap C)$. Analogous to $A(B+C)=AB+AC$.
> 
> **De Morgan’s Laws**
> - $(A\cup B)^c = A^c \cap B^c$
> 
> - $(A\cap B)^c = A^c \cup B^c$
> In other words: you can distribute “ $^c$ ” but must simultaneously do a switch $\cap\leftrightarrow \cup$.

## Probability models
### 04 Theory

> [!summary] Axioms of probability
> A **probability measure** is a function $P:\mathcal{F}\to\mathbb{R}$ satisfying:
> 
> **Kolmogorov Axioms:**
> - **Axiom 1:** $\; P[A]\geq 0$ for every event $A$
>   (probabilities are not negative!)
> 
> - **Axiom 2:** $\; P[S]=1$
>   (probability of “anything” happening is 1)
> - **Axiom 3:** additivity for any *countable collection* of *mutually exclusive* events: $$P[A_1\cup A_2 \cup A_3\cup \cdots]=P[A_1]+P[A_2]+P[A_3]+\cdots$$ $$\text{when:}\quad A_i\cap A_j=\emptyset \quad\text{for all }\; i\neq j$$

- %& Notation: we write $P[A]$ instead of $P(A)$, even though $P$ is a function, to emphasize the fact that $A$ is a set.

> [!concept] Probability model
> A **probability model** or **probability space** consists of a triple $(S, \mathcal{F}, P)$: 
> - $S\;$ the sample space
> 
> - $\mathcal{F}\;$ the set of valid events, where every $A\in\mathcal{F}$ satisfies $A\subset S$
> - $P:\mathcal{F}\to\mathbb{R}\;$ a probability measure satisfying the Kolmogorov Axioms

> [!tip] Finitely many exclusive events
> It is a consequence of the Kolmogorov Axioms that additivity also works for finite collections of mutually exclusive events: $$\begin{gather*}P[A\cup B]=P[A]+P[B]\\\\ P[A_1\cup\cdots\cup A_n]=P[A_1]+\cdots+P[A_n]\end{gather*}$$

> [!summary] Inferences from Kolmogorov
> A probability measure satisfies these rules.
> They can be deduced from the Kolmogorov Axioms.
> 
> - **Negation:** Can you find $P[A^c]$ but not $P[A]$? Use negation: $$P[A] = 1-P[A^c]$$
> 
> - **Monotonicity:** Probabilities grow when outcomes are added: $$A\subset B\quad ⨠⨠ \quad P[A]\leq P[B]$$
> - **Inclusion-Exclusion:** A trick for resolving unions: $$P[A\cup B]=P[A]+P[B]-P[A\cap B]$$
>   (even when $A$ and $B$ are *not exclusive!*)

> [!extra] Inclusion-Exclusion
> The principle of inclusion-exclusion generalizes to three events: $$\begin{gather*}P[A\cup B\cup C] = \\\\ P[A]+P[B]+P[C]-P[A\cap B]-P[A\cap C]-P[B\cap C]+P[A\cap B\cap C]\end{gather*}$$
> 
> The same pattern works for any number of events!
> 
> The pattern goes: “include singles” then “exclude doubles” then “include triples” then ...
> 
> Include, exclude, include, exclude, include, ...

### 05 Illustration

> [!mexample] Example - Lucia is Host or Player
> ![03 - Lucia is Host or Player](Probability%20-%20Examples%20-%20W01-02.md#03%20-%20Lucia%20is%20Host%20or%20Player)

%%  %%
> [!mexample] Example - iPhones and iPads
> ![04 - iPhones and iPads](Probability%20-%20Examples%20-%20W01-02.md#04%20-%20iPhones%20and%20iPads)

## Conditional probability
### 06 Theory

> [!concept] Conditional probability
> The **conditional probability** of “$B$ given $A$” is defined by: $$P[B\mid A]=\frac{P[B\cap A]}{P[A]}$$

This conditional probability $P[B\mid A]$ represents the probability of event $B$ taking place *given the assumption* that $A$ took place. (All within the given probability model.)

By letting the actuality of event $A$ be taken as a fixed hypothesis, we can define a *conditional probability measure* by plugging events into the slot of $B$: 
$$P[-\mid A]=\frac{P[-\cap A]}{P[A]}$$

It is possible to verify each of the Kolmogorov axioms for this function, and therefore $P[-\mid A]$ itself defines a bona fide *probability measure*.

> [!extra] Conditioning
> What does it really mean?
> 
> Conceptually, $P[B\mid A]$ corresponds to *creating a new experiment* in which we run the old experiment and record data *only those times that $A$ happened*. Or, it corresponds to finding ourselves with *knowledge* or *data* that $A$ happened, and we seek our best estimates of the likelihoods of other events, based on our existing model and the actuality of $A$.
> 
> Mathematically, $P[B\mid A]$ corresponds to *restricting* the probability function to outcomes in $A$, and *renormalizing* the values (dividing by $p[A]$) so that the total probability of all the outcomes (in $A$) is now $1$.

The definition of conditional probability can also be turned around and reinterpreted: 
> [!concept] Multiplication rule
> $$P[AB]=P[A]\cdot P[B\mid A]$$
> 
> “The probability of $A$ AND $B$ equals the probability of $A$ *times* the probability of $B$-given-$A$.”

This principle generalizes to any events in sequence: 
> [!extra] Generalized multiplication rule
> $$P[A_1 A_2 A_3] = P[A_1]\cdot P[A_2\mid A_1]\cdot P[A_3\mid A_1 A_2]$$
> 
> $$P[A_1\cdots A_n] = P[A_1]\cdot P[A_2\mid A_1]\cdot P[A_3\mid A_1 A_2] \;\cdots\; P[A_n\mid A_1\,\cdots\, A_{n-1}]$$
> 
> The generalized rule can be verified like this. First substitute $A_2$ for $B$ and $A_1$ for $A$ in the original rule. Now repeat, substituting $A_3$ for $B$ and $A_1A_2$ for $A$ in the original rule, and combine with the first one, and you find the rule for triples. Repeat again with $A_4$ and $A_1A_2A_3$, combine with the triples, and you get quadruples.

### 07 Illustration
> [!exercise] Exercise - Simplifying conditionals
> ![05 - Simplifying conditionals inclusion](Probability%20-%20Examples%20-%20W01-02.md#05%20-%20Simplifying%20conditionals%20inclusion)

%%  %%
> [!mexample] Example - Coin flipping: at least 2 heads
> ![06 - Coin flipping: at least 2 heads](Probability%20-%20Examples%20-%20W01-02.md#06%20-%20Coin%20flipping%20at%20least%202%20heads)

%%  %%
> [!mexample] Example: Flip a coin, then roll dice
> ![07 - Multiplication: flip a coin, then roll dice](Probability%20-%20Examples%20-%20W01-02.md#07%20-%20Multiplication%20flip%20a%20coin,%20then%20roll%20dice)

%%  %%
> [!mexample] Multiplication: draw two cards
> ![08 - Multiplication: draw two cards](Probability%20-%20Examples%20-%20W01-02.md#08%20-%20Multiplication%20draw%20two%20cards)

### 08 Theory

> [!concept] Division into Cases
> For any events $A$ and $B$:
> $$P[B] = P[A]\cdot P[B\mid A] + P[A^c]\cdot P[B\mid A^c]$$

Interpretation: event $B$ may be *divided along the lines of $A$*, with some of $P[B]$ coming from the part in $A$ and the rest from the part in $A^c$.

> [!extra] Total Probability - Explanation
> - First divide $B$ itself into parts in and out of $A$: $$B=B\cap A\;\bigcup\;B\cap A^c$$
> - These parts are exclusive, so in probability we have: $$P[B]=P[BA]+P[BA^c]$$
> - Use the Multiplication rule to break up $P[BA]$ and $P[BA^c]$: $$\begin{align*}P[BA]\quad ⨠⨠& \quad P[A]\cdot P[B\mid A]\\\\P[BA^c]\quad ⨠⨠& \quad P[A^c]\cdot P[B\mid A^c]\end{align*}$$
> - Now substitute in the prior formula: $$P[B]\quad ⨠⨠ \quad P[BA]+P[BA^c]\quad ⨠⨠ \quad P[A]\cdot P[B\mid A]+P[A^c]\cdot P[B\mid A^c]$$

This law can be generalized to any **partition** of the sample space $S$. A partition is a collection of events $A_i$ which are *mutually exclusive* and *jointly exhaustive*: $$A_i\cap A_j=\emptyset,\qquad \bigcup_i A_i = S$$
The generalized formulation of Total Probability for a partition is: 

> [!concept] Law of Total Probability
> For a partition $A_i$ of the sample space $S$:
> $$P[B] = \sum_{i} P[A_i]\cdot P[B\mid A_i]$$

![center|300](IMG_0005.JPEG)

*Division into Cases* is just the *Law of Total Probability* after setting $A_1=A$ and $A_2=A^c$.

### 09 Illustration

> [!exercise] Exercise - Marble transferred, marble drawn
> ![09 - Marble transferred, marble drawn](Probability%20-%20Examples%20-%20W01-02.md#09%20-%20Marble%20transferred,%20marble%20drawn)

