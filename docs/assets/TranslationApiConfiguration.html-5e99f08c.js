import{_ as i,a as l,b as o,c as s,d as c,e as d,f as h,g as u,h as p,i as g}from"./csv_only-47ff7cef.js";import{_ as y,r as f,o as m,c as b,a as t,b as e,e as a,d as r}from"./app-cea9aa4b.js";const x={},_=r('<h1 id="translation-api-configuration" tabindex="-1"><a class="header-anchor" href="#translation-api-configuration" aria-hidden="true">#</a> Translation API Configuration</h1><h2 id="open-the-translation-api-configuration-window" tabindex="-1"><a class="header-anchor" href="#open-the-translation-api-configuration-window" aria-hidden="true">#</a> Open the Translation API Configuration Window</h2><ol><li><p>Hover your mouse over the &quot;Settings&quot; button icon.</p><p><img src="'+i+'" alt="" loading="lazy"></p></li><li><p>Click on the &quot;Translation API Configuration&quot; icon.</p><p><img src="'+l+'" alt="" loading="lazy"></p></li></ol><h2 id="translation-api-description" tabindex="-1"><a class="header-anchor" href="#translation-api-description" aria-hidden="true">#</a> Translation API Description</h2><ol><li><p>This extension integrates numerous translation APIs. You can choose the appropriate translation API according to your needs.</p><p><img src="'+o+'" alt="" loading="lazy"></p></li><li><p>They are currently divided into two categories: &quot;No API Key Required&quot; and &quot;API Key Required&quot;.</p><p><img src="'+s+'" alt="" loading="lazy"></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">No API Key Required</th><th style="text-align:center;">API Key Required</th></tr></thead><tbody><tr><td style="text-align:center;">Cost</td><td style="text-align:center;">Free</td><td style="text-align:center;">Mostly free<br>There may be a limit on the number of translated characters per month, but the free quota is usually sufficient for our use.</td></tr><tr><td style="text-align:center;">Stability</td><td style="text-align:center;">Very unstable<br>Some may not work due to different computer and network environments.<br>Very unstable and may fail at any time.<br>Translation may succeed during testing, but may fail during actual use.</td><td style="text-align:center;">Very stable<br>Basic failure-free translation.</td></tr><tr><td style="text-align:center;">Speed</td><td style="text-align:center;">Very slow</td><td style="text-align:center;">Very fast</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">Translation API</th><th style="text-align:center;">Free Quota</th></tr></thead><tbody><tr><td style="text-align:center;">API without API KEY</td><td style="text-align:center;">Unlimited</td></tr><tr><td style="text-align:center;">Google</td><td style="text-align:center;">500,000 characters per month for free</td></tr><tr><td style="text-align:center;">OpenAI / ChatGPT</td><td style="text-align:center;">$5 free trial credit for first-time users</td></tr><tr><td style="text-align:center;">Microsoft</td><td style="text-align:center;">2 million characters per month (only for the first 12 months after registering with Azure)</td></tr><tr><td style="text-align:center;">Amazon</td><td style="text-align:center;">2 million characters per month (only for the first 12 months after registering with AWS)</td></tr><tr><td style="text-align:center;">DeepL</td><td style="text-align:center;">500,000 characters per month for free</td></tr><tr><td style="text-align:center;">Yandex</td><td style="text-align:center;">Unknown</td></tr><tr><td style="text-align:center;">Baidu / 百度翻译</td><td style="text-align:center;">50,000 characters per month for free</td></tr><tr><td style="text-align:center;">Alibaba / 阿里翻译</td><td style="text-align:center;">1 million characters per month for free</td></tr><tr><td style="text-align:center;">Youdao / 有道翻译</td><td style="text-align:center;">$50 free trial credit for new users</td></tr><tr><td style="text-align:center;">Tencent / 腾讯翻译</td><td style="text-align:center;">5 million characters per month for free</td></tr></tbody></table></li><li><p>For &quot;API Key Required&quot; APIs, after selecting one, there will be a tutorial document for you to apply for it according to the tutorial.</p></li><li><p>For &quot;No API Key Required&quot; APIs, if the translation fails, please try switching to another API and do not submit an issue.</p></li><li><p>Please choose the appropriate API based on the translation speed and quality of each API.</p></li></ol><h2 id="api-testing" tabindex="-1"><a class="header-anchor" href="#api-testing" aria-hidden="true">#</a> API Testing</h2><p><img src="'+c+'" alt="" loading="lazy"></p><ol><li><p>Select an API and click the &quot;Test&quot; button.</p></li><li><p>If the translation is successful, the translation result will be displayed.</p></li><li><p>If the translation fails, an error message will be displayed.</p></li></ol><h2 id="tagcomplete-translation-enhancement" tabindex="-1"><a class="header-anchor" href="#tagcomplete-translation-enhancement" aria-hidden="true">#</a> TagComplete Translation enhancement</h2>',9),w={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},I=t("p",null,"After enabling this function, the number of network requests will be reduced and the translation result will be more accurate.",-1),A=t("p",null,"The principle of this function is that for each word, the translation result will be automatically searched from the CSV file. If found, the network translation API will not be requested again. If not found, the network translation API will be requested.",-1),q=t("p",null,"Therefore, if the word you want to translate is not in your CSV file, this function will not work.",-1),k={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},P=t("code",null,"extensions\\sd-webui-prompt-all-in-one\\tags",-1),C=t("p",null,[t("img",{src:d,alt:"",loading:"lazy"})],-1),T=r('<li><p>You need to select the correct CSV file, otherwise it will cause partial word translation failure, translation result of 0, incorrect translation language, etc.</p></li><li><p>You can use Excel to open the CSV file and check whether the content format is correct. The correct format is as follows:</p><table><thead><tr><th style="text-align:center;">Number</th><th style="text-align:center;">English</th><th style="text-align:center;">Your Language (here is Chinese as an example)</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">1girl</td><td style="text-align:center;">1女孩</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">1boy</td><td style="text-align:center;">1男孩</td></tr><tr><td style="text-align:center;">...</td><td style="text-align:center;">...</td><td style="text-align:center;">...</td></tr></tbody></table><p><img src="'+h+'" alt="" loading="lazy"></p></li><li><p>Click the &quot;Refresh&quot; button and select the correct CSV file.</p><p><img src="'+u+'" alt="" loading="lazy"></p></li><li><p>Click the &quot;Test&quot; button. Check whether the translation result is correct. In the test result, the English word is in front, and the translation result in your language is at the back. If the translation result at the back is not correct, please check whether your CSV file is correct, otherwise do not enable this function.</p><p><img src="'+p+'" alt="" loading="lazy"></p></li><li><p>If you only want to use CSV for translation during automatic translation and not use the network translation API, then select the following option. After selecting, only when you manually click the translation button will the network translation API be used.</p><p><img src="'+g+'" alt="" loading="lazy"></p></li>',5);function V(S,z){const n=f("ExternalLinkIcon");return m(),b("div",null,[_,t("blockquote",null,[t("p",null,[e("Enable the CSV file in "),t("a",w,[e("a1111-sd-webui-tagcomplete"),a(n)]),e(" to enhance the translation function.")]),I,A,q]),t("ol",null,[t("li",null,[t("p",null,[e("This function does not require you to install the "),t("a",k,[e("a1111-sd-webui-tagcomplete"),a(n)]),e(" extension. You can directly put the translated CSV file into the "),P,e(" directory. If there is no such directory, please create one yourself.")]),C]),T])])}const Y=y(x,[["render",V],["__file","TranslationApiConfiguration.html.vue"]]);export{Y as default};
