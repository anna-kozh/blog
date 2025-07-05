---
layout: "single_post_new"
title: "Onboarding self-service tool"
description: "I led the strategy, design, and delivery of a self-service onboarding tool that cut setup time by nearly half and reduced support load by 35 percent. It turned a costly operational burden into a scalable product solution that unblocked growth without adding headcount."
tag: "Case study"
permalink: /blog/onboarding
image: /Self-service/custom.webp
posted: 1

show_toc: true 
toc:
  - title: "My role"
    id: "my-role"
  - title: "Context"
    id: "context"
  - title: "Discovery"
    id: "discovery"
  - title: "Problem"
    id: "problem"
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

{% include lightbox.html
  id="hero"
  thumb="/assets/uploads/Self-service/custom.webp"
  full="/assets/uploads/Self-service/custom.webp"
  alt="Different brands customisation"
 %}

<div class="highlighted project-overview two-column">
<div class="column-40">
  <div class="overview-item">
  <h4>COMPANY</h4>
  <p>Simpology (fintech, white-label mortgage products)</p>
  </div>
  
  <div class="overview-item">
  <h4>ROLE</h4>
  <p>Lead UX/UI Designer</p>
  </div>

<div class="overview-item">
  <h4>DURATION</h4>
  <p>26 weeks</p>
  </div>

  <div class="overview-item">
  <h4>TEAM</h4>
  <p>FE Dev, BE Dev, QA, PM, UX</p>
  </div>
</div>
<div class="column-60">
    <div class="overview-item">
  <h4>PROBLEM</h4>
  <p>Configuration and branding setup caused onboarding delays, high operational cost, client frustration and lost revenue.</p>
  </div>

  <div class="overview-item">
  <h4>SOLUTION</h4>
  <p>Launch a self-service tool to streamline onboarding.</p>
  </div>
 

  <div class="overview-item">
  <h4>IMPACT</h4>
  <ul class= "metrics">
  <li><span class="material-icons">{{ metric_icon }}</span>35% operational cost saving </li>
  <li><span class="material-icons">{{ metric_icon }}</span>50% time-to-launch reduced</li>
  <li><span class="material-icons">{{ metric_icon }}</span>81% client satisfaction score during onboarding</li></ul>
  </div>
  </div>
  </div>
   



  
<div id="my-role">
<h2><span class="step-label" aria-hidden="true">MY ROLE</span>My role & influence </h2>
<p> <ul>
<li> Led discovery that reframed onboarding as a business bottleneck </li>
<li>Drove roadmap tradeoffs and feature prioritization with product and engineering </li>
<li>Aligned stakeholders around a phased delivery model under tight constraints
</li>
<li> Defined strategy and execution plan for Phase 1 </li>
<li>Designed patterns for long-term scalability</li>
<li>Designed and scopped Phase 2 </li>
</ul> </p>
</div>
  

<div id="context"><!-- Beginning of CONTEXT -->
<h2><span class="step-label" aria-hidden="true">CONTEXT</span>Customisation is what sets us apart</h2>

{% include lightbox.html
  id="custom"
  thumb="/assets/uploads/Self-service/custom.webp"
  full="/assets/uploads/Self-service/custom.webp"
  alt="Different brands customisation"
  caption="Different clients customisation" %}

<p> Onboarding new clients at Simpology required manually setting up a <strong>metadata spreadsheet</strong> with thousands of rows, used to configure a dynamic form builder. </p>

{% include lightbox.html
  id="metadata"
  thumb="/assets/uploads/Self-service/metadata.webp"
  full="/assets/uploads/Self-service/metadata.webp"
  alt="Client setup spreadhsheet"
  caption="Client setup spreadsheet (blurred)" %}


<p>As client base grew, this process became a major liability:
<ul>
<li> 30% tickets were related to onboarding new clients </li>
<li>$500K in operational cost per year </li>
<li>6+ month launch delay causing $480K lost in revenue annually</li>
<li>Constant strain on support, devs, and client teams </li>
</ul></p>

