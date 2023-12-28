import * as THREE from "https://cdn.jsdelivr.net/npm/three@0.125.2/build/three.module.js";
import { OrbitControls } from "https://cdn.jsdelivr.net/npm/three@0.125.2/examples/jsm/controls/OrbitControls.js";

import { vertexShader } from "./vertex.js";
import { fragmentShader } from "./fragment.js";
import { fragmentShader2 } from "./frag2.js";
import { vertexShader2 } from "./vert2.js";

let clock = new THREE.Clock();
const renderer = new THREE.WebGLRenderer({
  antialias: true,
  alpha: true,
  canvas: document.getElementById("canvas"),
});
renderer.setPixelRatio(window.devicePixelRatio);
renderer.shadowMap.enabled = true;

const camera = new THREE.PerspectiveCamera(45, 2, 0.1, 1000);
camera.position.set(500, 0, 8);
const scene = new THREE.Scene();

// CONTROL4
const controls = new OrbitControls(camera, renderer.domElement);
controls.enableDamping = true;
controls.dampingFactor = 0.8;
controls.enableZoom = true;
controls.autoRotate = false;
controls.autoRotateSpeed = 1;

function resizeCanvasToDisplaySize() {
  const canvas = renderer.domElement;
  const width = canvas.clientWidth;
  const height = canvas.clientHeight;
  if (canvas.width !== width || canvas.height !== height) {
    renderer.setSize(width, height, false);
    camera.aspect = width / height;
    camera.updateProjectionMatrix();
  }
}

function animate(time) {
  time *= 0.001; // seconds
  resizeCanvasToDisplaySize();
  controls.update();
  material.uniforms.uTime.value = clock.getElapsedTime();
  material2.uniforms.uTime.value = clock.getElapsedTime();

  renderer.render(scene, camera);
  requestAnimationFrame(animate);
}

requestAnimationFrame(animate);

//TEXTURE
const texture = new THREE.TextureLoader().load(
  "./assets/blackkk.png",
  (texture) => {
    texture.minFilter = THREE.NearestFilter;
  }
);

const texture2 = new THREE.TextureLoader().load(
  "./assets/beach.png",
  (texture) => {
    texture.minFilter = THREE.NearestFilter;
  }
);

// MATERIAL:
let material = new THREE.ShaderMaterial({
  vertexShader,
  fragmentShader,
  uniforms: {
    uTime: { value: 0.001 },
    uTexture: { value: texture },
  },
  transparent: true,
  side: THREE.DoubleSide,
});

let material2 = new THREE.ShaderMaterial({
  vertexShader: vertexShader,
  fragmentShader: fragmentShader,
  uniforms: {
    uTime: { value: 10.0000001 },
    uTexture: { value: texture2 },
  },
  transparent: true,
  side: THREE.DoubleSide,
});

//ADDING TEXT
const font = await new Promise((res) =>
  new THREE.FontLoader().load("fonts/gerst.json", res)
);

const params = {
  font,
  size: 30,
  height: 10,
  curveSegments: 100,
  bevelEnabled: false,
};

function addLetter(string) {
  const geo = new THREE.TextGeometry(string, params);
  const mesh = new THREE.Mesh(geo, material);
  //mesh.rotation.x = THREE.Math.degToRad(-90);
  return mesh;
}

const mesh = addLetter("E S H U \n vol. 1 ");
mesh.position.y = 1;
mesh.position.x = -9;
//scene.add(mesh);
mesh.rotation.x = THREE.Math.degToRad(-90);



const sphereGeo = new THREE.SphereGeometry(100, 300, 300);
const sphere = new THREE.Mesh(sphereGeo, material2);
scene.add(sphere);
sphere.rotation.z = THREE.Math.degToRad(-90);


const delay = (ms) => new Promise((res) => setTimeout(res, ms));

// OPACITY 0, 1, ORDA SPRETTER OPP FRA HALLO.

/* function flyBirds() {
  TweenLite.to(mesh.position, 130, {
    y: 260,
  });
}
 */

