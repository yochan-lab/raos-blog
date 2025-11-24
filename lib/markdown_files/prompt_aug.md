---
title: "Think 'Prompt Augmentations' rather than chains and thoughts!"
date: "2024-12-08"
author: "Rao"
---

#SundayHarangue (#NeurIPS2024 edition 😋)

LLM CoT for reasoning discourse can be de-anthropomorphized with significant clarity, once we agree that  CoT is a misleading fancy name for  aspirational prompt augmentation.  Let me explain. 

The interest in prompt augmentations stems from the general observation (hope?) that the completions of LLMs given an task prompt and an appropriate prompt augmentation can be more "correct" than the completions of LLMs given just the task prompt. 

That is, given a task prompt T, 

        ∃PA  s.t. Pr(Sol(LLM(T+PA), T)) > Pr(Sol(LLM(T),T))

(where PA is some appropriate prompt augmentation, LLM(x) is the completion output by LLM given x as the prompt, and Sol(y,T) checks, oracularly, if y contains solution for T)

Note that there is nothing here saying that PA must make any sense to the humans.  No thoughts. No prayers. (For example, the whole jailbreaking prompts are augmentations that often don't make any sense to the humans..)

The big question is how are you going to get the right prompt augmentation (PA). In other words, as we shall see below, the holy grail is learning the skolem function for the prompt augmentation. 

If the PA is human given and independent of the task, it is your  Kozima magic incantation aka zero-shot CoT (e.g. "Let's think step by step")

If the PA is human given and task dependent, it is the Wei et al CoT. While this type of CoTs might look like it is giving some general procedure to the LLM for that class of tasks, the point of [our #NeurIPS2024 paper](https://arxiv.org/abs/2405.04776) & [this tweet](https://x.com/rao2z/status/1760133260385177784) is that the CoT is not a general procedure that LLM is able to follow. It is thus best seen as  just an aspirational prompt augmentation. 

Much of the recent interest in prompt augmentations is the realization that they don't really have to be either of the original two cases. 

The fact that we have a "∃" in the prompt augmentation inequality above means that in the most general case, the PA may be a function of both the task and the LLM. We may need approaches to learn this skolem PA (skolem functions, anyone?)! (Note also that there is no need for PA to make any special sense to the human.)

Two approaches to learn this Skolem PA function have been pursued:

1. Try to follow the derivational trace of some actual search algorithm solving that class of tasks, and fine tune the LLM with those derivational traces (with the hope that they will themselves output the right prompt augmentations. These prompt augmentations may look like search-algorithm-specific derivational traces (and thus don't at all look like the usual CoTs!) but they most likely don't correspond to a derivational trace output by any sane search algorithm. They are just augmentations being "self-muttered" by the LLM. This has been given the fancy name of Internal Search/Internal Planning (and has been used in Search Former, Stream of Search and most recently by Schultz et al from DeepMind). I remain skeptical of the generalizability of this type of approach, and elaborate my reservations in this thread: 

https://x.com/rao2z/status/1777780410044604785

2. View the  PAs as pseudo actions applied to the LLM, and use an RL type framework to learn the q-values of the different PAs  (basically by tacking on a Mu_zero like learning approach after the pre-training but before any inference--aka "post training"). This is my candidate for what a system like o1 might actually be doing--as I speculated in this thread: 

https://x.com/rao2z/status/1843003042150416543 

I believe thinking in these non-anthropomorphic terms and admitting to ourselves that the game is to learn the skolem PA function that makes the underlying LLM blurt out a more correct completion will be a lot more useful in making sense of what is going on under the hood of the many Rube Goldberg approaches to LLM reasoning.

![Prompt Augmentations](/images/prompt_aug.jpeg)