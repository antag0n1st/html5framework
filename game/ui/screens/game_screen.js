(function(window, undefined) {

    function GameScreen() {
        this.initialize();
    }

    GameScreen.prototype = new Screen();
    GameScreen.prototype.screen_initialize = GameScreen.prototype.initialize;

    GameScreen.prototype.initialize = function() {
        this.screen_initialize();  
        
                        
        this.plane = new Plane();
        this.plane.set_position(300,240);
        this.plane.play('fly');
        
        this.hero = new Sprite('hero');
        this.hero.set_position(200,100);
        this.hero.set_anchor(0.5,0.5);
        this.hero.rotate_to(30);
        this.add_child(this.hero);
        
        
        this.hero2 = new Sprite('hero');
        this.hero2.set_position(400,100);
        this.hero2.set_anchor(0.5,0.5);
        this.hero2.rotate_to(30);
        this.add_child(this.hero2);
        
//        hero_tween = new TweenTime(1,new Bezier(.17,.67,.64,.98),800);        
//        hero_tween.run();
        
//        hero_tween = new TweenRotate(hero,-1,new Bezier(1,.18,.76,.83),2000);        
//        hero_tween.run();
        
//        hero_tween = new TweenRotateBy(hero,90,null,1000);        
//        hero_tween.run();
        
//        hero_tween = new TweenRotateTo(hero,90,new Bezier(.32,.99,.67,1.35),1000);        
//        hero_tween.run();

        hero_tween = new TweenPulsate(this.hero,0.05,null,300);        
        hero_tween.run();
                
        this.up_key = false;
        this.down_key = false;
        
        this.add_child(this.plane);
        
        var that = this;
        
        this.kibo = new Kibo();
        
        this.kibo.down('left', function() {
            that.up_key = true;          
        }).down('right', function() {
            that.down_key = true;
        });
        
        
        this.kibo.up('left', function() {
            that.up_key = false;          
        }).up('right', function() {
            that.down_key = false;
        });
        
    };   

    GameScreen.prototype.game_over = function() {
        this.is_game_over = true;
    };

    GameScreen.prototype.update = function(dt) {
        
       // console.log(dt);

        if(this.up_key){
            this.plane.steer_up(dt);
        }
        
        if(this.down_key){
            this.plane.steer_down(dt);
        }
        
        var y = Math.sin(Math.degrees_to_radians(this.plane.angle));
        this.plane.velocity.setY(y*0.2*dt);
        
        var p = this.plane.get_position();
        p.add(this.plane.velocity);
        this.plane.set_position(p.x,p.y);
        
        
        

    };

    GameScreen.prototype.show = function() {
        Screen.prototype.show.call(this);
    };

    GameScreen.prototype.hide = function() {
        Screen.prototype.hide.call(this);
    };

    window.GameScreen = GameScreen;

}(window));