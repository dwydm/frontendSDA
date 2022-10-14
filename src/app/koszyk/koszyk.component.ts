import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs/internal/Subscription';
import { SklepService } from '../sklep.service';

@Component({
  selector: 'app-koszyk',
  templateUrl: './koszyk.component.html',
  styleUrls: ['./koszyk.component.scss']
})
export class KoszykComponent implements OnInit, OnDestroy {

  public zawartoscKoszyka: String[] = [];
  private sub: Subscription;

  constructor(private sklep: SklepService) { 
    this.sub = sklep.shoppingCart.subscribe( (cart) => {
      this.zawartoscKoszyka = cart;
      console.log(`cart z komponentu shoppingCart: ${cart}`)
    })

  }

  stop(): void {

  }

  ngOnInit(): void {
  }

  ngOnDestroy(): void {
    this.sub.unsubscribe();
  }

}
