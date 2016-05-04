# Scotch Music Player
A SoundCloud music player, built in Electron, alongside Christian Wamba's excellent [scotch.io tutorial](https://scotch.io/tutorials/build-a-music-player-with-react-electron-i-setup-basic-concepts). Initially very very close to the original version in the tutorial, but I am in the process of redesigning the app.

## TODO
* Fix spacing issues on progress bar (try flexbox?)
* Completely redesign the app visuals (lol)
* Look into refactoring container component (currently does way too much)
* Add unit tests?
* Look into using local storage somehow (perhaps with electron-json-storage)
* Login functionality?
* Play from clicked point on progress bar (use click event on progress bar; use the event's offsetX prop)
