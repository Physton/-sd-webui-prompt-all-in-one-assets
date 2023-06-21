import{_ as r,a as i,b as d,c as o,d as s,e as c,f as p,g,h,i as y}from"./csv_only-680f202c.js";import{_ as x,r as _,o as m,c as b,a as t,b as e,d as a,e as n}from"./app-1c446906.js";const u={},f=n('<h1 id="翻譯api配置" tabindex="-1"><a class="header-anchor" href="#翻譯api配置" aria-hidden="true">#</a> 翻譯API配置</h1><blockquote><p>在英文語言環境下，這個按鈕將被隱藏。</p></blockquote><h2 id="打開翻譯api配置視窗" tabindex="-1"><a class="header-anchor" href="#打開翻譯api配置視窗" aria-hidden="true">#</a> 打開翻譯API配置視窗</h2><ol><li><p>滑鼠移動到 <code>設置按鈕圖標</code> 上。</p><p><img src="'+r+'" alt="" loading="lazy"></p></li><li><p>點擊 <code>翻譯API配置圖標</code>。</p><p><img src="'+i+'" alt="" loading="lazy"></p></li></ol><h2 id="翻譯接口說明" tabindex="-1"><a class="header-anchor" href="#翻譯接口說明" aria-hidden="true">#</a> 翻譯接口說明</h2><ol><li><p>本擴展集成了眾多翻譯接口，你可以根據自己的需求，選擇合適的翻譯接口。</p><p><img src="'+d+'" alt="" loading="lazy"></p></li><li><p>目前分為 <code>不需要API KEY</code> 和 <code>需要API KEY</code> 兩類。</p><p><img src="'+o+'" alt="" loading="lazy"></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">不需要API KEY</th><th style="text-align:center;">需要API KEY</th></tr></thead><tbody><tr><td style="text-align:center;">收費</td><td style="text-align:center;">免費</td><td style="text-align:center;">大部分免費<br>可能每個月有翻譯字符數的限制，但基本上免費的額度完全足夠我們使用。</td></tr><tr><td style="text-align:center;">穩定</td><td style="text-align:center;">非常不穩定<br>根據每個人的電腦環境和網絡環境不同，其中部分可能無法使用。<br>非常不穩定，可能隨時失效。<br>在測試時可能翻譯成功，但是在實際使用時可能翻譯失敗。</td><td style="text-align:center;">非常穩定<br>基本不會失效。<br>翻譯基本不會失敗。</td></tr><tr><td style="text-align:center;">速度</td><td style="text-align:center;">非常慢</td><td style="text-align:center;">非常快</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">翻譯接口</th><th style="text-align:center;">免費額度</th></tr></thead><tbody><tr><td style="text-align:center;">不需要API KEY的接口</td><td style="text-align:center;">無限</td></tr><tr><td style="text-align:center;">Google</td><td style="text-align:center;">每月免費50萬字符</td></tr><tr><td style="text-align:center;">OpenAI / ChatGPT</td><td style="text-align:center;">首次開通贈送5美元體驗金</td></tr><tr><td style="text-align:center;">Microsoft</td><td style="text-align:center;">每月200萬字符（僅限註冊 Azure 後的前12個月）</td></tr><tr><td style="text-align:center;">Amazon</td><td style="text-align:center;">每月200萬字符（僅限註冊 AWS 後的前12個月）</td></tr><tr><td style="text-align:center;">DeepL</td><td style="text-align:center;">免費版每月50萬字符</td></tr><tr><td style="text-align:center;">Yandex</td><td style="text-align:center;">未知</td></tr><tr><td style="text-align:center;">Baidu / 百度翻譯</td><td style="text-align:center;">每月5萬字符</td></tr><tr><td style="text-align:center;">Alibaba / 阿里翻譯</td><td style="text-align:center;">每月免費100萬字符</td></tr><tr><td style="text-align:center;">Youdao / 有道翻譯</td><td style="text-align:center;">新用戶註冊贈送50元體驗金</td></tr><tr><td style="text-align:center;">Tencent / 腾讯翻译</td><td style="text-align:center;">每月免費500萬字符</td></tr></tbody></table></li><li><p><code>需要API KEY</code> 的接口，選擇後，會有申請教程文檔，根據教程文檔，自己申請。</p></li><li><p><code>不需要API KEY</code> 的接口，如果翻譯失敗，請嘗試切換其他接口，不要提交issue。</p></li><li><p>請自己根據每個接口的翻譯速度和質量，選擇合適的接口。</p></li></ol><h2 id="接口測試" tabindex="-1"><a class="header-anchor" href="#接口測試" aria-hidden="true">#</a> 接口測試</h2><p><img src="'+s+'" alt="" loading="lazy"></p><ol><li><p>選擇一個接口，點擊 <code>測試</code> 按鈕。</p></li><li><p>翻譯成功，則會顯示翻譯結果。</p></li><li><p>翻譯失敗，則會顯示錯誤信息。</p></li></ol><h2 id="tagcomplate-翻譯增強" tabindex="-1"><a class="header-anchor" href="#tagcomplate-翻譯增強" aria-hidden="true">#</a> TagComplate 翻譯增強</h2>',10),A={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},C=t("p",null,"啟動此功能後，會減少網絡請求，翻譯結果更精準。",-1),I=t("p",null,"此功能的原理是，針對每個單詞，將自動從 CSV 文件中查找翻譯結果，如果找到，則不會再請求網絡翻譯接口，如果沒有找到，則會請求網絡翻譯接口。",-1),V=t("p",null,"所以，如果你的 CSV 文件中沒有你要翻譯的單詞，那麼此功能將不會生效。",-1),z={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},k=t("code",null,"extensions\\sd-webui-prompt-all-in-one\\tags",-1),E=t("p",null,[t("img",{src:c,alt:"",loading:"lazy"})],-1),P=n('<li><p>你需要選擇正確的 CSV 文件，否則將導致部分單詞翻譯失敗、翻譯結果為0、翻譯的語言不正確等等。</p></li><li><p>你可以使用 Excel 打開 CSV 文件，查看內容格式是否正確，正確的格式如下：</p><table><thead><tr><th style="text-align:center;">序號</th><th style="text-align:center;">英文</th><th style="text-align:center;">你的語言（這裡以中文示例）</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">1girl</td><td style="text-align:center;">1女孩</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">1boy</td><td style="text-align:center;">1男孩</td></tr><tr><td style="text-align:center;">...</td><td style="text-align:center;">...</td><td style="text-align:center;">...</td></tr></tbody></table><p><img src="'+p+'" alt="" loading="lazy"></p></li><li><p>點擊 <code>刷新</code> 按鈕，選擇正確的 CSV 文件。</p><p><img src="'+g+'" alt="" loading="lazy"></p></li><li><p>點擊 <code>測試</code> 按鈕。檢查翻譯結果是否正確。測試結果中，每一行的前面為英文單詞，後面為你的語言翻譯結果。如果後面的翻譯結果不正確，請檢查你的 CSV 文件是否正確，否則不要啟動此功能。</p><p><img src="'+h+'" alt="" loading="lazy"></p></li><li><p>如果你只想在自動翻譯時，只使用CSV進行翻譯，不使用網絡翻譯接口，那麼請勾選以下選項。勾選後，只有你手動點擊翻譯按鈕，才會使用網絡翻譯接口。</p><p><img src="'+y+'" alt="" loading="lazy"></p></li>',5);function S(Y,K){const l=_("ExternalLinkIcon");return m(),b("div",null,[f,t("blockquote",null,[t("p",null,[e("是否啟用 "),t("a",A,[e("a1111-sd-webui-tagcomplete"),a(l)]),e(" 中的 CSV 文件以增強翻譯功能。")]),C,I,V]),t("ol",null,[t("li",null,[t("p",null,[e("此功能不需要你安裝 "),t("a",z,[e("a1111-sd-webui-tagcomplete"),a(l)]),e(" 擴展。你可以直接把翻譯過的 CSV 文件，放到 "),k,e(" 目錄下。如果沒有此目錄，請自己創建。")]),E]),P])])}const D=x(u,[["render",S],["__file","TranslationApiConfiguration.html.vue"]]);export{D as default};
