# A Garden for Ghala --- Project Context

*Last updated: November 25, 2026 — Beach shell discoveries and calm coastal ambience added; current implementation snapshot refreshed*

This document is the canonical handover for the **A Garden for Ghala**
project. Keep it in the root of the project repository and update it
whenever an important decision, milestone, or technical change is made.
When continuing work in a new ChatGPT conversation, provide this file
together with `PROGRESS.md` and any relevant code or assets.

------------------------------------------------------------------------

## Current implementation snapshot — November 25, 2026

This section is the authoritative summary of the current working state. Where older planning notes below conflict with it, follow this newer snapshot unless the creator gives a newer instruction.

### Progress and schedule

- Approximate overall completion: **42%** (milestone-based estimate).
- Target completion: **December 13, 2026**.
- Backup/refinement deadline: **December 20, 2026**.
- Birthday: **December 28, 2026**.
- Prioritize a complete, tested journey over optional effects or expanding scope late in the schedule.

### Current local website state

The following features have been implemented and tested locally in Chrome:

- Welcome screen and Forgotten Forest hub with Path of Light to the Lily Clearing and Path of Whispers to the Beach.
- Lily Clearing with one special test lily, discovery counter, message reveal, Discovery Journal, and saved discovery persistence. The final five special lilies and puzzle gate are not complete.
- Leo's Hidden Clearing with the autumn tree-and-bench background, cinematic introduction, static bench cutout, three hanging photographs, and enlarged photo viewer. The viewer can close through its button, backdrop, or Escape.
- Leo's interaction system: short tap/click plays a varied meow; press-and-hold plays a purr until release; quiet breathing ambience plays while he rests and pauses during interaction.
- Beach scene using the selected La Push Beach photograph, two interactive shell discoveries with individual messages, and saved discovery state.
- Beach ambience: looping ocean waves fade in over approximately 3 seconds and fade out over approximately 1 second; randomized seagull calls occur approximately every 5–10 seconds while the Beach is active. Audio stops when returning to the Forest.

### Confirmed current decisions

- The Beach should feel calm and natural. Use ocean waves and occasional seagulls; **do not add wind ambience**.
- Preserve the selected La Push Beach photograph's natural appearance; do not force a dramatic artificial sunset treatment.
- Current Leo hanging-photo assignments are `leo-photo-2.png`, `leo-photo-4.png`, and `leo-photo-6.png`. Reserve `leo-photo-actual.png` for the bench cutout. Do not revert to the earlier photo-5 proposal.
- Keep Leo as a static, recognizable photograph/cutout. Use the genuine interaction audio and restrained visual feedback rather than inventing full character animation.
- Personal messages must be written or approved by the creator. Do not invent shared memories or presume the recipient's feelings.
- Keep personal photographs and private message content out of the public repository unless publication is explicitly approved.

### Remaining core work

1. Expand the Lily Clearing from one test lily to five unique special lilies with their own creator-approved messages.
2. Complete the Discovery Journal behaviour for all five discoveries.
3. Build the distributed clue system across the Forest, Lily Clearing, and Beach.
4. Implement the hidden bush, sealed stone doorway, puzzle logic, unlock conditions, and passage to Leo's clearing.
5. Complete remaining Forest and Beach environment details.
6. Perform responsive, accessibility, audio, asset-licensing, and end-to-end testing.

### Working environment and collaboration

- The creator works on Windows using Notepad and Chrome, opening `index.html` directly through a `file://` URL; do not assume a local server is being used.
- Keep coding help incremental: explain one manageable change at a time, prioritize functionality, then atmosphere, then polish.
- The creator maintains local HTML, CSS, JavaScript, and asset changes and may ask for documentation-only GitHub updates. When asked to update documentation only, leave coding files and assets untouched.
- This summary describes the latest local working state; do not imply that every local code file or private asset is already synchronized to GitHub.

---

## 1. Project overview

**A Garden for Ghala** is a personal, interactive digital birthday gift:
a small, explorable illustrated world presented as a website. The
recipient should feel as though she is visiting a quiet, beautiful place
made from details that reflect her tastes, memories, and interests.

-   **Recipient:** Ghala
-   **Birthday:** December 28, 2026
-   **Target completion:** December 13, 2026
-   **Backup/refinement deadline:** December 20, 2026
-   **Development start target:** November 11, 2026
-   **Creator's current time constraint:** The creator currently has
    more free time but may become employed and have less time available.
    Build early, prioritize a complete working version, and avoid making
    the project dependent on a last-minute push.
-   **Core principle:** Build something personal, polished, and
    achievable. Functionality first, atmosphere second, polish third.

The project should be finished early enough that it can be given before
the birthday if circumstances make that preferable. Its completion
should not depend on the state of the friendship on the birthday itself.

## 2. Confirmed creative direction

  -----------------------------------------------------------------------
  Category                            Current decision
  ----------------------------------- -----------------------------------
  Overall style                       Photorealistic, cinematic environments
                                      with a cohesive Twilight-inspired
                                      atmosphere; 2.5D depth from layers

  Navigation                          First-person-feeling,
                                      point-and-click hotspots

  Environment                         Connected, explorable world with
                                      three main areas

  Main flower                         Pink lilies

  Lily appearance                     Realistic botanical imagery;
                                      include closed buds, partially
                                      open buds, and fully bloomed flowers

  Main interaction                    Click a partially open lily; it
                                      slowly blooms and reveals a
                                      personal message

  Personal tone                       Warm, sincere, meaningful, and
                                      personal

  Main palette                        Pink and warm colours, balanced
                                      with deep navy

  Known favourite colour              Pink

  Other known colour preference       Pantone Neon Navy

  Favourite time of day currently     Sunrise (she previously preferred
                                      sunsets)

  Sound                               Gentle piano with soft rain/nature
                                      ambience

  Weather sound preference            Likes rain; dislikes
                                      lightning/thunder

  Exploration                         Hidden details, interactive
                                      objects, and puzzles

  Puzzle rules                        Thoughtful and rewarding; no timer
                                      and no penalties

  Hosting                             GitHub Pages is the current
                                      preferred option

  Technology                          HTML, CSS, JavaScript, SVG and
                                      sourced/generated assets; prefer
                                      vanilla JS
  -----------------------------------------------------------------------

The original art direction was dreamy twilight. New information
indicates that Ghala currently loves sunrises. The visual concept should
therefore evolve into a **dreamy pre-sunrise-to-sunrise world**: deep
navy and dusky tones at the beginning, gradually transitioning to pink,
peach, and warm golden light. This preserves the dreamy atmosphere while
reflecting her current preference.

## 3. The connected world: three areas in a loop

The world should feel like a small connected open world, not a sequence
of unrelated pages. The three main areas are:

1.  **Forest** --- inspired by her love of forests, the *Twilight*
    films/books, and her wish to visit/live in the Pacific
    Northwest/Oregon area associated with the story.
2.  **Lily garden clearing** --- the emotional heart of the experience,
    filled primarily with pink lilies.
3.  **Beach/coast** --- inspired by her love of beaches and her dream of
    living near one.

### Suggested world layout

A first-pass layout could be:

``` text
                 FOREST PATH
                /           \
        FOREST LOOKOUT     HIDDEN PATH
              |                |
         LILY CLEARING ------ COASTAL PATH
              |                |
          GARDEN EDGE ------- BEACH
```

This is a conceptual loop, not a fixed map. The final navigation graph
should make it possible to move back and forth between the forest, lily
clearing, and beach without restarting the experience. Use hotspots at
visible paths, gates, bridges, or other natural transitions.

### Intended first-visit progression and area priority

The current preferred progression is:

1. **Lily garden clearing:** complete the abundant garden, find all five
   special lilies, and read their personal messages.
