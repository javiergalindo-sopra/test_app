import { IonicModule, Platform } from '@ionic/angular';
import { fireEvent, render, screen } from '@testing-library/angular';
import { ReactiveFormsModule } from '@angular/forms';

import { LoginFormComponent } from './login-form.component';
import { PlatformService } from '../../../../services/platform.service';

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

  it('should display an invalid email value message when typed value is invalid', async () => {
    const INVALID_EMAIL_VALUE = 'aaa';
    await render(LoginFormComponent, {
      imports: [IonicModule, ReactiveFormsModule],
      detectChanges: true,
    });

    const emailField = await screen.findByLabelText('Email');

    fireEvent(
      emailField,
      new CustomEvent('ionChange', {
        detail: {
          value: INVALID_EMAIL_VALUE,
        },
      })
    );

    fireEvent(emailField, new CustomEvent('ionBlur'));

    expect(
      await screen.findByText('El email introducido es inválido')
    ).toBeInTheDocument();
  });

  it('should display an invalid password value message when typed value is invalid', async () => {
    const INVALID_PASSWORD_VALUE = 'aaa';

    await render(LoginFormComponent, {
      imports: [IonicModule, ReactiveFormsModule],
      detectChanges: true,
    });

    const passwordField = await screen.findByLabelText('Contraseña');

    fireEvent(
      passwordField,
      new CustomEvent('ionChange', {
        detail: {
          value: INVALID_PASSWORD_VALUE,
        },
      })
    );

    fireEvent(passwordField, new CustomEvent('ionBlur'));

    expect(
      await screen.findByText(
        'La contraseña debe contener almenos 5 caracteres'
      )
    ).toBeInTheDocument();
  });

  it('should render the app title when is viewing in desktop', async () => {
    await render(LoginFormComponent, {
      componentProviders: [
        {
          provide: PlatformService,
          useValue: {
            isDesktop: () => true,
            isMobile: () => false,
          },
        },
      ],
      providers: [Platform],
      imports: [IonicModule, ReactiveFormsModule],
      detectChanges: true,
    });

    expect(screen.queryByText('Prueba técnica')).toBeInTheDocument();
  });

  it('should not render the app title when device is mobile', async () => {
    await render(LoginFormComponent, {
      componentProviders: [
        {
          provide: PlatformService,
          useValue: {
            isDesktop: () => false,
            isMobile: () => true,
          },
        },
      ],
      providers: [Platform],
      imports: [IonicModule, ReactiveFormsModule],
      detectChanges: true,
    });

    expect(screen.queryByText('Prueba técnica')).toBeNull();
  });
});
