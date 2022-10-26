async function commentFormHandler( event ) {
    event.preventDefault();
    
    
    const comment_text = document.querySelector( 'input[name="comment-body"]' ).value.trim();
 
    const postid = window.location.toString().split( '/' )[
       window.location.toString().split( '/' ).length - 1
    ];
 
    if ( comment_text ) {
       const response = await fetch( '/api/comment', {
          method: 'POST',
          body: JSON.stringify({ postId, body }),
          headers: { 'Content-Type': 'application/json' }
       });
 
       if ( response.ok ) {
          document.location.reload();
       }
       else {
          alert( response.statusText );
          document.querySelector( '#new-comment-form').style.display = "block";
       };
    };
 };
 
 
 document.querySelector( '#new-comment-form' ).addEventListener( 'submit', commentFormHandler );