 // Example Album
 var albumPicasso = {
     title: 'The Colors',
     artist: 'Pablo Picasso',
     label: 'Cubism',
     year: '1881',
     albumArtUrl: 'assets/images/album_covers/01.png',
     songs: [
         { title: 'Blue', duration: '4:26', playCount: 5 },
         { title: 'Green', duration: '3:14', playCount: 11 },
         { title: 'Red', duration: '5:01', playCount: 1 },
         { title: 'Pink', duration: '3:21', playCount: 7 },
         { title: 'Magenta', duration: '2:15', playCount: 7 }
     ]
 };
 
 // Another Example Album
 var albumMarconi = {
     title: 'The Telephone',
     artist: 'Guglielmo Marconi',
     label: 'EM',
     year: '1909',
     albumArtUrl: 'assets/images/album_covers/20.png',
     songs: [
         { title: 'Hello, Operator?', duration: '1:01', playCount: 12 },
         { title: 'Ring, ring, ring', duration: '5:01', playCount: 3 },
         { title: 'Fits in your pocket', duration: '3:21', playCount: 10 },
         { title: 'Can you hear me now?', duration: '3:14', playCount: 6 },
         { title: 'Wrong phone number', duration: '2:15', playCount: 2 }
     ]
 };

var createSongRow = function(songNumber, songName, songLength, playCount) {
   var template =
      '<tr class="album-view-song-item">'
    + '  <td class="song-item-number">' + songNumber + '</td>'
    + '  <td class="song-item-title">' + songName + '</td>'
    + '  <td class="song-item-duration">' + songLength + '</td>'
    + '  <td class="song-item-play-count">' + playCount + '</td>'
    + '</tr>';
  return template;
};

var setCurrentAlbum = function(album) {
  var albumTitle = document.getElementsByClassName('album-view-title')[0];
  var albumArtist = document.getElementsByClassName('album-view-artist')[0];
  var albumReleaseInfo = document.getElementsByClassName('album-view-release-info')[0];
  var albumImage = document.getElementsByClassName('album-cover-art')[0];
  var albumSongList = document.getElementsByClassName('album-view-song-list')[0];
  
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
    + '    </thead>';
  forEach(album.songs, function(song, index) {
    albumSongList.innerHTML += createSongRow(index+1,song.title, song.duration,song.playCount);
  });
}
window.onload = function() {
  setCurrentAlbum(albumPicasso);
};