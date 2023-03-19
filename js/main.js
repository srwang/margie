//keep image height uniform to avoid blinking links
window.onload = function(){
    adjWidth();
};

$(window).resize(function(){ 
    adjWidth();
})

function adjWidth() {
    var imgWidth = $('.swapped-img-position').width();
    $('.swapped-img-position').height(imgWidth * 0.72);
}


$(document).ready(function(){
    adjWidth();
    $('.homelinks').mouseover(function(){
        adjWidth();
    });
    //gallery objects
    var lithoGal = [{src:'Aransas_I&2', caption: ['Aransas I & II','Hand colored Linocut','12&quot; x 9&quot;']},
                    {src: 'Cliff SwallowsI',caption: ['Cliff Swallows I','Lithograph 11','1/2&quot; x 16&quot;']},
                    {src:'barnswallows1', caption: ['Barn Swallow I', 'Hand colored linocut', '9&quot x 6&quot']},
                    {src:'barnswallows2', caption: ['Barn Swallow II', 'Hand colored linocut', '9&quot x 6&quot']},
                    {src:'batscongressavebridge', caption:['Bats & Congress Avenue Bridge', 'Hand colored Lithograph', '11 1/4&quot x 11 9/16&quot']},
                    {src:'beltedkingfisher', caption:['Belted Kingfisher', 'Hand colored linocut', '9&quot; x 9&quot;']},
                    {src:'carpcabomba', caption:['Carp & Cabomba', 'Silkscreen', '18&quot x 14&quot']},
                    {src: 'Cliff SwallowsII', caption:['Cliff Swallows II', 'Hand colored Lithograph', '11 1/2&quot x 16&quot']},
                    {src:'cottontops', caption:['Cotton-Tops', 'Hand colored Linocut', '8 3/16&quot x 8 3/16&quot']},
                    {src:'Dawn', caption:['Dawn', 'Hand colored Linocut collage on gilded paper', '30&quot x 32&quot']},
                    {src:'01 EarlySpring-copy', caption:['Early Spring in the Basin', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'02 Reserved Beauty', caption:['Reserved Beauty', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'03 River Revealed_ copy', caption:['River Revealed', 'Hand-colored Lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'04_Buchanan Dam', caption:['In the Shadow of Buchanan Dam', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'05_SummerRiver-copy', caption:['Summer River', 'Hand-colored Lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'06_New World', caption:['New World', 'Hand colored lithograph', '17&quot; x 22 1/2&quot']},
                    {src:'edge of the world', caption:['Edge of the World', 'Hand colored linocut', '24&quot x 36&quot']},
                    {src:'FlockRWBB copy', caption:['Small Flock', 'Hand colored Linocut collage on gilded paper', '22&quot x 13 1/2&quot']},
                    {src:'Gallo Pinto', caption:['El Gallo Pintado', 'Hand colored lithograph', '18&quot; x 14&quot;']},
                    {src:'greentreefrogday', caption:['Green Treefrog: Daytime', 'Hand colored Linocut', '4&quot; x 4&quot;']},
                    {src:'greentreefrognight', caption:['Green Treefrog: Nighttime', 'Hand colored Linocut', '4&quot; x 4&quot;']},
                    {src:'Helianthus and Heron', caption:['Helianthus & Heron', 'Hand colored linoleum cut', '44 1/4&quot x 30&quot']},
                    {src:'Arbor Vitae', caption: ['Arbor Vitae', 'Hand colored linoleum cut', '44 1/4&quot x 56&quot']},
                    {src:'Optunia and Caracara', caption:['Opuntia & Caracara', 'Hand colored linoleum cut', '44 1/4&quot x 30&quot']},
                    {src:'Montezuma_Quail', caption:['Montezuma Quail', 'Hand colored linoleum cut', '5&quot; x 5&quot;']},
                    {src:'Narcissus', caption:['Narcissus', 'Lithograph', '15 1/2&quot x 11 1/2&quot']},
                    {src:'Nightshade', caption:['Nightshade', 'Lithograph', '15 1/2&quot x 11 1/2&quot']},
                    {src:'Oil & Water copy', caption:['Oil and Water', 'Lithograph', '8&quot; x 11&quot;']},
                    {src:'PegasusRising', caption:['Pegasus Rising (litho)', 'Lithograph', '11 7/8&quot; x 16 7/78&quot;']},
                    {src:'Renegade', caption:['Renegade II', 'Renegade II', '9.25&quot x 14.5&quot']},
                    {src:'riverdocknight', caption:['River Dock at Night', 'Hand colored Lithograph', '3 1/4&quot x 4 1/2&quot']},
                    {src:'soloRWBB', caption:['Solo', 'Hand colored Linocut collage on gilded paper', '10 3/4&quot x 11&quot']},
                    {src:'songsparrow1', caption:['Song Sparrow I', 'Color Lithograph', '5&quot x 6&quot']},
                    {src:'Summer Garden', caption:['Summer Garden', 'Hand colored Linocut', '18&quot x 24&quot']},
                    {src:'Daybreak1', caption:['Daybreak I', 'Linocut', '15&quot x 35&quot']},
                    {src:'DaybreakII', caption:['Daybreak II', 'Hand colored Linocut', '15&quot x 35&quot']},
                    {src:'Spotted Gar copy', caption:['Spotted Gar', 'Hand colored linocut', '7 1/2&quot; x 26 1/2&quot;']},
                    {src:'Rice Bowl copy', caption:['Rice Bowl', 'Hand colored Linocut', '5 13/16&quot x 25 7/8&quot']},
                    {src:'Wingbeats', caption:['Wingbeats', 'Hand colored Linocut collage on gilded paper', '26&quot x 8 1/2&quot']}];


    var paintingGal = [
    {src: 'Handsome_Tom', caption: ['Handsome Tom, South Llano River State Park', 'Acrylic on panel', '32&quot x 30&quot']},
    {src: 'Nighthawks', caption: ['Nighthawks over the Franklins', 'Franklin Mountains State Park', 'Acrylic drybrush on canvas', '28&quot x 36&quot']},
    {src: 'Snakebird_Anhinga', caption: ['Snakebird (Anhinga)', 'Acrylic drybrush on canvas', '30&quot x 24&quot']},
    {src: 'Great_Egret_Etude', caption: ['Great Egret &Eacute;tude', 'Acrylic drybrush on canvas', '15&quot x 30&quot'], sold: true},
    {src: 'Goldenrod_Grove', caption: ['Goldenrod Grove', 'Watercolor, graphite, acrylic on paper', '42&quot x 29.5&quot']},
    {src: 'Respectable_Bird', caption: ['Respectable Bird', 'Watercolor and acrylic on panel', '14&quot x 11&quot']},
    {src: 'RuisdaelHen', caption: ['Ruisdael Hen', 'Pigments, acrylic emulsion and 24k gold on panel', '14&quot x 11&quot']},
    {src: 'RuisdaelRooster', caption: ['Ruisdael Rooster', 'Pigments, acrylic emulsion and 24k gold on panel', '14&quot x 11&quot']},
    {src: 'Wrens_Red_Roses', caption: ['Wrens and Red Roses', 'Acrylic and 24k gold on panel', '30&quot x 18&quot']},
    {src: 'Glad_Mad', caption: ['Gladiolus and Carolina Chickadees', 'Acrylic and 24k gold on panel', '30&quot x 18&quot']},
    {src: 'PricklyPoppyGnatcatcher', caption: ['Rose Prickly Poppy and Blue-gray Gnatcatchers', 'Acrylic and 24k gold on panel', '30&quot x 18&quot']},
    {src: 'Rubys_Red_Yucca', caption: ['Red Yucca and Ruby-throated Hummingbirds', 'Acrylic and 24k gold on panel', '30&quot x 18&quot'], sold: true},
    {src: 'Maguey_Liso', caption: ['Maguey Liso', 'Acrylic dry brush on cotton canvas', '61&quot x 77.75&quot'], sold: true},
    {src: 'RiverUsurper', caption: ['River Usurper: Arundo donax', 'Acrylic dry brush on cotton canvas', '91&quot x 84&quot'], sold: true},
    {src: '01_Aigrette', caption: ['Aigrette', 'Acrylic on panel', '16&quot x 20&quot'], sold: true},
                        {src: '02_BlueGrosbeck_Flame', caption: ['Blue Grosbeck & Flame Sumac', 'Egg Tempera with 24k gold leaf on panel', '11&quot x 14&quot'], sold: true},
                        {src: '03_InVinoVeritas', caption:['In Vino Veritas', 'Acrylic and 24k gold leaf on paper mounted to panel', '30&quot x 22&quot'], sold: true},
                        {src: '04_IndigoBuntingBeautyBerry', caption:['Indigo Bunting and Beauty Berry', 'Egg Tempera with 24k gold leaf on panel', '14&quot x 11&quot']},
                        {src: '06_BrownLeghornHen', caption:['Brown Leghorn Hen', 'Egg Tempera with 24k gold leaf on panel', '11&quot x 14&quot'], sold: true},
                        {src: '07_BrownLeghornRooster300 copy', caption: ['Brown Leghorn Rooster', 'Egg Tempera with 24k gold leaf on panel', '11&quot x 14&quot'], sold: true},
                        {src: '08_CrypticYellow_med copy', caption: ['Cryptic Yellow', 'Watercolor and graphite', '15&quot x 20&quot'], sold: true},
                        {src: '09_Milk&WineCrinum_med_edited-1 copy', caption: ['Milk and Wine Crinum', 'Watercolor and graphite', '15&quot x 20&quot'], sold: true},
                        {src: '10_PaisanoPortrait_med copy', caption: ['Paisano Portrait', 'Watercolor and Graphite', '22&quot x 22&quot'], sold: true},
                        {src: '11_Black_capVireo-med copy', caption: ['Endangered Species Icon: Black-capped Vireo', 'Egg Tempera with 24k gold leaf on panel', '14&quot x 11&quot'], sold: true},
                        {src: '12_hercules-med copy', caption: ['Hercules', 'Egg Tempera with 24k gold leaf and 24k shell gold on panel', '16&quot x 20&quot'], sold: true},
                        {src: '13_Cardinal-archtop-med copy', caption: ['Righteous', 'Egg Tempera with 24k gold leaf on panel', '5&quot x 6&quot'], sold:true},
                        {src: '14_Rain Crows_med copy', caption: ['Rain Crows', 'Egg tempera on panel', '16&quot x 12&quot'], sold:true},
                        {src: '15_GildedAgaveNo2 copy', caption: ['Gilded Agave No. 2', 'Egg Tempera with 24k gold leaf on panel', '14&quot x 11&quot'], sold:true},
                        {src: '16_BabyBass-med copy', caption: ['Baby Bass', 'Egg Tempera on panel', '10&quot x 8&quot'], sold:true},
                        {src: '17_CommonYellowthroat-med copy', caption: ['Common Yellowthroat', 'Mixed media on panel', '18&quot x 8&quot'], sold:true},
                        {src: '18_PunkKingfisher copy', caption: ['Punk Kingfisher (Belted)', 'Mixed media on panel', '10&quot x 8&quot'], sold:true},
                        {src: '19_DarkGreenCardinal_med copy', caption: ['Cardinal with Dark Green', 'Watercolor', '4&quot x 4&quot'], sold:true},
                        {src: '20_TurquioseCardinal_med copy', caption: ['Cardinal with Turquoise', 'Watercolor', '4&quot x 4&quot'], sold:true},
                        {src: '21_pyro&firecatchers-med copy', caption: ['Pyro-loxia and Scissor-tailed Firecatchers', 'Egg tempera on panel', '8&quot x 10&quot'], sold:true},
                        {src: '22_pyrrhuBurning-med', caption: ['Burning Pyrrhuloxia', 'Egg tempera and 24k shell gold on panel', '5&quot x 6&quot'], sold:true},
                        {src: '23_RainingFrogs&Fishes copy', caption: ['Raining Frogs and Fishes', 'Graphite on paper', '30&quot x 42&quot'], sold:true},
                        {src: '24_GreatEgret-med copy', caption: ['Great Egret', 'Charcoal on paper', '30&quot x 22&quot']},
                        {src: '25_Buffalo Creek-med', caption: ['Morning on Buffalo Creek', 'Charcoal on paper', '22&quot x 30&quot']},
                        {src: '26_Emu-med copy', caption: ['Emu', 'Charcoal on paper', '51&quot x 54&quot']},
                        {src: '27_Shepard\'s Camp-med copy', caption: ['Shepard&#39;s Camp', 'Charcoal on paper', '22&quot x 30&quot']}];

    //create lightbox thumbnails and images
    loadGallery('painting-gal', paintingGal);
    loadGallery('litho-gal', lithoGal);

    function loadGallery(pageId, links) {
        if ($('#' + pageId).length > 0) {
            var gallery = $('#' +pageId).find('.img-gallery');
            links.forEach(function(link){
                //get linebreaks in caption
                var caption = '';
                link.caption.forEach(function(line){
                    caption += line + '</br>';
                })
                //create lightbox thumbnail
                var figure = $('<a  class="img-caption-bundle small-12 medium-3 large-2 columns" href="' + link.src + '.jpg" data-lightbox="' + pageId + '" data-title="' + caption + '"></a>');

                figure.append('<img src="' + link.src + '.jpg">');

                if (link.sold) {
                    figure.append('<div class="red-dot"></div><p class="img-caption">' + link.caption[0] + '</p>');
                } else {
                    figure.append('<p class="img-caption">' + link.caption[0] + '</p>');
                }
                //append thumbnail to page layout
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