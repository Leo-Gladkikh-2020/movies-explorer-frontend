export function conversionDuration(duration) {
  const hours = Math.floor(duration / 60);
  const minutes = duration % 60;
  if (hours === 0) {
    return `${minutes}м`;
  } else {
    return `${hours}ч ${minutes}м`;
  }
}

export function filterMovies(movies, setSearch, checkboxStatus) {
  let moviesToFilter = movies;
  let result;
  if (checkboxStatus) {
    moviesToFilter = moviesToFilter.filter((movie) => movie.duration <= 40);
  }
  result = moviesToFilter.filter((movie) => {
    return movie.nameRU.toLowerCase().indexOf(setSearch.toLowerCase()) !== -1;
  })
  return result;
}