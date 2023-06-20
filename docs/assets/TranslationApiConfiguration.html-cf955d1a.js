import{_ as r,a as i,b as d,c as o,d as s,e as c,f as p,g,h,i as y}from"./csv_only-47ff7cef.js";import{_ as x,r as _,o as m,c as u,a as t,b as e,e as a,d as n}from"./app-cea9aa4b.js";const b={},f=n('<h1 id="настроика-api-перевода" tabindex="-1"><a class="header-anchor" href="#настроика-api-перевода" aria-hidden="true">#</a> Настройка API перевода</h1><h2 id="открытие-окна-настроики-api-перевода" tabindex="-1"><a class="header-anchor" href="#открытие-окна-настроики-api-перевода" aria-hidden="true">#</a> Открытие окна настройки API перевода</h2><ol><li><p>Наведите курсор мыши на <code>иконку кнопки настроек</code>.</p><p><img src="'+r+'" alt="" loading="lazy"></p></li><li><p>Нажмите на <code>иконку настройки API перевода</code>.</p><p><img src="'+i+'" alt="" loading="lazy"></p></li></ol><h2 id="описание-интерфеиса-перевода" tabindex="-1"><a class="header-anchor" href="#описание-интерфеиса-перевода" aria-hidden="true">#</a> Описание интерфейса перевода</h2><ol><li><p>Это расширение интегрирует множество интерфейсов перевода. Вы можете выбрать подходящий интерфейс перевода в соответствии со своими потребностями.</p><p><img src="'+d+'" alt="" loading="lazy"></p></li><li><p>В настоящее время он разделен на две категории: &quot;Не требует API KEY&quot; и &quot;Требует API KEY&quot;.</p><p><img src="'+o+'" alt="" loading="lazy"></p><table><thead><tr><th style="text-align:center;"></th><th style="text-align:center;">Не требует API KEY</th><th style="text-align:center;">Требует API KEY</th></tr></thead><tbody><tr><td style="text-align:center;">Оплата</td><td style="text-align:center;">Бесплатно</td><td style="text-align:center;">Большинство бесплатно<br>возможно, есть ограничение на количество символов перевода в месяц, но в основном бесплатный лимит полностью достаточен для наших потребностей.</td></tr><tr><td style="text-align:center;">Стабильность</td><td style="text-align:center;">Очень нестабильный<br>В зависимости от среды компьютера и сетевой среды каждого человека часть из них может быть недоступна.<br>Очень нестабильно и может в любой момент перестать работать.<br>Во время тестирования перевод может быть успешным, но в реальной работе перевод может не работать.</td><td style="text-align:center;">Очень стабильный<br>Почти никогда не выходит из строя.<br>Перевод почти никогда не терпит неудачи.</td></tr><tr><td style="text-align:center;">Скорость</td><td style="text-align:center;">Очень медленный</td><td style="text-align:center;">Очень быстрый</td></tr></tbody></table><table><thead><tr><th style="text-align:center;">Интерфейс перевода</th><th style="text-align:center;">Бесплатный лимит</th></tr></thead><tbody><tr><td style="text-align:center;">Интерфейс без API KEY</td><td style="text-align:center;">Безлимитный</td></tr><tr><td style="text-align:center;">Google</td><td style="text-align:center;">Бесплатно до 500 000 символов в месяц</td></tr><tr><td style="text-align:center;">OpenAI / ChatGPT</td><td style="text-align:center;">Первоначально предоставляется 5 долларов США на опытный счет</td></tr><tr><td style="text-align:center;">Microsoft</td><td style="text-align:center;">Бесплатно до 2 миллионов символов в месяц (только для первых 12 месяцев после регистрации в Azure)</td></tr><tr><td style="text-align:center;">Amazon</td><td style="text-align:center;">Бесплатно до 2 миллионов символов в месяц (только для первых 12 месяцев после регистрации в AWS)</td></tr><tr><td style="text-align:center;">DeepL</td><td style="text-align:center;">Бесплатная версия до 500 000 символов в месяц</td></tr><tr><td style="text-align:center;">Yandex</td><td style="text-align:center;">Неизвестно</td></tr><tr><td style="text-align:center;">Baidu / 百度翻译</td><td style="text-align:center;">Бесплатно до 50 000 символов в месяц</td></tr><tr><td style="text-align:center;">Alibaba / 阿里翻译</td><td style="text-align:center;">Бесплатно до 1 миллиона символов в месяц</td></tr><tr><td style="text-align:center;">Youdao / 有道翻译</td><td style="text-align:center;">Новым пользователям предоставляется опытный счет на 50 юаней</td></tr><tr><td style="text-align:center;">Tencent / 腾讯翻译</td><td style="text-align:center;">Бесплатно до 5 миллионов символов в месяц</td></tr></tbody></table></li><li><p>Для интерфейсов, требующих API KEY, после выбора будет предоставлена инструкция по запросу в соответствии с инструкциями.</p></li><li><p>Для интерфейсов, не требующих API KEY, если перевод не удался, попробуйте переключиться на другой интерфейс, не отправляйте запрос.</p></li><li><p>Выбирайте подходящий интерфейс перевода в соответствии со скоростью и качеством перевода каждого интерфейса.</p></li></ol><h2 id="тестирование-интерфеиса" tabindex="-1"><a class="header-anchor" href="#тестирование-интерфеиса" aria-hidden="true">#</a> Тестирование интерфейса</h2><p><img src="'+s+'" alt="" loading="lazy"></p><ol><li><p>Выберите интерфейс и нажмите кнопку &quot;Тест&quot;.</p></li><li><p>Если перевод успешен, результат перевода будет отображаться.</p></li><li><p>Если перевод не удался, будет показано сообщение об ошибке.</p></li></ol><h2 id="улучшенныи-перевод-tagcomplate" tabindex="-1"><a class="header-anchor" href="#улучшенныи-перевод-tagcomplate" aria-hidden="true">#</a> Улучшенный перевод TagComplate</h2>',9),A={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},C=t("p",null,"После включения этой функции количество запросов в сеть уменьшится, результат перевода станет более точным.",-1),I=t("p",null,"Эта функция заключается в том, что для каждого слова автоматически ищется результат перевода в CSV-файле. Если результат найден, то результат перевода из сети запрашиваться не будет. Если результат не найден, будет запрошен результат перевода из сети.",-1),V=t("p",null,"Поэтому, если в вашем CSV-файле нет слов, которые вы хотите перевести, эта функция не будет работать.",-1),z={href:"https://github.com/DominikDoom/a1111-sd-webui-tagcomplete",target:"_blank",rel:"noopener noreferrer"},q=t("code",null,"extensions\\sd-webui-prompt-all-in-one\\tags",-1),E=t("p",null,[t("img",{src:c,alt:"",loading:"lazy"})],-1),P=n('<li><p>Выберите правильный CSV-файл, иначе некоторые слова могут переводится неверно, результат перевода может быть равен 0, язык перевода может быть неверным и т.д.</p></li><li><p>Вы можете открыть CSV-файл в Excel, чтобы проверить, правильный ли формат содержимого. Правильный формат выглядит следующим образом:</p><table><thead><tr><th style="text-align:center;">Номер</th><th style="text-align:center;">Английский</th><th style="text-align:center;">Ваш язык (например, китайский)</th></tr></thead><tbody><tr><td style="text-align:center;">1</td><td style="text-align:center;">1girl</td><td style="text-align:center;">1女孩</td></tr><tr><td style="text-align:center;">2</td><td style="text-align:center;">1boy</td><td style="text-align:center;">1男孩</td></tr><tr><td style="text-align:center;">...</td><td style="text-align:center;">...</td><td style="text-align:center;">...</td></tr></tbody></table><p><img src="'+p+'" alt="" loading="lazy"></p></li><li><p>Нажмите кнопку &quot;Обновить&quot; и выберите правильный CSV-файл.</p><p><img src="'+g+'" alt="" loading="lazy"></p></li><li><p>Нажмите кнопку &quot;Тест&quot;. Проверьте, правильный ли результат перевода. В результате тестирования на каждой строке будет отображаться английское слово, а справа - результат перевода на ваш язык. Если результат перевода справа неверный, проверьте, правильный ли ваш CSV-файл, иначе не включайте эту функцию.</p><p><img src="'+h+'" alt="" loading="lazy"></p></li><li><p>Если вы хотите использовать только CSV для перевода при автоматическом переводе, а не использовать интерфейс перевода в сети, установите следующий флажок. Если вы нажмете кнопку перевода вручную, интерфейс перевода в сети будет использоваться.</p><p><img src="'+y+'" alt="" loading="lazy"></p></li>',5);function S(k,Y){const l=_("ExternalLinkIcon");return m(),u("div",null,[f,t("blockquote",null,[t("p",null,[e("Включить CSV-файл в "),t("a",A,[e("a1111-sd-webui-tagcomplete"),a(l)]),e(" для улучшения функции перевода.")]),C,I,V]),t("ol",null,[t("li",null,[t("p",null,[e("Эта функция не требует установки расширения "),t("a",z,[e("a1111-sd-webui-tagcomplete"),a(l)]),e(". Вы можете просто поместить переведенный CSV-файл в каталог "),q,e(". Если этого каталога нет, создайте его самостоятельно.")]),E]),P])])}const w=x(b,[["render",S],["__file","TranslationApiConfiguration.html.vue"]]);export{w as default};
