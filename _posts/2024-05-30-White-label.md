---
layout: "single_post"
title: "Creating multi-brand white label design system"
description: "Developers hate guessing design. Trying to work with an outdated, inconsistent design file can literally make them pull their hair out. This is the chaos I walked into. This is the story of how I transformed it into a multi-library, white-label design system."
tag: "Case study"
image: 
posted: 1
---

<div class="full-width-section highlighted project-overview">
  <div class="overview-item">
  <h4>COMPANY</h4>
  <p>"Simpology" is an Australian fintech company that develops white-label products for the lending industry.</p>
  </div>
  <div class="overview-item">
  <h4>DESIGN TASK</h4>
  <p>Transform the design mess into a structured, easy-to-maintain system.</p>
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
  <h4>KEY RESULTS</h4>
  <p><ul>
  <li>The new design file structure is easier to navigate and maintain</li>
  <li>Design deliverables are more consistent and clear </li>
  <li>Feature turnaround sped up significantly</li>
  <li>Branding a product file is now a 2-second task</li>
  </ul>
  </p>
  </div>
</div>

<p>
"Simpology" is an end-to-end home loan application platform. The company offers multiple products, which lenders can customize to seamlessly integrate with their existing ecosystem.
</p>

<h2>Welcome to our mess</h2>
<p>
When I joined the company, there was a significant disconnect between design and development. A consultant created Figma files and handed them over to the team in a very waterfall manner. 
</p>

<p>
Throughout the iterations, design has evolved, component libraries were adopted, and customers brandings were created - but the design files stayed the same.
</p>

<p>
I inherited a dozen Figma files, each with its own local library of colors and fonts. Every task became unnecessarily time-consuming, whether it was branding a file for a customer or detailing the interaction flow for the team.
</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/old.webp" width= "780px" alt="Old file structure">
  <figcaption>Each file had a local library </figcaption>
</figure>

<h2>
Phase 1 - Get on the same page
</h2>
<p>
In Simpology, like any fast-growing company, design debt wasn't a high priority. To get us on the same page, design had to catch up with implementation and iterate from there.
</p>
<strong> I created: </strong>
<ul>
<li>Design system with UI components</li>
<li>Branding file per customer, each with a library of 81 color styles</li>
<li>I recreated the wireframes matching the current implementation using the libraries above.</li>
</ul>

<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/phase1.webp" width= "780px" alt="Tutorial UI">
  <figcaption>Design files structure (Phase 1)</figcaption>
</figure>


<h2> It’s an improvement </h2>
<p>The team now had design files that reflected the current state. All new features were now designed using existing components and matching libraries.</p>
<strong>That worked pretty well, but had a few flaws: </strong>
<ul>
<li>Swapping libraries only worked on finished wireframes. Any change would revert a component to its original library. </li>
<li>Maintaining the libraries was a part-time job. When a style was added or changed, I needed to update them all. </li>
</ul>

<div class="callout thought">It was the best solution at the time, but thank Figma gods for progress!</div>


<h2>Phase 2 - Era of variables</h2>
<p>
During Figma Config 2023 a life-changing feature “Variables” was announced.
</p>
<ul>
<li>Now, I was able to combine all customers' styles and logos into one file “Branding” using variables</li>
<p><a href="https://www.figma.com/design/9E88nOcSjMjZVjB9fAx49h/Branding?node-id=14-22258&t=cxsSVkRGSYhc1GOD-1" target="_blank">Branding file (Figma link) </a> </p>
<li>I rebuilt components using component variants and properties </li>
<p><a href="https://www.figma.com/design/QYJC5EsMLgAqFCF9c747vd/Core?node-id=98-98895&t=q5vLNFRld5vb3rzW-1" target="_blank">Design system (Figma link) </a></p>
</ul>

<figure>
<img src="{{site.baseurl}}/assets/uploads/White-label/phase2.webp" width="780px" alt="Color generator">
  <figcaption>Design files structure (Phase 2)</figcaption>
</figure>

<h2>
This works much better
</h2>
<ul>
<li>Rebranding an app takes one click (ok, maybe two)  </li>
<p><a href="https://www.figma.com/design/zwLj0ZkWJvXSODN0AX57KZ/Demo?node-id=2-3384&t=rycZU5uNcaMOWZgI-1" target="_blank">See Demo (Figma file)</a></p>
<li>Working on the branded file no longer disrupts the styles </li>
<li>Maintaining the color schemes is very easy now - they are all in one table.</li>
</ul>

<h2>
Design system is not enough!
</h2>
<p>Creating a design system is one thing, but ensuring everyone in the company actually uses it is another challenge altogether. Keeping implementation and design aligned requires ongoing effort: </p>

<ul>
<li>I now involve developers early in the feature design process. </li>
<li>All front-end pull requests must be reviewed by a designer (me). </li>
<li>As the design team expands, new processes and practices must be established (e.g. RACI for each library)</li>
</ul>