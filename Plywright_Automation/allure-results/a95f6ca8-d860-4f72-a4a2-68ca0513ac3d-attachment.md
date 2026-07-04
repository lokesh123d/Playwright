# Instructions

- Following Playwright test failed.
- Explain why, be concise, respect Playwright best practices.
- Provide a snippet of code with the fix, if possible.

# Test info

- Name: WebTable.spec.ts >> for testing the table check box using input
- Location: tests\WebTable.spec.ts:46:5

# Error details

```
Test timeout of 30000ms exceeded.
```

```
Error: locator.check: Test timeout of 30000ms exceeded.
Call log:
  - waiting for locator('#simpletable tbody tr').filter({ hasText: 'Koushik' }).first().locator('input[type="checkbox"]')
    - locator resolved to <input id="first" type="checkbox" class="q w-4 h-4 text-emerald-600 rounded border-slate-300 focus:ring-emerald-500/20 focus:border-emerald-500 transition-all duration-200 cursor-pointer"/>
  - attempting click action
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_4" height="100%" scrolling="no" name="aswift_4" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!5" data-google-query-id="CJjWga_7tZUDFeEDgwMd9_Ip0Q" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_4" height="100%" scrolling="no" name="aswift_4" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!5" data-google-query-id="CJjWga_7tZUDFeEDgwMd9_Ip0Q" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td class="px-4 py-2">…</td> from <tr>…</tr> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    2 × waiting for element to be visible, enabled and stable
      - element is visible, enabled and stable
      - scrolling into view if needed
      - done scrolling
      - <div class="container mx-auto flex items-center justify-between h-full px-4 md:px-6 lg:px-8">…</div> from <nav role="navigation" aria-label="main navigation" class="fixed top-0 left-0 right-0 z-50 h-16 bg-white/85 dark:bg-[#080d1a]/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-black/30">…</nav> subtree intercepts pointer events
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
          - generic [ref=e201]:
            - generic:
              - generic:
                - insertion:
                  - iframe [ref=e203]:
                    
        - insertion [ref=e207]:
          - generic [ref=e209]:
            - generic "These are topics related to the article that might interest you" [ref=e210]: Discover more
            - link "Data Management" [ref=e211] [cursor=pointer]:
              - img [ref=e213]
              - text: Data Management
            - link "Candy & Sweets" [ref=e215] [cursor=pointer]:
              - img [ref=e217]
              - text: Candy & Sweets
            - link "Baked Goods" [ref=e219] [cursor=pointer]:
              - img [ref=e221]
              - text: Baked Goods
            - link "Cupcakes" [ref=e223] [cursor=pointer]:
              - img [ref=e225]
              - text: Cupcakes
            - link "Chocolate" [ref=e227] [cursor=pointer]:
              - img [ref=e229]
              - text: Chocolate
            - link "Career Resources & Planning" [ref=e231] [cursor=pointer]:
              - img [ref=e233]
              - text: Career Resources & Planning
            - link "Ice cream" [ref=e235] [cursor=pointer]:
              - img [ref=e237]
              - text: Ice cream
            - link "Educational Resources" [ref=e239] [cursor=pointer]:
              - img [ref=e241]
              - text: Educational Resources
            - link "Distance Learning" [ref=e243] [cursor=pointer]:
              - img [ref=e245]
              - text: Distance Learning
            - link "Eggs" [ref=e247] [cursor=pointer]:
              - img [ref=e249]
              - text: Eggs
    - contentinfo [ref=e251]:
      - generic [ref=e252]:
        - paragraph [ref=e253]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e254]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e255]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e256]:
          - link "GitHub" [ref=e257]:
            - /url: https://github.com/ortoniKC
            - img [ref=e258]
          - link "YouTube" [ref=e261]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e262]
          - link "LinkedIn" [ref=e265]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e266]
          - link "Contact" [ref=e271]:
            - /url: /contact
          - link "🍕 Support" [ref=e272]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e273]:
    - iframe [ref=e276]:
      - generic [active] [ref=f8e1]:
        - generic [ref=f8e6]:
          - link "Caffeine.ai" [ref=f8e10] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwNtP62FHati0EeGHjMwP9-WniQ25u8vbhgGTmKC26hXzoJabhyoQASDTkZYiYOWS6IPYDqABs-qPp0DIAQGoAwHIA8sEqgToAU_QJGLSdy98htBHryA7n-_cQnSpbCg2U9GahzXzWj08ffWr79qmHCTbmJYh8X5lz9_INMMFzDtHij4AjSpiS_RuFgW71ZMdrwu0iRgnoMN5NbH14jm8R2_lWOhD2oxUDD1hqNdfYq0xGIi7Z933CV7CleJpBOBTib7rN7EXnnrzgzCNVhvSFTvbPmgicKfwHOpyrtS2g9m5GUAHCeeNtc4WGjBw43-N-UAwSkAh7XWLTmytDPSMVzMo01EB6G5qn-AInzHxtN7s_5_vJxFypm2XvI09SRNYfWUS72Irgz_s6eDeza-pBwvABJHIn9jSBYgFze-bn1iAB7Oi4IYbqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOligrYGv-7WVA2ABsQk8h29lf5cQq4AKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCIPhga_7tZUDFeEDgwMd9_Ip0YgOCbAOrKmW9xjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC_FoYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMImNaBr_u1lQMV4QODAx338inREAEYASAAEgKQbPD_BwE&num=1&cid=CAQShgIAEQoqgcnITHXRxQI6hVg7GzDhm0YTQ_ka3pNGSly0j9wGxuVmCebhtcezbRy65r-NkhSivcTRlQa3odHR-VSUMstUBycO8g4fn01B5at4f-OMjZRy7L1QvLdeFJhdKXHrU1bCCfq_pJt2A5inIS1cw0AdNq-6-M8lM-Ev7BrzwrjW1XC7AP9IrVuFaIHNoFCcmSWfc0rgRxsPiHCuSkAECZopjV45tnqKlAQUzycn9uJ7AfNlhe8b8uT-CMs5TOlMOwSQ11Adjlveq-xkmb8CAGafhq89E5_7Uak7tOkJAorb_sYEldm0MxKFUf6BdrhadhpIThSsNG9NCfUimZpBUsyk-CgWGAE&sig=AOD64_33idgwt6wUHXee256oudHsK4E-OQ&client=ca-pub-6251538267574677&rf=1&nb=19&adurl=https://caffeine.ai/%3Futm_source%3DGoogleAds-IN%26utm_medium%3Dpaid-search%26utm_content%3D%26utm_campaign%3DIN_PMax__Asset-Group-1%26utm_term%3D__%26gad_source%3D5%26gad_campaignid%3D23687788493
            - img "Caffeine.ai" [ref=f8e11]
          - generic [ref=f8e13]:
            - generic "Caffeine.ai" [ref=f8e14]:
              - link "Caffeine.ai" [ref=f8e15] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwNtP62FHati0EeGHjMwP9-WniQ25u8vbhgGTmKC26hXzoJabhyoQASDTkZYiYOWS6IPYDqABs-qPp0DIAQGoAwHIA8sEqgToAU_QJGLSdy98htBHryA7n-_cQnSpbCg2U9GahzXzWj08ffWr79qmHCTbmJYh8X5lz9_INMMFzDtHij4AjSpiS_RuFgW71ZMdrwu0iRgnoMN5NbH14jm8R2_lWOhD2oxUDD1hqNdfYq0xGIi7Z933CV7CleJpBOBTib7rN7EXnnrzgzCNVhvSFTvbPmgicKfwHOpyrtS2g9m5GUAHCeeNtc4WGjBw43-N-UAwSkAh7XWLTmytDPSMVzMo01EB6G5qn-AInzHxtN7s_5_vJxFypm2XvI09SRNYfWUS72Irgz_s6eDeza-pBwvABJHIn9jSBYgFze-bn1iAB7Oi4IYbqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOligrYGv-7WVA2ABsQk8h29lf5cQq4AKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCIPhga_7tZUDFeEDgwMd9_Ip0YgOCbAOrKmW9xjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC_FoYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMImNaBr_u1lQMV4QODAx338inREAEYASAAEgKQbPD_BwE&num=1&cid=CAQShgIAEQoqgcnITHXRxQI6hVg7GzDhm0YTQ_ka3pNGSly0j9wGxuVmCebhtcezbRy65r-NkhSivcTRlQa3odHR-VSUMstUBycO8g4fn01B5at4f-OMjZRy7L1QvLdeFJhdKXHrU1bCCfq_pJt2A5inIS1cw0AdNq-6-M8lM-Ev7BrzwrjW1XC7AP9IrVuFaIHNoFCcmSWfc0rgRxsPiHCuSkAECZopjV45tnqKlAQUzycn9uJ7AfNlhe8b8uT-CMs5TOlMOwSQ11Adjlveq-xkmb8CAGafhq89E5_7Uak7tOkJAorb_sYEldm0MxKFUf6BdrhadhpIThSsNG9NCfUimZpBUsyk-CgWGAE&sig=AOD64_33idgwt6wUHXee256oudHsK4E-OQ&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://caffeine.ai/%3Futm_source%3DGoogleAds-IN%26utm_medium%3Dpaid-search%26utm_content%3D%26utm_campaign%3DIN_PMax__Asset-Group-1%26utm_term%3D__%26gad_source%3D5%26gad_campaignid%3D23687788493
            - generic "Caffeine.ai" [ref=f8e16]:
              - link "Start Building with Caffeine" [ref=f8e17] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwNtP62FHati0EeGHjMwP9-WniQ25u8vbhgGTmKC26hXzoJabhyoQASDTkZYiYOWS6IPYDqABs-qPp0DIAQGoAwHIA8sEqgToAU_QJGLSdy98htBHryA7n-_cQnSpbCg2U9GahzXzWj08ffWr79qmHCTbmJYh8X5lz9_INMMFzDtHij4AjSpiS_RuFgW71ZMdrwu0iRgnoMN5NbH14jm8R2_lWOhD2oxUDD1hqNdfYq0xGIi7Z933CV7CleJpBOBTib7rN7EXnnrzgzCNVhvSFTvbPmgicKfwHOpyrtS2g9m5GUAHCeeNtc4WGjBw43-N-UAwSkAh7XWLTmytDPSMVzMo01EB6G5qn-AInzHxtN7s_5_vJxFypm2XvI09SRNYfWUS72Irgz_s6eDeza-pBwvABJHIn9jSBYgFze-bn1iAB7Oi4IYbqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOligrYGv-7WVA2ABsQk8h29lf5cQq4AKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCIPhga_7tZUDFeEDgwMd9_Ip0YgOCbAOrKmW9xjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC_FoYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMImNaBr_u1lQMV4QODAx338inREAEYASAAEgKQbPD_BwE&num=1&cid=CAQShgIAEQoqgcnITHXRxQI6hVg7GzDhm0YTQ_ka3pNGSly0j9wGxuVmCebhtcezbRy65r-NkhSivcTRlQa3odHR-VSUMstUBycO8g4fn01B5at4f-OMjZRy7L1QvLdeFJhdKXHrU1bCCfq_pJt2A5inIS1cw0AdNq-6-M8lM-Ev7BrzwrjW1XC7AP9IrVuFaIHNoFCcmSWfc0rgRxsPiHCuSkAECZopjV45tnqKlAQUzycn9uJ7AfNlhe8b8uT-CMs5TOlMOwSQ11Adjlveq-xkmb8CAGafhq89E5_7Uak7tOkJAorb_sYEldm0MxKFUf6BdrhadhpIThSsNG9NCfUimZpBUsyk-CgWGAE&sig=AOD64_33idgwt6wUHXee256oudHsK4E-OQ&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://caffeine.ai/%3Futm_source%3DGoogleAds-IN%26utm_medium%3Dpaid-search%26utm_content%3D%26utm_campaign%3DIN_PMax__Asset-Group-1%26utm_term%3D__%26gad_source%3D5%26gad_campaignid%3D23687788493
            - generic "Caffeine.ai" [ref=f8e18]:
              - link "Turn your ideas into functional apps using natural language. No coding skills needed." [ref=f8e19] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwNtP62FHati0EeGHjMwP9-WniQ25u8vbhgGTmKC26hXzoJabhyoQASDTkZYiYOWS6IPYDqABs-qPp0DIAQGoAwHIA8sEqgToAU_QJGLSdy98htBHryA7n-_cQnSpbCg2U9GahzXzWj08ffWr79qmHCTbmJYh8X5lz9_INMMFzDtHij4AjSpiS_RuFgW71ZMdrwu0iRgnoMN5NbH14jm8R2_lWOhD2oxUDD1hqNdfYq0xGIi7Z933CV7CleJpBOBTib7rN7EXnnrzgzCNVhvSFTvbPmgicKfwHOpyrtS2g9m5GUAHCeeNtc4WGjBw43-N-UAwSkAh7XWLTmytDPSMVzMo01EB6G5qn-AInzHxtN7s_5_vJxFypm2XvI09SRNYfWUS72Irgz_s6eDeza-pBwvABJHIn9jSBYgFze-bn1iAB7Oi4IYbqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOligrYGv-7WVA2ABsQk8h29lf5cQq4AKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCIPhga_7tZUDFeEDgwMd9_Ip0YgOCbAOrKmW9xjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC_FoYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMImNaBr_u1lQMV4QODAx338inREAEYASAAEgKQbPD_BwE&num=1&cid=CAQShgIAEQoqgcnITHXRxQI6hVg7GzDhm0YTQ_ka3pNGSly0j9wGxuVmCebhtcezbRy65r-NkhSivcTRlQa3odHR-VSUMstUBycO8g4fn01B5at4f-OMjZRy7L1QvLdeFJhdKXHrU1bCCfq_pJt2A5inIS1cw0AdNq-6-M8lM-Ev7BrzwrjW1XC7AP9IrVuFaIHNoFCcmSWfc0rgRxsPiHCuSkAECZopjV45tnqKlAQUzycn9uJ7AfNlhe8b8uT-CMs5TOlMOwSQ11Adjlveq-xkmb8CAGafhq89E5_7Uak7tOkJAorb_sYEldm0MxKFUf6BdrhadhpIThSsNG9NCfUimZpBUsyk-CgWGAE&sig=AOD64_33idgwt6wUHXee256oudHsK4E-OQ&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://caffeine.ai/%3Futm_source%3DGoogleAds-IN%26utm_medium%3Dpaid-search%26utm_content%3D%26utm_campaign%3DIN_PMax__Asset-Group-1%26utm_term%3D__%26gad_source%3D5%26gad_campaignid%3D23687788493
                - text: Turn your ideas into functional apps using
                - text: natural language. No coding skills needed.
          - link "Learn More" [ref=f8e23] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CwNtP62FHati0EeGHjMwP9-WniQ25u8vbhgGTmKC26hXzoJabhyoQASDTkZYiYOWS6IPYDqABs-qPp0DIAQGoAwHIA8sEqgToAU_QJGLSdy98htBHryA7n-_cQnSpbCg2U9GahzXzWj08ffWr79qmHCTbmJYh8X5lz9_INMMFzDtHij4AjSpiS_RuFgW71ZMdrwu0iRgnoMN5NbH14jm8R2_lWOhD2oxUDD1hqNdfYq0xGIi7Z933CV7CleJpBOBTib7rN7EXnnrzgzCNVhvSFTvbPmgicKfwHOpyrtS2g9m5GUAHCeeNtc4WGjBw43-N-UAwSkAh7XWLTmytDPSMVzMo01EB6G5qn-AInzHxtN7s_5_vJxFypm2XvI09SRNYfWUS72Irgz_s6eDeza-pBwvABJHIn9jSBYgFze-bn1iAB7Oi4IYbqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOligrYGv-7WVA2ABsQk8h29lf5cQq4AKAZgLAcgLAaIMA5ABAaoNAklOyA0B6g0TCIPhga_7tZUDFeEDgwMd9_Ip0YgOCbAOrKmW9xjYEwzQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYCRIC_FoYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMImNaBr_u1lQMV4QODAx338inREAEYASAAEgKQbPD_BwE&num=1&cid=CAQShgIAEQoqgcnITHXRxQI6hVg7GzDhm0YTQ_ka3pNGSly0j9wGxuVmCebhtcezbRy65r-NkhSivcTRlQa3odHR-VSUMstUBycO8g4fn01B5at4f-OMjZRy7L1QvLdeFJhdKXHrU1bCCfq_pJt2A5inIS1cw0AdNq-6-M8lM-Ev7BrzwrjW1XC7AP9IrVuFaIHNoFCcmSWfc0rgRxsPiHCuSkAECZopjV45tnqKlAQUzycn9uJ7AfNlhe8b8uT-CMs5TOlMOwSQ11Adjlveq-xkmb8CAGafhq89E5_7Uak7tOkJAorb_sYEldm0MxKFUf6BdrhadhpIThSsNG9NCfUimZpBUsyk-CgWGAE&sig=AOD64_33idgwt6wUHXee256oudHsK4E-OQ&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://caffeine.ai/%3Futm_source%3DGoogleAds-IN%26utm_medium%3Dpaid-search%26utm_content%3D%26utm_campaign%3DIN_PMax__Asset-Group-1%26utm_term%3D__%26gad_source%3D5%26gad_campaignid%3D23687788493
            - generic [ref=f8e24]: Learn More
            - img [ref=f8e25]
        - img [ref=f8e30] [cursor=pointer]
        - button [ref=f8e32] [cursor=pointer]:
          - img [ref=f8e33]
        - iframe
  - generic:
    - insertion:
      - iframe [ref=e279]:
        
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
  30  |   const selectedRow = page.locator("#simpletable tbody tr", { hasText: username }).first();
  31  |   await expect(selectedRow).toBeVisible();
  32  |   const selectedRowCheckbox = selectedRow.locator('input[type="checkbox"]');
  33  |   await expect(selectedRowCheckbox).toBeVisible();
  34  |   await selectedRowCheckbox.check();
  35  |   await expect(selectedRowCheckbox).toBeChecked();
  36  |   await page.waitForTimeout(3000);
  37  | });
  38  | 
  39  | // test("Fourth table test", async ({ page }) => {
  40  | // await page.goto("https://letcode.in/table");
  41  | // const table = await page.locator('.w-full.text-sm.text-left.text-slate-600.dark:text-slate-300');
  42  | // await table.locator('thead tr th').nth(1).dblclick();
  43  | // const table
  44  | // })
  45  | 
  46  | test("for testing the table check box using input", async ({ page }) => {
  47  |   await page.goto("https://letcode.in/table");
  48  |   await page.waitForSelector("#simpletable");
  49  |   const userName = "Koushik";
  50  |   const userRow = page.locator("#simpletable tbody tr", { hasText: userName }).first();
  51  |   await expect(userRow).toBeVisible();
  52  |   const userCheckbox = userRow.locator('input[type="checkbox"]');
  53  |   await expect(userCheckbox).toBeVisible();
> 54  |   await userCheckbox.check();
      |                      ^ Error: locator.check: Test timeout of 30000ms exceeded.
  55  |   await expect(userCheckbox).toBeChecked();
  56  |   await page.waitForTimeout(3000);
  57  | });
  58  | 
  59  | test("DatePicker", async ({ page }) => {
  60  |   await page.goto("https://www.globalsqa.com/demo-site/datepicker/");
  61  | 
  62  |   const selectedDay = 12;
  63  |   const selectedMonthText = "March";
  64  |   const selectedYear = 2029;
  65  | 
  66  |   const frame = page.frameLocator(".demo-frame").first();
  67  |   const dateInput = frame.locator("#datepicker");
  68  | 
  69  |   await dateInput.click();
  70  |   await frame.locator(".ui-datepicker-calendar").waitFor({ state: "visible" });
  71  | 
  72  |   while (true) {
  73  |     const currentYear = Number(
  74  |       (await frame.locator(".ui-datepicker-year").textContent())?.trim(),
  75  |     );
  76  | 
  77  |     if (currentYear === selectedYear) {
  78  |       break;
  79  |     }
  80  | 
  81  |     if (selectedYear < currentYear) {
  82  |       await frame.locator(".ui-datepicker-prev").click();
  83  |     } else {
  84  |       await frame.locator(".ui-datepicker-next").click();
  85  |     }
  86  | 
  87  |     await page.waitForTimeout(200);
  88  |   }
  89  | 
  90  |   while (true) {
  91  |     const currentMonth = (await frame.locator(".ui-datepicker-month").textContent())?.trim();
  92  | 
  93  |     if (currentMonth === selectedMonthText) {
  94  |       break;
  95  |     }
  96  | 
  97  |     const monthOrder = [
  98  |       "January",
  99  |       "February",
  100 |       "March",
  101 |       "April",
  102 |       "May",
  103 |       "June",
  104 |       "July",
  105 |       "August",
  106 |       "September",
  107 |       "October",
  108 |       "November",
  109 |       "December",
  110 |     ];
  111 | 
  112 |     const currentMonthIndex = monthOrder.indexOf(currentMonth || "");
  113 |     const selectedMonthIndex = monthOrder.indexOf(selectedMonthText);
  114 | 
  115 |     if (currentMonthIndex === -1 || selectedMonthIndex === -1) {
  116 |       throw new Error(`Invalid month value: current='${currentMonth}' target='${selectedMonthText}'`);
  117 |     }
  118 | 
  119 |     if (selectedMonthIndex < currentMonthIndex) {
  120 |       await frame.locator(".ui-datepicker-prev").click();
  121 |               } else {
  122 |       await frame.locator(".ui-datepicker-next").click();
  123 |     }
  124 | 
  125 |     await page.waitForTimeout(200);
  126 |   }
  127 | 
  128 |   await expect(frame.locator(".ui-datepicker-year")).toHaveText(String(selectedYear));
  129 |   await expect(frame.locator(".ui-datepicker-month")).toHaveText(selectedMonthText);
  130 | 
  131 |   await frame.locator(`.ui-datepicker-calendar td a:text-is("${selectedDay}")`).first().click();
  132 |   await expect(dateInput).toHaveValue(/03\/12\/2029/);
  133 | });
  134 |   
  135 | 
  136 | 
  137 |   test.skip('Drag and Drop and scroll and hover and right click',async ({page})=>{
  138 |     await page.goto('//url is here');
  139 | 
  140 | // right click
  141 | await page.locator('').click({button:"right"});
  142 | // or 
  143 | await page.click('locator',{button:'right'});
  144 | 
  145 | // Drag and Drop
  146 | await page.locator('drag start locator the item which i have to drag').dragTo( page.locator('locator'));
  147 | 
  148 | // or
  149 | await page.dragAndDrop('sourceLocator','targetLocator');
  150 | 
  151 | 
  152 | 
  153 | // scroll down 
  154 | 
```