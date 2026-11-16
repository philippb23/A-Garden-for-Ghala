# A Garden for Ghala — Progress

*Last updated: November 16, 2026 — Leo's bench cutout added locally; interaction design agreed*

This is the living development log. For the full creative brief, see [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md). The latest navigation and storytelling decisions are recorded in [PROJECT_UPDATE_2026-11-14.md](./PROJECT_UPDATE_2026-11-14.md); that update supersedes the older forest-last progression.

---

## 1. Current status

**Overall phase:** Foundation prototype, core interaction testing, and early scene integration. All six scene placeholders and basic navigation are implemented and tested locally. The Lily Clearing has a working one-test-lily flow for message display, discovery counting, and reopening the discovered message from the Discovery Journal. Leo's autumn tree-and-bench background and cinematic entrance are integrated and browser-tested locally. The first gold hanging-frame/photo overlay has been started, with exact compositing and final sizing deferred until the assets can be inspected together. Leo's separate bench image has now been added locally as a static cutout and its placement looks acceptable for now; the cutout still needs edge cleanup and reconstruction of body parts cropped from the source image. Leo's click/hold sound interactions are designed but not implemented. The five final discoveries, puzzle logic, hidden-door transition, remaining frames, photo-viewer behaviour, and Leo interaction remain unfinished.  
**Project status:** Welcome → Forgotten Forest navigation works. The Forest has Path of Light → Lily Clearing and Path of Whispers → Beach. The current Puzzle and Leo screens remain placeholders with temporary testing shortcuts. The intended progression is now: discover clues across the Forgotten Forest, Lily Clearing, and Beach; find a clickable bush in the Lily Clearing that reveals a concealed, sealed stone doorway; solve the world-spanning puzzle to open the door; follow the hidden passage to Leo's Hidden Clearing. Return paths have been tested locally, but the final progression gates are not implemented.  
**Target completion:** December 13, 2026  
**Backup/refinement deadline:** December 20, 2026  
**Birthday:** December 28, 2026

The landscape lily-clearing background and assets/flowers/lily_only_no_stem.png have been uploaded to GitHub and integrated locally. The selected autumn tree-and-bench photograph is integrated locally as the Leo clearing background; the background, cleaned gold frame asset, and Leo photographs have not yet been uploaded to GitHub. The local Leo bench model now uses assets/photos/Leo/leo-photo-actual.png in a static image container positioned over the existing bench; the creator reports that it looks acceptable for now pending visual review. The image is a cutout, but some background residue remains around its edges and parts of Leo's body are cropped by the source framing. After the attachment limit resets, the source image will be supplied for careful cleanup and reconstruction, preserving Leo's actual appearance. The first hanging frame is present in the current local HTML; the other two frame elements and final compositing still need to be completed. The photo-viewer markup exists, but its click/close JavaScript has not been confirmed. The Forest currently has a two-panel path layout. Beach and Puzzle remain placeholder scenes; final artwork and progression gates remain unimplemented.

## 2. Completed

