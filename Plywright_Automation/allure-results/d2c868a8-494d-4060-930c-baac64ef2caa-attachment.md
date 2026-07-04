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
      - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CImUv6H4tZUDFXSIrAId4tIktQ" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
    - retrying click action
    - waiting 20ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <iframe vspace="0" hspace="0" width="1005" tabindex="0" id="aswift_3" height="100%" scrolling="no" name="aswift_3" frameborder="0" marginwidth="0" marginheight="0" title="Advertisement" allowtransparency="true" data-load-complete="true" aria-label="Advertisement" data-google-container-id="a!4" data-google-query-id="CImUv6H4tZUDFXSIrAId4tIktQ" sandbox="allow-forms allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts allow-top-navigation-by-user-activation" src="https://googleads.…></iframe> from <ins data-ad-status="filled" data-anchor-shown="true" data-adsbygoogle-status="done" data-anchor-status="displayed" class="adsbygoogle adsbygoogle-noablate">…</ins> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
    - waiting for element to be visible, enabled and stable
    - element is visible, enabled and stable
    - scrolling into view if needed
    - done scrolling
    - <td class="px-3 py-2">4</td> from <div>…</div> subtree intercepts pointer events
  - retrying click action
    - waiting 100ms
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
            - iframe [ref=e199]:
              - generic [active] [ref=f3e1]:
                - generic [ref=f3e7]:
                  - generic [ref=f3e8]:
                    - generic [ref=f3e10]:
                      - text: Reserve Bank
                      - text: Of India
                    - generic [ref=f3e12]:
                      - text: Reserve Bank Of
                      - text: India
                  - generic [ref=f3e15]:
                    - generic "Reserve Bank Of India" [ref=f3e16]:
                      - link "கோரப்படாதவற்றுக்காக கேம்ப்ஸ்" [ref=f3e17] [cursor=pointer]:
                        - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ckq9-qV5Has_XM4COssUP38WWsQW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE5wFP0JCTK84HFf7Ji7DyQ7Zp1uXshSuQtXlyNCJg7taR3FIQfsJxUywq5DptjO6U4Qe31-a0reJvKzBg9peer6GcN20dKvB235t5cscmOhKYIcqi-JgLO3oGpw3KdVRYWr3qVs-yKSUc2AOFiwk76NtPhs9xgkRTersvJnuH6P9xeJwafrXEKc-HJ-d3kPg620e1RqvYkTa0zjo0cpmv0av9EGeLiCBIy1xXeEZKN3gOa5u8Arf8X0tGih1j-xIF_XeooVn7Cdm5MES3toBPLn4n7AEtRcgssDi_9hLcg7csaWYnDQ_-QQ7ABIj5-7L5BYgFwdONm1mAB9LflYkaqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliHrcyh-LWVA2ABsQmBafP9kL4e0oAKAZgLAcgLAaIMDyoKCgiO37ECleKxApABAaoNAklOyA0B6g0TCLfWzKH4tZUDFQCHrAId36IlVogOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjMxNDU4MzA2NzFQBroXAjgBqhgXCQAAAAAA7PNAEgozMTQ1ODMwNjcxGAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIj9DMofi1lQMVAIesAh3foiVWEAEYASAAEgIvV_D_BwE&num=1&cid=CAQShgIAEQoqgcUeXAeIJzSaYtfn479t_QzRpRRRolcrjmxtcDpyJywqSZksXQcMov9CevTHM2am41FJ-EXkt3MuQF9qykEpXP9SLhkGPC0vsFr2fHppOWB91arqXoX-Laq-Uo1RnJFsapaKO8uV2FuWWawxFujnG5kNECeowDs1j16eZCuHnY3wSXetzb-cnQnEVSDdWYnxf5pGYbnhY2HjDno2qdTR5yU6b_Lp_z1MpnPRkW6_O3RdT07Z6THQOafCPc0O7GcpBbtZpGAhO7zp4Qls442SxyZJPHHdETS8OEGJcsbPKlKPiyfBj7YpTQ11X_Ku6SaaZ8iXgU-0yaMAZJXYPKViVGhqGAE&sig=AOD64_1hRtfrU4BSuPnmVorF978bjwmYCw&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                        - text: கோரப்படாதவற்றுக்காக
                        - text: கேம்ப்ஸ்
                    - generic [ref=f3e18]:
                      - link:
                        - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ckq9-qV5Has_XM4COssUP38WWsQW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE5wFP0JCTK84HFf7Ji7DyQ7Zp1uXshSuQtXlyNCJg7taR3FIQfsJxUywq5DptjO6U4Qe31-a0reJvKzBg9peer6GcN20dKvB235t5cscmOhKYIcqi-JgLO3oGpw3KdVRYWr3qVs-yKSUc2AOFiwk76NtPhs9xgkRTersvJnuH6P9xeJwafrXEKc-HJ-d3kPg620e1RqvYkTa0zjo0cpmv0av9EGeLiCBIy1xXeEZKN3gOa5u8Arf8X0tGih1j-xIF_XeooVn7Cdm5MES3toBPLn4n7AEtRcgssDi_9hLcg7csaWYnDQ_-QQ7ABIj5-7L5BYgFwdONm1mAB9LflYkaqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliHrcyh-LWVA2ABsQmBafP9kL4e0oAKAZgLAcgLAaIMDyoKCgiO37ECleKxApABAaoNAklOyA0B6g0TCLfWzKH4tZUDFQCHrAId36IlVogOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjMxNDU4MzA2NzFQBroXAjgBqhgXCQAAAAAA7PNAEgozMTQ1ODMwNjcxGAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIj9DMofi1lQMVAIesAh3foiVWEAEYASAAEgIvV_D_BwE&num=1&cid=CAQShgIAEQoqgcUeXAeIJzSaYtfn479t_QzRpRRRolcrjmxtcDpyJywqSZksXQcMov9CevTHM2am41FJ-EXkt3MuQF9qykEpXP9SLhkGPC0vsFr2fHppOWB91arqXoX-Laq-Uo1RnJFsapaKO8uV2FuWWawxFujnG5kNECeowDs1j16eZCuHnY3wSXetzb-cnQnEVSDdWYnxf5pGYbnhY2HjDno2qdTR5yU6b_Lp_z1MpnPRkW6_O3RdT07Z6THQOafCPc0O7GcpBbtZpGAhO7zp4Qls442SxyZJPHHdETS8OEGJcsbPKlKPiyfBj7YpTQ11X_Ku6SaaZ8iXgU-0yaMAZJXYPKViVGhqGAE&sig=AOD64_1hRtfrU4BSuPnmVorF978bjwmYCw&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                    - generic "Reserve Bank Of India" [ref=f3e20]:
                      - link "Reserve Bank Of India" [ref=f3e22] [cursor=pointer]:
                        - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ckq9-qV5Has_XM4COssUP38WWsQW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE5wFP0JCTK84HFf7Ji7DyQ7Zp1uXshSuQtXlyNCJg7taR3FIQfsJxUywq5DptjO6U4Qe31-a0reJvKzBg9peer6GcN20dKvB235t5cscmOhKYIcqi-JgLO3oGpw3KdVRYWr3qVs-yKSUc2AOFiwk76NtPhs9xgkRTersvJnuH6P9xeJwafrXEKc-HJ-d3kPg620e1RqvYkTa0zjo0cpmv0av9EGeLiCBIy1xXeEZKN3gOa5u8Arf8X0tGih1j-xIF_XeooVn7Cdm5MES3toBPLn4n7AEtRcgssDi_9hLcg7csaWYnDQ_-QQ7ABIj5-7L5BYgFwdONm1mAB9LflYkaqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliHrcyh-LWVA2ABsQmBafP9kL4e0oAKAZgLAcgLAaIMDyoKCgiO37ECleKxApABAaoNAklOyA0B6g0TCLfWzKH4tZUDFQCHrAId36IlVogOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjMxNDU4MzA2NzFQBroXAjgBqhgXCQAAAAAA7PNAEgozMTQ1ODMwNjcxGAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIj9DMofi1lQMVAIesAh3foiVWEAEYASAAEgIvV_D_BwE&num=1&cid=CAQShgIAEQoqgcUeXAeIJzSaYtfn479t_QzRpRRRolcrjmxtcDpyJywqSZksXQcMov9CevTHM2am41FJ-EXkt3MuQF9qykEpXP9SLhkGPC0vsFr2fHppOWB91arqXoX-Laq-Uo1RnJFsapaKO8uV2FuWWawxFujnG5kNECeowDs1j16eZCuHnY3wSXetzb-cnQnEVSDdWYnxf5pGYbnhY2HjDno2qdTR5yU6b_Lp_z1MpnPRkW6_O3RdT07Z6THQOafCPc0O7GcpBbtZpGAhO7zp4Qls442SxyZJPHHdETS8OEGJcsbPKlKPiyfBj7YpTQ11X_Ku6SaaZ8iXgU-0yaMAZJXYPKViVGhqGAE&sig=AOD64_1hRtfrU4BSuPnmVorF978bjwmYCw&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                  - generic [ref=f3e26]:
                    - link "Learn More" [ref=f3e28] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ckq9-qV5Has_XM4COssUP38WWsQW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE5wFP0JCTK84HFf7Ji7DyQ7Zp1uXshSuQtXlyNCJg7taR3FIQfsJxUywq5DptjO6U4Qe31-a0reJvKzBg9peer6GcN20dKvB235t5cscmOhKYIcqi-JgLO3oGpw3KdVRYWr3qVs-yKSUc2AOFiwk76NtPhs9xgkRTersvJnuH6P9xeJwafrXEKc-HJ-d3kPg620e1RqvYkTa0zjo0cpmv0av9EGeLiCBIy1xXeEZKN3gOa5u8Arf8X0tGih1j-xIF_XeooVn7Cdm5MES3toBPLn4n7AEtRcgssDi_9hLcg7csaWYnDQ_-QQ7ABIj5-7L5BYgFwdONm1mAB9LflYkaqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliHrcyh-LWVA2ABsQmBafP9kL4e0oAKAZgLAcgLAaIMDyoKCgiO37ECleKxApABAaoNAklOyA0B6g0TCLfWzKH4tZUDFQCHrAId36IlVogOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjMxNDU4MzA2NzFQBroXAjgBqhgXCQAAAAAA7PNAEgozMTQ1ODMwNjcxGAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIj9DMofi1lQMVAIesAh3foiVWEAEYASAAEgIvV_D_BwE&num=1&cid=CAQShgIAEQoqgcUeXAeIJzSaYtfn479t_QzRpRRRolcrjmxtcDpyJywqSZksXQcMov9CevTHM2am41FJ-EXkt3MuQF9qykEpXP9SLhkGPC0vsFr2fHppOWB91arqXoX-Laq-Uo1RnJFsapaKO8uV2FuWWawxFujnG5kNECeowDs1j16eZCuHnY3wSXetzb-cnQnEVSDdWYnxf5pGYbnhY2HjDno2qdTR5yU6b_Lp_z1MpnPRkW6_O3RdT07Z6THQOafCPc0O7GcpBbtZpGAhO7zp4Qls442SxyZJPHHdETS8OEGJcsbPKlKPiyfBj7YpTQ11X_Ku6SaaZ8iXgU-0yaMAZJXYPKViVGhqGAE&sig=AOD64_1hRtfrU4BSuPnmVorF978bjwmYCw&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                    - link [ref=f3e29] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ckq9-qV5Has_XM4COssUP38WWsQW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE5wFP0JCTK84HFf7Ji7DyQ7Zp1uXshSuQtXlyNCJg7taR3FIQfsJxUywq5DptjO6U4Qe31-a0reJvKzBg9peer6GcN20dKvB235t5cscmOhKYIcqi-JgLO3oGpw3KdVRYWr3qVs-yKSUc2AOFiwk76NtPhs9xgkRTersvJnuH6P9xeJwafrXEKc-HJ-d3kPg620e1RqvYkTa0zjo0cpmv0av9EGeLiCBIy1xXeEZKN3gOa5u8Arf8X0tGih1j-xIF_XeooVn7Cdm5MES3toBPLn4n7AEtRcgssDi_9hLcg7csaWYnDQ_-QQ7ABIj5-7L5BYgFwdONm1mAB9LflYkaqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliHrcyh-LWVA2ABsQmBafP9kL4e0oAKAZgLAcgLAaIMDyoKCgiO37ECleKxApABAaoNAklOyA0B6g0TCLfWzKH4tZUDFQCHrAId36IlVogOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjMxNDU4MzA2NzFQBroXAjgBqhgXCQAAAAAA7PNAEgozMTQ1ODMwNjcxGAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIj9DMofi1lQMVAIesAh3foiVWEAEYASAAEgIvV_D_BwE&num=1&cid=CAQShgIAEQoqgcUeXAeIJzSaYtfn479t_QzRpRRRolcrjmxtcDpyJywqSZksXQcMov9CevTHM2am41FJ-EXkt3MuQF9qykEpXP9SLhkGPC0vsFr2fHppOWB91arqXoX-Laq-Uo1RnJFsapaKO8uV2FuWWawxFujnG5kNECeowDs1j16eZCuHnY3wSXetzb-cnQnEVSDdWYnxf5pGYbnhY2HjDno2qdTR5yU6b_Lp_z1MpnPRkW6_O3RdT07Z6THQOafCPc0O7GcpBbtZpGAhO7zp4Qls442SxyZJPHHdETS8OEGJcsbPKlKPiyfBj7YpTQ11X_Ku6SaaZ8iXgU-0yaMAZJXYPKViVGhqGAE&sig=AOD64_1hRtfrU4BSuPnmVorF978bjwmYCw&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                      - img [ref=f3e31]
                    - link [ref=f3e33] [cursor=pointer]:
                      - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ckq9-qV5Has_XM4COssUP38WWsQW208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAgOUIWPKgkY-qAMByAPLBKoE5wFP0JCTK84HFf7Ji7DyQ7Zp1uXshSuQtXlyNCJg7taR3FIQfsJxUywq5DptjO6U4Qe31-a0reJvKzBg9peer6GcN20dKvB235t5cscmOhKYIcqi-JgLO3oGpw3KdVRYWr3qVs-yKSUc2AOFiwk76NtPhs9xgkRTersvJnuH6P9xeJwafrXEKc-HJ-d3kPg620e1RqvYkTa0zjo0cpmv0av9EGeLiCBIy1xXeEZKN3gOa5u8Arf8X0tGih1j-xIF_XeooVn7Cdm5MES3toBPLn4n7AEtRcgssDi_9hLcg7csaWYnDQ_-QQ7ABIj5-7L5BYgFwdONm1mAB9LflYkaqAenzLECqAfi2LECqAemvhuoB8zOsQKoB_PRG6gHltgbqAeqm7ECqAeOzhuoB5PYG6gH8OAbqAfulrECqAf-nrECqAevvrECqAfVyRuoB9m2sQKoB5oGqAf_nrECqAffn7ECqAf4wrECqAf7wrEC2AcB0ggzCIBhEAEYnwMyCIqCgICAgIAIOg-AQIDAgICAgKiAAqiDgBBIvf3BOliHrcyh-LWVA2ABsQmBafP9kL4e0oAKAZgLAcgLAaIMDyoKCgiO37ECleKxApABAaoNAklOyA0B6g0TCLfWzKH4tZUDFQCHrAId36IlVogOCdgTA4gUAdAVAZgWAcoWAgoA-BYBgBcBshcQGAEqCjMxNDU4MzA2NzFQBroXAjgBqhgXCQAAAAAA7PNAEgozMTQ1ODMwNjcxGAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIj9DMofi1lQMVAIesAh3foiVWEAEYASAAEgIvV_D_BwE&num=1&cid=CAQShgIAEQoqgcUeXAeIJzSaYtfn479t_QzRpRRRolcrjmxtcDpyJywqSZksXQcMov9CevTHM2am41FJ-EXkt3MuQF9qykEpXP9SLhkGPC0vsFr2fHppOWB91arqXoX-Laq-Uo1RnJFsapaKO8uV2FuWWawxFujnG5kNECeowDs1j16eZCuHnY3wSXetzb-cnQnEVSDdWYnxf5pGYbnhY2HjDno2qdTR5yU6b_Lp_z1MpnPRkW6_O3RdT07Z6THQOafCPc0O7GcpBbtZpGAhO7zp4Qls442SxyZJPHHdETS8OEGJcsbPKlKPiyfBj7YpTQ11X_Ku6SaaZ8iXgU-0yaMAZJXYPKViVGhqGAE&sig=AOD64_1hRtfrU4BSuPnmVorF978bjwmYCw&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                - img [ref=f3e37] [cursor=pointer]
                - button [ref=f3e39] [cursor=pointer]:
                  - img [ref=f3e40]
                - iframe
        - insertion [ref=e203]:
          - generic [ref=e205]:
            - generic "These are topics related to the article that might interest you" [ref=e206]: Discover more
            - link "Chocolate" [ref=e207] [cursor=pointer]:
              - img [ref=e209]
              - text: Chocolate
            - link "Ice cream" [ref=e211] [cursor=pointer]:
              - img [ref=e213]
              - text: Ice cream
            - link "Candy & Sweets" [ref=e215] [cursor=pointer]:
              - img [ref=e217]
              - text: Candy & Sweets
            - link "Ice Cream" [ref=e219] [cursor=pointer]:
              - img [ref=e221]
              - text: Ice Cream
            - link "Selenium Webdriver Training" [ref=e223] [cursor=pointer]:
              - img [ref=e225]
              - text: Selenium Webdriver Training
            - link "Mobile Testing Courses" [ref=e227] [cursor=pointer]:
              - img [ref=e229]
              - text: Mobile Testing Courses
            - link "Automation Framework Tutorials" [ref=e231] [cursor=pointer]:
              - img [ref=e233]
              - text: Automation Framework Tutorials
            - link "Software Testing Guides" [ref=e235] [cursor=pointer]:
              - img [ref=e237]
              - text: Software Testing Guides
            - link "Automation Interview Prep" [ref=e239] [cursor=pointer]:
              - img [ref=e241]
              - text: Automation Interview Prep
            - link "Playwright Practice Labs" [ref=e243] [cursor=pointer]:
              - img [ref=e245]
              - text: Playwright Practice Labs
    - contentinfo [ref=e247]:
      - generic [ref=e248]:
        - paragraph [ref=e249]:
          - text: © 2026 LetCode ·
          - link "Koushik Chatterjee" [ref=e250]:
            - /url: https://www.linkedin.com/in/ortoni/
          - text: "&"
          - link "Bollineni Yaswanth" [ref=e251]:
            - /url: https://www.linkedin.com/in/bollineni-lakshmi-yaswanth-14472a199
        - generic [ref=e252]:
          - link "GitHub" [ref=e253]:
            - /url: https://github.com/ortoniKC
            - img [ref=e254]
          - link "YouTube" [ref=e257]:
            - /url: https://www.youtube.com/@letcode
            - img [ref=e258]
          - link "LinkedIn" [ref=e261]:
            - /url: https://www.linkedin.com/in/ortoni/
            - img [ref=e262]
          - link "Contact" [ref=e267]:
            - /url: /contact
          - link "🍕 Support" [ref=e268]:
            - /url: https://buymeacoffee.com/letcode
  - insertion [ref=e269]:
    - iframe [ref=e272]:
      - generic [active] [ref=f6e1]:
        - generic [ref=f6e6]:
          - generic [ref=f6e7]:
            - generic "Reserve Bank Of India" [ref=f6e8]:
              - link "Reserve Bank Of India" [ref=f6e9] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ck8pvqV5HasmbJvSQssUP4qWTqQu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6QFP0JnWkPtKPVMIAk27tTCsic89UmMFOBSlvKVkjaA8y8-Ve3BjuHEFQS8SkqK8KqHZ9biffsSiVwHF-cgFazcfM9eYrz_5rJb8jShKQeBtG3nFLY5GBEbA1gDyTngJJ0JrXM27aVOAoAy_aP3GguoGW5_X6udpkkCR8EDRXiOOeQa10Pd_jDAEYleWQFCsrOxLsDY87tp3OJID6yjjvtbJjn109C93jRqg-3QNRg4v58IkszQxo3wArsX8pzzTDZeW11coaJPOIarHq8BBHYwqhwUrdE7yRUfFJ1kAWtFkAglvnU4K1TtR0sAEiPn7svkFiAXB042bWYAH0t-ViRqoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMHxvqH4tZUDYAGxCYFp8_2Qvh7SgAoBmAsByAsBogwDkAEBqg0CSU7IDQHqDRMIypq_ofi1lQMVdIisAh3i0iS1iA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIiZS_ofi1lQMVdIisAh3i0iS1EAEYASAAEgI3j_D_BwE&num=1&cid=CAQShwIAEQoqgaWwN8MZGJAx1lGaUqE5N7TIgAIlpd6Y-wl_IcE8wvhoPvgEqIg1xFahHJRDFyiscJV2zxGT5SLyXaxxjCSeAl8MV1LEAS7lCo1doFG9m19bblEyQ0p3SPtJToBTJSPAAxe0q_uOmi0WKu40I_y4pr47aJ2RmFnpYcgi1gpJCF3McwWlSymsB5QJ4i4zZVdRPP1vYWlmqSMrglMetvaVpUpwjwzXWBVYH_gT08HKPaU5mL8CQGbKCcpomrO1sVbvG1zRfNy4VCxrSUFZgHuFru6EXnfWI1AGB8lx3fSsscjSWjZZtiKh3GORcwxRsrScknW0Q0F7XmmUN7AO3SwojRfc2BgB&sig=AOD64_1ZMBNkcISPIlp636EYgLYio9hz1Q&client=ca-pub-6251538267574677&rf=1&nb=1&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f6e10]:
              - link "கோரப்படாதவற்றுக்காக கேம்ப்ஸ்" [ref=f6e11] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ck8pvqV5HasmbJvSQssUP4qWTqQu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6QFP0JnWkPtKPVMIAk27tTCsic89UmMFOBSlvKVkjaA8y8-Ve3BjuHEFQS8SkqK8KqHZ9biffsSiVwHF-cgFazcfM9eYrz_5rJb8jShKQeBtG3nFLY5GBEbA1gDyTngJJ0JrXM27aVOAoAy_aP3GguoGW5_X6udpkkCR8EDRXiOOeQa10Pd_jDAEYleWQFCsrOxLsDY87tp3OJID6yjjvtbJjn109C93jRqg-3QNRg4v58IkszQxo3wArsX8pzzTDZeW11coaJPOIarHq8BBHYwqhwUrdE7yRUfFJ1kAWtFkAglvnU4K1TtR0sAEiPn7svkFiAXB042bWYAH0t-ViRqoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMHxvqH4tZUDYAGxCYFp8_2Qvh7SgAoBmAsByAsBogwDkAEBqg0CSU7IDQHqDRMIypq_ofi1lQMVdIisAh3i0iS1iA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIiZS_ofi1lQMVdIisAh3i0iS1EAEYASAAEgI3j_D_BwE&num=1&cid=CAQShwIAEQoqgaWwN8MZGJAx1lGaUqE5N7TIgAIlpd6Y-wl_IcE8wvhoPvgEqIg1xFahHJRDFyiscJV2zxGT5SLyXaxxjCSeAl8MV1LEAS7lCo1doFG9m19bblEyQ0p3SPtJToBTJSPAAxe0q_uOmi0WKu40I_y4pr47aJ2RmFnpYcgi1gpJCF3McwWlSymsB5QJ4i4zZVdRPP1vYWlmqSMrglMetvaVpUpwjwzXWBVYH_gT08HKPaU5mL8CQGbKCcpomrO1sVbvG1zRfNy4VCxrSUFZgHuFru6EXnfWI1AGB8lx3fSsscjSWjZZtiKh3GORcwxRsrScknW0Q0F7XmmUN7AO3SwojRfc2BgB&sig=AOD64_1ZMBNkcISPIlp636EYgLYio9hz1Q&client=ca-pub-6251538267574677&rf=1&nb=0&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic "Reserve Bank Of India" [ref=f6e12]:
              - link "கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்" [ref=f6e13] [cursor=pointer]:
                - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ck8pvqV5HasmbJvSQssUP4qWTqQu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6QFP0JnWkPtKPVMIAk27tTCsic89UmMFOBSlvKVkjaA8y8-Ve3BjuHEFQS8SkqK8KqHZ9biffsSiVwHF-cgFazcfM9eYrz_5rJb8jShKQeBtG3nFLY5GBEbA1gDyTngJJ0JrXM27aVOAoAy_aP3GguoGW5_X6udpkkCR8EDRXiOOeQa10Pd_jDAEYleWQFCsrOxLsDY87tp3OJID6yjjvtbJjn109C93jRqg-3QNRg4v58IkszQxo3wArsX8pzzTDZeW11coaJPOIarHq8BBHYwqhwUrdE7yRUfFJ1kAWtFkAglvnU4K1TtR0sAEiPn7svkFiAXB042bWYAH0t-ViRqoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMHxvqH4tZUDYAGxCYFp8_2Qvh7SgAoBmAsByAsBogwDkAEBqg0CSU7IDQHqDRMIypq_ofi1lQMVdIisAh3i0iS1iA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIiZS_ofi1lQMVdIisAh3i0iS1EAEYASAAEgI3j_D_BwE&num=1&cid=CAQShwIAEQoqgaWwN8MZGJAx1lGaUqE5N7TIgAIlpd6Y-wl_IcE8wvhoPvgEqIg1xFahHJRDFyiscJV2zxGT5SLyXaxxjCSeAl8MV1LEAS7lCo1doFG9m19bblEyQ0p3SPtJToBTJSPAAxe0q_uOmi0WKu40I_y4pr47aJ2RmFnpYcgi1gpJCF3McwWlSymsB5QJ4i4zZVdRPP1vYWlmqSMrglMetvaVpUpwjwzXWBVYH_gT08HKPaU5mL8CQGbKCcpomrO1sVbvG1zRfNy4VCxrSUFZgHuFru6EXnfWI1AGB8lx3fSsscjSWjZZtiKh3GORcwxRsrScknW0Q0F7XmmUN7AO3SwojRfc2BgB&sig=AOD64_1ZMBNkcISPIlp636EYgLYio9hz1Q&client=ca-pub-6251538267574677&rf=1&nb=7&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
                - text: கோரப்படாத டெபாசிட்டுகளுக்கு உங்கள் வழக்கமான
                - text: வங்கி மட்டுமின்றி எந்த கிளைக்கும் வாருங்கள்
          - link "Learn More" [ref=f6e17] [cursor=pointer]:
            - /url: https://googleads.g.doubleclick.net/aclk?sa=l&ai=Ck8pvqV5HasmbJvSQssUP4qWTqQu208SYiAHRgvS_9hXdm4WTlg4QASDTkZYiYOWS6IPYDqAB0qfFqT_IAQGpAq3xhA2zjEY-qAMByAPLBKoE6QFP0JnWkPtKPVMIAk27tTCsic89UmMFOBSlvKVkjaA8y8-Ve3BjuHEFQS8SkqK8KqHZ9biffsSiVwHF-cgFazcfM9eYrz_5rJb8jShKQeBtG3nFLY5GBEbA1gDyTngJJ0JrXM27aVOAoAy_aP3GguoGW5_X6udpkkCR8EDRXiOOeQa10Pd_jDAEYleWQFCsrOxLsDY87tp3OJID6yjjvtbJjn109C93jRqg-3QNRg4v58IkszQxo3wArsX8pzzTDZeW11coaJPOIarHq8BBHYwqhwUrdE7yRUfFJ1kAWtFkAglvnU4K1TtR0sAEiPn7svkFiAXB042bWYAH0t-ViRqoB6fMsQKoB-LYsQKoB6a-G6gHzM6xAqgH89EbqAeW2BuoB6qbsQKoB47OG6gHk9gbqAfw4BuoB-6WsQKoB_6esQKoB6--sQKoB9XJG6gH2baxAqgHmgaoB_-esQKoB9-fsQKoB_jCsQKoB_vCsQLYBwHSCDMIgGEQARifAzIIioKAgICAgAg6D4BAgMCAgICAqIACqIOAEEi9_cE6WMHxvqH4tZUDYAGxCYFp8_2Qvh7SgAoBmAsByAsBogwDkAEBqg0CSU7IDQHqDRMIypq_ofi1lQMVdIisAh3i0iS1iA4J2BMDiBQB0BUBmBYByhYCCgD4FgGAFwGyFwQYAVAGuhcCOAGyGAUYASIBANAYAbIZATfCGQIIAQ&gclid=EAIaIQobChMIiZS_ofi1lQMVdIisAh3i0iS1EAEYASAAEgI3j_D_BwE&num=1&cid=CAQShwIAEQoqgaWwN8MZGJAx1lGaUqE5N7TIgAIlpd6Y-wl_IcE8wvhoPvgEqIg1xFahHJRDFyiscJV2zxGT5SLyXaxxjCSeAl8MV1LEAS7lCo1doFG9m19bblEyQ0p3SPtJToBTJSPAAxe0q_uOmi0WKu40I_y4pr47aJ2RmFnpYcgi1gpJCF3McwWlSymsB5QJ4i4zZVdRPP1vYWlmqSMrglMetvaVpUpwjwzXWBVYH_gT08HKPaU5mL8CQGbKCcpomrO1sVbvG1zRfNy4VCxrSUFZgHuFru6EXnfWI1AGB8lx3fSsscjSWjZZtiKh3GORcwxRsrScknW0Q0F7XmmUN7AO3SwojRfc2BgB&sig=AOD64_1ZMBNkcISPIlp636EYgLYio9hz1Q&client=ca-pub-6251538267574677&rf=1&nb=8&adurl=https://rbikehtahai.rbi.org.in/UnclaimedDepositsEng.html%3Futm_source%3DGoogle%26utm_medium%3DBanner%26utm_campaign%3DPD_RBI_GDN_Tamil_June_2026%26gad_source%3D5%26gad_campaignid%3D23947602369
            - generic [ref=f6e18]: Learn More
            - img [ref=f6e19]
        - img [ref=f6e24] [cursor=pointer]
        - button [ref=f6e26] [cursor=pointer]:
          - img [ref=f6e27]
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