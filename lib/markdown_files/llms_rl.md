---
title: "LLMs and 'True' RL"
date: "2024-12-15"
author: "Rao"
---

#SundayHarangue (hey, it may already be Sunday somewhere, for all you know..) 

With RL back in favor, there is some heated discussion on #AI Twitter on whether or not LLMs use any "true" RL. Unfortunately, IMHO, some of the discussion confounds some basic elements of RL. 

(1) [Confusing RL vs. IRL] A bunch of the confusion revolves around RLHF/DPO--and whether they are "true RL". 

RLHF is more about learning a reward/preference model. So it is more about Inverse RL than RL. Classical RL assumes the reward washes over the agent when it enters the reward bearing state; IRL tries to learn reward consistent with observed behavior--typically of human agents. 

RLHF, IMHO, is a strange name for using a sort of IRL to get a reward model (from pair-wise human comparisons) but doing 1-step optimization wrt it. DPO differs from RLHF in that it operates directly on the pairwise comparisons without making an intermediate reward function.  

The real problem with the intended use of RLHF is not so much that "it is not True RL" as that "it depends on painfully primitive high sample complexity pair-wise comparison data". See [v_mudit](https://x.com/v_mudit)'s PhD thesis for a spectrum of improvements on this front: 

https://x.com/rao2z/status/1826197491584324062

(2) [Confusing Horizon and Goals]: Some folks argue that LLMs using RLHF don't use "True RL" because they don't have intrinsic goal directedness.  Even beyond the above clarification that RLHF is more IRL than RL, there are some additional confusions with this argument.  

In RL, the reward model captures generalized goals of the agent. So if you have the reward model, you have the information needed to be goal directed. 

The difference you have with RLHF/DPO methods is that they optimize w.r.t 1 step horizon, while normal RL does k-step/indefinite/infinite horizon optimization. 

(3) [Missing the Importance of Action space:] As important as "reward model" is, an equally important part of RL is "action space". DPO/RLHF don't quite make clear what the action space is--focusing instead on directly modifying the weights. 

This is the reason why the usual "RL as agent acting on an environment to optimize its expected reward" story fall apart in describing RLHF. 

Alternative action spaces do exist for LLMs. I sketch out "prompt augmentations" as the actions operating directly on the LLM as the environment here 

https://x.com/rao2z/status/1865985285034553478 

(In this "prompt augmentation" model, the base LLM itself is the environment, and the prompt augmentations are the "actions". The reward signal comes from correct solutions to the synthetic data. )