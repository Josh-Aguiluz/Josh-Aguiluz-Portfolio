import { Component, ElementRef, Input, OnChanges, OnDestroy, OnInit, ViewChild } from '@angular/core';
import * as React from 'react';
import * as ReactDOM from 'react-dom/client';

@Component({
  selector: 'app-react-renderer',
  template: '<div #root class="h-full w-full"></div>',
  standalone: true
})
export class ReactBridgeComponent implements OnInit, OnChanges, OnDestroy {
  @ViewChild('root', { static: true }) rootRef!: ElementRef;
  @Input() component!: React.ComponentType<any>;
  @Input() props: Record<string, any> = {};

  private reactRoot: ReactDOM.Root | null = null;

  ngOnInit() { this.render(); }
  ngOnChanges() { this.render(); }
  ngOnDestroy() { this.reactRoot?.unmount(); }

  private render() {
    if (!this.component || !this.rootRef) return;
    if (!this.reactRoot) this.reactRoot = ReactDOM.createRoot(this.rootRef.nativeElement);
    this.reactRoot.render(React.createElement(this.component, this.props));
  }
}