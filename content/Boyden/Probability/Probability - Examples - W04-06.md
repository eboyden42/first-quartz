
## Bernoulli process

#### 24 - Binomial variable counting ones in repeated die rolls
A standard die is rolled 6 times. Use a binomial variable to find the probability of rolling at least 4 ones.

**Solution**
- & Labels
    - Let $S\sim \text{Bin}(6,\frac{1}{6})$.
    - Interpret: $S$ counts the ones appearing over 6 rolls.
    - We seek $P[4\leq S]$.
- && Calculation
    - Exclusive events: $$\begin{gather*}P[4\leq S] \quad ⨠⨠ \quad  P_S(4)+P_S(5)+P_S(6) \\\\ \quad ⨠⨠ \quad  {6\choose 4} \left(\frac{1}{6}\right)^4\left(\frac{5}{6}\right)^2 + {6\choose 5} \left(\frac{1}{6}\right)^5\left(\frac{5}{6}\right)^1 + {6\choose 6} \left(\frac{1}{6}\right)^6\left(\frac{5}{6}\right)^0 \\\\ \quad ⨠⨠ \quad  \frac{203}{23328}\quad ⨠⨠ \quad \approx 0.00870\end{gather*}$$

#### 25 - Roll die until
Roll a fair die repeatedly. Find the probabilities that: 
- (a) At most 2 threes occur in the first 5 rolls.
- (b) There is no three in the first 4 rolls, using a geometric variable.

**Solution**
(a)
- & Labels.
    - Use $S\sim\mathrm{Bin}(5,1/6)$ to count the number of threes among the first six rolls.
    - Seek $P[S\leq 2]$ as the answer.
- && Calculations.
    - Divide into exclusive events: $$\begin{gather*}P[S\leq 2] \quad ⨠⨠ \quad  P_S(0)+P_S(1)+P_S(2) \\\\ \quad ⨠⨠ \quad  {5\choose 0} \left(\frac{1}{6}\right)^0\left(\frac{5}{6}\right)^5 + {5\choose 1} \left(\frac{1}{6}\right)^1\left(\frac{5}{6}\right)^4 + {5\choose 2} \left(\frac{1}{6}\right)^2\left(\frac{5}{6}\right)^3 \\\\ \quad ⨠⨠ \quad  \frac{625}{648}\quad ⨠⨠ \quad \approx 0.965\end{gather*}$$

(b)
- & Labels.
    - Use $N\sim\mathrm{Geom}(1/6)$ to give the roll number of the first time a three is rolled.
    - Seek $P[N>4]$ as the answer.
- && Sum the PMF formula for $\mathrm{Geom}(1/6)$.
    - Compute: $$P[N>4] \quad ⨠⨠ \quad  \sum_{k=5}^\infty \left(\frac{5}{6}\right)^{k-1} \left(\frac{1}{6}\right)$$
- !! Geometric series formula.
    - For any geometric series: $$a+ar+ar^2+ar^3+\cdots \quad ⨠⨠ \quad \frac{a}{1-r}$$
    - Apply formula: $$\sum_{k=5}^\infty \left(\frac{5}{6}\right)^{k-1} \left(\frac{1}{6}\right) \quad ⨠⨠ \quad  \left(\frac{5}{6}\right)^4$$
- & Final answer is $P[N>4]=(5/6)^4$.

#### 26 - Cubs winning the World Series
Suppose the Cubs are playing the Yankees for the World Series. The first team to 4 wins in 7 games wins the series. What is the probability that the Cubs win the series?

Assume that for any given game the probability of the Cubs winning is $p=45\%$ and losing is $q=55\%$.

**Solution**
(a) Using a binomial distribution
- & Label.
    - Let $X\sim\mathrm{Bin}(7,\,p)$.
    - Thus $P_X(4)$ is the probability that the Cubs win exactly 4 games over 7 played.
    - Seek $P_X(4)+P_X(5)+P_X(6)+P_X(7)$ as the answer.
