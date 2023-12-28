export const fragmentShader = `


varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
  float time = uTime;

  vec2 uv = vUv;
  uv.x += sin(uv.y * 100.25);
  uv.y += sin(uv.x * 100.0);
  //REPEAT ER GØY PARAM Å KØDDE MED. PRØV HØYT!

  //Farge??? 
  vec2 repeat = vec2(2000.0, 00.1);
  uv = fract(uv / repeat + vec2(0.0, time));

  vec4 color = texture2D(uTexture, uv);

  gl_FragColor = color;
}

`;

export const grainFragment = `


varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
  float time = uTime;

  vec2 uv = vUv;
  uv.x += sin(uv.y + 100.25);
  //REPEAT ER GØY PARAM Å KØDDE MED. PRØV HØYT!
  vec2 repeat = vec2(10.0, 1.1);
  uv = fract(uv * repeat + vec2(0.0, time));

  vec4 color = texture2D(uTexture, uv);

  gl_FragColor = color;
}

`;

/* GOOD #1:
export const fragmentShader = `


varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
  float time = uTime;

  vec2 uv = vUv;
  uv.x -= sin(uv.y * 100.25);
  //REPEAT ER GØY PARAM Å KØDDE MED. PRØV HØYT!
  vec2 repeat = vec2(1.0, 1.0);
  uv = fract(uv / repeat + vec2(0.0, time));

  vec4 color = texture2D(uTexture, uv);

  gl_FragColor = color;
}

`; */

/*

GOOD #2:
export const fragmentShader = `


varying vec2 vUv;
uniform float uTime;
uniform sampler2D uTexture;

void main() {
  float time = uTime;

  vec2 uv = vUv;
  uv.x += sin(uv.y * 100.25);
  //REPEAT ER GØY PARAM Å KØDDE MED. PRØV HØYT!
  vec2 repeat = vec2(10.0, 0.1);
  uv = fract(uv / repeat + vec2(0.0, time));

  vec4 color = texture2D(uTexture, uv);

  gl_FragColor = color;
}

`; */
