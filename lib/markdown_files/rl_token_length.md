---
title: "Confusions about RL Intermediate Token Lengths"
date: "2025-08-22"
author: "Rao"
---

Confusions about RL Intermediate Token Lengths: Several studies, including ours ([see our paper](https://arxiv.org/abs/2505.13697)) thanks to 
[@soumya_samineni](https://x.com/soumya_samineni)
& 
[@durgesh_kalwar](https://x.com/durgesh_kalwar)
, have observed the fact that DeepSeek R1-style RL on LLMs produce longer intermediate token sequences preceding their incorrect responses compared to their correct ones.

The consequences of this underlying phenomenon have been, IMHO, confounded both as "RL is making the models learn to reason" (as R1 itself did) and, more recently, as "we can make RL more efficient by sampling more candidates from the base LLM during training."

In the case of latter, the approaches that would train the RL part by sampling *more trajectories* (K) from the base LLM--the effect of sampling more trajectories would be that you will likely have a larger number of correct trajectories (c). 

Now if you sort these K sampled trajectories in terms of their length, and select k < K the shortest trajectories, the chance is quite high that you are mostly selecting correct trajectories to train RL.  This makes RL get better signal per epoch. (Interestingly, the smaller the k, the higher the chance that you are mostly picking correct trajectories!)

The proximal consequence of this, ceteris paribus,  is that RL will generate more correct trajectories during inference time, and given the correlation between correctness and shorter trajectories, you will see a decrease of average trajectory length. 

The real lesson from such exercises, IMHO, is that you can increase the RL performance (in terms of accuracy), if you actually train with more correct trajectories during training. (To see this, consider sampling too few trajectories from the base model, and none of them include a correct solution--clearly RL will not go very far with that weak signal!). 

You can either do this by making the base model generate more trajectories (K), or, alternately, use something like LLM-Modulo or MCT during training to ensure that you select correct trajectories for RL training.  (As I discussed before, both of these are examples of "test-time scaling" done at training time to solve the synthetic problems to correctness).

![RL token length](/images/rl_token.jpeg)

https://x.com/rao2z/status/1926752234580090959