---
title: "Computational Complexity is the wrong measure for LRMs"
date: "2025-07-13"
author: "Rao"
---

**Computational Complexity is the wrong measure for LRMs (as it was for LLMs)--think distributional distance instead** 

**tldr; traditional computational complexity is about the effort needed to solve a problem instance from scratch; it doesn't make sense for LRMs that are doing memory-based modifications.**
    
#SundayHarangue (yes, we're back!)

I have argued in the past that computational complexity is the wrong measure/metaphor for understanding how standard LLMs do on various problems; see [this tweet](https://x.com/rao2z/status/1700504021524750523).

Now that LRMs (aka "reasoning models") are ruling the waves, it seems the misapplication of computational complexity intuitions to LRMs is back in force.

There is a resurgence of arguments in various papers about how the reasoning models take longer to solver harder problems, and how the length of intermediate tokens (mumblings?) is a good measure of this (a direct refutation of this latter argument can be found in [this tweet](https://x.com/rao2z/status/1927707640223719631)).

Like LLMs, LRMs are also primarily memory-based in their operation. If standard LLMs can be understood in terms of approximate retrieval  (c.f. [this tweet](https://x.com/rao2z/status/1740692722099630237) ) from the training date, LRMs can be understood in terms of approximate modification from the training data. 

What matters is not the from scratch computational complexity of the problem instance underlying the prompt, but rather the distributional distance between that instance and the instances that LLM/LRM has been trained on. 

This is the reason why LRMs keep failing on those 
[@colin_fraser](https://x.com/colin_fraser)
-style  trivial modifications to well known/too popular riddles--be it the "oh no, the surgeon is female" or the "ye gods, the wolf will eat up the goat" variety.. 

Recently we (by which I mean 
[@PalodVardh12428](https://x.com/PalodVardh12428)
 & 
[@karthikv792](https://x.com/karthikv792)
) did some experiments with transformers trained on maze solving (as described in [this tweet](https://x.com/rao2z/status/1925192588019028440)) that illustrates this point quite starkly. Specifically, having trained a transformer on Wilson mazes, we test it on "NoMaze" mazes--that is just, free space where you need to go from S to G (see graphic below). 

![Mazes](/images/mazes.jpeg)

Most would agree that these NoMaze mazes are significantly easier compared to Wilson mazes. Indeed, if you have A* search solve these mazes from scratch, then the average length of A*  search trace for the Wilson maze instances is 50x longer than that of NoMaze mazes! 

And yet, the Wilson maze trained transformer utterly fails to solve any of the NoMaze instances!

What is more interesting, the transformer basically blows through the context window length limits in the course of failing to solve any instances. 

In other words, the transformer is not giving up right away--but is indeed outputting long intermediate token sequences--that is typically misinterpreted as the effort being spent by the LRM to solve the problem. 

Clearly, the reason the transformer is failing on these much simpler maze instances has nothing to do with their from-scratch complexity, but rather the distributional distance between the test and training instances (and hence this: [this tweet](https://x.com/rao2z/status/1933886545892937858)) 

