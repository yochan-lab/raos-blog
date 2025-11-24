---
title: "Why #AI folks need a broad based Intro to #AI"
date: "2024-06-23"
author: "Rao"
---

#SundayHarangue

As I go around giving talks/tutorials on the planning and reasoning abilities of LLMs,  I am constantly surprised at the rather narrow ML-centric background of grad students/young researchers have about #AI. This seems to be especially the case with those who think LLMs are already doing planning and reasoning etc. Most of them don't seem to know much about the many topics that are taught in a broad-based Intro to #AI course--such as combinatorial search, logic, CSP, difference between inductive vs. deductive reasoning (aka learning vs. inference), soundness vs. completeness of inference/reasoning etc. 

I can understand why a strong background in ML and DL is sine qua non  these days in using/applying the current #AI technology. That doesn't however mean that other things, that are typically not covered in ML courses, but are covered in Intro #AI courses, are expendable. If you don't know those concepts, you are more likely than not to re-invent crooked wheels 

https://x.com/rao2z/status/1681461274759004162

All this is particularly relevant for those busy building empirical scaffolds over LLMs (the "LLMs are Zero-shot <XXX>" variety). Most often, these young researchers are coming from NLP. At one point, NLP used to be NLU and  students had quite a firm grasp of logic (e..g Montague Semantics!). But over the years, NLU became NLP which in turn has become Applied Machine Learning, and students don't quite have the background in logic/reasoning etc. Now that LLMs have basically "solved" the "processing" tasks--such as information extraction, format conversion etc., NLP folks are trying to turn to reasoning tasks--but often lack the necessary background.  See this unsolicited advice to NLP students: 

https://x.com/rao2z/status/1728870404327190716

Background in the standard Intro AI topics like search/CSP/logic are useful even if you don't plan on directly using those techniques (e.g. because you want differentiable everything to make use of your SGD hammer). Like MDPs, they provide a normative basis for many deeper reasoning tasks AI systems would have to carry out when they  broaden their scope beyond statistical learning. Without that background, you will likely try to pigeon hole everything into "in/out of distribution" framework, when what you need to think of is "in/out of deductive/knowledge closure; 

https://x.com/rao2z/status/1803255357353107726 

One of the other things that you get exposed to in the standard Intro #AI is computational complexity of the various reasoning tasks. People who jumped in directly via applied ML might understand a bit of sample complexity (maybe?), but are not that attuned to reasoning complexity. While computational complexity has increasingly been sidelined in these days where we mostly ignore the costs of offline training (see this thread on the ["death of computational complexity"](https://x.com/rao2z/status/1500178336504442880)), it will eventually rise up and bite you (especially if you are trying to make money without an #AI Pyramid scheme..).

 For example, trying to get LLMs to make reasoning via fine tuning often ignores the amortization costs associated with memoization (as sent off in this GoFAI vs. LLaMAI satire)

https://x.com/rao2z/status/1749104832450072953 

Understanding conservation of computational complexity  also makes you question/avoid unwarranted optimism about reasoning being solved by just approximate retrieval on LLMs, (even with pre-training on web-scale corpora, synthetic data etc). given that they take constant time per completion token! 

https://x.com/rao2z/status/1766087877216371072

(Finally, fwiw, here is the [link to the Intro to #AI](https://rakaposhi.eas.asu.edu/cse471/) I teach at ASU that brings all these things together)

https://x.com/rao2z/status/1681461274759004162