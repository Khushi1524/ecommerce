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
    }
];

const row = document.querySelector(".row");

const  Images = productImage.flatMap((obj) => Object.values(obj));

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
    row.innerHTML += cardStructure;
}




const bestSellerRow = document.querySelector(".bestSellerRow");

for (let i = 1; i <= 3; i++) {
  let headerText = "Best Seller"; 
  if (i === 2) headerText = "New Arrival";
  else if (i === 3) headerText = "Featured";

  const bestSellerColumn = `
        <div class="bestSellerColumn">
            <div class="top-row">
                <p>${headerText}</p>
                <div class="pre-next">
                    <p id="back"><i class="fas fa-chevron-left arrow"></i>Back</p>
                    <p>Next<i class="fas fa-chevron-right arrow"></i></p>
                </div>
            </div>
            
            <div class="card-bx">
                <div class="card">
                    <div class="imgbx">
                        <img src="assets/Picture-1.png" alt="">
                    </div>
                    <div class="contentbx">
                        <h4>Petite Table Lamp</h4>
                        <p>$19.00 $21.00</p>

                        <div class="btn">
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-bx">
                <div class="card">
                    <div class="imgbx">
                        <img src="assets/Picture-1.png" alt="">
                    </div>
                    <div class="contentbx">
                        <h4>Petite Table Lamp</h4>
                        <p>$19.00 $21.00</p>

                        <div class="btn">
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>

            <div class="card-bx">
                <div class="card">
                    <div class="imgbx">
                        <img src="assets/Picture-1.png" alt="">
                    </div>
                    <div class="contentbx">
                        <h4>Petite Table Lamp</h4>
                        <p>$19.00 $21.00</p>

                        <div class="btn">
                            <button>Add to Cart</button>
                        </div>
                    </div>
                </div>
            </div>
        </div>`;
  bestSellerRow.innerHTML += bestSellerColumn;
}

