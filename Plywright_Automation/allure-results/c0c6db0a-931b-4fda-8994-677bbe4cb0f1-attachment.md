# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable.spec.ts >> Third table test
- Location: tests\WebTable.spec.ts:26:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#simpletable tbody tr').filter({ hasText: 'Yashwanth' }).locator('td input')
    - locator resolved to <input id="second" type="checkbox" class="qe w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_5" height="100%" scrolling="no" name="aswift_5" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!6" data-google-query-id="CNm_8433tZUDFWylrAId2E4WUw" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_5" height="100%" scrolling="no" name="aswift_5" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!6" data-google-query-id="CNm_8433tZUDFWylrAId2E4WUw" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <input id="third" type="checkbox" class="qd w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"/> from <tr>…</tr> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="container mx-auto flex items-center justify-between h-full px-4 md:px-6 lg:px-8">…</div> from <nav role="navigation" aria-label="main navigation" class="fixed top-0 left-0 right-0 z-50 h-16 bg-white/85 dark:bg-[#080d1a]/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-black/30">…</nav> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="hidden md:flex items-center gap-1 lg:gap-2 flex-1 justify-center ml-6 lg:ml-10">…</div> from <nav role="navigation" aria-label="main navigation" class="fixed top-0 left-0 right-0 z-50 h-16 bg-white/85 dark:bg-[#080d1a]/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-black/30">…</nav> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_5" height="100%" scrolling="no" name="aswift_5" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!6" data-google-query-id="CNm_8433tZUDFWylrAId2E4WUw" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td class="px-4 py-2">…</td> from <tr>…</tr> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable

```

# Page snapshot

```yaml
- generic [active] [ref=e1]:
  - generic [ref=e3]:
    - navigation "main navigation" [ref=e4]:
      - generic [ref=e5]:
        - link "LetCode Home" [ref=e6]:
          - /url: /
          - img "LetCode" [ref=e7]
        - generic [ref=e8]:
          - link "Work-Space" [ref=e9]:
            - /url: /test
          - generic [ref=e10]:
            - button "Products" [ref=e11] [cursor=pointer]:
              - text: Products
              - img [ref=e12]
            - generic:
              - link "Ortoni Report":
                - /url: /product/ortoni-report
              - link "LetXPath":
                - /url: /product/letxpath
              - link "Playwright Runner":
                - /url: /product/playwright-runner
          - generic [ref=e15]:
            - button "Grooming" [ref=e16] [cursor=pointer]:
              - text: Grooming
              - img [ref=e17]
            - generic:
              - link "Test Practice":
                - /url: /test-practice
              - link "Interview Q & A":
                - /url: /interview
              - link "Playwright Quiz":
                - /url: /pw-quiz
          - link "Courses" [ref=e20]:
            - /url: /courses
          - link "Contact" [ref=e21]:
            - /url: /contact
        - button "Switch to dark mode" [ref=e23] [cursor=pointer]:
          - img [ref=e24]
    - main [ref=e26]:
      - generic [ref=e28]:
        - generic [ref=e30]:
          - navigation "Breadcrumb" [ref=e31]:
            - link "Workspace" [ref=e32]:
              - /url: /test
              - img [ref=e33]
              - generic [ref=e38]: Workspace
            - img [ref=e39]
            - generic [ref=e41]: Table
          - heading "Table" [level=1] [ref=e44]
        - generic [ref=e46]:
          - generic [ref=e47]:
            - generic [ref=e48]:
              - heading "Shopping List" [level=2] [ref=e49]
              - paragraph [ref=e50]: ~ Add all the prices and check if the total is correct
              - table [ref=e52]:
                - rowgroup [ref=e53]:
                  - row "Items Price" [ref=e54]:
                    - columnheader "Items" [ref=e55]
                    - columnheader "Price" [ref=e56]
                - rowgroup [ref=e57]:
                  - row "Chocolate 150" [ref=e58]:
                    - cell "Chocolate" [ref=e59]:
                      - link "Chocolate" [ref=e60] [cursor=pointer]:
                        - /url: "#"
                        - img [ref=e61]
                        - text: Chocolate
                    - cell "150" [ref=e63]
                  - row "Apple 180" [ref=e64]:
                    - cell "Apple" [ref=e65]
                    - cell "180" [ref=e66]
                  - row "Eggs 48" [ref=e67]:
                    - cell "Eggs" [ref=e68]:
                      - link "Eggs" [ref=e69] [cursor=pointer]:
                        - /url: "#"
                        - img [ref=e70]
                        - text: Eggs
                    - cell "48" [ref=e72]
                  - row "Corn 480" [ref=e73]:
                    - cell "Corn" [ref=e74]
                    - cell "480" [ref=e75]
                - rowgroup [ref=e76]:
                  - row "Total 858" [ref=e77]:
                    - cell "Total" [ref=e78]
                    - cell "858" [ref=e79]
            - generic [ref=e80]:
              - heading "Let's handle it😉" [level=2] [ref=e81]
              - paragraph [ref=e82]: ~ Mark Raj as present
              - table [ref=e84]:
                - rowgroup [ref=e85]:
                  - row "First name Last name Email address Present/Absent" [ref=e86]:
                    - columnheader "First name" [ref=e87]
                    - columnheader "Last name" [ref=e88]
                    - columnheader "Email address" [ref=e89]
                    - columnheader "Present/Absent" [ref=e90]
                - rowgroup [ref=e91]:
                  - row "Koushik Chatterjee koushik@letcode.in" [ref=e92]:
                    - cell "Koushik" [ref=e93]
                    - cell "Chatterjee" [ref=e94]
                    - cell "koushik@letcode.in" [ref=e95]
                    - cell [ref=e96]:
                      - checkbox [ref=e97] [cursor=pointer]
                  - row "Yashwanth Raj yashwanth@letcode.in" [ref=e98]:
                    - cell "Yashwanth" [ref=e99]
                    - cell "Raj" [ref=e100]
                    - cell "yashwanth@letcode.in" [ref=e101]
                    - cell [ref=e102]:
                      - checkbox [ref=e103] [cursor=pointer]
                  - row "Iron Man man@letcode.in" [ref=e104]:
                    - cell "Iron" [ref=e105]
                    - cell "Man" [ref=e106]
                    - cell "man@letcode.in" [ref=e107]
                    - cell [ref=e108]:
                      - checkbox [ref=e109] [cursor=pointer]
            - generic [ref=e110]:
              - heading "Sortable Tables" [level=2] [ref=e111]
              - paragraph [ref=e112]:
                - text: ~ Check if the sorting is working properly (Click column headers to sort)
                - link "Data Management" [ref=e113] [cursor=pointer]:
                  - img [ref=e115]
                  - text: Data Management
              - table [ref=e118]:
                - rowgroup [ref=e119]:
                  - row "Dessert (100g) Calories Fat (g) Carbs (g) Protein (g) Cholesterol(mg)" [ref=e120]:
                    - columnheader "Dessert (100g)" [ref=e121] [cursor=pointer]
                    - columnheader "Calories" [ref=e122] [cursor=pointer]
                    - columnheader "Fat (g)" [ref=e123] [cursor=pointer]
                    - columnheader "Carbs (g)" [ref=e124] [cursor=pointer]
                    - columnheader "Protein (g)" [ref=e125] [cursor=pointer]
                    - columnheader "Cholesterol(mg)" [ref=e126] [cursor=pointer]
                - rowgroup [ref=e127]:
                  - row "Frozen yogurt 159 6 24 4 70" [ref=e128]:
                    - cell "Frozen yogurt" [ref=e129]:
                      - link "Frozen yogurt" [ref=e130] [cursor=pointer]:
                        - /url: "#"
                        - img [ref=e131]
                        - text: Frozen yogurt
                    - cell "159" [ref=e133]
                    - cell "6" [ref=e134]
                    - cell "24" [ref=e135]
                    - cell "4" [ref=e136]
                    - cell "70" [ref=e137]
                  - row "Ice cream 237 9 37 4 40" [ref=e138]:
                    - cell "Ice cream" [ref=e139]
                    - cell "237" [ref=e140]
                    - cell "9" [ref=e141]
                    - cell "37" [ref=e142]
                    - cell "4" [ref=e143]
                    - cell "40" [ref=e144]
                  - row "Eclair 262 16 24 6 80" [ref=e145]:
                    - cell "Eclair" [ref=e146]
                    - cell "262" [ref=e147]
                    - cell "16" [ref=e148]
                    - cell "24" [ref=e149]
                    - cell "6" [ref=e150]
                    - cell "80" [ref=e151]
                  - row "Cupcake 305 4 67 4 50" [ref=e152]:
                    - cell "Cupcake" [ref=e153]
                    - cell "305" [ref=e154]
                    - cell "4" [ref=e155]
                    - cell "67" [ref=e156]
                    - cell "4" [ref=e157]
                    - cell "50" [ref=e158]
                  - row "Gingerbread 356 16 49 4 60" [ref=e159]:
                    - cell "Gingerbread" [ref=e160]
                    - cell "356" [ref=e161]
                    - cell "16" [ref=e162]
                    - cell "49" [ref=e163]
                    - cell "4" [ref=e164]
                    - cell "60" [ref=e165]
          - generic [ref=e167]:
            - generic [ref=e168]:
              - img [ref=e169]
              - heading "Learning Points" [level=3] [ref=e172]
            - list [ref=e173]:
              - listitem [ref=e174]:
                - img [ref=e175]
                - generic [ref=e178]: Web Table concept
              - listitem [ref=e179]:
                - img [ref=e180]
                - generic [ref=e183]: WebElement Interface
              - listitem [ref=e184]:
                - img [ref=e185]
                - generic [ref=e188]: Chaining of locators
              - listitem [ref=e189]:
                - img [ref=e190]
                - generic [ref=e193]: Comparable (Java)
            - generic [ref=e194]:
              - link "Watch Tutorial" [ref=e195]:
                - /url: /video/webTable
                - img [ref=e196]
                - generic [ref=e198]: Watch Tutorial
              - generic [ref=e199]:
                - text: "Practice ID:"
                - code [ref=e200]: table
          - insertion [ref=e204]:
            - generic [ref=e207]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e209]: Discover more
              - link "Computer Education" [ref=e210] [cursor=pointer]:
                - generic "Computer Education" [ref=e211]
                - img [ref=e213]
              - link "Ice cream" [ref=e215] [cursor=pointer]:
                - generic "Ice cream" [ref=e216]
                - img [ref=e218]
              - link "Frozen yogurt" [ref=e220] [cursor=pointer]:
                - generic "Frozen yogurt" [ref=e221]
                - img [ref=e223]
              - link "Eggs" [ref=e225] [cursor=pointer]:
                - generic "Eggs" [ref=e226]
                - img [ref=e228]
              - link "Distance Learning" [ref=e230] [cursor=pointer]:
                - generic "Distance Learning" [ref=e231]
                - img [ref=e233]
              - link "Dairy & Eggs" [ref=e235] [cursor=pointer]:
                - generic "Dairy & Eggs" [ref=e236]
                - img [ref=e238]
              - link "Candy & Sweets" [ref=e240] [cursor=pointer]:
                - generic "Candy & Sweets" [ref=e241]
                - img [ref=e243]
              - link "Éclairs" [ref=e245] [cursor=pointer]:
                - generic "Éclairs" [ref=e246]
                - img [ref=e248]
        - insertion [ref=e253]:
          - iframe [ref=e255]:
            - iframe [ref=f4e1]:
              - generic [ref=f5e2]:
                - link "Advertisement" [ref=f5e4]:
                  - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjssGYw46cmYajpz8XsFUvYk3Q7cbxFhBN5hYkj5iHuIFu6ioGYMmkpNtALiX9hrhSgapoE6CILx8Q8Icvap0TMpGd3vtnSWdUbMYb2DaJKSGEKWlurEJeBvWoVJRUgUSQ--4BaHWYPO2SGx_H37zIilgrMG9VOmkf96nw-YWWy1TsuZha7PEFbqbLjhI7tXnmNPsSNFY30MtFStvjpYFL8K52xXKqeBYQyfesXDRWK_strJXctYtPN-GR7HiOA8hrMP6IhP_5bnU7hQPOu6u4TJxYeITL4hTKlyGi12fcSUytN-P0qrCTx4D-Y_a-qBF_-0QBvAgEvxYE3Iyy-ZlCQuk_VYlJQ0hflPTR90zQk2gMI2-awlG6rfn6Az1qJM6tqXSCKR6fEZOOgzTjblfzc7p2xsu6OKSSlR8Y_mO7LspYG6qWKJQeSALO5USYKbzzv2CyuIQWWBO7CK61xe9RyEi_dF41qmiedqTYhwyTaY5B_nuS1PVi0-yznyGpLHmp4PNwIHdj0ICHvEPH271Ybp8LfC4V06VKKQ8y6RrJ4xnaIqtUGfFedyFtpBoZI2yhJh5bzD-B0IvDYgiGF-Dc2C0dx9Hp8fRqdgYVorVACEV6go6RqzRS8UkvCqvTbuIIXCWQAJbL1643moO3iokXxv_r-2QhhFm0NCDANXPNl-2VR09WTQTc9xbid5QASZzVdmETCZK3oiB7S4_eNjdFTttkC9VskiB6frpPnvLs4Xg9ek_hRyFLFxrB6FyB99G3No0yxrxMfoi9SQOG4-xXSuHN-aEdT8nfRZ3uCFeCl-sXbQHc7KBQ0dw_fhdJi-PGBfApKzDp3pVEeHP6IRzBg6zpS7MlWf3L52LrB60PKgZZjLY1gKZKObY1Klf0Q-_aIatCJwaMrdy-f06-SaLiu5CKXE-J3Dnl1qTLp05zwEyqybt1-wgcqYaeuM2Rjm2hbfVcZfwNO-sL09i3M1DXAwmQfAn9W-ARBN4zhm1rSwwv4FJnFTDhK9S7y3RPkjacCKVUk5B0kghpvJB0OrZtz5KX0Oeoc9whU4I-GOExQzIvoO0d897DNg3YXxRpbHcT-H1yjZKLUHkRNCn2oWWWatjh7Nn_v92_Sp3KGy8BBCaGarI58pqgzBMjt7BESqf0sYIahIfUlMBd3GAQQtRkw1ZbavE_XGrnWN1NYvVozN12LIwYRwWQlIuEuPA3N_OiJNBoMepkIt-Gvqlh--g4AFAgIsCARdR0U1HHM0MTFXALNKtkX-UpduAQ5Xh6dJTPlIuc1msQ7CntU3H0J4q-xl1AqTUugTczq1deCTCm5tK_oWlFZFvF7nn4h40UkBg9M47j6OZeHsEpEuwSjr8wvOF9aIMRrR-7ddytyIrBZiRtp8Nc7dSUuxbpUyhD78SiA-xGpfmSmkAX9_Zc4vdd5mISWx6l8feepGNxymawGpglLBV4wBbjz0EJsVf_thNZknBb2c4SuoJz0jiHF2ILAj4gZhh4n2mhYvVKH1XiRPylqE2ISW7Hy7KPUelW_y9ARh0Uh4jTmuW4wfeVfZZfvKsM84rqUc2pe3jEM64k8jo7dez2mDGFabbFEpY02ouDfUeXa3zEudOcAqPEYmHBqoUtI98hdK1Q2MnDuMD4KPXkQz7LR7JqYlWitXOXpyJo5cp5GDR3ghZjcNtnstu7RLpJXvRfgz4DCptQ885YnnvM0ZZd_yH3QIk_BK_LwzBMXj-etU04YAbFDXXTnsucucsScTQMmH2guarHAMRmPDxku7Yx9Cw7Dw-nwP5jjk_TLu4e2ItfBE-IbcXdSp2ALDCeY3y&sai=AMfl-YQ67nQi2dpFBxEBsEWj_RanjZGWP5fVCMFat6Jg1xBBL-L3hRAR0oW-oEcX4lZFoDvqRZ5W7LWLo-L6R1BRT5pRgvmgqDo3DZ8rCDa6FwJ2xjsLSqwnpxQhnsqN790KGwqH4UO0dUkwkhOZp2dDlsiKmUBy3H8Xz9ubQ3f_9EaZuZQddvB0II_ynVCWS2Ig311-XCouGcdVVfJXa5LuCuZ_ZLSLNyX4mCE5yHBFhZj5WRbHD2e3YLoxVdWoNCv3WvihOKxBUVPzllc8v1I_9hRneB7YCfUN56c-Yk4szt3VbJQo8EcmOrrEqTwvwnTX38uUUfyS_QkVSXxxKxXXdi8zIJC_LtjrKYcB3KYPiPSRLUII-wzgUxuO3cELqw_UhYjqJXXDXtrHJGDuw7fCgm9KrEE4ZkCGD1sEGSVxA0ZjQNw6fJFRiXM_HdDkjjV0aPBlQgKEn-gBcURciuV6uF4ied2t4ug_0wjHCP_WzF5eHYfSXX3_znWtD-pdd77S5ZQGBJ51FxMo1JuPUNLep7kJ4-C-Rf1Wfrl9db-8Qw8xA5zZcSyPHVJHIH6NHQA6FT-3v9BiHwnkd_hRRxmnAPh9DculJdvNZLEWhG5pBHrR0yQXb2WcNnQDR4dEPsszIRtefvTcbApW4_fGYe1Wx3JfHAyzqHCLL1DyXZ1enGI7s7BMHtAyDCiRuOxXtfiLkiIEYoEzFRgRtgpKBkbb3kY_me88WHJDRVLcEUTzMCQjKmvFgPUHmq_sz_y4ChUIRo6BsUwVpumzmX0aRL7LJOjAVe3pOF6HBdljPIAc-MkDCSeYhINBJPZUfzmflNtjmBmPYzQ38sJIvgXErb2kwd6IzOJM1U0Tt61K34zR9vzQnK3SH7IyKGBUcwvxnM4avzCnqWMFVfnjR_Ji&sig=Cg0ArKJSzBx_ZWJZIkfq&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_728x90-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364381
                  - img "Advertisement" [ref=f5e5]
                - generic [ref=f5e6]:
                  - generic:
                    - img [ref=f5e10] [cursor=pointer]
                    - button [ref=f5e12] [cursor=pointer]:
                      - img [ref=f5e13]
    - contentinfo [ref=e256]:
      - generic [ref=e257]:
        - paragraph [ref=e258]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e259]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e260]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e261]:
          - link "GitHub" [ref=e262]:
            - /url: https://github.com/ortoniKC
            - img [ref=e263]
          - link "YouTube" [ref=e266]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e267]
          - link "LinkedIn" [ref=e270]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e271]
          - link "Contact" [ref=e276]:
            - /url: /contact
          - link "🍕 Support" [ref=e277]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e279]:
    - generic [ref=e282]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e284]: Discover more
      - link "Career Resources & Planning" [ref=e285] [cursor=pointer]:
        - generic "Career Resources & Planning" [ref=e286]
        - img [ref=e288]
      - link "Ancestry & Genealogy" [ref=e290] [cursor=pointer]:
        - generic "Ancestry & Genealogy" [ref=e291]
        - img [ref=e293]
      - link "Programming" [ref=e295] [cursor=pointer]:
        - generic "Programming" [ref=e296]
        - img [ref=e298]
  - insertion [ref=e300]:
    - iframe [ref=e303]:
      - generic [active] [ref=f9e1]:
        - generic [ref=f9e6]:
          - generic [ref=f9e7]:
            - generic "Reserve Bank Of India" [ref=f9e8]:
              - link "Reserve Bank Of India" [ref=f9e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C8yYqdF1Hatm1BuzKssUP2J3ZmAW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6AFP0Fz4phFy0ddWGH89uvp598vR3ngpR4rMc_lUHXZhfEd1Zn2ZrRaeN9CZbPnktslESq6u4XCQIMlc6tqlDbKc4m5xrQo5I5jynHXXXuNNBuJoX4BCalu4DGZ7Zt9KmyZXUDqJmF9qwqUzX7EFpNgDZQhdhIjB1fyxpNfFegsxOqvUU3ys2Jbig1lC0ch0FgbbA-FHLxriIGlGjcxWicCMDoUNuWFYa_BKvAFbpVf9Ti5Jotfp6FHkuW26NYLpk3ddasUKQ28sM-RkRQRJrgLRcmgzVCkNQanyes_OxdiHqgKvUcWFF0HAwASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYwJvzjfe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwimyPON97WVAxVspawCHdhOFlOIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI2b_zjfe1lQMVbKWsAh3YThZTEAEYASAAEgKdXPD_BwE&num=1&cid=CAQSiAIAEQoqgd-dWZxaTdAXE8XJTuPuzB9w5q2tKfCrZvcJG-6kLSx2_WEy0cx462GnwnGj_RdI2T66rnBDhvJAgo9sD5_QNw6C7A09l9WM27oTaLlvAj-wde8l1hd8sNpExZLYo2bDeB6vPdz7OIDsVqPd-re1SJaleKEVelxyhHQYT0ArUYijc_JxKyf9h2F1HWXup7n2vMax7kYtGpkqOry5AK78t2YKosp8HFazojYzbl2kS9baoCnkUJkJt9RsFkMvyVtCNt54f84AyVD8yTohGEf5_OzwxzWoZIGnLEVeWMnyAN6Lf-ZnTJTFYQk7vJ19ubW-Om2NBCtX4Qrn5hp_mujLk_bKIiUYAQ&sig=AOD64_29RsPJOd5U42PzrrFjg6PFiCGMlA&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f9e10]:
              - link "கோரப்படாதவற்றுக்காக கேம்ப்ஸ்" [ref=f9e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C8yYqdF1Hatm1BuzKssUP2J3ZmAW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6AFP0Fz4phFy0ddWGH89uvp598vR3ngpR4rMc_lUHXZhfEd1Zn2ZrRaeN9CZbPnktslESq6u4XCQIMlc6tqlDbKc4m5xrQo5I5jynHXXXuNNBuJoX4BCalu4DGZ7Zt9KmyZXUDqJmF9qwqUzX7EFpNgDZQhdhIjB1fyxpNfFegsxOqvUU3ys2Jbig1lC0ch0FgbbA-FHLxriIGlGjcxWicCMDoUNuWFYa_BKvAFbpVf9Ti5Jotfp6FHkuW26NYLpk3ddasUKQ28sM-RkRQRJrgLRcmgzVCkNQanyes_OxdiHqgKvUcWFF0HAwASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYwJvzjfe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwimyPON97WVAxVspawCHdhOFlOIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI2b_zjfe1lQMVbKWsAh3YThZTEAEYASAAEgKdXPD_BwE&num=1&cid=CAQSiAIAEQoqgd-dWZxaTdAXE8XJTuPuzB9w5q2tKfCrZvcJG-6kLSx2_WEy0cx462GnwnGj_RdI2T66rnBDhvJAgo9sD5_QNw6C7A09l9WM27oTaLlvAj-wde8l1hd8sNpExZLYo2bDeB6vPdz7OIDsVqPd-re1SJaleKEVelxyhHQYT0ArUYijc_JxKyf9h2F1HWXup7n2vMax7kYtGpkqOry5AK78t2YKosp8HFazojYzbl2kS9baoCnkUJkJt9RsFkMvyVtCNt54f84AyVD8yTohGEf5_OzwxzWoZIGnLEVeWMnyAN6Lf-ZnTJTFYQk7vJ19ubW-Om2NBCtX4Qrn5hp_mujLk_bKIiUYAQ&sig=AOD64_29RsPJOd5U42PzrrFjg6PFiCGMlA&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f9e12]:
              - link "கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்" [ref=f9e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C8yYqdF1Hatm1BuzKssUP2J3ZmAW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6AFP0Fz4phFy0ddWGH89uvp598vR3ngpR4rMc_lUHXZhfEd1Zn2ZrRaeN9CZbPnktslESq6u4XCQIMlc6tqlDbKc4m5xrQo5I5jynHXXXuNNBuJoX4BCalu4DGZ7Zt9KmyZXUDqJmF9qwqUzX7EFpNgDZQhdhIjB1fyxpNfFegsxOqvUU3ys2Jbig1lC0ch0FgbbA-FHLxriIGlGjcxWicCMDoUNuWFYa_BKvAFbpVf9Ti5Jotfp6FHkuW26NYLpk3ddasUKQ28sM-RkRQRJrgLRcmgzVCkNQanyes_OxdiHqgKvUcWFF0HAwASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYwJvzjfe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwimyPON97WVAxVspawCHdhOFlOIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI2b_zjfe1lQMVbKWsAh3YThZTEAEYASAAEgKdXPD_BwE&num=1&cid=CAQSiAIAEQoqgd-dWZxaTdAXE8XJTuPuzB9w5q2tKfCrZvcJG-6kLSx2_WEy0cx462GnwnGj_RdI2T66rnBDhvJAgo9sD5_QNw6C7A09l9WM27oTaLlvAj-wde8l1hd8sNpExZLYo2bDeB6vPdz7OIDsVqPd-re1SJaleKEVelxyhHQYT0ArUYijc_JxKyf9h2F1HWXup7n2vMax7kYtGpkqOry5AK78t2YKosp8HFazojYzbl2kS9baoCnkUJkJt9RsFkMvyVtCNt54f84AyVD8yTohGEf5_OzwxzWoZIGnLEVeWMnyAN6Lf-ZnTJTFYQk7vJ19ubW-Om2NBCtX4Qrn5hp_mujLk_bKIiUYAQ&sig=AOD64_29RsPJOd5U42PzrrFjg6PFiCGMlA&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                - text: கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான
                - text: வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்
          - link "Learn More" [ref=f9e17] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=C8yYqdF1Hatm1BuzKssUP2J3ZmAW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6AFP0Fz4phFy0ddWGH89uvp598vR3ngpR4rMc_lUHXZhfEd1Zn2ZrRaeN9CZbPnktslESq6u4XCQIMlc6tqlDbKc4m5xrQo5I5jynHXXXuNNBuJoX4BCalu4DGZ7Zt9KmyZXUDqJmF9qwqUzX7EFpNgDZQhdhIjB1fyxpNfFegsxOqvUU3ys2Jbig1lC0ch0FgbbA-FHLxriIGlGjcxWicCMDoUNuWFYa_BKvAFbpVf9Ti5Jotfp6FHkuW26NYLpk3ddasUKQ28sM-RkRQRJrgLRcmgzVCkNQanyes_OxdiHqgKvUcWFF0HAwASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYwJvzjfe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwimyPON97WVAxVspawCHdhOFlOIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI2b_zjfe1lQMVbKWsAh3YThZTEAEYASAAEgKdXPD_BwE&num=1&cid=CAQSiAIAEQoqgd-dWZxaTdAXE8XJTuPuzB9w5q2tKfCrZvcJG-6kLSx2_WEy0cx462GnwnGj_RdI2T66rnBDhvJAgo9sD5_QNw6C7A09l9WM27oTaLlvAj-wde8l1hd8sNpExZLYo2bDeB6vPdz7OIDsVqPd-re1SJaleKEVelxyhHQYT0ArUYijc_JxKyf9h2F1HWXup7n2vMax7kYtGpkqOry5AK78t2YKosp8HFazojYzbl2kS9baoCnkUJkJt9RsFkMvyVtCNt54f84AyVD8yTohGEf5_OzwxzWoZIGnLEVeWMnyAN6Lf-ZnTJTFYQk7vJ19ubW-Om2NBCtX4Qrn5hp_mujLk_bKIiUYAQ&sig=AOD64_29RsPJOd5U42PzrrFjg6PFiCGMlA&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic [ref=f9e18]: Learn More
            - img [ref=f9e19]
        - img [ref=f9e24] [cursor=pointer]
        - button [ref=f9e26] [cursor=pointer]:
          - img [ref=f9e27]
        - iframe
```

# Test source

```ts
  1   | import { test, expect } from "@playwright/test";
  2   | 
  3   | test.skip("First table test", async ({ page }) => {
  4   |   await page.goto("https://letcode.in/table");
  5   |   await page.waitForSelector("#shopping");
  6   |   await expect(page.locator("#shopping")).toBeVisible();
  7   |   const tableRows = await page.locator("#shopping tbody tr");
  8   |   const rowCount = await tableRows.count();
  9   |   expect(rowCount).toBe(4);
  10  |   const tableHeaders = await page.locator("#shopping thead tr th");
  11  |   await expect(tableHeaders).toHaveCount(2);
  12  |   await expect(tableHeaders.nth(0)).toHaveText("Items");
  13  |   await expect(tableHeaders.nth(1)).toHaveText("Price");
  14  | });
  15  | 
  16  | test("Second table test", async ({ page }) => {
  17  |   await page.goto("https://letcode.in/table");
  18  |   await page.waitForSelector("#simpletable");
  19  |   const tableFirstRow = await page.locator("#simpletable tbody tr").first();
  20  |   const firstRowCells = await tableFirstRow.locator("td");
  21  |   await expect(firstRowCells).toHaveCount(4);
  22  | 
  23  |   await page.waitForTimeout(3000);
  24  | });
  25  | 
  26  | test("Third table test", async ({ page }) => {
  27  |   await page.goto("https://letcode.in/table");
  28  |   await page.waitForSelector("#simpletable");
  29  |   const username = "Yashwanth";
  30  |   await expect(
  31  |     page.locator("#simpletable tbody tr", { hasText: username }),
  32  |   ).toBeVisible();
  33  |   const selectedRow = await page.locator("#simpletable tbody tr", {
  34  |     hasText: username,
  35  |   });
  36  |   const selectedRowCells = await selectedRow.locator("td input");
> 37  |   await selectedRowCells.check();
      |                          ^ Error: locator.check: Test timeout of 30000ms exceeded.
  38  |   await expect(selectedRowCells).toBeChecked();
  39  |   await page.waitForTimeout(3000);
  40  | });
  41  | 
  42  | // test("Fourth table test", async ({ page }) => {
  43  | // await page.goto("https://letcode.in/table");
  44  | // const table = await page.locator('.w-full.text-sm.text-left.text-slate-600.dark:text-slate-300');
  45  | // await table.locator('thead tr th').nth(1).dblclick();
  46  | // const table
  47  | // })
  48  | 
  49  | test("for testing the table check box using input", async ({ page }) => {
  50  |   await page.goto("https://letcode.in/table");
  51  |   await page.waitForSelector("table");
  52  |   const secondTable = await page.locator("table").nth(1);
  53  |   const userName = "Koushik";
  54  |   const userRow = await secondTable
  55  |     .locator("tbody tr")
  56  |     .filter({ hasText: userName });
  57  |   await userRow.locator('//input[@type="checkbox"]').click();
  58  |   await page.waitForTimeout(3000);
  59  | });
  60  | 
  61  | test("DatePicker", async ({ page }) => {
  62  |   await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
  63  | 
  64  |   const selectedDay = 12;
  65  |   const selectedMonthText = "March";
  66  |   const selectedYear = 2029;
  67  | 
  68  |   const frame = page.frameLocator(".demo-frame").first();
  69  |   const dateInput = frame.locator("#datepicker");
  70  | 
  71  |   await dateInput.click();
  72  |   await frame.locator(".ui-datepicker-calendar").waitFor({ state: "visible" });
  73  | 
  74  |   while (true) {
  75  |     const currentYear = Number(
  76  |       (await frame.locator(".ui-datepicker-year").textContent())?.trim(),
  77  |     );
  78  | 
  79  |     if (currentYear === selectedYear) {
  80  |       break;
  81  |     }
  82  | 
  83  |     if (selectedYear < currentYear) {
  84  |       await frame.locator(".ui-datepicker-prev").click();
  85  |     } else {
  86  |       await frame.locator(".ui-datepicker-next").click();
  87  |     }
  88  | 
  89  |     await page.waitForTimeout(200);
  90  |   }
  91  | 
  92  |   while (true) {
  93  |     const currentMonth = (await frame.locator(".ui-datepicker-month").textContent())?.trim();
  94  | 
  95  |     if (currentMonth === selectedMonthText) {
  96  |       break;
  97  |     }
  98  | 
  99  |     const monthOrder = [
  100 |       "January",
  101 |       "February",
  102 |       "March",
  103 |       "April",
  104 |       "May",
  105 |       "June",
  106 |       "July",
  107 |       "August",
  108 |       "September",
  109 |       "October",
  110 |       "November",
  111 |       "December",
  112 |     ];
  113 | 
  114 |     const currentMonthIndex = monthOrder.indexOf(currentMonth || "");
  115 |     const selectedMonthIndex = monthOrder.indexOf(selectedMonthText);
  116 | 
  117 |     if (currentMonthIndex === -1 || selectedMonthIndex === -1) {
  118 |       throw new Error(`Invalid month value: current='${currentMonth}' target='${selectedMonthText}'`);
  119 |     }
  120 | 
  121 |     if (selectedMonthIndex < currentMonthIndex) {
  122 |       await frame.locator(".ui-datepicker-prev").click();
  123 |               } else {
  124 |       await frame.locator(".ui-datepicker-next").click();
  125 |     }
  126 | 
  127 |     await page.waitForTimeout(200);
  128 |   }
  129 | 
  130 |   await expect(frame.locator(".ui-datepicker-year")).toHaveText(String(selectedYear));
  131 |   await expect(frame.locator(".ui-datepicker-month")).toHaveText(selectedMonthText);
  132 | 
  133 |   await frame.locator(`.ui-datepicker-calendar td a:text-is("${selectedDay}")`).first().click();
  134 |   await expect(dateInput).toHaveValue(/03\/12\/2029/);
  135 | });
  136 |   
  137 | 
```