- [x] GitHub repository created and connected.
- [x] `PROJECT_CONTEXT.md` and `PROGRESS.md` added.
- [x] Initial `index.html`, `css/style.css`, and `js/main.js` prototype created locally.
- [x] Welcome screen with centered title/subtitle, pre-sunrise gradient, and gentle fade-in animation.
- [x] Welcome → Forest transition and return navigation tested locally.
- [x] Forest → Lily Clearing and return navigation tested locally.
- [x] Forgotten Forest updated with Path of Light and Path of Whispers choices.
- [x] Forest path panels styled side by side on desktop and stacked on narrow screens.
- [x] Path of Light → Lily Clearing and return to Forest tested locally.
- [x] Path of Whispers → Beach placeholder and return to Forest tested locally.
- [x] Puzzle placeholder added after Lily Clearing, with return navigation.
- [x] Leo's Hidden Clearing placeholder added after Puzzle, with return navigation to Lily Clearing and Forest.
- [x] Temporary testing shortcuts added to access Puzzle and Leo's Clearing before unlock mechanics exist.
- [x] Lily image colour/saturation softened with CSS to better match the warm meadow background.
- [x] Landscape lily-clearing background uploaded to `assets/backgrounds/lily-clearing-landscape.jpg`.
- [x] Original clearing photograph uploaded to `assets/backgrounds/lily-clearing-original.jpg`.
- [x] Lily cutout uploaded to `assets/flowers/lily_only_no_stem.png`.
- [x] Local Lily Clearing scene displays the uploaded background and lily image.
- [x] November 14 forest-first navigation and storytelling update documented in `PROJECT_UPDATE_2026-11-14.md`.
- [x] Selected autumn woodland photograph integrated locally as the full-screen Leo's Hidden Clearing background (`assets/backgrounds/leo-clearing.jpg`); the creator confirmed that it displays correctly and existing navigation still works.
- [x] Added initial local CSS placeholders for the three Leo photo frames and enlarged-photo viewer layout.
- [x] Selected a reusable gold hanging-frame design with a leather strap; the creator saved the cleaned frame asset locally. Final positioning and photo compositing remain to be done.
- [x] Added Leo's separate static cutout image to the local Leo clearing layout using assets/photos/Leo/leo-photo-actual.png; the creator reports that its current placement looks acceptable as a first pass.

## 3. In progress

- [x] Verify the current single-test-lily interaction locally: clicking the special lily records the discovery and displays its title/message; the journal lists the discovered entry and can reopen the same message.
- [ ] Extend the tested prototype to five unique special lilies, verify ordinary-lily behaviour and duplicate-discovery prevention, and add persistent progress if appropriate.
- [x] Add the initial Discovery Journal locally: it lists discovered entries only and allows the discovered test message to be reopened.
- [ ] Keep the Muthhila entry capable of an Arabic-first, right-to-left presentation, distinct from ordinary message entries.
- [ ] Unlock the Puzzle only after all five unique special lilies have been discovered; remove temporary testing shortcuts when the real gates are tested.

- [x] Implement and browser-test the cinematic Leo-clearing entrance: title/subtitle appear and fade away; navigation controls are hidden during the introduction and return after approximately nine seconds. Escape-key reveal is not implemented.
- [ ] Replace the temporary Forest path panels with final scene-integrated path hotspots when the forest artwork is ready.
- [ ] Replace the Beach placeholder with its final coastal scene and discoveries.
- [ ] Replace the Puzzle testing shortcut with the real puzzle, unlocked only after all five special lilies are found.
- [ ] Replace the Leo testing shortcut with the real puzzle-gated reveal and hidden clearing interactions.
- [ ] Clean the residual background around Leo's cutout and reconstruct the body areas cropped from the source image after the creator can upload it for editing.
- [ ] Build Leo's interaction system: a single click selects a varied meow; press-and-hold plays a varied looping purr; releasing stops the purr. Add subtle visual feedback, pointer/touch support, sensible cooldowns, and a silent fallback.
- [ ] Continue refining the Lily Clearing flower's scale, edges, lighting, and integration during the visual-polish phase.
- [ ] Verify the source/licence and attribution requirements for the clearing background and lily asset before public deployment.

Nothing should be marked complete until it has actually been implemented and tested.

## 4. Not started

- [ ] Full Twilight-inspired Forgotten Forest visual scene and two-path composition.
- [ ] Beach environment and its small interactive discoveries.
- [ ] Abundant pink lilies with natural variation and bloom interactions.
- [ ] Five hidden special lilies and creator-written personal message reveals, including an Arabic-first “Muthhila” lyric reveal and a possible “Ma Tmaneitak”-inspired discovery.
- [ ] Subtle discovery counter (e.g. “Little discoveries 0/5”).
- [ ] Garden puzzle, unlocked after all five special lilies are found.
- [ ] Complete Leo's hidden clearing: three permanent hanging photos with individual enlarged viewers, a refined bench cutout, and repeatable click/hold petting interactions with varied meows and purrs.
- [ ] Connected point-and-click navigation and revisit paths between discovered locations.
- [ ] Piano/rain ambience and audio controls.
- [ ] Optional, user-initiated playback of the relevant “Muthhila” recording passage from an authorised embed/licensed source; lyrics remain the primary reveal and playback must not autoplay.
- [ ] Mobile and desktop testing.
- [ ] Asset licensing and credits review.
- [ ] GitHub Pages deployment and public-link testing.

