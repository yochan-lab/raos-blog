---
title: "Interpretability in the context of intermediate tokens produced by LRMs"
date: "2025-08-14"
author: "Rao"
---

Interpretability, as used in the context of the intermediate tokens produced by LRMs, often confounds two very different notions:  
(1) Interpretability of these tokens to the end user and 
(2) mechanistic interpretability of why the tokens seem to help LRMs.

1/ The first--Interpretability of intermediate tokens to the end user--is very much questionable, as we argue in our paper 👇...

https://x.com/rao2z/status/1927707640223719631

2/ The second--mechanistic interpretability of why the tokens seem to help LRMs--is reasonable, but these studies don't even have to be limited to linguistic intermediate tokens. Better to view intermediate tokens as prompt augmentations that help LRM

https://x.com/rao2z/status/1865985285034553478

3/ Intermediate tokens help the LRMs--but have no useful role for end users.   (Similar to how a teacher's internal mutterings while groping for a solution are likely useful for them, but have no direct use to the student!). 

4/ Explaining your reasoning to the end user can sometimes be helpful--but this is different from the intermediate tokens. Such explanations  must be in terms that the end user understands--foregrounding human-AI interaction challenges. c.f. [our paper](https://arxiv.org/abs/2405.15804)

5/ It is perhaps not surprising that the OpenAI oss models have three rather than just two fields in their outputs: <think></think>; <commentary></commentary>, <solution></solution>. Only the last two need to make sense to the end user! 