---
layout: "single_post_new"
title: "Admin console redesign"
description: "How do you “single case study” your favourite 2-year project? I couldn’t. So I made a mini anthology: a collection of real design moments from my time at SkoolBag."
tag: "Case study"
permalink: /portfolio/admin-console
image: Admin-console/hero.webp
posted: 0

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
  <li><span class="material-icons">{{ metric_icon }}</span>Cut design-to-dev turnaround time by 30%.</li></ul>
  </div>
  </div>
  </div>

<section class="section section--first "><!-- Beginning of CONTEXT -->
  <h2 id="my-role"><span class="step-label" aria-hidden="true">MY ROLE</span>My role & influence </h2>
<ul>
<li>Lead Product Designer for the School Admin Console</li>
<li>Owned end-to-end design across discovery, UX and UI</li>
<li>Acted as Product Owner when needed, prioritising backlog and defining requirements </li>
<li>Partnered with PMs and tech leads to define priorities and scope</li>
<li>Created user flows, prototypes and component specs for multiple squads</li>
<li>Facilitated design reviews and supported dev during implementation</li>
<li>Improved handoff efficiency and design consistency across teams</li>
<li>Advocated for lean, iterative delivery and design maturity practices</li>
</ul>
</section>



<section class="section">
<div class="subsection">
<h2 id="context"><span class="step-label" aria-hidden="true">CONTEXT</span>SkoolBag book of stories</h2>

<p>SkoolBag was a scrappy B2B2C startup connecting schools and parents.</p>

<p>The business needed to cut costs, expand features and enable new partnerships, which required migrating the old backend and rebuilding the entire school admin console.</p>

<p>I joined as Lead Product Designer to build a new modern school admin console serving over 1,000 schools.</p>


<p>Startup pace, small team and constant migration deadlines forced me to rethink how I worked. </p>

 {% include blockquote.html
   text="These **six stories** capture the moments that defined the product and how design leadership really looks in a startup." %}

<h3> Design process </h3>
<p>The overall approach followed a lean double-diamond pattern:</p>
<ul>
<li>Rapid discovery </li>
<li>Hypothesis framing </li>
<li>Ideation </li>
<li>Validation </li>
<li>Delivery </li>
<li>Iteration. </li>
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

<p>Our analytics showed that posts with images had significantly higher open rates. But most schools struggled to source quality pictures and often requested guidance from our support team.</p>

{% include blockquote.html
   text="The challenge was that the business saw images as **“nice-to-have”**." %}

<p>What helped to convince them:</p>
<ul><li>Showed them data proving higher engagement </li>
<li>Shared all the support tickets that cost us resources </li>
<li>Suggested to test the idea with an easy first iteration: show 5 image options from Unsplash based on the post title. </li>
<li>Reframed it as a market differentiator for the business </li></ul>

<p>That mix of clear data, small build effort, and real business value convinced them to go ahead with it.</p>

 {% include lightbox.html
          id="unsplash1"
          thumb="/assets/uploads/Admin-console/unsplash-1.gif"
          full="/assets/uploads/Admin-console/unsplash-1.gif" 
          alt="Unsplash First iteration"
          caption="Unsplash integration - first iteration"
        %}

<h3>Adoption was great! </h3>
<ul>
<li>Within the first month, over 50% of posts used a suggested image </li>
<li>Post engagement rate for schools using the feature increased </li>
<li>Schools' feedback asking for more image options </li>
<li>Image support request decreased significantly </li> </ul>

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

<p>My goal was to avoid a large, slow rebuild that would consume significant engineering time without guaranteed value. </p>
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

<p>While redesigning this feature, I got an interesting edge case: What happens when an event is shared after it’s been edited but not yet saved.</p>

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
<h3> Iteration 2 </h3>   

<p>We then added a prompt to confirm that event was changed.</p>

<p>This restored users' control. Even though the extra step many found annoying, majority of users were not tech savvy and needed a slow introduction to change.</p>


{% include lightbox.html
          id="share-updated"
          thumb="/assets/uploads/Admin-console/share-updated.webp"
          full="/assets/uploads/Admin-console/share-updated.webp" 
          alt="Share event - updated"
          caption="Updated flow of sharing an event"
        %}
</div>


<div class="subsection">
<h3>Final iteration </h3>
<p>Eventually, I redesigned the flow to remove prompting. We saved any edits in the background automatically.</p>

{% include lightbox.html
          id="share-updated-final"
          thumb="/assets/uploads/Admin-console/share-updated-final.webp"
          full="/assets/uploads/Admin-console/share-updated-final.webp" 
          alt="Share event - updated"
          caption="Final flow of sharing an event"
        %}

<p>User feedback on the new flow was overwhelmingly positive. </p>
</div>


  </section>
   </div> <!-- END OF INNER -->
  </div> <!-- END OF FULL WIDTH --> <!--  END of Story 3 -->


  <section class="section "> <!-- Beginning of Story 4 -->
  <h2 id="story-4">
   <span class="story-meta">
       <span class="step-label" aria-hidden="true">STORY 4 </span>
        <span class="badge">Collaboration & Constraints</span>
    </span> Making tradeoffs </h2> 

