//GOOD #2:
export const fragmentShader2 = `


varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
  float time = uTime;

  vec2 uv = vUv;

  // DENNE GIR SIRKLER I TEKSTUREN:
  uv.y = tan(uv.y / 0.5);

  uv.x = cos(uv.x / 5.0);
  //REPEAT ER GØY PARAM Å KØDDE MED. PRØV HØYT!
  vec2 repeat = vec2(2.0, 0.1);
  uv = fract(uv * repeat + vec2(1.0, time));

  vec4 color = texture2D(uTexture, uv);

  gl_FragColor = color;
}

`;
