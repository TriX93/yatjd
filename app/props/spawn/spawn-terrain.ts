import { BoxGeometry, MeshBasicMaterial, Mesh, TextureLoader } from 'three.js'


export class SpawnTerrain {
  _mesh: any;
  
  constructor() {
    const geometry = new BoxGeometry(2056,2056, 0);
    const texture = new TextureLoader();

    texture.load('assets/terrain/scene1.png', 
      (res) => { console.log(res);},
      (progress) => { console.log(progress);},
      (err) => { console.log(err);}
    );

    const material = new MeshBasicMaterial({ texture: texture });
    this._mesh = new Mesh(geometry, material);
  }

  public renderTick() {
    this._mesh.rotation.x += 0.1;
    this._mesh.rotation.y += 0.1;
  }

  public getMesh() {
    return this._mesh;
  }
}