## 5. Next task

**Current development focus — November 16, 2026**

### Goal: Complete Leo's presence and interaction foundation

1. Keep the Leo bench image static. Its current local placement is acceptable as a first pass; do not attempt to invent animation from a still photograph.
2. When image attachments are available again, inspect the Leo bench source image, clean the leftover background around the cutout, and reconstruct the portions of Leo's body cropped by the source framing while preserving his recognizable appearance.
3. Finish the three permanent hanging-photo elements using the agreed assignments: leo-photo-2.png, leo-photo-4.png, and leo-photo-5.png. Keep leo-photo-actual.png reserved for the bench model. Do not turn the frames into an album.
4. Implement the enlarged viewer so each frame opens its own assigned image and can be closed to return to the clearing.
5. Build Leo's interaction logic around the static image: single click triggers one of several meows; press-and-hold plays one of several purr recordings in a seamless loop; release stops the purr. Add subtle visual feedback, avoid repeating the same sound consecutively where possible, support mouse and touch, and include a silent fallback.
6. Add sourced/licensed cat recordings to assets/audio/leo/ only after suitable files are selected. Do not autoplay sounds.
7. After the Leo interaction foundation, return to the larger world progression: five unique special lilies, the distributed clue system, hidden bush/stone doorway, puzzle gate, and Beach/Forest scene completion.

**Definition of done for the Leo interaction stage:** Leo's cleaned static cutout sits convincingly on the bench; all three permanent photographs open and close correctly; click/hold/release behaviour works on desktop and touch devices with varied, optional sounds. The sound and interaction features must be browser-tested before being marked complete.

## 6. Milestone tracker

| Target dates | Milestone | Status |
|---|---|---|
| Nov 11–17 | Foundation, forest navigation, Lily Clearing test flow, Leo clearing background/entrance and initial bench integration | In progress — core navigation, one-lily test, Leo background/entrance, and first bench-image placement work locally |
| Nov 18–24 | Complete Leo's three frames/viewer and click/hold sound interactions; expand to five lilies; design the distributed puzzle and hidden-door states | Planned — current immediate focus is Leo; scope may be sequenced in small verified steps |
| Nov 25–Dec 1 | Build the full Forgotten Forest and Beach environments; implement clue discovery, puzzle gating, and the sealed-door reveal/opening | Not started |
| Dec 2–8 | Complete personal lily content, atmosphere/audio, responsive behaviour, asset credits, and end-to-end testing | Not started |
| Dec 9–13 | Feature freeze, bug fixes, final polish, and first complete release | Not started |
| Dec 14–20 | Contingency and final refinements only; preserve the December 13 completion target | Not started |

The project structure has shifted substantially: the Forgotten Forest is the opening navigation hub; the Lily Clearing contains five message discoveries and a hidden entrance; clues span the Forest, Lily Clearing, and Beach; solving the puzzle opens the passage to Leo's clearing. Leo's clearing is now being developed as a meaningful destination with a static, recognizable bench image and direct interactions rather than relying on character animation. Prioritize the complete working journey over optional effects, and keep the December 13 completion target.

## 7. Confirmed visual and interaction decisions

- Welcome screen retains elegant serif typography, centered composition, restrained entrance button, and full-screen photographic treatment.
- Forgotten Forest is the starting location after Welcome: mysterious, slightly spooky, Twilight-inspired Pacific Northwest atmosphere with deep blue-green tones, mist, moss, and diffused light. Do not reproduce film stills or character likenesses.
- Forest composition should preserve the large/central tree and two paths: Path of Light toward the warm lily clearing; Path of Whispers toward the coast/beach.
- Use subtle cursor-controlled horizontal panoramic movement and touch-drag on mobile where practical; layered 2.5D is optional.
- Lily Clearing is warm, welcoming, and abundant with realistic pink lilies. Every lily can bloom; exactly five special lilies reveal personal messages and unlock the puzzle.
- Messages must be written or approved by the creator. Do not invent shared memories or fill the garden with generic romantic declarations.
- Solving the puzzle reveals Leo in a secluded tree-and-bench clearing. Leo is orange and has a gentle, repeatable petting interaction with purring; support mouse and touch, and provide a silent fallback.
- Beach retains its peaceful coastal/sunset direction, with discoveries such as clickable shells and birds.
- Use real, appropriately licensed photography/assets for final artwork. Record asset sources, creators, licences, and attribution in `ASSET_CREDITS.md`.
- The emotional design principle is thoughtfulness and personal specificity. Let discoveries unfold gradually at the visitor's own pace.

