---
title: "On the different hues of 'Inference Time Scaling' (ITS) in LLMs"
date: "2024-12-01"
author: "Rao"
---

#SundayHarangue

Since the release of 🍓o1, Inference Time Scaling  (ITS) has become a bit of a new buzzword. I have seen it being used in multiple contexts, with some previous techniques being rebranded as instances of the current ITS buzz..

The most basic thing common about all the uses of ITS seems to be that at inference time, LLMs are made to do more than just  output the completion of the prompt (thus taking more compute at the inference time than standard autoregressive LLMs). 

The specific way it is done varies quite a bit and has significant effects on the accuracy we might expect. 

Here is a small taxonomy of the various brands of ITS--with some comments about their relative power.

1. Changing only the inference (keeping the pre-trained LLM the same) 

The general idea here is to sample multiple candidates and select the response from them. 

There are two issues: How to generate a large sample of candidates and, how the promising candidate is seleced

[Candidate Generation:] The generation of multiple candidates can be done either by sampling directly from the LLM (with appropriate temperature settings), or augmenting the original prompt with additional augmenting strings to generate additional candidates. These augmenting strings have originally become popular with the "Chain of Thought" papers--but by now it is clear that augmenting string don't necessarily have to be anthropomorphized as "chains of thought"! (c.f. [this tweet](https://x.com/rao2z/status/1839017744945094909)). 

If we are considering augmenting strings (that we will call CoT strings--without any anthropomorphization), it is also possible to search among multiple CoT strings. (the recent Marco-o1 seems to do this explicitly). 

[More on this CoT strings in an upcoming thread]

[Selection:] Once the candidates are generated, the promsing one(s) need to be selected. The approaches here include

1.1 Simple majority voting (and other versions such as self-consistency)
 
1.2 Verifier based selection from the generated candidates.

The immediate question here is "what verifier?"

[1.2.1 LLMs as verifiers] Some early methods used LLMs themselves as verifiers--but there is work showing that LLMs are no better at self-verification than generation in the first place. They can have both false positives and false negatives. A crucial corollary is that the candidate eventually selected could still be incorrect--which would be problematic especially in cases where deployment failures are costly (c.f. [this tweet](https://x.com/rao2z/status/1772976043164614952))

[1.2.2 Learned Verifiers:] It is possible to improve the verification accuracy by learning task-specific verifiers; this has received some traction under the name "generative verifiers"--but it is a rather old idea that aims to leverage the fact that learning to predict correctness of the candidate is a "discriminative task" and thus can be of lower sample complexity (c.f. [this tweet](https://x.com/rao2z/status/1663523624429719553)). The learned verifiers can improve accuracy but provide no guarantees. 

[1.2.3 LLM-Modulo Approaches:] Another general alternative is to use external task-specific sound verifiers--as advocated in LLM-Modulo (c.f. [this tweet](https://x.com/rao2z/status/1813853757203202055)). These will ensure soundness of any solution coming out, and can be useful in safety-critical scenarios. 

One interesting limitation of these approaches is that the candidate generation itself is left to the vanilla pretrained LLM. Thus the effectiveness of the overall compound architecture will be a function of the "generative capabilities" of the underlying LLM (c.f. [this tweet](https://x.com/random_walker/status/1861745893327687804)). 

2. Changing the training phase of LLM, before applying inference time scaling 

The type of changes done in the training phase of the LLM can range from additional task-specific fine tuning--especially with derivational traces (c.f. [this tweet](https://x.com/rao2z/status/1777780410044604785)) , to a more ambitious Mu_zero style RL training (if only with pseudo CoT moves that potentially cover a range of tasks. This latter approach is what speculated o1 does: 👇)

https://x.com/rao2z/status/1843003042150416543

Once the modified training phase is over, the resulting LLM can be used for doing any of the ITS approaches in Step 1.

It seems in general that pure ITS (type 1 above) without changing the training (type 2) won't lead to significant improvements in accuracy. Furthermore, changing training by Mu_zero style approaches can be a lot more effective than just fine tuning with derivational traces (see 👇)

https://x.com/rao2z/status/1838245253171814419

Of course, once we start doing any type of Inference Time Scaling, many of the System 1 efficiencies of autoregressive LLMs will no longer hold, and the computational complexity considerations in trading cost and accuracy come back into play; see the thread "On the Stone Soup of LLM Reasoning"  

https://x.com/rao2z/status/1845607153580838979

![hues-its](/images/hues-its.jpeg)