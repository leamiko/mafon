/**
 * Модель поиска
 */
define([

], function (

) {
    var Model = Backbone.Model.extend({
        defaults: {
            songs: [] // Список песен в плейлисте
        }
    });



    return new Model();
});