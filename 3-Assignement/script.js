const apikey = '331cf46acb67103cbabf484fbe02f413'
const url = 'https://www.themoviedb.org/t/p/w533_and_h300_bestv2'

let movie = 'Titanic'


addEventListener('load',(e) => {

    let MovieInfo = document.getElementById('infodiv')
    GetTMDBinfo(movie).then(data => {
        movie = data.results[0]
        MovieInfo.innerHTML = `
        <div id="Main">
            <p>
            <b>Title : </b>${data.results[0].title}
            </p>
            <p>
            <img src=" ${url + data.results[0].backdrop_path}"/>
            </p>
            <p>
            <b>Release date : </b> ${data.results[0].release_date}
            </p>
        </div>
        <div class="form-example" onsubmit="ActoValidate(this,event)">
            <label for="name"><b>Actor Name :</b></abbr></label>
            <input type="text" required name="name" id="name">
            <button type="submit">Validate</button>
        </div>
        `
    })
})


function GetTMDBinfo(request) { 

    return new Promise((resolve, reject) => {

        let url = "https://api.themoviedb.org/3/search/movie?query=" + request + "&api_key=" + apikey + "&language=en-US"
        fetch(url).then((res) => {
            return res.json()
        }).then(data => {
            resolve(data)
        }).catch((err) => {
            reject(err)
        })
    })
}