const novotexto = document.querySelector('#novotexto')
const textopronto = document.querySelector('#textopronto')
const contentDir = document.querySelector('.content-dir')
const criptografa = document.querySelector('#criptografa')
const descriptografa = document.querySelector('#descriptografa')
const copia = document.querySelector('#copia')


criptografa.addEventListener('click', () => {
   contentDir.style.display = 'none'
   textopronto.style.display = 'inline-block'

   
   let x = novotexto.value.split('')

   x.forEach(criptogrfia)

   textopronto.value = x.join('')
   

   function criptogrfia(element, index){
      if(element == 'a'){
         x.splice(index,1,'ai')
      }
      if(element == 'e'){
         x.splice(index,1,'enter')
      }
      if(element == 'i'){
         x.splice(index,1,'imes')
      }
      if(element == 'o'){
         x.splice(index,1,'ober')
      }
      if(element == 'u'){
         x.splice(index,1,'ufat')
      }
   }

})

descriptografa.addEventListener('click', () => {
   contentDir.style.display = 'none'
   textopronto.style.display = 'inline-block'

   let x = novotexto.value
   textopronto.value = descriptografia(x)
   
   
   function descriptografia(texto){
      let t = texto.replaceAll('ai', 'a')
      .replaceAll('enter', 'e')
      .replaceAll('imes', 'i')
      .replaceAll('ober', 'o')
      .replaceAll('ufat', 'u')

      return t
   }
   
   
})

copia.addEventListener('click', () =>  {
   contentDir.style.display = 'none'
   textopronto.style.display = 'inline-block'

      let textoCopiado = textopronto;
      textoCopiado.select();
      textoCopiado.setSelectionRange(0, 99999);
      document.execCommand("copy");
      alert("O texto foi copiado");

})