import { BrowserModule,Title } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { AngularMaterialModule } from './module/angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AppRoutingModule } from './/app-routing.module';
import { AuthGuard } from './auth/auth.guard';
//pipe
import { UniquePipe } from './pipe/unique.pipe';
import { SearchItemPipe } from './pipe/search-item.pipe';
import { FilterPipe } from './pipe/filter.pipe';
//component
import { AppComponent } from './app.component';
import { LoginComponent } from './login/login.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { HeaderComponent } from './header/header.component';
import { PageRoleAssignmentComponent } from './admin/page-role-assignment/page-role-assignment.component';
import { LoginHistoryComponent } from './admin/login-history/login-history.component';
import { IpBasedSecurityComponent } from './admin/ip-based-security/ip-based-security.component';
import { LeadStatusColorComponent } from './admin/lead-status-color/lead-status-color.component';
import { RoleComponent } from './admin/role/role.component';
import { PageNotFoundComponent } from './page-not-found/page-not-found.component';
import { UsersComponent } from './user/users/users.component';
import { BuilderComponent } from './setup/builder/builder.component';
import { CompanyComponent } from './setup/company/company.component';
import { ProjectComponent } from './setup/project/project.component';
import { GlobalUnitTypeComponent } from './setup/global-unit-type/global-unit-type.component';
import { ProjectUnitTypeListComponent } from './setup/project-unit-type-list/project-unit-type-list.component';
import { CustomDirective } from './directives/custom-directive';
import { BetterDirective } from './directives/better.directive';


@NgModule({
  declarations: [
    AppComponent,
    LoginComponent,
    DashboardComponent,
    HeaderComponent,
    PageRoleAssignmentComponent,
    LoginHistoryComponent,
    IpBasedSecurityComponent,
    LeadStatusColorComponent,
    RoleComponent,
    PageNotFoundComponent,
    UsersComponent,
    BuilderComponent,
    CompanyComponent,
    ProjectComponent,
    UniquePipe,
    SearchItemPipe,
    FilterPipe,
    GlobalUnitTypeComponent,
    ProjectUnitTypeListComponent,
    CustomDirective,
    BetterDirective
  ],
  imports: [
    BrowserModule,
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    AngularMaterialModule,
    AppRoutingModule,
    NgbModule
  ],
  providers: [AuthGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }
