---
layout: "single_post"
title: "Onboarding self-service tool"
description: '"You never get a second chance to make a first impression," they say. Onboarding is like a first date — if you show up late, your client might already be swiping through other options. This is the story of how we got them off the market.'
tag: "Case study"
permalink: /blog/self-service
image: 
posted: 1

show_toc: true 
toc:
  - title: "Discover"
    id: "discover"
  - title: "Define"
    id: "define"
  - title: "Ideate"
    id: "ideate"
  - title: "Design"
    id: "design"
    sub_sections:
      - title: "Branding"   
        id: "branding"
      - title: "Configuration"
        id: "configuration"
  - title: "Impact"
    id: "impact"
  - title: "Future iterations"
    id: "future-iteractions"

---

{% assign metric_icon = "check_box" %}



<div class="overview-width highlighted project-overview">
  <div class="overview-item">
  <h4>COMPANY</h4>
  <p>"Simpology" is an Australian fintech company that develops white-label products for the home lending industry.</p>
  </div>
  

  <div class="overview-item">
  <h4>PROBLEM</h4>
  <p>Configuration and branding setup caused onboarding delays, high operational cost, client frustration and lost revenue.</p>
  </div>

  <div class="overview-item">
  <h4>SOLUTION</h4>
  <p>Launch a self-service tool to streamline onboarding.</p>
  </div>

  <div class="overview-item">
  <h4>BUSINESS IMPACT</h4>
  <ul class="metrics">
  <li><span class="material-icons">{{ metric_icon }}</span>50% reduction in onboarding operational costs </li>
  <li><span class="material-icons">{{ metric_icon }}</span>Time to launch from 6 months to 3 months </li>
  <li><span class="material-icons">{{ metric_icon }}</span>Increased scalability with limited resources </li></ul>
  </div>

  <div class="overview-item">
  <h4>USER IMPACT</h4>
  <ul class= "metrics">
  <li><span class="material-icons">{{ metric_icon }}</span>50% faster section setup completion </li>
  <li><span class="material-icons">{{ metric_icon }}</span>80% CSAT during onboarding </li>
  <li><span class="material-icons">{{ metric_icon }}</span>95% Task success rate in usability testing</li></ul>
  </div>
  
  <div class="overview-item">
  <h4>TEAM</h4>
  <p>FE Dev, BE Dev, QA, PM, UX</p>
  </div>
  
  <div class="overview-item">
  <h4>ROLE</h4>
  <p>Lead UX/UI Designer</p>
  </div>

  <div class="overview-item">
  <h4>DURATION</h4>
  <p>26 weeks</p>
  </div>
</div>


<div id="discover"> <!-- START OF DISCOVERY PHASE -->
<h2><span class="step-label" aria-hidden="true" >DISCOVER</span>
Onboarding costed $940K as business scaled</h2>
<p>
During support ticket analysis, we discovered that <strong>30% tickets</strong> were related to onboarding new clients. As the business scaled and client acquisition increased, the volume of these requests grew, resulting in an estimated annual <strong>cost of $940,000 per year</strong>.
</p>

{% include lightbox.html
  id="discovery"
  thumb="/assets/uploads/Self-service/discovery.webp"
  full="/assets/uploads/Self-service/discovery.webp"
  alt="Manual onboarding caused lost revenue and wasted resources"
  caption="Onboarding costed $940,000 per year" %}


<h2 id="short-direct">Customisation is what sets us apart</h2>
<p>
Our greatest competitive advantage is offering <strong>fully customisable</strong> home loan application products, tailored to each lender’s unique processes and forms.
</p>

{% include lightbox.html
  id="customisation"
  thumb="/assets/uploads/Branding-tool/loanapp.webp"
  full="/assets/uploads/Branding-tool/loanapp.webp"
  alt="Different brands customisation"
  caption="Different brands customisation" %}



