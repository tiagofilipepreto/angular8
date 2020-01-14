import { Injectable } from '@angular/core';
import { Account } from '../../models/account';

@Injectable({
  providedIn: 'root'
})
export class AccountServiceService {

  private currentAccount: Account = new Account();

  constructor() { }

  public isAuthenticated():boolean{
    if(this.currentAccount.id){
      return true;
    }else{
      return false;
    }
  }

  public login(account: Account){
    console.log(account);
    
    account.id = 1;
    account.name = 'ze cenas';
    if (account.email) {
      this.currentAccount = account;
    }
  }

  public getCurrentName(): string{
    return this.currentAccount.name;
  }
}
