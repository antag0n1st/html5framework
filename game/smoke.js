(function(window,undefined){
    
    function Smoke(){
        this.initialize();
    }    
    
    Smoke.prototype = new Sprite();
    Smoke.prototype.sprite_initialize = Smoke.prototype.initialize;    
    Smoke.prototype.initialize = function(){        
        this.sprite_initialize('smoke');
        
        this.duration = 500;
        this.direction = new Vector(1,1);
        this.direction.setAngle(Math.degrees_to_radians(180));
        this.trust_magnitude = 180/1000;
        this.total_time=0;
        
        this.begin_scale = 0.1;
        this.end_scale = 0.7;
        
        this.begin_alpha = 0.9;
        this.end_alpha = 0.0;
                
        this.set_scale(this.begin_scale);
        this.set_alpha(this.begin_alpha);
        
        this.width = this.image.width;
        this.height = this.image.height;
        
    };
    
    Smoke.prototype.on_added_to_parent = function(parent){
        Drawable.prototype.on_added_to_parent.call(this,parent);        
    };
    
    Smoke.prototype.on_remove_from_parent = function(parent){
        Drawable.prototype.on_remove_from_parent.call(this,parent);        
    };
    
    Smoke.prototype.update = function(dt){
        var pos = this.get_position();
       
        this.direction.setLength(dt*this.trust_magnitude);
        pos.add(this.direction);
        this.set_position(pos.x,pos.y);
        
        
        this.total_time += dt;
        
        var t = this.total_time / this.duration;
        
       
        
        if(t > 1.0){
            this.remove_from_parent();
        }else{
           
           
            
            var f =  this.begin_scale + (this.end_scale - this.begin_scale)*t;
    
            var a =  this.begin_alpha + (this.end_alpha - this.begin_alpha)*t;
            
            this.set_scale(f);
            this.set_alpha(a);
            
        }
        
    };
    
    
    
    Smoke.prototype.clear = function(context){
        
    };
    
    window.Smoke = Smoke;
    
}(window));