const SLICE_COUNT = 13; //max and min slice count in brief

function setup_pScope(pScope){
  pScope.output_mode(ANIMATED_DISK);
  pScope.scale_for_screen(true);
  pScope.draw_layer_boundaries(false);
  pScope.set_direction(CCW);
  pScope.set_slice_count(SLICE_COUNT);
  pScope.load_image("star" , "png");
  pScope.load_image("eye" , "png");
  pScope.load_image("pinkstar" , "png");
  pScope.load_image("whitestar" , "png");
  pScope.load_image_sequence("eye_blink" , "png", 16);
}

function setup_layers(pScope){

  new PLayer(null, 39, 52, 139);  //lets us draw the whole circle background, ignoring the boundaries, basically the colour of circle

  var layer4 = new PLayer(blackcircle);
  layer4.mode( RING );
  layer4.set_boundary( 800, 1000 );
  
  var layer5 = new PLayer(blackoutersegment);
  layer5.mode( RING );
  layer5.set_boundary( 0, 200 );

  var layer1 = new PLayer(stars); //this layer pertains to the faces function
  layer1.mode( SWIRL(6) );
  layer1.set_boundary( 200, 1000 );

  var layer5 = new PLayer(particles);
  layer5.mode( SWIRL (5));
  layer5.set_boundary (0, 400);

  var layer6 = new PLayer(rotatingstar);
  layer6.mode(RING);
  layer6.set_boundary (0, 1000);

  var layer7 = new PLayer(eyes2);
  layer7.mode(RING);
  layer7.set_boundary (0, 1000);

  var layer2 = new PLayer(eyes);
  layer2.mode( RING );
  layer2.set_boundary( 0, 1000 );
}
function rotatingstar(x, y, animation, pScope){

push()
translate (0, 0)
 scale (0.5)
 pScope.draw_image("whitestar",animation.wave(2)* 50,10);
pop()
  
  scale (0.5)
  scale (0.3 );
  let xValue = -700 + (animation.frame * 1600)//animation.wave(2) * 50
  pScope.draw_image("pinkstar",xValue , -3000);
  //pScope.draw_image("pinkstar",xValue + 400, -2000);

  

    if(animation.frame == 0.1){
    // pScope.draw_image("pinkstar",animation.wave(2)* 50, -2000);
    pScope.draw_image("pinkstar", -900 + (animation.frame * 1600), -2000);
    }
}
function blackoutersegment(x, y, animation, pScope){



  // fill(0, 0, 0);
  pScope.fill_background(0, 0, 0, );
  



}

function blackcircle(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2; //18
  let backgroundArcStart = 270 - angleOffset; //270-18 = 252
  let backgroundArcEnd = 270 + angleOffset; //292

  // fill(2, 3, 4);
  fill(0, 0, 0);
  arc(x,y,1700,1700,252,292); // draws "pizza slice" in the background



}
function stars(x, y, animation, pScope){
  
  scale(animation.frame*2);
  scale (0.5);

  pScope.draw_image("star",animation.wave(2)* 100,y);

  

}
function eyes(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  // let angleOffset = (360 / SLICE_COUNT) / 2
  // let backgroundArcStart = 270 - angleOffset;
  // let backgroundArcEnd = 270 + angleOffset;
  // let angleOffset2 = (360 / SLICE_COUNT) / 4;
  // let backgroundArcStart2 = 270 - angleOffset2;
  // let backgroundArcEnd2 = 270 + angleOffset2;

  // fill(24, 30, 54)
  // arc(x,y,400,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  // fill(39, 52, 139)
  // arc(x,y,400,800,backgroundArcStart2,backgroundArcEnd2); // draws "pizza slice" in the background
push()
  scale (0.2);
  pScope.draw_image("eye",0,-1200-animation.wave()*50);
  pop()
  scale (0.4)
  pScope.draw_image("pinkstar",animation.wave(2)* 50 + 10, 50);

  
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
  fill (100, 59, 143, 200*animation.wave(2));
  scale (5*animation.frame);
  ellipse (100*animation.frame, 10*animation.frame, 30*animation.frame, 30*animation.frame);
  
  
}

function eyes2 (x, y, animation, pScope){
// scale (0.5)
//   pScope.draw_image_from_sequence("eye_blink",0,-600, animation.frame);

  scale (0.55)
  translate (400,100);

  pScope.draw_image_from_sequence("eye_blink",0,-600, animation.frame)
}