- &&& Calculate.
    - Use binomial PMF: $$P_X(k)={7\choose k}p^kq^{7-k}$$
    - Insert data: $$\begin{gather*}P_X(4)+\dots+P_X(7) \\\\ ⨠⨠ \quad {7\choose 4}p^4q^3+{7\choose 5}p^5q^2+{7\choose 6}p^6q^1+{7\choose 7}p^7q^0\end{gather*}$$
    - Compute: $$\begin{gather*}⨠⨠ \quad \frac{7\cdot6\cdot5}{3\cdot2}p^4q^3+\frac{7\cdot6}{2}p^5q^2+\frac{7}{1}p^6q^1+1\cdot p^7q^0 \\\\ ⨠⨠ \quad p^4\big(35q^3+21p^1q^2+7p^2q+p^3\big)\end{gather*}$$
    - Convert $q  \;⨠\;  (1-p)$: $$\begin{gather*}⨠⨠ \quad p^4\big(35(1-p)^3+21p(1-p)^2+7p^2(1-p)+p^3\big)\\\\ ⨠⨠ \quad 35 p^4 - 84 p^5 + 70 p^6 - 20 p^7 \quad ⨠⨠ \quad \approx 0.39\end{gather*}$$

(b) Using a Pascal distribution
- & Label.
    - Let $Y\sim\mathrm{Pasc}(4,\,p)$.
    - Thus $P_Y(k)$ is the probability that the Cubs win their $4^\text{th}$ game on game number $k$.
    - Seek $P_Y(4)+P_Y(5)+P_Y(6)+P_Y(7)$ as the answer.
- &&& Calculate.
    - Use Pascal PMF: $$P_Y(k)={k-1\choose 3}p^4q^{k-4}$$
    - Insert data: $$\begin{gather*}P_Y(4)+\dots+P_Y(7)\\\\ ⨠⨠ \quad {3\choose 3}p^4q^0 + {4\choose 3}p^4q^1 + {5\choose 3}p^4q^2 + {6\choose 3}p^4q^3\end{gather*}$$
    - Compute: $$\begin{gather*}⨠⨠ \quad 1\cdot p^4+\frac{4}{1}\cdot p^4q^1+\frac{5\cdot4}{2}p^4q^2+\frac{6\cdot5\cdot4}{3\cdot2}p^4q^3 \\\\ ⨠⨠ \quad p^4\big( 1+4q+10q^2+20q^3 \big)\end{gather*}$$
    - Convert $q  \;⨠\;  (1-p)$: $$\begin{gather*}⨠⨠ \quad p^4\big(1+4(1-p)+10(1-p)^2+20(1-p)^3\big) \\\\ ⨠⨠ \quad 35 p^4 - 84 p^5 + 70 p^6 - 20 p^7 \quad ⨠⨠ \quad \approx 0.39\end{gather*}$$

- !!! The algebra seems very different, right up to the end!

## Expectation and variance

#### 27 - Gambling game - tokens in bins
Consider a game like this: a coin is flipped; if $H$ then draw a token from Bin 1, if $T$ then from Bin 2.
- Bin 1 contents: 1 token \$1,000, and 9 tokens \$1
- Bin 2 contents: 5 tokens \$50, and 5 tokens \$1

It costs \$50 to enter the game. Should you play it? (A lot of times?) How much would you pay to play?

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#27%20-%20Gambling%20game%20-%20tokens%20in%20bins)

#### 28 - Expected value - rolling dice
Let $X$ be a random variable counting the number of dots given by rolling a single die.

Then: $$E[X]\quad ⨠⨠ \quad 1\cdot \frac{1}{6} + 2\cdot \frac{1}{6} + \dots + 6\cdot \frac{1}{6} \quad ⨠⨠ \quad  \frac{7}{2}$$
Let $S$ be an RV that counts the dots on a roll of *two* dice.

The PMF of $S$:
![500](Pasted%20image%2020230908154832.png)
Then: $$E[S]\quad ⨠⨠ \quad 2\cdot\frac{1}{36}+3\cdot\frac{2}{36}+4\cdot\frac{3}{36}+\dots+12\cdot\frac{1}{36}\quad ⨠⨠ \quad 7$$
- ! Notice that $\frac{7}{2}+\frac{7}{2}=7$.
    - In general, $E[X+Y]=E[X]+E[Y]$.
    - Let $X$ be a green die and $Y$ a red die.
    - From the earlier calculation, $E[X]=\frac{7}{2}$ and $E[Y]=\frac{7}{2}$.
    - Since $S=X+Y$, we derive $E[S]=7$ by simple addition!

