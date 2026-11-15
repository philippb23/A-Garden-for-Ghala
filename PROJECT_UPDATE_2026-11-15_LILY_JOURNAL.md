# Project Update — November 15, 2026

## Lily discovery system and Discovery Journal

The scene-navigation scaffold remains complete and locally tested. Development has now moved to the Lily Clearing's interaction layer.

### Confirmed design decisions

- Every lily can bloom when clicked/tapped; ordinary lilies do not reveal messages.
- Exactly five special lilies will reveal creator-written/approved personal discoveries.
- Each special lily has a stable unique ID and can increase the discovery count only once.
- The subtle counter tracks progress from 0/5 to 5/5.
- A Discovery Journal will let Ghala revisit messages from lilies she has already discovered.
- The journal must show only discovered entries. It must not spoil undiscovered messages or reveal the locations of special lilies.
- The Muthhila entry will retain a distinct Arabic-first, right-to-left presentation; lyrics and the creator's own note must be visually separate.
- The five special lily assets and their positions will be chosen after the flower imagery and clearing layout have been arranged.
- The Puzzle will unlock only after all five unique special lilies have been discovered. Temporary test shortcuts remain until the real gate is implemented and tested.

### Technical direction

Use a data-driven message registry separate from the flower image markup. Each special lily references a unique ID; the registry holds its title, message content, language/direction, and eventually its presentation type. Discovery state controls the counter and which entries appear in the journal. Reopening a journal entry must not count as a new discovery.

### Current status

A first pass of the bloom animation, discovery counter, and message reveal has been drafted in the local prototype. The later data-driven message-registry refactor and browser behaviour still need verification. The Discovery Journal is approved in concept but is not yet implemented. No final lily positions, personal message wording, or full lyric text are recorded here.

### Next steps

1. Verify the current data-driven lily interaction code in the browser.
2. Add the journal interface and discovered-entry list.
3. Implement reopening a discovered message without recounting it.
4. Add the distinct Arabic-first presentation capability for the Muthhila entry.
5. Add and test the five-discovery puzzle gate, then remove temporary bypass buttons.

Keep implementation in small, testable steps. Do not mark planned features complete until tested locally.
