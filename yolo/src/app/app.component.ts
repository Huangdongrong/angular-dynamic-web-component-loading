import { Component, Renderer, ViewContainerRef, ComponentFactoryResolver, ElementRef, ViewChild } from '@angular/core';

declare var require: any;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class YoloComponent {
  title = 'Yolo works!';

  @ViewChild('viewHost') viewHost: ElementRef;
  // @ViewChild('viewHost', { read: ViewContainerRef}) viewHost: ElementRef;

  constructor(
    public renderer: Renderer, 
    // public componentFactoryResolver: ComponentFactoryResolver
  ) {
    
    //this.loadExternalWebComponent();
  }

  loadComponent() {
    this.loadExternalJavaScript().then( _ => {
      // this.resolveAngularComponent(c.AppComponent);
      this.renderer.setElementProperty(
        this.viewHost.nativeElement, 'innerHTML', '<wc-element></wc-element>'
      );
    });
  }

  loadExternalJavaScript() {
    return new Promise( (res, rej) => {
      [
        'http://localhost:8000/build/main.bundle.js'
      ].map((src) => {
        const script = document.createElement('script');
        script.src = src;
        document.body.appendChild(script);
        script.onerror = rej;
        script.onload = (e) => {
          require.ensure([], x => {
            res(window["MyAwesomeLibrary"]);
          });
        };
      });

    });
  }

  // resolveAngularComponent(component: any) {
  //   let componentFactory = this.componentFactoryResolver.resolveComponentFactory(component);
  //   let viewContainerRef = this.viewHost;
  //   viewContainerRef.clear();
  //   let componentRef = viewContainerRef.createComponent(componentFactory);
  //   console.log(componentRef);
  // }

  // loadExternalWebComponent() {
  //   var importEl = document.createElement('link');
  //   importEl.rel = 'import';
  //   importEl.href = 'http://127.0.0.1:4200/proxy/build/main.bundle.js';
  //   document.body.appendChild(importEl)
  // }

}
