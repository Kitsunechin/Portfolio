import { Injectable } from '@angular/core';
import { EmailValidator } from '@angular/forms';

export interface ContactData{ ///osobny plik - best paractice trzeba tez exportowac i zaimportowac
  name: string,
  email: string,
  message: string,
}
@Injectable({ //te klase bedziemy urzywac w innych komponentach i services poprzez wstrzykniecie klasy
  providedIn: 'root'
})
export class ContactService { 
    public dataStorageKey: string = 'contactData';
    public saveContactData( //trzy argumenty
      name: string,
      email: string,
      message: string, 
    ): void {
      const contactData: ContactData = { ///const do zabezpieczenia danych
        name,
        email,
        message
      };

      ///rownowazne z tym na gorze
      // let contactData: ContactData = {
      //   name: name,
      //   email: email,
      //   message: message,
      // }   ///global storage dostepne outside
      const encoded: string = JSON.stringify(contactData);
      ///global storage pryjmuje 2 elem. klucz i value - do odkodowania urzywamy JSON zapisujemy w stringu
      window.localStorage.setItem(this.dataStorageKey, encoded);
                                  ////klucz, wartosc////- warto zapisac w const

      ///window - okno przegladarki
      //set item and get item - zapisanie i pozysaknie danych
      ///local storage - miejsce przechowywania danych
      ///JSON- bilbliotek asuzaca do odkodowywania i kodowania obiektow/stringow
      ///Json.stringify - kodowanie obiektu do stringu
      ///jason.parse - kodowanie obiektu ze stringu
      console.log('dane zapisane');
    }
    
    public getContactData(): ContactData {
      const encoded:string = window.localStorage.getItem(this.dataStorageKey);
      const contactData: ContactData = JSON.parse(encoded);
      return contactData;
    }
}
