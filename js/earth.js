var header_canvas = document.getElementById('header-iso');

var header_scene = new THREE.Scene();
var header_camera = new THREE.PerspectiveCamera(75, header_canvas.offsetWidth / header_canvas.offsetHeight, 0.1, 1000);

var header_renderer = new THREE.WebGLRenderer();
header_renderer.setSize(header_canvas.offsetWidth, header_canvas.offsetHeight);
header_renderer.setClearColor( 0x111111, 1 );
header_canvas.appendChild(header_renderer.domElement);

header_controls = new THREE.OrbitControls(header_camera, header_renderer.domElement);
header_controls.enableZoom = false;

var header_loader = new THREE.ObjectLoader();

header_loader.load(
    "assets/obj/earth/earth.json", 
    function (object)
    {
        header_scene.add(object);
    }
);

header_camera.position.z = 30;

var header_ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.8);
var header_directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.2);
header_scene.add(header_ambientLight);
header_scene.add(header_directionalLight);

var header_update = function()
{
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
};

//draw Scene
var header_render = function()
{
    header_renderer.render(header_scene, header_camera);
};

// run game loop (header_update, header_render, repeat)
var header_GameLoop = function()
{
    requestAnimationFrame(header_GameLoop);

    header_update();
    header_render();
};

header_GameLoop();