const api =
  "https://api.themoviedb.org/3/discover/movie?sort_by=popularity.desc&api_key=aa6a6e392be039e51dd071c493d6300f&page=2";
const img_path = "https://image.tmdb.org/t/p/w1280";
const searchapi =
  "https://api.themoviedb.org/3/search/movie?&api_key=aa6a6e392be039e51dd071c493d6300f&query=";
const search = document.getElementById("query");
const section = document.getElementById("main");
const form = document.getElementById("form");
returnMovies(api);
function returnMovies(url) {
  fetch(url)
    .then((res) => res.json())
    .then(function (data) {
      console.log(data.results);
      section.innerHTML = "";
      data.results.forEach((element) => {
        if (element.poster_path != null) {
          section.innerHTML += `<div class="column">
    <div class="card">
      <center>
        <img src="${img_path + element.poster_path}" class="thumbnail" />
      </center>
      <h3>${element.title}</h3>
    </div>
</div>;`;
        }
      });
    })
    .catch((error) => {
      console.error("Error fetching data:", error);
    });
}
form.addEventListener("submit", (e) => {
  e.preventDefault();
  section.innerHTML = "";
  const searchItem = search.value;
  if (searchItem) {
    returnMovies(searchapi + searchItem);
    search.value = "";
  }
});
