import { Scene, PerspectiveCamera } from 'three.js'
import { Box } from '../actor/box';

export class Scene1 {
  scene: any;
  camera: any;

  _cube: any;
  
  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera( 
      75, 
      window.innerWidth/window.innerHeight, 
      0.1, 
      1000 );
    this.camera.position.z = 4;

    this._setup();
  }

  _setup() {
    this._cube = new Box();
    this.scene.add(this._cube.getMesh());
  }

  public renderTick() {
    this._cube.renderTick();
  }

  public getThreeScene() {
    return this.scene;
  }

  public getMainCamera() {
    return this.camera;
  }
}