<h2>
Customisation is main part of onboarding</h2>
<p>
When a new client comes on board, Account Manager manually sets up a complex metadata spreadsheet with <strong>thousands of rows</strong>, including:
<ul>
<li><strong>Branding</strong>
<ul><li>logo</li>
<li>colours </li></ul></li>

<li><strong>Configuration</strong>
<ul><li>feature flags</li>
<li>form fields </li></ul></li>
</ul>
</p>




{% include blockquote.html
   text="As we scale, manual onboarding becomes<span class='bold'> harder to manage efficiently. </span>" %}

<h2>Workshop showed a bottleneck</h2>
<p>
To better understand the existing onboarding workflow, I conducted a cross-functional process mapping workshop. Together, we visualised every step involved in setting up a new client, from contract signing to launch.</p>

<p><strong>Duration:</strong> 3 hours</p>
<p><strong>Team:</strong> Account managers, Support, Dev, Design, Product</p>
<p><strong>Objective:</strong> Map the current process and identify pain points</p>
<p><strong>Outcome:</strong> Metadata is tedius and complicated to update, which leads to delays and frustration.</p>

{% include lightbox.html
   id="journey-map"
   thumb="/assets/uploads/Self-service/journey-map.webp"
   full="/assets/uploads/Self-service/journey-map.webp" 
   alt="Onboarding journey map"
   caption="Onboarding journey map" %}




<section class="full-width-section">
<div>
<h2>Why branding causes delays?</h2>
<ul>
<li>Dependencies on the designer and developer</li>
<li>Unnecessary documentation and waiting time</li>
<li>No visual preview leads to errors and rework</li>
</ul>

{% include lightbox.html
   id="branding-map"
   thumb="/assets/uploads/Self-service/process-branding.webp"
   full="/assets/uploads/Self-service/process-branding.webp" 
   alt="Branding setup process steps"
   caption="Branding setup process steps" %}


<h2>Why configuration causes delays?</h2>
<ul>
<li>Understanding client needs takes time and repeated back-and-forth</li>
<li>Process is tedius, repetitive, and time-consuming</li>
<li>Requires technical knowledge and developer input</li>
<li>No visual preview leads to errors and rework</li>
</ul>

{% include lightbox.html
   id="config-map"
   thumb="/assets/uploads/Self-service/process-config.webp"
   full="/assets/uploads/Self-service/process-config.webp" 
   alt="Configuration setup process steps"
   caption="Configuration setup process steps" %}

</div>
</section>
</div> <!-- END OF DISCOVERY PHASE -->


<!-- START OF DEFINE PHASE -->
<div id="define">
<h2><span class="step-label" aria-hidden="true" >DEFINE</span>Problem statement</h2>
<p>
Configuration and branding setup caused onboarding delays, high operational cost, client frustration and lost revenue.
</p>
<h2>Client, User & Business needs</h2>

<div class="card-container">
 {% include card.html
    type="info" subtype="purple"
    icon="account_balance"
    icon_color_class="icon-white"
    header_color_class="header-black"
    header="Client needs"
    subheader="Lender"
    list="Fast, smooth onboarding; Accurate setup matching brand and processes" %}


 {% include card.html
    type="info" subtype="blue"
    icon="person"
    icon_color_class="icon-white"
    header_color_class="header-black"
    header="User needs"
    subheader="Account manager"
    list="Intuitive, no-tech-skill tool; Quick setup; No repetitive tasks; Live preview to reduce errors; Built-in error checks" %}


 {% include card.html
    type="info" subtype="red"
    icon="monitoring"
    icon_color_class="icon-white"
    header_color_class="header-black"
    header="Business needs"
    subheader="Simpology"
    list="Lower operational cost; Reduce opportunity cost from delays; Scale without growing headcount" %}
</div>


{% include blockquote.html
   text="<span class='bold'>How might we streamline </span> configuration and branding setup?" %}

