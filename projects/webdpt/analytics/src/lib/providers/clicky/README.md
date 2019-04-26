<img 
    src="../../../assets/svg/clicky.svg" 
    alt="Clicky logo"
    height="100px"
    width="200px" />

# Clicky
__homepage__: [clicky.com](https://clicky.com/)  
__docs__: [clicky.com/help/](https://clicky.com/help/)  
__import__: `import { NgxAnalyticsClicky } from 'ngx-analytics/clicky';`

## Setup

Add the following clicky code to your *index.html* file, before the closing body tag. Replace *XXXX* with your Clicky Site ID.

```html
<script type="text/javascript">
  var clicky_custom = {
    pageview_disable : 1,
    history_disable : 1
  };
</script>
<script src="//static.getclicky.com/js" type="text/javascript"></script>
<script type="text/javascript">try{ clicky.init(XXXXX); }catch(e){}</script>
```

## Usage

### Import
```ts
// app.module.ts
import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { RouterModule, Routes, RouterOutlet } from '@angular/router';

import { AppComponent } from './app.component';

import { NgxAnalyticsModule } from 'ngx-analytics';
import { NgxAnalyticsClicky } from 'ngx-analytics/clicky';
import { PageComponent } from './page/page.component';
import { HomeComponent } from './home/home.component';

const ROUTES: Routes = [
  { path: '', component: HomeComponent},
  { path: 'page', component: PageComponent}
];

@NgModule({
  declarations: [
    AppComponent,
    PageComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    RouterModule.forRoot(ROUTES),
    NgxAnalyticsModule.forRoot([NgxAnalyticsClicky])
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
```

### Enable Auto Route Logging
```ts
// app.component.ts 
import { Component } from '@angular/core';
import { NgxAnalyticsClicky } from 'ngx-analytics-clicky';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  // Enable auto route logging
  constructor(ngx-analyticsClicky: NgxAnalyticsClicky) {}
}
```

### Track Events & Goals
```html
  <li>
    <!-- Track Events -->
    <button ngx-analyticsOn="click" angularticsAction="event-button" [angularticsProperties]="{title: 'Event Button Clicked'}">Track Button Click Event 1</button>
  </li>
  <li>
    <!-- Track Goals -->
    <button ngx-analyticsOn="click" angularticsAction="event-button" [angularticsProperties]="{goal: 'Goal #1', revenue: 500, noQueue: true}">Goal Button</button>
  </li>
```
