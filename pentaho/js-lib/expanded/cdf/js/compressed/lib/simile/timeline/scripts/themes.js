Timeline.ClassicTheme=new Object,Timeline.ClassicTheme.implementations=[],Timeline.ClassicTheme.create=function(e){
null==e&&(e=Timeline.getDefaultLocale());var i=Timeline.ClassicTheme.implementations[e];
return null==i&&(i=Timeline.ClassicTheme._Impl),new i},Timeline.ClassicTheme._Impl=function(){
this.firstDayOfWeek=0,this.ether={backgroundColors:[],highlightOpacity:50,interval:{
line:{show:!0,opacity:25},weekend:{opacity:30},marker:{hAlign:"Bottom",vAlign:"Right"
}}},this.event={track:{height:10,gap:2},overviewTrack:{offset:20,tickHeight:6,height:2,
gap:1},tape:{height:4},instant:{icon:Timeline.urlPrefix+"images/dull-blue-circle.png",
iconWidth:10,iconHeight:10,impreciseOpacity:20},duration:{impreciseOpacity:20},label:{
backgroundOpacity:50,offsetFromLine:3},highlightColors:[],bubble:{width:250,height:125,
titleStyler:function(e){e.className="timeline-event-bubble-title"},bodyStyler:function(e){
e.className="timeline-event-bubble-body"},imageStyler:function(e){e.className="timeline-event-bubble-image";
},wikiStyler:function(e){e.className="timeline-event-bubble-wiki"},timeStyler:function(e){
e.className="timeline-event-bubble-time"}}},this.zoom=!0};