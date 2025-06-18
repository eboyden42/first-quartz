## Statistical testing cont’d

#### 01
> [!problem] Significance test: Testing a coin by flipping until heads
> Design a significance test to test the hypothesis that a given coin is fair. You think it may be biased towards tails.
> 
> Your test runs the following experiment: flip the coin repeatedly until the first time a heads comes up. Let $N$ be the flip number of the first heads. This $N$ is your decision statistic.
> 
> Your test should have significance level $\alpha=0.02$.
> 
> Which of these coins would pass your test?
> 
> - Two-headed coin
> - Two-tailed coin
> - Both
> - Neither
#### 02
> [!problem] Significance test: Valves at various temperatures
> The lifetime of a certain fuel injection valve is known to follow an exponential distribution, $X\sim\mathrm{Exp}(\lambda)$, where $\lambda=\left(\frac{T}{300}\right)^2$ in failings per year and $T$ is the ambient temperature in degrees Celsius.
> 
> Sometimes the valves fail a good deal more frequently than usual, possibly due to cracked gaskets used in construction. To detect failings from cracked gaskets, each day $\ell$ valves are monitored in use at $100^\circ \,\mathrm{C}$ for the full $24\,\mathrm{hr}$ day and the number $N$ that fail is recorded.
> 
> (a) Suppose a significance test is designed such that it rejects the hypothesis “normal valves, no cracked gaskets” when just one (or more) fail the test. What is the significance level of this test, as a function of $\ell$?
> 
> (b) How many valves would have to be tested every day at $150^\circ\,\mathrm{C}$ in order to achieve a significance of $\alpha=0.2$? (Find $\ell$.)
> 
> (c) Is $\ell$ (to achieve $\alpha=0.2$) increasing, decreasing, or constant with increasing test temperature?
#### 03
> [!problem] Significance test: Blue eyes
> 
> A redditor claims that 10\% of people have blue eyes, but you think it is not that many. You work at the DMV for the summer, so you write down the eye color recorded on drivers’ licenses of various people in the database.
> 
> (a) Suppose you record the eye color of 1000 people and let $X$ be the number that are blue. If the rejection region is $\{X\leq 85\}$, what is the significance level of the test?
> 
> (b) Take again the experiment in (a). If you want a significance level of $\alpha=0.01$, what should the rejection region be in your test?
> 
> (c) Suppose the fact is that 7\% of people have blue eyes. How likely is it that your test in (b) rejects $H_0$? ^ltlq8q
#### 04
> [!problem] Binary hypothesis test: Identifying Uranium
> You are testing gram samples of pure Uranium to see if they are enriched. You have a Geiger counter that counts a number of gamma rays that come from nearby fission events in 1 second intervals after you press the count button.
> 
> If the sample is enriched, you expect a Poisson distribution $N$ of gamma rays in the counter with an average of 20. If the sample is not enriched (the null hypothesis), the average count will be 10.
> 
> (a) Design an ML test to decide whether it is ordinary $(H_0)$ or enriched ($H_1$). What is $A_0$? What are the probabilities of Type I, Type II, and Total error?
> 
> (b) After running the test many times, you have noticed that 70\% of the samples are ordinary, while 30% are enriched. Now design an MAP test. What is $A_0$? What are the probabilities of Type I, Type II, and Total error?
> 
> (c) Missing a bit of enriched Uranium is obviously a major problem. The damage to your reputation and pocketbook of missing enriched Uranium is $100\times$ the damage caused by incorrectly labeling ordinary Uranium as enriched. Now design an MC test. What is $A_0$? What are the probabilities of Type I, Type II, and Total error?
> 
> (d) What is the expected cost of each application of the MC test, assuming the cost of a false alarm is \$10,000? What is this number for the MAP test? ^v3r2o9
#### 05
> [!problem] Binary hypothesis test: Light bulbs
> 
> Light bulbs from box $A$ (the null hypothesis) typically last $1000\,\mathrm{hrs}$, and bulbs from box $B$ last $500\,\mathrm{hrs}$. You have some bulbs but don’t know which box they came from. Bulb lifetimes are exponential.
> 
> It costs \$50 in processing if you mistakenly assign a $B$ bulb to box $A$, and \$20 if you assign an $A$ bulb to box $B$.
> 
> After working at this for a while, you observed that 60\% of the bulbs you see come from box $A$, and the rest from box $B$.
> 
> Design a binary hypothesis test using MC design to make a decision rule to assign bulbs to boxes.
> 
> (a) What is $A_0$?
> 
> (b) What are the probabilities of Type I, Type II, and Total error?
> 
> (c) What is the expected cost for each application of the test?



%% 

 Hellings Sp25 “Binary Hypothesis Testing 
discrete example, no formula for PMF:

When a brain is scanned in a CAT test, analysis of the results yields a rating of 1, 2, 3, or 4. This represents (imperfect) evidence of whether there is a tumor.

$\begin{array}{lccccc}\text { If there is no tumor present, } & X & 1 & 2 & 3 & 4 \\ & \text { prob } & 0.4 & 0.3 & 0.2 & 0.1 \\ \text { If there is a tumor present, } & X & 1 & 2 & 3 & 4 \\ & \text { prob } & 0.0 & 0.1 & 0.3 & 0.6\end{array}$

Suppose that, of people who get CAT scans, $20 \%$ do have a tumor.

Furthermore, assume that declaring there is no tumor when there is one is ten times "worse" than declaring there is a tumor when there isn't one.
 %%

