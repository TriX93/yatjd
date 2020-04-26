import { Scene, PerspectiveCamera } from 'three.js'
import { Box } from '../actor/box';
import { SpawnTerrain } from '../props/spawn/spawn-terrain';

export class SpawnArea {
  scene: any;
  camera: any;

  _cube: any;
  _terrain: any;
  
  constructor() {
    this.scene = new Scene();
    this.camera = new PerspectiveCamera( 
      75, 
      window.innerWidth/window.innerHeight, 
      0.1, 
      3000 );
    this.camera.position.z = 1500;

    this._setup();
  }

  _setup() {
    this._cube = new Box();
    this._terrain = new SpawnTerrain();
    this.scene.add(this._terrain.getMesh());
    this.scene.add(this._cube.getMesh());
  }

  public renderTick() {
    //this._terrain.renderTick();
  }

  public getThreeScene() {
    return this.scene;
  }

  public getMainCamera() {
    return this.camera;
  }
}