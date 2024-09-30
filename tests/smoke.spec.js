// @ts-check
import { test, expect } from '@playwright/test';

test('App loads and nav works', async ({ page }) => {
    await page.goto('/');

    await page.getByRole('link', { name: /blog/i }).click();
    await expect(page.getByTestId('blog-posts')).toBeVisible();
    await expect(page.getByRole('link', { name: /home/i })).not.toHaveClass(
        'active'
    );
    await expect(page.getByRole('link', { name: /blog/i })).toHaveClass(
        'active'
    );
    await expect(page.getByText('My Mission')).toBeVisible();
    await page.getByText('My Mission').click();
    await expect(page.getByText('My Mission')).toBeVisible();
});
