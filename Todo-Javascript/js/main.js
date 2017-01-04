var form = document.querySelector( 'form' ),
  list = document.querySelector( 'ul' ),
  input = document.querySelector( '.add' );

// ADD TODO

form.addEventListener( 'submit', function ( e ) {
  e.preventDefault();

  var new_todo = document.createElement( 'li' ),
    text_new_todo = document.createElement( 'p' ),
    checkbox = document.createElement( 'input' );

  checkbox.type = "checkbox";
  checkbox.className = "finish";
  text_new_todo.innerHTML = input.value;

  new_todo.appendChild( checkbox );
  new_todo.appendChild( text_new_todo );
  list.appendChild( new_todo );

  // REMOVE TODO
  var todos = document.querySelectorAll( '.finish' );
  for ( var i = 0; i < todos.length; i++ ) {
    todos[ i ].addEventListener( 'click', function () {
      var p = this.parentElement.children[ 1 ];

      // Tasks check or not
      if ( this.parentElement.children[ 0 ].checked ) {
        p.style.textDecoration = "line-through";
      } else {
        p.style.textDecoration = "none";
      }
    } );
  }
} );
