var Negotiator = require('negotiator');

module.exports = function(req) {
    var negotiator = new Negotiator(req);
    var languages = negotiator.languages();
    return {
        negotiator: negotiator,
        languages: languages,
        number: function(opts) {
            return new Intl.NumberFormat(languages,opts);
        },
        date: function(opts) {
            return new Intl.DateTimeFormat(languages,opts);
        },
        coll: function(opts) {
            return new Intl.Collator(languages,opts);
        }
    };
};
