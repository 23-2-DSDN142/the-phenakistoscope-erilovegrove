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

  new PLayer(null, 0, 0, 0);  //lets us draw the whole circle background, ignoring the boundaries, basically the colour of circle

  var layer1 = new PLayer(quarks); //this layer pertains to the faces function
  layer1.mode( SWIRL(5) );
  layer1.set_boundary( 200, 1000 );

  var layer2 = new PLayer(dimples);
  layer2.mode( RING );
  layer2.set_boundary( 0, 400 );
}

function quarks(x, y, animation, pScope){
  
  scale(animation.frame*2);
  //scale (2);

  pScope.draw_image("quark",x,y);

}

function dimples(x, y, animation, pScope){

  // this is how you set up a background for a specific layer
  let angleOffset = (360 / SLICE_COUNT) / 2
  let backgroundArcStart = 270 - angleOffset;
  let backgroundArcEnd = 270 + angleOffset;

  fill(255, 255, 255)
  arc(x,y,800,800,backgroundArcStart,backgroundArcEnd); // draws "pizza slice" in the background

  fill(227, 104, 104)
  rect(-10,-300-animation.wave()*50,20,20) // .wave is a cosine wave btw

  pScope.draw_image("dimple",-10,-300-animation.wave()*50);

}
