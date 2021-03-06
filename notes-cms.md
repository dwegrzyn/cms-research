
## Files:
- grav-with-bones-theme: an installation of grav with admin plugin and bones theme
- automad: installation of automad


***

## FLATFILE CMS RESEARCH

- Automad (PHP)
	- no online demo
	- markdown editing 
	+ browser-based GUI
	+ more intuitive representation of data used by template (blanks to fill for page variables)
	+ templates/themes can use page variables to fill in content
	+ documentation
	- limited community support (not many detailed tutorials, forums, etc)
	+ simpler/cleaner file layout
	- no pre-made themes besides default

- Typesetter
	+ includes themes (but quality/variety questionable)
	- less grid flexibility
	+ WSIWYG editor
	- online demo available


- Pulse
	- costs $$$
	+ mobile editor
	- build with blocks
	- not intuitive
	- online demo available
	- WSIWYG editor supposedly
	- not sure how to have client just create pages based on template or something

- Grav (PHP)
	- markdown editing
	- uses Twig php templating engine 
	+ various plugins available
	+ admin dashboard plugin
	+ existing themes / modifications
	+ custom page variables
	- no online demo
	+ bigger community
	+ good documentation
	- more complex file layout than automad
	- uses yaml “blueprints” (not sure exactly how these work)
	+ “module” template allows pages to be built from templated sections (bootstrap style)


- WonderCMS
	+ in page editing
	- not sure about consistent styling/theming
	- not many plugins/themes
	+ TINY (5 files)

- razorCMS (PHP)
	+ edit in page
	- no online demo

- Others:
	- Siteleaf
	- Statamic
	- Processwire - don't think this is flat-file
	- Anchor (PHP?)- only supports latest browsers
	- Cloud Cannon - Jekyll / Ruby

***

## TESTING:

### GRAV DOWNLOAD NOTES

- Download zip file
- Have to run php server from root folder (grav-admin) in terminal (view on localhost)
- php -S localhost:8000 system/router.php
	- admin plugin doesn't work with php server though (needs apache or similar)

- Edit local files or install admin plugin to enable GUI
	- local folder: grav/user/pages
	- Can make admin account (add “/admin” to end of your site’s url)
	- https://learn.getgrav.org/admin-panel



### AUTOMAD DOWNLOAD NOTES

- Download zip file
- Have to run php server from root folder (www) in terminal (view on localhost)
- php -S localhost:8000

- Edit local files or use online GUI
	- local folder: automad/www/pages
	- Can make admin account for web GUI (add “/gui” to end of localhost url)
- GUI:
	- Page variables (title, content, tools) let templates be abstracted
	- Can choose different layouts which prompt user for different input

## THOUGHTS

Grav/Automad already converting markdown to html with the php
- but how to alter the theming or templates?
- how to make sure structure works with the theme?

Seems like a lot of extra work to make something like Medicio/Moderna work with Grav/Automad
- basically have to make a new theme 
- which includes css but also php conversion, making templates, yaml, etc
- it’s supposed to be “easy” to convert html but don’t see much documentation for it
- update: better to do conversion with javascript so probably not considering automad/grav

1. what is “ideal” html? What needs to be done to abstract it and make it theme-able?
2. how to apply theme (“ideal” html -> js/css -> styled html)
3. how to make markdown into “ideal” html


