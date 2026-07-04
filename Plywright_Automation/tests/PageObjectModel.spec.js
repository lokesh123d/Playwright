import { test } from '@playwright/test';
import { LoginPage } from '../Pages/LoginPage';

test(
    'Login Test Cases',
    async ({ page }) => {

        const login =
            new LoginPage(page);

        await login.validCredentials(
            'standard_user',
            'secret_sauce'
        );
    }
);