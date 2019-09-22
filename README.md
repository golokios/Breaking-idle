
# Breaking idle V. 0.20 Alpha
http://breakingidle.bplaced.net/ 
Hi, this game is based on my idle.js Library.  
I want this game to be as open source as possible, so anyone who wants something in it, just write me add it yourself. Within the coming days, i will hopefully have a domain, so that i don't have to use this crappy free hoster anymore.  
  
Progression isn't perfect yet and defenetly needs some more tweaking.  
If you want anything changed, just write me or add it yourself :).
## How to
Just copy all the files into a folder and open the index.html file in your favourite browser.
### Create upgrades(assets/js/upgrades.js)
In the upgrades.js file you can create upgrades.  
Everything you need to know is in this file
#### Game settings
In the asstes/js/game.js file can you change the basic game settings. If you want to change the look of the game, you need to have BootstrapStudio or be good at HTML.

    let gameData = {
    money: 0,
    moneyPerSecond: 0,
    moneyPerClick: 0.01,
    meth: 0,
    methPerSecond: 0,
    methPerClick: 0,
    methPrice: 5,
    clicked: 0,
    clickLimit: 1,
    }
## Change log:
### *V. 0.21 Alpha: Grammar Changes*
-- Better grammar and name changes
### *V. 0.20 Alpha: Content Patch*
-- Added 3 new Meth upgrades
-- Added 3 new Meth --> Money upgrades
-- Added one time Upgrades on the right of the screen
-- Tweaked some more numbers (still needs alot of testing)
-- Bugfixing
-- Removed the "meth clicker" aspect of the game

### *V. 0.11 Alpha: Small fixes and tweaks*
-- Changed the pricing a bit
-- Fixed a few things in the background
-- Fixed 1 spelling error

### *V. 0.10 Alpha: First public release*
-- First release of this game
-- 7 Different upgrades
-- 2 Different Recourses
-- Programmed to be easy to maintain and add stuff in the future
-- Savegame functionality (probably crappy and needs to be rewritten some day)
