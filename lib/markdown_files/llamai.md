---
title: "LLaMAI with Synthetic Derivational Information is still LLaMAI"
date: "2024-04-09"
author: "Rao"
---

#SundayHarangue

A new type of LLaMAI has been on the rise. Instead of fine-tuning LLMs on the synthetic solution data (as sent up in the LLaMAI thread below👇), the "new" idea is to fine tune them on the entire search trees underlying the synthetic solution data (as generated, of course, by the ever patient neighborhood symbolic solver).

https://x.com/rao2z/status/1749104832450072953

The question is whether this type of "let me compile your System 2 to my System 1" strategy really works if you don't ignore the training cost vs later benefit 🐘

It is well understood that the web-scale corpora that LLMs are trained on contain solution data but not the thought that went into coming up with those solutions.  See this thread from last year about this, with connections to derivational analogy

https://x.com/rao2z/status/1663925026578636802

While OpenAI was busy paying the Nigerians for this derivational information, some seemed to have had the idea of just getting the full search tree from the external symbolic solvers, and training LLMs on them. The 🐘 in the room is whether LLMs can actually generalize the raw derivational information beyond the specific task to make the LLaMAI effort amortize over future use.

You can 🙄 and move on when that [Meta paper](https://arxiv.org/abs/2402.14083) does that, but couldn't ignore the new [SoS](https://arxiv.org/abs/2404.03683) for clarification..

There is little evidence that good generalization happens--whether it is in chain-of-thought delusions er.. prompts, or multiplication tasks (a la 
[@YejinChoinka](https://x.com/YejinChoinka)'s group) or the the need  for exponential data to get Zero Shot by [@vishaal_urao](https://x.com/vishaal_urao) et al.

https://x.com/rao2z/status/1760133260385177784

So what are people doing to ignore the 🐘? In the case of the Meta paper, the authors make eyebrow raising "may be optimal" claims (never mind that checking if maybe optimal is really optimal requires an outside exhaustive search!), and embellish it with "we do less pseudo search steps as measured by the length of the derivational trace we output along with our solution." 

That last claim is a total head-scratcher, as they never actually check if the derivational information that is output is actually even legal--focusing just on its length (conditional on the solution being optimal as checked by external solvers). 

I doubt that such claims will ever pass muster with any reviewers with actual background in combinatorial search.

The generalizability claim is studiously ignored. Both Meta and SoS only train and test on specific tasks/domains--not taking any chance with the vaunted cross-task transfer abilities of LLMs (may be because they know that those don't exist?). 

There seems to be little reason as yet to believe that this type of fine-tuning based on derivational information avoids any pitfalls of the normal solution-based fine-tuning. 

https://x.com/rao2z/status/1758486842641711286

One common claimed "benefit" is that these types of systems can solve problems that the base symbolic solvers can't. The SoS paper makes a big deal about this. This is a rather misleading claim considering that LLMs can't guarantee any properties of their "solutions" without external verification help! 

Further, there do exist techniques like pattern databases in the search community that can provably increase the computational horizon of the symbolic solvers c.f. https://sciencedirect.com/topics/computer-science/pattern-database 

If you give the same leeway of completely ignoring the pre-computation costs, then pattern databases can also vaccuously solve more problems!

The reason symbolic search community doesn't make such claims is that they actually admit that the pre-comptuation costs have to be taken into account. Here is a plot I show in the third lecture of my Intro #AI course..

![heuristic-cost](/images/heuristic-cost.jpeg)