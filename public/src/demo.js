import * as THREE from "/build/three.module.js";
import { OrbitControls } from "/jsm/controls/OrbitControls.js";
// import Stats from "/jsm/libs/stats.module.js";

var scene = new THREE.Scene();

var camera, renderer;

function init() {
  scene = new THREE.Scene();
  scene.background = new THREE.Color(0x00538c);

  ambientLight = new THREE.AmbientLight(0xffffff, 0.6);
  scene.add(ambientLight);

  let light = new THREE.DirectionalLight(0xffffff, 0.6);
  light.position.set(1, 1, 1);
  light.target.position.set(0, 0, 0);
  light.target.updateMatrixWorld();

  var ambientLight = new THREE.AmbientLight(0x111111);
  scene.add(light);

  let meshFloor = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(15, 15, 1.5, 15),
    new THREE.MeshPhongMaterial({ color: 0x714229 })
  );
  meshFloor.castShadow = true;
  meshFloor.receiveShadow = true;
  meshFloor.position.y -= 3;
  meshFloor.position.z = 0;
  meshFloor.position.x = 0;

  scene.add(meshFloor);

  let trunk = new THREE.Mesh(
    new THREE.CylinderBufferGeometry(2, 2, 10, 60),
    new THREE.MeshPhongMaterial({ color: 0x714229 })
  );
  trunk.castShadow = true;
  trunk.receiveShadow = true;
  trunk.position.y = 2;
  scene.add(trunk);

  let leaves = new THREE.Mesh(
    new THREE.ConeGeometry(11, 28, 7),
    new THREE.MeshPhongMaterial({ color: 0x72a624 })
  );
  leaves.castShadow = true;
  leaves.receiveShadow = true;
  leaves.position.y = 18;
  scene.add(leaves);

  let leaves1 = new THREE.Mesh(
    new THREE.ConeGeometry(10, 22, 7),
    new THREE.MeshPhongMaterial({ color: 0x72a624 })
  );
  leaves1.castShadow = true;
  leaves1.receiveShadow = true;
  leaves1.position.y = 21;
  scene.add(leaves1);

  let leaves2 = new THREE.Mesh(
    new THREE.ConeGeometry(9, 16, 7),
    new THREE.MeshPhongMaterial({ color: 0x72a624 })
  );
  leaves2.castShadow = true;
  leaves2.receiveShadow = true;
  leaves2.position.y = 23;
  scene.add(leaves2);

  let leaves3 = new THREE.Mesh(
    new THREE.ConeGeometry(7.5, 12, 7),
    new THREE.MeshPhongMaterial({ color: 0x72a624 })
  );
  leaves3.castShadow = true;
  leaves3.receiveShadow = true;
  leaves3.position.y = 26;
  scene.add(leaves3);

  let aros = new THREE.Mesh(
    new THREE.TorusKnotGeometry(10, 0.4, 300, 3, 2, 1),
    new THREE.MeshBasicMaterial({ color: 0xb10e1a })
  );
  aros.castShadow = true;
  aros.receiveShadow = true;
  aros.position.y = 25;
  aros.rotation.x = 5;
  aros.rotation.z = 6;
  scene.add(aros);

  let aros1 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(10, 0.4, 300, 3, 2, 1),
    new THREE.MeshBasicMaterial({ color: 0x2c48e0 })
  );
  aros1.castShadow = true;
  aros1.receiveShadow = true;
  aros1.position.y = 8;
  aros1.rotation.x = -5;
  aros1.rotation.z = 1;
  scene.add(aros1);

  let aros2 = new THREE.Mesh(
    new THREE.TorusKnotGeometry(13, 0.4, 300, 3, 1, 1),
    new THREE.MeshBasicMaterial({ color: 0xbfbb1c })
  );
  aros2.castShadow = true;
  aros2.receiveShadow = true;
  aros2.position.y = 16;
  aros2.position.x = -5;
  aros2.rotation.x = -5;
  scene.add(aros2);

  function sphereFunc(colors, py, pz, px) {
    let sphere = new THREE.Mesh(
      new THREE.SphereBufferGeometry(1, 25, 25),
      new THREE.MeshPhongMaterial({ color: colors })
    );
    sphere.castShadow = true;
    sphere.receiveShadow = true;
    sphere.position.y = py;
    sphere.position.z = pz;
    sphere.position.x = px;
    return sphere;
  }

  scene.add(sphereFunc(0x2745f2, 25, 5, 0));
  scene.add(sphereFunc(0xbf1131, 14, 0, 8.5));
  scene.add(sphereFunc(0xbf1131, 18, 0, -8));
  scene.add(sphereFunc(0x2745f2, 15, -8, -4));
  scene.add(sphereFunc(0xbf1131, 21, -7.5, 2));
  scene.add(sphereFunc(0x2745f2, 10, 8, -5));
  scene.add(sphereFunc(0x2745f2, 5, 9, 5));
  scene.add(sphereFunc(0x2745f2, 5, -10, 5));
  scene.add(sphereFunc(0xbf1131, 10, -10, -3));
  scene.add(sphereFunc(0xbf1131, 15, 7, 5));
  scene.add(sphereFunc(0x2745f2, 6, -1, -11));

  //render
  renderer = new THREE.WebGLRenderer();
  renderer.setSize(1280, 720);
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = THREE.BasicshadowMap;

  //camera
  camera = new THREE.PerspectiveCamera(90, 100, 0.1, 2000);
  camera = new THREE.PerspectiveCamera(
    100,
    window.innerWidth / window.innerHeight,
    1,
    80000
  );
  camera.position.set(-2, 18, 48);
  camera.lookAt(new THREE.Vector3(0, 10.8, 0));
  //camara controls
  let cameraControls = new OrbitControls(camera, renderer.domElement);
  cameraControls.target.set(0, 0, 0);

  document.body.appendChild(renderer.domElement);

  animate();
}

function animate() {
  requestAnimationFrame(animate);
  renderer.render(scene, camera);
}

window.onload = init;
