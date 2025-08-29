---
layout: "single_post"
title: "White label design system"
description: "The state of our design files was slowing everything down. Branding was manual, handovers were confusing and devs were working with outdated assets. I took ownership of the problem and built a system that finally scaled with the product."
tag: "Case study"
permalink: /portfolio/white-label
image: White-label/hero.webp
posted: 1
---

<div class="overview-width highlighted project-overview">
  <div class="overview-item">
  <h4>COMPANY</h4>
  <p>Simpology (fintech, white-label mortgage products)</p>
  </div>
  <div class="overview-item">
  <h4>PROBLEM</h4>
  <p>Without a unified system, design was inconsistent,  branding was slow and developers had to fill in the gaps, which led to errors in front-end implementation.</p>
  </div>
  <div class="overview-item">
  <h4>SOLUTION</h4>
  <p>Design system with shared libraries and brand variables, that enables fast branding, consistent handover and easier maintenance.</p>
  </div>
  <div class="overview-item">
  <h4>ROLE</h4>
  <p>Lead Product Designer</p>
  </div>
  <div class="overview-item">
  <h4>KEY RESULTS</h4>
  <ul>
  <li>The new design file structure is easier to navigate and maintain</li>
  <li>Design deliverables are more consistent and clear </li>
  <li>Feature turnaround sped up by 32%</li>
  <li>Branding a product file is now a 5-second task</li>
  </ul>
  
  </div>
</div>

<p>
"Simpology" is an end-to-end home loan application platform. The company offers multiple products, which lenders can customise to seamlessly integrate with their existing ecosystem.
</p>

<h2>The challenge</h2>
<p>
When I joined, design and development were completely disconnected. I was spending hours QA-ing front-end work, fixing mistakes and clarifying design intentions. The lack of structure didn’t just slow us down, it created constant friction and wasted effort.</p>

<p>Design had evolved over time, but the files hadn’t. We had over a dozen disconnected Figma files, each with its own colours, fonts, and components. Developers relied on guesswork and every branding setup involved hours of manual effort.</p>

<p>Onboarding a new client meant duplicating a file, updating styles one by one, and hoping nothing broke. We had no reliable source of truth.</p>


<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/old.webp" width= "780px" alt="Old file structure">
  <figcaption>Each file had a local library </figcaption>
</figure>

<h2>
Phase 1 - Align with devs
</h2>

<p>The first goal was to reflect reality. What I've done:</p>
<ul>
<li>Audited all design files </li>
<li>Partnered with front-end devs to align on design tokens </li>
<li>Created per-brand libraries of styles </li>
<li>Recreated wireframes and key flows to reflect the real product</li>
</ul>

<!-- <figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/brand_first.webp" width="780px" alt="First version of branding file">
  <figcaption>Brand library of styles </figcaption>
</figure> -->


<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/phase1.webp" width= "780px" alt="Tutorial UI">
  <figcaption>Design files structure (Phase 1)</figcaption>
</figure>


<h2> Impact </h2>
<ul>
<li>Design files became reliable and usable </li>
<li>Shared naming reduced confusion in handover</li>
<li>New features were built faster using consistent components </li>
<li>Improved front-end task completion speed by 32% </li>
</ul>


<strong>That worked pretty well, but had a few flaws: </strong>
<ul>
<li>Swapping libraries made revisions difficult. </li>
<li>Maintaining the libraries was a part-time job.  </li>
</ul>

<!-- <div class="callout thought">It was the best solution at the time, but thank Figma gods for progress!</div> -->


<h2>Phase 2 - Era of variables</h2>
<p>
When Figma Variables launched, I saw the opportunity to consolidate everything. I combined all customer branding into a single source-of-truth file.
</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/modes.webp" width="780px" alt="Two brands of Loanapp">
  <figcaption>Branding file (Phase 2)<a href="https://www.figma.com/design/9E88nOcSjMjZVjB9fAx49h/Branding?node-id=14-22258&t=cxsSVkRGSYhc1GOD-1" target="_blank">Figma link </a></figcaption>
</figure>


<p>I rebuilt the design system using component variants and properties.  </p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/design-system.gif" width="780px" alt="Two brands of Loanapp">
  <figcaption>Design system (Phase 2) <a href="https://www.figma.com/design/QYJC5EsMLgAqFCF9c747vd/Design-system?node-id=2819-6951&t=1FOBId2VT0GdMJYt-1" target="_blank">Figma link </a></figcaption>
</figure>

<p>Both libraries contributed to the ecosystem of Simpology products:</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/phase2.webp" width="780px" alt="Colour generator">
  <figcaption>Design files structure (Phase 2)</figcaption>
</figure>

<h2>Impact</h2>
<ul>
<li>Rebranding now takes only 5 seconds  </li>

<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/rebrand.gif" width="780px" alt="Two brands of Loanapp">
  <figcaption>5 seconds branding</figcaption>
</figure>

<li>Maintaining brand libraries is now efficient</li>
<li>No more broken styles when switching brands </li>
<li>The design system now powers our full product ecosystem </li>
</ul>

<h2>Strategic decisions</h2>
<p>Throughout the rebuild, I made decisions that kept the system lean while making future growth easier.</p>
<ul>
<li>Scoped branding logic to match dev tokens to reduce translation issues </li>
<li>Kept brands in a single file for visibility and version control</li>
<li>Deferred typography and spacing variables until naming was aligned with dev </li>
</ul>

<h2>
What's next
</h2>
<p>Currently, we have a good system of libraries that meets the company's needs. However, as Simpology grows, we need new improvements: </p>
<ul>
<li>Expanding the system with spacing and typography tokens </li>
<li>Collaborating with engineering on token implementation</li>
<li>Introducing processes like RACI to clarify design ownership as the team grows </li>
</ul>

<h2>
Lessons learned
</h2>
<ul class="last-step"> <li>Staying up to date with Figma releases and industry updates can unlock major efficiency gains.</li>
<li> Working shoulder to shoulder with developers was essential. Design system isn’t a designer’s asset, it’s a shared product. Building it together ensured we aligned on structure, tokens and naming, so we could speak the same language and move faster.</li>
</ul>