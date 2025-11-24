---
title: "On the 'Chain of Thought' Delusions"
date: "2024-03-10"
author: "Rao"
---

(Special #AAAI2024 #SundayHarangue ) 

(w/ 
[@karthikv792](https://x.com/karthikv792)
 & 
[@kayastechly](https://x.com/kayastechly)
 )

Ever since I came across the Chain of Though (CoT)  for LLMs paper, I wondered how it can possibly make sense given that there is little reason to believe that LLMs can follow procedures and unroll them for the current problem at hand. (After all, if they can do that, they should be able to do verification and general reasoning too--and we know they suck at those). 

And yet the practitioners of CoT swear that any and every problem can be solved with LLM by giving it a bit of a CoT help.

It is clear (and pretty non-controversial) that CoT involves  giving additional task/problem specific knowledge. The question is how general this problem specific knowledge can be. 

The more general the knowledge, the easier it is for the humans to provide it, and higher the degree of reasoning LLM has to do to operationalize it.

Consider STRIPS planning problems. At the most general level, the CoT prompt will just tell the LLM how to get itself to construct a solution that will be provably correct--using progression, regression or causal-link plan correctness. Would LLMs be able to follow this? We checked this using state tracking prompts and showed they have no effect on LLM performance! (The first graphic below👇)

At the next level, you might want to give a CoT that is just domain specific. Suppose you are solving a Blocks World problem, it is well known that you can get from any initial state to any goal state by just unstacking and putting all the blocks on the table, and using them to stack the various stacks in the goal state. It can be shown that such a plan will be correct and will be at most twice the length of the optimal plan for any instance. Will LLMs be able to run with this CoT? We checked and found that they pretty much die. (The second graphic below👇)

At the third level, you might want to give a CoT that is goal specific. In the case of Blocks World problems, suppose we stick to the same exact problem type: Initial state has all blocks on the table. Goal state has to construct a particular single stack of blocks. You notice that by now, the CoT is quite simple! Even some of you skeptics might think that LLMs will run with this and solve all n-stack problems. We checked and turns out that as the stack length increases, they fail pretty spectacularly. (The third graphic below 👇). The problem is that they don't learn the procedure in stacking and unroll it as needed, and instead do well only if the new instance is close to the example instances in a syntactic (and non-unrolled way).

At the bottom most  level, you might just throw in the towel and say that we will focus on a very specific syntactic form of the goal that will avoid LLM having to reason about unrolling. We can do this in blocks world n-stack problems if we make the goal state always be a stack that is a lexicographic prefix. That is, A, AB, ABC, ABCD, ABCDE etc. In this case, finally, CoT actually is kind of effective in helping LLMs solve the n-stack problem. *PHEW* (the last graphic below)

As you can see, the ease of giving CoT advice worsens drastically as we  go from domain independent to domain specific to goal class specific  to lexicographic goal-specific. If you have to teach a student how to do blocks world planning by the bottom level CoT's, you would expel them from school. And yet, CoT has attained a rather mythical status in LLM literature. It shows how willing the practitioners are to suspend their disbelief.

Among other things, the "generalization" claims surrounding CoT cheapen the notion of generalization beyond recognition. 

(I am glad I didn't let my students become Chain of Thought gangs.. [this tweet](https://x.com/rao2z/status/1648920876568686592?s=20)) 

Ps: Yeah--we did this just so I can do a better treatment of CoT in my tutorial tomorrow.. 😎 ([this tweet](https://x.com/rao2z/status/1759586737473700299?s=20))

![cot1](/images/cot1.jpeg)
![cot2](/images/cot2.jpeg)
![cot3](/images/cot3.jpeg)
![cot4](/images/cot4.jpeg)