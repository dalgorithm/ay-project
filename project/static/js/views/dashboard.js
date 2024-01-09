import Abstractviews from "./Abstractviews.js";
export default class extends Abstractviews {
    constructor() {
        super();
        this.setTitle("Home");
    }


    async getHtml() {
        return `
        
<!-- sections -->
<div class="sections">
<!-- slider code from codepen -->
<div id="slider" class="slider">

    <div style=""><h2>Join The Movement To end Child Poverty</h2>
    We invite you to connect with us, whether to learn more about our ongoing initiatives, express your interest in volunteering, or inquire about partnership opportunities. Your involvement, support, and ideas are invaluable in furthering our mission and creating lasting change in the world<br>
    <br><a href="/donate"><button> Donate Now </button></a></div>



</div>

</div>
<div class="sections">
<div class="sec1-div"><h1>About us</h1>
<p>Welcome to our NGO dedicated to extending compassion and support to those in need across the globe. Founded on the core values of altruism and empathy, our organization strives to make a meaningful impact on society by spearheading various charitable initiatives and fundraising campaigns.</p>
<a href="/about"><button style="background: linear-gradient(60deg, green 50%,transparent 100%);">Read more</button></a>

</div>
<div class="sec2-div" style="background-image: url(/static/images/green.jpg)"></div>

</div>

<div class="sections">
<div class="whatwedo">- What We Do -</div>


<div style="background-image:url(/static/images/img2.jpeg);background-size:100% 300px;background-repeat:no-repeat" class="activity"><h2>Child's Education Support</h2> </div></a>
<div style="background-image:url(/static/images/img1.jpeg);background-size:100% 300px;background-repeat:no-repeat" class="activity"><h2>Ophans Upbringing </h2></div>
<div style="background-image:url(/static/images/img3.jpeg);background-size:100% 300px;background-repeat:no-repeat" class="activity"><h2>Widows Support Programmes</h2> </div>

</div>


<!--section -->
<div class="sections" style="background-image:url(/static/images/ophanage1.jpg);background-attachment: fixed;background-repeat:no-repeat;background-size:100%;background-position: center">
<center><h2> Search within our road map</h2></center>
<input type="text" name="search" id="search" >
<center> <button> Find an item </button></center>



</div>



<!-- sections -->
<div class="sections">
        <div class="paral">Let us build the future together and make the world a better place for the generations unborn through our benevolence act towards 
        the needy for a better future transition.<br>
        <br>
        <a href="/donate"><button>Donate </button></a>
        </div>
</div>
<div class="sections">

</div>
<!-- footer -->





<!-- end of main container -->


        `;


        
    }
}


