import { Component, OnInit } from '@angular/core';
import { Uuid } from 'ts-uuid';

@Component({
  selector: 'app-root',
  template: `
    <!--The content below is only a placeholder and can be replaced.-->
    <div style="text-align:center" class="content">
      <h1>
        Welcome to {{title}}!
      </h1>
    </div>
    <div>
      <button (click)="onCreateClick()">Create</button>
      <span style="margin-left: 3ex;">{{ uuid }}</span>
    </div>
    <router-outlet></router-outlet>
  `,
  styles: []
})
export class AppComponent {
  
  title = 'uuid-web';
  uuid = '';

  onCreateClick(): void {
    const _uuid:Uuid = Uuid.create();
    this.uuid = _uuid.toString();
  }
  
}
