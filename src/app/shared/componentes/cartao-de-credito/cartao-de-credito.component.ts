import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-cartao-de-credito',
  templateUrl: './cartao-de-credito.component.html',
  styleUrls: ['./cartao-de-credito.component.scss']
})
export class CartaoDeCreditoComponent implements OnInit {

  constructor(
    private httpClient: HttpClient,
    private router: Router,
  ) { }

  ngOnInit(): void {
  }


  /*

  Autenticação do cartão de crédito


  */
  getCardFlag(cardNumber: any): string | false {
    if (cardNumber === null) return false;


    let cardFlags: { [key: string]: RegExp };


    cardNumber = cardNumber.replace(/[^0-9]+/g, '');

    cardFlags = {
      Amex: /^3[47][0-9]{13}$/,
      Aura: /^((?!504175))^((?!5067))(^50[0-9])/,
      BaneseCard: /^636117/,
      Cabal: /(60420[1-9]|6042[1-9][0-9]|6043[0-9]{2}|604400)/,
      Diners: /^3(?:0[0-5]|[68][0-9])[0-9]{11}/,
      Discover: /^6(?:011|5[0-9]{2})[0-9]{12}/,
      Elo: /^4011(78|79)|^43(1274|8935)|^45(1416|7393|763(1|2))|^50(4175|6699|67[0-6][0-9]|677[0-8]|9[0-8][0-9]{2}|99[0-8][0-9]|999[0-9])|^627780|^63(6297|6368|6369)|^65(0(0(3([1-3]|[5-9])|4([0-9])|5[0-1])|4(0[5-9]|[1-3][0-9]|8[5-9]|9[0-9])|5([0-2][0-9]|3[0-8]|4[1-9]|[5-8][0-9]|9[0-8])|7(0[0-9]|1[0-8]|2[0-7])|9(0[1-9]|[1-6][0-9]|7[0-8]))|16(5[2-9]|[6-7][0-9])|50(0[0-9]|1[0-9]|2[1-9]|[3-4][0-9]|5[0-8]))/,
      FortBrasil: /^628167/,
      GrandCard: /^605032/,
      Hipercard: /^606282|^3841(?:[0|4|6]{1})0/,
      JCB: /^(?:2131|1800|35\d{3})\d{11}/,
      Mastercard:
        /^((5(([1-2]|[4-5])[0-9]{8}|0((1|6)([0-9]{7}))|3(0(4((0|[2-9])[0-9]{5})|([0-3]|[5-9])[0-9]{6})|[1-9][0-9]{7})))|((508116)\\d{4,10})|((502121)\\d{4,10})|((589916)\\d{4,10})|(2[0-9]{15})|(67[0-9]{14})|(506387)\\d{4,10})/,
      PersonalCard: /^636085/,
      Sorocred: /^627892|^636414/,
      Valecard: /^606444|^606458|^606482/,
      Visa: /^4[0-9]{15}$/,
    };

    for (let flag in cardFlags) {
      if (cardFlags[flag].test(cardNumber)) {
        return flag;
      }
    }

    return false;
  }

}
