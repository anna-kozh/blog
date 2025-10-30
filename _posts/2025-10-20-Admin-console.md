---
layout: "single_post_new"
title: "Admin console redesign"
description: "How do you “single case study” your favourite 2-year project? I couldn’t. So I made a mini anthology: a collection of real design moments from my time at SkoolBag."
tag: "Case study"
permalink: /portfolio/admin-console
image: Admin-console/hero.webp
posted: 1

show_toc: true 
toc:
  - title: "My role"
    id: "my-role"
  - title: "Context"
    id: "context"
  - title: "Story 1"
    id: "story-1"
  - title: "Story 2"
    id: "story-2"
  - title: "Story 3"
    id: "story-3"
  - title: "Story 4"
    id: "story-4"
  - title: "Story 5"
    id: "story-5"
  - title: "Story 6"
    id: "story-6"
  - title: "Impact"
    id: "impact"
  - title: "Learnings"
    id: "learnings"

---


{% assign metric_icon = "check_box" %}

{% include lightbox.html
  id="hero"
  thumb="/assets/uploads/Admin-console/hero.webp"
  full="/assets/uploads/Admin-console/hero.webp"
 %}



<div class="highlighted project-overview two-column">
<div class="column-40">
  <div class="overview-item">
  <h4>COMPANY</h4>
  <p>SkoolBag (communication platform connecting schools and parents)</p>
  </div>
  
  <div class="overview-item">
  <h4>ROLE</h4>
  <p>Lead UX/UI Designer</p>
  </div>

<div class="overview-item">
  <h4>DURATION</h4>
  <p>2 years</p>
  </div>

  <div class="overview-item">
  <h4>TEAM</h4>
  <p>FE Devs, BE Devs, QAs, PM, UX, CX</p>
  </div>
</div>
<div class="column-60">
  <div class="overview-item">
  <h4>PROBLEM</h4>
  <p>The business needed to cut costs, expand features and enable new partnerships, which required migrating the old backend and rebuilding the entire school admin console.</p>
  </div>

  <div class="overview-item">
  <h4>SOLUTION</h4>
  <p>A new, modern School Admin Console.</p>
  </div>
 

  <div class="overview-item">
  <h4>IMPACT</h4>
  <ul class= "metrics">
  <li><span class="material-icons">{{ metric_icon }}</span>Migrated 1,000+ schools to a new console without loss of functionality. </li>
  <li><span class="material-icons">{{ metric_icon }}</span>Increased adoption of key features by 25%.</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Enabled new revenue streams and partnership opportunities.</li></ul>
  </div>
  </div>
  </div>

<section class="section section--first "><!-- Beginning of CONTEXT -->
  <h2 id="my-role"><span class="step-label" aria-hidden="true">MY ROLE</span>My role & influence </h2>
<ul>
<li>Lead Product Designer for the School Admin Console</li>
<li>Owned end-to-end design across discovery, UX and UI</li>
<li>Created user flows, prototypes and component specs for multiple squads</li>
<li>Partnered with PMs and tech leads to define priorities and scope</li>
<li>Acted as Product Owner when needed, prioritising backlog and defining requirements </li>
<li>Facilitated design reviews and supported dev during implementation</li>
<li>Improved handoff efficiency and design consistency across teams</li>
<li>Advocated for lean, iterative delivery and design maturity practices</li>
</ul>
</section>



<section class="section">
<div class="subsection">
<h2 id="context"><span class="step-label" aria-hidden="true">CONTEXT</span>SkoolBag book of stories</h2>

<p>SkoolBag was a scrappy B2B2C startup connecting schools and parents.</p>

 {% include lightbox.html
          id="products"
          thumb="/assets/uploads/Admin-console/products.webp"
          full="/assets/uploads/Admin-console/products.webp" 
          alt="SkoolBag products"
          caption="SkoolBag products ecosystem"
        %}

<p>The business needed to cut costs, expand features and enable new partnerships, which required migrating the old backend and <strong>rebuilding the entire school admin console</strong>.</p>

<p>SkoolBag proved to be the ideal setting for me. I thrived in the startup pace, working with a lean team and tight deadlines. It was the kind of environment where I do my best work.</p>


 {% include blockquote.html
   text="These **six stories** show the real side of design leadership in a startup." %}

<h3> Design process </h3>
<p>The overall approach followed a lean double-diamond pattern:</p>
<ul>
<li>Rapid discovery </li>
<li>Hypothesis framing </li>
<li>Ideation </li>
<li>Validation </li>
<li>Delivery </li>
<li>Iterations </li>
</ul>
<p>Each story below represents one decision point in that cycle: identifying a real problem, reframing it, testing ideas and measuring impact.</p>


