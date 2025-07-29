---
layout: "single_post"
title: 'Login tickets: Eliminated'
description: 'It started as a fix for login support tickets, but the OTP flow I introduced ended up clearing our backlog and becoming the preferred login method for 500,000 parents.'
tag: "Case study"
permalink: /portfolio/parent-app
image: Parent-app/hero.webp
posted: 1
---

<div class="overview-width highlighted project-overview">
  <div class="overview-item">
  <h4>COMPANY</h4>
  <p>"SkoolBag" is a communication platform connecting schools and parents.</p>
  </div>
  <div class="overview-item">
  <h4>PRODUCT</h4>
  <p>Mobile app for parents to receive content from schools</p>
  </div>
  <div class="overview-item">
  <h4>PROBLEM</h4>
  <p>Parents couldn’t log into the app due to unconfirmed emails and broken password resets, leading to a increase in support tickets.</p>
  </div>
   <div class="overview-item">
  <h4>SOLUTION</h4>
  <p>New OTP login flow that solves all issues, cleared the backlog and became the preferred login method for 500,000 parents.</p>
  </div>
  <div class="overview-item">
  <h4>ROLE</h4>
  <p>Lead Product Designer / Product Owner</p>
  </div>
  <div class="overview-item">
  <h4>PLATFORM</h4>
  <p>Mobile application</p>
  </div>
  <div class="overview-item">
  <h4>KEY RESULTS</h4>
  <p><ul>
  <li>Eliminated login issues for 500,000 users</li>
  <li>Unexpected technical and usability issues </li>
  </ul>
  </p>
  </div>
</div>

<p>
“SkoolBag” (now “Audiri”) is a communication platform, where the two main products are:</p>
<ul>
  <li>School admin console (content creation web app)</li>
  <li>Parent app (content interaction mobile app)</li>
  </ul>


<p>During my time with SkoolBag, parents were required to sign up for a mobile app to receive school news updates. Registration flow was pretty standard.</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/signup.webp" width= "780px" alt="Registration at the time">
  <figcaption>Registration flow at the time </figcaption>
</figure>

<h2>Log in issues</h2>
<p>
Even though the registration was straightforward, we frequently received tickets related to parents being unable to log into the app.
</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/errors.webp" width= "780px" alt="Error messages">
  <figcaption>Users couldn't log in</figcaption>
</figure>

<p>
After conducting research, we identified two problems with our implementation:
</p>

<ul>
  <li><strong>Unconfirmed users</strong>, who never confirmed their email</li>
  <li><strong>Password reset users </strong>, who reset their passwords, but haven't set a new one yet.</li>
  </ul>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/problems.webp" width= "780px" alt="Users that can't log in">
  <figcaption>User groups that couldn't log in </figcaption>
</figure>

<p>
With tight back end constraints and limited engineering capacity, we aligned on three priorities:
</p>
<ul>
<li>Help users log in by any means necessary </li>
<li>Minimize changes to the existing infrastructure</li>
<li>Drastically reduce support volume</li></ul>


<h2>
Introduce OTP
</h2>
<p>
I proposed adding a One-Time Password login option. OTP had already been adopted by other apps and it solved multiple pain points at once:
</p>
<ul> 
<li>No need to remember or reset passwords </li>
<li>Replaced the outdated confirmation flow </li>
<li>Didn’t require reworking the entire auth flow </li>
<li>Worked for both "unconfirmed" and "password reset" users</li>
</ul>
<p> It was a pragmatic, high-leverage addition that respected technical limits while delivering clear user value. </p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/otp.gif" width= "780px" alt="OTP flow">
  <figcaption>One Time Password flow</figcaption>
</figure>

<h2>Impact</h2>
<p>OTP was a turning point. Within weeks of the rollout: </p>
<ul>
<li>Login-related tickets dropped to near-zero </li>
<li>Unconfirmed accounts were no longer a blocker </li>
<li>Users consistently chose OTP over password login</li>
</ul>

<h2> Iteration: Merging Login & Signup </h2>
<p>I explored a more ambitious idea to combine login and signup into a single entry point. Inspired by patterns used by larger apps, the idea was simply ask for an email and redirect users behind the scenes.</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/other-brands.webp" width= "780px" alt="Other brands with the pattern">
  <figcaption>Some larger companies combined sing up/log in</figcaption>
</figure>

<p>In theory, it should have streamlined the experience and helped users who weren’t sure if they already had an account. </p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/flow.webp" width= "780px" alt="New flow">
  <figcaption>New SkoolBag sign up/log in flow <a href="https://www.figma.com/design/kLQ8wJHkAUPwGua5OaP4nx/SkoolBag---Sign-up-%2F-Log-in?node-id=49-6622&t=zAYPYrevHo06SFPo-1" target="_blank">Figma link </a></figcaption>
</figure>

 <p><strong>In practice, it introduced confusion: </strong> </p>
<ul>
<li>Users weren’t sure if they were logging in or signing up </li>
<li>The mental model of “Login vs Signup” was too ingrained to remove without cost </li> </ul>

<p>The feedback was clear: not all patterns scale across user types. Especially when those users are busy parents expecting clarity over cleverness.</p>


<div class="callout message">How do I register on the app? I only see the Login.</div>

<h2>Refined UX </h2>
<p>I updated the UI to clearly show two entry points: Login and Signup. </p>
On the back end, the flow remained the same: users still received a one-time code via email, but the new labels aligned with user expectations.

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/refined.gif" width= "780px" alt="Other brands with the pattern">
<figcaption>Refined UX to support mental model <a href="https://www.figma.com/design/kLQ8wJHkAUPwGua5OaP4nx/Sign-up---Log-in?node-id=165-6947&t=3x3oAA2o32ZLzAep-1" target="_blank">Figma link </a></figcaption>
</figure>

<p><strong>Outcome:</strong>
Confusion dropped and support tickets dropped to near zero. </p>

<h2>Lessons Learned </h2>
<ul class="last-step"> <li>Even widely-used UX patterns need validation with your users. </li>
<li>Clarity always wins. Cleverness is only valuable when users don’t have to think about it.</li>
</ul>

