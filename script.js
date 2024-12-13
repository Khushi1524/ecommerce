const productImage = []


const row = document.querySelector(".row");
const cardStructure = 

`<div class="card">
                        <div class="container">
                            <div class="firstbx">
                                <div class="imgbx">
                                    <span class="new">New</span>
                                    <img src="assets/Furniture-1.png" alt="">
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
                                <div class="txt">
                                    <p>$98.00</p>
                                    <h4></h4>
                                </div>

                            </div>
                        </div>
                    </div>`

for (let i = 0; i < 8; i++) {
  row.innerHTML += cardStructure;
}
