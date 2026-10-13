# TeachTok

An application for displaying multiple-choice questions in a TicTok style interface.

**Historical take-home exercise.** This repository preserves a time-boxed demonstration rather than a maintained application. It is not presented as current production-ready architecture or delivery practice.

Made with ♥ in VIM.

![screenshot](doc/screenshot.png)

## Notes

- clean architecture as a foundation, separation of application layers
- feature based modules ([forYou](src/feature/forYou))
- data flows in one direction from data layer, to domain, to application, to presentation
- redux actions dispatch data flow through the layers
- dependency injection and immutables but left out for now
- use case hooks

### get next question

**design**:

The app maintains an internal cache of prefetched items.

The prefetching is building the internal cache for swiping.

API calls will prefetch using an exponential backoff algorithm.

**process**:

- use cases makes current request for data
- maps the data to the domain layer and preloads the image
- prefetches the next

### time in app

- keeps a counter in redux store
- sets a timer for every minute
- calculates difference
- dispatch redux action to update UI

## Design Flaws

- backend returns a single random result, not idempotent

## Testing

- Automated tests and CI were omitted under the original exercise constraints. That omission is a known quality gap, not a recommendation for current projects.