## 8. Working log

### November 11–13, 2026 — Initial prototype and creative planning

- Built the initial welcome page and working Welcome ↔ Forest navigation.
- Reviewed the Lovable demo as a reference for composition and interactions, not final artwork.
- Established photorealistic/cinematic scenery, pink lilies, the five special-flower discoveries, the puzzle, Leo's hidden clearing, and the beach.
- Confirmed Leo's repeatable petting/purring interaction and mobile tap support.
- Compared lily assets and selected a realistic asset workflow; avoid purchases until visual fit and licence are verified.
- Uploaded the clearing background (original and landscape crop) and lily cutout to the repository; integrated them into the local Lily Clearing scene.

### November 14, 2026 — Forest-first experience confirmed

- The creator reaffirmed that the experience must begin somewhere unexpected, mysterious, and slightly spooky rather than starting in the Lily Clearing or a Garden hub.
- Confirmed the Forgotten Forest as the opening location immediately after Welcome and as the initial navigation hub.
- Retained the two-path concept: Path of Light leads to the Lily Clearing; Path of Whispers leads toward the Beach.
- Confirmed the intended contrast: cool, mysterious forest → warm, welcoming lily clearing → intimate, comforting Leo clearing → peaceful coast.
- Reinforced that the gift should be personal and thoughtful, with genuine details and gradual discoveries rather than generic filler. The creator will write or approve personal messages.
- No new website code was implemented in this planning session. The two-path Forest layout remains the next coding task.

---

Keep this file factual. Distinguish between completed, in-progress, planned, and undecided work. Continue building in small steps with explanations so the creator understands and participates in the code.


### November 15, 2026 — Music-inspired lily discoveries

- Confirmed that Ghala loves Mohammed Abdu's **“Muthhila”** and **“Ma Tmaneitak.”**
- The creator and Ghala recently listened to “Muthhila” together; she especially loves its romantic lyrics and the ending passage.
- Confirmed that the “Muthhila” special lily should reveal a selected passage in **Arabic**, preserving the original wording and presenting it right-to-left with suitable Arabic typography. Arabic is the primary experience; an English translation is optional.
- Confirmed that optional playback may be offered through a discreet play/replay control, but the song must not autoplay and the lyric reveal must work fully without audio.
- “Ma Tmaneitak” may inspire another lily, but its exact passage and personal message remain undecided.
- These are design decisions only. No lyric reveal or playback has been implemented or tested. Full lyric text is intentionally not stored in the public project documentation.


### November 15, 2026 — Navigation scaffold completed

- Replaced the basic Forest placeholder with a “Forgotten Forest” hub containing two distinct path panels: **Path of Light** leads to the Lily Clearing, and **Path of Whispers** leads to the Beach placeholder.
- Added responsive styling for the two path panels: side by side on wider screens and stacked on narrow screens.
- Added a navigable Beach placeholder with a return route to the Forest.
- Added a Puzzle placeholder after the Lily Clearing and a Leo's Hidden Clearing placeholder after the Puzzle.
- Added return routes from the Puzzle to the Lily Clearing and from Leo's Clearing to both the Lily Clearing and Forest.
- Tested the scene transitions locally. The Puzzle and Leo entry buttons are temporary testing shortcuts, not final unlock logic.
- Reviewed the Lily Clearing in the browser. The warm meadow background and flower are integrated; CSS saturation/colour filtering was adjusted to soften the lily and better harmonise it with the background.
- No final Forest/Beach/Puzzle/Leo artwork, lily-discovery mechanics, puzzle logic, or Leo interaction has been implemented yet.


