# Project Update — November 16, 2026
## Puzzle world structure and Leo's Hidden Clearing direction

This update records the latest creative and implementation decisions for **A Garden for Ghala**. It documents planning only; no new website code or image assets were uploaded in this update.

### The Forgotten Puzzle

- The puzzle is intended to be a challenging mixture of investigation and physical interaction.
- Big Walk is an inspiration for environmental exploration, experimentation, and self-directed discovery. Do not copy its actual puzzles or multiplayer mechanics.
- Puzzle clues are intended to be spread across the Forgotten Forest, Lily Clearing, and Beach. Ghala should be able to discover them in any order and revisit locations without losing progress.
- The exact clue meanings, relationships, physical mechanics, and final solution are still undecided. A three-ring rotating mechanism was discussed as a possible idea, but it is not a final implementation decision.
- The aim is a satisfying moment of connecting previously discovered information, not a simple password entry or a puzzle that tells her exactly what to do.

### The hidden entrance and sealed door

- A bush on the right side of the Lily Clearing will be clickable.
- Clicking it reveals a concealed entrance and a stone doorway. Use a second image/state or scene transition rather than complex moving-bush/vine animation.
- The doorway will have inspectable stone tablets or carved panels.
- The doorway can be found and inspected before the puzzle is solved, but it remains sealed.
- Clues from the Forgotten Forest, Lily Clearing, and Beach will eventually be used to solve the puzzle.
- Solving the puzzle opens the stone door and reveals a hidden passage to Leo's Hidden Clearing.

### Leo's Hidden Clearing

- The creator selected the supplied autumn woodland photograph with a large spreading tree, golden leaves, and an existing wooden bench as the preferred background candidate.
- The creator is happy with the autumn atmosphere, even though it differs from the original green woodland/sunrise idea.
- The creator reports that the original image is 5894 × 3895 pixels. The preview shared in chat has not been committed to the repository; the original high-resolution file and licence still need to be confirmed before integration.
- Three small frames should hang from the tree branches.
- The creator supplied four real photographs/screenshots of Leo in chat. Use these real photos in the frames rather than generic cat imagery.
- Each frame should be clickable. Clicking it opens a larger view of the complete photograph; closing the view returns to the clearing.
- Defer placing Leo's actual body/cutout on the bench until a suitable photograph is available. The creator may ask for additional photos, but this is not a blocker for building the clearing and frame interactions.
- Leo's repeatable petting interaction and gentle purring remain intended features; they can be developed around a placeholder interaction area and refined when his actual image is ready.
- Keep the clearing peaceful, warm, and personal, not memorial-like.

### Next implementation steps

1. Build the Leo clearing layout using a temporary background placeholder until the original high-resolution photo and licence are available.
2. Build three hanging photo frames and a reusable photo-inspection viewer.
3. Add the Lily Clearing bush hotspot and reveal of the sealed stone doorway.
4. Add inspectable stone tablets/panels to the doorway.
5. Design the full clue set across all three locations before finalising the puzzle solution.
6. Add Leo's actual cutout and refine petting/purring after suitable imagery is available.

### Status

- The current six-screen navigation scaffold remains locally tested.
- The one-test-lily Discovery Journal flow remains the latest verified interaction milestone.
- No new HTML, CSS, JavaScript, final image assets, puzzle logic, doorway logic, photo-frame interaction, or Leo interaction was implemented in this documentation update.
