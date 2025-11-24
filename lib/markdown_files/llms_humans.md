---
title: "On comparing LLMs to Humans on reasoning tasks.."
date: "2024-09-01"
author: "Rao"
---

#SundayHarangue 

I often hear the complaint that LLMs shouldn't be evaluated on reasoning  tasks that are formally verifiable, but should instead be compared to humans on tasks that can't directly be formally verified.  This is however a rather fraught enterprise. 

There is the obvious pitfalls/delusions of deliberately sticking to tacit tasks for which there are no formal verification possibilities..see 👇

https://x.com/rao2z/status/1752122538354983193 

Beyond even that,  saying LLMs are as good at some task as humans presupposes that we know how to robustly measure how good humans are at a task, and also to then make a fair comparison between human and LLM performance. Doing these badly is, IMHO, the reason for a lot of questionable claims about capabilities.

One particular issue is that in many tasks, people's performance involves learning a general procedure from few (one?) examples and being able to apply that--something LLMs seem to consistently have trouble with. 

E.g. LLMs have been shown to do Caesar Cypher Decoding (but turns out only mostly for 13.. when humans can also do it for any offset)

LLMs can do last letter concatenation (but turns out only upto a few words, and not if the number of words increase)

 LLMs can do multiplication (but turns out only for a few digits--after heavy fine tuning; but not if you increase digits beyond the ones you fine-tuned on). 

In all our studies, we continue to find that in general LLMs are unable to consistently learn and repeat any iterative procedure--with the performance crashing as the number of iterations increase (I guess this can be rationalized with some meta-cognitive mumbo jumbo that they get "bored with iteration" like some impatient humans.. 😋)

You can of course freeze a benchmark, fine tune the LLM on all problem types in that benchmark (thus effectively compiling reasoning to approximate retrieval), and show that LLMs are competitive with humans. But this misses the procedure learning/application aspect.

On a related note, the drive to avoid formally verifiable tasks for reasoning has lead to the "hand curated MCQ" benchmarks, which, IMHO, are quite quixotic ways to evaluate "reasoning" powers of universal memorizers/statistical pattern finders..🙄 I tell my students to be VERY SKEPTICAL of any reasoning/self-improvement/self-verification claims based on benchmarks such as CommonsenseQA..

![abaca](/images/abaca.jpeg)