<h2>Success metrics</h2>
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>80% reduction in operational effort during onboarding</li>
<li><span class="material-icons">{{ metric_icon }}</span>Time to launch cut from 6 months to 1 month</li>
<li><span class="material-icons">{{ metric_icon }}</span>90% CSAT during onboarding</li>
</ul>

</div>  <!-- END OF DEFINE PHASE -->




<div id="ideate"> <!-- START OF IDEATE PHASE -->
<h2><span class="step-label" aria-hidden="true">IDEATE</span>Concepts explored</h2>

<h3> Option 1: Inline editor </h3>

{% include lightbox.html
   id="sketch-inline"
   thumb="/assets/uploads/Branding-tool/loanapp.webp"
   full="/assets/uploads/Branding-tool/loanapp.webp" 
   alt="Option 1. Inline editor"
   caption="Option 1. Inline editor" %}


<div class="card-container">


  {% include card.html
     type="ideate" subtype="needs"
     icon="check"
     icon_color_class="icon-white"
     header_color_class="header-black"
     header="Needs met"
     list="Intuitive tool that requires no technical skills; Quick application of branding; Minimise repetitive tasks; Live preview to reduce guesswork; Built-in checks to prevent rework" %}

  {% include card.html
     type="ideate" subtype="challenges"
     icon="extension"
     icon_color_class="icon-white"
     header_color_class="header-black"
     header="Key challenges"
     list="Highest front‑end engineering complexity; Requires performant, sandboxed rendering of live UI;Longer QA testing" %}

</div>


<div class="card-container">


  {% include card.html
     type="tradeoff" subtype="impact" mode="green"
     icon="trending_up"
     icon_color_class="icon-white"
     header_color_class="header-white"
     header="High impact"
     list="~90% reduction in support tickets; ~80% faster time‑to‑launch; Significant lift in client satisfactiont" %}


  {% include card.html
     type="tradeoff" subtype="effort" mode="red"
     icon="construction"
     icon_color_class="icon-white"
     header_color_class="header-white"
     header="High effort"
   list="UX/UI, PM, BA, 2 FE, 1 BE, 2 QA engineers (30-40 weeks Dev work, 30 weeks Design, 30 weeks QA)" %}
</div>

<h3>Option 2: Form editor </h3>

{% include lightbox.html
   id="sketch-form"
   thumb="/assets/uploads/Branding-tool/loanapp.webp"
   full="/assets/uploads/Branding-tool/loanapp.webp" 
   alt="Option 2. Form editor"
   caption="Option 2. Form editor" %}

<div class="card-container">


  {% include card.html
     type="ideate" subtype="needs"
     icon="check"
     icon_color_class="icon-white"
     header_color_class="header-black"
     header="Needs met"
     list="Quick application of branding; Minimise repetitive tasks; Live preview to reduce guesswork - met 50%; Built-in checks to prevent rework - met 50%" %}

  {% include card.html
     type="ideate" subtype="challenges"
     icon="extension"
     icon_color_class="icon-white"
     header_color_class="header-black"
     header="Key challenges"
     list="Client continues to depend on internal teams; No live preview, leading to errors and rework;User still needs JavaScript knowledge" %}

</div>


<div class="card-container">
  {% include card.html
     type="tradeoff" subtype="impact" mode="yellow"
     icon="trending_up"
     icon_color_class="icon-black"
     header_color_class="header-black"
     header="Medium impact"
     list="~50% reduction in support tickets; ~80% faster time‑to‑launch" %}

  {% include card.html
     type="tradeoff" subtype="effort" mode="green"
     icon="construction"
     icon_color_class="icon-white"
     header_color_class="header-white"
     header="Low effort"
   list="UX/UI, BA, 1 FE , 1 BE, 1 QA engineers (20 weeks Dev work, 4 weeks Design, 4 weeks QA)" %}
</div>


<h3>Option 3: Guided wizard</h3>

{% include lightbox.html
   id="sketch-wizzard"
   thumb="/assets/uploads/Branding-tool/loanapp.webp"
   full="/assets/uploads/Branding-tool/loanapp.webp" 
   alt="Option 3. Guided wizard"
   caption="Option 3. Guided wizard" %}