</div> 
</section> <!-- END OF IDEATE PHASE -->


<div class="full-width"> <!-- Beginning of Story 1 -->
<div class ="inner-full-width">
<section class="section">
  <h2 id="story-1">
   <span class="story-meta">
       <span class="step-label" aria-hidden="true">STORY 1 </span>
        <span class="badge">Data-Driven Decision</span>
    </span> Convincing stakeholders </h2> 

<p>The main way schools communicate with parents is through a newsfeed of posts. </p>
<p>Our analytics showed that posts with images had significantly higher open rates. But most schools struggled to source quality pictures and often requested guidance from our support team.</p>

{% include blockquote.html
   text="The challenge was that the business saw images as **“nice-to-have”**." %}

<p>What helped to convince them:</p>
<ul><li>Showed them data proving higher engagement </li>
<li>Highlighted support costs from image-related tickets </li>
<li>Proposed an easy MVP: 5 Unsplash image options based on the post title</li>
<li>Reframed it as a market differentiator, not a design tweak </li></ul>

<p>That mix of clear data, small build effort and real business value convinced them to go ahead with it.</p>

 {% include lightbox.html
          id="unsplash1"
          thumb="/assets/uploads/Admin-console/unsplash-1.gif"
          full="/assets/uploads/Admin-console/unsplash-1.gif" 
          alt="Unsplash First iteration"
          caption="Unsplash integration - first iteration"
        %}

<h3>Adoption was great! </h3>
<ul>
<li>Within the first month, over 50% of posts used a suggested Unsplash image </li>
<li>Post engagement rate for schools using the feature increased </li>
<li>Schools requested more image options after launch </li>
<li>Image-related support requests dropped significantly </li> </ul>

<h3>Further iterations</h3>

 {% include lightbox.html
          id="unsplash-it"
          thumb="/assets/uploads/Admin-console/image-iterations.webp"
          full="/assets/uploads/Admin-console/image-iterations.webp" 
          alt="Further image iterations"
          caption="Unsplash integration - all iterations"
        %}

<p>The feature was widely adopted and quickly became part of nearly every post. Some schools even cited this feature as a reason they preferred SkoolBag over alternatives. </p>


</section>
</div> <!-- END OF INNER -->
</div> <!-- END OF FULL WIDTH --> <!--  END of Story 1-->

  <section class="section ">
  <h2 id="story-2">
   <span class="story-meta">
       <span class="step-label" aria-hidden="true">STORY 2 </span>
        <span class="badge">Scoping & Prioritisation</span>
    </span> Strategic scoping  </h2> 

<p>Our Legacy console's form builder supported complex conditional logic for every field.</p>

{% include blockquote.html
   text="PM wanted to rebuild the **entire feature** in the new console." %}

<p>My goal was to avoid a large, slow rebuild that would cost a significant engineering effort without guaranteed value. </p>
<p>I needed to find a version of the feature that solved the most common use case quickly.</p>
<ul><li>
Upon analysis, I found that conditional logic was almost always used for one specific scenario of “Contact Us” rerouting (e.g. teacher email). </li>
<li>I proposed simplifying the scope to focus on that scenario and leave complex branching for a later phase. </li></ul>

 {% include lightbox.html
          id="conditional"
          thumb="/assets/uploads/Admin-console/conditional.gif"
          full="/assets/uploads/Admin-console/conditional.gif" 
          alt="Conditional recipients"
          caption="Adding conditional recipients to a form"
        %}

<p>This approach <strong>delivered 80% of the value in 20% of the time</strong>.</p>

<p>It covered the primary user needs immediately while enabling a more advanced logic later.</p>


</section><!--  END of Story 2-->


<div class="full-width"> <!-- Beginning of Story 3 -->
<div class ="inner-full-width">
  <section class="section">
  <h2 id="story-3">
   <span class="story-meta">
       <span class="step-label" aria-hidden="true">STORY 3 </span>
        <span class="badge">Iteration & Validation</span>
    </span> Failed edge case</h2> 


<p>In the legacy version of SkoolBag, when a user created an event, it automatically appeared in the parents’ app newsfeed.</p>

<p>In v2, backend changes meant events no longer showed up in the newsfeed.</p>

<p>This frustrated school admins, who relied on event posts to grab parents’ attention.</p>

<p>While redesigning this feature, I got an interesting edge case: What happens when an event is shared after it’s been edited but not yet saved?</p>

