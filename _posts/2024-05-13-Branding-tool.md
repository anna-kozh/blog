---
layout: "single_post"
title: "How I convinced my stubborn manager"
description: '"Don’t change the original design," my Product Lead told me on my second day at Simpology. He had designed the whole solution two years before I joined, and the team had already implemented 20% of the design. This is a story about how I changed the original design.'
tag: "Case study"
image: 
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
  <h4>DESIGN TASK</h4>
  <p>Enable customers to brand the platform as their own.</p>
  </div>
  <div class="overview-item">
  <h4>ROLE</h4>
  <p>Lead Product Designer</p>
  </div>
  <div class="overview-item">
  <h4>PLATFORM</h4>
  <p>Web application</p>
  </div>
  <div class="overview-item">
  <h4>KEY RESULT</h4>
  <p>Reduced the amount of time needed to create branding to just 1 minute.</p>
  </div>
</div>

<p>
Loanapp is a web platform for Australian lenders to create and evaluate home loan applications. It lets customers customize everything, from form fields to colors. These colors are stored in a JSON metadata file with 81 variables. Previously, customers did not have an easy way to brand the platform themselves.
</p>

<p>
The goal of this project was to create a tool that makes it easy for customers to create their own branded color schemes for the app.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

<h2>"But we already have a design!"</h2>
<p>
The design for the branding tool already existed. It had been created three years earlier, before any development work or research findings. Still, my Product Lead was convinced that it was the best solution. After reviewing the design, I identified discrepancies with the current colors implementation and found usability problems. 
</p>

<p>
While I'm good at finding simple, practical solutions, I struggled to effectively communicate with this manager, who was reluctant to change the design.
</p>

<div class="callout thought">So how could I persuade my manager to reconsider the design?</div>

<h2>
6 months earlier
</h2>
<p>
Six months before this work was prioritised, I had created an interim branding solution for customers in Figma. That was an editable library of 81 styles, along with a tutorial, so that customers could easily modify the styles and create their own color scheme.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/tutorial.webp" width= "780px" alt="Tutorial UI">
  <figcaption>Branding tutorial <a href="https://www.figma.com/design/DsjLnz3zZpxPaqpLwq0INV/Tutorial?node-id=0-1&t=Wq3v12LAkzW2PP3t-1" target="_blank">Figma link </a></figcaption>
</figure>
<p>
Although customers loved the tool, some of them lacked the skills or capacity to change the styling themselves, so they asked me to do it for them. I created around a dozen style guides for different lenders in Australia.
</p>
<p>
After a while, I realized that I only needed three colors from the brand to create the entire set.
</p>

<h2>Fast-forward to the present day</h2>
<p>
I incorporated these findings into design where users were asked to provide three brand colors, along with corresponding text colors.
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/generator.webp" width="780px" alt="Color generator">
  <figcaption>Color generator <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-6332&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>
<p>
The six colors were used to generate all 81 colors required for the color scheme, based on the mapping I created. For example:
</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/mapping.webp" width="414px" height="244px" alt="Color mapping">
  <figcaption>Colors mapping </figcaption>
</figure>
<p>This design provided users with a solid starting point, which would help them create the whole style guide, with maybe just a few small tweaks.
</p>
<p>I also added a JSON editor to allow the CX team to upload the colors that were imported from Figma, which some customers still preferred to use.
</p>
<h2>"Anna, don’t change design!"</h2>
<p>
I presented the design to the Product Lead, but he quickly dismissed it. I felt frustrated, I found myself stuck with a design that was hard to defend to actual developers. As a result, self-doubt began creeping in.
</p>
<div class="callout idea">I needed to find a way to persuade him.</div>
<h2> Let's get strategic</h2>
<p>
Believing I was capable of changing his mind, I decided to approach the problem strategically:
</p>
<ol>
<li>Understand why he was so reluctant to change the design</li>
<p>From what I gathered, he was stretched thin, with his day packed full of meetings. As a result, revisiting the original design was not a priority for him.  </p>
<li>Gather data</li>
<p>I tested my prototype with the CX team and collected their supportive feedback on my ideas.</p>
<li>People don’t like change, so don’t change everything at once</li>
<p>I chose to reintroduce elements of the original design so it didn’t feel like a complete overhaul. This way, I was enhancing the user experience rather than making drastic changes.</p>
<li>Be clear and concise</li>
<p>I presented my idea by highlighting "what I have added", instead of focusing on "what is wrong with the current design".</p>
</ol>

<div class="callout feedback">This approach helped me secure buy-in from the manager.</div>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/finalui.webp" width= "780px" alt="Final UI">
  <figcaption>Final implementation <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-4852&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

<h2>"It's great!"</h2>
<p>
The branding tool was implemented, and this is some of feedback I received from the CX team and leadership:
 </p>

 <div class="callout message">“It’s very helpful, I didn’t have to change the corresponding buttons individually. I think I only had to change one or 2 after that” - CX manager</div>

  <div class="callout message">”It’s great. I have punched in a few colours and it populates the whole style guide” - CEO</div>

<h2> What would I do differently?</h2>
<ul>
<li>Implementing a WYSIWYG tool would have been a significant improvement, but it would have required more time and resources, which the company didn't have at the time. </li>
<li>Instead of using a modal, which causes usability issues, I would explore alternative solutions.</li>
<li>Additionally, I would prioritize testing with users.</li>
</ul>
