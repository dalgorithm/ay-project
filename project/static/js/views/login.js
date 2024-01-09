import Abstractviews from "./Abstractviews.js";
export default class extends Abstractviews {
    constructor() {
        super();
        this.setTitle("Login");
    }


    async getHtml() {
        return `

        <div class="sections">
<div class="contact-form">
        <h2>Login</h2>
        <form name="myform" action="#" method="POST" onsubmit="return validateForm()">
        <div class="form-group">
        <label for="email">Email:</label>
        <input type="email" id="email" name="email" >
        </div>
        <div class="form-group">
        <label for="email">Password:</label>
        <input type="password" id="password" name="password" >
        </div>
        
        <div class="form-group">
        <button type="submit">Submit</button>
        </div>
        </form>
        </div>

        </div>
        `;


        
    }
}