<div class="card-container">
  {% include card.html
     type="ideate" subtype="needs"
     icon="check"
     icon_color_class="icon-white"
     header_color_class="header-black"
     header="Needs met"
     list="Intuitive tool that requires no technical skills; Quick application of branding; Minimise repetitive tasks; Live preview to reduce guesswork; Built-in checks to prevent rework" %}
     
  {% include card.html
     type="ideate" subtype="challenges"
     icon="extension"
     icon_color_class="icon-white"
     header_color_class="header-black"
     header="Key challenges"
     list="Doesn’t cover every configuration scenario; Impossible to complete setup only with this tool" %}

</div>


<div class="card-container">

  {% include card.html
     type="tradeoff" subtype="impact" mode="red"
     icon="trending_up"
     icon_color_class="icon-white"
     header_color_class="header-white"
     header="Low impact"
     list="20% reduction in setup time; Improves time-to-value and client satisfaction" %}


  {% include card.html
     type="tradeoff" subtype="effort" mode="yellow"
     icon="construction"
     icon_color_class="icon-black"
     header_color_class="header-black"
     header="Medium effort"
   list="Insert data here" %}
</div>

<h2>Constrains</h2>
<ul>
<li>26 weeks to reduce onboarding-related support load</li>
<li>Only 1 FE and one BE engineer available part‑time, plus QA support</li>
<li>The team has minimal familiarity with the metadata schema, risk of unknown edge cases.</li>
</ul>

<h2>Tradeoffs</h2>

<!-- Place for tradeoff table -->
{% include table.html
  headers="Criteria|Inline editor|Form editor|Guided wizard"
  rows="
    Meeting user needs|90%:green|50%:yellow|30%:red;
    Impact|High:green|Medium:yellow|Low:red;
    Effort|High:red|Low:green|Medium:yellow;
    Risk|High:red|Low:green|Medium:yellow
  "
  accent_index=2 %}

{% include blockquote.html
   text="Form editor (option 2) <span class='bold'>delivers the most impact</span> within existing constraints." %}


<p>With just 26 weeks and limited resources, we needed a pragmatic solution that delivered the most impact. </p>
<p>Option 2 was the <strong>most strategic choice</strong> because it:</p>

<ul>
<li>Addressed 80% of the most common onboarding needs</li>
<li>Has the biggest impact on saving internal team time on repetitive tasks</li>
<li>Requires minimal development effort and learning</li>
<li>Laid a strong foundation for future iterations</li>
</ul>
</div> <!-- END OF IDEATE PHASE -->


<div id="design"> <!-- START OF DESIGN PHASE -->
<h2><span class="step-label" aria-hidden="true" >DESIGN</span>Splitting Branding and Configuration</h2>
<p>To move faster, reduce risk and complexity, we made a strategic decision to split the problem into two distinct product tracks:</p>
<p>A. Branding setup</p>
<p>B. Configuration setup</p>

{% include lightbox.html
   id="product-split"
   thumb="/assets/uploads/Self-service/timeline-both.webp"
   full="/assets/uploads/Self-service/timeline-both.webp" 
   alt="The project was broken into 2 products"
 %}

</div>
<div id="branding">
<h2>A. Branding setup</h2>

{% include lightbox.html
   id="phase-branding"
   thumb="/assets/uploads/Self-service/timeline-branding.webp"
   full="/assets/uploads/Self-service/timeline-branding.webp" 
   alt="Branding phase is highlighted"
 %}


<h2>Prioritised user needs</h2>
<ol>
<li>Fast and simple first-time branding setup</li>
<li>Easy revision of the colour palette</li>
<li>Upload logo, favicon, lender contact information</li>
<li>Intuitive tool that requires no technical skills</li>
<li>Built-in checks to prevent rework</li>
<li>Live preview to reduce guesswork</li>
</ol>

