class Box extends BaseClass {
  constructor(x, y, width, height){
    var options={
      stiffness:0.00001
    }
    super(x,y,width,height,options);
    this.image = loadImage("sprites/wood1.png");
  }

};
