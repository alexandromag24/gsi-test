import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { DashboardComponent } from './pages/dashboard/dashboard.component';
import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
import { NavbarComponent } from './shared/components/navbar/navbar.component';
import { CardsComponent } from './shared/components/cards/cards.component';
import { GoalsComponent } from './shared/components/goals/goals.component';
import { TransactionsComponent } from './shared/components/transactions/transactions.component';
import { OutcomeComponent } from './shared/components/outcome/outcome.component';
import { BottomComponent } from './shared/components/bottom/bottom.component';



@NgModule({
  declarations: [
    AppComponent,
    DashboardComponent,
    SidebarComponent,
    NavbarComponent,
    CardsComponent,
    GoalsComponent,
    TransactionsComponent,
    OutcomeComponent,
    BottomComponent    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }