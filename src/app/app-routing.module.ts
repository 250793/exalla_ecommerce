
import { NgModule, Component } from '@angular/core';
import { Routes,RouterModule } from "@angular/router";


import { RecommendSlideComponent } from './shared/componentes/recommend-slide/recommend-slide.component';
import { TelaDeUsuarioComponent } from './shared/componentes/tela-de-usuario/tela-de-usuario.component';
import { AuthenticatedGuard } from './shared/middleware/authenticated.guard';




const APP_ROUTES : Routes = [
  {
    path: "",
    loadChildren: () => import('./views/home/home.module').then(m => m.HomeModule)
  },
  { path:'recommend-slide',component:RecommendSlideComponent },
  { path:'tela-de-usuario',component:TelaDeUsuarioComponent },
  { path: 'produtos', loadChildren: () => import('./views/produtos/produtos.module').then((m) =>  m.ProdutosModule)},
  { path: 'cart', loadChildren: () => import('./views/cart/cart.module').then((m) =>  m.CartModule)},
  { path: 'faq', loadChildren: () => import('./views/faq/faq.module').then(m => m.FaqModule) },
  { path: 'signin', loadChildren: () => import('./views/signin/signin.module').then(m => m.SigninModule) },
  { path: 'change-password', loadChildren: () => import('./views/change-password/change-password.module').then(m => m.ChangePasswordModule) },
  { path: 'my-account', canActivate: [AuthenticatedGuard], loadChildren: () => import('./views/my-account/my-account.module').then(m => m.MyAccountModule) },
  { path: 'checkout', loadChildren: () => import('./views/checkout/checkout.module').then(m => m.CheckoutModule) },
  { path: 'deactivate-account', loadChildren: () => import('./views/deactivate-account/deactivate-account.module').then(m => m.DeactivateAccountModule) },

  { path: 'fresch-vegan', loadChildren: () => import('./views/fresch-vegan/fresch-vegan.module').then(m => m.FreschVeganModule) },

  { path: 'help-support', loadChildren: () => import('./views/help-support/help-support.module').then(m => m.HelpSupportModule) },

  { path: 'help-ticket', loadChildren: () => import('./views/help-ticket/help-ticket.module').then(m => m.HelpTicketModule) },

  { path: 'my-address', canActivate:[AuthenticatedGuard], loadChildren: () => import('./views/my-address/my-address.module').then(m => m.MyAddressModule) },

  { path: 'my-order', loadChildren: () => import('./views/my-order/my-order.module').then(m => m.MyOrderModule) },

  { path: 'privacy', loadChildren: () => import('./views/privacy/privacy.module').then(m => m.PrivacyModule) },

  { path: 'product-details/:cod_produto', loadChildren: () => import('./views/product-details/product-details.module').then(m => m.ProductDetailsModule) },

  { path: 'promo-details', loadChildren: () => import('./views/promo-details/promo-details.module').then(m => m.PromoDetailsModule) },

  { path: 'promos', loadChildren: () => import('./views/promos/promos.module').then(m => m.PromosModule) },

  { path: 'recommend', loadChildren: () => import('./views/recommend/recommend.module').then(m => m.RecommendModule) },

  { path: 'refund-payment', loadChildren: () => import('./views/refund-payment/refund-payment.module').then(m => m.RefundPaymentModule) },

  { path: 'review', loadChildren: () => import('./views/review/review.module').then(m => m.ReviewModule) },

  { path: 'signup', loadChildren: () => import('./views/signup/signup.module').then(m => m.SignupModule) },

  { path: 'status-canceled', loadChildren: () => import('./views/status-canceled/status-canceled.module').then(m => m.StatusCanceledModule) },

  { path: 'status-complete', loadChildren: () => import('./views/status-complete/status-complete.module').then(m => m.StatusCompleteModule) },

  { path: 'status-onprocess', loadChildren: () => import('./views/status-onprocess/status-onprocess.module').then(m => m.StatusOnprocessModule) },

  { path: 'successful', loadChildren: () => import('./views/successful/successful.module').then(m => m.SuccessfulModule) },

  { path: 'terms-conditions', canActivate:[AuthenticatedGuard], loadChildren: () => import('./views/terms-conditions/terms-conditions.module').then(m => m.TermsConditionsModule) },

  { path: 'verification', loadChildren: () => import('./views/verification/verification.module').then(m => m.VerificationModule) },

  { path: 'search', loadChildren: () => import('./views/search/search.module').then(m => m.SearchModule) },

  { path: 'ofertas', loadChildren: () => import('./views/ofertas/ofertas.module').then(m => m.OfertasModule) },

];

@NgModule({
  imports: [
    RouterModule.forRoot(APP_ROUTES,{  scrollPositionRestoration: 'enabled', onSameUrlNavigation: 'reload'  })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {}
