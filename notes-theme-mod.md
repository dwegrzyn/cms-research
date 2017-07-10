## Files:
- fbapp/public/Moderna/scraped_homepage_moderna_adaptation.html 
- fbapp/public/Medicio/scraped_homepage_medicio_adaptation.html

(Both Moderna & Medicio use Bootstrap)

***

## MODERNA - HOME

### Stuff Changed:
- ul change class .subMenu to .dropdown-menu
- li change class .dropdOwn to .dropdown
- added classes for nav, ul, and li
- added wrapped divs for sections & subsections (containers, rows, cols)
- changed header from h1 to a, added span for color of first letter
- Made footer + sub-footer with contact info (extra containers/rows/widget class)
- skipped Portfolio section and extra Footer Widgets

### For the dynamic content demo (not part of theme):
- adjusted buttons (added own custom CLICKABLE class) 
- added js for button listeners to tailor content onclick for researchers, clinicians, families, and coaches

### Unique Elements:
  —slider (ul with li containing img, caption div, and see more link)
  —boxes AKA readmore modules (had to rearrange text into box divs)


### Issues:
- slider image heights not auto adjusted (need to be same height)
- boxes heights not auto adjusted (fit to contents, not all same height)
- menu subheaders no longer link to a page, just open submenu

***
## MEDICIO - HOME

### Stuff Changed (from Moderna adaption to Medicio):
- body classes (scroll top)
- changed logo area “.container” div to “.top-area”
- inserted “container”, “row”, “cols” for top area of header
- added container for bottom area of header
- changed outer header div to “.navbar-custom”
- added extra classes to “collapse” menu container (<nav> in this case)
- got rid of Home menu link (redundant)
- added container, margin/padding/filler divs to top of photo gallery
- changed slider to carousel for featured (photos)gallery
- added divs for owl carousel
- changed li to div and added class “item” for carousel images 
  — works with keeping li and adding “item” class to it, but need to remove bullet point with styling
- added padding classes
-added intro section

### Unique Elements:
- boxes (similar to Moderna, slightly diff classes/styling)
- reviews section
- sortable image (staff) section
- package section
- animation classes (fadeIn/bounceIn/wow/etc)
- carousel
- padding classes (nopadding, paddingtop-40, etc)

### Issues:
- 1 pager theme - Doesn’t really seem to fit with content
- boxes are the same but other widgets (doctors, plans, features) don’t make sense with content

***

## COMMON ELEMENTS between themes

- “Callaction” sections
- Top Menus:
	- hold ul links in a “collapse” class div
	- use same dropdown classes
	- hold entire nav/header area inside a “navbar” classed element
	- use “navbar-brand” for logo link
- Menu DIFFERENCES:
	- Moderna: no nav tags (hold everything in header/ container div)
	- Medicio: no header tags (hold everything in nav/ container div)	
	- Medicio: split top and bottom areas
	- Moderna: split into header (name) and link areas

- Boxes for features
- Footer/Sub-Footer
