// #Example

// Class Media.
function Media(name) {
  this.name = name;
}

// Here we create a constructor called Media
// Within this comstractor 'this' keyword uses to create instance attributes
// To add methods to this class you just want to add them to the class's prototype
Media.prototype.getName = function () {
  return this.name;
};

// To create instance of this class you only need to invoke the constractor with the
// 'new' keyowrd
var file = new Media("file name");
file.getName();

// To create a class that inherits from Media, it gets a little more complex

// Class Movie
function Movie(name, mimeTypes) {
  Media.call(this, name); // Call the superclass's constructor in the scope of this.
  this.mimeTypes = mimeTypes; // Add an attribute to Movie
}
// --- start inherite from Media class
Movie.prototype = new Media(); // Set up the prototype chain.
Movie.prototype.constructor = Movie; // Set the constructor attribute to Movie.

// add new methods to Movie
Movie.prototype.getMimeTypes = function () {
  // Add a method to Movie.
  return this.mimeTypes;
};

const movies = [];

movies[0] = new Movie("Home Alone", ["mp4"]);
movies[1] = new Movie("In Time", ["mp4", "mkv"]);

movies[1].getName();
movies[1].getMimeTypes();

// All of the complexity of classical inheritance lies within the class declaration.
// Creating new instances is still simple.

// In order to make the class declaration more simple, you can wrap the whole
// subclassing process in a function, called extend.
/* Extend function. */
function extendMethod(_Class, superClass) {
  var Func = function() {};
  Func.prototype = superClass.prototype;
  _Class.prototype = new Func();
  _Class.prototype.constructor = _Class;

  // Ensuring that the constructor attribute is set correctly on the superclass
  // (even if the superclass is the Object class itself).
  _Class.superclass = superClass.prototype;
  if(superClass.prototype.constructor == Object.prototype.constructor) {
    superClass.prototype.constructor = superClass;
  }
}

// inheritance using extendMethod

extendMethod(Movie, Media)
// .... Movie can use Media stuffs

