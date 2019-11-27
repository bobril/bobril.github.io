//! moment.js locale configuration
//! locale : Czech [cs]
//! author : petrbela : https://github.com/petrbela
!function(e){function n(e){return e>1&&e<5&&1!=~~(e/10)}function t(e,t,r,s){var a=e+" ";switch(r){case"s":return t||s?"pár sekund":"pár sekundami";case"m":return t?"minuta":s?"minutu":"minutou";case"mm":return t||s?a+(n(e)?"minuty":"minut"):a+"minutami";case"h":return t?"hodina":s?"hodinu":"hodinou";case"hh":return t||s?a+(n(e)?"hodiny":"hodin"):a+"hodinami";case"d":return t||s?"den":"dnem";case"dd":return t||s?a+(n(e)?"dny":"dní"):a+"dny";case"M":return t||s?"měsíc":"měsícem";case"MM":return t||s?a+(n(e)?"měsíce":"měsíců"):a+"měsíci";case"y":return t||s?"rok":"rokem";case"yy":return t||s?a+(n(e)?"roky":"let"):a+"lety"}}var r="leden_únor_březen_duben_květen_červen_červenec_srpen_září_říjen_listopad_prosinec".split("_"),s="led_úno_bře_dub_kvě_čvn_čvc_srp_zář_říj_lis_pro".split("_");e.defineLocale("cs",{months:r,monthsShort:s,monthsParse:function(e,n){var t,r=[];for(t=0;t<12;t++)r[t]=new RegExp("^"+e[t]+"$|^"+n[t]+"$","i");return r}(r,s),shortMonthsParse:function(e){var n,t=[];for(n=0;n<12;n++)t[n]=new RegExp("^"+e[n]+"$","i");return t}(s),longMonthsParse:function(e){var n,t=[];for(n=0;n<12;n++)t[n]=new RegExp("^"+e[n]+"$","i");return t}(r),weekdays:"neděle_pondělí_úterý_středa_čtvrtek_pátek_sobota".split("_"),weekdaysShort:"ne_po_út_st_čt_pá_so".split("_"),weekdaysMin:"ne_po_út_st_čt_pá_so".split("_"),longDateFormat:{LT:"H:mm",LTS:"H:mm:ss",L:"DD.MM.YYYY",LL:"D. MMMM YYYY",LLL:"D. MMMM YYYY H:mm",LLLL:"dddd D. MMMM YYYY H:mm",l:"D. M. YYYY"},calendar:{sameDay:"[dnes v] LT",nextDay:"[zítra v] LT",nextWeek:function(){switch(this.day()){case 0:return"[v neděli v] LT";case 1:case 2:return"[v] dddd [v] LT";case 3:return"[ve středu v] LT";case 4:return"[ve čtvrtek v] LT";case 5:return"[v pátek v] LT";case 6:return"[v sobotu v] LT"}},lastDay:"[včera v] LT",lastWeek:function(){switch(this.day()){case 0:return"[minulou neděli v] LT";case 1:case 2:return"[minulé] dddd [v] LT";case 3:return"[minulou středu v] LT";case 4:case 5:return"[minulý] dddd [v] LT";case 6:return"[minulou sobotu v] LT"}},sameElse:"L"},relativeTime:{future:"za %s",past:"před %s",s:t,m:t,mm:t,h:t,hh:t,d:t,dd:t,M:t,MM:t,y:t,yy:t},dayOfMonthOrdinalParse:/\d{1,2}\./,ordinal:"%d.",week:{dow:1,doy:4}})}(moment);
bobrilRegisterTranslations('cs-CZ',[function (e,t){var r=String(e).split("."),n=r[0],o=!r[1];return t?"other":1==e&&o?"one":n>=2&&n<=4&&o?"few":o?"other":"many"},",","."],["Lokalizace","Změnit","Základy","Pořadí","Množné číslo","Výběr","Formátování","Číslo","Datum a čas","Kalendář","Relatvní čas","{gender, select, female {slavná} male {slavný} other {slavná}} {gender, select, female {žena} male {muž} other {osoba}}","zde {floor, plural, =0{není} other{je}} {floor, plural, =0{žádné} =1{jedno} other{několik}} poschodí","jste v {floor, selectordinal, =0{přízemí} other{#.}} {floor, selectordinal, =0{} other{poschodí}}","Jmenuji se {a}!","Ahoj světe!"])