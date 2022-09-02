var e9Manager;
var e9;
var A9PIXEL;
var expoDisplayAd = (function() {
   var init = {
      fetchAd: function() {
	 var tKey = "aUmneM2qFe2tit3PbKmr3ZdTrr7QZaGp2e"; 

	 if (A9PIXEL)
	  {
	    A9PIXEL.setTKey(tKey);

	    A9PIXEL.fireA9Pixel();
	  }

	 if (    (e9Manager)
	      && (e9Manager.init === true))
	  {
	    e9Manager.setTKey(tKey);

	    if (e9 !== undefined)
	     {
	       if (e9.displayAdFlag !== undefined)
		{
		  if (e9.displayAdFlag === true)
		     e9.displayAd();
		}
	       else
		{
		  e9Manager.displayAdFromE9(e9);
		}
	     }
	    else
	     {
	       e9Manager.fetchAds();
	     }
	  }
       }
    }

   return init;
})();

expoDisplayAd.fetchAd();
