import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  loadedFeature = 'recipe';

  // no longer need below function
  onNavigate(feature: string) {
    this.loadedFeature = feature;
  }

}
