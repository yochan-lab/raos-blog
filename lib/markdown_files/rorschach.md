---
title: "No, Virginia, those Rorschach musings by LRMs may not be 'reasoning traces' in any meaningful way.."
date: "2025-02-16"
author: "Rao"
---

#SundayHarangue

I have been saying for sometime now that the intermediate tokens/"mumblings" that LRMs tell themselves are not to be seen as "reasoning traces" (c.f. [this tweet](https://x.com/rao2z/status/1865985285034553478)). 

But they look like they are, no?  The fact that sometimes these intermediate tokens look like reasoning traces--with human like "hmm..", "aha..", "let me think step by step..", "let me consider a different way.."  mumbles--is mostly an anthropomorphization trap/tendency. After all the LLM prompt completions are able to imitate the style of everything under the sky--why would you think they won't also imitate the style of any human reasoning musings that are present in the pre-training data? 

How can we be sure they aren't sound? One reason the reasoning trace anothropomorphization continues unabated is because it is hard to either prove or disprove that the so-called reasoning traces are correct/incorrect.  These "traces" can get upwards for 30 pages long of free form self-chatter even for small problems--and there is no clear method to check if they are correct. Approaches like Process Reward Models try to make the reasoning traces a bit more locally consistent--but they seem to have taken a back seat anyways especially given the success of DeepSeek R1. (To be clear, it is also hard to formally evaluate people mumbling to themselves while they are solving a problem). 

 It is no wonder then that none of the benchmark evals on LRMs actually evaluate the reasoning traces--and focus on only evaluating the correctness of the final answers (c.f. [this tweet](https://x.com/rao2z/status/1884663355111333939)). 

..formal derivational traces come to the rescue! Thankfully, there do exist cases where the LLMs are trained to mutter to themselves in specific  formats that are supposed to correspond to a formal solver solving that procedure. Two examples are "SearchFormer" ([see their paper](https://arxiv.org/abs/2402.14083))  and "Stream of Search" ([see their paper](https://arxiv.org/abs/2404.03683)). SearchFormer, for example, gets the derivational traces for solving various search problems from the open/closed list manipulations of an A* search algorithm. These are then used to train (SFT) the base LLM--so that at the inference stage, the LLM will imitate open/closed list manipulations before actually giving its (guess of) the solution. 

Although SearchFormer paper only considers the solution accuracy in the evaluation phase, we can actually check if the traces output actually correspond to valid and sound A* search traces (essentially by having A* simulate that trace..).  

Some concrete results: So we (okay, really, 
[@PalodVardh12428](https://x.com/PalodVardh12428)
, 
[@kayastechly](https://x.com/kayastechly)
 and 
[@karthikv792](https://x.com/karthikv792)
) did this. The graphic below  shows the summary of the results for their grid world problems. Let us ignore the many cases (shown in red)  where the trace turns out to be syntactically wrong. Even when the traces are syntactically valid (shown in blue), we note that in 12% of the cases the traces are semantically invalid (as simulated by A* search) even though the solution guess happens to be correct. The semantic invalidities include things such as trying to remove nodes from open when they are not actually on the open list.  (Here is a version of the graph with clickable stats: [this page](https://atharva.gundawar.com/searchformer_response_analysis.html) thanks to [Atharva](https://x.com/atharva_gundawar)). 

While we have  suspected this would be the case die. while now, (see: [this tweet](https://x.com/rao2z/status/1777780420580696215)), these stats give direct evidence. 

If the mumbling makes people happy, why care that aren't quite reasoning traces?   The usual argument in favor of intermediate tokens that sorta/kinda look like human mumblings is that it makes people happy! Indeed, even though R1-Zero was doing pretty good with RL post-training, DeepSeek folks felt the compulsion to make it chatter to itself in a sorta/kinda human way by getting additional human annotated derivational trace data so R1 can imitate  those human-like traces (never mind that there was no evaluation of the correctness of the traces beyond the "look, it said aha to itself!!"). 

I think making reasoning traces that sorta/kinda look human-ish, knowing that they have no semantic import and we don't plan to evaluate them anyways--is deliberately leveraging the cognitive flaws of the end users  (c.f. [this tweet](https://x.com/rao2z/status/889509356084928518)).

Given that the supposed use of LRMs is solving problems that the end users themselves don't know (or even may be able to verify), increasing the false confidence with these types of ersatz reasoning traces seems like a trap!  

There are some indications that this trap can catch the researchers too. In the SearchFormer paper, there are claims about how LLM trained on A* derivational traces is "more optimal than A*" because the imitative derivational trace it outputs is sometimes shorter than that output by A* for the same problem (nevermind that these traces may not actually be sound in any A* sense); [this tweet](https://x.com/rao2z/status/1881491452158750955). 

Once we agree that it maybe questionable to go with anthropomorphized mumbling to make them be "more acceptable" for humans, we might also note that sticking to the anthropomorphic format may be an unnecessary albatross from the "post-hoc solution accuracy"  point of view. The RL can train LLMs to emit any old intermediate tokens as long as the bottom line improves (viz. [this tweet](https://x.com/rao2z/status/1834354533931385203))

![Rorschach](/images/rorschach.jpeg)