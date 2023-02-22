const apiKey = "6MEHfoXaFzCyYoE4t5uX04OcEuMjqP1YQpnLVZfBpOA";
const apiUrl = `https://api.unsplash.com/search/photos?client_id=${apiKey}&query=dress`; //get imgs of "dress"

const fetchImages = async () => {
    const response = await axios.get(`${apiUrl}`);
    const images = response.data.results;
    return images;
}

const displayImages = async () => {
    const images = await fetchImages();
    const imageContainer = document.querySelector("#js_section-ul");

    console.log(images[7]);

    imageContainer.innerHTML =
    `
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[0].urls.small}" alt="item">
            </a>
            <div>
                <p>Red sleeveless dress / $30</p>
                <button class="js_cart_btn" data-name="Red sleeveless dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[1].urls.small}" alt="item">
            </a>
            <div>
                <p>Green dress / $30</p>
                <button class="js_cart_btn" data-name="Green dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[2].urls.small}" alt="item">
            </a>
            <div>
                <p>Pale blue dress / $30</p>
                <button class="js_cart_btn" data-name="Pale blue dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[8].urls.small}" alt="item">
            </a>
            <div>
                <p>Floral pattern dress / $30</p>
                <button class="js_cart_btn" data-name="Floral pattern dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[4].urls.small}" alt="item">
            </a>
            <div>
                <p>Ethnic floral dress / $30</p>
                <button class="js_cart_btn" data-name="Ethnic floral dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[5].urls.small}" alt="item">
            </a>
            <div>
                <p>Black knit dress / $30</p>
                <button class="js_cart_btn" data-name="Black knit dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[6].urls.small}" alt="item">
            </a>
            <div>
                <p>White mini dress / $30</p>
                <button class="js_cart_btn" data-name="White mini dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
        <li class="section-li">
            <a href="productDetail">
                <img class="item-panel" src="${images[7].urls.small}" alt="item">
            </a>
            <div>
                <p>Black leather dress / $30</p>
                <button class="js_cart_btn" data-name="Black leather dress" data-price="30"><i class="fa-solid fa-cart-shopping"></i></button>
            </div>
        </li>
    `;
}

displayImages();