---
title: "The terminology around test-time/inference-time scaling is confusing."
date: "2025-07-28"
author: "Rao"
---

#SundayHarangue (belated)

The term Test-time/Inference-time scaling came into LLM/LRM literature to refer to techniques that use LLM as a generator at the inference time, and embed it in a search loop of some kind (including Generate-Test like LLM-Modulo, self-consistency, MCT etc). The  effort spent here is clearly problem-adaptive. 

After DeepSeek R1 however, the term has developed a confusing second association--to refer to the time spent generating the intermediate tokens (which, on the face of it, is quite pre-determined--as R1-like systems are just LLMs at the inference stage and have been pre-trained to produce intermediate tokens until hitting end intermediate tokens marker, when they shift to solution tokens). It is arguable as to whether the effort spent here is truly problem adaptive (although a bunch of qualitative evaluations of intermediate tokens attempt to analyze them as such)... see 👇

https://x.com/rao2z/status/1927707640223719631 

It may be worth disambiguating them at least, e.g. by calling the first explicit TTS and the second implicit TTS. There are of course strange hybrid  (hybrid TTS) methods that intercede in the intermediate token generation by adding "wait" tokens to make the LLM continue mumbling. These can be called hybrid TTS. 

It is also worth noting that implicit and explicit TTS can be complementary:  R1-like models--that come equipped with implicit TTS, can also be supplemented with explicit TTS. Indeed, our LRM-Modulo work shows that you can do explicit TTS on top of o1/R1 like models to further improve their accuracy (in our case, with guarantees)...see 👇

https://x.com/rao2z/status/1843307760311533768 

& [our paper](https://openreview.net/pdf?id=FkKBxp0FhR) 

(A cleaner explanation of much of this can be found in the piece below 👇--which is also available at [our paper](https://arxiv.org/pdf/2504.09762v1))

https://x.com/rao2z/status/1911472308314902647