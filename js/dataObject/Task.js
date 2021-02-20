/**
 * @author Antoine LE BORGNE
 *
 * create a object Task which will
 * displayed on the main task list
 */
class Task{

    /**
     * default constructor of a task
     *
     * @param title the title of the task which wil be displayed on the list (require)
     * @param description the description of the task (limited to 200 char) (require)
     * @param startDate the starting date of the task (format: DD/MM/YYYY - HH:MM:SS) by default the creation day (optional)
     * @param endDate the date of the end of the task, same format as the start date (optional)
     * @param context the context of the task (ex: garden, library, bedroom,...) (optional)
     * @param externalUrl an external url to go at the address (optional)
     * @param imageUrl to display an image into the task (optional)
     * @param theCategory an array of category (optional)
     */
    constructor(title, description, startDate, endDate, context, externalUrl, imageUrl, theCategory) {


        this.checkRequireParameter(title, description)

        this._startDate = (startDate)?startDate: this.getCurrentDate()
        this._title = title;
        this._description = description;
        this._startDate = startDate;
        this._endDate = endDate;
        this._context = context;
        this._externalUrl = externalUrl;
        this._imageUrl = imageUrl;
        this._theCategory = theCategory;

    }

    ////////////////////////////////////////////////////////////////////////////////////
    //////////////////////////////| VALIDITY INSPECTOR |////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////

    /**
     * check the validity of the required parameter
     *
     * @param title the title of the task can't be null or empty
     * @param description the description of the task can't be null or empty
     */
    checkRequireParameter = (title, description) =>{
        if(!title || title === "")throw "Err! location: Task constructor - cause: title is missing"
        if(!description || description === "") throw "Err! location: Task constructor - cause: description is missing"
    }


    /**
     * check the validity of the required title parameter
     *
     * @param title the title of the task can't be null or empty
     */
    checkTitleRequireParameter = (title) =>{
        if(!title || title === "")throw "Err! location: Task constructor - cause: title is missing"
    }

    /**
     * check the validity of the required description parameter
     *
     * @param description the description of the task can't be null or empty
     */
    checkDescriptionRequireParameter = (description) =>{
        if(!description || description === "") throw "Err! location: Task constructor - cause: description is missing"
    }


    ////////////////////////////////////////////////////////////////////////////////////
    ////////////////////////////////////| FUNCTION |////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////


    /**
     * get the current time in format: DD/MM/YYYY - hh:mm:ss
     *
     * @returns {string} the string value of the current date + time
     */
    getCurrentDate = () =>{

        let today = new Date();
        let dd = String(today.getDate()).padStart(2, '0');
        let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
        let yyyy = today.getFullYear();
        let hh = today.getHours();
        let min = String(today.getMinutes()).padStart(2,'0');
        let sec = String(today.getSeconds()).padStart(2,'0');

        return dd + "/" + mm + "/" + yyyy + " - " + hh + ":" + min + ":" + sec

    }


    /**
     * override the toString() function to
     * display the attributes (make the debug and tests easier)
     *
     * @returns {string} the string value of the task
     */
    toString = () =>{
        return "title: " +this._title + "\ndescription: " + this._description +
            "\nstart date: "+this._startDate + "\nend date: "+ this._endDate + "\ncontext: " +
            this._context + "\nexternal url: "+this._externalUrl + "\nimage url: "+ this._imageUrl+
            "\nthe category: "+this._theCategory
    }


    ////////////////////////////////////////////////////////////////////////////////////
    /////////////////////////////////////| SETTER |/////////////////////////////////////
    ////////////////////////////////////////////////////////////////////////////////////


    /**
     * set the title of the task
     * reminder: title can't be null or empty
     *
     * @param value the new value of the title to assign
     */
    set title(value) {
        this.checkTitleRequireParameter(value)
        this._title = value;
    }

    /**
     * set the description of the task
     * reminder: description can't be null or empty
     *
     * @param value the new value of the description to assign
     */
    set description(value) {
        this.checkDescriptionRequireParameter(value)
        this._description = value;
    }

    set startDate(value) {
        this._startDate = value;
    }

    set endDate(value) {
        this._endDate = value;
    }

    set context(value) {
        this._context = value;
    }

    set externalUrl(value) {
        this._externalUrl = value;
    }

    set imageUrl(value) {
        this._imageUrl = value;
    }

    set theCategory(value) {
        this._theCategory = value;
    }
}