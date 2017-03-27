var createSongRow = function (songNumber, songName, songLength, playCount) {
   var template =
      '<tr class="album-view-song-item">'
    + '  <td class="song-item-number">' + songNumber + '</td>'
    + '  <td class="play-button">'
    + '    <img class="play-image" src="assets/images/play_image.png">'
    + '    <img class="pause-image" src="assets/images/pause_image.png">'
    + '  </td>'
    + '  <td class="song-item-title">' + songName 
    + '    <div class="sound-bars">'
    + '      <div class="bar bar1"></div>'
    + '      <div class="bar bar2"></div>'
    + '      <div class="bar bar3"></div>'
    + '      <div class="bar bar4"></div>'
    + '    </div>'
    + '  </td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '  <td class="song-item-play-count">' + playCount + '</td>'
    + '</tr>';
  return template;
};

var setCurrentAlbum = function (album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0],
      albumArtist = document.getElementsByClassName('album-view-artist')[0],
      albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0],
      albumImage = document.getElementsByClassName('album-cover-art')[0],
      albumSongList = document.getElementsByClassName('album-view-song-list')[0],
      currentlyPlaying;
  
  albumTitle.firstChild.nodeValue = album.title;
  albumArtist.firstChild.nodeValue = album.artist;
  albumReleaseInfo.firstChild.nodeValue = album.year + ' ' + album.label;
  albumImage.setAttribute('src', album.albumArtUrl);
  
  albumSongList.innerHTML = 
      '    <thead>'
    + '      <tr>'
    + '        <td class="song-item-number">#</td>'
    + '        <td class="play-button"></td>'
    + '        <td class="song-item-title">Title</td>'
    + '        <td class="song-item-duration">Length</td>'
    + '        <td class="song-item-play-count">Plays</td>'
    + '      </tr>'
    + '    </thead>'
    + '    <tbody>';
  
  // Add each of the album's songs to the table using the template.
  forEach(album.songs, function(song, index) {
    albumSongList.innerHTML += createSongRow(index+1,song.title, song.duration,song.playCount);
  });
  albumSongList.innerHTML += '</tbody>';
  
  var songRows = document.getElementsByClassName('album-view-song-item');
  
  // add click listener for each song row to play/pause.
  forEach(songRows, function(btn, i) {
    btn.addEventListener('click', function () {
      // determine if the current song is playing or not.
      var isPlaying = this.className.indexOf('playing') >= 0,
          countNode = this.getElementsByClassName('song-item-play-count')[0];
      
      // if a song is already playing, stop it.
      if (currentlyPlaying) { 
        currentlyPlaying.className = currentlyPlaying.className.replace(/\s?playing/g,'');
      }
      
      // if the current song wasn't already playing, play it.
      if (!isPlaying) {
        this.className += ' playing';
        //save currently playing element to the 'playing' variable for reference later.
        countNode.textContent = parseInt(countNode.textContent)+1;
        currentlyPlaying = this;
      }
    });
  });
};

window.onload = function() {
  var currentAlbum = 0;
  
  setCurrentAlbum(albums[currentAlbum]);
  
  // add click listener to each cover art to switch to next album.
  document.getElementsByClassName('album-cover-art')[0]
    .addEventListener('click',function () {
    setCurrentAlbum(albums[(++currentAlbum) % 3]);
  });
  
};