document.addEventListener('DOMContentLoaded', function() {

const addButton = document.querySelector('.menu-button__add');
const desktop = document.querySelector('.container');
const modalAdd = document.querySelector('.modal-add_note');
let close = document.querySelectorAll('.block-note__close');
const title = modalAdd.querySelector(".modal-add__title");
const description = modalAdd.querySelector(".modal-add__description");
console.log(close);



	addButton.addEventListener('click', (e) =>{
		e.preventDefault();
		modalAdd.style.display = 'flex';
		});
	modalAdd.querySelector(".modal-add__btn").addEventListener('click',()=>{
				if(title.value!=''){
					desktop.innerHTML +=
				 `
				 <div class="block-note">
					<h1 class="block-note__title">
						${title.value}
					</h1>
					<p class="block-note__description">
						${description.value}
					</p>
					<i class="fas fa-star block-note__star"></i>
					<i class="fas fa-trash-alt block-note__close"></i>
				</div>

				`
				}
					close = document.querySelectorAll('.block-note__close');
					close.forEach((el)=>{
					el.addEventListener('click', function cl(){
						this.closest('.block-note').style.opacity = 0;
					setTimeout(()=>{
						this.closest('.block-note').remove();
					},550);
						})
					})	
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