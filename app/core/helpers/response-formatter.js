module.exports = {

    /**
     * [parseSuccessResponse description]
     * @param  {[type]} data [description]
     * @return {[type]}      [description]
     */
    parseSuccessResponse: function (data) {
        return {
            status: 1,
            data: data || {}
        };
    },

    /**
     * [parseErrorResponse description]
     * @param  {[type]} error [description]
     * @return {[type]}       [description]
     */
    parseErrorResponse: function (error) {
        return {
            status: 0,
            error: error || ''
        };
    }
};
