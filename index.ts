// Import stylesheets
import './style.css';
import { App } from './app';

import { Scene1 } from './app/scene/scene1';

const app = new App();
app.setScene(new Scene1() );
app.run();