#### 29 - Expectation from PMF of related
Let $X$ have distribution given by this PMF: 
![300](Pasted%20image%2020230923135746.png)

Find $E[|X-2|]$.

**Solution**
- &&& Compute the PMF of $|X-2|$.
    - PMF arranged by possible value: $$\begin{align*} P[|X-2|=0] &\quad ⨠⨠ \quad  P[X=2] = \tfrac{1}{14}\\ P[|X-2|=1] &\quad ⨠⨠ \quad  P[X=1] + P[X=3] =\tfrac{1}{7}+\tfrac{3}{14}=\tfrac{5}{14}\\ P[|X-2|=2] &\quad ⨠⨠ \quad  P[X=4] =\tfrac{2}{7}\\ P[|X-2|=3] &\quad ⨠⨠ \quad  P[X=5] =\tfrac{2}{7}\\ \vdots\qquad &\quad \phantom{⨠⨠} \quad\qquad \vdots \\ P[|X-2|=k] &\quad ⨠⨠ \quad  0 \quad\text{for}\;\; k\neq 0,1,2,3. \end{align*}$$
- & Calculate the expectation.
    - Using formula for discrete PMF: $$E[|X-2|] = 0\cdot \tfrac{1}{14} + 1\cdot \tfrac{5}{14} + 2\cdot \tfrac{2}{7} + 3\cdot \tfrac{2}{7} = \tfrac{25}{14}$$

#### 30 - Variance for composite using PMF and simpler formula
Suppose $X$ has this PMF: 

|   $k:$    |   1   |   2   |   3   |
| :-------: | :---: | :---: | :---: |
| $P_X(k):$ | $1/7$ | $2/7$ | $4/7$ |
Find $\mathrm{Var}[\frac{1}{1+X}]$ using the formula $\mathrm{Var}[Y]=E[Y^2]-E[Y]^2$ with $Y=\frac{1}{1+X}$.

(Hint: you should find $E[Y]=\frac{13}{42}$ and $E[Y^2]=\frac{13}{126}$ along the way.)

## Poisson process
#### 31 - Poisson calculation
Suppose $X\sim \mathrm{Pois}(10)$. Find $P[X\leq 13 \mid X\geq 7]$. (Leave the answer in exact form.)

**Solution**
- Conditioning definition: $$P[X\leq 13\mid X\geq 7]\quad ⨠⨠ \quad \frac{P[7\leq X\leq 13]}{1-P[X<7]}$$
- Expand numerator: $$P[7\leq X\leq 13]\quad ⨠⨠ \quad e^{-10}\frac{10^7}{7!}+e^{-10}\frac{10^8}{8!}+\dots+e^{-10}\frac{10^{13}}{13!}$$
- Simplify: $$⨠⨠ \quad e^{-10}\frac{10^7}{7!}\big( 1+\frac{10}{8}+\frac{10^2}{8\cdot9}+\dots+\frac{10^6}{8\cdot9\cdots13} \big)$$
- Compute for denominator: $$P[X<7]\quad ⨠⨠ \quad e^{-10}\frac{10^0}{0!}+e^{-10}\frac{10^1}{1!}+\dots+e^{-10}\frac{10^6}{6!}$$

#### 32 - Arrivals at a post office
Client arrivals at a post office are modelled well using a Poisson variable.

Each potential client has a very low and independent chance of coming to the post office, but there are many thousands of potential clients, so the arrivals at the office actually come in moderate number.

Suppose the average rate is 5 clients per hour.
- (a) Find the probability that nobody comes in the first 10 minutes of opening. (The cashier is considering being late by 10 minutes to run an errand on the way to work.)
- (b) Find the probability that 5 clients come in the first hour. (I.e. the average is achieved.)
- (c) Find the probability that 9 clients come in the first two hours.

**Solution**
(a)
- & Convert rate for desired window.
    - Expect $5/6$ clients every 10 minutes.
    - Let $X\sim\mathrm{Pois}(5/6)$.
    - Seek $P_X(0)$ as the answer.
