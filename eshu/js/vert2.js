export const vertexShader2 = `

varying vec2 vUv;
uniform float uTime;

void main() {
  vUv = uv;

  float time = uTime * 0.000010001;

  vec3 transformed = position;

  //her må vi inn med en bølgefunksjon for å få smooth waves... beveegelse!
  transformed.y = sin(position.x * time );
  transformed.x += cos(position.y + time);
  //transformed.z = sin(position.z * time);

  gl_Position = projectionMatrix * modelViewMatrix * vec4(transformed, 1.0);
}


`;
