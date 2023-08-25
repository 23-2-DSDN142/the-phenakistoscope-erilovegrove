const SLICE_COUNT = 10; //max and min slice count in brief

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("quark" , "png");
  pScope.load_image("dimple" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 107, 115, 114);  //lets us draw the whole circle background, ignoring the boundaries, basically the colour of circle

  var layer4 = new PLayer(laa);
  layer4.mode( RING );
  layer4.set_boundary( 800, 1000 );
  
  var layer5 = new PLayer(mee);
  layer5.mode( RING );
  layer5.set_boundary( 800, 1000 );

  var layer1 = new PLayer(quarks); //this layer pertains to the faces function
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(dimples);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer3 = new PLayer(hmm);
  layer3.mode( RING );
  layer3.set_boundary( 400, 1000 );

  
  
}

function mee(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 4; //18
  let backgroundArcStart = 270 - angleOffset; //270-18 = 252
  let backgroundArcEnd = 270 + angleOffset; //292

  fill(0, 0, 0);
  arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background



}

function laa(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  // let angleOffset = (360 / SLICE_COUNT) / 2; //18
  // let backgroundArcStart = 270 - angleOffset; //270-18 = 252
  // let backgroundArcEnd = 270 + angleOffset; //292

  fill(0, 0, 0);
  arc(x,y,1700,1700,252,292); // draws "pizza slice" in the background



}

function quarks(x, y, animation, pScope){
  
  scale(animation.frame*2);
  scale (0.5);

  pScope.draw_image("quark",animation.wave(2)* 100,y);

}

function dimples(x, y, animation, pScope){

  
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  let angleOffset2 = (360 / SLICE_COUNT) / 4;
  let backgroundArcStart2 = 270 - angleOffset2;
  let backgroundArcEnd2 = 270 + angleOffset2;

  fill(234, 218, 247)
  arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(245, 98, 12)
  arc(x,y,400,800,backgroundArcStart2,backgroundArcEnd2); // draws "pizza slice" in the background

  scale (animation.wave()*1, 1);
  pScope.draw_image("dimple",-10,-300-animation.wave()*50);
  

}

function hmm(x, y, animation, pScope){
  //push()
  scale(1)
  if(animation.frame == 0){
  pScope.draw_image("quark",x,y);
  }
  //pop()
  translate(animation.frame, 0);
  scale(animation.frame*2);
  fill(196, 252, 255)
  
  let ballSize  = 100 + (animation.wave(1)* 20)
  let bouce = 50* animation.wave()
  pScope.draw_image("dimple",150,800+bouce, ballSize);
  
  

}

