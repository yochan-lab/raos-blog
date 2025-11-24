---
title: "Inference Time Computation is NOT new--we wanted to get rid of it, but are letting it back in out of necessity.."
date: "2024-12-08"
author: "Rao"
---

#SundayHarangue (#NeurIPS2024 workshop edition)

Noam Brown [@polynoamial](https://x.com/polynoamial) has been giving talks on o1 suggesting that including inference time computation was a relatively newer idea in games (which he and others have brought to LLMs).  

While I have a lot of respect for Noam (he is probably one of the handful of frontier folks who actually has a good understanding of pre- 2013 AI) ,  I am afraid that in this particular case, his characterization gets the chronology mostly wrong for prominent games--most of which were "deliberative" rather than "reflex" agents in Russell/Norvig's terminology. 

Many games--including Chess and Go--focused exclusively on inference time compute in the beginning! (See my Intro #AI slide below..) 

The 1997 Deep Blue, for example, was all inference time compute (using  alpha-beta pruning on shallow game trees where the leaves were evaluated by (mostly hand-coded) evaluation functions--plus a library of end games.

Pre-Alpha-Go approaches for GO went with just MCT at inference time. 

For these games, it is the idea of learning an approximate policy off-line and using it to complement the already standard inference time computation (via generalized policy rollout) that is the latter development!

TD-Gammon is more of an exception which tried first spending time "off-line" to get a policy and make a largely reflex agent. (Partly because between Samuel's Chekers and TD-Gammon, there were few RL/Learning based approaches for Games..)

So when Noam says he and Tuomas  started poker first with off-line approximate policy learning and just using that during inference time, and then recognized that online policy roll out is actually helping, they went in the reverse order of what happened in Chess and Go! 

The appeal for the off-line policy computation was that you can spend unlimited amounts of time behind the scenes, so that online computation can be mostly taken out. Many of us still remember marveling at the fact that the learning time for AlphaGo would have been about 1700 years on the common desktops of that time! 

This learn everything upfront with a close-to reflex agent became so strong in the aftermath of AlphaGO that they tried their best to reduce the MCT search that was left over in the original AlphaGo in a stream of latter developments.  

Reducing user-facing inference time computation was a deliberate choice--and has even lead to a change in the way the field started viewing computational complexity considerations (see 👇)

https://x.com/rao2z/status/1500178342313545730

This trend continued with LLMs too--with all focus on pre-training so inference time compute is kept negligible--so that it costs very little for end users, and  can even be done locally on edge devices..

I suspect that the twin bitter truths (c.f. [this tweet](https://x.com/rao2z/status/1834354533931385203)) --that you can't quite get reasoning out of auto-regressive LLMs, and that learning an approximate pseudo-cot-action policy that is good enough would be way too costly even for OAI/Microsoft's resources--dragged them into inference time compute awkwardness (c.f. [this tweet](https://x.com/rao2z/status/1863458138084573347)) which certainly changes the business model by pushing the scaling costs to the edge users! 

https://x.com/rao2z/status/1867604784532140292

![its-not-new](/images/its-not-new.jpeg)