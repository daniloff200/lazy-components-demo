import { Component, ComponentFactoryResolver, OnInit, ViewContainerRef } from '@angular/core';
import { LazyChild1Component } from './lazy-child1.component';
import { LazyChild2Component } from './lazy-child2.component';

@Component({
  templateUrl: './lazy-children.component.html',
  styleUrls: ['./lazy-children.component.scss']
})
export class LazyChildrenComponent implements OnInit {

  constructor(
    private viewContainerRef: ViewContainerRef,
    private cfr: ComponentFactoryResolver
  ) {}

  ngOnInit() {
    const componentFactory1 = this.cfr.resolveComponentFactory(LazyChild1Component);
    const componentFactory2 = this.cfr.resolveComponentFactory(LazyChild2Component);
    this.viewContainerRef.createComponent(componentFactory1);
    this.viewContainerRef.createComponent(componentFactory2);
  }

}
