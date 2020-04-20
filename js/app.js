let dropdown = document.getElementsByClassName("langs-dropdown")[0];
let dpdBtn = document.getElementsByClassName("langs__btn")[0];

dpdBtn.addEventListener("click", () => {
	dropdown.classList.toggle('langs-dropdown--visible');
	console.log('yap')
})


let galleryImgs = document.getElementsByClassName('gallery-content__img');
let galleryBtn = document.getElementById('gallery-btn');
let activeGalleryImg = 0;
let activeImgClass = 'gallery-content__img--active'

galleryBtn.addEventListener('click', () => {
	if (activeGalleryImg >= galleryImgs.length - 1) {
		activeGalleryImg = 0;
	} else {
		activeGalleryImg++;
	}
	for (let img of galleryImgs) {
		img.classList.remove(activeImgClass)
	}

	galleryImgs[activeGalleryImg].classList.add(activeImgClass)

})