<h2>Addressing user needs</h2>
<ol class="bold-li">
<li> Fast and simple first-time branding setup</li>

<p>To make branding setup easier for first-time users, I explored options based on typical client style guide, which usually includes 2–3 brand colors. </p>
<p>What started as a “Basic vs Expert” mode turned into a smarter approach: basic mode became a palette generator.</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

<!-- <div class="callout thought">I mapped 6 brand colors to 91 variables.</div> -->


{% include blockquote.html
  text="<span class='bold'> I mapped 6 brand colors to 91 variables.</span> "%}

<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>


<li><strong>Upload logo, favicon, lender contact information</strong></li>
<p>I made sure to support the user with suggested image size, resolution, file type. </p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>


<li>Intuitive tool that requires no technical skills </li>
<p>No code is required to use the tool, it’s visual and simple.</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>


<li>Built-in checks to prevent rework</li>
<p>In the list of color variables, every color has a fall back color in case user saves it with an empty value.
Error handling checking for a valid color
Phone, email have an input validation.</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>


<li>Live preview to reduce guesswork</li>
<p>Due to complexity and constraints, I limited the preview to six key brand colors, paired to give a quick visual check.</p>
<p>With fast publishing, users could still see the full design live within seconds.</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

</ol>

<h2>User testing and revisions</h2>
<p>I conducted a quick, informal usability session with two internal stakeholders: an Account Manager and a Support Specialist.</p>

<ul class="bold-li">
<li>Increase discoverability of the pallet generator button </li>
<p>Wizard → Generate styles/ pallette</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

<li>Support legacy variables upload</li>
<p>As legacy variables view is an alternative view to the form fields, I placed them under the toggle to avoid conflicts.</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>


<li>Added contrast check according to WGAA AA guidelines</li>
<p>Used WGA AA guidelines to check the contrast of 4,51 :1 check (edit this)</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>
</ul>

<h2>Final solution</h2>
<p>Insert final screens here</p>


<h2>Prototype</h2>
<p>You can explore the full interactive prototype here: Link here</p>


<h2>Impact</h2>
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>100% of branding completed independently</li>
<li><span class="material-icons">{{ metric_icon }}</span>Operational cost savings by 10.6%</li>
<li><span class="material-icons">{{ metric_icon }}</span>Time to launch reduced by 3%</li>
<li><span class="material-icons">{{ metric_icon }}</span>Task success rate in usability testing 95%</li>
<li><span class="material-icons">{{ metric_icon }}</span>CSAT affect</li>
</ul>

<!-- <h2>Impact</h2>
<ul class="metrics">
<li>100% of branding completed independently</li>
<li>Operational cost savings by 10.6%</li>
<li>Time to launch reduced by 3%</li>
<li>Task success rate in usability testing 95%</li>
<li>CSAT affect</li>
</ul> -->

<div class="callout message">“It’s very helpful, I didn’t have to change the corresponding buttons individually. I think I only had to change one or 2 after that” - CX manager</div>

<div class="callout message">”It’s great. I have punched in a few colours and it populates the whole style guide” - CEO</div>

<h2>Learnings</h2>
<ul class="bold-li">
<li>Surprising impact of the simple solution</li>
<p>This small tool made the biggest difference for our team. It was a reminder not to chase perfection, but driving impact instead. I focus on delivering the highest value within real-world constraints, and this tool did exactly that.</p>
<li>Don’t underestimate the support your team needs</li>
<p>Since I did all the scoping and requirements, my team needed more support than I was able to provide at the time. Next time, I’ll plan better to balance priorities.</p>
</ul>
</div>



<!-- B.Configuration -->
<div id="configuration">
<h2>B. Configuration setup</h2>

{% include lightbox.html
   id="design-config"
   thumb="/assets/uploads/Self-service/timeline-config.webp"
   full="/assets/uploads/Self-service/timeline-config.webp" 
   alt="Configuration phase is highlighted"
 %}



<h2>Prioritised user needs</h2>

