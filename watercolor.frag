#ifdef GL_ES
precision mediump float;
#endif

//variable de résolution de l'écran
uniform vec2 u_resolution;
//variable de la souris
uniform vec2 u_mouse;
//variable du temps
uniform float u_time;

//variable pour l'intensité de distortion
const int intensite = 6;

void main(){
	//position, coordonnées de l'animation
	vec2 coord = 8.0 * (gl_FragCoord.xy + (u_mouse/20.) - u_resolution / 1.0) / min(u_resolution.y, u_resolution.x);

	//variable longueur de l'animation
	float len;

	//boucle pour le mouvement en x et y en focntion de la longueur
	for (int i = 2; i < intensite; i++){
		len = length(vec2(coord.x, coord.y) * 0.6);

		coord.x = coord.x - cos(coord.y + sin(len)) + cos(u_time / 6.0);
		coord.y = coord.y + sin(coord.x + cos(len)) + sin(u_time / 9.0);
	}

	// pour les couleurs : calculées selon la longueur de l'animation
	 vec3 color = vec3( cos(len * .1), .8 * cos(len * .2), .1 * cos(len * .4));
	 gl_FragColor = vec4(color, 1.0);


}
