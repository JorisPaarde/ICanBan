# Tests and bugreports:

- [User story testing](#user-story-testing)
- [Responsive layout testing](#responsive/visual-layout-testing)
- [Menu testing](#menu-testing)
- [Email form testing](#email-form-testing)
- [Settings page testing](#settings-page-testing)
- [Icanban functionality testing](#icanban-functionality-testing)
- [Bugs during development](#bugs-encountered-during-development-and-their-fixes)

# User story testing:

## General functionality:

<br>
<br>

### As a First Time Visitor, I want to:
---
user story|implementation
----|----
Get a short description about what ICanBan is. | At the top of the index page there is a short description of icanban. It mentions: " a simple way for you to organise your tasks"
Have quick access to more information on Kaban. | On the index page there is a link to wikipedia (More information on Kanban.)
Have a clear understanding of the controls on the page. | On the index page there is a clear section displaying all controls on the page.
Have Quick access to navigation on the site. | The navigation menu is directly on the top right of the page. It displays all the sub pages. On mobile the burger menu needs to be expanded before being able to continue to another part of the site.

<br>
<br>

### As a Returning Visitor, I want to:
---
user story|implementation
----|----
Quickly access my personal Kanban page without having to go trough the menu. | Links where added to the index and settings page for extra fast access to the mycanban page. Especially on mobile, when the burger menu collapses this saves the user the time to go trough the burger menu.
Give feature suggestions for the site. | To achieve this, An email form is placed at the bottom of the index page.

<br>
<br>

## Settings functionality:
<br>

### As a visitor to the settings page , I want to:
---
user story|implementation
----|----
Change the site to dark mode or light mode. | A simple slider switch has been placed on the settings menu page.
Add or remove a column to my Kanban. | This can be achieved again by a slider switch on the settings page.
Change the name of a column. | Simply clicking on the menu text allows the user to adjust the name.

<br>
<br>

## Kanban functionality:

### As a visitor to MyKanban page , I want to:
---
user story|implementation
----|----
Add a card to a column. | Clicking the plus icon adds a card to that column. it also gets focus so the user can immediately start typing.
Enter text in a new card. | This can be done at any moment by clicking the text. Also as mentioned before when adding a new item.
Move a card to another column. | Arrows indicating where the card will move to when clicked, are on all cards. These are also responsive, so they change on mobile or desktop.
Expand or contract the size of a column. | The available direction (expand or contract) is automatically displayed. When both are irrelevant due to not enough items, the controls are hidden altogether.
Delete a card. | Simply pressing the trashcan deletes an item. Confirmation is asked to prevent deleting by accident.
Only be presented with usefull controls in a canban item. | All controls are hidden/shown when they are relevant to keep the UI clean.
Easily be able to access all columns on all screensizes and orientations. | This is achieved on mobile by the contract expand controls. wich are positioned on top so the user doesn't have to scroll too much to control the size of a column.

<br>
<br>

## Responsive/visual layout testing

### Homepage

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Navigation menu|Collapses and/or stays readable and doesn't overflow|Resized screen from large(width 1920px), down to small(width 280px)|Menu collapses on medium screen size, text stays readable, no items are overflowing.
Main text area|Stays readable and doesn't overflow |Resized screen from large to small|Correct
Canban page image|Image is sharp and doesn't obscure other content|Resized screen from large to small|Correct, breaks on screens smaller than 200px width, this was ignored as these are almost never used.
Links on page|Items react as intended when mouse hovers over |Hover over with mouse |Links change mouse cursor to pointer as intended.
General controls|Items are readable and layout stays intact |Resized screen from large to small|Correct
General controls|Items react as intended when mouse hovers over |Hover over with mouse |Hover on settings items on index page seemed to indicate they were clickable.|Adjusted css so they don't respond to hover.
Email form|Form doesn't overflow and placeholder text stays readable|Resized screen from large to small|Placeholder text disappears partially on screen-width of 310px and smaller| Adjusted font size to 0.8rem on smallest screens.
Decoration columns|only display on medium screensizes and above|Resized screen from large to small|Correct

---

### Settings page

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Navigation menu|Collapses and/or stays readable and doesn't overflow|Resized screen from large(width 1920px), down to small(width 280px)|Menu collapses on medium screen size, text stays readable, no items are overflowing.
Dark mode|When switch is clicked the css varables change|Click switch|Correct display of darkmode
Column text adjust textfield|Stays readable and doesn't overflow|Resized screen from large to small|Correct
Slider buttons|Animate slide when clicked|Click switch|Correct
Slider buttons|Form stays as intended|Resized screen from large to small|Settings buttons on galaxy fold (width 280px) or smaller where broken.| Reduced the padding on the columns of the settingsmenu. Still breaks on screens smaller than 260px width, this was ignored as these are almost never used.
Decoration columns|only display on medium screensizes and above|Resized screen from large to small|Correct

---

### MyCanban page

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Navigation menu|Collapses and/or stays readable and doesn't overflow|Resized screen from large(width 1920px), down to small(width 280px)|Menu collapses on medium screen size, text stays readable, no items are overflowing.

<br>
<br>

## Menu testing

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---

## Email form testing

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---

## Settings page testing

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---

## Icanban functionality testing

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---


## Bugs encountered during development and their fixes:

| Bug | Fix |
|-----|-----|
| The logo would expand on larger screen sizes due to justify content space between. | Placed the div's in a logo div to keep them together. |
| The menu layout broke on smallest screen sizes. | Added a media query to resolve this. |
| The email form enter name field was targeted in css by accident. | Css for menu items was made more specific. |
| Decorative columns where not the right size on all screens. | Adjusted CSS to make them 100% height. |
| When typing a name for a column the text wasn't saved when clicking outside the field with mouse. | Added focusout function. |
| when pressing enter, focus stays on settings text field. | Added blur to checkText function. |
| when loading site with empty memory darkmode was not initialized correctly. | Corrected the value. |
| Settings for darkmode did not display correctly. | Added inner html change on the settings menu. |
| On ipad in portrait mode the canban item controls did not display correctly. | Adjusted the media query. |
| Error message when clicking on text area of a canban item. | Added checking the current page for various functions. |
| Item not deleted from memory when clicking delete modal. | Added thisitemkey parameter to the confirm delete modal function. |
| Save on enter did not work on new added items. | Changed keydown listener to column instead of textarea itself. |
| Resize animation did not work first time after reload. | Added style="display: block;" to new added items html. |
| Resize icon hidden on desktop when coming from mobile. | Added show always when on desktop. |