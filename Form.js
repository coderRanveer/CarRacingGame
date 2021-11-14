class Form {

  constructor() {
    this.input = createInput("Name:");
    this.button = createButton('Play');
    this.greeting = createElement('h2');
    this.title = createElement('h2');
    this.reset = createButton('Reset');

  }
  hide(){
    this.greeting.hide();
    this.button.hide();
    this.input.hide();
    this.title.hide();
  }

  display(){
    
   // bg = createSprite(0,0,100,100);
   // bg.addImage(bgImg);
   // image =(bgImg,0,0);
    this.title.html("Car Racing Game");
    this.title.position(displayWidth/2 - 10, -70);
    this.title.style('font-size','80px');
    this.title.style('color', 'orange');

    this.input.style('font-size','30px');
    this.input.position(displayWidth/2 - 40 , displayHeight/2 - 80);
    this.input.style('width', '300px');
    this.input.style('height', '30px');
    this.input.style('background', 'orange');
    

    this.button.style('font-size','30px');
    this.button.position(displayWidth/2 + 30, displayHeight/2);
    this.button.style('width', '200px');
    this.button.style('height', '40px');
    this.button.style('background', 'orange');

    this.reset.position(displayWidth-100,20);
    this.reset.style('background', 'orange');

    this.button.mousePressed(()=>{
      this.input.hide();
      this.button.hide();

      player.name = this.input.value();
      playerCount+=1;
      player.index = playerCount;
      player.update();
      player.updateCount(playerCount);

      this.greeting.html("Hello " + player.name)
      this.greeting.style('width', '300px');
    this.greeting.style('height', '40px');
   // this.greeting.style('background', 'orange');
   this.greeting.style('font-size','80px');
   this.greeting.style('color','orange');  
   this.greeting.position(30,-40);
    });

    this.reset.mousePressed(()=>{
      player.updateCount(0);
      game.update(0);
    });

  }
  //drawSprites();
}