<div class="subsection">
<h3>Initial solution</h3>
<ul><li>We <strong>assumed</strong> that if changes weren’t saved, they probably weren’t meant to be shared, since many admins create events in bulk early in the year and then leave them untouched.</li>
<li>Data showed unsaved edits were rare, so we shipped a faster solution optimised for the majority. </li></ul>

<p>The system would share the most recently saved version and <strong>ignore any unsaved edits</strong>. </p>

{% include lightbox.html
          id="event-share"
          thumb="/assets/uploads/Admin-console/event-share.gif"
          full="/assets/uploads/Admin-console/event-share.gif" 
          alt="Sharing event"
          caption="Failed flow of sharing an event"
        %}

<p>Users quickly complained that they were losing all their changes.</p>

<p>Even though data told us the edge case was small, it didn’t show how frustrating it was when it happened.</p>

 {% include blockquote.html
   text="It's not only how often it occurs, but **how painful it is when it does**." %}
</div>

<div class="subsection">
<h3> Iteration </h3>   

<p>We added a confirmation prompt when a user shared an event with unsaved changes. This restored control and trust.</p>
<p>I worried the extra step might feel annoying, but most admins weren’t tech-savvy and appreciated the clarity.</p>


{% include lightbox.html
          id="share-updated"
          thumb="/assets/uploads/Admin-console/share-updated1.webp"
          full="/assets/uploads/Admin-console/share-updated1.webp" 
          alt="Share event - updated"
          caption="Updated flow of sharing an event"
        %}
</div>
<p>User feedback on the new flow was overwhelmingly positive.</p>
<p>Even in a scrappy startup, you have to be selective about what you test, but I learned that high-impact edge cases still need to be tested.</p>




  </section>
   </div> <!-- END OF INNER -->
  </div> <!-- END OF FULL WIDTH --> <!--  END of Story 3 -->

  <section class="section "> <!-- Beginning of Story 4 -->
  <h2 id="story-4">
   <span class="story-meta">
       <span class="step-label" aria-hidden="true">STORY 4 </span>
        <span class="badge">Collaboration & Constraints</span>
    </span> Making tradeoffs </h2> 

<p>One of the toughest workflows for schools was user management because SkoolBag stored only parent data, not students.</p>
<p>Each year, multiple schools update their parent lists, deleting all records and reuploading a new CSV. This bulk upload feature existed in the legacy console and schools relied on it.  </p>
<p>I was now redesigning bulk user upload for the new console. </p>
<div class="subsection">
<h3>Reuse over Reinvent</h3>
<p>This story sums up startup life perfectly:</p>
<ul><li>10:00 - I presented a design in a feature review</li>
<li>10:20 - Dev suggested reusing an existing component from our stack instead</li>
<li>11:00 - I weighed both options, saw the benefits and redesigned the flow.</li></ul>

{% include lightbox.html
          id="bulk-upload"
          thumb="/assets/uploads/Admin-console/bulk-upload1.gif"
          full="/assets/uploads/Admin-console/bulk-upload1.gif" 
          alt="Bulk upload - initial solution"
          caption="User bulk upload - initial solution"
        %}

</div>
<div class="subsection">
<p>Once engineering started building, we hit a major unexpected constraint.</p>

 {% include blockquote.html
   text="System couldn’t handle rendering **thousands of editable fields** in the browser." %}


<h3>Reliability over Customisation</h3>
<p>Together, we explored alternatives and quickly pivoted to a simpler, more scalable flow: we only show a summary of the results.</p>

{% include lightbox.html
          id="bulk-upload-final"
          thumb="/assets/uploads/Admin-console/bulk-upload2.webp"
          full="/assets/uploads/Admin-console/bulk-upload2.webp" 
          alt="Bulk upload - final solution"
          caption="User bulk upload - final solution"
        %}

<p>The flow worked reliably and scaled well for large files.</p>
<p>We didn’t receive complaints or support tickets after launch and admins were able to complete bulk uploads without issues.</p>

<p>It taught me to <strong>involve engineering earlier</strong> when designing data-heavy features and to treat technical limits as part of the design challenge.</p>
</div>

  </section><!--  END of Story 4-->



<div class="full-width"> <!-- Beginning of Story 5 -->
<div class ="inner-full-width">
  <section class="section">
  <h2 id="story-5">
   <span class="story-meta">
       <span class="step-label" aria-hidden="true">STORY 5 </span>
        <span class="badge">Adoption & Behaviour Change</span>
    </span> Failed adoption </h2> 

