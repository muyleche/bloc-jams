var collectionTemplate = 
    '<div class="collection-album-container column fourth">'
  + '    <a href="album.html">'
  + '      <div class="image-container">'
  + '         <img src="assets/images/album_covers/01.png"/>'
  + '         <div class="label">X songs</div>'
  + '      </div>'
  + '    </a>'
  + '    <p class="caption">'
  + '      <a class="album-name" href="album.html">The Colors</a>'
  + '      <br/>'
  + '      Pablo Picasso'
  + '    </p>'
  + '  </div>';
window.onload = function () {
  var collectionContainer = document.getElementsByClassName('album-covers')[0];
  collectionContainer.innerHTML = '';
  for (var i = 0; i < 12; i++) {
    collectionContainer.innerHTML += collectionTemplate;
  }
};