---
layout: "single_post_new"
title: "AI Resume optimisation"
description: "In a highly saturated job market, being seen is everything. How can we leverage AI to improve fairness and visibility in hiring systems by helping candidates present their genuine experience?"
tag: "Case study"
permalink: /portfolio/ats-resume
image: Ats-resume/hero.webp
posted: 1

show_toc: true 
toc:
  - title: "Context"
    id: "context"
  - title: "Discovery"
    id: "discovery"
  - title: "Insights"
    id: "insights"
  - title: "Ideate"
    id: "ideate"
  - title: "Design"
    id: "design"
  - title: "Develop"
    id: "develop"
  - title: "Impact"
    id: "impact"
  - title: "Learnings"
    id: "learnings"

---


{% assign metric_icon = "check_box" %}

{% include lightbox.html
  id="hero"
  thumb="/assets/uploads/Ats-resume/hero.webp"
  full="/assets/uploads/Ats-resume/hero.webp"
 %}

<div class="highlighted project-overview">

  <div class="overview-item">
  <h4>PROJECT</h4>
  <p>Optimise resume: AI project exploring transparency, explainability and bias in AI-powered resume optimisation.</p>
  </div>
  

    <div class="overview-item">
  <h4>PROBLEM</h4>
  <p>Qualified candidates are being filtered out because resumes don’t align with how ATS and recruiters interpret skills, experience and tone.</p>
  </div>

  <div class="overview-item">
  <h4>SOLUTION</h4>
  <p>Human-in-the-loop AI tool that rewrites resumes with explainability, confidence levels and bias checks.</p>
  </div>
 

  <div class="overview-item">
  <h4>IMPACT</h4>
  <ul class="metrics">
    <li><span class="material-icons">{{ metric_icon }}</span>Reduced resume tailoring time by 75%.</li>
    <li><span class="material-icons">{{ metric_icon }}</span>Reduced biased or exclusionary language in resumes.</li>
    <li><span class="material-icons">{{ metric_icon }}</span>Noticeable increase in recruiter responses, suggesting higher ATS compatibility.</li>
</ul>

  </div>
  </div>
   




<section class="section section--first "><!-- Beginning of CONTEXT -->
<div class="subsection">
<h2 id="context"><span class="step-label" aria-hidden="true">CONTEXT</span>Good candidates go unseen</h2>

<p>The hiring process is broken in many ways. Many high-fit candidates never make it past automated screening (ATS) because their resumes don’t match the language ATS systems expect. </p>
<p>Meanwhile, recruiters sift through piles of keyword-stuffed resumes that all sound the same.</p>

<p>On the other side, candidates waste hours rewriting resumes for every role, trying to guess what matters. Most follow conflicting online advice that focuses on tricking algorithms instead of communicating real skills.</p>