<ol>
<li>Quickly locate the field and property</li>
<li>Avoid repetitive tasks</li>
<li>Prevent user errors</li>
<li>Live preview to reduce guesswork</li>
<li>No technical skills required</li>
</ol>



<h2>Addressing user needs</h2>
<ol class="bold-li">
<li>Quickly locate the field and property</li>

<p>The configuration was organised hierarchically into sections and subsections, and my design mirrors that structure to help user to quickly locate the field. </p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>



<p>We had 53 properties (columns) which were intended to have a horizontal scroll. To increase discoverability - I organised them in 5 groups (Display, Content, etc...) </p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>



<li>Avoid repetitive tasks</li>
<p>From the user’s perspective the same modal appears multiple time, so I added an option to sync the configuration with linked modals.</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>


<li>Prevent user errors</li>
<p>Immutable “Current” version prevents user from editing the live configuration</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>


<p>Also added a confirmation step before publishing: </p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

<li>Tool that requires no technical skills</li>
<p>Building conditional logic is the hard part for the user, it requires Java Script knowledge. Due to constraint, this is how I managed to meet this need partially:</p>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>



<li>Live preview</li>
<p>It was traded off for a confirmation when publishing. We added some visual feedback on Option list.</p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>
</ol>



<h2>User testing and revisions</h2>
<p>I conducted a quick, informal usability session with two internal stakeholders: an Account Manager and a Support Specialist.</p>

<ul class="bold-li"><li>Show default value & Reset to default</li>

<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

<li>Autosaving users’ changes in the  draft </li>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>

<li>A new use case was discovered during testing:</li> <p> user want to compare two versions to troubleshoot. Since the publish confirmation was essentially comparing versions, it was affordable to add it as a feature. </p>
<figure>
<img src="{{site.baseurl}}/assets/uploads/Branding-tool/loanapp.webp" width="780px" alt="Loanapp UI">
  <figcaption>Loanapp UI <a href="https://www.figma.com/design/wztKfGxxSMijwD52mhMaVc/Branding-tool?node-id=33-11233&t=1RmVXoVAVUM0o5ET-1" target="_blank">Figma link </a></figcaption>
</figure>
</ul>




<h2>Final solution</h2>
<p>Insert final screens here</p>


<h2>Prototype</h2>
<p>You can explore the full interactive prototype here: Link here</p>


<h2>Impact</h2>
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>~40% drop in support tickets</li>
<li><span class="material-icons">{{ metric_icon }}</span>~35% faster time-to-launch</li>
<li><span class="material-icons">{{ metric_icon }}</span>Positive feedback from early adopters</li>
<li><span class="material-icons">{{ metric_icon }}</span>90% eliminated cross-team dependencies.</li>
<li><span class="material-icons">{{ metric_icon }}</span>Changing one fields take 30 seconds, compared to 10 - 20 minutes before.</li>
<li><span class="material-icons">{{ metric_icon }}</span>Onboarding configuration for one customer takes 7 - 14 days, comparing to months before.</li>
</ul>


<h2>Learnings</h2>
<p>Importance of including dev team into design process. Especially on very technical tools. Developers are full of great ideas and can inform you on constrains, best solution technically, potential tradeoffs.
</p>

<p>Impact of this was big!</p>
</div>

<!-- Place for the Table of content -->
<div id="impact">
<h2><span class="step-label" aria-hidden="true" >IMPACT</span>Phase 1 impact</h2>
<p>
Overall, while our original goal was to reduce onboarding time by 90% and cut support load by 80%, the combined impact of our Configuration and Branding solutions achieved a 50% reduction in onboarding time and a 40% reduction in support load. This outcome partially met our success metrics, providing a solid foundation for Phase 2, where we plan to address the remaining gaps and deliver the ideal solution.
</p>

