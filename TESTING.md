

Bugs encountered during development:

- Logo would expand on larger screen sizes due to justify content space between. placed div's in a logo div to keep them together.
- menu broke on smallest screen sizes. added media query.
- email form enter name field was by accident targeted in css. made css for menu items more specific.
- decorative columns where not the right size on all screens. added a fuction to calculate the right hight for them. adjustDecoDivs.
- when rotating the screen on tablet these dcorative column's height was not correct. added onorientationchange eventlistener.
- when typing a name for a column the text wasn't saved when clicking outside the field with mouse. added focusout function.
- when pressing enter, focus stays on settings text field. added blur to checkText function.
- when loading site with empty memory darkmode was not initialized correctly. corrected value.
- settings for darkmode did not display correctly. added inner html change.
- On ipad in portrait mode the canban item controls did not display correctly. adjusted media query.
- error message when clicking on text area of a canban item. added != statement.
- item not deleted when clicking delete modal. added thisitemkey parameter to function.
- when minimizing a column on mobile, when returning to desktop the items are still hidden.
- save on enter did not work on new added items, changed keydown listener to column in stead of textarea itself.
- resize animation did not work first time after reload. added style="display: block;" to items html.
- resize icon hidden on desktop when coming from mobile. added shoa always on desktop.