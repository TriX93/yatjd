// Import stylesheets
import './style.css';
import { App } from './app';

import { Scene1 } from './app/scene/scene1';
import { SpawnArea } from './app/scene/spawn-area';

const app = new App();
app.setScene(new SpawnArea() );
app.run();