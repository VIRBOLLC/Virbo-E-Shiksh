
function login() {
    uname = document.getElementById('name').value;
    password = document.getElementById('pass').value;
    if (uname == "" || password == "") {
        swal({
            title: "Insufficient Information",
            text: "You have to fill all the fields",
            imageUrl: 'https://media.giphy.com/media/3og0IvGtnDyPHCRaYU/giphy.gif'
        });
    }
	else if (uname == "Ritika" && password == "54321nidhi!") {
		localStorage.setItem('name','<i class="fa-solid fa-badge-check"></i> Ritika Tripathi')
		localStorage.setItem('loggedin','yes')
		localStorage.setItem('prm','yes')
		localStorage.setItem('role','Founder')
		swal({
			title: "Hey our Founder Ritika Tripathi!",
			text: "Thank you Dear Founder Ritika Tripathi for logging in!",
			imageUrl: 'https://cdn.dribbble.com/users/778626/screenshots/5064153/verify.gif'
		});
		setTimeout(() => {
			window.location.replace('index.html');
		  }, 2000);
	}
	else if (uname == "Shaurya" && password == "uioplol!") {
		localStorage.setItem('name','<i class="fa-solid fa-badge-check"></i> Shaurya Tripathi')
		localStorage.setItem('loggedin','yes')
		localStorage.setItem('prm','yes')
		localStorage.setItem('role','Founder')
		swal({
			title: "Hey our Founder Shaurya Tripathi!",
			text: "Thank you Dear Founder Shaurya Tripathi for logging in!",
			imageUrl: 'https://cdn.dribbble.com/users/778626/screenshots/5064153/verify.gif'
		});
		setTimeout(() => {
			window.location.replace('index.html');
		  }, 2000);
	}
	else if (uname == "Shristi" && password == "shristiop69!") {
		localStorage.setItem('name','<i class="fa-solid fa-badge-check"></i> Shristi Tripathi')
		localStorage.setItem('loggedin','yes')
		localStorage.setItem('prm','yes')
		localStorage.setItem('role','CEO')
		swal({
			title: "Hey our CEO Shristi Tripathi!",
			text: "Thank you Dear CEO Shristi Tripathi for logging in!",
			imageUrl: 'https://cdn.dribbble.com/users/778626/screenshots/5064153/verify.gif'
		});
		setTimeout(() => {
			window.location.replace('index.html');
		  }, 2000);
	}
	else {
		localStorage.setItem('name',uname)
		localStorage.setItem('loggedin','yes')
		localStorage.setItem('prm','no')
		localStorage.setItem('role','Student')
		swal({
			title: "Hey Dear "+uname+"!",
			text: "Thank you Dear "+uname+" for logging in our services!",
			imageUrl: 'https://i.pinimg.com/originals/df/ea/dd/dfeaddf703acf71277dbb1d6d81479b0.gif'
		})
		setTimeout(() => {
			window.location.replace('index.html');
		  }, 2000);
		
		
	}
}
function np(){
	swal({
		title: "Buy Premium",
		text: "You have to buy premium to access this class.",
		imageUrl: 'https://media.giphy.com/media/3og0IvGtnDyPHCRaYU/giphy.gif'
	});
};
function c1() {
    window.location.replace('class1.html')
}
function aeen1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/aeen1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 1 English is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function aemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/aemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 1 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function ahhn1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/ahhn1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 1 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function c2() {
    window.location.replace('class2.html')
}
function bhhn1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/bhhn1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 2 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function bemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/bemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 1 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function been1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/been1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 1 English is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function c3() {
    window.location.replace('class3.html')
}
function chhn1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/chhn1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 3 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function cemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/cemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 3 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function ceen1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/ceen1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 3 English is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function ceae1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/ceap1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 3 Environmental Studies is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function c4() {
    window.location.replace('class4.html')
}

function dhhn1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/dhhn1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 4 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function demh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/demh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 4 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function deen1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/deen1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 4 English is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function deae1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/deap1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 4 Environmental Studies is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function c5() {
    window.location.replace('class5.html')
}

function ehhn1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/ehhn1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 5 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function eemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/eemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 5 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function eeen1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/eeen1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 5 English is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function eeae1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/eeap1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 5 Environmental Studies is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}