2. **Garden puzzle:** finding all five special lilies unlocks the
   thoughtful garden puzzle.
3. **Leo's hidden clearing:** solving the puzzle opens the secret path
   to Leo's secluded tree-and-bench scene.
4. **Beach/coast:** explore the sunset shoreline, shells, birds, and
   other small discoveries.
5. **Forest:** an optional, lower-priority area to build last if time
   allows. It remains desirable as another place to explore, but must
   not delay the garden, puzzle, Leo, beach, or a tested release.

This is the preferred progression for a first visit, not a requirement
to make the world permanently linear. Once areas are unlocked, provide
clear, natural ways to revisit them. Prioritize a complete, polished
core experience over including every planned environment.

### Environment and composition

-   Forest: tall trees, soft mist, mossy paths, filtered light, and a
    Pacific Northwest/Oregon-inspired feeling. Do not directly reproduce
    copyrighted *Twilight* film imagery or characters; use the general
    natural atmosphere as inspiration.
-   Lily clearing: the main visual centre, with pink lilies as the
    dominant flowers.
-   Beach: peaceful coastal scenery, open horizon, soft sunrise light,
    and a route back into the forest.
-   The overall world should feel connected through consistent colour
    grading, lighting, illustration style, and recurring details.
-   Whether she prefers dense/enclosed or open spaces is not yet known.
    Keep the scene composition flexible until this is clarified.

## 4. Flower design and message interaction

Pink lilies are definitely Ghala's favourite flowers. The creator wants
the garden to contain lilies as its primary flowers. White flowers,
especially white roses, may be used as supporting accents, but the main
flower identity must remain pink lilies.

An important unresolved question: **Are there any flowers she
dislikes?** The creator plans to ask Ghala.

### Bloom interaction

This is a central feature and should be treated as a high-priority
mechanic.

Each interactive lily may have these visual states:

1.  **Bud:** closed or nearly closed.
2.  **Partially open:** petals have begun to unfold; this is the
    inviting interactive state.
3.  **Opening:** when clicked, the petals slowly animate open.
4.  **Bloomed:** the flower reaches its fully open state.
5.  **Message revealed:** a personal message appears gently near the
    flower or in a small, elegant overlay.

The reveal should feel calm and rewarding, not like a generic alert box.
Keep text readable on mobile. The flower should not need to be clicked
repeatedly. Consider allowing the user to revisit a message after
discovering it.

Use CSS animations for the bloom where practical. If the chosen
illustration is a layered SVG with separable petals, animate the petals
individually. If the source is a flat image, use a more modest
scale/glow/reveal animation rather than pretending the petals are
independently moving.

### Message content

-   Messages should be personal, specific, and sincere.
-   Include a mixture of memories, things the creator appreciates about
    her, small affectionate observations, and gentle wishes.
-   Avoid making every message a dramatic declaration.
-   The creator will write or approve the final wording. Do not invent
    personal memories or present generated text as an actual shared
    memory.

Garden scope: an abundant, lush clearing with many lilies and greenery between them. Every lily is clickable and blooms, but only five carefully positioned special lilies reveal personal messages. The special lilies are scattered across different parts of the clearing, not clustered together, and have no obvious glow or visual marker. A subtle 0/5 progress indicator communicates that five discoveries exist without revealing their locations. Finding all five special lilies unlocks the garden puzzle. Use an optional, user-requested hint if she gets stuck; never interrupt exploration with automatic hints.

## 5. Personal details and discoveries

### Leo, the orange cat

Ghala previously had a small orange cat named **Leo**, whom she adored
and misses. The creator has refined Leo's appearance into a **surprise
reward for solving the garden puzzle**, rather than an incidental cat
that she might stumble across during ordinary exploration.

Current planned sequence:

1. Ghala solves the garden's thoughtful, clue-based puzzle.
2. Solving it opens a previously inaccessible, secluded path or hidden
   area.
3. She follows the path into a quiet clearing with a small wooden bench
   beneath a tree.
4. Leo is resting peacefully on the bench, curled up and asleep. The
   discovery should be unexpected; do not foreshadow his presence too
   obviously before the puzzle is solved.

Keep the reveal gentle, warm, and comforting. Avoid a dramatic entrance,
flashing reward effects, or a sad memorial tone. The clearing may have
slightly warmer sunrise light than the surrounding forest, making it
feel like a peaceful little sanctuary. A subtle idle animation (such as
slight tail movement) could be considered if practical.

### Petting interaction

Leo should be interactable once Ghala reaches the clearing:

- On desktop, hovering over Leo changes the cursor to a hand/pointer to
  show that he can be petted.
- Clicking him triggers a gentle petting response and a soft, realistic
  purring sound, as though she can still reach out and interact with him.
- On phones and tablets, tapping Leo triggers the same response; do not
  rely on hover for touch devices.
- Keep the response calm and affectionate. Leo can remain comfortably
  resting while subtly responding to the petting; avoid a startling
  animation or loud sound.
- The purr should be played only after the visitor interacts, respecting
  browser audio restrictions. Provide a graceful silent fallback if
  audio is unavailable or muted.
- The interaction should be repeatable so she can pet him more than
  once. A small natural response (such as a slight movement or a more
  contented settling motion) may accompany the purr if practical.

This petting-and-purring interaction is now a confirmed part of Leo's
clearing, not an undecided idea.

### Hidden details

Ghala likes: - Butterflies. - Fireflies. - Falling flower petals. -
Discovering little hidden things. - Interactive objects. - Small puzzles
and secrets.

Use these as optional discoveries around the world. They should reward
curiosity without making exploration stressful.

### Puzzle design

The creator likes the idea of a hidden lily puzzle that opens a secret
route or reveals a hidden area. The current preferred reward is a
surprise encounter with Leo, resting on a bench in a secluded clearing
that becomes accessible only after the puzzle is solved.

Puzzle requirements: - It should require some thought and feel rewarding
to solve. - It should not be so easy that the solution is immediately
obvious. - No time limits. - No penalties, lives, or punishments for
wrong attempts. - Provide fair clues in the environment. - Avoid making
the puzzle obscure or frustrating; optional hints can be considered. -
The puzzle should fit the garden's atmosphere and story rather than feel
like an unrelated minigame.

A possible concept is several lilies or garden objects carrying symbols,
with environmental clues revealing the correct order. The solved puzzle
could reveal a hidden path, a secluded viewpoint, or a special message.

## 6. Music and sound

Known preferences: - Ghala loves Mitski (her favourite artist), Mac
DeMarco, and The Marías. - She enjoys piano music. - The creator has
played piano music for her before, and she loved it. - One piece she
loves is **Clair de Lune**; hearing it brought her to tears. - She likes
rain sounds. - She dislikes lightning/thunder sounds. - A mix of music
and environmental ambience is preferred.

### Sound direction

-   Gentle piano should be the main ambient musical layer.
-   Soft rain and quiet natural ambience may accompany it.
-   Do not include thunder or lightning sound effects.
-   Include a visible sound toggle and volume control.
-   Browsers may block autoplay; start audio only after a user
    interaction, such as clicking "Enter the garden".
-   Provide a graceful muted experience if audio is unavailable.

### Piano performance idea --- optional only

Ghala once asked the creator to learn **"Mr. Love" by Sophia, from
Tiffany's Teapots**. The creator has not learned it and is currently
rusty on piano. Learning/recording it is an optional possibility only,
not a project requirement. The creator may try learning/recording the
right hand, but cannot promise this and may not have time, especially if
employment begins.

Do not make the delivery deadline or soundtrack dependent on the creator
learning this piece.

