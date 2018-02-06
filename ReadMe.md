## BlocJams
BlocJams is a simple website for streaming music. It uses HTML5 semantic tagging and CSS3 to achieve an elegant, responsive design. This version of the site does not include the ability to play music, but if you're interested in exploring more advanced versions, checkout the [React version](https://github.com/tboddyspargo/bloc-jams-react) and the [AngularJS version](https://github.com/tboddyspargo/bloc-jams-angular).

## Style
The CSS for BlocJams achieves it's responsive layout by incorporating a simplified version of [Bootstrap's grid layout](https://getbootstrap.com/docs/4.0/layout/grid/)  using `float: left;` with some padding and margins.

The site also incorporates icons from [Ionicon](http://ionicons.com/) to enhance the user experience and visual appeal.

## JavaScript
The JavaScript for BlocJams is separated out into separate files for each view to emulate a module approach. The `Collections` and `Album` views leverage functions which take an approach similar to 'virtual DOM' libraries/frameworks. Using the HTML DOM API, these functions construct HTML content that represents arbitrary numbers of albums/songs according to a standard template.

In addition to dynamically updating HTML, the `utilities.js` file includes custom functions to simulate dynamic content and dedicated resource route logic. When you click on an album link from the `Collections` view, the URL query will change to indicate the index (ID) of the album you selected. The album page will then use the query in the URL to load the corresponding album information from the `album_data.js`. The same site could easily be refactored to use a real backend database or API.

## Start Using
To see the site in action, you can fork the repository and copy it locally. Then, simply open the `index.html` file from the repository in your web browser.
