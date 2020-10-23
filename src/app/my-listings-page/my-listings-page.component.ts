import { Component, OnInit } from '@angular/core';
import { fakeMyListings, contactList } from '../fake-data';
import { Listing } from '../types';

@Component({
  selector: 'app-my-listings-page',
  templateUrl: './my-listings-page.component.html',
  styleUrls: ['./my-listings-page.component.css']
})
export class MyListingsPageComponent implements OnInit {
  listings: Listing[];
  contacts: any[];

  constructor() { }

  async getContacts() {
    const response = await fetch('https://adpback.pruebasgt.com/api/contactos/action/listar', { 
      headers: {
        'Authorization': 'Bearer '+ 'eyJ0eXAiOiJKV1QiLCJhbGciOiJIUzI1NiJ9.eyJpc3MiOiJodHRwczpcL1wvYWRwYmFjay5wcnVlYmFzZ3QuY29tXC9hcGlcL2F1dGhlbnRpY2F0ZSIsImlhdCI6MTYwMzQxMDI3MiwiZXhwIjoxNjAzNDIxMDcyLCJuYmYiOjE2MDM0MTAyNzIsImp0aSI6Ik91QnNpN0NGNWZ3V1ZOUlMiLCJzdWIiOjM1LCJwcnYiOiI4N2UwYWYxZWY5ZmQxNTgxMmZkZWM5NzE1M2ExNGUwYjA0NzU0NmFhIn0.W8XJOQvNcKXFqEiON1FQeCU-GbvckMnZPdaFcGyrcGg', 
        'Content-Type': 'application/json'
      },
    });

    this.contacts = await response.json();
  }

  ngOnInit(): void {
    this.listings = fakeMyListings;
    this.contacts = contactList;
    // this.getContacts();
    console.log(this.contacts);
  }

  onDeleteClicked(contactId: String) {
    alert(`Deleting your listing with id ${contactId}`);
  }

}
