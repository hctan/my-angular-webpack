import 'zone.js';
import '@angular/compiler'; // Explicitly import the JIT compiler

import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import { AppModule } from './app/app.module';

platformBrowserDynamic().bootstrapModule(AppModule);