For *Clair de Lune*, a particular recording may have its own
copyright/licensing restrictions even though the underlying composition
is public domain in many jurisdictions. Use a properly licensed
recording, a suitable public-domain recording, or another
licensed/original piano track. Do not assume any online recording is
free to reuse.

## 7. Artwork and asset strategy

The creator does not plan to draw or illustrate assets manually. Artwork
will be: - sourced from suitable asset libraries, - generated
specifically when useful, - or created through code (CSS/SVG) where
practical.

The current art direction is **photorealistic, cinematic scenery and
realistic botanical assets**, not cartoony or pixel-art illustration.
The forest should evoke the *Twilight* films' Pacific Northwest
atmosphere: deep blue-green evergreens, layered mist, moss, wet foliage,
cool diffused light, and a gradual transition toward pink/peach sunrise.
The lily clearing should feel warmer and more inviting while remaining
photorealistic, with natural pink lilies and soft sunrise light.

The creator does not plan to draw assets manually. Source existing
photographs and suitable transparent botanical assets online, checking
licenses. Aim for a cohesive photographic look; avoid mixing unrelated
visual styles.

### Asset approach

  -----------------------------------------------------------------------
  Asset                               Preferred approach
  ----------------------------------- -----------------------------------
  Main forest, clearing, beach        Sourced photographic backgrounds;
  backgrounds                         use layered photos/cutouts for 2.5D

  Lily imagery                        Realistic botanical photographs or
                                      transparent PNGs with matching light

  Separate lily petals                Layered botanical assets if available;
                                      otherwise use image-state swaps or
                                      restrained scale/glow transitions

  Butterflies, cat, decorative        Matching illustrations or SVG/PNG
  objects                             assets

  Fireflies, stars, glow, falling     CSS/JavaScript where practical
  petals                              

  Sunrise lighting and gradients      CSS overlays and gradients

  Scene transitions                   CSS and JavaScript

  Piano and rain                      Properly licensed audio assets
  -----------------------------------------------------------------------

Potential asset sources: - Kenney: https://kenney.nl/assets -
OpenGameArt: https://opengameart.org/ - SVG Repo:
https://www.svgrepo.com/ - Pixabay: https://pixabay.com/

Check the specific license and attribution requirements for each
downloaded asset before including it in the public website. Record each
asset's source, creator, license, attribution requirement, and intended
use in an asset register (for example, `ASSET_CREDITS.md`).

If any generated or edited assets are considered later, they must match
the same photographic realism, palette, lighting, and perspective. The
current preference is to source existing internet photographs and
assets rather than draw artwork.

## 8. Navigation and technical design

### Navigation

Use a first-person-feeling exploratory scene system. The visitor sees a full-screen photographic viewpoint and can use subtle path hotspots to move between locations. Within wide scenes, allow gentle cursor-controlled horizontal panoramic movement (and touch-drag on mobile) so the image shifts as she looks around. This can begin with a single oversized photographic background; layered parallax is optional rather than mandatory.

-   No continuous 3D movement is required.
-   Each scene is an illustrated background with positioned hotspots.
-   Transitions should fade or gently dissolve between scenes.
-   Hotspots should be visually subtle but discoverable.
-   Provide clear accessible labels and sufficiently large tap targets
    on mobile.
-   The map should form a connected loop so the user can revisit
    locations.
-   Avoid trapping the user in a scene or forcing a strict linear
    sequence.

### Suggested architecture

Use vanilla HTML, CSS, and JavaScript. No framework is required
initially.

``` text
a-garden-for-ghala/
│
├── index.html
├── PROJECT_CONTEXT.md
├── PROGRESS.md
├── ASSET_CREDITS.md
│
├── css/
│   ├── style.css
│   ├── scenes.css
│   ├── hotspots.css
│   ├── flowers.css
│   ├── animations.css
│   └── responsive.css
│
├── js/
│   ├── main.js
│   ├── scenes.js
│   ├── navigation.js
│   ├── interactions.js
│   ├── flowers.js
│   ├── messages.js
│   ├── puzzles.js
│   └── audio.js
│
└── assets/
    ├── backgrounds/
    ├── flowers/
    ├── characters/
    ├── objects/
    ├── effects/
    ├── audio/
    └── fonts/
```

This structure is a starting point and can be simplified if the
prototype does not need every file.

### Scene data

Represent locations as data rather than hard-coding all navigation into
one large function. Each scene should have: - a unique scene ID, -
background asset, - optional ambience, - navigation hotspots with
destination scene IDs, - interactive objects such as lilies or the
cat, - optional visual effects.

A central navigation function loads the selected scene and handles
transitions. A separate interaction system handles lilies, discoveries,
and puzzles.

### Mobile-first requirements

-   Design for phones first, then adapt to larger screens.
-   Make hotspot tap areas large enough for touch.
-   Keep messages readable without requiring precision scrolling.
-   Provide audio controls.
-   Respect reduced-motion preferences.
-   Optimize image/audio sizes and avoid unnecessarily large assets.
-   Test in more than one mobile browser where possible.

## 9. Development timeline

The target is a finished, tested website by **December 13, 2026**, with
December 20 as a backup deadline. Start development on November 11 if
possible.

### Revised four-week plan --- November 11--December 8, 2026

The core experience takes priority over completing every environment.
Build in this order: lily clearing and messages, garden puzzle, Leo's
clearing, beach, then the optional forest.

**Week 1 --- November 11--17: Lily clearing prototype**
- Find a realistic woodland/meadow clearing photograph.
- Find realistic pink lily assets that fit the background.
- Organize downloaded assets and record their licenses/sources.
- Add the clearing background and first lily to the existing website.
- Establish the first visual composition and test it in the browser.

**Deliverable:** a first photorealistic lily-clearing prototype with at
least one flower positioned in the scene.

**Week 2 --- November 18--24: Finish lilies and build the puzzle**
- Complete the abundant lily garden and its bloom interactions.
- Add exactly five special lilies, personal message reveals, and the
  subtle discovery counter.
- Unlock the garden puzzle only after all five messages are found.
- Design and implement the garden-themed puzzle, including an optional
  hint she can request.

**Deliverable:** a complete lily-clearing experience with five messages
and a working puzzle.

**Week 3 --- November 25--December 1: Leo's clearing and the beach**
- Build the secret path and Leo's secluded tree-and-bench clearing as
  the reward for solving the puzzle.
- Add Leo's repeatable petting interaction, hand cursor on desktop,
  touch interaction on mobile, and gentle purring sound.
- Use the real photographs the creator may supply for the three
  hanging frames; use an orange cat for Leo.
- Build the beach as another explorable area, preserving its sunset,
  coastal scenery, clickable shells, and birds.
- Add navigation to revisit completed areas.

**Deliverable:** the core progression from lilies to puzzle to Leo,
plus a usable beach area.

**Week 4 --- December 2--8: Optional forest, atmosphere, testing, release**
- If the core experience is stable and time allows, source and build
  the photorealistic Twilight-inspired forest as an optional final area.
- Add selected environmental details, audio, and the final sequence.
- Test mobile/desktop, optimize assets, verify licensing, and deploy.
- If time is tight, omit or simplify the forest rather than delaying
  the garden, puzzle, Leo, beach, testing, or release.

**Deliverable:** a complete, tested first release of the core experience.
The forest is a stretch goal, not a release blocker.

### December 14--20: Backup and refinement

Reserve this period for unexpected bugs, small visual refinements, and
deployment issues. If the project is already complete, do not add
unnecessary features.

## 10. Scope and priorities

