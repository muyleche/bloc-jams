var createSongRow = function (songNumber, songName, songLength, playCount) {
   var template =
      '<tr class="album-view-song-item">'
    + '  <td class="song-item-number" data-song-number="'+songNumber+'">' + songNumber + '</td>'
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
  
};

window.onload = function() {
  setCurrentAlbum(albums[0]);
  
  document.getElementsByClassName('album-view-song-list')[0].addEventListener('mouseover', function(event) {
    var target = event.target.parentElement;
    if (target.classList.contains('album-view-song-item') && !target.classList.contains('playing')) {
      // replace the track number with the play button.
      target.querySelector('.song-item-number').innerHTML = '<a class="album-song-button ion-play"><a>';
    }
  });
  
  var currentlyPlaying,
      songRows = document.getElementsByClassName('album-view-song-item');
  
  for (var i = 0, row; i < songRows.length; i++) {
    row = songRows[i];
    row.addEventListener('mouseleave', function (event) {
      // Add mouse leave listener to display track number again.
      if (!this.classList.contains('playing')) {
        this.children[0].innerHTML = this.children[0].getAttribute('data-song-number');
      }
    });
    row.querySelector('.song-item-number').addEventListener('click', function (event) {
      // only do stuff if you clicked in the album-song-button
      if (event.target.classList.contains('album-song-button')) {
        var song = this.parentElement,
            button = event.target,
            isPlaying = currentlyPlaying === song,
            playCountNode = song.querySelector('.song-item-play-count');

        // if a song is already playing, stop it.
        if (currentlyPlaying) {
          currentlyPlaying.className = currentlyPlaying.className.replace(/\s?playing/g,'');
          // if you just stopped the current song change the icon.
          if (isPlaying) {
            if (button.classList.contains('ion-play')) { 
              button.className = button.className.replace('ion-play','ion-pause');
            }
            else {
              button.className = button.className.replace('ion-pause','ion-play');
            }
          } // reset track number if you didn't just play the current row.
          else {
            currentlyPlaying.querySelector('.song-item-number').innerHTML = currentlyPlaying.querySelector('.song-item-number').getAttribute('data-song-number');
          }
          currentlyPlaying = null;
        }

        // if the current row wasn't already playing, play it.
        if (!isPlaying) {
          song.className += ' playing';
          //save currently playing element to the 'playing' variable for reference later.
          playCountNode.textContent = parseInt(playCountNode.textContent)+1;
          currentlyPlaying = song;
          button.className = button.className.replace('ion-play','ion-pause');
        }
      }
    });
  }

};