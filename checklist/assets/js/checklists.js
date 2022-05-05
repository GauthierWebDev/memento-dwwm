class Checklists {
	constructor() {
		this.version = '0.0.1';
		this.localStorageVersion = localStorage.getItem('checklistsVersion');
		this.dp = JSON.parse(localStorage.getItem('dp')) || null;
		this.ddp = JSON.parse(localStorage.getItem('ddp')) || null;
		this.other = JSON.parse(localStorage.getItem('other')) || null;
		this.misc = JSON.parse(localStorage.getItem('misc')) || null;
		this.checklists = document.getElementById('checklists');
		this.resetButton = document.getElementById('reset');
		this.importButton = document.getElementById('import');
		this.exportButton = document.getElementById('export');
		this.alert = document.getElementById('alert');
		this.alertTimeout = null;
		this.toggleCheckedVisible = document.getElementById('toggleChecked');
		this.showChecked = false;
		this.footerVersion = document.getElementById('footerVersion');
	}

	showAlert(message, color = 'secondary') {
		clearTimeout(this.alertTimeout);
		this.alert.innerText = message;
		this.alert.classList.add('alert--visible');
		this.alert.classList.add(`alert_${color}`);

		this.alertTimeout = setTimeout(() => {
			this.alert.classList.remove('alert--visible');
		}, 5000);
	}

	exportJson() {
		const json = {
			version: this.localStorageVersion,
			dp: this.dp,
			ddp: this.ddp,
			other: this.other,
			misc: this.misc,
		};

		const date = new Date();
		const formattedDate = `${date.getDate()} ${date.toLocaleString('default', { month: 'long' })} ${date.getFullYear()}, ${date.getHours()}h${date.getMinutes()}`;

		const jsonString = JSON.stringify(json);
		const blob = new Blob([jsonString], { type: 'application/json' });
		const url = URL.createObjectURL(blob);
		const a = document.createElement('a');
		a.href = url;
		a.download = `memento_dwwm (${formattedDate}).json`;
		a.click();
	}

	/**
	 * Fetch DP checklist data from the server
	 * @returns void
	 */
	async fetchDP() {
		this.dp = await fetch('./assets/json/dp.json')
			.then(res => res.json())
			.then(data => data)
			.catch(err => console.error(err));
	}

	/**
	 * Fetch DdP checklist data from the server
	 * @returns void
	 */
	async fetchDdP() {
		this.ddp = await fetch('./assets/json/ddp.json')
			.then(res => res.json())
			.then(data => data)
			.catch(err => console.error(err));
	}

	async fetchOther() {
		this.other = await fetch('./assets/json/other.json')
			.then(res => res.json())
			.then(data => data)
			.catch(err => console.error(err));
	}

	async fetchMisc() {
		this.misc = await fetch('./assets/json/misc.json')
			.then(res => res.json())
			.then(data => data)
			.catch(err => console.error(err));
	}

	saveToLocalstorage() {
		if (!this.localStorageVersion) localStorage.setItem('checklistsVersion', this.version);
		localStorage.setItem('dp', JSON.stringify(this.dp));
		localStorage.setItem('ddp', JSON.stringify(this.ddp));
		localStorage.setItem('other', JSON.stringify(this.other));
		localStorage.setItem('misc', JSON.stringify(this.misc));
		this.showAlert('Modifications sauvegardées !', 'secondary');
	}

	handleChangeCheckbox(item) {
		item.checked = !item.checked;
		this.saveToLocalstorage();
		this.createChecklists();
	}

	createItem(data) {
		const item = document.createElement('li');

		const itemLabel = document.createElement('label');
		const itemSpan = document.createElement('span');
		itemSpan.innerText = data.label;

		const itemCheckbox = document.createElement('input');
		itemCheckbox.type = 'checkbox';
		itemCheckbox.checked = data.checked;
		itemCheckbox.addEventListener('change', () => this.handleChangeCheckbox(data));

		itemLabel.append(itemCheckbox, itemSpan);

		item.append(itemLabel);

		return item;
	}

	createSubCategory(data) {
		const subCategory = document.createElement('article');
		subCategory.classList.add('checklist-subcategory');

		const subCategoryTitle = document.createElement('h4');
		subCategoryTitle.classList.add('subtitle');
		subCategoryTitle.innerText = data.title;

		const subCategoryItems = document.createElement('ul');
		subCategoryItems.classList.add('checklist-subcategory-item-list');

		const todoItems = data.items.filter((item) => !item.checked);
		const doneItems = data.items.filter((item) => item.checked);

		subCategoryItems.append(...todoItems.map((item) => this.createItem(item)));
		if (this.showChecked) subCategoryItems.append(...doneItems.map((item) => this.createItem(item)));

		subCategory.append(subCategoryTitle, subCategoryItems);
		return subCategory;
	}

	/**
	 * Create checklist and insert it into the DOM
	 * @returns void
	 */
	createSingleChecklist(checklist) {
		const card = document.createElement('section');
		card.classList.add('card');

		const cardTitle = document.createElement('h2');
		cardTitle.classList.add('title');
		cardTitle.innerText = checklist.title;

		const cardContent = document.createElement('ul');
		cardContent.classList.add('checklist');

		checklist.items.forEach((category) => {
			const checklistCategory = document.createElement('li');
			checklistCategory.classList.add('checklist-category');

			const categoryTitle = document.createElement('h3');
			categoryTitle.classList.add('subtitle');
			categoryTitle.innerText = category.title;
			checklistCategory.appendChild(categoryTitle);

			const subCategories = category.items.map((subCategory) => this.createSubCategory(subCategory));
			checklistCategory.append(...subCategories);

			cardContent.appendChild(checklistCategory);
		});

		card.append(cardTitle, cardContent);
		this.checklists.appendChild(card);
	}

	/**
	 * Empty the container
	 * @returns void
	 */
	emptyChecklists() {
		this.checklists.innerHTML = '';
	}

	/**
	 * Create checklists for all categories
	 * @returns void
	 */
	createChecklists() {
		this.emptyChecklists();
		this.createSingleChecklist(this.dp);
		this.createSingleChecklist(this.ddp);
		this.createSingleChecklist(this.other);
		this.createSingleChecklist(this.misc);

		new Masonry(this.checklists, {
			itemSelector: '.card',
		});
	}

	async fetchAll() {
		await this.fetchDP();
		await this.fetchDdP();
		await this.fetchOther();
		await this.fetchMisc();
	}

	attachButtonsEvents() {
		this.resetButton.addEventListener('click', async () => {
			if (window.confirm('Réinitialiser les checklists fera perdre l\'état de votre progression. \n\nVous pouvez toutefois faire un export de l\'état actuel pour stocker ces informations sur votre machine avant de faire un reset !\n\nÊtes-vous sûr de vouloir continuer ?')) {
				await this.fetchAll();
				this.localStorageVersion = null;
				this.createChecklists();
				localStorage.clear();
			}
		});

		this.exportButton.addEventListener('click', () => this.exportJson());

		this.alert.addEventListener('click', () => this.alert.classList.remove('alert--visible'));

		this.toggleCheckedVisible.addEventListener('click', ({ currentTarget }) => {
			currentTarget.classList.toggle('toggleChecked--visible');
			this.showChecked = !this.showChecked;
			this.createChecklists();
		});
	}

	async init() {
		if (!this.dp) await this.fetchDP();
		if (!this.ddp) await this.fetchDdP();
		if (!this.other) await this.fetchOther();
		if (!this.misc) await this.fetchMisc();

		this.createChecklists();
		this.attachButtonsEvents();

		this.footerVersion.innerText = `Memento DWWM - Checklist (v${this.version})`;

		setTimeout(() => {
			if (this.version !== this.localStorageVersion && this.localStorageVersion !== null) {
				this.showAlert('La version de l\'application a changé. Veuillez réinitialiser les checklists en appuyant sur le bouton "Reset".', 'warning');
			}
		}, 1000);
	}
}

document.addEventListener('DOMContentLoaded', () => new Checklists().init());