{% include blockquote.html
   text="Customisation that set us apart also made it <span class='bold'>hard to scale</span>." %}

</div> <!--  END of CONTEXT -->


<div id="discovery"> <!-- START OF DISCOVERY PHASE -->
<h2><span class="step-label" aria-hidden="true" >DISCOVERY</span>
Workshop showed a bottleneck</h2>
<p>
I kicked off with a 3-hour cross-functional onboarding workshop including Support, AMs, Engineers, and PM. We mapped the actual onboarding flow and surface pain points:
<ul>
<li> Branding was blocked by design and dev dependencies </li>
<li>Configuration relied on fragile spreadsheets no one fully understood </li>
<li>No preview or validation existed at any stage, leading to avoidable rework </li>
<li>Process was slow and repetitive</li>
</ul>
</p>

{% include lightbox.html
   id="journey-map"
   thumb="/assets/uploads/Self-service/journey-map.webp"
   full="/assets/uploads/Self-service/journey-map.webp" 
   alt="Onboarding journey map"
   caption="Onboarding journey map" %}





<div class="full-width">
<div class ="inner-full-width">
<p>To dig deeper, I mapped the two biggest sources of friction separately: </p>
<h3>Branding flow</h3>

{% include lightbox.html
   id="branding-map"
   thumb="/assets/uploads/Self-service/process-branding.webp"
   full="/assets/uploads/Self-service/process-branding.webp" 
   alt="Branding setup process steps"
   caption="Branding setup process steps" %}

<h3>Configuration flow</h3>

{% include lightbox.html
   id="config-map"
   thumb="/assets/uploads/Self-service/process-config.webp"
   full="/assets/uploads/Self-service/process-config.webp" 
   alt="Configuration setup process steps"
   caption="Configuration setup process steps" %}

<p>The detailed view confirmed that manual processes, technical dependencies, and a lack of visibility were slowing every launch. </p>
</div> <!-- END OF INNER -->
</div><!-- END OF FULL WIDTH -->
</div><!-- END OF DISCOVERY -->


<div id="define"> <!-- START OF DEFINE PHASE -->
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
<p>I explored three product directions to solve onboarding at scale. Each concept was evaluated against user needs, technical feasibility, long-term scalability, and effort required. </p>


<h3> Option 1: Canvas editor </h3>

{% include lightbox.html
   id="sketch-inline"
   thumb="/assets/uploads/Self-service/concept-1.webp"
   full="/assets/uploads/Self-service/concept-1.webp" 
   alt="Option 1. Canvas editor"
   caption="Option 1. Canvas editor" %}


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

<h3>Option 2: Form Editor </h3>

{% include lightbox.html
   id="sketch-form"
   thumb="/assets/uploads/Self-service/concept-2.webp"
   full="/assets/uploads/Self-service/concept-2.webp" 
   alt="Option 2. Form Editor"
   caption="Option 2. Form Editor" %}

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
     list="~50% reduction in support tickets; ~45% faster time‑to‑launch" %}

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
   thumb="/assets/uploads/Self-service/concept-3.webp"
   full="/assets/uploads/Self-service/concept-3.webp" 
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
<br> <br>
<p>I facilitated a tradeoff workshop with Product and Engineering to align on direction and clarify which path delivered the most value within our constraints.</p>

<h2>Constrains</h2>
<ul>
<li>26 weeks to reduce onboarding-related support load</li>
<li>Only 1 FE and one BE engineer available part‑time, plus QA support</li>
<li>The team has minimal familiarity with the metadata schema, risk of unknown edge cases.</li>
</ul>

<h2>Tradeoffs</h2>

<p>With just 26 weeks and limited resources, we needed a pragmatic solution that delivered the most impact. </p>
<!-- Tradeoff table -->
{% include table.html
  headers="Criteria|Canvas Editor|Form Editor|Guided Wizard"
  rows="
    Meeting user needs|90%:green|50%:yellow|30%:red;
    Impact|High:green|Medium:yellow|Low:red;
    Effort|High:red|Low:green|Medium:yellow;
    Risk|High:red|Low:green|Medium:yellow
  "
  accent_index=2 %}




