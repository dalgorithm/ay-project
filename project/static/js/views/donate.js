import Abstractviews from "./Abstractviews.js";
export default class extends Abstractviews {
    constructor() {
        super();
        this.setTitle("Donate");
    }


    async getHtml() {
        return `

        <div class="sections">
<div class="contact-form">
        <h2>Donate to a child</h2>
        <form name="myform" action="#" method="POST" onsubmit="return validateForm()">
        <div class="form-group">
        <label for="Name">Name:</label>
        <input type="text" id="name" name="name" >
        </div>
        <div class="form-group">
        <label for="Email">Email:</label>
        <input type="email" id="email" name="email" >
        </div>

        <div class="form-group">
        <label for="Amount">Amount:</label>
        <input type="number" id="amount" name="amount" placeholder="Amount in ($)dollars">
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


