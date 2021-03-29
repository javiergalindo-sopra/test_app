import { IonicModule } from '@ionic/angular';
import { render, screen } from '@testing-library/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';

describe('LoginFormComponent', () => {
  it('should create the login form component', async () => {
    const { fixture } = await render(LoginFormComponent, {
      imports: [IonicModule, ReactiveFormsModule],
      detectChanges: true,
    });
    expect(fixture.componentInstance).toBeTruthy();
  });

  it('should render the email field', async () => {
    await render(LoginFormComponent, {
      imports: [IonicModule, ReactiveFormsModule],
      detectChanges: true,
    });

    const emailField = await screen.findByLabelText('Email');

    expect(emailField).toBeInTheDocument();
  });

  it('should render the password field', async () => {
    await render(LoginFormComponent, {
      imports: [IonicModule, ReactiveFormsModule],
      detectChanges: true,
    });

    const passwordField = await screen.findByLabelText('Contraseña');

    expect(passwordField).toBeInTheDocument();
  });

  });
});
