import { IonicModule, IonInput } from '@ionic/angular';
import { render } from '@testing-library/angular';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  beforeEach(() => {});

  it('should create the login form component', async () => {
    const { fixture } = await render(LoginFormComponent, {
      declarations: [IonInput],
      imports: [IonicModule],
      detectChanges: true,
    });
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the email field', async () => {
    const { findByPlaceholderText } = await render(LoginFormComponent, {
      declarations: [IonInput],
      imports: [IonicModule],
      detectChanges: true,
    });

    const emailLabel = await findByPlaceholderText('Email');

    expect(emailLabel).toBeInTheDocument();
  });

  it('should render the password field', async () => {
    const { findByPlaceholderText } = await render(LoginFormComponent, {
      declarations: [IonInput],
      imports: [IonicModule],
      detectChanges: true,
    });

    const emailLabel = await findByPlaceholderText('Contraseña');

    expect(emailLabel).toBeInTheDocument();
  });
});
