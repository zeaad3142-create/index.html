function sendMessage() {
	let name = document.getElementById('nameInput').value;
	let message = document.getElementById('messageInput').value;

	if (name === "" || message === "") {
		alert("الرجاء تعبئة جميع الحقول");
		return;
	}

	let fullMessage = "الاسم: " + name + " - الرسالة: " + message;
	let whatsappURL = "https://wa.me/966543443871?text=" + encodeURIComponent(fullMessage);

	window.open(whatsappURL);
}

window.addEventListener('load', function() {
	document.getElementById('preloader').classList.add('hidden');
});


function typeEffect(element, text, speed) {
	let i = 0;
	element.textContent = "";

	function type() {
		if (i < text.length) {
			element.textContent += text.charAt(i);
			i++;
			setTimeout(type, speed);
		}
	}

	type();
}

window.addEventListener('load', function() {
	let titleElement = document.querySelector('.highlight');
	typeEffect(titleElement, "مواقع احترافية", 100);
});

function countUp(element, target, duration) {
	let start = 0;
	let increment = target / (duration / 20);

	let counter = setInterval(function() {
		start += increment;
		if (start >= target) {
			element.textContent = target + "+";
			clearInterval(counter);
		} else {
			element.textContent = Math.floor(start) + "+";
		}
	}, 20);
}

window.addEventListener('load', function() {
	let stats = document.querySelectorAll('.stat h2');
	if (stats.length === 3) {
		countUp(stats[0], 50, 1500);
		countUp(stats[1], 30, 1500);
		countUp(stats[2], 3, 1500);
	}
});

const revealElements = document.querySelectorAll('.stat, .review, .work-item, .service, .plan');

const observer = new IntersectionObserver(function(entries) {
	entries.forEach(function(entry) {
		if (entry.isIntersecting) {
			entry.target.classList.add('reveal-active');
		}
	});
}, { threshold: 0.2 });

revealElements.forEach(function(el) {
	el.classList.add('reveal');
	observer.observe(el);
});

window.addEventListener('scroll', function() {
    let backBtn = document.getElementById('backToTop');
    if (window.scrollY > 400) {
        backBtn.classList.add('show');
    } else {
        backBtn.classList.remove('show');
    }
});

document.getElementById('backToTop').addEventListener('click', function(e) {
    e.preventDefault();
    window.scrollTo({ top: 0, behavior: 'smooth' });
});
