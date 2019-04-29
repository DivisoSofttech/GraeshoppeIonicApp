import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';
import { AuthGuardService } from './pages/security';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'sale',
    pathMatch: 'full',
  },
  {
    path: 'sale',
    loadChildren: './pages/sale/sale.module#SalePageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'dashboard', loadChildren:
      './pages/dashboard/dashboard.module#DashboardPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'stock', loadChildren: './pages/stock/stock.module#StockPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'customers',
    loadChildren: './pages/customers/customers.module#CustomersPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'receipts',
    loadChildren: './pages/receipts/receipts.module#ReceiptsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'settings',
    loadChildren: './pages/settings/settings.module#SettingsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'about-us',
    loadChildren: './pages/about-us/about-us.module#AboutUsPageModule'
  },
  {
    path: 'help-center',
    loadChildren: './pages/help-center/help-center.module#HelpCenterPageModule'
  },
  {
    path: 'landing',
    loadChildren: './pages/landing/landing.module#LandingPageModule'
  },
  {
    path: 'login',
    loadChildren: './pages/login/login.module#LoginPageModule'
  },
  {
    path: 'sign-up',
    loadChildren: './pages/sign-up/sign-up.module#SignUpPageModule'
  },
  {
    path: 'customer-detail',
    loadChildren: './pages/customer-detail/customer-detail.module#CustomerDetailPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-customer',
    loadChildren: './pages/add-customer/add-customer.module#AddCustomerPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'categories-list',
    loadChildren: './pages/categories-list/categories-list.module#CategoriesListPageModule'
  },
  {
    path: 'recently-used',
    loadChildren: './pages/recently-used/recently-used.module#RecentlyUsedPageModule'
  },
  {
    path: 'notifications',
    loadChildren: './pages/notifications/notifications.module#NotificationsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'items',
    loadChildren: './pages/items/items.module#ItemsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'uom',
    loadChildren: './pages/uom/uom.module#UomPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'categories',
    loadChildren: './pages/categories/categories.module#CategoriesPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-items',
    loadChildren: './pages/add-items/add-items.module#AddItemsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-categories',
    loadChildren: './pages/add-categories/add-categories.module#AddCategoriesPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'add-uom',
    loadChildren: './pages/add-uom/add-uom.module#AddUomPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'orders',
    loadChildren: './pages/orders/orders.module#OrdersPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'search-products',
    loadChildren: './pages/search-products/search-products.module#SearchProductsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'search-results-products',
    loadChildren: './pages/search-results-products/search-results-products.module#SearchResultsProductsPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'make-payment',
    loadChildren: './pages/make-payment/make-payment.module#MakePaymentPageModule',
    canActivate: [AuthGuardService]

  },
  {
    path: 'current-receipt',
    loadChildren: './pages/current-receipt/current-receipt.module#CurrentReceiptPageModule',
    canActivate: [AuthGuardService]

  },
  { path: 'category-detail', loadChildren: './pages/category-detail/category-detail.module#CategoryDetailPageModule' },
  { path: 'product-detail', loadChildren: './pages/product-detail/product-detail.module#ProductDetailPageModule' },
  { path: 'receipt-detail', loadChildren: './pages/receipt-detail/receipt-detail.module#ReceiptDetailPageModule' },
  { path: 'profile', loadChildren: './pages/profile/profile.module#ProfilePageModule' },
  { path: 'reports', loadChildren: './pages/reports/reports.module#ReportsPageModule' },
  { path: 'receipts/:id', loadChildren: './pages/receipt-detail/receipt-detail.module#ReceiptDetailPageModule' },
  { path: 'product-list/:id', loadChildren: './pages/product-list/product-list.module#ProductListPageModule' }


];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }
