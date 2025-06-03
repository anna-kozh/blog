---
layout: "single_post"
title: "iPhone UX challenge"
description: "I've attempted David Hammill's UX challenge to redesign the iPhone screen for accepting or declining a call while you are already on another one."
tag: "Challenge"
permalink: /blog/ux-challenge
image: 
posted: 1
---

<figure>
<img src="{{site.baseurl}}/assets/uploads/Ux-challenge/problem.webp" width= "350px" alt="Threads message">
  <figcaption>Incoming call while on another</figcaption>
</figure>

<p> These feelings are very relatable. As an iPhone user, when I get a second incoming call, I panic and freeze. Eventually, the caller gives up, and the problem resolves itself. </p>

<h2> What causes cognitive overload?</h2>
<ul>
<li> Making decisions for two calls at the same time </li>
<li> Repeating icons that apply to different calls </li>
<li> Labels with two actions are hard to process </li>
<li> All of this while talking to someone or having someone wait for you to solve this puzzle — no pressure!</li>
</ul>

<h2>Separate contexts</h2>
<p>When a new person calls, the iPhone prioritizes that call and asks the user to make a decision while they are in the middle of another task. It’s overwhelming for the user.</p>

<div class="callout thought">Here I am, talking to Jim Carrey, and suddenly I see "Margot Robbie" in big letters on my screen. What happened to Jim? Is he still there?</div>

<p>Everything incoming, while the user is in the middle of a task (calls, messages, Taylor Swift ticket sale notification) is just that — a notification. </p>

<div class="last-step">
<h3> The main changes: </h3>
<ul>
<li>Keep the user in the context of the current call </li>
<li>The incoming call is a notification that can only be dismissed. The tasks are asynchronous; a new one cannot be initiated until the previous one is completed.</li>
<li>If the user wants to accept the second call, they need to first sort out the current call (End or Hold).</li>
</ul>

<p>This is my proposed solution. Would be very interesting to test it. </p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Ux-challenge/solution.webp" width= "780px" alt="Solution to UX challenge">
  <figcaption>Keeping user on the current call</figcaption>
</figure>
</div>