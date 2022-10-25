const projectsBtns = document.querySelectorAll('.projects__btn');

for (const btn of projectsBtns) {
	btn.addEventListener('click', e => {
		const btnIndex = e.target.dataset.index;
		const activeprojectsBlock = document.querySelector('.projects__block.active');
		if (activeprojectsBlock.dataset.index === btnIndex) {
			return;
		}

		const activeprojectsBtn = document.querySelector('.projects__btn.active');
		e.target.classList.add('active');
		activeprojectsBtn.classList.remove('active');

		const projectsBlock = document.querySelector(`.projects__block[data-index="${btnIndex}"]`);
		activeprojectsBlock.classList.remove('active');
		projectsBlock.classList.add('active');
	});
}