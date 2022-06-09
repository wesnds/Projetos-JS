
const BASE_URL = 'https://thatcopy.pw/catapi/rest/';
const catBtn = document.getElementById('change-cat');

const getCats = async () => {
    try{
        const response = await fetch(BASE_URL);
        const json = await response.json(); //convertendo para json
        return json.webpurl; //webpurl = imagem comprimida
    } catch (err) {
        console.log(err.message); 
    }
}
/*
const getCats = async () => {
    const data = await fetch(BASE_URL)
    .then((res) => res.json())
    .catch((err) => console.log(err));
    return data.webpurl;
};*/

const loadImg = async () => {
    const catImg = document.getElementById('cat')
    catImg.src = await getCats();
}

//listener para o botao
catBtn.addEventListener('click', loadImg);

loadImg();

