//nav open close
 
const navToggle = document.querySelector("#menu-btn");
navToggle.addEventListener("click", () => {
  document.querySelector("#menu").classList.add("show");
});

const navToggleClose = document.querySelector("#menu-btn2");
navToggleClose.addEventListener("click", () => {
  document.querySelector("#menu").classList.remove("show");
});

//activecls

const menuItems = document.querySelectorAll('.menus');

menuItems.forEach((item) => {
  item.addEventListener('click', function () {
    menuItems.forEach((li) => li.classList.remove('active'));
    this.classList.add('active');
  });
});


const productImage = [
  {
    src1: "assets/Furniture-1.png",
    src2: "assets/Furniture-2.png",
    src3: "assets/Furniture-3.png",
    src4: "assets/Furniture-4.png",
  },
  {
    src1: "assets/Furniture-1.png",
    src2: "assets/Furniture-2.png",
    src3: "assets/Furniture-3.png",
    src4: "assets/Furniture-4.png",
  },
];

const productsRow = document.querySelector("#productsRow");

const Images = productImage.flatMap((obj) => Object.values(obj));

for (let i = 0; i < Images.length; i++) {
  let newClassContent = "";
  if (i % 4 === 0) {
    newClassContent = `<span class="new" style="background:#212121;">New</span>`;
  } else if (i % 4 === 1) {
    newClassContent = `<span class="new" style="background: #F5540D;">Hot</span>`;
  } else if (i % 4 === 2) {
    newClassContent = `<span class="new" style="background: #189E14;">Sale</span>`;
  }

  const cardStructure = `
        <div class="card">
            <div class="card-container">
                <div class="firstbx">
                    <div class="imgbx">
                        ${newClassContent}
                        <img src="${Images[i]}" alt="">
                    </div>
                    <div class="cartbx">
                        <i style="font-size: 12px;" class="fas fa-shopping-cart"></i>
                        <h3>ADD TO CART</h3>
                        <i style="font-size: 12px;" class="fas fa-search"></i>
                        <i style="font-size: 12px;" class="far fa-heart"></i>
                        <i style="font-size: 12px;" class="fas fa-search"></i>
                    </div>
                </div><br>
                <div class="contentbx">
                    <div class="txt">
                        <p>Chanel</p>
                        <h4 id="percent">20%</h4>
                    </div>
                    <h4>Dopo Designs Woolrich Klettersack Backpack</h4>
                    <div class="txt" style="display: flex; align-items: center; justify-content: space-between;">
                        <p>$98.00</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  productsRow.innerHTML += cardStructure;
}

// left prodcut row

const productsRow2 = document.querySelector("#productsRow2");
const productsRow3 = document.querySelector("#productsRow3");

for (let i = 0; i < 3; i++) {
  let newClassContent = "";
  if (i % 4 === 0) {
    newClassContent = `<span class="new" style="background:#212121;">New</span>`;
  } else if (i % 4 === 1) {
    newClassContent = `<span class="new" style="background: #F5540D;">Hot</span>`;
  } else if (i % 4 === 2) {
    newClassContent = `<span class="new" style="background: #189E14;">Sale</span>`;
  }

  const cardStructure = `
        <div class="card">
            <div class="card-container">
                <div class="firstbx">
                    <div class="imgbx">
                        ${newClassContent}
                        <img src="${Images[i]}" alt="">
                    </div>
                    <div class="cartbx">
                        <i style="font-size: 12px;" class="fas fa-shopping-cart"></i>
                        <h3>ADD TO CART</h3>
                        <i style="font-size: 12px;" class="fas fa-search"></i>
                        <i style="font-size: 12px;" class="far fa-heart"></i>
                        <i style="font-size: 12px;" class="fas fa-search"></i>
                    </div>
                </div><br>
                <div class="contentbx">
                    <div class="txt">
                        <p>Chanel</p>
                        <h4 id="percent">20%</h4>
                    </div>
                    <h4>Dopo Designs Woolrich Klettersack Backpack</h4>
                    <div class="txt" style="display: flex; align-items: center; justify-content: space-between;">
                        <p>$98.00</p>
                        <div class="stars">
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                            <i class="fas fa-star"></i>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  productsRow2.innerHTML += cardStructure;
  productsRow3.innerHTML = cardStructure + productsRow3.innerHTML;
}

//


const bestSellerData = [
    { src: "assets/Picture-1.png", title: "Petite Table Lamp", price: "$19.00", originalPrice: "$21.00" },
    { src: "assets/Picture-2.png", title: "Original Outdoor Beanbag", price: "$50.00", originalPrice: "$71.00" },
    { src: "assets/Picture-3.png", title: "Wingback Chair", price: "$191.00", originalPrice: "$221.00" },
    { src: "assets/Picture-4.png", title: "Madra Log Holder", price: "$191.00", originalPrice: "$221.00" },
    { src: "assets/Picture-5.png", title: "Carronade Large Suspension Lamp", price: "$19.00" },
    { src: "assets/Picture-6.png", title: "Cushion Set 3 Pieces", price: "$91.00" },
    { src: "assets/Picture-7.png", title: "Garden Armchair", price: "$11.00" },
    { src: "assets/Picture-8.png", title: "2-Seater", price: "$165.00" },
    { src: "assets/Picture-1.png", title: "Petite Table Lamp", price: "$91.00" },
];

const bestSellerRow = document.querySelector(".bestSellerRow");

for (let i = 0; i < 3; i++) {
    let headerText = "Best Seller";
    if (i === 1) headerText = "New Arrival";
    else if (i === 2) headerText = "Featured";

    let cardsHtml = "";
    for (let j = 0; j < 3; j++) {
        const productIndex = i * 3 + j;
        const product = bestSellerData[productIndex];

        cardsHtml += `
        <div class="card-bx">
            <div class="card">
                <div class="imgbx">
                    <img src="${product.src}" alt="${product.title}">
                </div>
                <div class="contentbx">
                    <h4>${product.title}</h4>
                    <p>
                        <span class="current-price">${product.price}</span>
                        ${product.originalPrice ? `<span class="original-price">${product.originalPrice}</span>` : ""}
                    </p>
                    <div class="btn">
                        <button>Add to Cart</button>
                    </div>
                </div>
            </div>
        </div>`;
    }

    const bestSellerColumn = `
      <div class="bestSellerColumn">
          <div class="top-row">
              <p>${headerText}</p>
              <div class="prev-next">
                  <div class="imgbx">
                      <img src="icons/Icon-Back-Arrow.png" alt="Back">
                      <p id="back">Back</p>
                      <p>Next</p>
                      <img src="icons/Icon-Next-Arrow.png" alt="Next">
                  </div>
              </div>
          </div>
          ${cardsHtml}
      </div>`;

    bestSellerRow.innerHTML += bestSellerColumn;
}