Keep the initial version achievable.

  Component                                    Initial target
  --------------------- -------------------------------------
  Main environments          3 (forest, lily clearing, beach)
  Lily garden                  Abundant flowers with greenery between them
  Interactive lilies            Many clickable lilies; five special discoveries
  Personal messages                        Exactly five special-lily messages
  Hidden puzzles                          1 thoughtful puzzle
  Hidden discoveries              1--2 or more if time allows
  Cat                               1 surprise appearance of Leo after puzzle completion
  Main soundtrack                                Gentle piano
  Environmental sound               Soft rain/nature ambience
  Final sequence          1 garden/world-wide birthday reveal

### Priority order

1. A working website and reliable navigation.
2. Complete lily clearing: abundant flowers, five special lilies, and
   all five personal messages.
3. The garden puzzle and its optional hint.
4. Leo's hidden clearing, including repeatable petting and purring.
5. The beach and its small interactive discoveries.
6. A photorealistic forest as an optional stretch goal.
7. Sound, extra environmental details, and visual polish.

The forest is the lowest-priority environment and should be built last,
only if the core experience is already stable. If time becomes limited,
omit or simplify the forest rather than sacrificing the lily messages,
puzzle, Leo, beach, testing, or a complete release.

## 11. How to continue across ChatGPT conversations

This file is the canonical design and project brief, but it does not
automatically sync with every new chat.

Recommended workflow: 1. Keep this file in the root of the GitHub
repository. 2. Maintain `PROGRESS.md` with completed work, current
status, bugs, and the next concrete task. 3. Keep code and assets in the
repository. 4. At the end of a substantial work session, update the
context/progress documents. 5. In a new ChatGPT conversation, provide
the latest `PROJECT_CONTEXT.md`, `PROGRESS.md`, and any relevant code or
screenshots. 6. Ask the assistant to read these documents before
proposing changes.

Do not rely on conversational memory as the only project record. The
repository and these documents are the source of truth.

## 12. Open questions to ask Ghala

These are preferences that remain unknown. Ask naturally over time; do
not send a long questionnaire all at once.

-   Are there any flowers she dislikes?
-   Does she prefer bright, colourful environments or muted, soft ones?
-   Does she prefer moonlight, sunlight, or little glowing lights?
-   Does she prefer dense forests or open woodland?
-   Does she like ponds, fountains, or streams?
-   Does she prefer a cozy enclosed garden or a wide open space?

Known preferences that should not be asked again: - Pink is her
favourite colour. - Pantone Neon Navy is another colour she has liked. -
She currently loves sunrises. - Lilies are her favourite flowers. - She
loves beaches and forests. - She loves the *Twilight* series and dreams
of visiting the Oregon/Pacific Northwest setting. - She likes piano,
*Clair de Lune*, and rain sounds. - She dislikes thunder/lightning
sounds. - She likes butterflies, fireflies, falling petals, hidden
details, and puzzles. - She loves cats and misses her former orange cat
Leo. - She appreciates sweet, sentimental words.

## 13. Working principles for future development

-   Keep the creator actively involved in building and understanding the
    code. Do not replace the learning/building process with a giant
    unexplained code dump.
-   Explain what each major file and function does.
-   Build in small, testable milestones.
-   Prefer simple, reliable implementations over unnecessary complexity.
-   Do not add features that threaten the completion date without a
    clear reason.
-   Do not invent personal memories or assume Ghala's preferences where
    they are unknown.
-   Respect the licenses of external assets and audio.
-   Keep the website safe and comfortable to explore: no timers,
    penalties, forced progression, or intrusive data collection.
-   Do not include analytics or collect personal information.
-   Keep the experience warm and personal without making it emotionally
    pressuring.

------------------------------------------------------------------------

**Current next step (November 13, 2026):** Begin the lily clearing asset search and prototype. Use the Lovable demo screenshots as composition/interaction references, not as final artwork. Find real, licensable photographic backgrounds and matching realistic pink lily assets; integrate the background and first flower. The forest asset search remains open; aim for a more distinctly Twilight-inspired Pacific Northwest forest. Do not use generic AI-looking imagery as final artwork.


---

## 14. Updated decision — Leo as the puzzle reward (November 10, 2026)

This decision supersedes the earlier idea of Leo being a small,
incidental environmental detail somewhere in the ordinary world.

- **Unlock condition:** The garden puzzle must be solved before the
  hidden clearing can be reached.
- **Reveal:** The puzzle opens a secret path leading to a secluded,
  peaceful clearing.
- **Setting:** A small wooden bench beneath a tree, with gentle,
  slightly warmer sunrise lighting.
- **Leo:** A small orange cat, curled up and peacefully asleep on the
  bench. His appearance should be an unexpected, emotionally warm
  discovery.
- **Tone:** Quiet and comforting. No dramatic reveal, reward fanfare,
  sad memorial framing, or obvious hints that reveal the surprise early.
- **Optional animation:** A subtle tail movement while resting.
- **Interaction not yet decided:** Whether clicking Leo makes him slowly
  open his eyes/lift his head or whether he remains asleep is still open.

The puzzle therefore has a more personal reward than simply opening an
extra route: it leads to this quiet encounter with Leo. Keep the
implementation achievable and do not let optional cat animation
jeopardize the core experience.


---

## 15. Updated visual and interaction decisions from the Lovable prototype (November 13, 2026)

The creator reviewed a Lovable-generated demo and supplied screenshots of the welcome screen, forest, beach, lily clearing, and hidden clearing. Treat these screenshots as references for composition, typography, atmosphere, and interaction patterns—not as approved final artwork or proof of asset licensing.

### Welcome screen
- Preserve the demo's elegant serif typography, centered title, small uppercase eyebrow text, italic subtitle, restrained entrance button, and full-screen photographic composition.
- Keep the wording "A Garden for Ghala" and "A little world made just for you." The small phrase "A birthday in a small world" was also liked as part of the opening treatment.

### Panoramic scene navigation
- The creator particularly liked dragging left/right to look around the forest.
- Use a wide photographic scene that shifts gently horizontally in response to cursor movement; support touch-drag on mobile.
- This can be implemented with one oversized image first. Layered 2.5D parallax is optional and can be added only where it improves depth.
- Preserve visible, subtle path hotspots and connected navigation. Do not shrink the scene during movement or transitions.

### Forest
- Preserve the demo's composition idea: a large tree as a central visual anchor and two visible routes, one toward warm light/the garden and another toward the sea.
- Replace the current forest image with more convincing photorealistic Pacific Northwest / Twilight-inspired scenery: tall dense evergreens, moss, ferns, cool blue-green/grey tones, mist, overcast diffused light, and a mysterious romantic atmosphere.
- Fireflies may remain as restrained environmental details.
- Do not use copyrighted Twilight film stills, official artwork, or actor likenesses.

### Beach
- The creator strongly likes the demo's beach photograph and sunset composition. Preserve this visual direction: coastal sea stacks, warm pink/orange sunset, reflective wet sand, and driftwood in the foreground.
- Keep small environmental interactions such as clickable shells that reveal short quotes/messages, and birds flying overhead.
- Source a real, properly licensed photograph for the final website rather than assuming the demo image is reusable.

### Lily clearing
- Preserve the warm sunrise, distant mountain silhouettes, mist, and woodland-meadow composition as a visual reference.
- Expand the garden substantially: an abundant spread of pink lilies with visible greenery between flowers, rather than only five foreground flowers.
- Many lilies should be present in varied positions, heights, angles, and growth stages. Avoid a repetitive grid or identical placement.
- Every lily is clickable and blooms. Most are ordinary blooms with no message.
- Exactly five special lilies are deliberately scattered across different parts of the clearing. They must not be clustered in one area.
- Special lilies should not have obvious glow, outlines, or other markers that reveal their positions. Discovery should reward exploration.
- A subtle progress indicator should communicate five discoveries, e.g. "Little discoveries 0/5", without revealing locations or over-explaining the mechanic.
- Each special lily reveals one creator-written/approved personal message after blooming.
- Once all five special lilies have been found, unlock the garden puzzle. The puzzle then opens the hidden route to Leo's clearing.
- Include an optional hint that the visitor can request if stuck; do not show unsolicited hints or interrupt exploration.
- Keep flower photography and background photography cohesive in lighting, perspective, colour temperature, sharpness, and scale.

