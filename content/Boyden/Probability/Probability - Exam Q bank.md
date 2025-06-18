
#### Spark plugs and coils
%% Deep 25S-CP2 %%
When customers bring a certain type of car to a mechanic with engine misfires, the mechanic checks first for problems with spark plugs and then with coils. $40 \%$ of these cars have faulty spark plugs and $56 \%$ have faulty coils. $8 \%$ have a problem with both the spark plugs and the coils.

(a) What is the probability that a randomly selected car has at least one fault?

(b) What is the probability that a randomly selected car has exactly one of these two faults?


#### Computer errors
%% Deep 25S-CP2 %%
A computer program may contain a syntax error or a logic error or both types of errors. The probability that a program has both types of error is 0.16. The probability that a program has a syntax error given that it has a logic error is 0.4. The probability that a program has a logic error given that it has a syntax error is 0.5.

(a) Find the probability that a particular program has at least one type of error.

(b) Are the events “program has a syntax error” and "program has a logic error” independent? Justify your answer.


#### Passing the exam
%% Deep 25S-CP2 %%
An exam has 3 sections. The first section has 2 problems, the second section has 3 problems, and the third section has 4 problems. To pass a section, you must solve at least 1 problem in that section. You need to pass all 3 sections to pass the exam.

The probability of solving a (any) problem $=0.75$. Solving any problem is independent of solving any other problem.

What is the probability of passing the exam? (Assume that you attempted all problems.)


#### Insurance risk groups
%% Deep 25S-CP2 %%
An insurance company divides customers into three risk categories: Good (G), Medium (M), and Poor (P). Assume the following distribution of customers: 70\% are Good risks, 20\% are Medium risks, and $10 \%$ are Poor risks. The probabilities of a customer filing an accident claim (C) are: $0.5 \%$ for Good, $1 \%$ for Medium, and $2.5 \%$ for Poor. A customer is chosen at random.

(a) What is the probability that the customer files a claim?

(b) If a customer has filed a claim, what is the probability that the customer was in the Good risk category?


#### Warning light for hydraulic pump
%% Deep 25S-CP2 %%
A warning light in the cockpit of a plane is supposed to indicate when a hydraulic pump is inoperative. If the pump is inoperative, then there is a probability of 0.992 that the warning light will come on. However, there is a probability of 0.003 that the warning light will come on even when the pump is operating correctly. Furthermore, there is a probability of 0.996 that the pump is operating correctly.

(a) What is the probability that the warning light comes on?

(b) If the warning light comes on, what is the probability that the pump really is inoperative?


#### QC Inspector
%% Deep 25S-CP2,3 %%
A lot containing 10 components is sampled by a quality control inspector. The lot contains 7 good components and 3 defective components. A random sample of 2 is taken (without replacement) by the inspector. Let X represent the number of good components in the inspector's sample.

(a) What is the probability mass function (PMF) of $X$?

(b) What is the cumulative distribution function (CDF) of $X$?

(c) Find $E[X]$.

(d) Find $\mathrm{Var}[X]$.


#### Doctor’s visits
%% Deep 25S-CP4 %%
I am supposed to visit my doctor once every four months to get my blood pressure checked. However, I have a hard time sticking to the schedule, and as a result, rarely do I visit my doctor three times a year. The function below is the CDF of X, the number of my visits in a year.

$$
F_X(x)=\begin{cases}0 & x<0 \\
0.26 & 0 \leq x<1 \\
0.53 & 1 \leq x<2 \\
0.97 & 2 \leq x<3 \\
1 & x \geq 3\end{cases}
$$

(a) Find the probability that I will visit my doctor more than once in a year.

(b) Find the number of times I expect to visit my doctor in a typical year.


#### Elevator arrival
%% Deep 25S-CP4 %%
Let $X$ denote the time (in minutes) a person waits for an elevator to arrive. Also suppose that no one waits for more than 2 minutes ever. The function below is the CDF of $X$.

$$
F_X(x)=\begin{cases}
0 & x<0 \\
\frac{x^2}{2} & 0 \leq x \leq 1 \\
2 x-\frac{x^2}{2}-1 & 1 \leq x \leq 2 \\
1 & x>2
\end{cases}
$$

(a) Find the probability that a person will have to wait for less than 0.5 minutes for the elevator to arrive.

(b) What is the mean amount of time (in minutes) a person will wait for the elevator to
arrive? That is, find $E(X)$.


#### Potholes
%% Deep 25S-CP4 %%
There are a lot of small potholes on the US-1N between Conowingo, MD and Concordville, PA, and once or twice a month, Deep drives this stretch on my way to Philadelphia from Charlottesville. He has realized that this situation (potholes on the highway) can be modeled by a Poisson process, and that if the RV $X$ denotes the distance between successive potholes (measured in miles), then the CDF of $X$ is: 

$$
F_X(x)=\begin{cases}1-e^{-0.5 x} & x \geq 0 \\
0 & x<0\end{cases}
$$

(a) What is the mean number of potholes in a 2-mile stretch of the highway?

(b) What is the probability that there will be *at least* 2 potholes in a 2-mile stretch of the
highway?


#### Body weights
%% Deep 25S-CP5 %%
Assume that body weights of men are Normally distributed with a mean of 170 pounds and a standard deviation of 30 pounds.

What is the body weight threshold separating the lightest $90 \%$ from the heaviest $10 \%$ ?


#### Potholes spacing
%% Deep 25S-CP5 %%
The distance ($X$ , measured in miles) between successive potholes on a highway follows an exponential distribution with parameter $\lambda=1$ per mile.

