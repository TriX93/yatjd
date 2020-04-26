import { WebGLRenderer } from 'three.js';

export class App {
  scene: any;
  camera: any;
  renderer: any;

  canRender: boolean;

  constructor() {
    this.renderer = new WebGLRenderer({antialias:true});
    this.renderer.setClearColor('#000000');
    this.renderer.setSize(window.innerWidth, window.innerHeight);

    const stage = document.getElementById('stage');
    if (!stage) {
      console.error("#stage element not found");
    } else {
      stage.appendChild(this.renderer.domElement);
    }
  }

  public setScene(scene: any) {
    if (!!this.scene) {
      this.canRender = false;
      this.camera = null;
    }
    this.scene = scene;
  }

  public run() {
    if (!!this.scene) {
      this.camera = this.scene.getMainCamera();
      this.canRender = true;
      this._render();
    } else {
      console.log("Please use setScene() before run()");
    }
  }

  _render() {
    if (this.canRender) {
      requestAnimationFrame(() => { this._render() });

      if (typeof this.scene.renderTick == 'function')
        this.scene.renderTick();
        
      this.renderer.render(
          this.scene.getThreeScene(), 
          this.camera );
    }
  }
}