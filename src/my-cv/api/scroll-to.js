  const scrollTo = (e, target) => {
    e.preventDefault()
      let elTarget = document.getElementById(target)
      window.scrollTo({
      'behavior': 'smooth',
      'left': 0,
      'top': elTarget.offsetTop
    });
  }
  export default scrollTo