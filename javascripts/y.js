/*
 * Copyright (c) 2015 Vanhecke Joris <joris@jorisvanhecke.be>
 *
 * Permission to use, copy, modify, and distribute this software for any
 * purpose with or without fee is hereby granted, provided that the above
 * copyright notice and this permission notice appear in all copies.
 *
 * THE SOFTWARE IS PROVIDED "AS IS" AND THE AUTHOR DISCLAIMS ALL WARRANTIES
 * WITH REGARD TO THIS SOFTWARE INCLUDING ALL IMPLIED WARRANTIES OF
 * MERCHANTABILITY AND FITNESS. IN NO EVENT SHALL THE AUTHOR BE LIABLE FOR
 * ANY SPECIAL, DIRECT, INDIRECT, OR CONSEQUENTIAL DAMAGES OR ANY DAMAGES
 * WHATSOEVER RESULTING FROM LOSS OF USE, DATA OR PROFITS, WHETHER IN AN
 * ACTION OF CONTRACT, NEGLIGENCE OR OTHER TORTIOUS ACTION, ARISING OUT OF
 * OR IN CONNECTION WITH THE USE OR PERFORMANCE OF THIS SOFTWARE.
 */


$( document ).ready(function() {
  var iOS = ( navigator.userAgent.match(/iPad|iPhone|iPod/g) ? true : false );
  console.log('[*]');
  var windowH = $(window).height(),
  windowW = $(window).width(),
  introEl = $('div.intropic'),
  introHeadingH = introEl.height();

  if(iOS){
    $('head').append( $('<link rel="stylesheet" type="text/css" />').attr('href', 'css/ios.css') );
    $('.segment').each(function(index){
      var image_url = $(this).css('background-image'), image;
      console.log(index);
      // Remove url() or in case of Chrome url("")
      image_url = image_url.match(/^url\("?(.+?)"?\)$/);

      if (image_url[1]) {
        image_url = image_url[1];
        image = new Image();

        // just in case it is not already loaded
        $(image).load(function () {
            //alert(image.height/(image.width/windowsW));

            console.log(image.height/(image.width/windowW));

            $($('.intropic')[index]).css('padding', (image.height/(image.width/windowW))/2 + 'px 0');
        });

        image.src = image_url;
      }
    });
  } else {
      introEl.css('padding', (windowH - introHeadingH)/2 + 'px 0');
  }
});
