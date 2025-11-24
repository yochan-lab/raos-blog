---
title: "On the Stone Soup of LLM Reasoning"
date: "2025-10-13"
author: "Rao"
---

#SundayHarangue 

Stone soup is the European folk story where some clever travelers convince the gullible locals that they are making delicious soup with a stone--and they do need a few things to "improve its flavor"--such as carrots, potatoes, onions, butter etc.. 

There is nothing ipso facto wrong with Stone Soup--it is, after all, soup! It may even be delicious! The question instead is how much credit should the stone get for the soup's delciousness.

The version of Stone Soup in AGI/AI circles are claims that LLMs can reason and plan--with just a few things to "improve the flavor". 

These needed things needed can range from external tools/verifiers etc (as in LLM-Modulo), to tacking on search on top of LLMs (the tree of thoughts), to tacking on a Mu_zero/Alpha_go like RL component that influences pretraining as well as inference stage (the 🍓 o1 model; see 👇)

https://x.com/rao2z/status/1843003042150416543

The question is whether the "augmented" systems are LLMs or some other qualitatively different beasts better called LRMs (cf. [this tweet](https://x.com/rao2z/status/1838245253171814419)). 

Although it has become fashionable to equate LLMs to AI, and ask  "When will AI Reason?"--the fact of the matter is that we have always had AI systems--planning, RL etc.--capable of reasoning. It can be argued that much of AI before LLMs was in fact was deep and narrow System 2 approximators (and thus [this tweet](https://x.com/rao2z/status/967772541161897985) and [this tweet](https://x.com/rao2z/status/1493339216389894144)). 

The appeal of LLMs is that they are the first effective System 1 approximators that AI managed to develop (c.f. [this tweet](https://x.com/rao2z/status/1708329785745928558)). 

There have been several attempts to get System 2 reasoning behaviors from LLMs while keeping their essential autoregressive System 1 nature intact. These early attempts--such as "fine tuning", "Chain of thought" etc.--have by now been shown to be deeply flawed (c.f. [this tweet](https://x.com/rao2z/status/1839017744945094909) & [this tweet](https://x.com/rao2z/status/1824950896423518421)). In other words, no soup from them!  #Seinfeld 

In contrast, the approaches that tack on search/RL etc. at the inference stage seem to be more promising (c.f  [this tweet](https://x.com/rao2z/status/1843307760311533768)). But these "compound" LRM systems are no longer autoregressive LLMs and don't have any "start completing the prompt as soon you hit return" characteristic that is such a big part of LLM popularity!

In particular, if the LRM is taking indefinite and costly inference time compute, the right comparison will be to other System 2 AI approaches that incur such inference time costs.  Such considerations bring some of the traditional CS analyses--all but forgotten when online computation was given up for dead (c.f. [this tweet](https://x.com/rao2z/status/1500178336504442880)--back into play (see [this tweet](https://x.com/rao2z/status/1843307760311533768) & [this tweet](https://x.com/rao2z/status/1834354533931385203)). 

Interestingly, you can also err assuming that LRMs will  inherit all the limitations of LLMs (something that the analyses that clump, for example, o1 with autoregressive LLMs mistakenly make).. They don't!  Stone Soup is more than Stone--even if it may not be the best way to make soup!  

Specifically, many of the common critiques of LLM reasoning capabilities don't directly apply to LRMs. Not recognizing this and adding LRMs like o1 as yet another entry in a table brimming with autoregressive LLMs confuses the message.  (For example, if you look at the appendix of that latest Apple study on LLM reasoning, you will see that o1 does quite fine--accuracy-wise--on their instances with irrelevant information.) Another argument for separating their analysis--as we do

https://x.com/rao2z/status/1843307763356590288

![stone-soup](/images/stone-soup.jpeg)