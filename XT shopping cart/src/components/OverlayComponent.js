export default class OverlayComponent{
    constructor(parent,dataCounter,operation){
        this.parent=parent;
        this.dataCounter=dataCounter;
        this.operation=operation;
        this.render();
    }
    render(){
        let markUp=`
            <div class="overlay">
                <section class="overlayLeft"> </section>
                    <
                <section class="overlayRight"></section>
            </div>
        `;
        switch(this.operation){
            case 'add':break;
        }
    }
}