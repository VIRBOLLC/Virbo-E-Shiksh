
if (localStorage.getItem('prm')== 'yes') {
    document.getElementById('premium').style.visibility = 'visible';
}
else {
	document.getElementById('premium').style.visibility = 'hidden';
	document.getElementById('main').innerHTML = `
	<section id="services" class="services section-bg">
      <div class="container" data-aos="fade-up">
        <div class="section-title">
          <h2>No Premium</h2>
		  <p>Would you like to buy it?</p>
        </div>
        <div class="row">
		<div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="200">
            <div class="icon-box">
              <div class="icon"><i class='bx bx-cart'></i></div>
              <h4 class="title"><a>Buy Premium</a></h4>
              <p class="description">Access All Premium Features in just 99.00 INR</p>
              <button class="btn-secondary" onclick="buy()">
			  <i class='bx bx-cart'></i> Buy
              </button>
            </div>
          </div>
		  </div>
		  </div>
		</section>
	`
}
function buy() {
	swal({
		title: "Steps To Buy",
		text: "1. Message in any of the numbers: +91-8355020933 or +91-7800058260\n2. Give them your desired id and password\n3. Pay them 99-299 INR (according to your class)\n4. After payment, they will add premium in your account\n5. Now Log Into your account any enjoy premium features.",
		imageUrl: 'https://cdn.dribbble.com/users/2046015/screenshots/5973727/06-loader_telega.gif'
	});
}
