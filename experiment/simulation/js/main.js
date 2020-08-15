var selectFinal, procedureBar, alertBar, alertMask, alertText, glovalSelector, globalListner , globalProcess, navbar ;

init();

function alertOver(text, callback){
       
           alertText.textContent = text;
           alertBar.classList.add('animate');
           alertMask.style.display = 'block';
           let action1 = document.querySelector('.action-1');
           let action2 = document.querySelector('.action-2');
           action1.onclick = function(){
               alertBar.classList.remove('animate');
               alertMask.style.display = 'none';
               
           }
           action2.onclick = function(){
               alertBar.classList.remove('animate');
               alertMask.style.display = 'none';
               callback();
           }
           
        
}

selectFinal.forEach(item => {
    
          item.addEventListener('click', function(e){
            
            let property1 = this.getAttribute('data-item');
            let flag = true ;
            glovalSelector.indexOf(property1) < 0 ? glovalSelector.push(property1) : flag = false;
            if(flag){
                addToBar(glovalSelector.length-1);
            }
          })
    });

function addToBar(index){
           
            var bar = document.querySelector('.row-1');
            var div1 = document.createElement('div');
            var div2 = document.createElement('div');
            var div3 = document.createElement('div');
            var button = document.createElement('button');
            button.classList.add('bar-item');
            div2.classList.add('add-item');
            div3.classList.add('text');
            button.classList.add('add');
            button.textContent = '+';
            div2.appendChild(button);
            
            
            switch(glovalSelector[index]){
                case 'item-1':
                    div1.classList.add('loading', 'item-1');
                    
                    div3.textContent = 'Beaker';
                    bar.appendChild(div1);
                    var img = new Image();
                    img.onload = function(){
                        var elem = document.querySelector('.row-1 .item-1');
                        elementManaer(elem);
                        
                    }
                    img.src = './images/beaker.png';
                    break;
                case 'item-2':
                    div1.classList.add('loading', 'item-2');
                    
                    div3.textContent = 'Glacial Acetic Acid';
                    bar.appendChild(div1);
                    var img = new Image();
                    img.onload = function(){
                        var elem = document.querySelector('.row-1 .item-2');
                        elementManaer(elem);
                        
                    }
                    img.src = './images/glacial_0.png';
                    break;
                case 'item-3':
                    div1.classList.add('loading', 'item-3');
                    
                    div3.textContent = 'Formaldehyde';
                    bar.appendChild(div1);
                    var img = new Image();
                    img.onload = function(){
                        var elem = document.querySelector('.row-1 .item-3');
                        elementManaer(elem);
                        
                    }
                    img.src = './images/formaldehyde_0.png';
                    break;
                case 'item-4':
                    div1.classList.add('loading', 'item-4');
                    
                    div3.textContent = 'Phenol';
                    bar.appendChild(div1);
                    var img = new Image();
                    img.onload = function(){
                        var elem = document.querySelector('.row-1 .item-4');
                        elementManaer(elem);
                        
                    }
                    img.src = './images/phenol_0.png';
                    break;
                case 'item-5':
                    div1.classList.add('loading', 'item-5');
                    
                    div2.appendChild(button);
                    div3.textContent = 'HCl';
                    bar.appendChild(div1);
                    var img = new Image();
                    img.onload = function(){
                        var elem = document.querySelector('.row-1 .item-5');
                        elementManaer(elem);
                        
                    }
                    img.src = './images/hcl_0.png';
                    break;
                case 'item-6':
                    div1.classList.add('loading', 'item-6');
                    
                    div2.appendChild(button);
                    div3.textContent = 'Distilled Water';
                    bar.appendChild(div1);
                    var img = new Image();
                    img.onload = function(){
                        var elem = document.querySelector('.row-1 .item-6');
                        elementManaer(elem);
                        
                    }
                    img.src = './images/water_open.png';
                    break;
                
            }
    
             function elementManaer(elem){
                        elem.classList.remove('loading');
                        elem.appendChild(img);
                        elem.appendChild(div2);
                        elem.appendChild(div3);
             }
             setTimeout(function(){
             barItem = document.getElementsByClassName('bar-item');
             for(let i = 0; i < barItem.length; i++){
                 let classExist = barItem[i].parentNode.parentNode.classList[0];
                 if(globalListner.indexOf(classExist) < 0){
                 barItem[i].addEventListener('click', function(e){dragItem(e);});
                 globalListner.push(classExist);
                 }
             }
            },100);
                        
          }
         
        function dragItem(e){
               var parent = e.target.parentNode.parentNode;
               var classes = parent.classList;
               console.log(classes);
               for(let i= 0; i < classes.length; i++){
                   switch (classes[i]){
                       case 'item-1':
                           document.querySelector('.image-scale-full').style.backgroundImage = 'url(./images/beaker.png)';
                           globalProcess.push('item-1');
                           parent.parentNode.removeChild(parent);
                           break;
                       case 'item-2':
                           document.querySelector('.image-scale-half').style.backgroundImage = 'url(./images/glacial_0.png)';
                           globalProcess.push('item-2');
                           parent.parentNode.removeChild(parent);
                           break;
                      case 'item-3':
                           document.querySelector('.image-scale-half').style.backgroundImage = 'url(./images/formaldehyde_0.png)';
                           globalProcess.push('item-3');
                           parent.parentNode.removeChild(parent);
                           break;
                      case 'item-4':
                           document.querySelector('.image-scale-half').style.backgroundImage = 'url(./images/phenol_0.png)';
                           globalProcess.push('item-4');
                           parent.parentNode.removeChild(parent);
                           break;
                      case 'item-5':
                           document.querySelector('.image-scale-half').style.backgroundImage = 'url(./images/hcl_0.png)';
                           globalProcess.push('item-5');
                           parent.parentNode.removeChild(parent);
                           break;
                      case 'item-6':
                           document.querySelector('.image-scale-half').style.backgroundImage = 'url(./images/water_open.png)';
                           globalProcess.push('item-6');
                           parent.parentNode.removeChild(parent);
                           break;
                   }
               }
            
        
            if(globalProcess.length > 1){
                let startButton = document.querySelector('.call-to-action');
                startButton.classList.remove('disable');
                startButton.classList.add('active');
                startButton.disabled = false;
            }
            
        }
	function init(){
        selectFinal = document.querySelectorAll('.appratus-used  li');
        procedureBar = document.querySelector('.procedure-container');
        alertBar = document.querySelector('.alert');
        alertMask = document.querySelector('.alert-mask');
        alertText = document.querySelector('.text-col');
        
        glovalSelector = new Array();
        globalListner = new Array();
        globalProcess = new Array();
        navbar = document.querySelector('.disableSetion');
        setTimeout(function(){procedureBar.classList.add('animate');}, 1000);
        
    }