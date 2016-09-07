//load gallery

$(document).ready(function(){
    var lithoGal = [{src:'Aransas_I&2', caption: ['Aransas I & II','Hand colored Linocut','12&quot; x 9&quot;']},
                    {src: 'Cliff SwallowsI',caption: ['Cliff Swallows I','Lithograph 11','1/2&quot; x 16&quot;']},
                    {src:'Arbor Vitae', caption: ['Arbor Vitae', 'Hand colored linoleum cut', '44 1/4&quot x 56&quot']},
                    {src:'barnswallows1', caption: ['Barn Swallow I', 'Hand colored linocut', '9&quot x 6&quot']},
                    {src:'barnswallows2', caption: ['Barn Swallow II', 'Hand colored linocut', '9&quot x 6&quot']},
                    {src:'batscongressavebridge', caption:['Bats & Congress Avenue Bridge', 'Hand colored Lithograph', '11 1/4&quot x 11 9/16&quot']},
                    {src:'beltedkingfisher', caption:['Belted Kingfisher', 'Hand colored linocut', '9&quot; x 9&quot;']},
                    {src:'carpcabomba', caption:['Carp & Cabomba', 'Silkscreen', '18&quot x 14&quot']},
                    {src: 'Cliff SwallowsII', caption:['Cliff Swallows II', 'Hand colored Lithograph', '11 1/2” x 16&quot']},
                    {src:'cottontops', caption:['Cotton-Tops', 'Hand colored Linocut', '8 3/16&quot x 8 3/16&quot']},
                    {src:'Dawn', caption:['Dawn', 'Hand colored Linocut collage on gilded paper', '30&quot x 32&quot']},
                    {src:'Daybreak1', caption:['Daybreak I', 'Linocut', '15&quot x 35&quot']},
                    {src:'DaybreakII', caption:['Daybreak II', 'Hand colored Linocut', '15&quot x 35&quot']},
                    {src:'earlyspringbasin', caption:['Early Spring in the Basin', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'edge of the world', caption:['Edge of the World', 'Hand colored linocut', '24&quot x 36&quot']},
                    {src:'FlockRWBB copy', caption:['Small Flock', 'Hand colored Linocut collage on gilded paper', '22&quot x 13 1/2&quot']},
                    {src:'Gallo Pinto', caption:['El Gallo Pintado', 'Hand colored lithograph', '18&quot; x 14&quot;']},
                    {src:'greentreefrogday', caption:['Green Treefrog: Daytime', 'Hand colored Linocut', '4&quot; x 4&quot;']},
                    {src:'greentreefrognight', caption:['Green Treefrog: Nighttime', 'Hand colored Linocut', '4&quot; x 4&quot;']},
                    {src:'Helianthus and Heron', caption:['Helianthus & Heron', 'Hand colored linoleum cut', '44 1/4&quot x 30&quot']},
                    {src:'Montezuma_Quail', caption:['Montezuma Quail', 'Hand colored linoleum cut', '5&quot; x 5&quot;']},
                    {src:'Narcissus', caption:['Narcissus', 'Lithograph', '15 1/2&quot x 11 1/2&quot']},
                    {src:'newworld', caption:['New World', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'Nightshade', caption:['Nightshade', 'Lithograph', '15 1/2&quot x 11 1/2&quot']},
                    {src:'oilwater', caption:['Oil and Water', 'Lithograph', '8&quot; x 11&quot;']},
                    {src:'Optunia and Caracara', caption:['Opuntia & Caracara', 'Hand colored linoleum cut', '44 1/4&quot x 30&quot']},
                    {src:'PegasusRising', caption:['Pegasus Rising (litho)', 'Lithograph', '11 7/8&quot; x 16 7/78&quot;']},
                    {src:'renegade', caption:['Renegade II', 'Renegade II', '9.25&quot x 14.5&quot']},
                    {src:'reservedBeauty', caption:['Reserved Beauty', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'riverdocknight', caption:['River Dock at Night', 'Hand colored Lithograph', '3 1/4&quot x 4 1/2&quot']},
                    {src:'riverrevealed', caption:['River Revealed', 'Hand-colored Lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'shadowofbuchanandam', caption:['In the Shadow of Buchanan Dam', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'soloRWBB', caption:['Solo', 'Hand colored Linocut collage on gilded paper', '10 3/4&quot x 11&quot']},
                    {src:'songsparrow1', caption:['Song Sparrow I', 'Color Lithograph', '5&quot x 6&quot']},
                    {src:'spottedgar', caption:['Spotted Gar', 'Hand colored linocut', '7 1/2&quot; x 26 1/2&quot;']},
                    {src:'Summer Garden', caption:['Summer Garden', 'Hand colored Linocut', '18&quot x 24&quot']},
                    {src:'summerriver', caption:['Summer River', 'Hand-colored Lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'ricebowl', caption:['Rice Bowl', 'Hand colored Linocut', '5 13/16&quot x 25 7/8&quot']},
                    {src:'Wingbeats', caption:['Wingbeats', 'Hand colored Linocut collage on gilded paper', '26&quot x 8 1/2&quot']},
                    {src:'', caption:[]}];

    loadGallery('litho-gal', lithoGal);

    function loadGallery(pageId, links) {
        if ($('#' + pageId).length > 0) {
            var gallery = $('#' +pageId).find('.img-gallery');
            links.forEach(function(link){
                var figure = $('<a  class="img-caption-bundle" href="' + link.src + '.jpg" data-lightbox="litho-gal" data-title="' + link.caption[0] + '"><figure></figure></a>');
                figure.append('<img src="' + link.src + '.jpg">');

                link.caption.forEach(function(line){
                    figure.append('<p class="img-caption">' + line + '<p>');
                })
                gallery.append(figure);
            }); 
        }
    }


});
//image load and swap functions from orig code
function preloadImages() {
    if (document.images) {
       var imgFiles = preloadImages.arguments;
       var preloadArray = new Array();
       for (var i=0; i < imgFiles.length; i++) {
            preloadArray[i] = new Image;
            preloadArray[i].src = imgFiles[i];
       }
    }
}

function swap(id, newsrc) {
    var theImage = locateImage(id);
    if (theImage) {
        theImage.src = newsrc;
    }
}


function locateImage(name) {
    var theImage = false;
    if (document.images) {
        theImage = document.images[name];
    }
    if (theImage) {
        return theImage;
    }
    return (false);
}

function popup(URL) {
  window.open(URL,"","toolbar=0,scrollbars=1,location=0,statusbar=0,menubar=0,resizable=1,width=650,height=770,left=200,top=100");
}
function MM_preloadImages() { //v3.0
  var d=document; if(d.images){ if(!d.MM_p) d.MM_p=new Array();
    var i,j=d.MM_p.length,a=MM_preloadImages.arguments; for(i=0; i<a.length; i++)
    if (a[i].indexOf("#")!=0){ d.MM_p[j]=new Image; d.MM_p[j++].src=a[i];}}
}

function MM_swapImgRestore() { //v3.0
  var i,x,a=document.MM_sr; for(i=0;a&&i<a.length&&(x=a[i])&&x.oSrc;i++) x.src=x.oSrc;
}

function MM_findObj(n, d) { //v4.01
  var p,i,x;  if(!d) d=document; if((p=n.indexOf("?"))>0&&parent.frames.length) {
    d=parent.frames[n.substring(p+1)].document; n=n.substring(0,p);}
  if(!(x=d[n])&&d.all) x=d.all[n]; for (i=0;!x&&i<d.forms.length;i++) x=d.forms[i][n];
  for(i=0;!x&&d.layers&&i<d.layers.length;i++) x=MM_findObj(n,d.layers[i].document);
  if(!x && d.getElementById) x=d.getElementById(n); return x;
}

function MM_swapImage() { //v3.0
  var i,j=0,x,a=MM_swapImage.arguments; document.MM_sr=new Array; for(i=0;i<(a.length-2);i+=3)
   if ((x=MM_findObj(a[i]))!=null){document.MM_sr[j++]=x; if(!x.oSrc) x.oSrc=x.src; x.src=a[i+2];}
}