<p>One of the toughest workflows for schools was user management. SkoolBag stored only parent data, not students.</p>
<p>Each year, schools updated their parent lists, deleting all users and reuploaded a new CSV. This bulk upload feature existed in the legacy console, and schools relied on it.  </p>
<p>I was now redesigning bulk user upload for the new console. </p>
<div class="subsection">
<h3>Reuse over Reinvent</h3>
<p>This story sums up startup life perfectly:</p>
<ul><li>I presented a design in a feature review</li>
<li>Dev suggested to reause an existing component from our stack</li>
<li>I weighed both options, saw it aligned with our goals and redesigned the flow in 20 minutes.</li></ul>

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
<p>We didn’t receive complaints or support tickets after launch, and admins were able to complete bulk uploads without issues.</p>

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
    </span> Increasing adoption </h2> 

<p>One of the biggest admin pain points was updating user groups each year — for example, moving all “Year 1” parents to “Year 2.”</p>

<p>Some schools solved this by uploading new CSV files, while others just relied on parents to do the right thing and update their groups.</p>

<p>I took the initiative to design an “Assign Groups” feature that let admins bulk-move users directly in the UI without needing spreadsheets. </p>
<p>Admin would filter parents by the group and then click “Assign groups” - remove them from Year 1 and add them to Year 2.</p>
 
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
<p>I even created a <strong>training video</strong>, it increased the adoption a little. </p>



<div class="m-space">
<!-- <h2> Fresh off the code (Nov) </h2> -->
<div class="video-container"><iframe width="780" height="438.75" src="https://www.youtube.com/embed/KvnjBD93gQc?si=KdDMU_YrLfxjI4ol" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share" referrerpolicy="strict-origin-when-cross-origin" allowfullscreen></iframe> </div>
</div>


<p>I could have increased adoption by surfacing the feature in context 
for example, suggesting it in the bulk upload flow
highlighting time saved,
adding onboarding nudges to guide users toward it.</p>

<p>The experience taught me that solving a user problem isn’t enough — you also need to meet users where they are, shape habits, and clearly communicate value if you want a new solution to replace an old one.</p>

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
 The one with Redesigning Control
  </h2> 

After a major backend migration at SkoolBag, the app layout broke from a user perspective. Tiles all looked the same, subcategories collapsed into “Everyone” groups, and nothing could be reordered. Schools that had spent years carefully structuring their app were frustrated and some even considered leaving.

{% include lightbox.html
          id="layout-broken"
          thumb="/assets/uploads/Admin-console/layout-broken.webp"
          full="/assets/uploads/Admin-console/layout-broken.webp" 
          alt="Broken layout"
          caption="SkoolBag app broken layout"
        %}


T: The PM proposed a quick fix — adding icons and basic drag-and-drop to the list. But that wouldn’t solve the real problem: admins needed to rebuild structure, not just reorder items. 
The app included a mix of forms, links, and nested groups, so we needed a scalable solution that could handle that complexity.
A: I pushed for a deeper approach. I designed a full layout tool that let admins drag and drop tiles, group and nest items, change icons, and customise colours. 
This gave them back ownership and control while future-proofing the system for new content types.

{% include lightbox.html
          id="layout-fixed"
          thumb="/assets/uploads/Admin-console/layout-fixed.webp"
          full="/assets/uploads/Admin-console/layout-fixed.webp" 
          alt="Fixed layout"
          caption="Editing app layout"
        %}


The impact was clear: 
over 80% of schools customised their layout within the first month, and
 the drag-and-drop view became one of the most-used features in the admin console.
Post-launch feedback flipped from mostly negative to positive, and 
several schools that were considering churn decided to stay. 
Most importantly, schools said they felt they now had more control than before the migration.

  </section><!--  END of Story 6-->



<div class="full-width"> <!-- Beginning of Impact-->
<div class ="inner-full-width">
  <section class="section"> <!-- start of section IMPACT -->
<h2 id="impact"><span class="step-label" aria-hidden="true" >IMPACT</span>Migration Impact</h2>


<!-- <p><strong>Seller impact</strong></p> -->
<ul class="metrics">
<li><span class="material-icons">{{ metric_icon }}</span>Migrated 1,000+ schools to a new console without loss of functionality.</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Increased adoption of key features by 25%.</li>
  <li><span class="material-icons">{{ metric_icon }}</span>Cut design-to-dev turnaround time by 30%.</li></ul>


</section> <!-- END OF IMPACT PHASE -->
</div> <!-- END OF INNER -->
</div> <!-- END OF FULL WIDTH --> 


<section class="section"> <!-- start of section LEARNINGS -->
<h2 id="learnings"><span class="step-label" aria-hidden="true" >KEY LEARNINGS</span>Key learnings</h2>
<ul>
<li>This environment was where I do my best work.</li>
<li>
</ul>