<p>Form Editor (option 2) was the <strong>most strategic choice</strong> because it:</p>

<ul>
<li>Addressed 80% of the most common onboarding needs</li>
<li>Significantly reduced internal team time spent on repetitive setup</li>
<li>Had the lowest build effort and learning curve</li>
<li>Established reusable components and mental models for future iterations
</li>
</ul>

{% include blockquote.html
   text="Form Editor served as a <span class='bold'>stepping stone</span> toward the Canvas Editor." %}

</div> <!-- END OF IDEATE PHASE -->


<div id="design"> <!-- START OF DESIGN PHASE -->
<h2><span class="step-label" aria-hidden="true" >DESIGN</span>Splitting Branding and Configuration</h2>
<p>To move faster, reduce risk and complexity, I proposed to split the problem into two distinct product tracks:</p>
<p>A. Branding setup</p>
<p>B. Configuration setup</p>



</div>

<div id="branding">
<h2>A. Branding setup</h2>

{% include lightbox.html
   id="phase-branding"
   thumb="/assets/uploads/Self-service/timeline-branding.webp"
   full="/assets/uploads/Self-service/timeline-branding.webp" 
   alt="Branding phase is highlighted"
 %}
<h2> Strategy </h2>
<p>I designed every part of the branding tool with the future Canvas editor in mind.
<ul><li> The "Style Generator" served as the early version of what would become the "Base Theme". </li>
<li>The colour picker, validation logic, contrast checks, and fallback behavior were all built as modular components, intentionally designed to be reused.  </li> </ul>
</p>

{% include blockquote.html
   text="This allowed us to  <span class='bold'>validate complex styling patterns early</span>." %}

 <h2> Key design decisions </h2>
