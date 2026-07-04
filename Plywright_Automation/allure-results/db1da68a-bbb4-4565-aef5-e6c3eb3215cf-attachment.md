# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable.spec.ts >> for testing the table check box using input
- Location: tests\WebTable.spec.ts:49:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.click: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('table').nth(1).locator('tbody tr').filter({ hasText: 'Koushik' }).locator('//input[@type="checkbox"]')
    - locator resolved to <input id="first" type="checkbox" class="q w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CNDIhJD3tZUDFYF7OAUdh6oJsg" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CNDIhJD3tZUDFYF7OAUdh6oJsg" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <input id="second" type="checkbox" class="qe w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"/> from <tr>…</tr> subtree intercepts pointer events
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
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CNDIhJD3tZUDFYF7OAUdh6oJsg" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
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
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CNDIhJD3tZUDFYF7OAUdh6oJsg" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <input id="second" type="checkbox" class="qe w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"/> from <tr>…</tr> subtree intercepts pointer events
  2 × retrying click action
      - waiting 500ms
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
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CNDIhJD3tZUDFYF7OAUdh6oJsg" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
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
                    - cell "Eggs" [ref=e68]
                    - cell "48" [ref=e69]
                  - row "Corn 480" [ref=e70]:
                    - cell "Corn" [ref=e71]
                    - cell "480" [ref=e72]
                - rowgroup [ref=e73]:
                  - row "Total 858" [ref=e74]:
                    - cell "Total" [ref=e75]
                    - cell "858" [ref=e76]
            - generic [ref=e77]:
              - heading "Let's handle it😉" [level=2] [ref=e78]
              - paragraph [ref=e79]: ~ Mark Raj as present
              - table [ref=e81]:
                - rowgroup [ref=e82]:
                  - row "First name Last name Email address Present/Absent" [ref=e83]:
                    - columnheader "First name" [ref=e84]
                    - columnheader "Last name" [ref=e85]
                    - columnheader "Email address" [ref=e86]
                    - columnheader "Present/Absent" [ref=e87]
                - rowgroup [ref=e88]:
                  - row "Koushik Chatterjee koushik@letcode.in" [ref=e89]:
                    - cell "Koushik" [ref=e90]
                    - cell "Chatterjee" [ref=e91]
                    - cell "koushik@letcode.in" [ref=e92]
                    - cell [ref=e93]:
                      - checkbox [ref=e94] [cursor=pointer]
                  - row "Yashwanth Raj yashwanth@letcode.in" [ref=e95]:
                    - cell "Yashwanth" [ref=e96]
                    - cell "Raj" [ref=e97]
                    - cell "yashwanth@letcode.in" [ref=e98]
                    - cell [ref=e99]:
                      - checkbox [ref=e100] [cursor=pointer]
                  - row "Iron Man man@letcode.in" [ref=e101]:
                    - cell "Iron" [ref=e102]
                    - cell "Man" [ref=e103]
                    - cell "man@letcode.in" [ref=e104]
                    - cell [ref=e105]:
                      - checkbox [ref=e106] [cursor=pointer]
            - generic [ref=e107]:
              - heading "Sortable Tables" [level=2] [ref=e108]
              - paragraph [ref=e109]: ~ Check if the sorting is working properly (Click column headers to sort)
              - table [ref=e111]:
                - rowgroup [ref=e112]:
                  - row "Dessert (100g) Calories Fat (g) Carbs (g) Protein (g) Cholesterol(mg)" [ref=e113]:
                    - columnheader "Dessert (100g)" [ref=e114] [cursor=pointer]
                    - columnheader "Calories" [ref=e115] [cursor=pointer]
                    - columnheader "Fat (g)" [ref=e116] [cursor=pointer]
                    - columnheader "Carbs (g)" [ref=e117] [cursor=pointer]
                    - columnheader "Protein (g)" [ref=e118] [cursor=pointer]
                    - columnheader "Cholesterol(mg)" [ref=e119] [cursor=pointer]
                - rowgroup [ref=e120]:
                  - row "Frozen yogurt 159 6 24 4 70" [ref=e121]:
                    - cell "Frozen yogurt" [ref=e122]
                    - cell "159" [ref=e123]
                    - cell "6" [ref=e124]
                    - cell "24" [ref=e125]
                    - cell "4" [ref=e126]
                    - cell "70" [ref=e127]
                  - row "Ice cream 237 9 37 4 40" [ref=e128]:
                    - cell "Ice cream" [ref=e129]:
                      - link "Ice cream" [ref=e130] [cursor=pointer]:
                        - /url: "#"
                        - img [ref=e131]
                        - text: Ice cream
                    - cell "237" [ref=e133]
                    - cell "9" [ref=e134]
                    - cell "37" [ref=e135]
                    - cell "4" [ref=e136]
                    - cell "40" [ref=e137]
                  - row "Eclair 262 16 24 6 80" [ref=e138]:
                    - cell "Eclair" [ref=e139]
                    - cell "262" [ref=e140]
                    - cell "16" [ref=e141]
                    - cell "24" [ref=e142]
                    - cell "6" [ref=e143]
                    - cell "80" [ref=e144]
                  - row "Cupcake 305 4 67 4 50" [ref=e145]:
                    - cell "Cupcake" [ref=e146]
                    - cell "305" [ref=e147]
                    - cell "4" [ref=e148]
                    - cell "67" [ref=e149]
                    - cell "4" [ref=e150]
                    - cell "50" [ref=e151]
                  - row "Gingerbread 356 16 49 4 60" [ref=e152]:
                    - cell "Gingerbread" [ref=e153]
                    - cell "356" [ref=e154]
                    - cell "16" [ref=e155]
                    - cell "49" [ref=e156]
                    - cell "4" [ref=e157]
                    - cell "60" [ref=e158]
          - generic [ref=e160]:
            - generic [ref=e161]:
              - img [ref=e162]
              - heading "Learning Points" [level=3] [ref=e165]
            - list [ref=e166]:
              - listitem [ref=e167]:
                - img [ref=e168]
                - generic [ref=e171]: Web Table concept
              - listitem [ref=e172]:
                - img [ref=e173]
                - generic [ref=e176]: WebElement Interface
              - listitem [ref=e177]:
                - img [ref=e178]
                - generic [ref=e181]: Chaining of locators
              - listitem [ref=e182]:
                - img [ref=e183]
                - generic [ref=e186]: Comparable (Java)
            - generic [ref=e187]:
              - link "Watch Tutorial" [ref=e188]:
                - /url: /video/webTable
                - img [ref=e189]
                - generic [ref=e191]: Watch Tutorial
              - generic [ref=e192]:
                - text: "Practice ID:"
                - code [ref=e193]: table
          - insertion [ref=e197]:
            - generic [ref=e200]:
              - heading "These are topics related to the article that might interest you" [level=2] [ref=e202]: Discover more
              - link "Candy & Sweets" [ref=e203] [cursor=pointer]:
                - generic "Candy & Sweets" [ref=e204]
                - img [ref=e206]
              - link "Ice Cream" [ref=e208] [cursor=pointer]:
                - generic "Ice Cream" [ref=e209]
                - img [ref=e211]
              - link "Ice cream" [ref=e213] [cursor=pointer]:
                - generic "Ice cream" [ref=e214]
                - img [ref=e216]
              - link "Chocolate" [ref=e218] [cursor=pointer]:
                - generic "Chocolate" [ref=e219]
                - img [ref=e221]
              - link "Playwright Quiz Application" [ref=e223] [cursor=pointer]:
                - generic "Playwright Quiz Application" [ref=e224]
                - img [ref=e226]
              - link "Playwright Runner Extension" [ref=e228] [cursor=pointer]:
                - generic "Playwright Runner Extension" [ref=e229]
                - img [ref=e231]
              - link "Automation Interview Prep" [ref=e233] [cursor=pointer]:
                - generic "Automation Interview Prep" [ref=e234]
                - img [ref=e236]
              - link "Cypress Automation Tools" [ref=e238] [cursor=pointer]:
                - generic "Cypress Automation Tools" [ref=e239]
                - img [ref=e241]
        - insertion [ref=e246]:
          - iframe [ref=e248]:
            - iframe [ref=f4e1]:
              - generic [ref=f5e2]:
                - link "Advertisement" [ref=f5e4]:
                  - /url: https://adclick.g.doubleclick.net/pcs/click?xai=AKAOjsuKfmSJl4IFY7bXbjIRv_NKFUED5Q4WBD4GX69oWzTH8rfeRhtq6BPcsNamOU4TXm4S3CmKOJgHb-AYV_q_FFZ0-KDjIz7htxHDP_2hHoixe_Oq1FUYcgGlFtkz9xhqWvOB6xbkBHl4ZBQOKp16Pfr5A5YeOiz_fFCIWilZhO8sHLjmT8w23o7w150td-PatnFRIwT0KenlKYcQTuwmT-Pm-q3QhuVzNAWGBtKypNnw73UTCL8UZkHM8NjfAtfBWOfrADsQ0OL9KCZVffQK8swqO18Swof0EUmsjc5CR2zrybOMznEqpoYvpa0_Z1G8CKlVsFecAHGFmEFZgtcFE_gIKS4nMOA46ujOOFKQR8r-Uoeqpm97sTGzNpBNIT42mO2v7TS87jyPR6d84mv0K6yMLuwDxKn_YG6abC6LrJEMJW5I0oZtEXMGyLL4FADCP2sziP5N5Oc2BcgfWdAD6n6pC2in5lFgOHJsIHKTzrWwRiligE1QTNvZn0PwKtHrhqwpZEKjY2i84nE9m23j__YdEPwuJwG--Q7fEB1xVJ1VuSIQmA6p9_dkE1MctOl2kIOGgoDwOhh8sb2meLxrZxcL9w-m6U4_VphojIu-79X0KTKqP_VJHuhBmVFJODPWplcoqc0LPjZTBE-Z1n5c92y0RSgp16xycHXHlfTHEkEt3pTXKYAjnxsFkP8cF7OutRdWJc5MXtl6f14WazLvYSZR1wZf9qWETDPScrTWSkJtcEw3w0s5cLLCkW4GAn8xkc16tosdC3pHEFSFahxeK1RNvw27MA9eTpu9bzo9Cgw0d3QtIpBu5se-CWVZVfEQktsO0IfphCFYDCM51TA2b1Sa2U0w0eSBsD5l-lDTesYkqTqH0H3n2u9dXLgDBw7CxMk-_RF0Iv8MEbHviYfAKy4b7rkCgRxung-CngAWpNdBk5N2OJJczsgYqSsDguKBFHvi-auq5mQjYO4sJ6BJpOnhJM11HIvvvKXpSctcSfp1sf6qEW3ARifWHXqhVutKnW9-jZMApLIPaLZ4xRc8O0yT9xT_xS5xwcF9L08vG4-n_xA2MpAz7xfmGVYJTAiLwh_ryALj5HSYWxPd2vxPLRKMmeYmhLsYHrHdEiG3fhyRfDoLcvtxW0_cZMgsLtO2n-43E17cmyPoIA_4pcB5_VffV5iLf5sS0aysRS-1MuLEPb0-KfMKWvQcgToMG7N88PrawoVzp-GZt2iJaCrkIojX20PFbkTZ68rwUFeG0zgzJBvk52xPpfE-DTQk7L47EJw587hy1Y79FPndxka2gi_B89_VdrXmTTZYHYVYitU51H-GWDIZrnIjSqzhbqAiK2DPNFlhzS_yE8QSbVBKnKdDwBK3xK4Aj1a2c9vBGyK9N9r8ynnZHuaQU5j9t7KJstVBFWXij_Nn91TXDlm8pK8Bq_abRhGWM4bIkCAx1L4GnD38dfkeftBrO0FmxzLJq0pq0JLA6TKZF8a3RbbM4kt1wauEgz-xSJ6QMsIg416hBF4cAgr3OD4mwNoPRSrtIYLZ0ny1I7NaOTKd0TqcPCl-0-GdyrYJYSkL1YWWMj9c0JNEFbYonnaxcxHPKTrkutaU-jDt4Z4w9M39rYyyt2FlDR_LjsuIo9Qo0yhujm-fk5F041fU-EK1XjzHbbiPy9gYSzHcYEJetDR1dQ1jiBE18bHS9OJhsDNDLkpfcZN_w8qhNqS0E9OcJlonQkn_0OGYuwA8MboTs3FLKtQQO1QvCbijcL0on26HXENIKPvG4C88ONPsr2mNdRdWarcvnkh5Rvi_PjVXzlXAlIK83jE5D2YwABVPWZ5iFSiB0fKrVKLljJXNp6I&sai=AMfl-YRJ8FgX94Z4kxHSoLW69JL7MyInJ-onh7vKnLPa7S-tTUn5grU9_26e0H5vHwmXWOV-b9rfFxIRYSr0WRsMVBF902JhH66hm7IfmabN_1tiExUpIjaV93EoEh78jPuy5fMUkw1HQeKkRRQh0oIejhmjJw9eTIdR6UJngcO8OyRErAsUlnqhj2ZukZp3E2v0ZBrwZg2qUA1ki6OXX9wPRv39js7knpKSwppmEI7CJOPd5_9qHheYOnr_S62ZX6dB92N2yPQt35NKltxKd0ZwbytFhPGJwHXfdDNAlvIun5mA3jD9Yt3SSQjch6Y0sYXDxoVTeOb0HVOPLE7d1u7-jK7-kJZJ0hUfw7I2U86AdSZ-t54AMlvOyRtxpI7LmbfKSvXo5PORrPYJG55D9JbP9PkgVjzy5vdT1j_8zJQc7WU1WHcp0_An2ia-9D3VanAqFAC_P1LLJ8pfcH5_KFq7WwZOLLbKJM5iTDwa3MBWfojlhoP4wVKu3ShjthajXr_0HdH0OHFTa4hwry9j8ukanK9MkHnka6yn3boFseSUw4YJ_LNBjmcOmtgIWEKgXy7eb5mwpMBSaQgV2G0BaMAlRTWKs1TfqoPVv78Rpl4cwrYwao_FG2kP3JLXbUL6HPB1lQQdzqWsoOthCRJTlXNZUESR7hLTzs5o0Hd63a_mSv9PVSvmwxVk6FACc21-F22Sqs1CIjokC0ZYNfEBvHiJwHAY4vOT7v3psS03OTvFCPC5ptLOP49j76euZimRXj3TuVmloaLeHHYqSl95LUah5QqSf8089NO3hDse7xWOPHHkLjdkaCWBANSxOCcspIcnUPRjx-uQ6I079eMxkUNSIk_W6aLQWbeSUk69WcIwOP3D0cpNlN2m7HHVDw4Ecnl8a-hPigJ4fpWhx9z3X2YK&sig=Cg0ArKJSzBvp0ZUpYoI6&fbs_aeid=%5Bgw_fbsaeid%5D&urlfix=1&adurl=https://careers.ti.com/en/sites/CX/jobs%3Flocation%3DIndia%26locationId%3D300000000361484%26locationLevel%3Dcountry%26mode%3Dlocation%26HQS%3Dcorp-emp-rec-workplacein_null-dspbspros-car-gdv360_728x90-in_en_awr%26dclid%3D%25edclid!%26gad_source%3D7%26gad_campaignid%3D23756364381
                  - img "Advertisement" [ref=f5e5]
                - generic [ref=f5e6]:
                  - generic:
                    - img [ref=f5e10] [cursor=pointer]
                    - button [ref=f5e12] [cursor=pointer]:
                      - img [ref=f5e13]
    - contentinfo [ref=e249]:
      - generic [ref=e250]:
        - paragraph [ref=e251]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e252]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e253]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e254]:
          - link "GitHub" [ref=e255]:
            - /url: https://github.com/ortoniKC
            - img [ref=e256]
          - link "YouTube" [ref=e259]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e260]
          - link "LinkedIn" [ref=e263]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e264]
          - link "Contact" [ref=e269]:
            - /url: /contact
          - link "🍕 Support" [ref=e270]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e271]:
    - iframe [ref=e274]:
      - generic [active] [ref=f7e1]:
        - generic [ref=f7e6]:
          - generic [ref=f7e7]:
            - generic "Reserve Bank Of India" [ref=f7e8]:
              - link "Reserve Bank Of India" [ref=f7e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CUcWleF1HatCsI4H34dkPh9WmkAu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE7gFP0G3ooZnqBsHXASGefCYYWB6u4f6YXcwn-CxM_Yk4KrPN1R0BlQjM2uSCC7sfSu8UHBXUWw_ha0G5-w1ECcLEN3xGQxm5yrBVjCDU8jdk9DLVa1QoRAwrdJwj9f8dtWTzrbYzcNdLfjdphdpfD5sR-yvEx_-jSem47a3j0WevQrfq_9cZ1PPvm-0-CnqyFx0hG1kjpSBSuWaB_txmlinAWBeq_VNpzAHh4sTcBK84OvCun_v_ww8j6l2NA_BMaeGfXcrtQh8dtWYIT8vzdF6vAF-oGstDyYSXjPl82A3PMUoart9cJemRNdr6YrC5wASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY24WDkPe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwiC0YSQ97WVAxWBezgFHYeqCbKIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI0MiEkPe1lQMVgXs4BR2HqgmyEAEYASAAEgJb0vD_BwE&num=1&cid=CAQShwIAEQoqgSA8oT1HAAf28d9ZsbFiICAbMY0KbqORW2EeQjUGVzi3Y6lMCkalJQYqX1rKbQONcmUUnk8CnwOAHrq792WRvHqpDuUJuHr0nMYXBoWvK7De5B3TK2EUCT4QcfHh6M_K4OXEqomNkpvf9JvIeaRM1-29d43X66C8a9oG1nd544c4w3OupWs2vzfuHbnaf18no6hja2Db-GBpmPrPmv8st0ifIxXasx4fBfYhjo4B-huJp9feS7upLigMy0FW3gUA-cMz3lbz1T3aDQr205jbAg-kt3kR0hqDkYPfuUxX19lnIfQHkzBFSiqlTYVmHwYtSUDZD8mQBLMDc1A2cp_IPHpcCBgB&sig=AOD64_2CRmdVLLE5WCqFrFG9yqww-0ISuQ&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f7e10]:
              - link "பழைய கணக்கில் மறந்த பணமா?" [ref=f7e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CUcWleF1HatCsI4H34dkPh9WmkAu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE7gFP0G3ooZnqBsHXASGefCYYWB6u4f6YXcwn-CxM_Yk4KrPN1R0BlQjM2uSCC7sfSu8UHBXUWw_ha0G5-w1ECcLEN3xGQxm5yrBVjCDU8jdk9DLVa1QoRAwrdJwj9f8dtWTzrbYzcNdLfjdphdpfD5sR-yvEx_-jSem47a3j0WevQrfq_9cZ1PPvm-0-CnqyFx0hG1kjpSBSuWaB_txmlinAWBeq_VNpzAHh4sTcBK84OvCun_v_ww8j6l2NA_BMaeGfXcrtQh8dtWYIT8vzdF6vAF-oGstDyYSXjPl82A3PMUoart9cJemRNdr6YrC5wASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY24WDkPe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwiC0YSQ97WVAxWBezgFHYeqCbKIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI0MiEkPe1lQMVgXs4BR2HqgmyEAEYASAAEgJb0vD_BwE&num=1&cid=CAQShwIAEQoqgSA8oT1HAAf28d9ZsbFiICAbMY0KbqORW2EeQjUGVzi3Y6lMCkalJQYqX1rKbQONcmUUnk8CnwOAHrq792WRvHqpDuUJuHr0nMYXBoWvK7De5B3TK2EUCT4QcfHh6M_K4OXEqomNkpvf9JvIeaRM1-29d43X66C8a9oG1nd544c4w3OupWs2vzfuHbnaf18no6hja2Db-GBpmPrPmv8st0ifIxXasx4fBfYhjo4B-huJp9feS7upLigMy0FW3gUA-cMz3lbz1T3aDQr205jbAg-kt3kR0hqDkYPfuUxX19lnIfQHkzBFSiqlTYVmHwYtSUDZD8mQBLMDc1A2cp_IPHpcCBgB&sig=AOD64_2CRmdVLLE5WCqFrFG9yqww-0ISuQ&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f7e12]:
              - link "கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்" [ref=f7e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CUcWleF1HatCsI4H34dkPh9WmkAu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE7gFP0G3ooZnqBsHXASGefCYYWB6u4f6YXcwn-CxM_Yk4KrPN1R0BlQjM2uSCC7sfSu8UHBXUWw_ha0G5-w1ECcLEN3xGQxm5yrBVjCDU8jdk9DLVa1QoRAwrdJwj9f8dtWTzrbYzcNdLfjdphdpfD5sR-yvEx_-jSem47a3j0WevQrfq_9cZ1PPvm-0-CnqyFx0hG1kjpSBSuWaB_txmlinAWBeq_VNpzAHh4sTcBK84OvCun_v_ww8j6l2NA_BMaeGfXcrtQh8dtWYIT8vzdF6vAF-oGstDyYSXjPl82A3PMUoart9cJemRNdr6YrC5wASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY24WDkPe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwiC0YSQ97WVAxWBezgFHYeqCbKIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI0MiEkPe1lQMVgXs4BR2HqgmyEAEYASAAEgJb0vD_BwE&num=1&cid=CAQShwIAEQoqgSA8oT1HAAf28d9ZsbFiICAbMY0KbqORW2EeQjUGVzi3Y6lMCkalJQYqX1rKbQONcmUUnk8CnwOAHrq792WRvHqpDuUJuHr0nMYXBoWvK7De5B3TK2EUCT4QcfHh6M_K4OXEqomNkpvf9JvIeaRM1-29d43X66C8a9oG1nd544c4w3OupWs2vzfuHbnaf18no6hja2Db-GBpmPrPmv8st0ifIxXasx4fBfYhjo4B-huJp9feS7upLigMy0FW3gUA-cMz3lbz1T3aDQr205jbAg-kt3kR0hqDkYPfuUxX19lnIfQHkzBFSiqlTYVmHwYtSUDZD8mQBLMDc1A2cp_IPHpcCBgB&sig=AOD64_2CRmdVLLE5WCqFrFG9yqww-0ISuQ&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                - text: கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான
                - text: வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்
          - link "Learn More" [ref=f7e17] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CUcWleF1HatCsI4H34dkPh9WmkAu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE7gFP0G3ooZnqBsHXASGefCYYWB6u4f6YXcwn-CxM_Yk4KrPN1R0BlQjM2uSCC7sfSu8UHBXUWw_ha0G5-w1ECcLEN3xGQxm5yrBVjCDU8jdk9DLVa1QoRAwrdJwj9f8dtWTzrbYzcNdLfjdphdpfD5sR-yvEx_-jSem47a3j0WevQrfq_9cZ1PPvm-0-CnqyFx0hG1kjpSBSuWaB_txmlinAWBeq_VNpzAHh4sTcBK84OvCun_v_ww8j6l2NA_BMaeGfXcrtQh8dtWYIT8vzdF6vAF-oGstDyYSXjPl82A3PMUoart9cJemRNdr6YrC5wASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgHpuuxAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpY24WDkPe1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDA8qCgoIjt-xApXisQKQAQGqDQJJTsgNAeoNEwiC0YSQ97WVAxWBezgFHYeqCbKIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMI0MiEkPe1lQMVgXs4BR2HqgmyEAEYASAAEgJb0vD_BwE&num=1&cid=CAQShwIAEQoqgSA8oT1HAAf28d9ZsbFiICAbMY0KbqORW2EeQjUGVzi3Y6lMCkalJQYqX1rKbQONcmUUnk8CnwOAHrq792WRvHqpDuUJuHr0nMYXBoWvK7De5B3TK2EUCT4QcfHh6M_K4OXEqomNkpvf9JvIeaRM1-29d43X66C8a9oG1nd544c4w3OupWs2vzfuHbnaf18no6hja2Db-GBpmPrPmv8st0ifIxXasx4fBfYhjo4B-huJp9feS7upLigMy0FW3gUA-cMz3lbz1T3aDQr205jbAg-kt3kR0hqDkYPfuUxX19lnIfQHkzBFSiqlTYVmHwYtSUDZD8mQBLMDc1A2cp_IPHpcCBgB&sig=AOD64_2CRmdVLLE5WCqFrFG9yqww-0ISuQ&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic [ref=f7e18]: Learn More
            - img [ref=f7e19]
        - img [ref=f7e24] [cursor=pointer]
        - button [ref=f7e26] [cursor=pointer]:
          - img [ref=f7e27]
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
  37  |   await selectedRowCells.check();
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
> 57  |   await userRow.locator('//input[@type="checkbox"]').click();
      |                                                      ^ Error: locator.click: Test timeout of 30000ms exceeded.
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
  138 | 
  139 |   test.skip('Drag and Drop and scroll and hover and right click',async ({page})=>{
  140 |     await page.goto('//url is here');
  141 | 
  142 | // right click
  143 | await page.locator('').click({button:"right"});
  144 | // or 
  145 | await page.click('locator',{button:'right'});
  146 | 
  147 | // Drag and Drop
  148 | await page.locator('drag start locator the item which i have to drag').dragTo( page.locator('locator'));
  149 | 
  150 | // or
  151 | await page.dragAndDrop('sourceLocator','targetLocator');
  152 | 
  153 | 
  154 | 
  155 | // scroll down 
  156 | 
  157 | await page.mouse.wheel(0,500)
```