<p>One of the biggest admin pain points was updating user groups each year.</p>

<p>Some schools solved this by uploading new CSV files, while others just relied on parents to do the right thing and update their groups.</p>

<p>We explored a lot of different options to solve that user pain. One of my initiatives was a lightweight “Assign groups” feature that let admins bulk-move users directly in the UI without needing spreadsheets. </p>
 
{% include lightbox.html
          id="assign-groups"
          thumb="/assets/uploads/Admin-console/assign-groups.gif"
          full="/assets/uploads/Admin-console/assign-groups.gif" 
          alt="Assign groups"
          caption="Assign groups to users"
        %}

 {% include blockquote.html
   text="The tool worked as intended, but **adoption was lower** than expected. " %}


<p>This was not a legacy feature for them, so they hesitated to use it. They didn’t understand how it fit into their existing workflow. </p>
<p>To help with adoption, I created a <strong>training video</strong>. </p>



<div class="m-space">
<div class="video-container"><iframe width="780" height="438.75" src="https://www.youtube.com/embed/KvnjBD93gQc?si=KdDMU_YrLfxjI4ol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>
</div>


<p>Looking back:</p>
<ul><li>If I had more time, I’d validate the solution with real users before release. </li>
<li> I also would’ve planned for behaviour change, not just problem-solving.</li> </ul>
<p>Solving a user problem isn’t enough. You also need to plan the onboarding and shape habits if you want a new solution to replace an old one.</p>

  </section>
  </div> <!-- END OF INNER -->
  </div> <!-- END OF FULL WIDTH --> <!--  END of Story 5 -->


  <section class="section "> <!-- Beginning of Story 6 -->
  <h2 id="story-6">
   <span class="story-meta">
       <span class="step-label" aria-hidden="true">STORY 6 </span>
        <span class="badge">Pushing Back & Vision
</span>
    </span>
 Rebuilding trust
  </h2> 

<p>After the migration, the app layout broke from a user perspective.</p>
<p>All tiles had the same color and icon, sub-tiles split into tiles and they could be reordered. Schools that had spent years carefully structuring their app were frustrated and some even considered leaving.</p>

{% include lightbox.html
          id="layout-broken"
          thumb="/assets/uploads/Admin-console/layout-broken.webp"
          full="/assets/uploads/Admin-console/layout-broken.webp" 
          alt="Broken layout"
          caption="SkoolBag app broken layout"
        %}


<p>The PM proposed a quick fix to enable reordering, but that wouldn’t solve the real problem: admins needed to rebuild the structure. </p>
{% include blockquote.html
   text="We needed a **scalable solution** that could handle the layout complexity." %}

<p>I designed a full layout tool that lets admins drag and drop tiles, group and nest items, change icons and customise colours. </p>


{% include lightbox.html
          id="layout-fixed"
          thumb="/assets/uploads/Admin-console/layout-fixed.webp"
          full="/assets/uploads/Admin-console/layout-fixed.webp" 
          alt="Fixed layout"
          caption="Editing app layout"
        %}


<h3>Impact </h3>
<ul><li>Over 80% of schools customised their layout within the first month </li>
<li>Post-launch feedback turned positive</li>
<li>Several schools that were considering churn decided to stay </li></ul>

  </section><!--  END of Story 6-->



<div class="full-width"> <!-- Beginning of Impact-->
<div class ="inner-full-width">
  <section class="section"> <!-- start of section IMPACT -->
<h2 id="impact"><span class="step-label" aria-hidden="true" >IMPACT</span>Migration Impact</h2>


<!-- <p><strong>Seller impact</strong></p> -->
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>Migrated 1,000+ schools to a new console without loss of functionality.</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Increased adoption of key features by 25%.</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Enabled new revenue streams and partnership opportunities.</li>
  </ul>


</section> <!-- END OF IMPACT PHASE -->
</div> <!-- END OF INNER -->
</div> <!-- END OF FULL WIDTH --> 


<section class="section"> <!-- start of section LEARNINGS -->
<h2 id="learnings"><span class="step-label" aria-hidden="true" >KEY LEARNINGS</span>Key learnings</h2>
<p>My time at SkoolBag was formative. It shaped me as a design leader, giving me the opportunity to wear multiple hats and work closely with the team every day. It taught me to be pragmatic and focus on what truly matters right now.</p>

<p>Without formal design mentorship, I learned by doing: solving real problems, making mistakes and iterating on processes and solutions. That experience grounded me in practicality and ownership and I’m deeply grateful for it. </p>