// FAVOURITES SYSTEM 💀
$(function(){
	$(document).one('click', '.like-review1', function(e) {
	if ('y' == localStorage.getItem('c1')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c1','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c1()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 1</a></h4>
              <p>Download any subject Book PDFs for class 1. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review2', function(e) {
	if ('y' == localStorage.getItem('c2')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c2','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c2()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 2</a></h4>
              <p>Download any subject Book PDFs for class 2. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review3', function(e) {
	if ('y' == localStorage.getItem('c3')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c3','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c3()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 3</a></h4>
              <p>Download any subject Book PDFs for class 3. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review4', function(e) {
	if ('y' == localStorage.getItem('c4')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c4','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c4()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 4</a></h4>
              <p>Download any subject Book PDFs for class 4. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review5', function(e) {
	if ('y' == localStorage.getItem('c5')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c5','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c5()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 5</a></h4>
              <p>Download any subject Book PDFs for class 5. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review6', function(e) {
	if ('y' == localStorage.getItem('c6')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c6','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c6()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 6</a></h4>
              <p>Download any subject Book PDFs for class 6. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review7', function(e) {
	if ('y' == localStorage.getItem('c7')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c7','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c7()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 7</a></h4>
              <p>Download any subject Book PDFs for class 7. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review8', function(e) {
	if ('y' == localStorage.getItem('c8')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c8','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c8()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 8</a></h4>
              <p>Download any subject Book PDFs for class 8. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review9', function(e) {
	if ('y' == localStorage.getItem('c9')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c9','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c9()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 9</a></h4>
              <p>Download any subject Book PDFs for class 9. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review10', function(e) {
	if ('y' == localStorage.getItem('c10')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c10','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c10()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 10</a></h4>
              <p>Download any subject Book PDFs for class 10. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review11', function(e) {
	if ('y' == localStorage.getItem('c11')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c11','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c11()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 11</a></h4>
              <p>Download any subject Book PDFs for class 11. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
$(function(){
	$(document).one('click', '.like-review12', function(e) {
	if ('y' == localStorage.getItem('c12')) {
		swal({
			title: "Already there!",
			text: "You have already added this in your favourites!",
			imageUrl: 'https://am12.mediaite.com/med/cnt/uploads/2016/11/shutterstock_354263096-e1478522217979-650x427.jpg'
		});
	}
	else {
		$(this).html('<i class="fa fa-heart" aria-hidden="true"></i> Added to Favourites');
		localStorage.setItem('c12','y')
    localStorage.setItem('favrs',localStorage.getItem('favrs')+`
    <div class="col-md-6 col-lg-3 d-flex align-items-stretch" data-aos="zoom-in" data-aos-delay="70" onclick="c12()">
            <div class="icon-box">
              <div class="icon"><i class='bx bxs-file-pdf' ></i></div>
              <h4 class="title"><a>Class 12</a></h4>
              <p>Download any subject Book PDFs for class 12. </p>
            </div>
          </div>
    `.replace('null',''))
		$(this).children('.fa-heart').addClass('animate-like');
	}
	});
});
//* premium class api
//
//* starts

function c6() {
    window.location.replace('class6.html')
}

function fhbr1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/fhbr1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 6 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function femh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/femh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 6 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function fepw1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/fepw1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 6 English A pact with the Sun is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function fesc1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/fesc1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 6 Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function fess1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/fess1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 6 Social Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}

function c7() {
    window.location.replace('class7.html')
}

function fhss3dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/fhss3dd.zip")
    swal({
		title: "Download Started",
		text: "Class 7 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function gemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/gemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 7 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function gehc1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/gehc1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 7 English HoneyComb is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function gesc1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/gesc1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 7 Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function gess1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/gess1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 7 Social Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}

function c8() {
    window.location.replace('class8.html')
}

function hhdv1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/hhdv1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 8 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function hemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/hemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 8 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function hehd1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/hehd1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 8 English is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function hesc1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/hesc1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 8 Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function hess1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/hess1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 8 Social Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}

function c9() {
    window.location.replace('class9.html')
}

function ihsa1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/ihsa1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 9 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function iemh1dd() {
	window.location.replace("https://ncert.nic.in/textbook/pdf/iemh1dd.zip")
	    swal({
		title: "Download Started",
		text: "Class 9 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function ieen1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/ieen1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 9 English is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function iesc1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/iesc1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 9 Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function iess1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/iess1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 9 Social Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}

function c10() {
    window.location.replace('class10.html')
}

function jhkr1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/jhkr1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 10 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function jemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/jemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 10 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function jeff1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/jeff1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 10 English First Flight is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function jesc1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/jesc1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 10 Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function jess1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/jess1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 10 Social Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function c11() {
    window.location.replace('class11.html')
}

function kemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function keph1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/keph1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Physics is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kech1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kech1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Chemistry is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kebo1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kebo1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Biology is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function keac1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/keac1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Accountancy Book is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kebs1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kebs1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Business Studies is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kegy1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kegy1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Geography is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kehs1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kehs1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 History is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function keps1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/keps1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Political Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kepy1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kepy1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Psychology is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kesy1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kesy1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Sociology is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function keec1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/keec1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Economics is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function khar1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/khar1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function kehb1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/kehb1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 11 English Hornbill is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}

function c12() {
    window.location.replace('class12.html')
}

function lemh1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lemh1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Maths is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function leph1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/leph1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Physics is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lech1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lech1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Chemistry is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lebo1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lebo1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Biology is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function leac1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/leac1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Accountancy Book is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lebs1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lebs1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Business Studies is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function legy1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/legy1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Geography is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lehs1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lehs1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 History is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function leps1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/leps1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Political Science is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lepy1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lepy1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Psychology is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lesy1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lesy1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Sociology is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function leec1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/leec1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Economics is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lhar1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lhar1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 Hindi is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});
}
function lefl1dd() {
    window.location.replace("https://ncert.nic.in/textbook/pdf/lefl1dd.zip")
    swal({
		title: "Download Started",
		text: "Class 12 English Flamingo is now getting downloaded. Check your downloaded files!",
		imageUrl: 'https://media.tenor.com/wmQZ_VPjViAAAAAC/smiley-emoji.gif'
	});

}	