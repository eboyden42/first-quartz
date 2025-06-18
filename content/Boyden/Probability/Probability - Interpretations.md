
## Interpretive frameworks

### Epistemological probability
#### Symmetry
**Classical** theorists hold that probability derives from the symmetry of a situation (dice, coins, poker).

“Principle of Equal Probability”

> The theory of chances consists in reducing all events of the same kind to a certain number of equally possible cases, that is to say, to cases whose existence we are equally uncertain of, and in determining the number of cases favourable to the event whose probability is sought. The ratio of this number to that of all possible cases is the measure of this probability, which is thus only a fraction whose numerator is the number of favourable cases, and whose denominator is the number of all possible cases.
> 
> Laplace 1814 – *Philosophical Essay of Probabilities*

- Primary example: games of chance (dice, cards, coins...)
- Challenge: whence “equal probabilities” for possible outcomes?

#### Logical / evidential

**Logicists** hold that probability relates the syntactic structure of theory language.

**Evidentialists** hold that probability relates known evidence to a proposed hypothesis.

> Given a scientific hypothesis $h$, we can intelligibly ask: how probable is $h$ on present evidence? We are asking how much the evidence tells for or against the hypothesis. We are not asking what objective physical chance or frequency of truth $h$ has. A proposed law of nature may be quite improbable on present evidence even though its objective chance of truth is 1. That is quite consistent with the obvious point that the evidence bearing on $h$ may include evidence about objective chances or frequencies. Equally, in asking how probable $h$ is on present evidence, we are not asking about anyone’s actual degree of belief in $h$. Present evidence may tell strongly against $h$, even though everyone is irrationally certain of $h$.
> 
> Williamson 2000 – *Knowledge and Its Limits*

- Primary example: weather events, scientific facts
- Challenge: What is meant by “evidence tells for a hypothesis”?
- Challenge: Cf. Subjective probability

### Subjective probability

#### Beliefs
**Bayesians** hold that probability measures the degrees of belief of persons.

Your degree of belief in $E$ is $p$ iff $p$ units of utility is the price at which you would buy or sell a bet that pays 1 unit of utility if $E$, 0 if not $E$.

> By degree of probability, we really mean, or ought to mean, degree of belief.
> 
> De Morgan 1847 – *Formal Logic, or, The Calculus of Inference, Necessary and Probable*

Probability “is a measurement of belief qua basis of action” (F. Ramsey).

<u>Dutch Book Theorem</u>
If your beliefs violate the Kolmogorov Axioms of Probability, then someone can devise a bet you would take and necessarily lose money.

- Primary example: scientific hypotheses and facts
- Challenge: ‘Coherence’ (axioms of probability) leaves much open
- Challenge: doesn’t allow being ‘wrong’ about probability (only rationality)
- Challenge: hard to ascertain beliefs or preferences


### Physical probability
#### Frequencies
**Frequentists** hold that probability derives from patterns in repeated trials.

Probability of $A$ is always relative to a ‘reference class’ $B$. It is the proportion of *actual* outcomes that are $A$. (vs. classical: proportion of *possible* outcomes.)

> probability _is_ nothing but that proportion \[of births of males and females]
> 
> Venn 1876 – *The Logic of Chance*

- Primary example: statistical tests and studies
- Challenge: One-shot events like decay of a single uranium atom
- Challenge: Reference class problem

#### Propensities
**Propensity** theorists hold that probability measures a causal power or tendency inhering in objects.

> I am, then, to define the meaning of the statement that the _probability_, that if a die be thrown from a dice box it will turn up a number divisible by three, is one-third. The statement means that the die has a certain ‘would-be’; and to say that the die has a ‘would-be’ is to say that it has a property, quite analogous to any _habit_ that a man might have.
> 
> C.S. Peirce 1910 – *Notes on the Doctrine of Chances*

- Primary example: actions/habits of living organisms; decay of single uranium atom
- Challenge: “Suppose a sick patient has propensity to trigger a medical test. Do positive medical tests have propensity to have come from a sick patient?”
- Challenge: Other problems shared with Frequentists.


| Scenario                       | Natural framework         |
| ------------------------------ | ------------------------- |
| Rolling a die                  | Classical                 |
| Do gravitational waves exist?  | Evidentialist or Bayesian |
| Decay of single uranium atom   | Propensity                |
| Polling voters                 | Frequency                 |
| Winning at slot machine        | Classical                 |
| Significance test              | Frequency                 |
| MAP criterion                  | Bayesian                  |
| Tornado occurence              | Evidentialist, Bayesian   |
| Chance that Jane goes to movie | Propensity                |
| Relativity Theory is true      | Bayesian, Evidentialist   |
| Chloroquine cures COVID        | Frequency                 |
| Lab Leak Hypothesis            | Bayesian, Evidentialist   |


## Case studies

### COVID testing

- Background rate: 1% of population has COVID
- Sensitivity: 95% chance positive test on people *with* COVID
- Selectivity: 90% chance negative test on people *without* COVID

$C_p=\text{has COVID}$
$C_n=\text{no COVID}=C_p^c$
$T_p=\text{tests positive}$
$T_n=\text{tests negative}=T_p^c$

##### Bayesian approach

Priors: 
- $P[C_p]=0.01$
- $P[T_p\mid C_p]=0.95$
- $P[T_n\mid C_n]=0.90$

**Question**

Find $P[C_p\mid T_p]$.

**Solution**

Bayesian calculation: 

$$P[C_p\mid T_p]=P[T_p\mid C_p]\cdot \frac{P[C_p]}{P[T_p]}$$

We may view this formula (rewrite) as “update priors in light of evidence”: 

$$P[C_p\mid T_p]=\frac{P[T_p\mid C_p]}{P[T_p]}\,P[C_p]$$

Division into case for denominator: 

$$\begin{align*}P[T_p]&= P[T_p\mid C_p]\,P[C_p]+P[T_p\mid C_n]\,P[C_n]\\\\ &= 0.95\times 0.01 + 0.10\times 0.99 \approx 0.1085\end{align*}$$
Thus: 

$$P[C_p\mid T_p]=0.95\times \frac{0.01}{0.1085}\approx 0.088$$


##### Frequentist approach

Type I error rate: 10%
Type II error rate: 5%
Significance level: 10%

### Election polling

Say 1,000 people are polled for the 1836 US election.
52% for Harrison
48% for Van Buren

##### Frequentist approach

Write $p$ for the true probability for Harrison.

> [!concept] Confidence interval for sample mean
> **Confidence interval relation:** 
> 
> $$P\Big[M_{n}(X) \in [p-\varepsilon,\, p+\varepsilon]\Big] \;\geq\; 2\Phi (2\varepsilon\sqrt{n}) -1$$

Thus: 

$$P\Big[0.49\leq M_n(X)\leq 0.55\Big] \geq 95\%$$

Typical imposed “significance level” is 5%. Thus, the poll is *significant* if the 95% window excludes 50% for Harrison. Therefore, this poll is *not significant*.

##### Bayesian approach

We need to know $P[H_0]$, the prior probability of Harrison winning before the poll is conducted.

