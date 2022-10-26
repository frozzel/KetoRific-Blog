async function editFormHandler( event ) {
    event.preventDefault();
 
    const title = document.querySelector( 'input[name="post-title"]' ).value.trim();
    const body = document.querySelector( 'input[name="post-body"]' ).value.trim();
    const image = document.querySelector( 'input[name="post-image"]' ).value.trim();
 
    const id = window.location.toString().split( '/' )[
       window.location.toString().split( '/' ).length - 1
    ];
 
    const response = await fetch( `/api/posts/${postid}`, {
       method: 'PUT',
       body: JSON.stringify({ postid: id, title, body, image }),
       headers: { 'Content-Type': 'application/json' }
    });
 
    if ( response.ok ) {
       // After successfully updating a post, redirect to the dashboard
       document.location.replace('/dashboard/');
    }
    else {
       alert(response.statusText);
    };
 };
 
 async function deleteFormHandler( event ) {
    event.preventDefault();
 
    const id = window.location.toString().split( '/' )[
       window.location.toString().split( '/' ).length - 1
    ];
 
    const response = await fetch( `/api/post/${postId}`, {
       method: 'DELETE',
       body: JSON.stringify({ postId: id }),
       headers: { 'Content-Type': 'application/json' }
    });
 
    if ( response.ok ) {
       // AFter successfully deleted a post, redirect back to the dashboard
       document.location.replace( '/dashboard/' );
    }
    else {
       alert( response.statusText );
    };
 };
 document.querySelector( '.delete-btn' ).addEventListener( 'click', deleteFormHandler );
 document.querySelector( '.edit-post-form' ).addEventListener( 'submit', editFormHandler );