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
  pScope.load_image("wing" , "png");
  pScope.load_image_sequence("eye_blink" , "png", 16);
}

function setup_layers(pScope){

  new PLayer(null, 25, 31, 54);  //lets us draw the whole circle background, ignoring the boundaries, basically the colour of circle

  var layer8 = new PLayer(moreparticles);
  layer8.mode( SWIRL (50));
  layer8.set_boundary (230, 800);
  
  var layer4 = new PLayer(blackcircle);
  layer4.mode( RING );
  layer4.set_boundary( 0, 800 );
  
  var layer5 = new PLayer(blackinnersegment);
  layer5.mode( RING );
  layer5.set_boundary( 0, 230 );

  var layer5 = new PLayer(particles);
  layer5.mode( SWIRL (10));
  layer5.set_boundary (0, 290);

  var layer6 = new PLayer(stars1);
  layer6.mode(RING);
  layer6.set_boundary (0, 1000);

  var layer7 = new PLayer(eyes2);
  layer7.mode(RING);
  layer7.set_boundary (0, 1000);

  var layer2 = new PLayer(eyes);
  layer2.mode( RING );
  layer2.set_boundary( 0, 1000 );

  
}

function moreparticles (x, y, animation, pScope) {
  
  push ()
  translate (100, 100)
  rotate (360*animation.frame);
  scale (2*animation.frame);
  fill (33, 82, 147, 50);
  strokeWeight (0 );
  ellipse (0, 800, 100, 100);
  pop ()
}


function stars1(x, y, animation, pScope){

  push()
  translate (0, 0)
  scale (0.5)
  pScope.draw_image("whitestar",animation.wave(2)* 50,10);
  pop()
    
  scale (0.5)
  scale (0.3 );
  let xValue = -700 + (animation.frame * 1600)
  pScope.draw_image("pinkstar",xValue , -3000);
  //pScope.draw_image("pinkstar",xValue + 400, -2000);

    if(animation.frame == 0.1){
    // pScope.draw_image("pinkstar",animation.wave(2)* 50, -2000);
    pScope.draw_image("pinkstar", -900 + (animation.frame * 1600), -2000);
    }
}
function blackinnersegment(x, y, animation, pScope){
  // fill(0, 0, 0);
  pScope.fill_background(0, 0, 0, );
  
}
function blackcircle(x, y, animation, pScope){

  pScope.fill_background(0, 0, 0);

  fill (255)
  ellipse (0, 0, 500, 500)

  scale (0.35)
  pScope.draw_image("wing",animation.wave(1)*200,-1800-animation.wave(1)*200);
}

function eyes(x, y, animation, pScope){

  push()
  scale (0.3);
  pScope.draw_image("eye",0,-2900-animation.wave()*90);
  pop()
  scale (0.4)
  pScope.draw_image("pinkstar",animation.wave(2)* 50 + 10, 50);

}

function particles (x, y, animation, pScope){
 
  push ()
  translate (100, 100)
  rotate (360*animation.frame);
  scale (2*animation.frame);
  fill (100, 59, 143, 300*animation.wave(2));
  strokeWeight (0 );
  ellipse (0, 0, 20, 20);
  pop ()

  
  // strokeWeight (0,);
  // fill (100, 59, 143, 200*animation.wave(2));
  // scale (5*animation.frame);
  // ellipse (100*animation.frame, 10*animation.frame, 30*animation.frame, 30*animation.frame);
  
  
}

function eyes2 (x, y, animation, pScope){
// scale (0.5)
//   pScope.draw_image_from_sequence("eye_blink",0,-600, animation.frame);

  scale (0.55)
  translate (400,100);

  pScope.draw_image_from_sequence("eye_blink",0,-600, animation.frame)
}


