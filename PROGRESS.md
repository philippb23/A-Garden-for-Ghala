# A Garden for Ghala — Progress

*Last updated: November 15, 2026 — Lily discovery and journal planning*

This is the living development log. For the full creative brief, see [PROJECT_CONTEXT.md](./PROJECT_CONTEXT.md). The latest navigation and storytelling decisions are recorded in [PROJECT_UPDATE_2026-11-14.md](./PROJECT_UPDATE_2026-11-14.md); that update supersedes the older forest-last progression.

---

## 1. Current status

**Overall phase:** Foundation prototype; all six scene placeholders and basic navigation are implemented and tested locally. The Lily Clearing now has an initial click-to-bloom/message/counter prototype in local working files; the data-driven message structure and journal are still being verified and extended.  
**Project status:** Welcome → Forgotten Forest navigation works. The Forest has Path of Light → Lily Clearing and Path of Whispers → Beach. The Lily Clearing also links to a temporary Puzzle screen, which links to Leo's Hidden Clearing. Return paths from the new scenes have been tested. The puzzle and Leo buttons are temporary testing shortcuts; discovery/unlock logic is not implemented yet.  
**Target completion:** December 13, 2026  
**Backup/refinement deadline:** December 20, 2026  
**Birthday:** December 28, 2026

The landscape lily-clearing background and `assets/flowers/lily_only_no_stem.png` have been uploaded to GitHub and integrated locally. The browser screenshot has now been reviewed: the meadow background and flower composition are working, and a CSS filter adjustment was made to soften the lily's saturation and warm its colour so it better matches the sunrise scene. The Forest currently has a two-panel path layout. Beach, Puzzle, and Leo's Hidden Clearing exist as navigable placeholder screens; their final artwork and interactions remain unimplemented.

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

## 3. In progress

- [ ] Verify the current data-driven special-lily interaction locally: bloom animation, unique discovery IDs, message display, and duplicate-discovery prevention.
- [ ] Add a Discovery Journal that records only discovered special lilies and allows their messages to be reopened.
- [ ] Keep the Muthhila entry capable of an Arabic-first, right-to-left presentation, distinct from ordinary message entries.
- [ ] Unlock the Puzzle only after all five unique special lilies have been discovered; remove temporary testing shortcuts when the real gates are tested.

- [ ] Replace the temporary Forest path panels with final scene-integrated path hotspots when the forest artwork is ready.
- [ ] Replace the Beach placeholder with its final coastal scene and discoveries.
- [ ] Replace the Puzzle testing shortcut with the real puzzle, unlocked only after all five special lilies are found.
- [ ] Replace the Leo testing shortcut with the real puzzle-gated reveal and hidden clearing interactions.
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
- [ ] Leo's hidden clearing, unlocked by the puzzle, with repeatable petting and gentle purring.
- [ ] Connected point-and-click navigation and revisit paths between discovered locations.
- [ ] Piano/rain ambience and audio controls.
- [ ] Optional, user-initiated playback of the relevant “Muthhila” recording passage from an authorised embed/licensed source; lyrics remain the primary reveal and playback must not autoplay.
- [ ] Mobile and desktop testing.
- [ ] Asset licensing and credits review.
- [ ] GitHub Pages deployment and public-link testing.

## 5. Next task

**Next development session — November 15, 2026**

### Goal: Complete the reusable lily discovery and journal system

1. Verify the structured message data and unique IDs for special lilies.
2. Implement/retest click-to-bloom behaviour without making ordinary flowers reveal messages.
3. Keep the subtle discovery counter accurate from 0/5 to 5/5.
4. Add a Discovery Journal that stores only unlocked discoveries and lets the visitor reopen their messages.
5. Preserve a distinct Arabic-first, right-to-left presentation option for the Muthhila discovery.
6. Unlock access to the puzzle only after all five special lilies have been discovered. Remove the temporary testing shortcut once the real unlock flow is working.

**Definition of done:** The Lily Clearing supports repeatable, reliable flower interactions; exactly five special lilies reveal their messages; the counter updates correctly; and the puzzle becomes accessible only after all five discoveries. Test desktop and mobile input.

## 6. Milestone tracker

| Target dates | Milestone | Status |
|---|---|---|
| Nov 11–17 | Foundation, lily-clearing prototype, forest navigation structure | In progress |
| Nov 18–24 | Five lily messages and garden puzzle | Not started |
| Nov 25–Dec 1 | Leo's hidden clearing and beach environment | Not started |
| Dec 2–8 | Atmosphere, optional details, testing, first release | Not started |
| Dec 9–13 | Original buffer and contingency | Not started |
| Dec 14–20 | Final contingency/refinements if needed | Not started |

The forest is no longer an optional stretch goal: it is the opening scene and initial navigation hub. Prioritize the core forest-to-lily journey, puzzle, Leo reveal, and beach. If time becomes tight, simplify optional effects rather than leaving core interactions unfinished.

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

- Began the Lily Clearing interaction prototype: ordinary versus special lilies, bloom animation, a discovery counter, unique discovery IDs, and a data-driven message registry are the intended structure. The latest data-driven message changes still need to be verified in the browser before being marked complete.
- Confirmed the Discovery Journal concept: a small journal control in the clearing, entries appear only after their corresponding special lily is discovered, and previously unlocked messages can be reopened.
- The journal must not reveal undiscovered messages or special-lily locations. It should preserve the 0/5–5/5 progress and support a distinct Arabic-first, right-to-left Muthhila entry.
- The five flower images and their positions will be selected later, after the clearing artwork and flower placement are finalised. Do not assign final special-lily locations yet.
- Puzzle access remains gated by all five unique discoveries; current direct-entry controls are temporary testing shortcuts.
- No final personal message wording or full lyric text has been added to the public repository.