- & Compute.
    - Formula: $$P_X(k)=e^{-5/6}\frac{(5/6)^k}{k!}$$
    - Insert data and compute: $$P_X(0)\quad ⨠⨠ \quad e^{-5/6}\quad ⨠⨠ \quad \approx 0.435$$

(b)
- & Rate is already correct.
    - Let $X\sim\mathrm{Pois}(5)$.
    - Compute the answer: $$P_X(5)=e^{-5}\frac{5^5}{5!}\quad ⨠⨠ \quad \approx 0.175$$

(c)
- & Convert rate for desired window
    - Expect 10 clients every 2 hours.
    - Let $X\sim\mathrm{Pois}(10)$.
    - Compute the answer: $$P_X(9)\quad ⨠⨠ \quad e^{-10}\frac{10^9}{9!}\quad ⨠⨠ \quad \approx 0.125$$

- !!! Notice that 0.125 is smaller than 0.175.

## Function on a random variable

#### 33 - Expectation of function on RV given by chart
Suppose that $g:\mathbb{R}\to\mathbb{R}$ in such a way that $g:1\mapsto 4$ and $g:2\mapsto 1$ and $g:3\mapsto 87$ and *no other values* are mapped to $4,\,1,\,87$.

|   $X:$    |   1   |   2   |   3   |
|:---------:|:-----:|:-----:|:-----:|
| $P_X(k):$ | $1/7$ | $2/7$ | $4/7$ |
|   $Y:$    |   4   |   1   |  87   |
Then: $$E[X]=1\cdot\frac{1}{7}+2\cdot\frac{2}{7}+3\cdot\frac{4}{7}\quad ⨠⨠ \quad \frac{17}{7}$$
And: $$E[Y]=4\cdot\frac{1}{7}+1\cdot\frac{2}{7}+87\cdot\frac{4}{7}\quad ⨠⨠ \quad \frac{354}{7}$$
Therefore: $$E[5X+2Y+3] \quad ⨠⨠ \quad 5\cdot\frac{17}{7}+2\cdot\frac{354}{7}+3\quad ⨠⨠ \quad \frac{814}{7}$$

#### 34 - Variance of uniform random variable
The uniform random variable $X$ on $[a,b]$ has distribution given by $P\big[c\leq X\leq d\big]=\frac{d-c}{b-a}$ when $a\leq c\leq d\leq b$.

- (a) Find $\mathrm{Var}[X]$ using the shorter formula.
- (b) Find $\mathrm{Var}[3X]$ using “squaring the scale factor.”
- (c) Find $\mathrm{Var}[3X]$ directly.

**Solution**
(a)
1. & Compute density.
    - The density for $X$ is: $$f_X(x)=\begin{cases}\frac{1}{b-a}&\text{for }x\in[a,b]\\ 0&\text{otherwise}\end{cases}$$
2. & Compute $E[X]$ and $E[X^2]$ directly using integral formulas.
    - Compute $E[X]$: $$E[X]=\int_a^b \frac{x}{b-a}\,dx = \frac{b+a}{2}$$
    - Now compute $E[X^2]$: $$E[X^2] =  \int_a^b \frac{x^2}{b-a}\,dx \quad ⨠⨠ \quad  \frac{1}{3}(b^2+ba+a^2)$$
3. & Find variance using short formula.
    - Plug in: $$\begin{gather*}\mathrm{Var}[X]=E[X^2]-E[X]^2 \\\\ ⨠⨠ \quad  \frac{1}{3}(b^2+ab+a^2) - \left(\frac{b+a}{2}\right)^2 \\\\ ⨠⨠ \quad  \frac{(b-a)^2}{12}\end{gather*}$$

(b)
- “Squaring the scale factor” formula: $$\mathrm{Var}[aX+b]=a^2\mathrm{Var}[X]$$
- Plugging in: $$\mathrm{Var}[3X]\quad ⨠⨠ \quad 9\mathrm{Var}[X]\quad ⨠⨠ \quad \frac{9}{12}(b-a)^2$$

(c)
1. & Density.
    - The variable $3X$ will have $1/3$ the density spread over the interval $[3a,3b]$.
    - Density is then: $$f_X(x)=\begin{cases}\frac{1}{3b-3a}&\text{on }[3a,3b]\\ 0&\text{otherwise}\end{cases}$$
