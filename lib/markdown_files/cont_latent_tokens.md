---
title: "On using Continuous Latent Space Vectors in the context windows of Transformers and LLMs"
date: "2025-11-02"
author: "Rao"
---

**tldr; I do believe that latent tokens can considerably increase the flexibility of prompt augmentations that LLMs can learn in post-training, but don't quite agree with the "they reduce the complexity of the problems under consideration".**

#SundayHarangue 

There is a lot of chatter about how vectors from continuous latent space can make transformers solve problems efficiently. Some of these arguments run counter to conservation of computational complexity, IMHO. 

The arguments/analogies revolve around viewing these tokens as "superposition" (think union) of discrete tokens.

As background, transformers operate in a latent space L s.t. every (linguistic) token corresponds to a vector in L.  This mapping is however one sided: not every vector in L corresponds to a unique  token. 

You could however see these vectors (that don't have unique token mapping) as a linear combination of token-corresponding vectors. In this way, they can be seen as a union/superposition of those tokens. 

It should be rather obvious that the operations of the transformer see entities in the the context window as just vectors from the  embedding space. In particular, the forward pass operation doesn't really care whether the vectors being processed have unique tokens corresponding to them or not. 

This means as far as the transformer operation is concerned, the the context window can have both "token vectors" (i.e., embedding vectors that correspond to unique tokens) and "latent vectors" (i.e., embedding vectors that don't correspond to unique tokens). As mentioned above, these latent vectors can be seen as linear combinations of the token vectors. 

One obvious use of this flexibility is that the intermediate tokens emitted by the transformer can well be these latent vectors; only the solution tokens (that are being passed onto the end users) need to be token vectors. Indeed, as we argue in [this tweet](https://x.com/rao2z/status/1927707640223719631) (and our paper [here](https://arxiv.org/abs/2504.09762)), as long as intermediate tokens don't seem to have any end-user semantics anyway, allowing for them to be any vector from latent space provides significantly more flexibility for learning appropriate prompt augmentations (c.f. our tweet [here](https://x.com/rao2z/status/1865985285034553478)). 

Another argument that has been made about the use of latent vectors in the intermediate tokens is as a way to "improve efficiency of solving the underlying problems." 

Now, I am pretty skeptical about viewing LLMs as solving problems. Our work shows, for example, that there is little connection between the length of the intermediate tokens and the underlying complexity of the problem (c.f. [this tweet](https://x.com/rao2z/status/1965770912667734243)), suggesting that it is more indicative of attempts to bridge the training distribution and the test instance. 

Nevertheless, if we are into looking at transformers as ways of "computing solutions" (even if that is not what is actually happening in pre-trained LLMs), then letting transformers operate on latent vectors vs. token vectors seems to correspond to doing computation on disjunctive representations of entities rather than on single entities. 

Now, operating on disjunctive representations can improve average case efficiency over specific distributions, but not the worst case complexity. As a sanity test, abstraction and hierarchy can be viewed as operating on disjunctive representations, and neither change the worst case computational complexity of the problem; see [this paper](https://rakaposhi.eas.asu.edu/kr96.pdf) or [this paper](https://rakaposhi.eas.asu.edu/ucp-tr.pdf) (technical report version) for arguments on planning. 

This is why, I am skeptical of claims that transformers with latent tokens can provably increase efficiency in all cases. For example, a recent paper [here](https://openreview.net/forum?id=UdOEZgWJLc) argues that transformers with latent tokens can solve graph reachability in time proportional to the diameter of the graph (and throws in some citations to quantum superposition to boot!). This doesn't make sense--certainly not in the worst case--without violating conservation of complexity (or changing what it means to "solve" reachability; the paper's empirical results seem to be happy with less than 100% accuracy, for example). 

When we were discussing this paper in our group meeting on Friday, I told my students about the analogy with Graphplan planning algorithm--which speeds up STRIPS planning (which is closely connected to reachability). Many years back, we showed that Graphplan's speedups can be understood in terms of doing projection over sets of states rather than individual states. However, if you operate directly over union representations, you can get to a point where the representation might look like it is reaching the goal state, but it may not be possible to actually extract a valid path! (In the case of Graphplan, this extraction involves a decoding step that is exponential in cost, and if it fails, the projection over disjunctive states continues). This is illustrated in the figure below:

![Graphplan](/images/graph_plan.png)


