---
layout: "single_post"
title: "iPhone UX challenge"
description: "One of the David Hammill's UX challenges was to redesign the iPhone screen for accepting or declining a call while you are already on one. One of the Dadvid Hammill's UX challenges was to redesign the iPhone screen for accepting or declining a call while you are already on one. "
tag: "Exprience"
image: 
posted: 1
---

<figure>
<img src="{{site.baseurl}}/assets/uploads/Ux-challenge/problem.webp" width= "350px" alt="Threads message">
  <figcaption>iPhone incoming call while on another</figcaption>
</figure>

<p> These feelings are very relatable. As an iPhone user, when I get a second incoming call, I panic and freeze. Eventually, whoever was calling gives up, and the problem resolves itself. </p>

<h2> Why does it make people panic?</h2>
<ul>
<li> Cognitive overload: 5 icons to make sense of and connect them with labels</li>
<li> The user has to make multiple decisions very quickly:
<ul>
<li> Do I want to answer the new call?</li>
<li> If not, how can I dismiss it? Is that rude?</li>
<li> Do I want to quickly end the current call? Is this rude?</li>
<li> Do I want to put the current call on hold?</li>
</ul>
</li>
<li> All of this while talking to someone or having someone wait for you to solve this puzzle — no pressure!</li>
</ul>

<h2>Minimum effort solution</h2>
<p>Potentially, if the secondary action icon was smaller in size, it would be easier to read. I would test this option.</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Ux-challenge/fast.webp" width= "350px" alt="Quick soltuion">
  <figcaption>Quick solution</figcaption>
</figure>

<h2>More effort solution</h2>
<p>When a new person calls, the iPhone prioritizes that call and asks the user to make a decision while in the middle of another task. It’s overwhelming for the user.</p>

<div class="callout thought">Here I am, talking to Jim Carrey, and suddenly I see "Margot Robbie" in big letters on my screen. What happened to Jim? Is he still here?</div>

<p>Everything incoming, while the user is in the middle of a task (calls, messages, Taylor Swift ticket sale notifications), is just that — a notification. </p>

<h3> The main changes: </h3>
<ul>
<li>Keep the user in the context of the current call </li>
<li>The incoming call is a notification, which can only be dismissed. The tasks are asynchronous; a new one cannot be initiated until the previous one is completed. </li>
<li>If the user wants to accept the second call, they need to first sort out the current call (End or Hold).</li>
</ul>

<p>This is my proposed solution. Would be very interesting to test it though as well. </p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Ux-challenge/longer.webp" width= "780px" alt="Meme about design">
  <figcaption>More complicated solution</figcaption>
</figure>