{% include quotes.html content="

ATS filters me out even though I totally qualify. I have **no way to know** what I’m doing wrong.

You have to get **through the system first**. Then you can prove yourself or have someone take a chance on you. 

Building too much for ATS can **backfire** on human readability." %}

</div> 
</section>
<!--  END of CONTEXT -->




<div class="full-width">
<div class ="inner-full-width">
<section class="section"><!-- Beginning of DISCOVERY -->

<div class="subsection">
<h2 id="discovery"><span class="step-label" aria-hidden="true">DISCOVERY</span>Mystery of ATS</h2>
<p>To understand both sides: candidates and recruiters, I looked at:</p>
<ul><li>How ATS systems like Workday, Greenhouse and Lever parse and rank resumes </li>
<li>Why most resume optimisation tools fail to earn user trust </li>
<li>Candidate pain points shared across Reddit, LinkedIn, and user interviews </li>
<li>Recruiter workflows and screening patterns </li> </ul>
</div>

<div class="subsection">
<h3>Key findings</h3>
<ul><li>
Candidates have no visibility into why their resumes were rejected or ignored.</li>
<li>Many tools gave conflicting or manipulative advice, encouraging keyword stuffing.</li>
<li>Users wanted simple uploads, instant feedback and full control over what gets changed.</li>
<li>Bias in language was invisible to most users, but they cared deeply once it was shown.</li>
</ul>
</div>





</section> <!--  END of DISCOVERY -->

   </div> <!-- END OF INNER -->
  </div> <!-- END OF FULL WIDTH -->


<section class="section"> <!-- START OF INSIGHTS PHASE -->
<div class="subsection">
<h2 id="insights"><span class="step-label" aria-hidden="true">INSIGHTS</span>Opportunity</h2>


{% include blockquote.html
   text="How might we help candidates **get seen** by translating their real experience into the language recruiters and ATS understand?" %}

</div>

<div class="subsection">
<h2>User & Business needs</h2>

  <div class="card-container s-space">

  {% include card.html
      type="info" subtype="red"
      icon="person"
      icon_color_class="icon-white"
      header_color_class="header-black"
      header="User needs"
      subheader="Candidate"
      list="Resume passes ATS filtering; Resume gets shortlisted by a recruiter; Edits are explainable, transparent and reversible; Use of biased language is reduced " %}


  {% include card.html
      type="info" subtype="purple"
      icon="monitoring"
      icon_color_class="icon-white"
      header_color_class="header-black"
      header="Business needs"
      subheader="Hiring system"
      list="Improve candidate engagement; Reduce recruiter screening time; Strengthen company’s data advantage; Open premium revenue streams; Advance fairness and brand trust " %}
  </div>
</div>

<div class="subsection">
<h2>Measuring success</h2>
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>Adoption: % of job seekers who try the optimisation</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Completion: % of optimised resumes submitted</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Retention: % of returning users optimising more resumes</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Shortlist conversion: % of shortlisted resumes optimised</li>
    <li><span class="material-icons">{{ metric_icon }}</span>Interview conversion: % of interviewed candidates who used optimisation
</li>
      <li><span class="material-icons">{{ metric_icon }}</span>Bias reduction: % decrease in detected bias across submitted resumes
</li>
  </ul>
</div>

</section>  <!-- END OF DEFINE PHASE -->



<div class="full-width">
<div class ="inner-full-width">
<section class="section"><!-- START OF IDEATE PHASE -->
<div class="subsection">
  <h2 id="ideate"><span class="step-label" aria-hidden="true">IDEATE</span>Design dilemmas</h2>


<div class="subsection">
 <h3> Automation vs Control </h3>
       
        {% include lightbox.html
          id="control"
          thumb="/assets/uploads/Ats-resume/control.webp"
          full="/assets/uploads/Ats-resume/control.webp" 
          alt="Automation vs Control"
      %}
  
 {% include table.html
  headers="Dilemma|Learnings|Decision"
  rows="
    Should users manually approve each AI suggestion or review all changes after they’re applied? | Users cared more about efficiency than full control. They wanted the AI to “just fix it”, but still know what changed.| Resolved by automating high/medium confidence edits and surfacing low confidence ones for user approval.;
   Should the AI automatically apply bias-risk fixes or should users decide which ones to keep?| Users preferred the AI fixing bias automatically as long as they could see what was changed and why.|Apply all bias-risk mitigations automatically, but surface them clearly for user review before finalising.
  "%}
 
</div>

<div class="subsection">
 <h3> Transparency & Explainability </h3>
       
        {% include lightbox.html
          id="transparency"
          thumb="/assets/uploads/Ats-resume/transparency.webp"
          full="/assets/uploads/Ats-resume/transparency.webp" 
          alt="Transparency & Explainability"
      %}
  
 {% include table.html
  headers="Dilemma|Learnings|Decision"
  rows="
    How to make users feel in control? | Users wanted to see what changed and how it affected their match and bias scores. | Show keyword list (present and missing) with placement, match score and bias risk to make changes transparent.;
    How to show confidence levels without confusing users? | Users didn’t fully understand what “low” or “medium confidence” meant. They preferred clear outcomes and reasoning over extra labels. | Simplified confidence display to two states (added and not added) supported by short reasoning, so transparency comes from explanation.;
    Should users see explainability for every keyword or only for low-confidence ones? | When AI suggestions felt unclear, users looked for short explanations to decide whether to accept or remove them.| Show explainability for all keywords using progressive disclosure (brief reasoning by default, detailed context on expand).
  "%}
 
</div>



<div class="subsection">
 <h3> Bias & Fairness </h3>
       
        {% include lightbox.html
          id="bias"
          thumb="/assets/uploads/Ats-resume/bias.webp"
          full="/assets/uploads/Ats-resume/bias.webp" 
          alt="Bias & Fairness"
      %}
  
 {% include table.html
  headers="Dilemma|Learnings|Decision"
  rows="
    How to make bias risk observable, understandable, and correctable? | Users had little awareness of bias in resumes and didn’t recognise how language could affect fairness. They needed simple, non-technical framing to understand its impact.| Introduce bias indicators (Low / Medium / High) with plain-language explanations with before and after insights.
  "%}
 
</div>


<div class="subsection">
 <h3> Feedback Loop </h3>
       
        {% include lightbox.html
          id="feedback"
          thumb="/assets/uploads/Ats-resume/feedback.webp"
          full="/assets/uploads/Ats-resume/feedback.webp" 
          alt="Feedback Loop"
      %}
  
 {% include table.html
  headers="Dilemma|Learnings|Decision"
  rows="
 Do users need both positive and negative feedback options? | Users wanted a quick, optional way to flag mistakes without breaking flow.| Keep only the “Flag mistake” option and make it subtle and contextual.
  "%}
 
</div>
</div>
</section> <!-- END OF IDEATE PHASE -->
   </div> <!-- END OF INNER -->
  </div> <!-- END OF FULL WIDTH -->



<section class="section"> <!-- START OF DESIGN PHASE -->

<div class="subsection">
  <h2 id="design"><span class="step-label" aria-hidden="true" >DESIGN</span>Main user flows</h2>
</div>

        <h3> Including a keyword </h3>
        {% include lightbox.html
          id="include-keyword"
          thumb="/assets/uploads/Ats-resume/include-keyword.gif"
          full="/assets/uploads/Ats-resume/include-keyword.gif" 
          alt="User includes a missing keyword”"
          caption="User includes a missing keyword"
        %}


<div class="subsection">
        <h3> Excluding a keyword </h3>
        {% include lightbox.html
          id="exclude-keyword"
          thumb="/assets/uploads/Ats-resume/exclude-keyword.gif"
          full="/assets/uploads/Ats-resume/exclude-keyword.gif" 
          alt="User excludes a keyword"
          caption="User excludes a keyword"
        %}
</div>

<div class="subsection">
        <h3> Reverting a bias change </h3>
        {% include lightbox.html
          id="bias-flow"
          thumb="/assets/uploads/Ats-resume/bias-flow.gif"
          full="/assets/uploads/Ats-resume/bias-flow.gif" 
          alt="User reverts bias change"
          caption="User reverts bias change"
        %}
</div>


<div class="subsection">
  <h2> System guardrails</h2>
    <ul class="bold-li">
  
<li>Fact integrity</li>
<p>Never invent or alter facts. Use only what’s verifiable from the candidate’s text. Add keywords only when confident they reflect real experience. No exaggeration or implied ownership.</p>

<li>Natural keyword placement </li>
<p>Blend keywords naturally across Summary, Experience and Skills. One per bullet, no repetition or forced phrasing. Skip anything that doesn’t fit cleanly.</p>

<li>Semantic precision</li>
<p>Match meaning, not words. Use correct domain synonyms, avoid false matches and negations. Don’t infer from titles or nearby terms.</p>

<li>Bias & Fairness</li>
<p>Replace biased or exclusive wording with neutral, inclusive phrasing. Keep tone balanced and use Australian spelling.</p>

<li>Leadership tone</li>
<p>Write with confidence and clarity. Show ownership, collaboration and results. Avoid passive voice and weak verbs.</p>

<li>Formatting & Limits</li>
<p>Summary ≤70 words. Use bullets for achievements only. </p>

<li>Style rules</li>
<p>Be clear, concise and grounded in truth. Avoid filler and self-praise. Prioritise measurable impact and plain language.</p>

</ul>
</div>
</section> <!-- end of section DESIGN -->


<div class="full-width">
<div class ="inner-full-width">
<section class="section"> <!-- start of section IMPACT -->
<h2 id="develop"><span class="step-label" aria-hidden="true">DEVELOP</span>Building MVP</h2>

<p>I built a working MVP to test how these flows feel in action.</p>
The app runs the full resume optimisation pipeline:
<ul><li>Uploading a resume and job description</li>
<li>Parsing content </li>
<li>Applying AI suggestions </li>
<li>Showing present and missing keywords </li>
</ul>

<p>It uses Netlify functions, OpenAI API (GPT-4o model), and custom scoring logic to simulate real ATS behaviour.</p>

<p>Building it gave me hands-on experience using AI to code, refining prompts through iterations and dealing with non-deterministic AI behaviour, learning how small prompt edits could completely change the output. </p>


 {% include lightbox.html
          id="mvp-app"
          thumb="/assets/uploads/Ats-resume/mvp-app.gif"
          full="/assets/uploads/Ats-resume/mvp-app.gif" 
          alt="MVP resume optimising"
          caption="Functional MVP built with GPT-4o and Netlify functions"
        %}


</section> <!-- END OF IMPACT PHASE -->
   </div> <!-- END OF INNER -->
  </div> <!-- END OF FULL WIDTH -->



<section class="section"> <!-- start of section IMPACT -->
<h2 id="impact"><span class="step-label" aria-hidden="true" >IMPACT</span>MVP Impact</h2>


<!-- <p><strong>Seller impact</strong></p> -->
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>Reduced tailoring time by 75%.</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Reduced biased or exclusionary language in resumes.</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Noticeable increase in recruiter responses, suggesting higher ATS compatibility.</li></ul>


</section> <!-- END OF IMPACT PHASE -->




<section class="section"> <!-- start of section LEARNINGS -->
<h2 id="learnings"><span class="step-label" aria-hidden="true" >KEY LEARNINGS</span>Key learnings</h2>
<ul>
<li>ATS systems' way of parsing, matching, and scoring resumes.</li>
<li>Engineering a consistent AI prompt.</li>
<li>Practising API keys handling.</li>
<li>Detecting and reducing bias risk in writing. </li>
<li>Fast prototyping through “vibe coding” </li>
</ul>

