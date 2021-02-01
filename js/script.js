document.addEventListener('DOMContentLoaded', function() {

const addButton = document.querySelector('.menu-button__add');
const desktop = document.querySelector('.container');
const modalAdd = document.querySelector('.modal-add_note');
let close = document.querySelectorAll('.block-note__close');
const title = modalAdd.querySelector(".modal-add__title");
const description = modalAdd.querySelector(".modal-add__description");

const localModal = {
	title:[],
	description: [],
	isImportant:false	
};

function addListenerClose(){
		imp = document.querySelectorAll('.block-note__star');
		close = document.querySelectorAll('.block-note__close');
		close.forEach((el)=>{
			el.addEventListener('click', function cl(){
				this.closest('.block-note').style.opacity = 0;
			setTimeout(()=>{
				localModal.title.map((elem,index)=>{
					if(elem==this.closest('.block-note').querySelector('.block-note__title').textContent){
						elem = localModal.title.splice(index,1);
						localStorage.setItem('modalObject', JSON.stringify(localModal));
					}
				})
				localModal.description.map((elem,index)=>{
					if(elem==this.closest('.block-note').querySelector('.block-note__description').textContent){
						elem = localModal.description.splice(index,1);
						localStorage.setItem('modalObject', JSON.stringify(localModal));
					}
				})
				this.closest('.block-note').remove();
				},550);
			})
		})	

		imp.forEach((el)=>{
			el.addEventListener('click', (elem)=>{
				localModal.isImportant = !localModal.isImportant;
				el.classList.toggle('star');
				localStorage.setItem('modalObject', JSON.stringify(localModal));
			});
		});

}
let dwldItem = localStorage.getItem('modalObject')!=null ? JSON.parse(localStorage.getItem('modalObject')):localModal;
if(dwldItem.title!=null){ localModal.title = dwldItem.title;
localModal.description = dwldItem.description;
localModal.isImportant = dwldItem.isImportant;}
for(let i in dwldItem.title){
		 desktop.innerHTML +=
					 `
					 <div class="block-note">
						<h1 class="block-note__title">${dwldItem.title[i]}</h1>
						<p class="block-note__description">${dwldItem.description[i]}</p>
						<i class="fas fa-star block-note__star ${dwldItem.isImportant?"star":""}"></i>
						<i class="fas fa-trash-alt block-note__close"></i>
					</div>

					`
	}
	addListenerClose();
addButton.addEventListener('click', (e) =>{
		e.preventDefault();
		modalAdd.style.display = 'flex';
	});
modalAdd.querySelector(".modal-add__btn").addEventListener('click',()=>{
				if(title.value!=''){
					desktop.innerHTML +=
				 `
				 <div class="block-note">
					<h1 class="block-note__title">${title.value}</h1>
					<p class="block-note__description">${description.value}</p>
					<i class="fas fa-star block-note__star"></i>
					<i class="fas fa-trash-alt block-note__close"></i>
				</div>

				`
				localModal.title.push(title.value);
				localModal.description.push(description.value);
				localStorage.setItem('modalObject', JSON.stringify(localModal));
				}
				addListenerClose();	
				if(title.value!=''){	
				title.value='';
				description.value='';
				modalAdd.style.display = 'none';
			}
		});
	modalAdd.querySelector(".modal-add__cls").addEventListener('click', ()=>{
				title.value='';
				description.value='';
				modalAdd.style.display = 'none';

		});


});