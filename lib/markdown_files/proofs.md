---
title: "Proofs are not reasoning traces & I/O Format Language shouldn't be much of an issue for LLMs"
date: "2025-07-21"
author: "Rao"
---
#SundayHarangue (Special IMO edition). 

1/ My feed these last couple of days of IMO discussions has been full of comments that seem to conflate LRM intermediate tokens (aka reasoning traces) and math proofs.  I hope everyone realizes that in IMO, proofs are the solutions--and the intermediate tokens--which are never shown by any model other than R1--are prompt augmentations (c.f. [this tweet](https://x.com/rao2z/status/1865985285034553478)) for constructing them. 

I mean you didn't really think that those clean proofs screenshotted by GDM are the entire reasoning traces? (DeepSeek R1 generates pages and pages of intermediate tokens for simple planning problems!)

A related point is that evaluation of proofs is not connected in anyway to evaluation of intermediate tokens.  If the full trace is actually provided in lieu of the proof, the IMO officials in charge of grading them will contemplate harakiri! Thankfully, none of the closed LRMs ever show their reasoning traces/intermediate tokens anyways...

See also 
https://x.com/rao2z/status/1927707640223719631

The situation is similar to using LLMs to generate plans (in fact, you can think of a proof as a "plan" to go from specification to the assertion to be proven). When you ask DeepSeek R1 to generate a plan, it gives pages of pseudo English tokens followed by the actual step by step plan (whose correctness can be verified independent of the intermediate mumblings er.. tokens).
(see [this video](https://youtu.be/HwgW376Y8gM?list=PLNONVE5W8PCRbf3WmbcqgXPToJuA2NUfP&t=2348))


2/ The other thing that was being bandied about a lot is how this year's IMO systems were taking the problems in natural language and are giving proofs back in natural language. Considering that the one thing LLMs are great at is format conversion, it is surprising that people seem to be giving so much importance to the format issue!

In fact, in our work on LLMs and planning, we considered both PDDL format I/O and natural language format I/O and found very little difference in performance even in the case of standard LLMs ([see our paper](https://arxiv.org/abs/2305.15771))

Language/format might be more relevant for individual verifiers/critics, but the format conversion can be done almost on demand there. This is why in the LLM-Modulo archietecture ([see our paper](https://arxiv.org/abs/2402.01817)) we have reformatters as front-ends before critics/verifiers as needed 👇

![LLM-Modulo](/images/llm-modulo.jpeg)

3/ Whether LLMs must do internal symbolic processing is  a red herring. To begin with, language is already symbolic! The only necessity  is appropriate  interface to any verifiers (used during training) and humans; reformatting can help here.  See 👇

https://x.com/rao2z/status/1470676392954118147

4/ The "no tools were used" assertion is  likely somewhat disingenuous. I suspect that formal verifiers, developed by humans, were used extensively during training stages (even if their place was taken by learned verifiers/PRMs at inference time..)

https://x.com/rao2z/status/1901344425382654332

5/ Also, another reminder that clock time comparisons between humans and TPU clusters is meaningless given the superhuman compute that goes into training as well as inference in these models..

https://x.com/rao2z/status/1947657475156807692