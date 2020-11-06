// 5kyu - Delegates In Our Life 

// Story
// I think most of you heard about delegates in C#. Today we need to create our own delegate in JS. Some may think that it's hard, some that it isn't. But this Kata will give you experience in JS programming.

// What is needed? OR PLAN!
// 1. create add method
// First of all you need to fill with your code add method.

// It need to:

// Throw error if argument is not a function
// Throw error if functio already exists
// Compare number of parameters and throw Error if count of parameters not equal to delegate's parameters
// Add to list of functions
// 2. create main method
// Then you need to create main method.

// It need to:

// Compare parameters count
// Compare types of parameters with initialization types
// Execute all functions
// 3. create anything else
// Description
// Your delegate will receive variable amount of types as string

// You can get type of variable using preloaded function GetType( obj )

// Also all types that you need are preloaded. You can see list of types below:

// // BASIC TYPES
// TYPE_BOOL = GetType( true );
// TYPE_NUMBER = GetType( 0 );
// TYPE_STRING = GetType( '' );
// // COMPLEX TYPES
// TYPE_OBJECT = GetType( {} );
// TYPE_FUNCTION = GetType( function() {} );
// TYPE_ARRAY  = GetType( [] );
// Now you know what you need to do. Let's begin the Kata!

function delegate(){
  let args = [], functions = [];
  for ( var i = 0; i < arguments.length; ++i ) args.push( arguments[i] );
  
  let delegate = function() {
    if (args.length != arguments.length) throw Error('Wrong parameters count');
    if (args.some((t, i) => GetType(arguments[i]) != t)) throw Error('Wrong parameter type');
    functions.forEach(f => f(...arguments));
  };
  
  delegate.add = function( func ) {
    if (GetType(func) != TYPE_FUNCTION) throw Error('Not a function');
    if (delegate.contains(func)) throw Error('Function already here');
    if (func.length != args.length) throw Error('Wrong parameters count');
    functions.push(func);
  };
  
  delegate.contains = function( func ) {
    return functions.includes(func); 
  };
  
  delegate.remove = function( func ) {
    let index = functions.indexOf(func);
    if (index == -1) throw Error('Nothing to remove');
    functions.splice(index, 1);
  };
  
  return delegate;
}

