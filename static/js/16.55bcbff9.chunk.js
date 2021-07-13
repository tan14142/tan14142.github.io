(this.webpackJsonppages=this.webpackJsonppages||[]).push([[16,45,51,81,86,87,96,100,118,120,121],{176:function(t,e,j){},177:function(t,e,j){},178:function(t,e,j){},80:function(t,e,j){"use strict";function b(t){var e=t.split(/\r|\n/);e.pop(),e.shift();var j=e[0].match(/^\s+/g)||[];return(j?e.map((function(t){return t.replace(j[0],"")})):e).join("\r\n")}j.r(e),j.d(e,"default",(function(){return b}))},81:function(t,e,j){"use strict";j.r(e),j.d(e,"default",(function(){return i}));var b=j(1),c=j.n(b),r=j(6),n=j(59),s=j.n(n),O=(j(176),j(0));function i(t){var e=t.children,j=t.tabs,n=Object(b.useRef)(null);return Object(b.useEffect)((function(){var t=s.a.Tabs.init(n.current,{});return function(){return t.destroy()}}),[]),Object(O.jsxs)(O.Fragment,{children:[Object(O.jsx)("ul",{className:"tabs",ref:n,children:j.map((function(t,e){return Object(O.jsx)("li",{className:"tab",children:Object(O.jsx)(r.b,{to:"#"+t,children:t})},e)}))}),c.a.Children.toArray(e).map((function(t,e){return Object(O.jsx)("div",{className:"flex-column",id:j[e],children:t},e)}))]})}},82:function(t,e,j){"use strict";j.r(e),j.d(e,"default",(function(){return s}));var b=j(1),c=j(80),r=j(85),n=j(0);function s(t){var e=t.indent,j=void 0===e||e,s=t.lang,O=t.onInput,i=void 0===O?function(){}:O,u=Object(r.default)(),o=Object.values(s)[0];return j||(o=Object(c.default)(o)),Object(b.useEffect)((function(){return i(o)}),[i,o]),Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("button",{className:"reset",onClick:function(t){var e=t.currentTarget.parentNode.querySelector("code").textContent;navigator.clipboard.writeText(e).then((function(){return u("copied to clipboard")})).catch((function(){return u("copy to clipboard failed")}))},children:"Copy to Clipboard"}),Object(n.jsx)("pre",{children:Object(n.jsx)("code",{contentEditable:!0,className:"hljs language-"+Object.keys(s)[0].toLowerCase(),spellCheck:"false",suppressContentEditableWarning:!0,onInput:function(t){var e=t.target;i(e.textContent)},children:o})})]})}},83:function(t,e,j){"use strict";j.r(e),j.d(e,"default",(function(){return c}));var b=j(1);function c(){Object(b.useEffect)((function(){var t,e;return window.hljs||(window.hljs=!0,(t=document.createElement("link")).rel="stylesheet",t.href="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/styles/default.min.css",(e=document.createElement("script")).src="https://unpkg.com/@highlightjs/cdn-assets@11.1.0/highlight.min.js",e.onload=function(){return window.hljs.highlightAll()},document.body.appendChild(t),document.body.appendChild(e)),function(){"object"===typeof t&&document.body.removeChild(t),"object"===typeof e&&document.body.removeChild(e),delete window.hljs}}),[])}},84:function(t,e,j){"use strict";j.r(e),j.d(e,"default",(function(){return O}));var b=j(60),c=j(82),r=j(81),n=(j(177),j(83)),s=j(0);function O(t){var e=t.lang,j=t.indent,O=void 0===j||j,i=t.onInput,u=void 0===i?function(){}:i;return Object(n.default)(),Object(s.jsx)("div",{className:"panel language-markup",children:Object(s.jsx)(r.default,{tabs:Object.keys(e),children:Object.entries(e).map((function(t,e){return Object(s.jsx)(c.default,{indent:O,lang:Object(b.a)({},t[0],t[1]),onInput:u},e)}))})})}},85:function(t,e,j){"use strict";j.r(e),j.d(e,"default",(function(){return s}));var b=j(16),c=j(1),r=j(59),n=j.n(r);j(178);function s(){var t=Object(c.useState)(""),e=Object(b.a)(t,2),j=e[0],r=e[1];return Object(c.useEffect)((function(){return j&&n.a.toast({completeCallback:function(){return r("")},displayLength:2e3,html:j}),function(){return n.a.Toast.dismissAll()}}),[j]),r}},98:function(t,e,j){"use strict";j.r(e),j.d(e,"default",(function(){return r}));var b=j(84),c=j(0);function r(t){var e=t.lang;return Object(c.jsxs)(c.Fragment,{children:[Object(c.jsxs)("section",{className:"accent-bottom panel",children:[Object(c.jsx)("h2",{children:"Large sum"}),Object(c.jsx)("h4",{children:"Problem 13"}),Object(c.jsx)("p",{children:"Work out the first ten digits of the sum of the following one-hundred 50-digit numbers."}),Object(c.jsxs)("div",{className:"center font-mono nowrap",style:{marginBottom:"1rem"},children:["37107287533902102798797998220837590246510135740250",Object(c.jsx)("br",{}),"46376937677490009712648124896970078050417018260538",Object(c.jsx)("br",{}),"74324986199524741059474233309513058123726617309629",Object(c.jsx)("br",{}),"91942213363574161572522430563301811072406154908250",Object(c.jsx)("br",{}),"23067588207539346171171980310421047513778063246676",Object(c.jsx)("br",{}),"89261670696623633820136378418383684178734361726757",Object(c.jsx)("br",{}),"28112879812849979408065481931592621691275889832738",Object(c.jsx)("br",{}),"44274228917432520321923589422876796487670272189318",Object(c.jsx)("br",{}),"47451445736001306439091167216856844588711603153276",Object(c.jsx)("br",{}),"70386486105843025439939619828917593665686757934951",Object(c.jsx)("br",{}),"62176457141856560629502157223196586755079324193331",Object(c.jsx)("br",{}),"64906352462741904929101432445813822663347944758178",Object(c.jsx)("br",{}),"92575867718337217661963751590579239728245598838407",Object(c.jsx)("br",{}),"58203565325359399008402633568948830189458628227828",Object(c.jsx)("br",{}),"80181199384826282014278194139940567587151170094390",Object(c.jsx)("br",{}),"35398664372827112653829987240784473053190104293586",Object(c.jsx)("br",{}),"86515506006295864861532075273371959191420517255829",Object(c.jsx)("br",{}),"71693888707715466499115593487603532921714970056938",Object(c.jsx)("br",{}),"54370070576826684624621495650076471787294438377604",Object(c.jsx)("br",{}),"53282654108756828443191190634694037855217779295145",Object(c.jsx)("br",{}),"36123272525000296071075082563815656710885258350721",Object(c.jsx)("br",{}),"45876576172410976447339110607218265236877223636045",Object(c.jsx)("br",{}),"17423706905851860660448207621209813287860733969412",Object(c.jsx)("br",{}),"81142660418086830619328460811191061556940512689692",Object(c.jsx)("br",{}),"51934325451728388641918047049293215058642563049483",Object(c.jsx)("br",{}),"62467221648435076201727918039944693004732956340691",Object(c.jsx)("br",{}),"15732444386908125794514089057706229429197107928209",Object(c.jsx)("br",{}),"55037687525678773091862540744969844508330393682126",Object(c.jsx)("br",{}),"18336384825330154686196124348767681297534375946515",Object(c.jsx)("br",{}),"80386287592878490201521685554828717201219257766954",Object(c.jsx)("br",{}),"78182833757993103614740356856449095527097864797581",Object(c.jsx)("br",{}),"16726320100436897842553539920931837441497806860984",Object(c.jsx)("br",{}),"48403098129077791799088218795327364475675590848030",Object(c.jsx)("br",{}),"87086987551392711854517078544161852424320693150332",Object(c.jsx)("br",{}),"59959406895756536782107074926966537676326235447210",Object(c.jsx)("br",{}),"69793950679652694742597709739166693763042633987085",Object(c.jsx)("br",{}),"41052684708299085211399427365734116182760315001271",Object(c.jsx)("br",{}),"65378607361501080857009149939512557028198746004375",Object(c.jsx)("br",{}),"35829035317434717326932123578154982629742552737307",Object(c.jsx)("br",{}),"94953759765105305946966067683156574377167401875275",Object(c.jsx)("br",{}),"88902802571733229619176668713819931811048770190271",Object(c.jsx)("br",{}),"25267680276078003013678680992525463401061632866526",Object(c.jsx)("br",{}),"36270218540497705585629946580636237993140746255962",Object(c.jsx)("br",{}),"24074486908231174977792365466257246923322810917141",Object(c.jsx)("br",{}),"91430288197103288597806669760892938638285025333403",Object(c.jsx)("br",{}),"34413065578016127815921815005561868836468420090470",Object(c.jsx)("br",{}),"23053081172816430487623791969842487255036638784583",Object(c.jsx)("br",{}),"11487696932154902810424020138335124462181441773470",Object(c.jsx)("br",{}),"63783299490636259666498587618221225225512486764533",Object(c.jsx)("br",{}),"67720186971698544312419572409913959008952310058822",Object(c.jsx)("br",{}),"95548255300263520781532296796249481641953868218774",Object(c.jsx)("br",{}),"76085327132285723110424803456124867697064507995236",Object(c.jsx)("br",{}),"37774242535411291684276865538926205024910326572967",Object(c.jsx)("br",{}),"23701913275725675285653248258265463092207058596522",Object(c.jsx)("br",{}),"29798860272258331913126375147341994889534765745501",Object(c.jsx)("br",{}),"18495701454879288984856827726077713721403798879715",Object(c.jsx)("br",{}),"38298203783031473527721580348144513491373226651381",Object(c.jsx)("br",{}),"34829543829199918180278916522431027392251122869539",Object(c.jsx)("br",{}),"40957953066405232632538044100059654939159879593635",Object(c.jsx)("br",{}),"29746152185502371307642255121183693803580388584903",Object(c.jsx)("br",{}),"41698116222072977186158236678424689157993532961922",Object(c.jsx)("br",{}),"62467957194401269043877107275048102390895523597457",Object(c.jsx)("br",{}),"23189706772547915061505504953922979530901129967519",Object(c.jsx)("br",{}),"86188088225875314529584099251203829009407770775672",Object(c.jsx)("br",{}),"11306739708304724483816533873502340845647058077308",Object(c.jsx)("br",{}),"82959174767140363198008187129011875491310547126581",Object(c.jsx)("br",{}),"97623331044818386269515456334926366572897563400500",Object(c.jsx)("br",{}),"42846280183517070527831839425882145521227251250327",Object(c.jsx)("br",{}),"55121603546981200581762165212827652751691296897789",Object(c.jsx)("br",{}),"32238195734329339946437501907836945765883352399886",Object(c.jsx)("br",{}),"75506164965184775180738168837861091527357929701337",Object(c.jsx)("br",{}),"62177842752192623401942399639168044983993173312731",Object(c.jsx)("br",{}),"32924185707147349566916674687634660915035914677504",Object(c.jsx)("br",{}),"99518671430235219628894890102423325116913619626622",Object(c.jsx)("br",{}),"73267460800591547471830798392868535206946944540724",Object(c.jsx)("br",{}),"76841822524674417161514036427982273348055556214818",Object(c.jsx)("br",{}),"97142617910342598647204516893989422179826088076852",Object(c.jsx)("br",{}),"87783646182799346313767754307809363333018982642090",Object(c.jsx)("br",{}),"10848802521674670883215120185883543223812876952786",Object(c.jsx)("br",{}),"71329612474782464538636993009049310363619763878039",Object(c.jsx)("br",{}),"62184073572399794223406235393808339651327408011116",Object(c.jsx)("br",{}),"66627891981488087797941876876144230030984490851411",Object(c.jsx)("br",{}),"60661826293682836764744779239180335110989069790714",Object(c.jsx)("br",{}),"85786944089552990653640447425576083659976645795096",Object(c.jsx)("br",{}),"66024396409905389607120198219976047599490197230297",Object(c.jsx)("br",{}),"64913982680032973156037120041377903785566085089252",Object(c.jsx)("br",{}),"16730939319872750275468906903707539413042652315011",Object(c.jsx)("br",{}),"94809377245048795150954100921645863754710598436791",Object(c.jsx)("br",{}),"78639167021187492431995700641917969777599028300699",Object(c.jsx)("br",{}),"15368713711936614952811305876380278410754449733078",Object(c.jsx)("br",{}),"40789923115535562561142322423255033685442488917353",Object(c.jsx)("br",{}),"44889911501440648020369068063960672322193204149535",Object(c.jsx)("br",{}),"41503128880339536053299340368006977710650566631954",Object(c.jsx)("br",{}),"81234880673210146739058568557934581403627822703280",Object(c.jsx)("br",{}),"82616570773948327592232845941706525094512325230608",Object(c.jsx)("br",{}),"22918802058777319719839450180888072429661980811197",Object(c.jsx)("br",{}),"77158542502016545090413245809786882778948721859617",Object(c.jsx)("br",{}),"72107838435069186155435662884062257473692284509516",Object(c.jsx)("br",{}),"20849603980134001723930671666823555245252804609722",Object(c.jsx)("br",{}),"53503534226472524250874054075591789781264330331690"]})]}),Object(c.jsx)(b.default,{lang:e})]})}}}]);