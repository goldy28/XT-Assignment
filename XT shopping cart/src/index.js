import ShoppingCartComponent  from './components/shoppingCartComponent';


class MainComponent{
    constructor(){
        this.shoppingCart = new ShoppingCartComponent('#homeDiv');
        
    }
    
}
new MainComponent();


