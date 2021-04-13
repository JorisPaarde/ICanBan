# Tests and bugreports:

- [User story testing](#user-story-testing)
- [Responsive layout testing](#responsive-layout-testing)
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
Quickly access my personal Kanban page without having to go trough the menu. |
Give feature suggestions for the site. | To achieve this, An email form is placed at the bottom of the index page.

<br>
<br>

## Settings functionality:
<br>

### As a visitor to the settings page , I want to:
---
user story|implementation
----|----
Change the site to dark mode or light mode. |
Add a column to my Kanban. |
Change the name of a column. |

<br>
<br>

## Kanban functionality:

### As a visitor to MyKanban page , I want to:
---
user story|implementation
----|----
Add a card to a column. |
Enter text in a new card. |
Move a card to another column. |
Expand or contract the size of a column. |
Delete a card. |
Only be presented with usefull controls in a canban item. |
Easily be able to access all columns on all screensizes and orientations. |

<br>
<br>

## Responsive layout testing

settings buttons on galaxy fold (width 280px) where broken. fixed by reducing the padding on the columns of the settingsmenu.

## Email form testing

## Settings page testing

## Icanban functionality testing

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