var btn = document.getElementById("btn-qoute");
var output= document.getElementById("output");
var qoutes=[{
    auther: " Oscar Wilde", quote:"Be yourself; everyone else is already taken."},{auther:" Frank Zappa",quote:"So many books, so little time"},{auther:"Marcus Tullius Cicero",quote:"“A room without books is like a body without a soul."},{auther:"― Mae West",quote:"You only live once, but if you do it right, once is enough"},{auther:" Mark Twain",quote:"If you tell the truth, you don't have to remember anything"},{auther:"Stephen Chbosky",quote:"We accept the love we think we deserve."}];
var auther=document.getElementById("auther");
function run(){
    var randomQuotes= Math.floor(Math.random() * qoutes.length);
    output.innerHTML=qoutes[randomQuotes].quote;
    auther.innerHTML=qoutes[randomQuotes].auther;

    // output.innerHTML=qoutes[randomQuotes].quote;

}