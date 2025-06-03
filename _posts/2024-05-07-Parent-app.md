---
layout: "single_post"
title: 'Failure of my “brilliant idea”'
description: 'I had a brilliant idea. It was clever, innovative, and had everything needed to be successful. It even had working examples in several larger companies. This is the story of my failed “brilliant idea.”'
tag: "Case study"
permalink: /blog/parent-app
image: 
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
  <h4>DESIGN TASK</h4>
  <p>Reduce the number of tickets related to login issues</p>
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
“SkoolBag” (now “Audiri”) is a communication platform, where the two main products are:
<ul>
  <li>School admin console (content creation web app)</li>
  <li>Parent app (content interaction mobile app)</li>
  </ul>
</p>

<p>In 2021, during my time with SkoolBag, parents were required to sign up for a mobile app to receive school news updates. Registration flow was pretty standard.</p>

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
  <li><strong>UNCONFIRMED USERS</strong>: existing users, whose accounts were unconfirmed. Mostly because they either didn't receive or didn't act on the confirmation email.</li>
  <li><strong>PASSWORD_RESET USERS</strong>: users who reset their passwords, but haven't set a new one yet.</li>
  </ul>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/problems.webp" width= "780px" alt="Users that can't log in">
  <figcaption>User groups that couldn't log in </figcaption>
</figure>

<p>
There were certainly many technical solutions to these issues, but due to time constraints, the goals were:
</p>
<ul>
<li>Ensure parents can log in by any means </li>
<li>Make minimum changes to the technology</li>
</ul>


<h2>
OTP to the rescue
</h2>
<p>
One-Time Passwords (OTP) were getting more common and provided an effective log in method. SkoolBag users stayed logged in as long as they could, so remembering yet another password was a challenge.
</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/otp.webp" width= "780px" alt="OTP flow">
  <figcaption>One Time Password flow</figcaption>
</figure>

<strong>Implementing OTPs offered several advantages:</strong>
<ul>
<li>OTP replaced the outdated and clunky confirmation flow</li>
<li>It served as an alternative way to log in, for both UNCONFIRMED and PASSWORD_RESET users</li>
<li>It decreased the need for password resets</li>
<li>During the signup, it kept users within the app, which decreased the number of UNCONFIRMED users</li>
</ul>

<p>OTP was a big hit, to this day parents use it more than passwords. </p>


<h2> Brilliant idea </h2>
<p>Even though the initial problem was solved, I decided to combine signup and login in one flow. I got inspired by several apps, where the user simply entered their email, and the system automatically redirected them to the appropriate flow: Login or Signup.</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/other-brands.webp" width= "780px" alt="Other brands with the pattern">
  <figcaption>Some larger companies combined sing up/log in</figcaption>
</figure>

<p>In theory, it was supposed to work great for all the use cases and it seemed to make login and signup extra simple.</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Parent-app/flow.webp" width= "780px" alt="New flow">
  <figcaption>New SkoolBag sign up/log in flow <a href="https://www.figma.com/design/kLQ8wJHkAUPwGua5OaP4nx/SkoolBag---Sign-up-%2F-Log-in?node-id=49-6622&t=zAYPYrevHo06SFPo-1" target="_blank">Figma link </a></figcaption>
</figure>


<h2>Confused users</h2>
<p>
After a while, we started receiving feedback from parents saying: 
</p>

<div class="callout message">How do I register on the app? I only see the Login.</div>

<strong>
This is what happened:
</strong>
<ul>
<li>The solution broke users’ mental model: most users are used to seeing either Login or Signup options on the web. </li>
<li>The reset password was only visible after the user got on the login flow. </li>
<li>In the current implementation, It had significant engineering challenges: latency, and security impact.</li>
</ul>

<h2>Lessons learned</h2>
<p>Even “brilliant ideas” need to be tested. Even widely used patterns should undergo testing with your users. Aim for simplicity with established mental models.</p>

<div class="callout idea last-step">I was too busy feeling like a great innovator, that I forgot to ask my users if they liked the innovation.</div>
