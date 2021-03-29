import { ComponentFixture } from '@angular/core/testing';
import { IonicModule } from '@ionic/angular';
import { render } from '@testing-library/angular';
import { LoginFormComponent } from './components/login-form/login-form.component';

import { LoginPage } from './login.page';

describe('LoginPage', () => {
  let component: LoginPage;
  let fixture: ComponentFixture<LoginPage>;

  beforeEach(async () => {
    const renderTools = await render(LoginPage, {
      imports: [IonicModule.forRoot()],
      declarations: [LoginFormComponent],
      detectChanges: true,
    });

    fixture = renderTools.fixture;
    component = fixture.componentInstance;
  });

  it('should create the login page', () => {
    expect(component).toBeTruthy();
  });
});
