import { BoxGeometry, MeshBasicMaterial, Mesh } from 'three.js'


export class Box {
  _mesh: any;
  
  constructor() {
    const geometry = new BoxGeometry(1,1,1);
    const material = new MeshBasicMaterial({ color: '#433F81' });
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