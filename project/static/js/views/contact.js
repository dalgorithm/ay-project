import Abstractviews from "./Abstractviews.js";
export default class extends Abstractviews {
    constructor() {
        super();
        this.setTitle("Contact");
    }


    async getHtml() {
        return `
        

        <div class="sections">
        
        <div class="contact-form">
<h2>Contact Us</h2>
<form name="myform" action="#" method="POST" onsubmit="return validateForm()">
<div class="form-group">
<label for="name">Name:</label>
<input type="text" id="name" name="name">
</div>
<div class="form-group">
<label for="email">Email:</label>
<input type="email" id="email" name="email">
</div>
<div class="form-group">
<label for="message">Message:</label>
<textarea id="message" name="message"></textarea>
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


