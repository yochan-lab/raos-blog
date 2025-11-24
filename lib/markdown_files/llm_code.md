---
title: "Doesn't the fact that LLMs can 'write code' prove that they can also reason and plan? (Hint: Nope..)"
date: "2024-01-07"
author: "Rao"
---

#SundayHarangue

**tldr; LLMs outputting better quality Python than English is more a reflection of the the difference between approximate retrieval on github vs. general web than of any latent reasoning abilities.**


By now, everyone sort of knows that using LLMs like GPT4 as coding co-pilots seems to work much better than  using them as fact finding co-pilots.  

People tend to read too much into this and start ascribing reasoning/generalized planning powers to LLMs, rather than understand this as a simple  consequence of the fact that github and general web are  very different training corpora. 

In fact, some research efforts (e.g. Voyager) have leveraged it to get  LLMs to do better in planning and reasoning tasks. The idea is to have the LLM output code for carrying out tasks, which is then run on the simulator (or a very forgiving game world). Given that generalized plans can be written as programs (the late Drew McDermott used to say that planning is just automatic programming on a language with primitives corresponding to executable actions), if GPT4 can produce code correctly, then it can be argued that it does planning too--something that flies in the face of work like ours showing that they can't, in fact, do planning in autonomous modes (c.f. [this tweet](https://x.com/rao2z/status/1726962530143412641?s=20)). 

So what gives? 

There are two reasons. First is the quality of the code data that LLMs are trained on, and second the fact that the distance between syntax and semantics is lower for formal languages (such as code) than for the highly  flexible natural languages. 

Speaking of the first, the  "quality" of  approximate retrieval that LLMs do (see [this tweet](https://x.com/rao2z/status/1740692722099630237?s=20) for more on approximate retrieval) depends very much on the quality of the data the LLMs are trained on.  For natural language, even after removing egregious data stores like 4Chan, the LLMs are still trained on a whole lot of  language data that has very high heterogeneity in the factual basis or the value system of the agents (humans) who produced that data. After all, flat earthers and vaccine deniers can put forward as exquisitely cogent natural language text as round earthers and vaccine supporters. 

In contrast, though, the code data for most LLMs comes  primarily from github. Most of that code is "working" (given the incentive structure that the prospective employers are looking at it!) and the value system heterogeneity of software engineers tends to play much smaller part in what kind of code is put on github. 

This explains why the code completion is of higher quality than English completion.

It also explains the folk wisdom that where the answer can be phrased either in English or Python,  it pays to have LLM output Python.  (Imagine that your LLM has been trained on the general web corpora in English, but only on the medical journals in French. Asking your LLM to answer an English medical query in French  is, after all, going to make it do approximate retrieval on medical journals rather than on general web!). 

Now, while code completion is likely to be higher quality than English completion, it is still approximate retrieval--and there is no guarantee that the code is going to be correct (thus the occasional tweets from people saying how long they spent hunting down an evil bug in seemingly good code the co-pilot wrote for them..).

Part of the reason the code seems to work more often than not can be chalked up to the twin facts that (a) there is an incremental interpreter in the wings that can flag obvious execution exceptions (thus drawing the human coder's debugging attention)  (b) the chance that a syntactically correct piece of code is also semantically right, while not guaranteed, is higher than a syntactically correct piece of prose being semantically right. (This, after all, has been one of the primary motivations for expressing knowledge in formal languages..). 

In the few cases, such as voyager,  where researchers claim that the code produced is good enough that it is directly run in the world, a careful reading shows that they are mostly dependent on the world being forgiving and generously ergodic! (c.f. [this tweet](https://x.com/rao2z/status/1679427518699380741?s=20)) 

(Sometimes this claim is accompanied by "we have the LLM itself verify the code before it is sent to run in the world"--but as we have argued elsewhere (c.f. [this tweet](https://x.com/rao2z/status/1716257588768346328?s=20)), there is no reason to believe that LLMs can self-verify!). 

[!code](/images/llm_code.jpeg)