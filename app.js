var app = {};

app.key = "MDo4NDI0NmEzZS03MWVjLTExZTUtOTJhYi1jYmIzMTMwZmQ4YTg6QWNma3FTc2dkalpzZUJHQkNCeG5VcVZ6MUpEQWtjWmZBd3Yy";


app.getWine = function(choice) {
	$.ajax({
		url: "http://lcboapi.com/products",
		dataType: "json",
		method: "GET",
		data: {
			per_page: 100,
			access_key: app.key,
			q: choice
		}
	}).then(function(res){
		app.displayWine(res.result);
	});
};

app.displayWine = function(list) {
	$.each(list, function(index, value) {

		//SWEET

		if(app.flavour === "Sweet") {
			if (value.primary_category === "Wine" 
				&& value.secondary_category === "Dessert Wine" 
				&& value.origin === "Canada, Ontario" 
				&& value.image_url != null 
				&& value.tasting_note != null) {
					var title = $("<h2>").text(value.name);
					var image = $("<img>").attr("src", value.image_url);
					var cents = $("<p>").append("$").append(value.regular_price_in_cents).append(" | ").append("LCBO # ").append(value.id);
					var origin = $("<p>").addClass("origin").append(value.origin);
					var notes = $("<p>").text(value.tasting_note);
					// var price = Intl.NumberFormat().format(cents);
					var container = $("<div>").addClass("wine").addClass("clearfix").append(image, title, cents, origin, notes);
					$("#wines").append(container);
			}
		}

		//SAVOURY	

		if(app.flavour === "Savoury") {
			if (value.tags.indexOf("unoaked") > 0
				&& value.image_url != null 
				&& value.tasting_note != null
				&& value.tags.indexOf("box") === -1 ) {
					var title = $("<h2>").text(value.name);
					var image = $("<img>").attr("src", value.image_url);
					var cents = $("<p>").append("$").append(value.regular_price_in_cents).append(" | ").append("LCBO # ").append(value.id);
					var origin = $("<p>").addClass("origin").append(value.origin);
					var notes = $("<p>").text(value.tasting_note);
					// var price = Intl.NumberFormat().format(cents);
					var container = $("<div>").addClass("wine").addClass("clearfix").append(image, title, cents, origin, notes);
					$("#wines").append(container);
			}
		}	

		//SOUR

		if(app.flavour === "Sour") {
			if (value.origin === "New Zealand, Marlborough" 
				&& value.image_url != null
				&& value.tasting_note != null
				&& value.tags.indexOf("box") === -1 ) {
					var title = $("<h2>").text(value.name);
					var image = $("<img>").attr("src", value.image_url);
					var cents = $("<p>").append("$").append(value.regular_price_in_cents).append(" | ").append("LCBO # ").append(value.id);
					var origin = $("<p>").addClass("origin").append(value.origin);
					var notes = $("<p>").text(value.tasting_note);
					// var price = Intl.NumberFormat().format(cents);
					var container = $("<div>").addClass("wine").addClass("clearfix").append(image, title, cents, origin, notes);
					$("#wines").append(container);
			}
		}

		//BITTER

		if(app.flavour === "Bitter") {
			if (value.varietal === "Chardonnay" 
				&& value.tags.indexOf("unoaked") >= 0 
				&& value.tags.indexOf("box") === -1
				&& value.image_url != null
				&& value.tasting_note != null
				&& value.primary_category != "Beer" 
				&& value.primary_category != "Ready-to-Drink/Coolers" 
				&& value.tags.indexOf("beer") === -1  
				|| value.varietal === "Pinot Gris" 
				|| value.varietal === "Pinot Grigio" 
				&& value.tags.indexOf("box") === -1 
				&& value.tags.indexOf("california") === -1) {
					var title = $("<h2>").text(value.name);
					var image = $("<img>").attr("src", value.image_url);
					var cents = $("<p>").append("$").append(value.regular_price_in_cents).append(" | ").append("LCBO # ").append(value.id);
					var origin = $("<p>").addClass("origin").append(value.origin);
					var notes = $("<p>").text(value.tasting_note);
					// var price = Intl.NumberFormat().format(cents);
					var container = $("<div>").addClass("wine").addClass("clearfix").append(image, title, cents, origin, notes);
					$("#wines").append(container);
			}	
		}

		//SPICY

		if(app.flavour === "Spicy") {
			if  (value.primary_category === "Wine" 
				&& value.name.indexOf("Red") <= 0
				&& value.image_url != null
				&& value.tasting_note != null
				&& value.tags.indexOf("box") <= 0) {
					var title = $("<h2>").text(value.name);
					var image = $("<img>").attr("src", value.image_url);
					var cents = $("<p>").append("$").append(value.regular_price_in_cents).append(" | ").append("LCBO # ").append(value.id);
					var origin = $("<p>").addClass("origin").append(value.origin);
					var notes = $("<p>").text(value.tasting_note);
					// var price = Intl.NumberFormat().format(cents);
					var container = $("<div>").addClass("wine").addClass("clearfix").append(image, title, cents, origin, notes);
					$("#wines").append(container);
			}	
		}

		//SALTY

		if(app.flavour === "Salty") {
			if (value.tags.indexOf("wine") >= 0 
				&& value.tags.indexOf("box") === -1
				&& value.tags.indexOf("sparkling") >= 0
				&& value.image_url != null
				&& value.tasting_note != null) {
					var title = $("<h2>").text(value.name);
					var image = $("<img>").attr("src", value.image_url);
					var cents = $("<p>").append("$").append(value.regular_price_in_cents).append(" | ").append("LCBO # ").append(value.id);
					var origin = $("<p>").addClass("origin").append(value.origin);
					var notes = $("<p>").text(value.tasting_note);
					// var price = Intl.NumberFormat().format(cents);
					var container = $("<div>").addClass("wine").addClass("clearfix").append(image, title, cents, origin, notes);
					$("#wines").append(container);
			}	
		}

		//MEATY

		if(app.flavour === "Meat") {
			if (value.tags.indexOf("wine") >= 0 
				&& value.tags.indexOf("red") >= 0 
				&& value.tags.indexOf("box") === -1
				&& value.image_url != null
				&& value.tasting_note != null
				&& value.name.indexOf("Carlo") === -1
				|| value.tags.indexOf("Cabernet") >= 0
				|| value.tags.indexOf("Merlot") >= 0
				|| value.tags.indexOf("Tempranillo") >= 0
				|| value.tags.indexOf("Syrah") >= 0
				|| value.tags.indexOf("Zinfandel") >= 0				
				|| value.tags.indexOf("Shiraz") >= 0) {
					var title = $("<h2>").text(value.name);
					var image = $("<img>").attr("src", value.image_url);
					var cents = $("<p>").append("$").append(value.regular_price_in_cents).append(" | ").append("LCBO # ").append(value.id);
					var origin = $("<p>").addClass("origin").append(value.origin);
					var notes = $("<p>").text(value.tasting_note);
					// var price = Intl.NumberFormat().format(cents);
					var container = $("<div>").addClass("wine").addClass("clearfix").append(image, title, cents, origin, notes);
					$("#wines").append(container);
			}	
		}
	});
};

