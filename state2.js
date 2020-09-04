demo.state2 = function(){};
demo.state2.prototype = {
    preload : function(){},
    create : function(){
        game.stage.backgroundColor = "#DDD345";
        addChangeStateEventListeners();
    },
    update : function(){}
}