# A Garden for Ghala --- Project Context

*Last updated: November 10, 2026*

This document is the canonical handover for the **A Garden for Ghala**
project. Keep it in the root of the project repository and update it
whenever an important decision, milestone, or technical change is made.
When continuing work in a new ChatGPT conversation, provide this file
together with `PROGRESS.md` and any relevant code or assets.

------------------------------------------------------------------------

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

A possible first visit: - Start in a misty forest at the edge of
sunrise. - Follow a path into a clearing full of pink lilies. - Continue
through the forest toward the coast. - Reach a peaceful beach. - Be able
to return to the other areas through connecting paths.

The creator also likes the idea of starting in the forest and
discovering the lily garden as the world opens up. Keep that as the
current preferred opening, while allowing the exact first scene to be
adjusted during prototyping.

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

Initial scope: approximately five interactive lilies/messages, with the
option to add more if time allows.

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

**Still undecided:** What Leo does when clicked. One option is for him
to slowly open his eyes or lift his head; the creator has not yet chosen
whether he should wake or remain asleep. Do not treat this interaction
as finalized until confirmed.

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

Use a first-person-feeling **point-and-click hotspot** system. The user
sees an illustrated viewpoint and clicks a path marker, doorway, bridge,
or other interactive region to move to another viewpoint.

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

The development order has changed: build the lily clearing first because
its visual assets are expected to be easier to source than the specific
photorealistic forest background. This is a change in sequencing, not a
change to the three-area world.

**Week 1 --- November 11--17: Lily clearing prototype**
-   Find a realistic woodland/meadow clearing photograph.
-   Find realistic pink lily assets that fit the background.
-   Organize downloaded assets and record their licenses/sources.
-   Add the clearing background and first lily to the existing website.
-   Establish the first visual composition and test it in the browser.

**Deliverable:** a first photorealistic lily-clearing prototype with at
least one flower positioned in the scene.

**Week 2 --- November 18--24: Complete lily interactions**
-   Add approximately five interactive lilies.
-   Implement bud/partially-open/bloomed states using suitable assets.
-   Add restrained bloom transitions and personal message reveals.
-   Refine the clearing's atmosphere and responsive layout.

**Deliverable:** a usable lily clearing with its core flower interactions.

**Week 3 --- November 25--December 1: Forest, beach, and navigation**
-   Source the photorealistic Twilight-inspired forest background and
    suitable layered foreground/midground elements.
-   Source a matching beach/coast background.
-   Build the three environments and connect them with hotspots.
-   Add basic transitions and 2.5D parallax where suitable layers exist.

**Deliverable:** all three areas can be visited and navigated.

**Week 4 --- December 2--8: Puzzle, Leo, atmosphere, and release**
-   Implement the garden puzzle and hidden path to Leo's clearing.
-   Add Leo's quiet bench reveal after puzzle completion.
-   Add selected environmental details, audio, and final sequence.
-   Test mobile/desktop, optimize assets, verify licensing, and deploy.

**Deliverable:** a complete, tested first release. This four-week target
is ambitious; protect the core experience and simplify optional details
if asset sourcing or implementation takes longer than expected.

### December 14--20: Backup and refinement

Reserve this period for unexpected bugs, small visual refinements, and
deployment issues. If the project is already complete, do not add
unnecessary features.

## 10. Scope and priorities

Keep the initial version achievable.

  Component                                    Initial target
  --------------------- -------------------------------------
  Main environments          3 (forest, lily clearing, beach)
  Interactive lilies                          Approximately 5
  Personal messages                        Approximately 5--6
  Hidden puzzles                          1 thoughtful puzzle
  Hidden discoveries              1--2 or more if time allows
  Cat                               1 surprise appearance of Leo after puzzle completion
  Main soundtrack                                Gentle piano
  Environmental sound               Soft rain/nature ambience
  Final sequence          1 garden/world-wide birthday reveal

### Priority order

1.  A working website and navigation.
2.  Three connected environments.
3.  Lily bloom interactions and personal messages.
4.  A complete final sequence.
5.  Sound, puzzle, cat, and environmental details.
6.  Visual polish and optional extras.

If time becomes limited or the creator becomes employed, protect
priorities 1--4 and simplify optional details rather than sacrificing
the complete experience.

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

**Current next step (November 11, 2026):** Begin the lily clearing.
Find a photorealistic woodland clearing background and realistic pink
lily assets, then integrate the background and first lily into the
existing website. The forest asset search remains open and will continue
later; do not settle for cartoony artwork just to fill the scene.


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