### November 15, 2026 — Lily discovery architecture and journal planning

- Began the Lily Clearing interaction prototype: ordinary versus special lilies, bloom animation, a discovery counter, unique discovery IDs, and a data-driven message registry.
- Confirmed the Discovery Journal concept: a small journal control in the clearing, entries appear only after their corresponding special lily is discovered, and previously unlocked messages can be reopened.
- The journal must not reveal undiscovered messages or special-lily locations. It should preserve the 0/5–5/5 progress and support a distinct Arabic-first, right-to-left Muthhila entry.
- The five flower images and their positions will be selected later, after the clearing artwork and flower placement are finalised. Do not assign final special-lily locations yet.
- Puzzle access remains gated by all five unique discoveries; current direct-entry controls are temporary testing shortcuts.
- No final personal message wording or full lyric text has been added to the public repository.

### November 15, 2026 — Discovery Journal message display fixed locally

- Added the missing `<h2 id="lily-message-title"></h2>` element to the Lily Clearing message panel in the local `index.html`. The JavaScript was attempting to set the title on an element that did not exist, causing a null-reference error.
- Confirmed locally that clicking the test special lily now displays both the discovery title and message.
- Confirmed that the journal entry can call the same message-display function to reopen the discovery.
- Added a CSS `[hidden]` rule to ensure hidden panels are not accidentally displayed by component styling; journal layering/clickability was checked during debugging.
- The current implementation is still a one-lily test scaffold. The five real special lilies, final content, flower toggle/closing behaviour, persistent storage, and five-discovery puzzle gate remain future work.
- The code changes are in the creator's local files; this GitHub update records project status and does not upload `index.html`, `style.css`, or `main.js`.


### November 16, 2026 — Puzzle world structure and Leo's clearing direction

- Confirmed that the puzzle should be a world-spanning investigation rather than a single-room puzzle. Clues are intended to be discoverable across the Forgotten Forest, Lily Clearing, and Beach, in any order.
- The desired difficulty is challenging, with a mixture of investigation and physical interaction. Big Walk is an inspiration for environmental discovery, experimentation, and the satisfaction of connecting clues; do not copy its actual puzzles or multiplayer mechanics.
- The final clue meanings, exact mechanics, and solution are deliberately undecided. A rotating multi-ring mechanism was discussed as a possible visual/mechanical element, but it is not yet a locked implementation decision.
- Confirmed the Lily Clearing hidden entrance concept: a clickable bush on the right side reveals a concealed stone doorway. Use a second visual state or scene transition rather than trying to animate the bushes and vines.
- The stone doorway has tablets/carved elements and remains sealed until the puzzle is solved. Solving it opens the stone door and reveals a hidden passage leading to Leo's Hidden Clearing.
- The doorway should be discoverable before the puzzle is solved, so Ghala can inspect it, leave, explore the other locations, and return later.
- Selected the creator's autumn woodland photograph (large spreading tree, golden leaves, and an existing wooden bench) as the visual background candidate for Leo's Hidden Clearing. The creator is comfortable with its autumn atmosphere even though it differs from the original green-sunrise concept. The high-resolution original is reported by the creator as 5894 × 3895; the uploaded chat preview is not the final repository asset.
- The tree branches will hold three hanging picture frames. The creator supplied four Leo photos (one sleeping photo and three video screenshots); use the supplied real photographs rather than generic cat imagery.
- Each frame should be clickable/inspectable and open a larger view of the complete photograph so Ghala can look closely at Leo.
- Defer placing Leo's actual body/cutout on the bench until a suitable photograph is available. The creator may ask for additional photos, but this is not a blocker for building the clearing, frames, inspection interaction, or other functionality.
- Planned work can proceed with placeholders: build the clearing layout, hanging frames, photo viewer, and later the petting/purring interaction. Replace temporary Leo imagery when better source photos are available.
- No website code or image assets were uploaded in this update. This commit records design decisions and current project status only.


### November 16, 2026 — Leo's autumn clearing background and cinematic entrance direction

