const SLICE_COUNT = 10; //max and min slice count in brief

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("star" , "png");
  pScope.load_image("eye" , "png");
}

function setup_layers(pScope){

  new PLayer(null, 39, 52, 139);  //lets us draw the whole circle background, ignoring the boundaries, basically the colour of circle

  var layer4 = new PLayer(blackcircle);
  layer4.mode( RING );
  layer4.set_boundary( 800, 1000 );
  
  var layer5 = new PLayer(blackoutersegment);
  layer5.mode( RING );
  layer5.set_boundary( 800, 1000 );

  var layer1 = new PLayer(stars); //this layer pertains to the faces function
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(eyes);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );

  var layer5 = new PLayer(particles);
  layer5.mode( SWIRL (5));
  layer5.set_boundary (0, 400);

  // var layer3 = new PLayer(hmm);
  // layer3.mode( RING );
  // layer3.set_boundary( 400, 1000 );

  
  
}

function blackoutersegment(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 4; //18
  let backgroundArcStart = 270 - angleOffset; //270-18 = 252
  let backgroundArcEnd = 270 + angleOffset; //292

  fill(0, 0, 0);
  arc(x,y,2000,2000,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background



}

function blackcircle(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2; //18
  let backgroundArcStart = 270 - angleOffset; //270-18 = 252
  let backgroundArcEnd = 270 + angleOffset; //292

  fill(2, 3, 4);
  arc(x,y,1700,1700,252,292); // draws "pizza slice" in the background



}

function stars(x, y, animation, pScope){
  
  scale(animation.frame*2);
  scale (0.5);

  pScope.draw_image("star",animation.wave(2)* 100,y);

}

function eyes(x, y, animation, pScope){

  
  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;
  let angleOffset2 = (360 / SLICE_COUNT) / 4;
  let backgroundArcStart2 = 270 - angleOffset2;
  let backgroundArcEnd2 = 270 + angleOffset2;

  fill(24, 30, 54)
  arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(39, 52, 139)
  arc(x,y,400,800,backgroundArcStart2,backgroundArcEnd2); // draws "pizza slice" in the background

  scale (0.5);
  pScope.draw_image("eye",-10,-900-animation.wave()*50);
  

}

function particles (x, y, animation, pScope){
 
  push ()
  translate (100, 100)
  rotate (360*animation.frame);
  scale (2*animation.frame);
  stroke (255);
  strokeWeight (2);
  line (0, 0, 0, 20);
  pop ()

  
  strokeWeight (0,);
  fill (100, 59, 143, 200*animation.frame);
  scale (5*animation.frame);
  ellipse (0, 10, 30, 30);
  
}


