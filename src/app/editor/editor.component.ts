import {Component, ElementRef, Renderer, Output, EventEmitter, OnInit} from '@angular/core';
import * as wangEditor from '../../../node_modules/wangeditor/release/wangEditor.js';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  private editor: any;
  constructor(private el: ElementRef, private renderer: Renderer) {

  }
  ngOnInit() {
    const editortoolbar = this.el.nativeElement.querySelector('#editor-tool')
    const editorcontent = this.el.nativeElement.querySelector('#editor-content')
    this.editor = new wangEditor(editortoolbar, editorcontent);
    this.editor.customConfig.uploadImgShowBase64 = true
    this.editor.create();
  }

}