### Hidden clearing and Leo
- Preserve the demo's composition: an enormous old tree, warm light entering from the left, a wooden bench beneath the tree, and three small picture frames hanging on the trunk.
- The cat shown in the demo is the wrong colour. Leo was orange; use an orange cat.
- The creator may provide the actual photographs of Leo that Ghala previously shared. Use those real photographs in the three frames rather than fabricated photos. Do not invent or generate fake photos of the specific cat.
- Prefer a real photographic cat asset or a carefully matched realistic cutout for the sleeping cat in the scene.
- Keep the reveal quiet, warm, and comforting, not memorial-like.

### Final artwork rule
- Lovable is a prototype/reference for layout, scene composition, and interaction. It is not the source of final art assets.
- The creator prefers existing real photography/assets and does not want generic AI-generated-looking imagery in the final website.
- Verify the specific licence and attribution requirements of every final asset before publication; record them in ASSET_CREDITS.md.


---

## 16. Asset search update — November 13, 2026

The creator has started comparing sources for realistic pink lily assets. Transparent botanical cutouts can be expensive (one option encountered was approximately AED 27.50), while several free libraries searched so far have had limited suitable choices. Some promising-looking results have appeared on Pixabay and PNGTree, but no paid asset has been approved or purchased.

Current asset-selection guidance:
- Do not buy a flower asset until it has been tested against the chosen clearing background for realism, lighting, colour, scale, and composition.
- A lily image that includes natural leaves or a small amount of greenery is not automatically unsuitable. Foliage can help the flower sit naturally in the meadow; only remove excess background/greenery if it makes placement awkward or visually cluttered.
- If a candidate has a separable subject, background removal and edge cleanup may be tested in Photopea. Results depend on contrast, overlapping leaves, and edge complexity.
- Aim for a small reusable set of complementary assets (for example, a flowering lily with leaves, a cleaner individual bloom, and buds) rather than buying many one-off flowers.
- Before any purchase or use, verify the exact licence permits embedding the asset in a publicly accessible website and record the source, creator, licence, attribution, and intended use in `ASSET_CREDITS.md`.

A promising clearing-background photograph has been identified and downloaded at its highest available resolution (5807 × 7748 pixels). It is a portrait image with warm sunrise light, trees framing the sides, and foreground meadow vegetation. The creator has completed a separate landscape crop, preserving the sunrise and a substantial portion of the meadow. The cropped file has not yet been uploaded to GitHub or integrated into the website. Preserve the original unchanged; verify the source/licence before public use and upload the landscape export when ready.

No flower candidate has yet been finalized, purchased, licensed, or integrated. The next asset decision should be made by testing the candidate lily image against the cropped clearing background before spending money.


## 17. Confirmed interaction update — Leo (November 13, 2026)

Leo is now planned as an interactable part of the hidden clearing. On
desktop, hovering over him changes the cursor to a hand/pointer; clicking
him triggers a gentle petting response and soft purring. On touch
devices, tapping him triggers the same interaction. The response should
be repeatable, calm, and affectionate, with Leo remaining comfortably
resting and perhaps making a small natural movement. Play the purr only
after user interaction, respect browser audio restrictions, and provide
a silent fallback. This is intended to create the feeling that Ghala can
still reach out and pet him.



---

## 18. Music-inspired special lily discoveries — November 15, 2026

The creator wants to incorporate two songs by Mohammed Abdu that Ghala loves: **“Muthhila”** and **“Ma Tmaneitak.”** They listened to “Muthhila” together recently; Ghala especially loves the romantic lyrics and the ending passage. Both the romantic meaning and Mohammed Abdu's vocal delivery matter to her, with the romantic meaning being the main appeal.

### Confirmed Muthhila lily presentation

- One of the five special lilies should be dedicated to **“Muthhila.”**
- When opened, the lily blooms and reveals a selected passage from the song's **original Arabic lyrics** as the primary discovery message.
- Arabic is intentional and should remain the main presentation. Ghala has said the song feels much more romantic and expressive in Arabic, her first language, than in English.
- Present Arabic with correct right-to-left direction and alignment, generous line spacing, and an elegant Arabic typeface. The English translation is optional and should not displace the Arabic.
- The passage should be recognisable and retain its original wording; do not paraphrase it merely for the sake of changing it.
- A separate creator-written personal note may appear after or alongside the lyrics. Keep song lyrics and the creator's own words visually distinct.

### Optional song playback

- Playback is **optional**, not automatic and not required to understand or enjoy the discovery.
- Provide a discreet play/replay control for the corresponding part of the actual recording if a suitable authorised embed or licensed source is available.
- Do not download or self-host an unauthorised copy of the commercial recording. Check the provider's embedding terms and browser playback restrictions; if playback cannot be provided reliably, the Arabic lyric reveal still works on its own.
- Do not make the visitor's first lily click depend on audio autoplay succeeding.

### Ma Tmaneitak

- **“Ma Tmaneitak”** is another song Ghala loves and may inspire a different special lily/message.
- Its exact lyric passage and personal note have not yet been selected. Do not invent or finalise lyrics or personal wording.

### Content and implementation status

These are design decisions only. No music playback, lyric reveal, or special-lily interaction has been implemented or tested yet. Keep the full lyric text out of public project documentation; store only the song references and presentation requirements here. The creator will choose/approve the exact excerpts and write/approve personal notes during implementation.


---

## 19. Current implementation update — November 15, 2026

This section records the current implementation and supersedes any older descriptions above that conflict with the forest-first navigation or current build order.

### Confirmed navigation and scene structure

- The **Welcome** screen leads to the **Forgotten Forest**.
- The Forgotten Forest is the first environment and the initial navigation hub; it is not a separate Garden hub.
- **Path of Light** leads from the Forest to the **Lily Clearing**.
- **Path of Whispers** leads from the Forest to the **Beach**.
- The Lily Clearing leads to a **Puzzle** screen, which is intended to unlock only after all five special lilies have been discovered.
- Solving the puzzle is intended to unlock **Leo's Hidden Clearing**.
- The Beach, Lily Clearing, Puzzle, Leo's Clearing, and Forest should remain revisitable through natural return routes.

### Current local prototype status

- The Welcome, Forest, Lily Clearing, Beach, Puzzle, and Leo's Hidden Clearing screens now exist in the local HTML prototype.
- Basic transitions between these screens have been implemented and tested locally.
- The Forest has a responsive two-panel layout for Path of Light and Path of Whispers; this is a structural placeholder until the final forest photograph and scene-integrated hotspots are added.
- Beach, Puzzle, and Leo's Hidden Clearing are navigable placeholders, not finished environments.
- Temporary testing buttons currently allow direct access to the Puzzle and Leo's Clearing. These bypass the intended unlock conditions and must be replaced by the real five-lily discovery and puzzle-completion gates before release.
- The Lily Clearing background and pink lily cutout are integrated locally. A CSS filter has been adjusted to soften the lily's saturation and warm its colour to better match the sunrise meadow. Fine blending work remains for the visual-polish phase.

### Current build order

The agreed workflow is to finish navigation and overall scene structure for every playable area first, then implement core interactions and progression, then complete visual layout, and finally add final photographs/backgrounds/assets and atmospheric polish. Use placeholders where needed; do not delay navigation work while waiting for final imagery.

### Immediate next development task

Begin the five special-lily discovery system in the Lily Clearing:

