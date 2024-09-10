// @ts-check
import { test, expect } from "@playwright/test";

test.describe("navigation", () => {
  test.beforeEach(async ({ page }) => {
    await page.goto("http://localhost:5173/");
  });

  test("should display correct navigation content", async ({ page }) => {
    const nav = page.locator("nav");

    await expect(nav).toBeVisible();
  });

  /*   test("los links del navbar deben direccionar a la seccion correspondiente", async ({
    page,
  }) => {});

  test("el titulo debe mostrar el contenido correcto", async ({ page }) => {});

  test("debe mostrar un boton para descargar CV", async ({ page }) => {});

  test("debe mostrarse botones de redes sociales ", async ({ page }) => {});

  test("el icono de home debe llevar al inicio", async ({ page }) => {});

  test("el icono de abajo debe llevar a la siguiente seccion ", async ({
    page,
  }) => {});

  test("los links del footer deben llevar a la seccion correcta", async ({
    page,
  }) => {}); */
});
