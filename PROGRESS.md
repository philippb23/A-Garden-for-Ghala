# A Garden for Ghala — Progress

*Last updated: November 13, 2026*

This is the project's living development log. Keep it concise and update it whenever meaningful work is completed, a decision changes implementation, or the next task changes.

For the full creative brief, confirmed preferences, design decisions, technical direction, and timeline, see [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md).

---

## 1. Current status

**Overall phase:** Foundation prototype; preparing the lily-clearing scene and assets  
**Project status:** Initial welcome screen and working welcome-to-forest navigation implemented locally and tested; build order confirmed as lily clearing → puzzle → Leo → beach → optional forest  
**Target completion:** December 13, 2026  
**Backup/refinement deadline:** December 20, 2026  
**Birthday:** December 28, 2026

The repository, project brief, and initial website prototype are in place. The confirmed build order is to finish the lily clearing and its five messages first, then the garden puzzle, Leo's hidden clearing, and the beach; the forest is a lower-priority optional area to attempt last. The 5807 × 7748 clearing-background candidate has now been cropped to landscape locally, but the cropped file is not yet uploaded to GitHub and its source/licence still needs verification. Lily asset research is ongoing; one candidate with substantial greenery is being evaluated, but no flower has been selected or purchased. Leo's clearing will include a repeatable petting interaction with a hand cursor on desktop, tap support on mobile, and a gentle purring sound. No scene code or interaction implementation has been completed yet.

## 2. Completed