1. Represent ordinary lilies and exactly five special lilies.
2. Add click-to-bloom behaviour.
3. Reveal creator-written/approved messages only for the special lilies.
4. Add a subtle discovery counter (0/5).
5. Unlock the Puzzle only when all five special lilies have been discovered.
6. Remove the temporary Puzzle and Leo testing shortcuts once the real progression gates are in place.

Do not mark planned interactions, final artwork, puzzle logic, or Leo interaction as complete until implemented and tested.


---

## 20. Discovery Journal and lily interaction plan — November 15, 2026

The creator approved adding a Discovery Journal to the Lily Clearing. Its purpose is to let Ghala revisit personal discoveries without having to find the corresponding flower again.

### Journal behaviour

- Add a discreet **Discovery Journal** control in the Lily Clearing.
- Record a special-lily entry only after that lily has been discovered.
- Show only unlocked/discovered entries; undiscovered entries and their messages must remain hidden to avoid spoilers.
- Allow previously discovered messages to be reopened from the journal.
- Keep the discovery counter visible and accurate (0/5 through 5/5).
- The journal should support different entry presentation types. In particular, the Muthhila entry must preserve Arabic-first text, correct RTL direction/alignment, suitable Arabic typography, and a clear visual distinction between song lyrics and the creator's personal note.
- Do not assign the five special lilies to final image assets or positions yet. Those choices will be made after the flower imagery and clearing composition have been arranged.

### Interaction architecture and implementation status

- The intended reusable model separates message content from the flower image/markup, using a stable unique ID for each special lily.
- Ordinary lilies bloom but do not reveal a message or increase the discovery count.
- Each special lily can be counted only once, even if clicked repeatedly.
- A discovered message can be reopened through the journal without incrementing the count again.
- The puzzle remains unavailable until all five unique special lilies have been discovered.
- A first pass of click-to-bloom, counter, and message code has been drafted in the local prototype. The latest data-driven message-registry refactor and browser behaviour still require verification; do not describe the complete journal or puzzle gate as implemented until tested.
- Temporary test IDs/content are scaffolding only. Replace them with the five creator-approved entries after the artwork is ready. Do not store full copyrighted lyric text or private personal messages in public project documentation.


---

## 21. Local test milestone — Discovery Journal message display (November 15, 2026)

The initial one-lily test flow has now been debugged and verified locally.

- The Lily Clearing message panel in `index.html` was missing the title heading expected by the JavaScript. Adding `<h2 id="lily-message-title"></h2>` resolved the null-reference error in `showDiscovery()`.
- Clicking the test special lily now displays the discovery title and message.
- The journal entry invokes the same `showDiscovery()` function and can reopen the test message.
- The journal's discovered-only listing and the close/return flow are part of the current local test implementation.
- A global `[hidden] { display: none !important; }` rule was added to ensure elements marked hidden remain hidden even when other CSS display rules apply.

### Scope and remaining work

This is a successful **single test-lily** milestone, not completion of the full discovery system. The test content and `test-lily` ID are temporary. Still to implement and verify:

1. Five unique special lilies and their creator-approved entries.
2. Ordinary lily bloom behaviour without message reveal or counter increase.
3. One-time counting for each special lily, including repeat clicks.
4. Optional bloom/close toggle behaviour, if retained after testing.
5. Progress persistence across page refreshes, if desired.
6. Puzzle unlock only after all five discoveries; remove temporary testing shortcuts.
7. Arabic-first, RTL Muthhila presentation and any authorised optional audio.

The current HTML/CSS/JavaScript edits remain in local working files and were **not uploaded** to GitHub in this documentation-only update.

------------------------------------------------------------------------

## 22. Puzzle world, hidden stone doorway, and Leo's clearing — November 16, 2026

### The puzzle: world-spanning exploration

The creator wants the puzzle to feel like a challenging puzzle-adventure experience, inspired by the environmental exploration and satisfying self-directed discovery in **Big Walk**. The desired interaction style is a mixture of investigation and physical interaction. Do not reproduce Big Walk's actual puzzles or multiplayer mechanics.

- Clues should be distributed across the existing world: the **Forgotten Forest**, **Lily Clearing**, and **Beach**.
- Ghala should be free to discover the clues in any order, leave the puzzle area, revisit locations, and return without losing discoveries.
- The clues should reward observation and experimentation. They should help her infer relationships rather than simply spelling out a button sequence or password.
- The final clue meanings, relationships, exact physical mechanics, and solution are not yet designed. A three-ring rotating mechanism was discussed as one possible idea, but it remains provisional and must not be treated as a final locked design.
- The eventual solution should create a satisfying “wait, I understand it now” moment. Avoid punishing incorrect attempts or giving away the solution through obvious instructions.

### Hidden bush and sealed stone doorway

The entrance is part of the **Lily Clearing**, not a large puzzle object placed among the flowers.

- A clickable bush on the right side of the Lily Clearing reveals a concealed entrance.
- Do not rely on complex animation of moving bushes or vines. Use a second image/state or a transition that reveals the passage behind the bush.
- The reveal leads to a visible **stone doorway** with stone tablets, carved panels, or other inspectable markings.
- The doorway can be discovered and inspected before the puzzle is solved, but it remains sealed.
- Clues gathered across the Forgotten Forest, Lily Clearing, and Beach will eventually let Ghala solve the puzzle.
- Solving the puzzle opens the stone door and reveals a hidden passage.
- The passage leads directly to **Leo's Hidden Clearing**.
- The puzzle's final mechanics and door-opening animation are deferred until the clue system and scene structure are ready.

### Leo's Hidden Clearing — selected background direction

The creator selected the supplied autumn woodland photograph showing a large spreading tree, golden leaves, and an existing wooden bench as the preferred background candidate. The creator is happy to accept its autumn atmosphere rather than continue searching for an image that matches every element of the original green woodland/sunrise concept.

- Preserve the selected photograph as the environmental foundation if its original high-resolution file and licence are suitable.
- The creator reports that the original source image is 5894 × 3895 pixels. The image preview shared in chat is not itself a repository upload; do not assume the final high-resolution file has been committed.
- The existing bench can remain part of the background; no separate bench asset is required unless later composition changes make one necessary.
- Three small picture frames should hang from the tree branches.
- The creator supplied four real Leo photographs in chat: one photograph of Leo sleeping and three screenshots from a video showing him lying/playing and being petted.
- Use these actual photographs as the contents of the hanging frames. Do not replace them with generic or fabricated photographs of Leo.
- Each hanging frame should be clickable/inspectable. Clicking it opens a larger view of the complete photograph so Ghala can examine it, and she can close the view to return to the clearing.
- The creator has decided not to rush the cutout/image of Leo sitting or sleeping on the bench. Defer adding Leo's actual body to the scene until a suitable photograph is available; the creator may ask for more photos. This does not block building the background, frames, photo-viewer interaction, or other scene functionality.
- Leo's repeatable petting interaction and gentle purring remain part of the intended clearing experience. They can be developed around a placeholder interaction area and refined once his actual in-scene image is selected.
- The final scene should feel peaceful and personal, not like a memorial. The real photos and recognizable appearance of Leo are important.

### Immediate build order

1. Create the Leo's Hidden Clearing scene around the selected background candidate (use a temporary local placeholder until the high-resolution file and licence are confirmed).
2. Build three hanging frame elements and populate them with the four supplied photos as selected by the creator; determine which three photos are used initially later, or allow the frame content to be changed without rewriting the layout.
3. Make each frame open a larger inspectable photo view with a clear close/return interaction.
4. Build the Lily Clearing bush hotspot and concealed stone-door reveal as a separate interaction/state.
5. Add inspectable stone tablets/panels to the sealed doorway.
6. Continue puzzle design only after the world-spanning clue set can be considered as a complete system; do not prematurely hard-code a solution.
7. Add Leo's actual cutout, petting animation, and purring when suitable imagery/audio are ready.

