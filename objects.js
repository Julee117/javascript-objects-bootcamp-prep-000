var playlist = {};
var playlist = {alicia: "Empire"};

function updatePlaylist(playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]:songTitle})
}