- Integrated the selected autumn woodland photograph showing the large spreading tree, golden foliage, leaf-covered ground, and existing wooden bench as the full-screen local background for Leo's Hidden Clearing.
- Added a `.leo-scene` background rule in the local stylesheet using `assets/backgrounds/leo-clearing.jpg`, with cover scaling and a subtle dark overlay. The creator confirmed that the background displays correctly and the existing navigation still works.
- Added initial CSS placeholders for the three photo frames and enlarged-photo viewer. The creator selected a gold hanging frame with a leather strap as the preferred design and saved the cleaned frame asset locally.
- The frame asset has not yet been added to the repository, and the frames have not yet been positioned on the tree or composited with Leo's photographs.
- Approved a cinematic entrance: the title and subtitle appear briefly and fade away; the return buttons fade away and become non-interactive; pressing Escape reveals the return controls again. The implementation instructions have been prepared for local testing; do not mark this feature complete until the creator confirms it works in the browser.
- The local background integration is complete. Final frame placement, photo-viewer functionality, cinematic entrance testing, and Leo's on-bench image/interaction remain in progress or planned.


### November 16, 2026 — Leo cinematic entrance and hanging-photo setup (local progress)

- Implemented and tested the Leo clearing's cinematic introduction locally. On entry, the title and subtitle animate in and fade away; the navigation controls are hidden during the introduction and return after the timed sequence. The creator confirmed that this works.
- The existing Leo clearing background fills the screen correctly, and the return navigation remains functional.
- Started integrating the selected ornate gold hanging-frame PNG as an overlay above an individual photograph. The first frame is being tested before repeating the setup for the other two.
- The photo/frame proportions did not yet align. The creator chose to restore the earlier photo sizing and defer precise sizing until the actual image assets can be inspected together. Do not treat the frame composition as finished.
- Confirmed the intended photo assignment: `leo-photo-actual.png` is reserved as the source/reference for Leo's separate bench model; `leo-photo-2.png`, `leo-photo-4.png`, and `leo-photo-5.png` are intended for the three hanging frames; `leo-photo-6.png` is a spare/alternative.
- Each frame should contain one particular photograph. Do not create an album or imply that the photos rotate through the frames. Each frame will be individually clickable and should open its own photograph in a larger view once that interaction is implemented.
- Leo's bench model, petting/purring interaction, enlarged photo viewer, and final frame sizing/placement are not yet complete.
- These are local changes and progress notes only. The local `index.html`, `css/style.css`, `js/main.js`, and image assets have not been synchronized to GitHub in this update.


### November 16, 2026 — Leo bench image and interaction design update

- Added a separate leo-bench container and leo-bench-image element to the local Leo scene, using assets/photos/Leo/leo-photo-actual.png. The creator reports that Leo's current static placement on the existing bench looks acceptable for now.
- The image is a cutout, but some remnants of the original background remain around the silhouette, and portions of Leo's body are cropped by the source image. The creator plans to upload the image when attachments are available again so the cutout can be cleaned and the missing body areas reconstructed to match Leo's existing appearance.
- Confirmed that Leo will remain a static image; no full-body animation is expected from the current source. Interaction feedback will be created with audio and subtle visual effects instead.
- Agreed interaction design: a single click plays one of several meow variations; pressing and holding Leo plays one of several purr variations; releasing stops the purr. Avoid immediate repetition where possible, keep volume gentle, support touch as well as mouse, and do not autoplay audio.
- Planned a few distinct purr recordings and meows rather than a single repeated sound. A short cooldown and subtle text/visual response may be used to make interactions feel natural.
- The interaction design is approved, but no Leo sound files or interaction JavaScript/CSS have been implemented or tested yet.
- The three hanging photographs remain permanent individual images, not an album: leo-photo-2.png, leo-photo-4.png, and leo-photo-5.png. leo-photo-actual.png remains reserved for the bench model; leo-photo-6.png remains spare.
- The creator's local HTML/CSS/image changes have not been uploaded to GitHub. This checkpoint updates documentation only; private Leo photographs and source assets remain local unless publication is explicitly approved.