These are design and planning decisions only. No new scene code, frame interactions, bush hotspot, door logic, puzzle logic, or Leo petting implementation has been completed or tested in this update.


## 23. Leo's clearing — background integration and cinematic entrance (November 16, 2026)

### Background selected and integrated locally

- The creator selected the autumn woodland photograph showing a very large spreading tree, golden autumn foliage, a leaf-covered clearing, and an existing wooden bench.
- The photograph is integrated locally as the full-screen background at `assets/backgrounds/leo-clearing.jpg`. The `.leo-scene` CSS uses `background-size: cover`, centered positioning, and a subtle dark overlay. The creator confirmed that it displays correctly and that existing scene navigation still works.
- The background has not been uploaded to GitHub as part of this update. Confirm the original image source and licence before public deployment, and record it in `ASSET_CREDITS.md`.

### Hanging frame design

- The creator selected a gold-toned rectangular hanging frame with a leather strap. A cleaned version with the wall and original artwork removed was saved locally by the creator.
- Reuse the same frame design for all three Leo photographs. Place each photograph behind the frame so the gold border and hanging strap remain visible.
- Position the frames naturally among the tree branches after testing their scale and placement against the actual clearing background.
- The cleaned frame asset has not yet been added to the repository. Existing CSS frames are temporary placeholders and should be replaced when the asset is integrated.

### Cinematic entrance — approved, implementation awaiting browser test

The creator approved this entrance behaviour:

1. The clearing background fades into view through the existing screen transition.
2. The title and subtitle appear briefly, then fade away.
3. The return buttons fade away and become non-interactive, leaving the environment visually unobstructed.
4. Pressing Escape reveals the return buttons again.
5. Leaving and re-entering the scene should replay the introduction.
6. The photographs and, later, Leo remain the scene's meaningful interactive elements.

The local implementation instructions use a separate entrance state and timer, preserving the existing scene navigation and Lily Discovery code. The creator still needs to apply and test the HTML/CSS/JavaScript changes locally; do not describe the cinematic entrance as complete until browser behaviour is confirmed.

### Current next steps

1. Apply and test the cinematic entrance and Escape-to-reveal navigation controls.
2. Replace the temporary CSS frame placeholders with the saved gold hanging-frame asset.
3. Position three frames naturally among the tree branches and place the selected Leo photographs behind them.
4. Implement and test the enlarged photo viewer.
5. Add Leo's in-scene image and repeatable petting/purring interaction when a suitable photo is selected.

The creator wants to proceed in small, testable steps. Do not claim the cinematic entrance, final frame placement, or photo-viewer interaction is complete until it has been implemented and tested locally.


---

## 24. Leo's clearing — cinematic entrance tested and photo assignments confirmed (November 16, 2026)

This section is the latest implementation-status record and supersedes earlier statements in sections 22–23 that say the cinematic entrance is awaiting implementation or testing.

### Confirmed working locally

- The autumn woodland tree-and-bench background fills the Leo scene correctly.
- Existing navigation into and out of Leo's Hidden Clearing remains functional.
- The cinematic entrance has been implemented and tested in the browser. The title and subtitle animate into view and fade away. The navigation controls are hidden during the introduction, then return after approximately nine seconds. The creator confirmed that the sequence works.
- The entrance is replayed when entering the clearing again. The current implementation uses a timed return of the navigation controls; an Escape-key shortcut has not been implemented.

### Hanging photographs — exact content plan

There will be three permanent hanging photographs, each with its own particular image. This is **not** an album or rotating-photo arrangement.

- `assets/photos/Leo/leo-photo-actual.png` is reserved for the separate in-scene model/cutout of Leo sitting or resting on the existing bench. It is not one of the three hanging photographs.
- `assets/photos/Leo/leo-photo-2.png` is assigned to one hanging frame.
- `assets/photos/Leo/leo-photo-4.png` is assigned to a second hanging frame.
- `assets/photos/Leo/leo-photo-5.png` is assigned to a third hanging frame.
- `assets/photos/Leo/leo-photo-6.png` is an extra/alternative image and is not currently assigned to a frame.
- The selected ornate gold hanging-frame asset is `assets/photos/Ornate Gold Frame with Fabric Hanger.png`. The same frame design should be reused for all three photographs.
- Each frame should be clickable and open its own assigned photograph in a larger inspection view. The viewer interaction still needs to be implemented and tested.

### Frame integration status and sizing decision

- Local HTML/CSS work has begun to layer the photograph and gold frame asset together for the first frame.
- The photo currently appears larger than the frame opening. The creator has chosen to defer exact sizing until the actual PNG assets can be inspected together.
- Keep the current proportions as a temporary working state; do not make further speculative sizing changes. Once the creator can upload the frame and photo assets for inspection, tune the image's inset, width, and height to the actual transparent opening.
- Once the first frame is correctly composed, repeat the same structure for the other two assigned photographs and arrange all three naturally among the tree branches.

### Leo model and interaction

- The separate `leo-photo-actual.png` asset is intended as the visual reference for preparing Leo's bench model/cutout.
- The bench model is not yet integrated.
- The repeatable petting interaction and gentle purring are still planned, not implemented.

### GitHub synchronization note

This is a documentation update only. The creator's latest local HTML, CSS, JavaScript, and image assets have not been uploaded as part of this checkpoint. Do not imply that the live GitHub website code matches the latest local working copy. Continue to make small, testable local changes and keep the private Leo photographs and personal material out of the public repository unless publication is explicitly approved.


------------------------------------------------------------------------

## 25. Leo's bench model and interaction plan — November 16, 2026

### Bench model — current local state

- The creator has added a separate static image container to the Leo clearing, using assets/photos/Leo/leo-photo-actual.png as Leo's in-scene bench model.
- The image is positioned over the existing wooden bench in the selected autumn clearing background. The creator reports that the placement looks acceptable as a temporary first pass.
- The source is a cutout, but some remnants of the original background remain around Leo's outline, and portions of his body are cropped by the source image.
- When image attachments are available again, the creator will provide the source image for editing. The intended edit is to remove residual background artefacts and reconstruct the missing/cropped body areas in a way that matches Leo's existing fur, markings, proportions, and appearance. Do not invent a different-looking cat or replace the source with a generic cat image.
- Leo is intended to remain a static image. Full character animation is not expected from this photograph; the sense of life will come from interaction sounds and restrained visual feedback.

### Confirmed Leo interaction behaviour

The creator approved the following interaction concept:

1. **Single click/tap:** play one meow selected from a small collection of variations. Where practical, avoid playing the same variation twice consecutively.
2. **Press and hold:** play a selected purr recording, loop it smoothly for as long as the interaction is held, and stop it cleanly when released.
3. **Release:** stop the purr and return the visual treatment to its resting state.
4. **Visual feedback:** use restrained effects such as a brief warm highlight, tiny speech response, or subtle text such as “Meow!” / “Prrrr...”; keep the original photo static.
5. **Device support:** implement pointer/touch behaviour as well as mouse input, prevent long-press interactions from accidentally triggering the click-meow on release, and provide a silent fallback if audio is unavailable or disabled.
6. **Audio design:** use several genuine cat meow and purr recordings, selected from suitable sources with appropriate permission/licensing. Keep playback user-initiated; no autoplay. Use gentle volume and a short cooldown where useful.

The interaction design is agreed, but the audio files and JavaScript/CSS behaviour have **not** yet been implemented or browser-tested.

### Hanging photographs — unchanged assignments

