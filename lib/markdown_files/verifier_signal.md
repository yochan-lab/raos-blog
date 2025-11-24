---
title: "Test-time-scaling, Post-training and Distillation are just compiling the verifier signal into the LLM at different phases"
date: "2025-03-16"
author: "Rao"
---

#SundayHarangue

Most documented advances of LRMs on reasoning problems have been on tasks for which there are formal verifiers from traditional AI and Computer Science. The modus operandi of current LRMs is leveraging these verifiers in a generate-test loop at test time, training time or distillation time in order to partially compile the verification signal into generation. 

In other words, post-training LRMs can be seen as iteratively compiling reasoning into (approximate) retrieval. This iteration is needed because, for reasoning problems which can be arbitrarily scaled in complexity (e.g. multi-digit multiplication with increasing digit numbers), an LLM trained on instances of a certain size quickly loses its ability to provide good guesses at larger sizes (e.g. [this tweet](https://x.com/rao2z/status/1760133260385177784)) . 

Post-training approaches depend on the ability of the base LLM to have high enough top-k accuracy (i.e., be capable of generating at least one correct solution given k guesses) so that the verifier has something to select (otherwise, there is no signal either for fine tuning or the RL phase!).

This general idea is consistent with the dictum (attributed to Marvin Minsky) that intelligence is shifting the test part of generate-test into the generate part. In particular, us- ing verifiers at test time has already been advocated by the LLM-Modulo framework. 

Indeed, LRM post-training approaches crucially depend on the signal from the verifier to separate trajectories supplied by the base LLM into those that reach correct solutions vs. those that don’t (and thus, this can be seen as a form of “train time LLM-Modulo”). 

Once this is done, these traces are used to refine the base LLM (“generator”) via either fine tuning or RL. This part can thus be interpreted as partially compiling the verifier signal into the generator. Finally, while Deepseek R1 just deploys the refined LLM at inference stage, without resorting to any test time verification, they do wind up using verifiers when they develop additional synthetic data with the help of R1 to distill other models.

One way of seeing this training-, test-, and distillation-time verification is as a staged approach to compile the verification signal into an underlying LLM. 

In particular,  the base LLM used for R1 already has the capability of generating plausible solution trajectories (potentially from the derivational trace data that was already present in the pre-training data). Post-training can be seen as further refining it to come up with accurate solutions for longer/harder problems in fewer tries. Distillation can be seen as propagating this even further. 

At each stage, the verification signal is being compiled into the underlying LLM for longer and longer “inference horizons.” 

This understanding is consistent with studies on the effectiveness of Chain of Thought ([see their paper](https://arxiv.org/abs/2405.04776)), use of internal vs. external planning approaches for games ([see their paper](https://arxiv.org/abs/2412.12119)), as well as self-improvement in transformers ([see their paper](https://arxiv.org/abs/2502.01612)). In the last case, we would qualify any “self-improvement” claims by saying that it is more the case of incrementally compiling the verifier signal into the base LLM.

![Verifier signal](/images/verifier_signal.jpeg)