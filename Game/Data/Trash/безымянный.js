(function(name,data){
 if(typeof onTileMapLoaded === 'undefined') {
  if(typeof TileMaps === 'undefined') TileMaps = {};
  TileMaps[name] = data;
 } else {
  onTileMapLoaded(name,data);
 }
 if(typeof module === 'object' && module && module.exports) {
  module.exports = data;
 }})("\u0431\u0435\u0437\u044b\u043c\u044f\u043d\u043d\u044b\u0439",
{ "compressionlevel":-1,
 "height":10,
 "infinite":true,
 "layers":[
        {
         "chunks":[
                {
                 "data":[11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    11, 22, 17, 17, 17, 17, 17, 17, 23, 11, 11, 11, 11, 11, 11, 11,
                    11, 12, 19, 14, 14, 14, 14, 20, 10, 11, 11, 11, 11, 11, 11, 11,
                    11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                    11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                    11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                    11, 12, 9, 21, 21, 21, 21, 7, 10, 11, 11, 11, 11, 11, 11, 11,
                    11, 12, 25, 2, 2, 2, 2, 26, 10, 11, 11, 11, 11, 11, 11, 11,
                    11, 28, 5, 5, 5, 5, 5, 5, 29, 11, 11, 11, 11, 11, 11, 11,
                    11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11,
                    11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11, 11],
                 "height":16,
                 "width":16,
                 "x":0,
                 "y":0
                }],
         "height":16,
         "id":1,
         "name":"\u0421\u043b\u043e\u0439 \u0442\u0430\u0439\u043b\u043e\u0432 1",
         "opacity":1,
         "startx":0,
         "starty":0,
         "type":"tilelayer",
         "visible":true,
         "width":16,
         "x":0,
         "y":0
        }],
 "nextlayerid":2,
 "nextobjectid":1,
 "orientation":"orthogonal",
 "renderorder":"right-down",
 "tiledversion":"1.11.1",
 "tileheight":16,
 "tilesets":[
        {
         "columns":6,
         "firstgid":1,
         "image":"Tile\/TileSet\/simplified\/Level_0\/Tiles.png",
         "imageheight":80,
         "imagewidth":96,
         "margin":0,
         "name":"Tiles",
         "spacing":0,
         "tilecount":30,
         "tileheight":16,
         "tilewidth":16
        }],
 "tilewidth":16,
 "type":"map",
 "version":"1.10",
 "width":10
});