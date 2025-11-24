---
title: "In vs. Out of Distribution analyses are not that useful for understanding LLM reasoning capabilities"
date: "2024-08-25"
author: "Rao"
---

#SundayHarangue

IMHO, the work in trying to characterize the reasoning  abilities of LLMs is still hobbled by the focus on in vs. out of distribution--instead of deductive closure/procedure learning. 

For example, [this paper](https://arxiv.org/abs/2309.14316) talks about how LLMs "extract knowledge" only if they have mixed training (which can be understood as "base facts" + a fraction of one level inferences for biographical data). 

An isomorphic claim is made in [this paper](https://arxiv.org/abs/2405.15071) for synthetic knowledge graph data--saying that transformers can get 2-level reachability between nodes only when they are trained with a fraction of 2-level reachability relations. 

Both these works miss the point, IMHO, that training with 2-level reachability (or deductive closure) may get you more 2-level reachability, but NOT 3- 4- 5- level reachability! Similar problems with "knowledge extraction" claims (after all, any reasonable claims on "knowledge extraction" have to contend with entailment which is connected to deductive closure..) 

This is the point we make in [our analysis of CoT](https://arxiv.org/abs/2405.04776) and illustrate it rather  starkly with the last letter concatenation problem--showing that CoT showing how to do 2-3 word LLC doesn't generalize to larger number of words. There is no procedure learning going on.  

You will either have to give CoT for every length of the chain of inference, or do training with data of every length of the chain of inference--thus my "fish joke"  

https://x.com/rao2z/status/1816380058136650143

![in-vs-out](/images/in-vs-out.jpeg)

The problem with in/out distribution analyses are that they let us focus on generalization aspects that are uninteresting  from the point of view of reasoning. 

Specifically, having "mixed-trained" an LLM with a fraction of 2-reachable facts, we are happy to celerbrate that it guesses more of the 2-reachable ones, and not noticing that it requires separate mixed training to get to 3-reachable, 4-reachable etc.

(The situation is the same, btw, with multiplication. Having fine-tuned the heck out on 4x4 digit multiplication, you may find that LLMs do well on 4x4 digit multiplications. But if you test on 5x5 digit multiplication, you will find that you are back to Square 1, as [@YejinChoinka](https://x.com/YejinChoinka) and her colleagues found..)

In terms of reasoning, we tend to think of  generalization as learning the underlying procedure and applying it to any unseen instance--whether 3-, 4-, 5- 100-reachable entailments, or 5x5, 6x6, ..  100x100 digit multiplications. The standard use of in/out distribution analysis keeps us happy even when this type of generalization is completely absent.

A related complication is that in the web-scale training data, some examples of 2- 3- k-reachable facts are interspersed with base facts, allowing LLMs to get by farther with pattern matching without learning the procedure;  see 👇

https://x.com/rao2z/status/1666294366720360449