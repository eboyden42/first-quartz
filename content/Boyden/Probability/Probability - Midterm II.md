---
title: Midterm II - APMA 3100 - McMillan - Spring 2025
---
# Second Midterm Exam
<br>

## APMA 3100 $\quad - \quad$  Sec. 003 & 004 $\quad - \quad$ McMillan

28 Mar 2025
<br>
Print name: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
<br>

Computing ID: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

Section: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_
<br><br><br>

- You have 50 minutes to complete the exam.
- No books, personal paper, computers, or visible phones. Scientific calculators are allowed.
- You must deposit your phone with the instructor while using the bathroom if you wish to continue the exam on your return.
- You may have water, snacks, pens, pencils, erasers.
- You are not allowed to communicate with anyone except the instructor during the exam.
- Please **draw a box** around your final answer for each subquestion.
- The structure, quality, and clarity of your entire solution will be assessed. The final answer alone may be worth only part of the problem value.

<br><br><br><br><br>


#### Honor pledge

“On my honor as a student, I pledge that I have neither given nor received aid on this exam.”
<br>
Sign your name, pledging your honor: \_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_\_

<div class="page-break" style="page-break-before: always;"></div>


#### Question 01 - Joint PMF
(a) Suppose $A$ is a fixed event written in *discrete* variables $X$ and $Y$.

Write a formula for $P_{X,Y|A}(k,\ell)$: 

Now suppose $X$ and $Y$ have joint and marginal PMFs described by this table: 

| $Y\downarrow\; X\to$ |  0   |  1   |  2   | $P_Y(\ell):$ |
| :------------------: | :--: | :--: | :--: | :----------: |
|          1           | 0.05 | 0.07 | 0.08 |     0.20     |
|          2           | 0.08 | 0.10 | 0.12 |     0.30     |
|          3           | 0.12 | 0.33 | 0.05 |     0.50     |
|      $P_X(k):$       | 0.25 | 0.50 | 0.25 |              |

(b) Find the conditional PMF $P_{X,Y|X+Y\leq 2}(k,\ell)$. Put your answer in the table: 

| $Y\downarrow\; X\to$ |  0  |  1  |  2  |
| :------------------: | :-: | :-: | :-: |
|          1           |     |     |     |
|          2           |     |     |     |
|          3           |     |     |     |

(c) Find $E[X\mid X+Y\leq 2]$. $\qquad$ (d) Find the PMF of $X+Y$ (use the original table).

(e) Compute $\mathrm{Cov}[X,Y]$. (Hint: Short formula, and use the marginals.) Are $X$ and $Y$ independent?

<div class="page-break" style="page-break-before: always;"></div>

#### Question 02 - Joint PDF
Suppose $X$ and $Y$ have the following joint PDF: $$f_{X,Y}(x,y)\;=\; \begin{cases}8xy&0<x<y<1\\0&\text{otherwise}\end{cases}$$
(a) Compute $f_Y(y)$. $\qquad$ (b) Compute $f_{X|Y}(x\mid 0.5)$.

(c) Set up integral(s) for the CDF of $W=Y-X$. $\qquad$ (d) Set up integral(s) for the CDF of $W=\mathrm{Max}(X,Y)$.

<div class="page-break" style="page-break-before: always;"></div>

#### Question 03 - Sum of continuous variables
(a) State the sum rule for variance: $\;\mathrm{Var}[X+Y]=$

(b) Let $X \sim \mathrm{Unif}([0,5])$ and $Y \sim \mathrm{Exp}(1)$. Assume $X$ and $Y$ are independent.
Note: The PDF of $Y$ is $f_Y(t)=e^{-t}$ for $t\geq 0$ and $=0$ for $t<0$.

Calculate the PDF of $X+Y$ by performing a convolution.

<div class="page-break" style="page-break-before: always;"></div>

#### Question 04 - Iterated Expectation
(a) State the Iterated Expectation Theorem (using any variables you like): 
<br>

Now:
Let $T \sim \mathrm{Exp}(\lambda)$. Recall the data: $E[T]=1/\lambda$ and $\mathrm{Var}[T]=1/\lambda^2$.
Let $X$ be uniformly distributed on the interval $[0, T]$. (Notice that $X$ depends on $T$.)

(b) Find $E[X]$. $\qquad$ (c) Find $E[X^2]$. $\qquad$ Hint for both: Step 1: find $E[X\mid T=t]$.





