//  this object is called the 'prototype object' because it provides
// a prototype for what the other objects should look like
/* Media Prototype Object. */
const Media = {
  name: 'default',
  getName: function() {
    return this.name;
  }
};

// First we want to create a clone method which will create cloned object of passed obj
// we will use it to create clones from the parent class
/* Clone function. */
function madeCopy (obj) {
  function F() {}
  F.prototype = obj;
  return new F;
}

let mediaObj = madeCopy(Media);
mediaObj.getName() // This will output 'default'.
mediaObj.name = 'media object';
mediaObj.getName() // This will now output 'media object'.

// to create Movie Class that inherite from Media
var Movie = madeCopy(Media);
Movie.mimeTypes = []; // Default value.
Movie.getMimeTypes = function() {
  return this.mimeTypes;
}
// The methods and attributes of this clone can then be overridden. You can change the
// default values given by Media, or you can add new attributes and methods

var movies = [];

movies[0] = madeCopy(Movie);
movies[0].name = 'Home Alone';
movies[0].mimeTypes = ['mkv'];

movies[1] = madeCopy(Movie);
movies[1].name = 'In Time';
movies[1].mimeTypes = ['mp4', 'mkv'];

movies[1].getName(); 
movies[1].getMimeTypes();

// Sometimes prototype objects will have child objects within them. If you want to override
// a single value within that child object, you have to recreate the entire thing. This can be done
// by setting the child object to be an empty object literal and then recreating it, but that would
// mean that the cloned object would have to know the exact structure and defaults for each
// child object. In order to keep all objects as loosely coupled as possible, any complex child
// objects should be created using methods:

const MediaWithDetails = {};
MediaWithDetails.name = 'deafult',
MediaWithDetails.details = function() {
  return {
    avaliable: false,
    cost: 0
  }
};
MediaWithDetails.detailsObject = MediaWithDetails.details();

var movie = madeCopy(MediaWithDetails);
movie.name = 'Home Alone';
movie.detailsObject = MediaWithDetails.details();
movie.detailsObject.avaliable = true;
movie.detailsObject.cost = 500;