2. & Plug into prior variance formula.
    - Use $a\rightsquigarrow 3a$ and $b\rightsquigarrow 3b$.
    - Get variance: $$\mathrm{Var}[3X]=\frac{(3b-3a)^2}{12}$$
    - Simplify: $$⨠⨠ \quad \frac{(3(b-a))^2}{12}\quad ⨠⨠ \quad \frac{9}{12}(b-a)^2$$

#### 35 - PDF of derived from CDF
Suppose that $F_X(x)=\frac{1}{1+e^{-x}}$.
- (a) Find the PDF of $X$.
- (b) Find the PDF of $e^X$.

**Solution**
(a)
- Formula: $$F_X(x)=\int_{-\infty}^x f_X(t)\,dt\quad \implies\quad f_X(x)=\frac{d}{dx}F_X(x)$$
- Plug in: $$\begin{gather*}f_X(x) = \frac{d}{dx}\big(1+e^{-x}\big)^{-1}\quad ⨠⨠ \quad -(1+e^{-x})^{-2}\cdot(-e^{-x})\\\\ \quad ⨠⨠ \quad \frac{e^{-x}}{\left(1+e^{-x}\right)^2}\end{gather*}$$

(b)
- By definition: $$F_{e^X}(x)=P[e^X\leq x]$$
- Since $e^X$ is increasing, we know: $$e^X\leq a\quad\iff\quad X\leq \ln a$$
- Therefore: $$\begin{gather*}F_{e^X}(x)=F_X(\ln x)\\\\ ⨠⨠ \quad \frac{1}{1+e^{-\ln x}}\quad ⨠⨠ \quad \frac{1}{1+x^{-1}}\end{gather*}$$
- Then using differentiation: $$\begin{gather*}f_{e^X}(x)=\frac{d}{dx}\left(\frac{1}{1+x^{-1}}\right)\\\\ ⨠⨠ \quad -(1+x^{-1})^{-2}\cdot(-x^{-2})\quad ⨠⨠ \quad \frac{1}{(x+1)^2}\end{gather*}$$

#### 36 - Probabilities via CDF
Suppose the CDF of $X$ is given by $F_X(x)=\frac{1}{1+e^{-x}}$. Compute:

- (a) $P[X\leq 1]$
- (b) $P[X<1]$
- (c) $P[-0.5\leq X\leq 0.2]$
- (d) $P[-2\leq X]$

[Solution](Probability%20-%20Exercise%20solutions%20-%20Unit%2001.md#36%20-%20Probabilities%20via%20CDF)

## Continuous wait times

#### 37 - Earthquake wait time
Suppose the San Andreas fault produces major earthquakes modeled by a Poisson process, with an average of 1 major earthquake every 100 years.

- (a) What is the probability that there will *not* be a major earthquake in the next 20 years?
- (b) What is the probability that *three* earthquakes will strike within the next 20 years?

**Solution**
(a)
Since the average wait time is 100 years, we set $\lambda=0.01$ earthquakes per year. Set $X\sim\mathrm{Exp}(0.01)$ and compute: $$P[X>20] = e^{-\lambda\cdot 20} \quad ⨠⨠ \quad  e^{-0.01\cdot 20} \quad ⨠⨠ \quad \approx 0.82$$

(b)
The same Poisson process has the same $\lambda=0.01$ earthquakes per year. Set $X\sim\mathrm{Erlang}(3,0.01)$, so: $$\begin{gather*}f_X(t)=\frac{\lambda^\ell}{(\ell-1)!}t^{\ell-1}e^{-\lambda t}\\\\ ⨠⨠ \quad \frac{(0.01)^3}{(3-1)!}t^{3-1}e^{-0.01\cdot t}\quad ⨠⨠ \quad \frac{10^{-6}}{2}t^2 e^{-0.01\cdot t}\end{gather*}$$ and compute: $$\begin{gather*}P[X\leq 20]=\int_0^{20}f_X(x)\,dx\\\\ ⨠⨠ \quad \int_0^{20}\frac{10^{-6}}{2}t^2 e^{-0.01\cdot t}\,dt\quad ⨠⨠ \quad \approx 0.00115\end{gather*}$$

