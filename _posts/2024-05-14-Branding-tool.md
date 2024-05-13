---
layout: "single_post"
title: "Branding tool • Story of convincing my manager"
description: "‘Don’t change the original design,’ my Product Lead told me on day 2 in Simpology. He had designed the whole solution two years before I joined, and the team had already implemented 20% of the design. This is a story of me changing the original design."
tag: "Case study"
posted: 1
---

<div class="full-width-section highlighted project-overview">
  <div class="overview-item">
  <h4>COMPANY</h4>
  <p>“Simpology” is an Australian fintech company dedicated to improving the mortgage application process.</p>
  </div>
  
  <div class="overview-item">
  <h4>PRODUCT</h4>
  <p>“Loanapp” is a loan origination platform for brokers.</p>
  </div>
  <div class="overview-item">
  <h4>DESIGN TAK</h4>
  <p>Enable customers to brand the platform as their own.</p>
  </div>
  <div class="overview-item">
  <h4>ROLE</h4>
  <p>Lead UX Designer / Product Owner</p>
  </div>
  <div class="overview-item">
  <h4>PLATFORM</h4>
  <p>Web application</p>
  </div>
  <div class="overview-item">
  <h4>KEY RESULT</h4>
  <p>Reduced the time needed to create branding to just 1 minute.</p>
  </div>
</div>

<p>
Loanapp has a highly customizable user interface, allowing customers to modify everything, from form fields to colors. Technically speaking, colors are stored in a JSON metadata file that consists of 81 variables. Previously, customers did not have an easy way to brand the platform themselves.
</p>

<p>
The goal of this project was to provide customers with a tool to create their own branded color scheme for the app.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.png" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="google.com">Figma link </a></figcaption>
</figure>

<h2>But we already have a design...</h2>
<p>
The design for the Branding tool already existed. It was created three years ago, before any development work or research findings. Still, my Product Head was convinced that it was the best solution.
After reviewing the design, I identified discrepancies with the current colors implementation and found usability problems. 
</p>

<p>
While I'm good at finding simple, practical solutions, I struggled to effectively communicate with this manager, who was reluctant to change the design.
</p>

<div class="callout thought">How can I persuade my manager to reconsider the design?</div>

<h2>
6 months earlier...
</h2>
<p>
Six months before this work was prioritised, I created an interim branding solution for customers in Figma. I created an editable library of 81 styles, along with a tutorial, so customers could easily modify the styles and create their own color scheme.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/tutorial.png" alt="Tutorial UI">
  <figcaption>Branding tutorial <a href="google.com">Figma link </a></figcaption>
</figure>
<p>
Although customers loved the tool, some of them lacked the skills or capacity to change the styling themselves, so they asked me to do it for them. I created around a dozen of style guides for different lenders in Australia.
</p>
<p>
After a while, I realized that I only needed three colors from the brand to create the entire set.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/dozenui.png" alt="Dozen of brandings">
  <figcaption>Different brand styleguides <a href="google.com">Figma link </a></figcaption>
</figure>

<h2>Fast-forward to present day</h2>
<p>
I reflected these findings in a design where users are asked to provide three brand colors along with corresponding text colors.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/wizzard.png" alt="Color generator">
  <figcaption>Color generator <a href="google.com">Figma link </a></figcaption>
</figure>
<p>
The six colors were used to generate all 81 colors required for the color scheme, based on the mapping I created.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/mapping.png" alt="Color mapping">
  <figcaption>Colors mapping <a href="google.com">Figma link </a></figcaption>
</figure>
<p>This design provided users with a solid starting point, which would create the whole style guide and may only require small tweaks.
</p>
<p>I also added a JSON editor to allow the CX team to upload the colors that was imported from Figma, which some customers still preferred to use.
</p>
<h2>Anna, don’t change design!</h2>
<p>
I presented the design to the Product Lead, but he quickly dismissed it. Feeling frustrated, I found myself stuck with a design that was impossible to advocate for in front of developers. This led to self-doubt creeping in.
</p>
<div class="callout idea">I needed to find a way to persuade him.</div>
<p>
Believing I am capable of changing his mind, I decided to approach the problem systematically:
</p>
<ol>
<li>Understand why he was so reluctant to change the design?</li>
<p>From what I've gathered, he was stretched thin, with his day packed full of meetings. As a result, revisiting the original design is not a priority for him. </p>
<li>Find support in CX team members</li>
<ul>
<li>Collect use cases for the tool</li>
<li>Gather their feedback on the proposed design prototype</li>
</ul>
<li>Prepare a document to present</li>
<ul>
<li>Highlight the problems with the original design</li>
<li>Show how the proposed design solves the problems</li>
<li>Show my findings from testing with the CX team</li>
</ul>
<li>People don’t like change, don’t change all at once.</li>
<p>I chose to reintroduce elements of the original design to ensure it didn’t feel like a complete overhaul. This way, it appeared as though I was enhancing the user experience rather than making drastic changes.</p>
</ol>

<div class="callout feedback">This approach helped secure buy-in from the manager.</div>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/finalui.png" alt="Final UI">
  <figcaption>Final implementation <a href="google.com">Figma link </a></figcaption>
</figure>

<h2>They think it’s great</h2>
<p>
The Branding tool was implemented and the feedback I’ve gotten from the CX team and leadership:
 </p>

<div class="callout">
  <div class="icon idea"></div>
  <div class="text">“It’s very helpful, I didn’t have to change the corresponding buttons individually. I think I only had to change one or 2 after that” - CX manager</div>
</div>

<div class="callout">
  <div class="icon thought"></div>
  <div class="text">”It’s great. I have punched in a few colours and it populates the whole style guide” - CEO</div>
</div>

 <div class="callout message">“It’s very helpful, I didn’t have to change the corresponding buttons individually. I think I only had to change one or 2 after that” - CX manager</div>

  <div class="callout message">”It’s great. I have punched in a few colours and it populates the whole style guide” - CEO</div>

<h2> Could have, would have...</h2>
<p> 
What would I do differently? 
</p>
<ul>
<li>Ideally, implementing a WYSIWYG tool would be a significant improvement, but it would have required more time and resources, which the company didn't have at the time. </li>
<li>Instead of using a modal, which causes usability issues, I would explore alternative solutions.</li>
<li>Additionally, I would prioritize testing with users, a step the company never seem to have time for.</li>
</ul>