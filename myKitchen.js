// user need to click add item  button to save items 
// user selection will need to be save to local storage 
        // push data to an array for future use 
            // Once data is saved the local storage then the user will see indegrients on the client 
            var dairy = [["egg whites", "1124"],
            [""]
];
var dairyAlt = [ ["almond milk", "93607"],
               ["coconut milk", "12118"],
               ["dairy free milk", "10016223"],
               ["rice milk", "93761"],
               ["soy milk", "16223"],
               ["egg substitute", "1226"]
];
dairyItems = $("#dairyItems")
dairyAlt.forEach(item => {
   var li = $(`<li>${item[0]}</li>`)
   li.attr(`data-id`,item[1])
   var button = (`<button class = "btn btn-secondary">Add Item</button>`);
   li.append(button);
   dairyItems.append(li);
});             


var produce = [["asparagus spears", "11011"],
            [""]
];
var produceAlt = [ ["acorn squash", "11482"],
               ["avocado", "9037"],
               ["baby bell peppers", "10311821"],
               ["broccoli", "11090"],
               ["brussel sprouts" , "11098"],
               ["carrots" , "11124"]
];
produceItems = $("#produceItems")
produceAlt.forEach(item => {
   var li = $(`<li>${item[0]}</li>`)
   li.attr(`data-id`,item[1])
   var button = (`<button class = "btn btn-secondary">Add Item</button>`);
   li.append(button);
   produceItems.append(li);
});             


var meat = [["beef brisket" , "13023"],
            [""]
];
var meatAlt = [ ["beef chuck roast" , "13786"],
               ["beef tenderloin" , "13926"],
               ["boneless skinless chicken breast" , "1055062"],
               ["chicken sausage" , "93668"],
               ["lean pork tenderloin" , "10060"],
               ["pork chops" , "10010062"]
];
meatItems = $("#meatItems")
meatAlt.forEach(item => {
   var li = $(`<li>${item[0]}</li>`)
   li.attr(`data-id`,item[1])
   var button = (`<button class = "btn btn-secondary">Add Item</button>`);
   li.append(button);
   meatItems.append(li);
});  

var seafood = [["cat fish filets" , "15010"],
            [""]
];
var seafoodAlt = [ ["raw shrimp" , "15152"],
               ["crabmeat" , "10015136"],
               ["clams", "15157"],
               ["mussels" , "15164"],
               ["salmon fillet" , "15076"],
               ["sea scallops" , "10015172"]
];
seafoodItems = $("#seafoodItems")
seafoodAlt.forEach(item => {
   var li = $(`<li>${item[0]}</li>`)
   li.attr(`data-id`,item[1])
   var button = (`<button class = "btn btn-secondary">Add Item</button>`);
   li.append(button);
   seafoodItems.append(li);
});  

var pantry = [["cat fish filets" , "15010"],
            [""]
];
var pantryAlt = [ ["fettuccine" , "100204092"],
               ["spaghetti" , "11420420"],
               ["rotini pasta" , "11320420"],
               ["short grain rice" , "10120052"],
               ["extra virgin olive oil:" , "1034053"],
               ["flour" , "20081"]
];
pantryItems = $("#pantryItems")
pantryAlt.forEach(item => {
   var li = $(`<li>${item[0]}</li>`)
   li.attr(`data-id`,item[1])
   var button = (`<button class = "btn btn-secondary">Add Item</button>`);
   li.append(button);
   pantryItems.append(li);
});  