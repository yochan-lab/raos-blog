---
title: "RL is great; but RL envy in LLMs may not be.. (or R1's SFT vs. RL is more like Batch vs. SGD)"
date: "2025-03-05"
author: "Rao"
---

#SundayHarangue (Special Turing edition 😋)

There has been a tendency in the LLM literature to dress up simplistic ideas in RL garb to gain additional respectability. RLHF is of course the poster child here--conflating 1-step use of pair-wise human-preference data (IRL) with RL 

see "LLMs and True RL" 

https://x.com/rao2z/status/1872950513282760723

Increasingly, I think the role of RL in DeepSeek R1's success might also have been overblown.  If you read the R1 paper, you realize that that R1 is really not being used to develop "reasoning traces"/intermediate tokens de novo.  ([this tweet](https://x.com/rao2z/status/1886191832071323941)) 

(1) R1's  base model already has the capability of generating intermediate tokens before the final solution.

(2) The RL phase basically chooses between alternate intermediate token-final solution pairs (using the external verifier) and uses policy gradient to bias the base LLM towards those pairs (effectively boosting intermediate tokens that seem to lead to correct solutions). 

Given this, it is possible that the distinction between RL and SFT approaches may not be as stark as the R1 paper makes them out to be (especially given that their RL doesn't use any process reward model). 

In particular, SFT vs. RL begins to looks more like Batch vs SGD.

Given N synthetic data problems, along with a verifier capable of checking their solutions, one obvious idea is to have the base model generate k solution trajectories (intermediate tokens followed by solution guesses) for each of these problems, use the verifier to check which ones end up in the correct solutions, collect these "correct" trajectories, and run an SFT phase and change the underlying LLM token production policy in a batch fashion. 

Viewed this way, all  RL version is  doing differently from SFT is to do policy change once per a (few) synthetic training data points. In so doing, you have the base LLM evolving continually during training--and this could confer similar advantages as those provided by SGD updates over batch updates. 

In other words, an iterative SFT approach, that splits the N synthetic data problems into m mini batches,  and does m sequential SFTs may well be indistinguishable from RL in performance.  

(The distillation results in R1 already suggest this to some extent IMHO; see [this tweet](https://x.com/rao2z/status/1886283436559855674)).

The real source of strength in R1 may thus be (1) the base model that has been pre-trained with enough intermediate token data on the relevant domains to provide k reasonable trajectories for each synthetic data problem such that at least some of them actually end up in solutions and (2) availability of the verifiers that provide strong reward signal--that can be used to push either an SFT or an iterative SFT/RL phase. 

I do believe it is possible to actually use full power of RL--I think the two LLM model I speculated for o1 actually attempts to evolve the intermediate tokens (c.f. [this tweet](https://x.com/rao2z/status/1834354533931385203))

===
While this thread focused on RL vs. SFT, the other hype around RL in R1 has been about the whole "reasoning traces"--I have argued elsewhere that the "reasoning trace" anthropomorphization holds little water and we may have moved from LLMs to LMMs--Large Mumbling Models that have higher accuracy.. (see: [this tweet](https://x.com/rao2z/status/1891260345165263128) or you can hear it here: [this video](https://youtube.com/watch?v=CQ5JS3v61Ns&list=PLNONVE5W8PCRbf3WmbcqgXPToJuA2NUfP&t=3786s) )