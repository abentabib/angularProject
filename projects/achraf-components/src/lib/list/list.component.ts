

import {
  Component,
  OnInit,
  Output,
  Input,
  EventEmitter,
  ViewChild,
  ElementRef
} from '@angular/core';
import { TitleCasePipe } from '@angular/common';

@Component({
  selector: 'achraf-list',
  templateUrl: './list.component.html',
  styleUrls: ['./user-list.scss']
})
export class ListComponent implements OnInit {

  @Output() selectedName = new EventEmitter();
  @ViewChild('editField') editField: ElementRef;

  selected: Boolean = false;
  index: number;
  searchText: string;
  item: any = {};
  name: string;
  nameModified = '';
  onEdit: Boolean = false;
  edit: Boolean = false;

  public filteredNames = [];
  public colleagues = [
    {
      name: 'Abdou Tissouki',
      selected: false,
      edit: false
    },
    {
      name: 'Daniel Loop',
      selected: false,
      edit: false
    },
    {
      name: 'Achraf Bentabib',
      selected: false,
      edit: false
    },
    {
      name: 'Dennis Griesa',
      selected: false,
      edit: false
    }
  ];

  constructor() {}


  ngOnInit() {
    this.resetSelection();
  }

  onNameClick(name: string, event) {
    this.selectedName.emit(event);
    for (let i = 0; i < this.colleagues.length; i++) {
      if (name === this.colleagues[i].name) {
        this.colleagues[i].selected = !this.colleagues[i].selected;
      }
    }
  }

  resetSelection() {
    for (let i = 0; i < this.colleagues.length; i++) {
      this.colleagues[i].selected = false;
    }
  }

  addItem(name: string) {
    this.onEdit = false;
    this.item = {
      name: name,
      selected: false,
      edit: false
    };
    this.colleagues.push(this.item);
    this.name = '';
  }

  removeItem(name: string) {
    this.onEdit = false;
    for (let i = 0; i < this.colleagues.length; i++) {
      if (this.colleagues[i].name === name) {
        this.colleagues.splice(i, 1);
      }
    }
  }

  editBarShow(name: string) {
    this.onEdit = true;
    setTimeout(() => this.editField.nativeElement.focus(), 0);
    for (let i = 0; i < this.colleagues.length; i++) {
      if (this.colleagues[i].name === name) {
        this.colleagues[i].edit = true;
      } else {
        this.colleagues[i].edit = false;
      }
    }
  }

  editItem(name: string) {
    console.log(this.nameModified);
    if (!this.nameModified) {
      this.noEdit();
    } else {
      for (let i = 0; i < this.colleagues.length; i++) {
        if (this.colleagues[i].name === name) {
          this.colleagues[i].name = this.nameModified;
        }
      }
    }
    this.noEdit();
    this.nameModified = '';
  }

  cleanSearchBar() {
    this.searchText = '';
  }

  noEdit() {
    this.onEdit = false;
    for (const c of this.colleagues) {
      c.edit = false;
    }
  }
}
