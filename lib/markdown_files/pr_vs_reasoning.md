---
title: "Pattern recognition vs. reasoning"
date: "2024-02-18"
author: "Rao"
---

#SundayHarangue 

The impressive deep pattern recognition abilities of #DNN's such as #LLM's are sometimes confused for reasoning abilities

I can learn to guess, with high accuracy, whether a SAT instance is satisfiable or not, but this not the same as knowing how to solve SAT. Let me explain.

Suppose you train a learner with a large number of Boolean 3-SAT instances labeled with whether or not they are satisfiable. There is no reason to doubt  that a modern #DNN-based  leaner will manage to learn deep features corresponding to the γ ratio-- #clauses/#variable and armed with γ, it can also essentially  figure out the sharp-threshold phenomenon w.r.t. to  γ, and should be able to predict with high certainty that the  γ < 4.3  are satisfiable  and  γ > 4.3 are unsatisfiable.

![3sat](/images/3sat.jpeg)

Depending on the distribution of instances provided, this simple guess can be of arbitrarily high accuracy (e.g. if there are not too many instances in the  γ ~ 4.3 region). This can be easily mistaken as the learner "learning" to reason about satisfiability.

Clearly the learner has no idea of resolution rule or Davis-Putnam procedure, and yet  has been dubbed an SAT-expert 😆. Such reasoning by pattern recognition will  have brittle generalizability limitations. If the test instances were chosen from the region of γ~4.3, the performance of the learner degenerates to a coin-tosser--even though the trusty Davis-Putnam will have no problem succeeding!

Of course, seeing patterns in reasoning problems is not anything to be sneezed at. After all, our interest in mastering it is what is behind much of "street fighting" math  (e.g. Polya's "How to Solve it"). But finding approximate shortcuts over provably correct reasoning procedure is obviously  not equivalent to doing reasoning--unless  you have an ability  to establish from first principles reasoning that your hunch is actually  correct.

(A bit of System 1/2 analogy:  System 2 reasoning can be compiled (approximately) into System 1 reflexes to improve efficiency--even though the reasoning resides in System 2.

System 1 may have helped us  survive;  but it is System 2 that helped our civilization to flourish!) 

This is basically  the deeper reason by #LLM's will  have difficulty "planning".  Even if you get them to  imitate planning by fine tuning them with a ton of problem instances and plans, they can still be brittle and highly distribution sensitive.

https://x.com/bendee983/status/1551607023313231876