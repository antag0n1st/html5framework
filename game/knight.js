//(function(window,undefined){
    
    function Knight(){
        this.initialize();
    }    
    
    Knight.prototype = new SpineAnimation();
    Knight.prototype.spine_initialize = Knight.prototype.initialize;    
    Knight.prototype.initialize = function(){        
        this.spine_initialize('knight'); // your image name
        
    };
    
    Knight.prototype.on_added_to_parent = function(parent){
        Drawable.prototype.on_added_to_parent.call(this,parent);
        
    };
    
    Knight.prototype.on_remove_from_parent = function(parent){
        Drawable.prototype.on_remove_from_parent.call(this,parent);
        
    };
        
    Knight.prototype.update = function(dt){
        SpineAnimation.prototype.update.call(this,dt);
        
    };
    
    Knight.prototype.on_note = function(event_name,data,sender){
        log('knight event_name: '+event_name);
        log("data: "+data);
        log(sender);
    };
    
    Knight.prototype.on_spine_event = function(trackIndex, event){
       // log(event);
    };
    
    
//    window.Knight = Knight;
    
//}(window));