<!-- Table of user needs and design decisions -->
{% include table.html
  headers="User need|Design decision"
  rows="
    Fast, non-technical first-time setup|Auto-generate full theme by mapping 3 input colours to 91 style variables;
    Easy palette revisions|Added interactive colour picker with immediate visual feedback;
    Upload brand assets|Logo, favicon, and contact info with inline file guidance;
    Reduce errors and rework|Built-in validation, fallbacks for missing values, and contact format checks;
    Live preview|Live preview via color swatches and instant publish

  "%}

{% include lightbox.html
   id="user-needs"
   thumb="/assets/uploads/Self-service/user-needs.webp"
   full="/assets/uploads/Self-service/user-needs.webp" 
   alt="Key designs"
   caption="Key design decisions"
 %}




<h2>User testing and revisions</h2>
<p>I ran an informal usability testing with a Support Specialist and Account Manager. Iterations included:</p>

<ul class="bold-li">
<li>Increase discoverability of the wizard generator button </li>
<p>"Wizard" → "Generate styles"</p>

<li>Support legacy variables upload</li>
<p>As legacy variables view is an alternative view to the form fields, I placed them under the toggle to avoid conflicts.</p>

{% include lightbox.html
   id="legacy"
   thumb="/assets/uploads/Self-service/legacy.webp"
   full="/assets/uploads/Self-service/legacy.webp"
   alt="Supporting legacy variables upload"
   caption="Two views to upload branding"
%}
<li>Added contrast check</li>
<p>Financial services must meet WCAG Level AA. That includes making sure all text, big and small, is accessible.</p>

{% include lightbox.html
   id="contrast"
   thumb="/assets/uploads/Self-service/contrast.webp"
   full="/assets/uploads/Self-service/contrast.webp" 
   alt="Checking contrast"
   caption="Checking contrast"
 %}

</ul>

<h2>Final solution - Branding</h2>
{% include lightbox.html
   id="final"
   thumb="/assets/uploads/Self-service/final.gif"
   full="/assets/uploads/Self-service/final.gif" 
   alt="Branding flow (final wireframes)"
   caption="Branding flow (final wireframes)"
   link="https://www.figma.com/design/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?node-id=1-138022&t=sbtO3naXbHv7GI6f-1"
 %}


<h2>Prototype</h2>
<p>Explore a full interactive
<a href= "https://www.figma.com/proto/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?page-id=0%3A1&node-id=1-138282&viewport=761%2C996%2C0.03&t=dss0pcOopbPAPfWk-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=1%3A138282&show-proto-sidebar=1" target="_blank"> Prototype </a></p>

<h2>Impact</h2>
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>100% of branding completed independently</li>
<li><span class="material-icons">{{ metric_icon }}</span>94% operational cost saving on branding</li>
<li><span class="material-icons">{{ metric_icon }}</span>3-5% reduced tiime to launch </li>
<li><span class="material-icons">{{ metric_icon }}</span>Task success rate in usability testing 95%</li>
<li><span class="material-icons">{{ metric_icon }}</span>Qualitative CSAT increase confirmed via stakeholder feedback</li>
</ul>


<div class="callout message">“It’s very helpful, I didn’t have to change the corresponding buttons individually. I think I only had to change one or 2 after that” - CX manager</div>

<div class="callout message">”It’s great. I have punched in a few colours and it populates the whole style guide” - CEO</div>

<h2>Learnings</h2>
<ul class="bold-li">
<li>Big impact from a simple tool</li>
<p>This tool seemed simple, but it unlocked massive value. It reminded me that the most powerful solutions aren’t always the most complex ones.</p>
<li>Don’t underestimate the support your team needs</li>
<p>I set the direction and scoped the work, but I underestimated how much day-to-day support the team would need. Now, I stay more involved during delivery to keep momentum and make sure we stay aligned.</p>
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

<h2> Strategy </h2>
<p>The configuration tool was also built as a foundation for the future Canvas editor.
<ul><li> Versioning, draft autosave, and confirmation steps were designed as a reusable mental model for editing and publishing. </li>
<li> The properties and option list editors were modular by design, ready to plug into the canvas workflow. </li> </ul>
</p>


 <h2> Key design decisions </h2>
<!-- Table of user needs and design decisions -->
{% include table.html
  headers="User need|Design decision"
  rows="
    Quickly locate a field |Mirrored the metadata structure with hierarchical sections and subsections;
    Quickly locate a property |Grouped 53 properties into 5 categories (e.g., Display, Content) for easy scanning;
    Avoid repetitive tasks|Enabled syncing for modals reused across the app;
    Prevent user errors|Made the 'Current' version read-only and added a confirmation step before publishing changes;
    No technical skills required|Allowed users to manage option lists without writing code;
    Live preview to reduce guesswork|Deferred full live preview, but introduced publish-step preview as a workaround
  "%}

{% include lightbox.html
   id="user-needs-config"
   thumb="/assets/uploads/Self-service/user-needs-config.webp"
   full="/assets/uploads/Self-service/user-needs-config.webp" 
   alt="Key designs"
   caption="Key design decisions"
 %}



<h2>User testing and revisions</h2>
<p>I conducted a quick, informal usability session with two internal stakeholders: an Account Manager and a Support Specialist.</p>

<ul class="bold-li">
<li>Show default value & Reset to default</li>

{% include lightbox.html
   id="default"
   thumb="/assets/uploads/Self-service/default.webp"
   full="/assets/uploads/Self-service/default.webp" 
   alt="Show default value"
   caption="User is able to reset to default"
 %}
<li>Version comparison came from collaboration</li> <p> During testing, a developer suggested expanding the publish confirmation step into a full version comparison. It aligned with user needs and was feasible to add to scope.  </p>

{% include lightbox.html
   id="compare"
   thumb="/assets/uploads/Self-service/compare.webp"
   full="/assets/uploads/Self-service/compare.webp" 
   alt="User can compare two versions"
   caption="Troubleshooting by comparing two versions"
 %}

</ul>




<h2>Final solution</h2>
{% include lightbox.html
   id="changing-field"
   thumb="/assets/uploads/Self-service/changing-field.gif"
   full="/assets/uploads/Self-service/changing-field.gif" 
   alt="Example of changing a placeholder for a field"
   caption="Changing 'Credit issue' placefolder"
   link="https://www.figma.com/design/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?node-id=21-94885&t=sbtO3naXbHv7GI6f-1"
 %}



<h2>Prototype</h2>
<p>Prototypes for 5 core use cases:</p>
<ul>
<li> 
<a href="https://www.figma.com/proto/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?page-id=0%3A1&node-id=5-74060&viewport=2748%2C1415%2C0.19&t=8TpD6QeRPSfMlWUt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A74060&show-proto-sidebar=1" target="_blank"> Changing field property</a></li>

<li> 
<a href="https://www.figma.com/proto/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?page-id=0%3A1&node-id=5-73748&viewport=2748%2C1415%2C0.19&t=8TpD6QeRPSfMlWUt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A73748&show-proto-sidebar=1" target="_blank"> Syncing modals</a></li>

<li>
<a href="https://www.figma.com/proto/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?page-id=0%3A1&node-id=19-93229&viewport=2748%2C1415%2C0.19&t=8TpD6QeRPSfMlWUt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=19%3A93229&show-proto-sidebar=1" target="_blank">  Creative a version draft</a></li>

<li> 
<a href="https://www.figma.com/proto/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?page-id=0%3A1&node-id=5-73875&viewport=2748%2C1415%2C0.19&t=8TpD6QeRPSfMlWUt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=5%3A73875&show-proto-sidebar=1" target="_blank"> Editing option lists</a></li>

<li> 
<a href="https://www.figma.com/proto/kJAUBG2WOJxqTXg0ZsjIZ5/Onboarding?page-id=0%3A1&node-id=19-91211&viewport=2748%2C1415%2C0.19&t=8TpD6QeRPSfMlWUt-1&scaling=scale-down&content-scaling=fixed&starting-point-node-id=19%3A91211&show-proto-sidebar=1" target="_blank"> Comparing versions</a></li></ul>

<h2>Impact</h2>
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>45% drop in support tickets</li>
<li><span class="material-icons">{{ metric_icon }}</span>40% faster time-to-launch</li>
<li><span class="material-icons">{{ metric_icon }}</span>90% eliminated cross-team dependencies</li>
<li><span class="material-icons">{{ metric_icon }}</span>Positive feedback from stakeholders</li>
</ul>

<div class="callout message">"This completely changes how we scale onboarding. What used to take months now takes weeks." - Chief Product Officer</div>



<h2>Learnings</h2>
<p> Involving engineers early paid off. Their insights shaped a smarter solution, flagged risks I hadn’t seen, and surfaced better ways to build within constraints.</p>

</div>

<!-- Place for the Table of content -->
<div id="impact">
<h2><span class="step-label" aria-hidden="true" >IMPACT</span>Form Editor impact</h2>
<p>
While we didn’t hit every stretch goal, Form Editor (Phase 1) made real progress by cutting onboarding time in half, reducing support load by 35%, and laying the groundwork for full self-service in Phase 2.
</p>

<!-- Table of sucess metrics and achieved metrics -->
{% include table.html
  headers="Metric|Target |Outcome"
  rows="
    Decrease reliance on internal teams|100%|70%;
    Operational cost saving|80%|35%;
    Time to launch reduced|1 month|3-4 months (50% faster);
    Client satisfaction score during onboarding|90%|81%
  "%}
<h3>Measuring CSAT </h3>
<p>I used 5-point Likert scale that would appear once a week after user completes a task. The tool got 81% satisfaction, showing strong positive feedback from internal users, which is above average for fintech benchmarks 78–79%.</p>

{% include lightbox.html
   id="csat"
   thumb="/assets/uploads/Self-service/csat.webp"
   full="/assets/uploads/Self-service/csat.webp" 
   alt="Asking user to give us satisfaction feedback"
   caption="Requesting user feedback"
 %}

</div>

<div id= "future-iteractions"> <!-- Star of FUTURE ITERACTIONS -->
<h2><span class="step-label" aria-hidden="true">FUTURE ITERATIONS</span>Strong foundation & clear gaps</h2>
<p>Form Editor made meaningful progress, but it didn't fully solve the problem:
<ul> <li>
Clients still relied heavily on internal teams</li>
<li>Operational costs were reduced, but not to target levels </li>
<li>Onboarding delays were shortened, but not eliminated </li></ul>
</p>

<div class="callout message">"This tool is still too complex for our customers." - Support Officer</div>

<div class="callout message">"Clients want to have more control over their configuration." - Account Manager</div>

<!-- {% include blockquote.html
  text="<span class='bold'> Clients want more control.</span> "%} -->

<h2>Pushing towards full self-service </h2>
<p>Once Form Editor cut onboarding time by 50%, I used that momentum to pitch a full self-service vision to leadership. </p>

<strong>Canvas Editor</strong> extends the impact of Form Editor by:
<ul>
<li>Giving clients real-time control over setup</li>
<li>Speeding up onboarding by eliminating back-and-forth</li>
<li>Minimising internal onboarding workload</li>
<li>Adding a significant competitive edge for the business </li></ul>

<h2>Designing within constraints</h2>

{% include table.html
  headers="Constraint|Design decision"
  rows="
    Fixed metadata schema| Deferred drag-and-drop layout editing. Focused instead on visibility toggles and content-level configuration;
    Nested and cross-form dependencies| Made dependencies explicit through structural cues. Enabled modal syncing for shared components to prevent duplication and errors;
    Page renaming limitations|Deferred renaming in UI and emphase field-level controls
  "%}


<h2>Stakeholder alignment </h2>
<p>To reduce delivery risk and build momentum, I led early reviews with cross-functional leads to align on priorities and technical constraints. We scoped Phase 2 and made strategic tradeoffs to stay within our timeline:</p>
<ul> 
<li>Defer Undo/Redo</li>
<li> Defer page name editing </li>
<li> Defer AI powered suggestions</li>
<li> Develop for desktop first based on usage data and dev capacity </li></ul>


<h2>Iterating on the Form Editor </h2>
<p>Canvas Editor builds on elements from the Form Editor. It reuses: </p>
<ul>
<li>Branding generator (Base theme) </li>
<li>Versioning</li>
<li>Option editor </li>
<li>Confirmation and comparing versions</li>
</ul>

{% include lightbox.html
   id="345"
   thumb="/assets/uploads/Self-service/csat.webp"
   full="/assets/uploads/Self-service/csat.webp" 
   alt="Asking user to give us satisfaction feedback"
   caption="Reusing elements from Form Editor"
 %}

<h2>Core design principles</h2>
<ul><li>Instant visual feedback (WYSIWYG)</li>
<li>Direct manipulation of elements</li>
<li> Guiding customers to succeed in their configuration </li> </ul>


{% include lightbox.html
   id="cs234at"
   thumb="/assets/uploads/Self-service/csat.webp"
   full="/assets/uploads/Self-service/csat.webp" 
   alt="Asking user to give us satisfaction feedback"
   caption="Show gif or direct manipulations"
 %}




{% include lightbox.html
   id="123"
   thumb="/assets/uploads/Self-service/csat.webp"
   full="/assets/uploads/Self-service/csat.webp" 
   alt="Asking user to give us satisfaction feedback"
   caption="Show gif or show/hide"
 %}





<h2>What's next </h2>

<p> Canvas Editor is in the design phase. So far I’ve: </p>
<ul>
<li>Mapped key flows </li>
<li>Outlined reusable components </li>
<li>Validated technical tradeoffs </li> </ul>

<p>Next, I’ll prototype and test core flows with internal and client users to validate the mental model, confirm usability, and ensure it scales without developer involvement. </p>

<p class="last-step">
Canvas Editor isn’t just a better tool, it's a scalable platform, shifting ownership to clients and minimise internal dependencies.</p>

 <!-- End of FUTURE ITERACTIONS -->