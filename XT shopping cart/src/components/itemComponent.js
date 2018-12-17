export default class ItemComponent{
    constructor(parent,item){
      this.parent=parent;
        this.imgUrl=item.imgUrl;
        this.brand= item.brand;
        this.description=item.description;
        this.quantity=item.quantity;
        this.size=item.size;
        this.price=item.price;

        this.render();
    }
    render(){
        let markUp=` <div class="item">
        <div class="image">
          <img src=${this.imgUrl}  />
        </div>
     
        <div class="description">
          <span>
              ${this.brand}
          </span>
          <span>${this.description}</span>
          
          <div class="buttons">
              <button class="btns">EDIT</button>
              <button class="btns">X REMOVE</button>
              <button class="btns">SAVE FOR LATER</button>
          </div>
        </div>

        <div class="size">
          ${this.size}
        </div>
     
        <div class="quantity">
          ${this.quantity}
        </div>
     
        <div class="total-price">$ ${this.price}</div>
      </div>`;
      $(this.parent).append(markUp);

      //return markUp;
    }
}
