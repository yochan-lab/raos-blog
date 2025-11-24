---
title: "The Delta on Deepseek R1"
date: "2025-02-02"
author: "Rao"
---

#SundayHarangue 

For any of you who watched my December 
[@MLStreetTalk](https://x.com/MLStreetTalk)
 interview (https://youtube.com/watch?v=2xFTNXK6AzQ), and wondered how to work 
[@deepseek_ai](https://x.com/deepseek_ai)
 R1  into that perspective, here is an addendum that covers that development. 

[Training Stage involves RL post-training] 

--> In the parlance of the interivew, both R1-Zero and R1 use RL post-training (instead of just SFT'ing on derivational traces given by humans, or by external solvers 

-> R1-Zero, the pure RL method, is actually quite close to the prompt augmentation perspective I was sketching. You can think of R1-zero as basically constructing its own derivational traces with RL (cf. https://x.com/rao2z/status/1865985285034553478)

-->It is conceptually useful to think of R1-Zero as having two substages: (1) construct "derivational (prompt augmentation) traces" for a whole bunch of synthetic data with known answers (2) train the LLM on these RL-constructed derivational traces. The GRPO of the actual R1-Zero essentially combines these stages together. 

--> R1 muddies the waters by providing additional human-annotated derivational traces --supposedly to make the intermediate tokens of R1 more palatable to the humans. All this does is make RL stick closer to generating intermediate tokens that sort of kinda look like human generated ones. (This can actuallybe a bad thing--see below).

[Inference Stage is just LLM trained on derivational traces]

--> At the inference stage, neither R1-Zero nor R1 do any explicit search. The LLM, having been trained on RL-learned derivational traces (see above), is just used. This means there is no separate adaptive increase of search effort in the form of explicit inference time scaling techniques such as MCT or one-of-k or constrained decoding [c.f. [this tweet](https://x.com/rao2z/status/1863458138084573347)]. 

While R1 doesn't do any of this adaptive inference time computation, it is not clear that this is going to be the last word.  From the computational complexity perspective, I can easily imagine situations where lack of this adaptivity will limit generalization to harder instances (c.f. [this tweet](https://x.com/rao2z/status/1872154745714180552)). After all, we did see this for the normal CoT (c.f. [this paper](https://arxiv.org/abs/2405.04776))

Also, as an aside, the AI-twitter is agog with a lot of "test time compute" metaphors on R1 which honestly are a bit of a head-scratcher given this lack of adaptivity. 

[Distillation is just smaller LLMs SFT'd on the derivational traces produced by R1]

--> When R1 does the distillation to smaller models, it basically generates more derivational traces for test problems in the form of RL-learned tokens, rejects the traces if the eventual solution is wrong, and just SFTs the smaller models on these derivational traces produced from RL-training.). In this case, with the external rejection of traces leading to wrong solutions, R1 is basically acting like an external correct solver such as A* that generates some derivational traces/mumbles before outputting the solution--and these become the SFT data for the smaller LLMs. 

I suspect that this will have the usual limitations of LLaMAI with derivational traces (c.f. [this tweet](https://x.com/rao2z/status/1865985285034553478))

[R1 does seem to have accuracy comparable to o1-preview on PlanBench]

See [this tweet](https://x.com/rao2z/status/1881733968787083380)

[On derivational traces and  "reasoning patterns"] 

--> As I said, I think R1 muddies the waters.  Given that the intermediate tokens are imitative and performative with no semantic impact on actual reasoning, and given that Deepseek only focuses on solution correctness and never actually evaluates the reasoning patterns anyways, all that the "human style" of the intermediate tokens does is to lull end users into thinking the answer might have been right since the model is mumbling like humans might do!  This can actually be dangerous (c.f. [this tweet](https://x.com/rao2z/status/1879186364891037932)). It is also probably  inefficient--since left to RL, it may have learned prompt augmentations that--while seemingly gobbledygook to humans--may actually lead to higher post-hoc solution accuracy. (c.f. [this tweet](https://x.com/rao2z/status/1884678185209512128)). 

Thus de-anthropomorphizing intermediate tokens will be a good thing in the long run, IMHO (c.f. [this tweet](https://x.com/rao2z/status/1881480424473374792))

https://x.com/rao2z/status/1884233801208926337