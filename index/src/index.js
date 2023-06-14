import React from 'react';
import ReactDOM from 'react-dom/client';
import Products from './products';
import './css/sideBar.css';

var logoBtn = document.getElementById('logo-btn');
var topBtn = document.getElementById("top-btn");

const products = ReactDOM.createRoot(document.getElementById('products'));
const infoBar = ReactDOM.createRoot(document.getElementById('infoBar'));

var cat = "all"; // "all", "food", "bottled", "hot", or "tea"
var viewMode = "insta"; // "insta" or "list"
var sortMode = "cat"; // "cat", "lp", "hp", "az", or "za"

// window sizing functions and vars
var width = window.innerWidth;
function setDimension(){
    width = window.innerWidth
    renderSideBar();
}
window.addEventListener('resize', setDimension);


const changeMenu = (menu) => {
    cat = menu;
}

const renderSideBar = () => {
    infoBar.render(
        <div>
            {width >= 847 ? ( 
                <div className='info-con'>
                    {document.getElementsByClassName('container-grid')[0].classList.remove("container-flex")}
                    {document.getElementById('products').classList.remove("products-flex")}
                    <ul className='info-list'>
                        <li><h2 className='list-title'>Catagories</h2></li>
                        <ul className='info-item-list'>
                            {cat === "all" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          </svg><button className='clicked' onClick={All}>All</button></li>) : (<li className="info-item"><button onClick={All}>All</button></li>)}
                            {cat === "food" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          </svg><button className='clicked' onClick={Food}>Food</button></li>) : (<li className="info-item"><button onClick={Food}>Food</button></li>)}
                            {cat === "bottled" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          </svg><button className='clicked' onClick={Bottled}>Bottled</button></li>) : (<li className="info-item"><button onClick={Bottled}>Bottled</button></li>)}
                            {cat === "hot" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          </svg><button className='clicked' onClick={Hot}>Hot Drinks</button></li>) : (<li className="info-item"><button onClick={Hot}>Hot Drinks</button></li>)}
                          {cat === "tea" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                            <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                          </svg><button className='clicked' onClick={Tea}>Tea</button></li>) : (<li className="info-item"><button onClick={Tea}>Tea</button></li>)}
                        </ul>
                        <li><h2 className='list-title'>Sort By</h2></li>


                        <ul>
                        {sortMode === "cat" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg><button className='clicked' onClick={Cat}>Catagories</button></li>) : (<li className="info-item"><button onClick={Cat}>Catagories</button></li>)}
                        {sortMode === "lp" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg><button className='clicked' onClick={LP}>Lowest Price</button></li>) : (<li className="info-item"><button onClick={LP}>Lowest Price</button></li>)}
                        {sortMode === "hp" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg><button className='clicked' onClick={HP}>Highest Price</button></li>) : (<li className="info-item"><button onClick={HP}>Highest Price</button></li>)}
                        {sortMode === "az" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg><button className='clicked' onClick={AZ}>A-Z</button></li>) : (<li className="info-item"><button onClick={AZ}>A-Z</button></li>)}
                        {sortMode === "za" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-check2" viewBox="0 0 16 16">
                        <path d="M13.854 3.646a.5.5 0 0 1 0 .708l-7 7a.5.5 0 0 1-.708 0l-3.5-3.5a.5.5 0 1 1 .708-.708L6.5 10.293l6.646-6.647a.5.5 0 0 1 .708 0z"/>
                      </svg><button className='clicked' onClick={ZA}>Z-A</button></li>) : (<li className="info-item"><button onClick={ZA}>Z-A</button></li>)}
                        </ul>


                        <li><h2 className='list-title'>Layout</h2></li>
                        <ul>
                            { viewMode === "insta" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                            <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                          </svg><button className='clicked' onClick={Insta}>Instaview</button></li>) : (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-tv" viewBox="0 0 16 16">
                          <path d="M2.5 13.5A.5.5 0 0 1 3 13h10a.5.5 0 0 1 0 1H3a.5.5 0 0 1-.5-.5zM13.991 3l.024.001a1.46 1.46 0 0 1 .538.143.757.757 0 0 1 .302.254c.067.1.145.277.145.602v5.991l-.001.024a1.464 1.464 0 0 1-.143.538.758.758 0 0 1-.254.302c-.1.067-.277.145-.602.145H2.009l-.024-.001a1.464 1.464 0 0 1-.538-.143.758.758 0 0 1-.302-.254C1.078 10.502 1 10.325 1 10V4.009l.001-.024a1.46 1.46 0 0 1 .143-.538.758.758 0 0 1 .254-.302C1.498 3.078 1.675 3 2 3h11.991zM14 2H2C0 2 0 4 0 4v6c0 2 2 2 2 2h12c2 0 2-2 2-2V4c0-2-2-2-2-2z"/>
                        </svg><button className='not-clicked' onClick={Insta}>Instaview</button></li>)}
                            { viewMode === "list" ? (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                            <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                          </svg><button className='clicked' onClick={List}>List</button></li>) : (<li className="info-item"><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-list-ul" viewBox="0 0 16 16">
                          <path fill-rule="evenodd" d="M5 11.5a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm0-4a.5.5 0 0 1 .5-.5h9a.5.5 0 0 1 0 1h-9a.5.5 0 0 1-.5-.5zm-3 1a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2zm0 4a1 1 0 1 0 0-2 1 1 0 0 0 0 2z"/>
                        </svg><button className='not-clicked' onClick={List}>List</button></li>)}
                        </ul>
                        <hr/>
                        <li className='contact-item'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-telephone" viewBox="0 0 16 16">
                        <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z"/>
                      </svg><a href='tel://+639166278397'>+639166278397</a></li>
                        <p></p>
                        <li className='contact-item'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-instagram" viewBox="0 0 16 16">
                        <path d="M8 0C5.829 0 5.556.01 4.703.048 3.85.088 3.269.222 2.76.42a3.917 3.917 0 0 0-1.417.923A3.927 3.927 0 0 0 .42 2.76C.222 3.268.087 3.85.048 4.7.01 5.555 0 5.827 0 8.001c0 2.172.01 2.444.048 3.297.04.852.174 1.433.372 1.942.205.526.478.972.923 1.417.444.445.89.719 1.416.923.51.198 1.09.333 1.942.372C5.555 15.99 5.827 16 8 16s2.444-.01 3.298-.048c.851-.04 1.434-.174 1.943-.372a3.916 3.916 0 0 0 1.416-.923c.445-.445.718-.891.923-1.417.197-.509.332-1.09.372-1.942C15.99 10.445 16 10.173 16 8s-.01-2.445-.048-3.299c-.04-.851-.175-1.433-.372-1.941a3.926 3.926 0 0 0-.923-1.417A3.911 3.911 0 0 0 13.24.42c-.51-.198-1.092-.333-1.943-.372C10.443.01 10.172 0 7.998 0h.003zm-.717 1.442h.718c2.136 0 2.389.007 3.232.046.78.035 1.204.166 1.486.275.373.145.64.319.92.599.28.28.453.546.598.92.11.281.24.705.275 1.485.039.843.047 1.096.047 3.231s-.008 2.389-.047 3.232c-.035.78-.166 1.203-.275 1.485a2.47 2.47 0 0 1-.599.919c-.28.28-.546.453-.92.598-.28.11-.704.24-1.485.276-.843.038-1.096.047-3.232.047s-2.39-.009-3.233-.047c-.78-.036-1.203-.166-1.485-.276a2.478 2.478 0 0 1-.92-.598 2.48 2.48 0 0 1-.6-.92c-.109-.281-.24-.705-.275-1.485-.038-.843-.046-1.096-.046-3.233 0-2.136.008-2.388.046-3.231.036-.78.166-1.204.276-1.486.145-.373.319-.64.599-.92.28-.28.546-.453.92-.598.282-.11.705-.24 1.485-.276.738-.034 1.024-.044 2.515-.045v.002zm4.988 1.328a.96.96 0 1 0 0 1.92.96.96 0 0 0 0-1.92zm-4.27 1.122a4.109 4.109 0 1 0 0 8.217 4.109 4.109 0 0 0 0-8.217zm0 1.441a2.667 2.667 0 1 1 0 5.334 2.667 2.667 0 0 1 0-5.334z"/>
                      </svg><a href='https://instagram.com/altitude.ph'>@altitude.ph</a></li>
                        <p></p>
                        <li className='contact-item'><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-geo-alt" viewBox="0 0 16 16">
                        <path d="M12.166 8.94c-.524 1.062-1.234 2.12-1.96 3.07A31.493 31.493 0 0 1 8 14.58a31.481 31.481 0 0 1-2.206-2.57c-.726-.95-1.436-2.008-1.96-3.07C3.304 7.867 3 6.862 3 6a5 5 0 0 1 10 0c0 .862-.305 1.867-.834 2.94zM8 16s6-5.686 6-10A6 6 0 0 0 2 6c0 4.314 6 10 6 10z"/>
                        <path d="M8 8a2 2 0 1 1 0-4 2 2 0 0 1 0 4zm0 1a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
                      </svg><a href='https://www.google.com/maps?q=0720+Sanchez+Street,+Brgy+9,+Malaybalay,+Bukidnon&safe=active'>0720 Sanchez Street, Brgy 9, Malaybalay, Bukidnon</a></li>
                    </ul>
                </div>
            ) : (
                <div>
                    {document.getElementsByClassName('container-grid')[0].classList.add("container-flex")}
                    {document.getElementById('products').classList.add("products-flex")}
                </div>
                )}
        </div>
    );
}

// cat display functions
const All = () => {
    changeMenu("all");
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();

}

const Food = () => {
    changeMenu("food");
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const Bottled = () => {
    changeMenu("bottled");
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const Hot = () => {
    changeMenu("hot");
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const Tea = () => {
    changeMenu("tea");
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const Insta = () => {
    viewMode = "insta";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const List = () => {
    viewMode = "list";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const Cat = () => {
    sortMode = "cat";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}


const LP = () => {
    sortMode = "lp";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const HP = () => {
    sortMode = "hp";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const AZ = () => {
    sortMode = "az";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const ZA = () => {
    sortMode = "za";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

const Reset = () => {
    cat = "all";
    viewMode = "insta";
    sortMode = "cat";
    products.render(
        <Products display={cat} view={viewMode} sortType={sortMode}/>
    );
    renderSideBar();
}

logoBtn.addEventListener('click', Reset);
All();
renderSideBar();

