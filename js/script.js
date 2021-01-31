document.addEventListener('DOMContentLoaded', function() {

const addButton = document.querySelector('.menu-button__add');
const desktop = document.querySelector('.container');
let close = document.querySelectorAll('.close');

	addButton.addEventListener('click', (e) =>{
		e.preventDefault();
		});
	close.forEach((el)=>{
		el.addEventListener('click', function cl(){
			this.closest('.block-note').style.opacity = 0;
			setTimeout(()=>{
				this.closest('.block-note').remove();
			},550);
		})
	})					
});