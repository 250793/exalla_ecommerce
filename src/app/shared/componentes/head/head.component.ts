import { CarrinhoService } from './../../services/carrinho.service';
import { environment } from 'src/environments/environment';
import { AfterViewInit, Component, ElementRef, HostListener, OnInit, ViewChild } from '@angular/core';
import { SocialLoginService } from '../../services/social-login.service';
import { HttpClient } from '@angular/common/http';
import { ListaProduto } from '../../../model/listaproduto.model';
import { Router } from '@angular/router';

@Component({
  selector: 'app-head',
  templateUrl: './head.component.html',
  styleUrls: ['./head.component.scss']
})
export class HeadComponent implements OnInit, AfterViewInit {
  search: string = '';


  address = [{
    nome: "Loja Exalla Bezerra de Menezes"
  },
  {
    nome: "Loja Exalla Augusto dos Anjos"
  },
  {
    nome: "Loja Exalla Francisco"
  },
  {
    nome: "Loja Exalla Centro 1"
  },
  {
    nome: "Loja Exalla Messejana"
  },
  {
    nome: "Loja Exalla Shopping Aledota"
  },
  {
    nome: "Loja Exalla Cambeba"
  },
  {
    nome: "Loja Exalla Shopping Eusébio"
  },
  {
    nome: "Loja Exalla Solares Shopping"
  },
  {
    nome: "Loja Exalla Maracanaú"
  }
  ]



  @ViewChild('fixed') fixed!: ElementRef;
  sticky!: number;
  fixedNum = false;
  products: [] = []


  @HostListener('window:scroll', ['$event'])
  onWindowScroll($event: any) {
    const number = $event.target.scrollingElement.scrollTop;
    if (number > 40) {
      this.fixedNum = true;
      this.fixed.nativeElement.classList.add("fixed-header");
    } else if (this.fixed && number < 10) {
      this.fixedNum = false;
      this.fixed.nativeElement.classList.remove("fixed-header");
    }
  }

  constructor(
    private httpClient: HttpClient,
    public socialLoginService: SocialLoginService,
    private router: Router,
    public carrinhoService:CarrinhoService
  ) {

  }

  ngAfterViewInit(): void {

  }

  ngOnInit(): void {
    document.addEventListener('keyup',(event) => {
      if (event.code === 'Escape' || event.code === 'Enter') {
        if (event.code === 'Enter') {
          this.buscar(false)
        }

        this.search = '';
      }
    })

    this.fetchCarrinho();

    this.carrinhoService.getEmitter().subscribe((_ignore) => {
      this.fetchCarrinho()
    })
  }

  fetchCarrinho() {
    this.carrinhoService.getTotalCarrinho()
    .subscribe({
      next:(value:any) => {
        console.log(value);

          this.products = value.products
      },
    })
  }

  setSticky() {
    if (window.pageYOffset > this.sticky) {
      this.fixed.nativeElement.classList.add("sticky");
    } else {
      this.fixed.nativeElement.classList.remove("sticky");
    }
  }

  logOut() {
    this.socialLoginService.logOut();
    location.reload();
  }

  limpar() {
    this.search = '';
  }

  buscar(event:any) {
    if (this.search && this.search.length > 0 ) {
      if(event == true ){
        this.limpar()
      }

      this.router.navigate(
        ['/produtos'],
        {
          queryParams: {
            q: this.search

          }
        }
      ).then(() => {
        this.limpar()
      })
    }
  }

}
