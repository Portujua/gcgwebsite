function cambiarZIndex()
{
	var z = $(".bg_naranja").css("z-index");

	if (z == "auto" || z == "0")
		$(".bg_naranja").css("z-index", "-1");
	else
		$(".bg_naranja").css("z-index", "0");
}

function fixTwitter()
{
	if ($(".twitter-timeline").contents().find(".TweetAuthor-name").length > 0)
	{
		$(".twitter-timeline").contents().find(".TweetAuthor-name").css("color","white");
		$(".twitter-timeline").contents().find(".timeline-Tweet-text").css("color","white");
	}
	else
		setTimeout("fixTwitter()", 100);
}

fixTwitter();