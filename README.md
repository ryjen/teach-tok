# TeachTok

A demo application for displaying multiple-choice questions in a TicTok style interface.

## Notes

### clean architecture

- Separation of application layers
- data flows from data layer, to domain, to application, to presentation
- redux actions dispatch data flow through the layers
- could use dependency injection and immutables but left out for now
- use cases become react hooks

### get next question

**design**:

- reuses caching features of network queries for scroll performance
- maintains an internal sequential index for caching

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

## backend

- API is not idempotent, meaning returns different result for same arguments
