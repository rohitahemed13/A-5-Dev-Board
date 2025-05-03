document.getElementById('btn-api').addEventListener('click',function(event){
    event.preventDefault();
    alert('Board updating succesfully');
 let taksinput = document.getElementById('taks-Input');
 let currentValue = taksinput.textContent.trim();
 let numberValue = Number(currentValue);
 if(!isNaN(numberValue)){
    numberValue += 1;
    taksinput.textContent =numberValue;
 }else{
    alert('Navbar value is not a valid number !');
 }
   
  });

document.getElementById('btn-api').addEventListener('click',function(event){
    event.preventDefault();
    let takslist = document.getElementById('task-list');
    let currentValue = takslist.textContent.trim();
    let numberValue = Number(currentValue);
    if(!isNaN(numberValue)){
        numberValue -=1;
        takslist.textContent = numberValue;
    }else{
        alert('Invalid number');
    }
  });

  document.getElementById('btn-api').addEventListener('click',function(event){
    event.preventDefault();
    this.disabled = true;

   let time = new
        Date().toLocaleTimeString();
        let result = 'You have complete the taks  ' +  'Integrate OpenAI API '  + 'at'+ time;

        document.getElementById('transection-container').innerHTML+= '<p>' + result + '<p>'; 
        document.getElementById('transection-container').style.backgroundColor = '#F4F7FF';
        document.getElementById('transection-container').style.padding = '10px';
        document.getElementById('transection-container').style.fontSize = '16px';
        document.getElementById('transection-container').style.width = '80%';
        document.getElementById('transection-container').style.height = 'auto';
        document.getElementById('transection-container').style.marginTop = '10px';
        document.getElementById('transection-container').style.borderRadius = '10px';

        
});