app.init = function() {
	$("#food").on("change", function(){
		var choice = $(this).val();
		$("#wines").empty();
		app.flavour = choice;

		if (choice === "Sweet") {
			app.getWine("Dessert Wine");
			$(".pair .paired").html("When choosing a wine to pair with sweet recipes such as desserts, a wine with more sugar than the dish is recommended. Try a dessert wine, such as one of the Ontario Icewine's below:");
		}

		if (choice === "Savoury") {
			app.getWine("Chardonnay");
			$(".pair .paired").html("Fruity wines with low tannin complement savoury dishes quite well. Try to stay away from wines that are bitter, or wines with high acidity or high alcohol, as these characteristics can be emphasised by the savoury dish. Try one of the unoaked chardonnay's below:");
		}

		if (choice === "Sour") {
			app.getWine("Sauvignon Blanc");
			$(".pair .paired").html("Sour foods with high acidity can enhance wines with high acid. Sour dishes should be matched with a wine with equal or higher acidity, otherwise they may fall flat. Sauvignon Blanc's typically have high acidity and would be a great match. The Marlborough region of New Zealand is known for their great Sauvignon Blanc's, try one of them below:");
		}
		
		if (choice === "Bitter") {
			app.getWine("White Wine");
			$(".pair .paired").html("Bitterness in food can increase bitterness in wine. Pinot Grigio or Pinot Gris wines are typically simple and neutral and are a safe bet when pairing with a bitter dish.");
		}

		if (choice === "Spicy") {
			app.getWine("Riesling");
			$(".pair .paired").html("Chilli heat in food can increase the taste of alcohol, acidity, and bitterness in wine. A spicy dish is best paired with a sweet, rich, fruity wine, like Rielsing.");
		}

		if (choice === "Salty") {
			app.getWine("Sparkling Wine");
			$(".pair .paired").html("Salty dishes complement wines very well. Because this combination is low risk, experimentation is encouraged. A classic pairing for salty foods is sparkling wine, which can have a palate cleansing effect.");
		}

		if (choice === "Meat") {
			app.getWine("Red Wine");
			$(".pair .paired").html("Red meats go great with bold, tannic, red wines. Some classic bold reds are: Cabernet Sauvignon, Merlot, Trempranillo, Zinfandel, and Shiraz or Syrah.");
		}
		app.getWine();
	});
};

$(function(){
	app.init();
})