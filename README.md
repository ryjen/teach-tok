# TeachTok

A demo application for displaying multiple-choice questions in a TicTok style interface.

Made with ♥ in VIM.

![screenshot](doc/screenshot.png)

## Notes

- clean architecture as a foundation
- feature based modules
- Separation of application layers
- data flows in one direction from data layer, to domain, to application, to presentation
- redux actions dispatch data flow through the layers
- could use dependency injection and immutables but left out for now
- use cases become react hooks

### get next question

**design**:

- reuses caching features of network queries
- maintains an internal cache of prefetched items

**process**:

- use cases makes current request for data
- maps the data to the domain layer and preloads the image
- prefetches the next by repeating in the background

### time in app

- keeps a counter in redux store
- sets a timer ever minute
- calculates difference
- dispatch redux action to update UI

### UI

- colors separated for theming
- 'for you' screen is the home tab
- areas in screen are components
- data loaded from a use case
- loading, empty and error states handled
- data from the domain layer combined and provided in a context for components

### scrolling

- a gesture handler in the 'for you' screen detects swipes up and down
- a up swipe will display the next prefetched question
- a down swipe will display the previous question in cache

## Design Flaws

- backend returns a single result
-

## Testing

- left out, my code is perfect, not using CI