For a research project, a civil engineer is interested in learning more about the square roots of the distances between successive potholes. What is the PDF of $Y=\sqrt{X}$?


#### Series of games, joint PMF
%% Deep 25S-CP5,7 %%
Two teams, A and B, will play a series of up to 3 games. The series ends when either team wins 2 games, so there are only 2 games if either team wins the first two games.

A game can't end in a tie. The outcomes of the games are independent of each other. The probability of team A winning any game is 0.6 .

Let X denote the total number of games in the series. Let Y denote the number of games won by team A .

(a) Construct the joint PMF of $X$ and $Y$.

(b) Given that 3 games were played, find the minimum mean square error estimate of the number of games won by A.


#### Comparator circuit
%% Deep 25S-CP5 %%
I have designed a comparator circuit with a multiplexer that chooses the smaller of two inputs $X$ and $Y$.

Suppose $X$ and $Y$ are independent uniform continuous random variables with range $(0,1)$.

Find the PDF of the output $W$. (Include bounds for $W$.)


#### Adder circuit
%% Deep 25S-CP6 %%
I have designed an analog adder circuit that adds two inputs $X$ and $Y$. So the output is $W = X + Y$. Assume $X$ and $Y$ are independent uniform continuous random variables with range $(0,1)$.

Find the CDF of the output $W$.


#### Community college ages
%% Deep 25S-CP7,8 %%
At a community college, the mean age of the students is 22.3 years, and the standard deviation is 4 years. A random sample of 64 students is drawn.

(a) What is the probability that the average age of the students in the random sample is less than 23 years?

(b) Use Markov's Inequality to find an upper bound for the probability that the average age of the students in the random sample is more than 23 years.

(c) What is the probability that the total age of the students in the random sample is less than 1472 years?


#### Doorbell system
%% Deep 25S-CP7 %%
An automatic doorbell system rings a bell whenever it detects someone by the door. The system uses a photodetector. If no one is present (null hypothesis), the photodetector output N is a Poisson RV with expected value $2500$ photons. Otherwise, when a person is present (second hypothesis), the photodetector output is a Poisson RV with expected value 3000 photons.

Assume 50-50 prior probability that someone is outside the door.

Design a binary hypothesis test to determine whether someone is outside the door. Clearly identify the two acceptance sets as a function of the number of photons.


#### Telemetry
%% Deep 25S-CP7 %%
A telemetry signal $X$ transmitted from a temperature sensor on a communications satellite is a random variable with $E[X]=0$ and $\mathrm{Var}[X]=4$.

The receiver at mission control receives the signal $Y=X+N$, where $N$ is a noise voltage that is independent of $X$ and has this PDF: 

$$f_N(n)=\begin{cases}0.25 & -2 \leq n \leq 2 \\
0 & \text {otherwise}\end{cases}$$

Find the optimal linear estimator of $X$ for a particular value of $Y$.


#### PMF and CDF
The thickness of wood paneling (in inches) that a customer orders is a discrete random variable with the following CDF: 

$$F_X(x)=\left\{\begin{array}{lr}0 & x<1 / 8 \\0.2 & 1/8 \leq x<1 / 4 \\0.9 & 1/4 \leq x<3 / 8 \\1 & x \geq 3 / 8\end{array}\right.$$

(a) Find the PMF of X.

(b) Find the probability that a piece of the paneling is exactly $3/16\,\mathrm{in}$ thick.

(c) Find the probability that a piece of the paneling is no thicker than $3/16\,\mathrm{in}$.


#### Drawing cards with replacement
A standard deck of cards has 52 cards in 4 suits (hearts, spades, diamonds, clubs). A card is drawn and then replaced 8 times.

(a) The total number of hearts drawn is counted by the variable $X$. Define the applicable distribution including parameters.

(b) We seek the probability that the $2^\text{nd}$ heart drawn will be drawn in the first half. Define the applicable distribution, with parameters, and compute an expression for this probability.


#### Counting combinations
Suppose a password must be created using 5 letters and 3 numerals. No letter or numeral may be repeated. There are 26 letters and 10 numerals.

(a) How many unique passwords can be created if the letters must come first and the numerals last?

(b) How many unique passwords can be created if any ordering pattern of 5 letters and 3 numerals is allowed?

(c) How many ways are there to put 17 guinea pigs into 3 buckets?


#### PDF of function on a variable
Let $X$ and $W$ be random variables such that $W=X^3-1$. Suppose the PDF of $X$ is given by: 

$$
f_X(x)=\left\{\begin{array}{cc}
\frac{3}{8} x^2 & 0 \leq x \leq 2 \\
0 & \text { otherwise }
\end{array}\right.
$$

Find the PDF of $W$.


#### Iterated expectation

Roll a standard die, and let $N$ denote the number rolled.

Now toss a fair coin $N$ times. Let $S$ be the number of heads observed.

What is $E[S]$? Indicate clearly your use of Iterated Expectation.


#### Poisson Sum Rule
The PMF of a Poisson variable $X\sim\mathrm{Pois}(\lambda)$ is $P_X(k)\;=\; e^{-\lambda}\frac{\lambda^k}{k!}$ for $k=1,\,2,\,3,\,\dots$.

Suppose $X\sim\mathrm{Pois}(\lambda)$ and $Y\sim\mathrm{Pois}(\mu)$. Derive the Poisson Sum Rule: 

$$X+Y\sim\mathrm{Pois}(\lambda+\mu)$$
 
 Check lecture notes to see if this is there and whether it’s required. 


#### Call center
Suppose a call center receives calls at an average rate of 6 calls per hour.

What is the probability that the 14th call comes 20 minutes or less after the 11th call?



