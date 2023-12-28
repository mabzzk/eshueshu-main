export const vertexShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;

  float time = uTime * 1.0;

  vec3 transformed = position;

  //her må vi inn med en bølgefunksjon for å få smooth waves... beveegelse!
  //transformed.y = sin(position.y + time );
  transformed.x = position.x;
  //transformed.z += sin(position.z + time);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}

`;

export const grainVertex = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;

  float time = uTime * 1.0;

  vec3 transformed = position;

  //her må vi inn med en bølgefunksjon for å få smooth waves... beveegelse!
  //transformed.y = sin(position.y + time );
  transformed.x += cos(position.x / time);
  //transformed.z += sin(position.z / time);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}

`;

/* GOOOD #1:

export const vertexShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;

  float time = uTime * 1.0;

  vec3 transformed = position;

  //her må vi inn med en bølgefunksjon for å få smooth waves... beveegelse!
  transformed.y = sin(position.y + time );
  transformed.x += sin(position.x / time);
  //transformed.z += sin(position.z + time);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}

`;
 */

/* GOOD #2:
 export const vertexShader = `
varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;

  float time = uTime * 1.0;

  vec3 transformed = position;

  //her må vi inn med en bølgefunksjon for å få smooth waves... beveegelse!
  //transformed.y = sin(position.y + time );
  transformed.x += cos(position.x - time);
  transformed.z += sin(position.z + time);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}

`;

 */
