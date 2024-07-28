function moviesValidations(movieObject) {
  if (
    !movieObject.title ||
    !movieObject.year ||
    !movieObject.director ||
    !movieObject.duration ||
    !movieObject.genre ||
    !movieObject.rate ||
    !movieObject.poster
  ) {
    return false;
  }
  return true;
}
module.exports = moviesValidations;
