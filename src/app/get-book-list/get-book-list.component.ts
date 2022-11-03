import { Component, OnInit } from '@angular/core';
import { Book } from '../book';
import { UserLoginServiceService } from '../user-login-service.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-get-book-list',
  templateUrl: './get-book-list.component.html',
  styleUrls: ['./get-book-list.component.scss']
})
export class GetBookListComponent implements OnInit {
  books: Array<Book> = [];
  constructor(private userloginService:UserLoginServiceService, private router:Router) { }

  ngOnInit(): void {
    this.getBooks();
  }

  getBooks() {
    this.userloginService.getBookListFromRemote().subscribe(
      data=> this.books=data ,error=>console.log("Exception occurred 1"))
  }isEmpty()
  {
    if (this.books == null)
    {
      return true;
    }
    else { return false; }
  }

  signUp(){
    this.router.navigate(['/login']);
  }

  addBookRegistered() {
    this.router.navigate(['/bookregistration']);
  }

  goToUpdateBook(bid: number) {
    //alert(bid);
    console.log("bid: "+ bid);
    this.router.navigate(['/editBook', bid]);
  }


  goToViewBook(bid: number){
    this.router.navigate(['/viewBook', bid]);
  }

  // deleteBookRecords(bid:number) {
  //   if (confirm('Are you sure ?'))
  // return this.userloginService.deleteBookById(bid).subscribe(
  //   success =>{
  //     ("Product deleted succesfully");
  //   },
  //   error=> {console.log("Exception occured 2"); this.getBooks()})
  // }

}
