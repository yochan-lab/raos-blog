---
title: "On the fallacy of 'If it ain't strictly retrieval, it must be reasoning' argument.."
date: "2024-11-20"
author: "Rao"
---

#SundayHarangue (on Wednesday)

There is a tendency among some LLM researchers to claim that LLMs must be somehow capable of doing some sort of reasoning since they are after all not doing the vanilla retrieval. 

This harks back to Sam Altman's famous "For some definition of reasoning, LLMs do some kind of reasoning" dictum (c.f. 👇)

https://x.com/rao2z/status/1640090908430569472

There are obvious problems with this stance. 

To begin with, no one ever said that LLMs just do retrieval (in fact, having been trained to be a type of n-gram models, they can't actually do exact retrieval by default!). 

Anyone who ever played with LLMs from GPT3 on know that their appeal is that they don't do exact retrieval.

They do some generative version of retrieval that I have called "approximate retrieval" (and tried to pin it down a bit more firmly here: 👇)

https://x.com/rao2z/status/1740692722099630237

If you visualize retrieval and reasoning as two points on a linear spectrum, approximate retrieval is different both from retrieval and reasoning. 

It is crucial to note that it differs from both retrieval and reasoning. The fact that it is different from retrieval can't thus be  used as some kind of proof that it must be doing reasoning! . The fortuitous intersection between approximate retrieval and reasoning is so uneven as to lead to popularization of phrases like jagged intelligence 

https://x.com/rao2z/status/1821371034332741651

Indeed the implicit hypothesis that mere scale-up of autoregressive LLMs will magically convert their approximate retrieval to (sound) reasoning has been tested with considerable expense from GPT3 on--and has so far not yielded any fruit. If anything, more studies have established the limitations of autoregressive LLMs in reasoning tasks (I guess we were just doing it way before it was cool 😄)

https://x.com/rao2z/status/1539435614503768065 

This is becoming common-enough knowledge now that major vendors are slowly shifting to adding actual reasoning components on top of autoregressive LLMs--despite  the stone soup ironies some of those approaches (see 👇)

https://x.com/rao2z/status/1845607153580838979

tldr; you can't claim that LLMs must be doing reasoning just because they are not doing retrieval--the law of excluded middle doesn't quite apply! 

If you want to do a better/more formal characterization of their approximate retrieval--that would be a great research direction.