- Three permanent frames are planned, each with its own fixed photograph; this is not an album or rotating-photo display.
- assets/photos/Leo/leo-photo-2.png, leo-photo-4.png, and leo-photo-5.png are the three assigned frame photographs.
- assets/photos/Leo/leo-photo-actual.png is reserved for the bench model and must not be substituted into the hanging frames.
- assets/photos/Leo/leo-photo-6.png remains a spare/alternative.
- The ornate gold hanging frame at assets/photos/Ornate Gold Frame with Fabric Hanger.png is intended to be reused for all three frames.
- The first frame structure and its image/frame overlay have been started locally. The current HTML snapshot has one frame element; add the other two using the established layout and agreed positions. The photo viewer markup exists, but its open/close behaviour still needs implementation and browser testing.
- Exact frame/photo alignment remains deferred until the actual image assets can be inspected together.

### Updated immediate work order

1. Inspect and clean Leo's bench cutout when the creator can upload the source image; reconstruct cropped areas while preserving his actual appearance.
2. Complete all three fixed hanging frames with their assigned photographs and gold overlays.
3. Implement and test the enlarged viewer for each individual frame.
4. Implement click-to-meow and press-and-hold-to-purr behaviour with varied recordings, clean release, subtle feedback, and mouse/touch support.
5. Continue the wider progression work: five unique special lilies, clue discoveries distributed across the Forgotten Forest/Lily Clearing/Beach, hidden bush and sealed stone doorway, puzzle gate, and hidden passage to Leo's clearing.

### Repository synchronization

This November 16 checkpoint updates project documentation only. The creator's local HTML, CSS, JavaScript, Leo images, and any future audio assets have not been uploaded by this documentation change. Keep private photographs and personal content out of the public repository unless the creator explicitly approves publication. Do not mark the new bench image, image restoration, three-frame completion, photo viewer, or sound interactions as fully implemented until each has been tested locally.


------------------------------------------------------------------------

## 14. Leo's petting interaction and resting audio — implemented locally (November 17, 2026)

The creator has implemented and browser-tested Leo's core interaction system in the local website. This section records the confirmed implementation and supersedes earlier statements that Leo's interaction and audio were only planned.

### Interaction behaviour

- A short click/tap on Leo plays one of four meow recordings, selected randomly. The system avoids immediately repeating the previous variation where possible.
- Press-and-hold starts one of three purr recordings, selected randomly and configured to loop. Releasing Leo stops the purr.
- The hold threshold is 250 ms: a short tap triggers a meow; a longer hold transitions to purring.
- Leo remains a static image. A restrained warm glow and temporary “Meow!” / “Prrrr...” response provide feedback without attempting full character animation.
- The cursor uses `grab` on hover and `grabbing` while pressed, reinforcing the idea of petting.
- Pointer/touch and keyboard (Enter/Space) interaction are supported. The code also cleans up interaction state and purr playback on pointer cancellation, browser-window blur, and when leaving Leo's clearing.

### Audio assets and playback

All recordings are stored locally in `assets/audio/leo/`:

| File | Role |
|---|---|
| `meow-1.mp3` – `meow-4.mp3` | Random meow on a short click/tap |
| `purr-1.mp3` – `purr-3.mp3` | Random purr while Leo is held; configured to loop |
| `leo-breathing.mp3` | Quiet breathing ambience while Leo rests |

Current volume levels in the local JavaScript:

- Breathing ambience: **8%** (`0.08`)
- Meows: **65%** (`0.65`)
- Purrs: **45%** (`0.45`)

The breathing recording starts when the visitor enters Leo's clearing, pauses while Leo is being petted, resumes after the interaction, and stops when the visitor leaves. The creator explicitly chose an awake-and-resting sound rather than heavy sleeping/snoring audio, and requested a very low background level. The creator confirmed the reduced 8% volume works well.

The interaction sounds are user-triggered; the breathing ambience begins as part of entering the clearing through the site's navigation. Browser playback fallback is included if an audio file is unavailable or playback is blocked.

### Verification and remaining checks

- The creator confirmed that the tap/meow, hold/purr, release, breathing, visual response, and cursor behaviour all work locally in Chrome.
- The purr recordings still need a dedicated listening test for smooth loop points and any audible joins. Do not claim that the purr loops have been confirmed seamless.
- Check each recording's source, licence, and attribution requirements before public deployment; record them in `ASSET_CREDITS.md`.
- The three permanent hanging photos and enlarged viewer remain unfinished. The assigned photo files remain `leo-photo-2.png`, `leo-photo-4.png`, and `leo-photo-5.png`. The bench cutout still needs image cleanup/reconstruction after the creator can provide the source image for inspection.

### Project status and synchronization

Leo's core interaction system is complete for the current prototype, while his remaining visual presentation work is still in progress. The next development focus shifts to the five special lily discoveries and the distributed Forest/Lily Clearing/Beach clue-and-puzzle system.

This is a documentation-only update. The creator will update the repository's code files separately. No HTML, CSS, JavaScript, sound files, photographs, or other assets are uploaded by this documentation checkpoint.


---

## La Push Beach — selected photograph and updated scene direction (November 17, 2026)

This section supersedes earlier Beach visual notes that describe the final scene as requiring a strong pink/orange sunset photograph.

- The creator selected a real photograph of **La Push Beach, Washington**, for the Beach environment. The selection is personally meaningful because Ghala loves *Twilight*.
- The photograph has only a subtle orange tone in the sky rather than a dramatic sunset. Preserve the natural photograph and do not force an artificial sunset appearance.
- The creator integrated the photograph locally and confirmed that it displays correctly in Chrome.
- The existing `beach-screen` section and `beach-back-button` navigation are retained. Initial local CSS provides full-screen background treatment, a restrained dark overlay, and title/description styling.
- The background was referenced locally as `assets/backgrounds/beach-lapush.jpg`; confirm the exact filename and extension before uploading the asset.
- Proposed first discoveries are an inspectable shell near the waterline, investigable driftwood, and a seabird that may react to interaction. These are design proposals only; their positions and behaviours depend on the actual photograph composition.
- When image attachments are available, inspect a browser screenshot before positioning the discoveries. Do not cover important shoreline, water, or landscape details.
- The final discovery interface and any Beach puzzle clues remain undecided and unimplemented.
- Verify the photograph's source/licence and add it to `ASSET_CREDITS.md` before public deployment.


---

## Local development checkpoint — November 19, 2026

Leo's clearing has progressed locally beyond the November 17 documentation snapshot:

- Leo's bench image is now substantially smaller than the earlier oversized first pass. The creator's current local CSS uses `right: 34%` and `bottom: 22%`; the position is acceptable for now and can be fine-tuned later. Do not restore older repository values over the local changes.
- The three-frame HTML structure is being assembled using the existing gold hanging-frame overlay. Current working photo assignments are `leo-photo-2.png`, `leo-photo-4.png`, and `leo-photo-6.png`. Photo 6 is currently being used instead of the previously proposed photo 5; photo 5 is no longer the current third-frame choice.
- The creator added JavaScript locally so clicking any `.leo-photo-frame` opens that frame's own image in the enlarged viewer. The viewer can be closed with its close button, by clicking the backdrop, or with Escape.
- The viewer behaviour has not yet been tested in Chrome, and the viewer's visual styling and precise frame placement remain unfinished.
- Preserve Leo's existing petting, meow, purr, breathing, and cinematic entrance behaviour. The latest JavaScript addition is appended separately and should not replace those systems.
- These are local changes only. GitHub code and image assets have not been synchronized as part of this documentation checkpoint.

Immediate sequence: finish viewer CSS, test all three photographs and all close methods, then refine the hanging frames against a fresh screenshot when uploads are available.
