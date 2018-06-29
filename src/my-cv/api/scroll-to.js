const scrollTo = ( e, target ) => {
  e.preventDefault();
  window.scrollTo( {
    "behavior": "smooth",
    "left": 0,
    "top": document.getElementById( target ).offsetTop
  } );
};

export default scrollTo