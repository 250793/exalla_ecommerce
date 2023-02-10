import { NgxMaskModule } from 'ngx-mask';
import { CUSTOM_ELEMENTS_SCHEMA, NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { DepartamentoComponent } from './componentes/departamento/departamento.component';
import { ListingComponent } from './componentes/listing/listing.component';
import { FooterComponent } from './componentes/footer/footer.component';
import { HeadComponent } from './componentes/head/head.component';
import { PickSlideComponent } from './componentes/picks-slide/pick-slide.component';
import { RouterModule } from '@angular/router';
import { RecommendSlideComponent } from './componentes/recommend-slide/recommend-slide.component';
import { PromoForYouComponent } from './componentes/promo-for-you/promo-for-you.component';
import { TelaDeUsuarioComponent } from './componentes/tela-de-usuario/tela-de-usuario.component';
import { PicksTodayComponent } from './componentes/picks-today/picks-today.component';
import { CardsPromoComponent } from './componentes/cards-promo/cards-promo.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { BuscaProdutosComponent } from './componentes/busca-produtos/busca-produtos.component';
import { BannerComponent } from './componentes/banner/banner.component';
import { OfertasLojaComponent } from './componentes/ofertas-loja/ofertas-loja.component';
import { FiltroComponent } from './componentes/filtro/filtro.component';
import { CadastroDeEnderecoComponent } from './componentes/cadastro-de-endereco/cadastro-de-endereco.component';
import { MeusEnderecosComponent } from './componentes/meus-enderecos/meus-enderecos.component';
import { CartaoDeCreditoComponent } from './componentes/cartao-de-credito/cartao-de-credito.component';






@NgModule({
  declarations: [
    DepartamentoComponent,
    ListingComponent,
    FooterComponent,
    HeadComponent,
    PickSlideComponent,
    RecommendSlideComponent,
    PromoForYouComponent,
    TelaDeUsuarioComponent,
    PicksTodayComponent,
    CardsPromoComponent,
    BuscaProdutosComponent,
    BannerComponent,
    OfertasLojaComponent,
    CadastroDeEnderecoComponent,
    FiltroComponent,
    MeusEnderecosComponent,
    CartaoDeCreditoComponent,







  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule,
    NgxMaskModule.forChild()

  ],
  exports: [
    DepartamentoComponent,
    ListingComponent,
    FooterComponent,
    HeadComponent,
    PickSlideComponent,
    RecommendSlideComponent,
    PromoForYouComponent,
    RouterModule,
    TelaDeUsuarioComponent,
    PicksTodayComponent,
    CardsPromoComponent,
    BuscaProdutosComponent,
    BannerComponent,
    OfertasLojaComponent,
    CadastroDeEnderecoComponent,
    FiltroComponent,
    CartaoDeCreditoComponent,
    MeusEnderecosComponent,







  ],
  schemas: [
    CUSTOM_ELEMENTS_SCHEMA
  ],
})
export class SharedModule { }