<!-- Place for table of sucess metrics and achieved metrics -->
{% include table.html
  headers="Metric|Target (sucess)|Phase 1 (achieved)"
  rows="
    Meet user needs?|100%|60%;
    Decrease reliance on internal teams|90%|20%;
    Operational cost saving|80%|50%;
    Time to launch reduced|1 month|4 months;
    Client satisfaction score during onboarding|90%|80%
  "%}
</div>
<!-- Place for the Table of content -->
<div id= "future-iteractions">
<h2><span class="step-label" aria-hidden="true">FUTURE ITERATIONS</span>Self-service setup tool</h2>
<p>Form editor made a real impact. But it didn’t fully solve the problem:</p>
<ul><li>Configuration remained manual and complex, highly dependant on internal teams.</li>
<li>Operational costs were reduced, but not to target levels.</li>
<li>Onboarding delays were shortened, but not eliminated.</li></ul>
<p> <strong> Internal teams feedback:</strong></p>
<ul><li>Still too complex, needing training and technical skills.</li>
<li>Missing live preview and visual feedback.</li></ul>
<p> <strong> Client feedback:</strong> </p>
<ul><li>Need flexibility to edit the setup themselves</li></ul>

<!-- <div class="callout message">Clients want more control.</div> -->



{% include blockquote.html
  text="<span class='bold'> Clients want more control.</span> "%}

<p>By empowering clients to self-serve, we can meet further our success metrics:</p>
<ul><li>Reduce internal workload </li>
<li>Lower support costs</li>
<li>Accelerate onboarding</li>
<li>Empower clients nad increase their satisfaction</li></ul>

<p>We’re revisiting Concept #1 to build a <strong>canvas-based tool</strong> (Inline editor). </p>

{% include lightbox.html
   id="concept 1"
   thumb="/assets/uploads/Branding-tool/loanapp.webp"
   full="/assets/uploads/Branding-tool/loanapp.webp" 
   alt="Concept 1"
   caption="Concept 1"
 %}

<p>It iterates on Form-editor key components:</p>
<ul>
<li>Branding wizard </li>
<li>Confirmation step</li>
<li>Version comparisons</li></ul>

<h2>Design principles for a canvas-based tool</h2>
<ul><li>Instant visual feedback (WYSIWYG) </li>
<li>Direct manipulation of elements</li>
<li>Auto-saving changes</li>
<li>Inline guidance and error checks</li>
<li>Undo/redo support</li>
<li>Version history for easy tracking</li>
<li>Clear structure communication (breadcrumbs, hierarchy)</li>
<li>Consistent settings for each element</li>
<li>Accessibility (keyboard, screen reader, high contrast)</li>
<li>Performance-aware (lazy loading where needed) </li></ul>

<h2>Technical constrains</h2>
<ul><li>All elements are in order, nothing can be moved to another page or section.</li>
<li>Can’t edit page names</li> </ul>

<h2>Drafted wireframes</h2>
<p> Insert wireframes and link to Figma </p>
<p> Also a onboarding guide to help user start from a good place</p>

<h2>Stakeholders feedback </h2>
<p>I shared early wireframes and concepts with key stakeholders. They saw clear potential in the inline editor approach and were particularly excited about: </p>
<ul><li>The real-time visual feedback during configuration </li>
<li>The simplicity of the branding wizard for client use</li></ul>

<p>They also asked me to consider:</p>
<ul><li>How to handle version control and change tracking </li>
<li>Options for access control and roles (e.g., which users can configure what)</li></ul>

<h2>Wrap up </h2>
<p>This project was a reminder that great design is about solving real problems, delivering impact, and iterating towards better solutions.</p>
<p>Phase 1 simplified onboarding, reduced support costs, and gave us critical insights into user and client needs. It wasn’t perfect—but it was a solid step that moved us closer to our goals.</p>
<p>Phase 2’s inline editor builds on this momentum, offering real-time control, reducing manual work, and creating a more scalable, client-friendly onboarding process.</p>
<p class="last-step">I’m excited to keep iterating, learning, and driving meaningful impact for both clients and the business.
</p>
