
-


1. Create window element to contain site content
	- [ ] Window should open when valid input entered on command line
	- [ ] Window content should reflect command used to open it
	- [x] improve shadow/border effect from taskbar (see reference image)
2. Error messages should reflect proper CLI format
3. "Easy mode"
	- full options menu with highlighted number to signal current selection
	- cursor keys to navigate menu
	- enter key to select menu item and begin extant load process
4. Repeated errors should change message (result in multi-window bug and BSOD if > max)
5. ~~Mock LOADING process on cli~~
6. Match window element styling 1:1 for Windows 95/98
7. Old school vs modern toggle - choose on first load and enable command switching after load (use styled-components themeing)
8. Click and drag behaviour on all windows
9. integrate games ("entertainment")
10. open window on successful command
	- [x] animate window fade-in
	- [ ] loading text & animation
11. Taskbar buttons 
	- [x] Close button should hide window & reverse animation
	- [ ] Button Click - aesthetic
12. Loading bar
	- [x] add messages to trace based on loading % (25, 50 & 75)
	- [ ] spinning slash animation looks stretched out and incomplete with simple rotate - further animation required to mimic DOS behaviour
13. Startup trace (0s and 1s image?)
14. [ ] Refactor CSS to use nested styling
15. ~~Fix trace to stack above primary input~~
16. Migrate to React
	- Global styling and variables
	- content
	- 

## Pages

All pages should follow the same styling, determined by the selected mode
### About
1. low-res image (old school)
2. high-res image (modern)
3. pre-load image on window open
4. wrapped paragraph about me
5. Work experience
	- More conversational than official CV/linkedIn
	- PDF download for CV
6. competencies 
	- low res icons (old school)
	- high res icons (modern)
	