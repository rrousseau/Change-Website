function servicesBelt(){$(".readmore").click(function(){$(".services-belt").css("left","-100%"),$(".services-container").show()}),$(".services-return").click(function(){$(".services-belt").css("left","0%"),$(".services-container").hide(900)})}function serv1Load(){$.ajaxSetup({cache:!1}),$(".serv1").click(function(){var e="/serv/serv-1/serv-1.html";serv1Title="/serv/serv-1/serv-1title.html",serv1Logo="/serv/serv-1/serv-1logo.html",$(".serv-load").load(e),$(".serv-title").load(serv1Title),$(".serv-logo").load(serv1Logo)})}function serv2Load(){$.ajaxSetup({cache:!1}),$(".serv2").click(function(){var e="/serv/serv-2/serv-2.html";serv2Title="/serv/serv-2/serv-2title.html",serv2Logo="/serv/serv-2/serv-2logo.html",$(".serv-load").load(e),$(".serv-title").load(serv2Title),$(".serv-logo").load(serv2Logo)})}function serv3Load(){$.ajaxSetup({cache:!1}),$(".serv3").click(function(){var e="/serv/serv-3/serv-3.html";serv3Title="/serv/serv-3/serv-3title.html",serv3Logo="/serv/serv-3/serv-3logo.html",$(".serv-load").load(e),$(".serv-title").load(serv3Title),$(".serv-logo").load(serv3Logo)})}function serv4Load(){$.ajaxSetup({cache:!1}),$(".serv4").click(function(){var e="/serv/serv-4/serv-4.html";serv4Title="/serv/serv-4/serv-4title.html",serv4Logo="/serv/serv-4/serv-4logo.html",$(".serv-load").load(e),$(".serv-title").load(serv4Title),$(".serv-logo").load(serv4Logo)})}function serv5Load(){$.ajaxSetup({cache:!1}),$(".serv5").click(function(){var e="/serv/serv-5/serv-5.html";serv5Title="/serv/serv-5/serv-5title.html",serv5Logo="/serv/serv-5/serv-5logo.html",$(".serv-load").load(e),$(".serv-title").load(serv5Title),$(".serv-logo").load(serv5Logo)})}function serv6Load(){$.ajaxSetup({cache:!1}),$(".serv6").click(function(){var e="/serv/serv-6/serv-6.html";serv6Title="/serv/serv-6/serv-6title.html",serv6Logo="/serv/serv-6/serv-6logo.html",$(".serv-load").load(e),$(".serv-title").load(serv6Title),$(".serv-logo").load(serv6Logo)})}$(window).scroll(function(){var e=$(this).scrollTop();e>$(".servicesblocks").offset().top-$(window).height()/1.2&&$(".servicesblocks figure").each(function(e){setTimeout(function(){$(".servicesblocks figure").eq(e).addClass("is-showing")},180*(e+1))})}),$(function(){servicesBelt(),serv1Load(),serv2Load(),serv3Load(),serv4Load(),serv5Load(),serv6Load()});