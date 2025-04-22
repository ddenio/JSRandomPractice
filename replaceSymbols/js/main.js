// How can we replace all occurences of '&' and '<' in a string with "&amp;" and "&lt;", respectively?


function htmlspecialchars(formData) {
    return formData
    .replace('&', 'and')
    .replace('green', 'blue')
  }

console.log(htmlspecialchars('<h2> My favorite color of all time is green, & it is not blue, it is green'))