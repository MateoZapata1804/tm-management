import { Component, OnInit, ViewChild } from '@angular/core';
import { MatTableDataSource } from '@angular/material/table';
import { RestService } from '../../services/rest.service';
import { MatPaginator } from '@angular/material/paginator';
import { MatDialog } from '@angular/material/dialog';
import { ItemAddComponent } from '../modals/item-add/item-add.component';

@Component({
  selector: 'app-inventory',
  templateUrl: './inventory.component.html',
  styleUrl: './inventory.component.scss'
})
export class InventoryComponent implements OnInit{

  dataRows!: MatTableDataSource<any>;
  displayedColumns = ['id', 'userId', 'title', 'completed'];
  @ViewChild(MatPaginator) paginator!: MatPaginator;

  constructor(
    private restSvc: RestService, 
    private dialog: MatDialog
  ) {}

  ngOnInit(): void {
    this.restSvc.get('/todos')
      .then(async resp => {
        console.log('resp::  ', resp);
        this.dataRows = new MatTableDataSource<any>(resp);
        this.dataRows.paginator = this.paginator;
      })
      .catch(err => console.log('err.... ', err));
  }

  openNewItemModal(): void {
    const dialog = this.dialog.open(ItemAddComponent, {
      
    });
    
  }

}
