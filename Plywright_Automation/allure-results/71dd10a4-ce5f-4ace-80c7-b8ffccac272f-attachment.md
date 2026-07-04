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
      - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CM2jiKL4tZUDFQBIOAUdTs4Z0A" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CM2jiKL4tZUDFQBIOAUdTs4Z0A" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <p class="text-xs text-slate-500 dark:text-slate-400 mb-3">…</p> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <div class="container mx-auto flex items-center justify-between h-full px-4 md:px-6 lg:px-8">…</div> from <nav role="navigation" aria-label="main navigation" class="fixed top-0 left-0 right-0 z-50 h-16 bg-white/85 dark:bg-[#080d1a]/85 backdrop-blur-xl border-b border-slate-200/60 dark:border-white/5 shadow-sm shadow-black/5 dark:shadow-black/30">…</nav> subtree intercepts pointer events
  - retrying click action
    - waiting 500ms

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
              - link "Frozen Yogurt" [ref=e210] [cursor=pointer]:
                - generic "Frozen Yogurt" [ref=e211]
                - img [ref=e213]
              - link "Career Resources & Planning" [ref=e215] [cursor=pointer]:
                - generic "Career Resources & Planning" [ref=e216]
                - img [ref=e218]
              - link "Machine Learning & Artificial Intelligence" [ref=e220] [cursor=pointer]:
                - generic "Machine Learning & Artificial Intelligence" [ref=e221]
                - img [ref=e223]
              - link "Data Management" [ref=e225] [cursor=pointer]:
                - generic "Data Management" [ref=e226]
                - img [ref=e228]
              - link "Ice Cream" [ref=e230] [cursor=pointer]:
                - generic "Ice Cream" [ref=e231]
                - img [ref=e233]
              - link "Baked Goods" [ref=e235] [cursor=pointer]:
                - generic "Baked Goods" [ref=e236]
                - img [ref=e238]
              - link "Eggs" [ref=e240] [cursor=pointer]:
                - generic "Eggs" [ref=e241]
                - img [ref=e243]
              - link "Candy & Sweets" [ref=e245] [cursor=pointer]:
                - generic "Candy & Sweets" [ref=e246]
                - img [ref=e248]
        - generic:
          - generic:
            - generic:
              - insertion:
                - iframe [ref=e251]:
                  
    - contentinfo [ref=e252]:
      - generic [ref=e253]:
        - paragraph [ref=e254]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e255]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e256]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e257]:
          - link "GitHub" [ref=e258]:
            - /url: https://github.com/ortoniKC
            - img [ref=e259]
          - link "YouTube" [ref=e262]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e263]
          - link "LinkedIn" [ref=e266]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e267]
          - link "Contact" [ref=e272]:
            - /url: /contact
          - link "🍕 Support" [ref=e273]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e274]:
    - iframe [ref=e277]:
      - generic [active] [ref=f7e1]:
        - generic [ref=f7e6]:
          - generic [ref=f7e7]:
            - generic "Reserve Bank Of India" [ref=f7e8]:
              - link "Reserve Bank Of India" [ref=f7e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CusUkql5Has2mMoCQ4dkPzpzngA2208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE7gFP0Kf0XTUlxUc_LS1Igrj-EKNzFmoIsldikJJO3ZLJJp7Vn0Q_hLDAOrII50xqTUHnQDlqB3wEqpkl5_rjjKsmQNDvlvzJPywdHYH5mjRbcwo3UpE2ArZ1fgKojDVLmGZWmPYRO0ZP5G555LSfzbAFXzPxx7dYPUNjUnlT-aLTEbIQVxmvHbEhPKRr2iSV-AA1eWIWaeWb6icc2PzhJNXNx0QLtKsbDuwoetNwlP3_mUuxRIowk929I7BJ5amgHzbLCekjdlirudjp_XNmTHRCfYNl2TaIxWFY9fqVctwgMIkpk24omvKklV8q6uyewASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYseiGovi1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiprYii-LWVAxUASDgFHU7OGdCIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMIzaOIovi1lQMVAEg4BR1OzhnQEAEYASAAEgJmOPD_BwE&num=1&cid=CAQShwIAEQoqgULXLgJJ74pMyZ9_Sc4Sib6X3hpOTVQSJA6dlRl4tZZ0kjD-WuF-2muO3KoHsaoqtv732Yi0YKvEBtwp84Tjkn3uAGk4VmK3zau6tTWMnpv6fxHFIcIONcONZzPrAmIOukfoeR1gyfqi46pnV2cuQeVc3esgd-Vz9O3_p54cchaTYDWGqYg9YSG9Mdz1zpd3OlTkXtzmAemouIsBtZZ70iR0BAMieJXmMby8C0b9NoX4drw-b9bXHfx-mCq0SUPLfD-HpWDW4qfXuziIhXBTts_Zj8abt6-RjVShNriPQpuAkXu95fNaa2aoItpg9d7WczVXxgtYeDsuYEpmGiy9_0FeABgB&sig=AOD64_22kNCski10xkz_j2zXZQBikdKpvg&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f7e10]:
              - link "கோரப்படாதவற்றுக்காக கேம்ப்ஸ்" [ref=f7e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CusUkql5Has2mMoCQ4dkPzpzngA2208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE7gFP0Kf0XTUlxUc_LS1Igrj-EKNzFmoIsldikJJO3ZLJJp7Vn0Q_hLDAOrII50xqTUHnQDlqB3wEqpkl5_rjjKsmQNDvlvzJPywdHYH5mjRbcwo3UpE2ArZ1fgKojDVLmGZWmPYRO0ZP5G555LSfzbAFXzPxx7dYPUNjUnlT-aLTEbIQVxmvHbEhPKRr2iSV-AA1eWIWaeWb6icc2PzhJNXNx0QLtKsbDuwoetNwlP3_mUuxRIowk929I7BJ5amgHzbLCekjdlirudjp_XNmTHRCfYNl2TaIxWFY9fqVctwgMIkpk24omvKklV8q6uyewASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYseiGovi1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiprYii-LWVAxUASDgFHU7OGdCIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMIzaOIovi1lQMVAEg4BR1OzhnQEAEYASAAEgJmOPD_BwE&num=1&cid=CAQShwIAEQoqgULXLgJJ74pMyZ9_Sc4Sib6X3hpOTVQSJA6dlRl4tZZ0kjD-WuF-2muO3KoHsaoqtv732Yi0YKvEBtwp84Tjkn3uAGk4VmK3zau6tTWMnpv6fxHFIcIONcONZzPrAmIOukfoeR1gyfqi46pnV2cuQeVc3esgd-Vz9O3_p54cchaTYDWGqYg9YSG9Mdz1zpd3OlTkXtzmAemouIsBtZZ70iR0BAMieJXmMby8C0b9NoX4drw-b9bXHfx-mCq0SUPLfD-HpWDW4qfXuziIhXBTts_Zj8abt6-RjVShNriPQpuAkXu95fNaa2aoItpg9d7WczVXxgtYeDsuYEpmGiy9_0FeABgB&sig=AOD64_22kNCski10xkz_j2zXZQBikdKpvg&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f7e12]:
              - link "கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்" [ref=f7e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CusUkql5Has2mMoCQ4dkPzpzngA2208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE7gFP0Kf0XTUlxUc_LS1Igrj-EKNzFmoIsldikJJO3ZLJJp7Vn0Q_hLDAOrII50xqTUHnQDlqB3wEqpkl5_rjjKsmQNDvlvzJPywdHYH5mjRbcwo3UpE2ArZ1fgKojDVLmGZWmPYRO0ZP5G555LSfzbAFXzPxx7dYPUNjUnlT-aLTEbIQVxmvHbEhPKRr2iSV-AA1eWIWaeWb6icc2PzhJNXNx0QLtKsbDuwoetNwlP3_mUuxRIowk929I7BJ5amgHzbLCekjdlirudjp_XNmTHRCfYNl2TaIxWFY9fqVctwgMIkpk24omvKklV8q6uyewASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYseiGovi1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiprYii-LWVAxUASDgFHU7OGdCIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMIzaOIovi1lQMVAEg4BR1OzhnQEAEYASAAEgJmOPD_BwE&num=1&cid=CAQShwIAEQoqgULXLgJJ74pMyZ9_Sc4Sib6X3hpOTVQSJA6dlRl4tZZ0kjD-WuF-2muO3KoHsaoqtv732Yi0YKvEBtwp84Tjkn3uAGk4VmK3zau6tTWMnpv6fxHFIcIONcONZzPrAmIOukfoeR1gyfqi46pnV2cuQeVc3esgd-Vz9O3_p54cchaTYDWGqYg9YSG9Mdz1zpd3OlTkXtzmAemouIsBtZZ70iR0BAMieJXmMby8C0b9NoX4drw-b9bXHfx-mCq0SUPLfD-HpWDW4qfXuziIhXBTts_Zj8abt6-RjVShNriPQpuAkXu95fNaa2aoItpg9d7WczVXxgtYeDsuYEpmGiy9_0FeABgB&sig=AOD64_22kNCski10xkz_j2zXZQBikdKpvg&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                - text: கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான
                - text: வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்
          - link "Learn More" [ref=f7e17] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=CusUkql5Has2mMoCQ4dkPzpzngA2208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE7gFP0Kf0XTUlxUc_LS1Igrj-EKNzFmoIsldikJJO3ZLJJp7Vn0Q_hLDAOrII50xqTUHnQDlqB3wEqpkl5_rjjKsmQNDvlvzJPywdHYH5mjRbcwo3UpE2ArZ1fgKojDVLmGZWmPYRO0ZP5G555LSfzbAFXzPxx7dYPUNjUnlT-aLTEbIQVxmvHbEhPKRr2iSV-AA1eWIWaeWb6icc2PzhJNXNx0QLtKsbDuwoetNwlP3_mUuxRIowk929I7BJ5amgHzbLCekjdlirudjp_XNmTHRCfYNl2TaIxWFY9fqVctwgMIkpk24omvKklV8q6uyewASI-fuy-QWIBcHTjZtZgAfS35WJGqgHp8yxAqgH4tixAqgHpr4bqAfMzrECqAfz0RuoB5bYG6gHqpuxAqgHjs4bqAeT2BuoB_DgG6gH7paxAqgH_p6xAqgHr76xAqgH1ckbqAfZtrECqAeaBqgH_56xAqgH35-xAqgH-MKxAqgH-8KxAtgHAdIIMwiAYRABGJ8DMgiKgoCAgICACDoPgECAwICAgICogAKog4AQSL39wTpYseiGovi1lQNgAbEJgWnz_ZC-HtKACgGYCwHICwGiDAOQAQGqDQJJTsgNAeoNEwiprYii-LWVAxUASDgFHU7OGdCIDgnYEwOIFAHQFQGYFgHKFgIKAPgWAYAXAbIXBBgBUAa6FwI4AbIYBRgBIgEA0BgBshkBN8IZAggB&gclid=EAIaIQobChMIzaOIovi1lQMVAEg4BR1OzhnQEAEYASAAEgJmOPD_BwE&num=1&cid=CAQShwIAEQoqgULXLgJJ74pMyZ9_Sc4Sib6X3hpOTVQSJA6dlRl4tZZ0kjD-WuF-2muO3KoHsaoqtv732Yi0YKvEBtwp84Tjkn3uAGk4VmK3zau6tTWMnpv6fxHFIcIONcONZzPrAmIOukfoeR1gyfqi46pnV2cuQeVc3esgd-Vz9O3_p54cchaTYDWGqYg9YSG9Mdz1zpd3OlTkXtzmAemouIsBtZZ70iR0BAMieJXmMby8C0b9NoX4drw-b9bXHfx-mCq0SUPLfD-HpWDW4qfXuziIhXBTts_Zj8abt6-RjVShNriPQpuAkXu95fNaa2aoItpg9d7WczVXxgtYeDsuYEpmGiy9_0FeABgB&sig=AOD64_22kNCski10xkz_j2zXZQBikdKpvg&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic [ref=f7e18]: Learn More
            - img [ref=f7e19]
        - img [ref=f7e24] [cursor=pointer]
        - button [ref=f7e26] [cursor=pointer]:
          - img [ref=f7e27]
        - iframe
  - insertion [ref=e280]:
    - generic [ref=e283]:
      - heading "These are topics related to the article that might interest you" [level=2] [ref=e285]: Discover more
      - link "Baby & Pet Names" [ref=e286] [cursor=pointer]:
        - generic "Baby & Pet Names" [ref=e287]
        - img [ref=e289]
      - link "Educational Resources" [ref=e291] [cursor=pointer]:
        - generic "Educational Resources" [ref=e292]
        - img [ref=e294]
      - link "Ice cream" [ref=e296] [cursor=pointer]:
        - generic "Ice cream" [ref=e297]
        - img [ref=e299]
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