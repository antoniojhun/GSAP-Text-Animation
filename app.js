const words = ['Antonio.', 'A Husband. ', 'A Developer.', 'A Test.'];

let cursor = gsap.to('.cursor', {
	opacity: 0,
	ease: 'power2.inOut',
	repeat: -1,
});

let boxTl = gsap.timeline();

boxTl
	.to('.box', {
		duration: 1,
		width: '17vw',
		delay: 0.5,
		ease: 'power4.inOut',
	})
	.from('h1', {
		duration: 1,
		y: '7vw',
		ease: 'power3.out',
		onComplete: () => masterTl.play(),
	})
	.to('h1', { duration: 1, height: '7vw', ease: 'elastic.out' })
	.to('.box', {
		duration: 2,
		autoAlpha: 0.5,
		yoyo: true,
		repeat: -1,
		ease:
			"rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
	});

let masterTl = gsap.timeline({ repeat: -1 }).pause();

words.forEach((word) => {
	let tl = gsap.timeline({ repeat: 1, yoyo: true, repeatDealy: 1 });
	tl.to('.text', { duration: 1, text: word });
	masterTl.add(tl);
});
