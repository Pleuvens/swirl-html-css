var about_canvas = document.getElementById('about-iso');

//alert(about_canvas.offsetWidth);

var about_scene = new THREE.Scene();
var about_camera = new THREE.PerspectiveCamera(75, about_canvas.offsetWidth / about_canvas.offsetHeight, 0.1, 1000);

var dist

var about_renderer = new THREE.WebGLRenderer();
about_renderer.setSize(about_canvas.offsetWidth, about_canvas.offsetHeight);
about_renderer.setClearColor( 0x111111, 1 );
about_canvas.appendChild(about_renderer.domElement);


window.addEventListener('resize', function()
{
    var header_width = header_canvas.offsetWidth;
    var header_height = header_canvas.offsetHeight;
    header_renderer.setSize(header_width, header_height);
    header_camera.aspect = header_width / header_height;
    header_camera.updateProjectionMatrix();

    var width = about_canvas.offsetWidth;
    var height = about_canvas.offsetHeight;
    about_renderer.setSize(width, height);
    about_camera.aspect = width / height;
    about_camera.updateProjectionMatrix();
})


about_controls = new THREE.OrbitControls(about_camera, about_renderer.domElement);
about_controls.enableZoom = false;

var about_loader = new THREE.ObjectLoader();

about_loader.load(
    "assets/obj/books/books.json", 
    function (object)
    {
        about_scene.add(object);
    }
);

about_camera.position.z = 0.2;

var about_ambientLight = new THREE.AmbientLight( 0xFFFFFF, 0.8);
var about_directionalLight = new THREE.DirectionalLight(0xFFFFFF, 0.2);
about_scene.add(about_ambientLight);
about_scene.add(about_directionalLight);

var about_update = function()
{
    //cube.rotation.x += 0.01;
    //cube.rotation.y += 0.01;
};

//draw Scene
var about_render = function()
{
    about_renderer.render(about_scene, about_camera);
};

// run game loop (about_update, about_render, repeat)
var about_GameLoop = function()
{
    requestAnimationFrame(about_GameLoop);

    about_update();
    about_render();
};

about_GameLoop();