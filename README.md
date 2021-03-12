<h1 align="center">I CanBan</h1>

<p>description</p>

[View the live project here.](https://jorispaarde.github.io/ICanBan/)


<h2 align="center"><img src="/readme-images/mockup-image.png"></h2>


## User Experience (UX)

### User stories

### General functionality:

#### As a First Time Visitor, I want to:

1. Get a short description about what ICanBan is.
2. Have quick access to more information on Kaban.
3. Have a clear understanding of the controls on the page.
4. Have Quick access to navigation on the site.

#### As a Returning Visitor, I want to:

1. Quickly access my personal Kanban page without having to go trough the menu.
1. Give feature suggestions for the site.

### Settings functionality:

#### As a visitor to the settings page , I want to:

1. Change the site to dark mode or light mode.
1. Add a column to my Kanban.
1. Change the name of a column.

### Kanban functionality:

#### As a visitor to MyKanban page , I want to:

1. Add a card to a column.
1. Enter text in a new card.
1. Move a card to another column.
1. Expand or contract the size of a column.
1. Delete a card.
1. Only be presented with usefull controls in a canban item.
1. Easily be able to access all columns on all screensizes and orientations.

### Design

#### Colour Scheme

-   

#### Typography

 -  font

#### Imagery

-   Imagery is focused on showing 

### Mockup

-  The mockup of this site was made in Figma. U can view it [here](https://www.figma.com/file/y5LdwdHOZVvlOjnidnMRb4/ICanBan?node-id=0%3A1) 

---

## Features

### Current Features

####   All pages

-   Responsive on all device sizes
-   Collapsing hamburger menu 
-   
####   main page

-   Email form

#### settings page

-   multiple recipies for visitors to try out

#### MyCanban page

-   

### Possible future Features

-   Database
-   Accounts

---

## Technologies Used

### Languages Used

-   [HTML5](https://en.wikipedia.org/wiki/HTML5)
    - HTML5 was used to build the main structure and content of the page.
-   [CSS3](https://en.wikipedia.org/wiki/Cascading_Style_Sheets)
    - CSS3 was used to give the html styling and layout.
    And to make the page responsive to differentscreen sizes.

### Frameworks, Libraries & Programs Used

1. [Bootstrap 4.4.1:](https://getbootstrap.com/docs/4.4/getting-started/introduction/)
    - Bootstrap was used to create the responsive structure of the website.
1. [Google Fonts:](https://fonts.google.com/)
    - Google fonts was used to import the 'Montserrat' font into the style.css file.
1. [Font Awesome:](https://fontawesome.com/)
    - Font Awesome was used on all pages throughout the website to add the social icons.
1. [jQuery:](https://jquery.com/)
    - jQuery came with Bootstrap to make the navbar responsive. Also used in various script files.
1. [Git](https://git-scm.com/)
    - Git was used for version control by utilizing the terminal in gitpod to regularly commit, with comments, to Git and Push to GitHub.
1. [GitHub:](https://github.com/)
    - GitHub is used to store the projects code and assets and to fork the project for the customer.
1. [Figma:](https://figma.com/)
    - Figma was used to create the website design and prototype.
1. [TinyPNG](https://tinypng.com/)
    - TinyPNG was used to compress all images to ensure faster load times.
1. [Browserstack](https://live.browserstack.com/)
    - To test the site on a variety of devices and browsers.

---

## Testing

All testing can be found [here](https://github.com/JorisPaarde/Nomnivore-website/blob/master/TESTING.md).
Jasmin?
---

## Deployment

### GitHub Pages

The project was deployed to GitHub Pages using the following steps...

1. Log in to GitHub
2. Locate the [repository](https://github.com/JorisPaarde/ICanBan).
3. Go to settings menu: <h4 align="center"><img src="/readme-images/settings.png"></h4>
4. scroll down to the bottom of the page.
5. Select master and save. <h4 align="center"><img src="/readme-images/select-save.png"></h4>
6. View the publihed result. (This may take some time to show up correctly.) <h4 align="center"><img src="/readme-images/view.png"></h4>

### Making a Local Clone

#### To make a local clone of this project on linux , follow these steps:

1. Make sure u have git installed on your device.
   If u haven't find out how to do that [here](https://git-scm.com/book/en/v2/Getting-Started-Installing-Git).
2. Log into GitHub.
3. Locate the [repository](https://github.com/JorisPaarde/ICanBan).
4. Copy the link to the repository here: <h4 align="center"><img src="/readme-images/clone.png"></h4>
5. Open a terminal and enter the following command (inside the directory u want the repository to be placed):

```
$ git clone https://github.com/JorisPaarde/ICanBan.git

```

7. Press Enter. Your local clone will be created.

```
$ git clone https://github.com/JorisPaarde/ICanBan.git
Cloning into Git …
remote: Counting objects: 25, done.
remote: Compressing objects: 100% (25/25), done.
remove: Total 25 (delta 1), reused 0 (delta 1)
Unpacking objects: 100% (25/25), done.
```
8. your local clone is now ready.

#### To make a local clone of this project in Windows , follow [these](https://www.jcchouinard.com/clone-github-repository-on-windows/) steps:

---

## Credits

### Code

All the below mentioned code is also marked with comments in the code itself.

-   The social icons code came from 

### Content

-   
-   All other content was written by the developer.
-   All texts where reviewed by Melinda Schuurmans.

### Media

-   Foto's
-   Images
-  

### Acknowledgements

-   My Mentor for his helpful feedback and upfront warnings for common mistakes. This saved me a lot of time.
-   My fellow students and several other mentors on Slack for their debugging tips.
-   The basic Readme layout by Code Institute.

Bugs:

Logo would expand on larger screen sizes due to justify content space between. placed div's in a logo div to keep them together.
menu broke on smallest screen sizes. added media query.
email form enter name field was by accident targeted in css. made css for menu items more specific.
decorative columns where not the right size on all screens. added a fuction to calculate the right hight for them. adjustDecoDivs.
when rotating the screen on tablet these dcorative column's height was not correct. added onorientationchange eventlistener.
when typing a name for a column the text wasn't saved when clicking outside the field with mouse. added focusout function.
when pressing enter, focus stays on settings text field. added blur to checkText function.
when loading site with empty memory darkmode was not initialized correctly. corrected value.
settings for darkmode did not display correctly. added inner html change.
On ipad in portrait mode the canban item controls did not display correctly. adjusted media query.
error message when clicking on text area of a canban item. added != statement.