# Tests and bugreports:

- [User story testing](#user-story-testing)
- [Responsive layout testing](#responsive/visual-layout-testing)
- [Menu testing](#menu-testing)
- [Email form testing](#email-form-testing)
- [Settings page testing](#settings-page-testing)
- [Icanban functionality testing](#icanban-functionality-testing)
- [Browser testing](#browser-testing)
- [Validators](#validators)
- [Lighthouse Report](#lighthouse-report)
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

# Responsive/visual layout testing

## Homepage

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Navigation menu|Collapses and/or stays readable and doesn't overflow|Resized screen from large(width 1920px), down to small(width 280px).|Menu collapses on medium screen size, text stays readable, no items are overflowing. Breaks below 280px width, this was ignored as these are almost never used.
Main text area|Stays readable and doesn't overflow.|Resized screen from large to small.|Correct.
Canban page image|Image is sharp and doesn't obscure other content.|Resized screen from large to small.|Correct, breaks on screens smaller than 200px width, this was ignored as these are almost never used.
Links on page|Items react as intended when mouse hovers over.|Hover over with mouse.|Links change mouse cursor to pointer as intended.
General controls|Items are readable and layout stays intact.|Resized screen from large to small.|Correct
General controls|Items react as intended when mouse hovers over.|Hover over with mouse.|Hover on settings items on index page seemed to indicate they were clickable.|Adjusted css so they don't respond to hover.
Email form|Form doesn't overflow and placeholder text stays readable.|Resized screen from large to small.|Placeholder text disappears partially on screen-width of 310px and smaller.| Adjusted font size to 0.8rem on smallest screens.
Decoration columns|Only display on medium screensizes and above.|Resized screen from large to small.|Correct.

<br>

## Settings page

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Navigation menu|Collapses and/or stays readable and doesn't overflow.|Resized screen from large(width 1920px), down to small(width 280px).|Menu collapses on medium screen size, text stays readable, no items are overflowing. Breaks below 280px width, this was ignored as these are almost never used.
Dark mode|When switch is clicked the css varables change.|Clicked switch.|Correct display of darkmode.
Column text adjust textfield|Stays readable and doesn't overflow.|Resized screen from large to small.|Correct.
Slider buttons|Animate slide when clicked.|Clicked switch.|Correct.
Slider buttons|Form stays as intended.|Resized screen from large to small.|Settings buttons on galaxy fold (width 280px) or smaller where broken.|Reduced the padding on the columns of the settings menu. Still breaks on screens smaller than 260px width, this was ignored as these are almost never used.
Decoration columns|Only display on medium screensizes and above.|Resized screen from large to small.|Correct.

<br>

## MyCanban page

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Navigation menu|Collapses and/or stays readable and doesn't overflow.|Resized screen from large(width 1920px), down to small(width 280px).|Menu collapses on medium screen size, text stays readable, no items are overflowing. Breaks below 280px width, this was ignored as these are almost never used.
Canban columns|Never overlap and change to rows on screems smaller than 768px.|Resized screen from large to small.|Displays correctly.
Canban items|Display as squares on 768px and up and display as rows on smaller screens.|Resized screen from large to small.|No issues, text and icons are displayed as intended until 270px width. Below that the placeholder text is partially disappearing, this was ignored as screens this small are almost never used.
Canban item controls,moving an item|Stay visible when needed and dissapear when unnecessary. Not overflowing.|Resized screen from large to small.|Arrows for moving items change direction as intended. Only relevant directions are displaying.
Canban item controls,deleting an item|Stay visible when needed and dissapear when unnecessary. Not overflowing.|Moving items from one column to another.|Trashcan Only displays on relevant locations.(deliberately not displaying on the middle column to declutter UI)
Column expand/contract icon|Stay visible when needed and dissapear when unnecessary. Not overflowing.|Resize columns by clicking the icon and removing/adding items to a column.|Icon changes on resize correctly, dissapears on mobile when there are no items to hide, appears when there are items to hide. Indicates the amount of hidden items correctly.
Add canban item plus|Stays readable and doesn't overflow.|Resized screen from large(width 1920px), down to small(width 280px).|No issues.

<br>
<br>

# Functional testing

## Menu

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Menu links|Direct the user to the right page.|Clicked all links in the menu. Repeated on all pages|All links behave correctly.
Logo|Clicking the logo brings the user back to the main page.|Clicked logo text and logo itself.|Clicking the text behaves as intended. The logo itself does nothing| As this is also clearly indicated by the mouseover transition to pointer this will stay as is.

<br>

## Email form

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Enter fullname|Reject fullname shorter than 5 characters.|Entered "ab c" and "ab cd" as a name.|Rejected and accepted as intended.
Enter fullname|Reject fullname without at least one space.|Entered "JohnDoe" and "John Doe".|Rejected and accepted as intended.
Enter fullname|Reject fullname that doesn't include letters.|Entered "!@#$" and "    ".|Rejected both as intended.
Enter email|Reject adress without a "@" or a ".".|Entered mail adresses "abc@abc" and "abc.abc" and "a@b.c".|Both incomplete email adresses where rejected, last one was accepted.
Enter email|Reject email adress shorter than "a.b@c".|Entered "a.@c".|Modal shows rejected email but send anyway.|Corrected email validation code.
Enter email|Reject email adress with no characters after "@".|Entered "abc.@".|Rejected as intended.
Enter Feature|Reject feature request shorter than 4 characters.|Entered "abc" and "abcd".|Rejected and accepted as intended.
Enter Feature|Reject feature request with less than 4 letters.|Entered "a!!!!" and "aaa!!!!" and "this!!!".|Rejected and accepted as intended.

<br>

## Settings page

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Dark mode|Change css values on all pages.|Clicked button and navigate to all pages to check result.|Button animates correctly and site displays in darkmode.
Switch column on/off|Click all switches and check if column dissapeared on mycanban page. Then clicked all switches again to check if they reappear.|Works as intended.
Change column name|Added "!" after all column names and changed one to "I can change this column name" then change them back to original|Works as intended.
Change column name|Allow max 35 letters as a name|Changed name to "To do this is stupid and breaks the layout of the site"|Name cut of at "To do this is stupid and breaks the"|Works as intended.
Save settings|All settings remain saved when reloading the page.|Reloaded page after changing all settings using "ctrl F5".|Works as intended.
Link to mycanban page|Brings user to mycanban page.|Clicked link.|Works as intended.

<br>

## Icanban functionality

feature|expected behaviour|testing|result|Fix(if needed)
---|---|---|---|---
Moving up and down arrows(mobile|Moves the item to the direction intended.|Clicked up and down arows of several items|Sometimes on a physical mobile device the user input was not registering. Added a border to the controls to increase the clickable area. This improved usability greatly.
Moving left and right arows|Moves the item to the direction intended.|Clicked left and right arows of several items|Works as intended.
Trashcan|Removes the clicked item after displaying a confirmation modal|Clicked trashcan on items in all columns then negated and confirmed deletion.|Works as intended.
Expand/contract column (mobile)|Hides all items, but one, in this column and displays the amount hidden next to the icon.|Clicked icon on column with 5 items|Works as intended. When moving from mobile to desktop items stay hidden, but the amout hidden is stil displayed, clicking the icon again reveals them. This may be something to look into for a future version. 
Expand/contract column|Expand or contract the column where the icon is in, according to the displayed icon|Clicked the icon in several columns|Works as intended. There is a case where all three columns are contracted where not all realestate on the screen is maximally used, this however can be simply fixed by the user by clicking one column he or she wishes to expand.
Add item|Adds an item to the clicked column and lets the user immediately edit it|Clicked all plus icons.|Works as intended.
Change item name|Can change name of an item when clicking on it. Then the name is saved on enter and mouse click.|Clicked item then typed in "Changed" and pressed enter. Clicked again and typed "Changed again" and clicked mouse outside the item. |Works as intended.
Change item name|Allow max 35 letters as a name.|Changed name to "To do this is stupid and breaks the layout of the site".|Name cut of at "To do this is stupid and breaks the". Works as intended.

<br>

# Browser testing

Browser|layout correct|functionality correct|Issues
---|---|---|---
Opera|Yes|Yes|None
Chrome|Yes|Yes|None
Edge|Yes|Yes|None
Firefox|Yes|Yes|None

<br>

# Validators

## To validate the html and CSS [W3C markup validation](https://validator.w3.org/) was used.
The initial response for the HTML was as follows:

![initial html validation](readme-images/html-validation-first.png)

<br>
After adressing the results this was the reponse:
All pages where tested and had these results.

![Second pass validation](readme-images/html-validation-after.png)

<br>
For the CSS the results were as follows:

![CSS validation](readme-images/css-validation.png)

<br>

## For Javascript validation [JSHint](https://jshint.com/) was used.

Results:

file|line|waring/error|fix
---|---|---|---
icanban.js|203 and 204 |Variable not declared properly.|Added let variable.
icanban.js|225| Confusing use of '!'. |Corrected "!variable > 0" changed to "variable == 0"
email.js|92|'modal' is already defined.|removed var
email.js|98|Missing semicolon.|fixed
email.js|104|Missing semicolon.|fixed
email.js|105|Unnecessary semicolon.|fixed
email.js|63|undefined variable emailjs.|This is part of the emailjs script
email.js|53|unused variable: sendMail.|This function is called in the html

<br>

# Lighthouse Report 

## index page on desktop:

![Lighthouse reults](readme-images/lighthouse-test.png)

<br>

# Bugs encountered during development and their fixes:

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