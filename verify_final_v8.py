from playwright.sync_api import sync_playwright
import time
import os

def run():
    with sync_playwright() as p:
        browser = p.chromium.launch()
        page = browser.new_page(viewport={'width': 1280, 'height': 800})
        try:
            print("Loading app...")
            page.goto("http://localhost:5173", wait_until="networkidle")
            time.sleep(5)

            # 1. Fintech Tab
            page.click("button:has-text('fintech')")
            print("Tab changed.")
            time.sleep(2)

            # 2. Banking Preset
            page.click("#btn-preset-prof-banking")
            print("Preset applied.")
            time.sleep(3)

            # 3. Open Modal
            page.click("button:has-text('Otwórz Modal')")
            print("Modal opened.")
            time.sleep(2)

            # Save screenshot
            path = os.getcwd() + "/v8_refined_verification.png"
            page.screenshot(path=path)
            print(f"Screenshot saved: {path}")
        except Exception as e:
            print(f"Error: {e}")
        finally:
            browser.close()

if __name__ == "__main__":
    run()
