---
title: "No. Training LLMs on purely factual data STILL WON'T cure them of 'Hallucinations'"
date: "2024-04-21"
author: "Rao"
---

#SundayHarangue

**tldr; higher quality training data can improve the quality of completions, but doesn't guarantee factuality as it can't fuly eliminate the possibility of hallucination.**

There is a persistent myth that LLM hallucinations are just a result of them being trained on un-curated and "non-factual" data, and will go away with high quality/factual data. This misses the basic n-gram structure of LLMs.

Yes, the presence of "non-factual" training data does increase the chance of producing "non-factual" completions.

But, even if you train LLMs only on factual data (and I will suspend my disbelief for a minute about the impossibility of doing that in a multi-polar world), LLMs can and will still continue to produce completions that are not factual!

A simplistic way to visualize it is this: Imagine you have access to a 1000 curated wikipedia documents. Don't  you think that by selectively cutting pasting from those documents, you can generate an inaccurate/not-fully-factual new one?

This happens because LLMs are completing the prompt probabilistically conditioned on the training corpus ("approximate retrieval")  rather than indexing and retrieving like (the boring and much maligned) databases! 

https://x.com/rao2z/status/1740692722099630237

The fact that factuality of the training data is not sufficient to avoid hallucinations is demonstrated in multiple ways in the current LLM usage patterns: 

(1) When you ask an LLM to generate a bio for you, it often combines factual statements with some made-up ones. 

(2) When you ask an LLM to summarize a given document (in the RAG style) it still can generate an incorrect summary (e.g. the work showing that 50% of book summaries contain factual errors) 

https://x.com/lefthanddraft/status/1777495120910426436

(3) When you fine-tune an LLM all LLaMAI-style, it can improve the generation but doesn't completely avoid hallucinated completions. 

https://x.com/rao2z/status/1777780410044604785


In general, the n-gram nature of LLMs makes them inherently "creative" helping them mix and match content/patterns they drew from different parts of the corpora. This is their boon--and also bane. 

https://x.com/rao2z/status/1772636256184520981

If factuality/correctness/truth is critical, you have to go LLM-Modulo external verifiers...see [this paper](https://arxiv.org/abs/2402.01817) 

https://x.com/rao2z/status/1779598122194514149