- [x] GitHub repository created: [A-Garden-for-Ghala](https://github.com/philippb23/A-Garden-for-Ghala)
- [x] Repository connected for project work.
- [x] `PROJECT_CONTEXT.md` added to the repository root.
- [x] Main creative direction and known preferences documented.
- [x] Initial scope, technical approach, and development timeline agreed.
- [x] Development approach established: build in small steps, with explanations, so the creator understands and participates in the code.
- [x] Created the initial `index.html`, `css/style.css`, and `js/main.js` files locally.
- [x] Built the welcome screen with a blended pre-sunrise gradient, centered title/subtitle, and gentle fade-in animation.
- [x] Added the "Enter the garden" button and a placeholder forest scene.
- [x] Implemented and tested the fade transition from welcome to forest and a return button.

## 3. In progress

- [ ] Upload the completed landscape crop of the clearing background to GitHub; verify its source/licence before public use.
- [ ] Evaluate the current lily candidate (including whether its surrounding foliage should be retained or cleaned up), verify its licence, then integrate the clearing background and first lily into the existing website.
- [ ] Defer forest asset research until the lily clearing, puzzle, Leo, and beach are on track; the forest is optional and lowest priority.

Nothing in this section should be marked complete until it has actually been tested or verified.

## 4. Not started

- [x] Initial welcome screen and "Enter the garden" interaction (working prototype).
- [x] Basic welcome-to-placeholder-forest transition and return navigation.
- [ ] Photorealistic lily-clearing scene and realistic flower assets.
- [ ] Interactive pink lilies, bloom animations, and five personal message reveals.
- [ ] Hidden garden puzzle and optional hint.
- [ ] Leo's orange-cat clearing, unlocked by the puzzle, with petting and purring interaction.
- [ ] Beach environment and its small interactive discoveries.
- [ ] Connected point-and-click hotspot navigation between completed areas.
- [ ] Photorealistic Twilight-inspired forest (optional stretch goal; build last).
- [ ] Piano / rain ambience and audio controls.
- [ ] Final birthday sequence.
- [ ] Mobile and desktop testing.
- [ ] Asset licensing and credits review.
- [ ] GitHub Pages deployment and public-link testing.

## 5. Next task

**Next development session — November 14, 2026**

### Goal: Upload and prepare the lily-clearing assets

1. Upload the completed landscape crop to the repository, keeping the
   original unchanged. Confirm the intended filename/path before
   documenting it.
2. Verify the clearing photograph's source and licence before public use.
3. Evaluate the current lily candidate against the background, including
   whether its greenery should remain or be removed.
4. Verify the lily asset's licence before purchase or use; do not spend
   money until it passes the visual test.
5. Organize approved assets and integrate the clearing background and
   first lily into the existing website.

**Definition of done:** The cropped background is stored in the
repository with its source/licence recorded, and the first realistic
lily is ready to integrate or has been integrated.

## 6. Milestone tracker

| Target dates | Milestone | Status |
|---|---|---|
| Nov 11–17 | Lily-clearing prototype and first realistic flower | In progress |
| Nov 18–24 | Complete five lily messages and garden puzzle | Not started |
| Nov 25–Dec 1 | Leo's hidden clearing and beach environment | Not started |
| Dec 2–8 | Optional forest, atmosphere, testing, and first release | Not started |
| Dec 9–13 | Original buffer for polish and contingency | Not started |
| Dec 14–20 | Contingency and final refinements, if needed | Not started |

The dates are targets, not a reason to rush or compromise the core experience. If available development time changes, protect a complete working version and simplify optional details.

## 7. Confirmed decisions from Lovable demo review (November 13, 2026)

- Preserve the welcome screen's elegant serif typography, centered layout, restrained button, and photographic full-screen treatment.
- Use gentle horizontal panoramic movement controlled by cursor (and touch-drag on mobile); layered 2.5D is optional, not required for the first implementation. Keep scenes full-screen and do not shrink them during movement.
- Forest composition may retain a central large tree and two paths (toward warm light/garden and toward the sea), but replace the current image with more distinctly Twilight-inspired Pacific Northwest photography. Keep fireflies subtle.
- Preserve the beach's sunset/coastal visual direction and small discoveries such as clickable shells and flying birds; source properly licensed real photography.
- Lily clearing should be abundantly filled with pink lilies and greenery between them. Many flowers at varied heights, angles, and bloom stages; avoid repetitive placement.
- Every lily is clickable and blooms. Exactly five special lilies are scattered across different areas of the garden, not clustered. They have no obvious glow or marker.
- A subtle progress indicator (e.g. “Little discoveries 0/5”) indicates five messages exist without revealing locations. Each special lily reveals one personal message.
- Finding all five special lilies unlocks the garden puzzle. Solving the puzzle opens the hidden path to Leo's clearing. An optional hint may be requested if she gets stuck; no automatic interruptions.
- Preserve the hidden clearing's enormous tree, warm light, bench, and three hanging photo frames. Leo is orange. Use the real photos the creator may provide for the frames; do not fabricate photographs of the specific cat.
- Lovable is a reference for composition and interaction only. Final artwork should use real, appropriately licensed photography/assets, not generic AI-looking imagery.

## 8. Decisions or questions awaiting clarification

These are not blockers for starting the first prototype.

- Ask whether Ghala dislikes any particular flowers.
- Gradually clarify whether she prefers dense or open woodland.
- Clarify her preferences for water features and garden composition.
- Source photorealistic woodland clearing and realistic pink lily assets that work together.
- Continue searching for a photorealistic Twilight-inspired forest; the forest image is not selected yet.
- Check the specific licenses for every external image, font, and audio file before publication.
- Finalize the personal lily messages with the creator; do not invent shared memories.

The confirmed decisions and known preferences are recorded in `PROJECT_CONTEXT.md`. Avoid asking again about details already established there.

## 9. Working log

### November 11, 2026 — Revised visual direction and development order

- Created and maintained the project brief and progress tracker in the GitHub repository.
- Built the initial local welcome page in `index.html` and `css/style.css`.
- Added a centered title and subtitle, blended pre-sunrise gradient, and gentle staggered fade-in animation.
- Created `js/main.js` and implemented the Enter/Return screen switching between the welcome page and a temporary forest scene.
- Tested the navigation in the browser; the creator confirmed that it works and looks good.
- Updated the Leo concept: he will no longer be an incidental cat hidden during ordinary exploration. He is now planned as a surprise discovery in a secluded bench clearing, unlocked only after the garden puzzle is solved.
- The creator confirmed that the current prototype files (HTML, CSS, and JavaScript) were committed and pushed to GitHub.
- Rejected the first painterly forest pack as too cartoony. The forest direction is now photorealistic/cinematic, inspired by the *Twilight* Pacific Northwest atmosphere: deep blue-green forest, mist, moss, wet foliage, and gradual pink sunrise light.
- Confirmed a 2.5D approach using real photographs and layered foreground/midground/background elements where available; subtle fog and light effects can be layered with CSS/JavaScript.
- Changed the development order: build the lily clearing first because realistic garden and flower assets may be easier to source than the specific forest background.
- Lily clearing direction: photorealistic woodland/meadow background, realistic pink lilies, natural green vegetation, and soft pink/peach sunrise lighting. The clearing should remain visually cohesive with the eventual forest.
- Set a provisional accelerated four-week target ending December 8: Week 1 lily-clearing prototype; Week 2 lily interactions/messages; Week 3 forest, beach, and navigation; Week 4 puzzle, Leo, atmosphere, testing, and release. This is ambitious and optional details may be reduced to protect a complete working version.
- The creator plans to continue with the lily-clearing asset search and first integration on November 12.

---

## 10. How to maintain this file

At the end of each substantial work session:

1. Update **Current status**.
2. Move completed tasks into **Completed** and tick them off.
3. Update **In progress**, **Not started**, and **Next task**.
4. Update the milestone tracker if dates or scope change.
5. Add a short dated entry to the **Working log**.
6. Update `PROJECT_CONTEXT.md` only when a lasting project decision, preference, or important design/technical detail changes.

Keep this file factual. Distinguish clearly between completed, in-progress, planned, and undecided work.

**Immediate next action:** Upload the completed landscape crop of the lily-clearing background, verify its source/licence, evaluate the candidate lily asset, and begin integrating the clearing. Follow the revised progression: lilies and messages → puzzle → Leo (including petting and purring) → beach → optional forest.


### November 13, 2026 — Lovable prototype review and garden interaction decisions

- Reviewed the creator's screenshots of the Lovable welcome screen, forest, beach, lily clearing, and hidden clearing.
- Kept the welcome screen's elegant serif typography, centered composition, restrained entrance button, and photographic full-screen design as references.
- Chose gentle cursor-controlled horizontal panoramic movement, with touch-drag support on mobile. Layered 2.5D is optional; a single oversized photo can be used initially. Scenes should remain full-screen and must not shrink while moving.
- Forest composition reference: central large tree and two paths, one toward warm light/the garden and one toward the sea. Replace the current forest image with more convincing Twilight-inspired Pacific Northwest photography; fireflies may remain subtle.
- Beach direction approved: preserve the sunset/coastal composition and small discoveries such as clickable shells and flying birds, using properly licensed real photography.
- Lily garden expanded from approximately five flowers to an abundant garden with many pink lilies and greenery between them. Flowers should vary naturally in position, height, angle, and growth stage.
- Confirmed that every lily is clickable and blooms, but exactly five special lilies are scattered across different areas of the clearing. They are not clustered and have no obvious visual markers or glow.
- Add a subtle “Little discoveries 0/5” progress indicator. Each special lily reveals a personal message. Finding all five unlocks the garden puzzle; solving it opens the hidden route to Leo's clearing.
- Add an optional hint that the visitor can request, without automatic interruptions.
- Preserve the hidden clearing's large tree, warm light, bench, and three hanging photo frames. Correct Leo's appearance to orange; use real photos supplied by the creator in the frames rather than fabricated cat photographs.
- Final artwork preference reaffirmed: source existing real photography/assets and verify licences. Lovable's generated/demo imagery is a design reference, not automatically approved for final use.


### November 13, 2026 — Late-night asset research session

- Compared options for sourcing realistic pink lily assets. Transparent cutouts can be relatively expensive (one encountered option was about AED 27.50), and the free libraries searched so far have not offered many strong matches.
- Found a possible lily candidate with substantial surrounding greenery. It has not yet been reviewed closely enough to decide whether the foliage should be retained or edited; no purchase or final selection has been made.
- Agreed not to purchase assets until they have been tested against the clearing background and their licences checked. Natural foliage may be useful rather than something that must automatically be cut away.
- Identified and downloaded a promising sunrise woodland/meadow background at 5807 × 7748 pixels. It is still a candidate: create a separate 16:9 landscape crop, preserve the original, and verify the source/licence before publishing.
- No code changes, background integration, or first-flower implementation were completed in this session. The next session should continue with the crop and candidate asset evaluation, then move into the first integration.
- The creator wrapped up for the night and plans to resume after sleeping.



### November 13, 2026 — Revised progression and Leo interaction

- Confirmed the preferred experience/build order: finish the lily clearing and its five personal messages; then the garden puzzle; then Leo's hidden clearing; then the beach. The forest is now a lower-priority optional area to attempt last.
- Confirmed Leo will be interactable: desktop hover changes the cursor to a hand/pointer, clicking pets him and plays a gentle purr, and tapping provides the same interaction on mobile. The response should be repeatable, subtle, and affectionate, with a silent fallback if audio is unavailable or muted.
- Revised the accelerated four-week milestones to reflect this sequence: Week 1 lily-clearing prototype; Week 2 five lily messages and puzzle; Week 3 Leo's clearing and beach; Week 4 optional forest, atmosphere, testing, and release.
- The creator confirmed that the lily-clearing background has already been cropped to landscape locally. Upload to GitHub is still pending; the source/licence must also be verified before public use.
- No website code, scene integration, flower interaction, or Leo interaction was implemented as part of this planning update.
