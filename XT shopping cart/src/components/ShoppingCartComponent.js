import ItemComponent from './itemComponent';
import ShoppingCartService from '../service/dataLayer';
import CarouselComponent from './CarouselComponent';

export default class ShoppingCartComponent{
    constructor(parent){
        this.parent=parent;
        this.shoppingCartService=new ShoppingCartService();
        this.render();
    }
    render() {
        this.shoppingCartService.getData().then((result)=>{
    
            let markup =`<div class="shopping-cart">
                <div class="title">
                YOUR SHOPPING BAG
                </div>
                <header class="headerClass">
                <div class="header1">${result.items.length} ITEMS</div>
                <div class="header2">SIZE</div>
                <div class="header3">QTY</div>
                <div class="header4">PRICE</div>


                </header>
                <div id="itemsDiv"></div>
                
            </div>
            <div id="carousel" class="suggestions"></div>
            <div id="overlay"><div>`;
            $(this.parent).html(markup);

            result.items.forEach(item => {

                new ItemComponent('#itemsDiv', item);

            });
           
            new CarouselComponent('#carousel');
            // ${result.items.map(item => new ItemComponent(item).render()).join('')}
            // return markup;
        });  
    }
}