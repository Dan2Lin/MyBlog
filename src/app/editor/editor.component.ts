import {Component, ElementRef, Renderer, Output, EventEmitter, OnInit} from '@angular/core';
import * as wangEditor from '../../../node_modules/wangeditor/release/wangEditor.js';
@Component({
  selector: 'app-editor',
  templateUrl: './editor.component.html',
  styleUrls: ['./editor.component.css']
})
export class EditorComponent implements OnInit {
  @Output()
  private editor: any;
  constructor(private el: ElementRef, private renderer: Renderer) {

  }
  ngOnInit() {
    const editortoolbar = this.el.nativeElement.querySelector('#editor-tool');
    const editorcontent = this.el.nativeElement.querySelector('#editor-content');
    this.editor = new wangEditor(editortoolbar, editorcontent);
    this.editor.customConfig.uploadImgShowBase64 = true;
    this.editor.create();
  }
  getEditorContent():string{
    return this.editor.txt.html();
  }
  getEditorText():string {
    return this.editor.txt.text();
  }
  setEditorContent(content):string {
    return this.editor.txt.html(content);
  }
}
