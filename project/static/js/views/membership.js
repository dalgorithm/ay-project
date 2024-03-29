import Abstractviews from "./Abstractviews.js";
export default class extends Abstractviews {
    constructor() {
        super();
        this.setTitle("Membership");
    }


    async getHtml() {
        return `
        


        <div class="sections">

<div class="contact-form">
<h2> Membership / Donation</h2>


<form action="#" method="POST">
<div class="form-group">
<label for="name">Full Name:</label>
<input type="text" id="name" name="name" required>
</div>
<div class="form-group">
<label for="email">Email:</label>
<input type="email" id="email" name="email" required>
</div>

<div class="form-group">
<label for="email">Password:</label>
<input type="password" id="password" name="password" required>
</div>

<div class="form-group">
<label for="email">Phone:</label>
<input type="phone" id="phone" name="phone" required>
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


