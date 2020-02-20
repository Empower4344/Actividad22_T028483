import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.sass']
})
export class AppComponent {
  transaction = [];
  balanse = 0;
  icon = '';

  AddTransaction(input: HTMLInputElement, tipo: string) {
    const value = Number(input.value);
    if (value <= 0 ) {
      alert( 'El valor tine que ser diferente a 0' );
    } else {
      this.transaction.unshift(input.value);
      input.value = '';
      if (tipo === 'income') {
        this.balanse += value;
        this.icon = 'call_made';
      }
      if (tipo === 'expense'){
        this.balanse -= value;
        this.icon = 'call_received';
      }
    }
  }
}
