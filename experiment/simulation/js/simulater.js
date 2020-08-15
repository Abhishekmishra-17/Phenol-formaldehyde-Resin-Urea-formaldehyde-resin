window["onload"] = function(){
               var elms = ['.call-to-action', '.image-scale-half', '.image-scale-full', '.hotplate'], activeProcess = 0;
               function addEvent(event, elm, callback, userCapture = false){
                   let tag = document.querySelector(elm);
                   tag.addEventListener(event, callback, userCapture);
               }
               var procedure = document.querySelector('.steps>p');
               addEvent('click', elms[0], eventHandler);
               function eventHandler(){
                   switch (activeProcess){
                    case 0:
                        if((globalProcess[0] === 'item-1' && globalProcess[1] === 'item-2') || (globalProcess[0] === 'item-2' && globalProcess[1] === 'item-1')){
                            globalProcess.pop();
                            Dry1();
                            step1();
                        }else{
                            alertOver('Wrong Procedure!', function(){window['location']['reload']()});
                         }
                        
                        break;
                    case 1:
                         if((globalProcess[0] === 'item-1' && globalProcess[1] === 'item-3') || (globalProcess[0] === 'item-3' && globalProcess[1] === 'item-1')){
                             globalProcess.pop();
                             Dry1();
                             step2();
                         }else{
                             alertOver('Wrong Procedure!', function(){window['location']['reload']()});
                            
                         }
                        break;
                    case 2:
                        step3();
                        break;
                    case 3:
                         if((globalProcess[0] === 'item-1' && globalProcess[1] === 'item-4') || (globalProcess[0] === 'item-4' && globalProcess[1] === 'item-1')){
                              globalProcess.pop();
                              Dry1();
                              step4();
                         }else{
                             alertOver('Wrong Procedure!', function(){window['location']['reload']()});
                            }
                         
                        break;
                    case 4:
                         if((globalProcess[0] === 'item-1' && globalProcess[1] === 'item-5') || (globalProcess[0] === 'item-5' && globalProcess[1] === 'item-1')){  
                              globalProcess.pop();
                              Dry1();
                              step5();
                         }else{
                              alertOver('Wrong Procedure!', function(){window['location']['reload']()});
                            
                         }
                        break;
                    case 5:
                            Dry1();
                            step6();
                        break;
                    case 6:
                            step7();
                            break;
                    case 7:
                            step8();
                            break;
                    case 8:
                        if((globalProcess[0] === 'item-1' && globalProcess[1] === 'item-6') || (globalProcess[0] === 'item-6' && globalProcess[1] === 'item-1')){  
                              globalProcess.pop();
                              Dry1();
                              step9();
                        }else{
                           alertOver('Wrong Procedure!', function(){window['location']['reload']()});
                        }
                        break;
                    case 9:
                        step10();
                        procedureBar.classList.remove('animate');
                        break;
                    
                }
                   
                function Dry1(){
                        startButton = document.querySelector('.call-to-action');
                        startButton.classList.add('disable');
                        startButton.classList.remove('active');
                        startButton.disabled = true;
                        navbar.style.display = 'block';
                        procedureBar.classList.remove('animate');
                }
               }
            
    
            /// glacialacetic...
            function step1(){
                       let tag = document.querySelector(elms[1]);
                       tag.classList.add('animate');
                       setTimeout(function(){
                         let tag = document.querySelector(elms[2]);
                         tag.classList.add('animate');
                         setTimeout(function(){
                                tag.style.backgroundImage = 'url(./images/beaker_fill_glacial_5.png)';
                                tag = document.querySelector(elms[1]);
                                tag.style.backgroundImage = 'url()';
                                activeProcess = 1;
                                procedure.textContent = 'b) Add 5 mL of 40% formaldehyde solution in to it.';
                                procedureBar.classList.add('animate');
                                navbar.style.display = 'none';
                           }, 2000);
                       }, 1000);
                 }
    
            ////formaldehyde...
            function step2(){
                let tag = document.querySelector(elms[1]);
                tag.classList.add('animate-2');
                setTimeout(function(){
                     let tag = document.querySelector(elms[2]);
                     tag.classList.add('animate-2');
                     setTimeout(function(){
                            tag.style.backgroundImage = 'url(./images/beaker_fill_formaldehyde_6.png)';
                            tag = document.querySelector(elms[1]);
                            tag.style.backgroundImage = 'url()';
                            tag = document.querySelector(elms[0]);
                            tag.textContent = 'Heat';
                            activeProcess = 2;
                            procedure.textContent = 'c) Heat it slightly.';
                            let startButton = document.querySelector('.call-to-action');
                            startButton.classList.remove('disable');
                            startButton.classList.add('active');
                            navbar.style.display = 'none';
                            startButton.disabled = false;
                            procedureBar.classList.add('animate');
                       }, 2000);
               }, 1000);
            }
            
            //// heating
            function step3(){
               let tag = document.querySelector(elms[3]);
               tag.style.backgroundImage = 'url(./images/hotplate_1.png)';
               tag = document.querySelector(elms[0]);
               tag.textContent = 'Stop Heating';
               tag = document.querySelector(elms[2]);
               tag.classList.add('animate-3');
               tag = document.querySelector(elms[0]);
               tag.textContent = 'Add';
               activeProcess = 3;
               setTimeout(function(){
                        let startButton = document.querySelector('.call-to-action');
                        startButton.classList.remove('disable');
                        startButton.classList.add('active');
                        startButton.disabled = false;
                        procedure.textContent = 'd) Add 2 grams of Phenol.';
                        procedureBar.classList.add('animate');
                        navbar.style.display = 'none';
               }, 1000);
            }
        
            /// phenol
            function step4(){
                let tag = document.querySelector(elms[1]);
                tag.classList.add('animate-3');
                setTimeout(function(){
                     let tag = document.querySelector(elms[2]);
                     tag.classList.add('animate-4');
                     setTimeout(function(){
                            tag.style.backgroundImage = 'url(./images/beaker_fill_phenol_2.png)';
                            tag = document.querySelector(elms[1]);
                            tag.style.backgroundImage = 'url()';
                            tag = document.querySelector(elms[0]);
                            tag.textContent = 'Add';
                            activeProcess = 4;
                            procedure.textContent = 'e) Slowely add 2 mL of conc.HCL in to the mixture.';
                            let startButton = document.querySelector('.call-to-action');
                            startButton.classList.remove('disable');
                            startButton.classList.add('active');
                            startButton.disabled = false;
                            navbar.style.display = 'none';
                            procedureBar.classList.add('animate');
                       }, 2000);
               }, 2000);
            }
            
            /// hcl
            function step5(){
               let tag = document.querySelector(elms[1]);
               tag.classList.add('animate-4');
               setTimeout(function(){
                 let tag = document.querySelector(elms[2]);
                 tag.classList.add('animate-5');
                 setTimeout(function(){
                        tag.style.backgroundImage = 'url(./images/beaker_fill_hcl_5.png)';
                        tag = document.querySelector(elms[1]);
                        tag.style.backgroundImage = 'url()';
                        tag = document.querySelector(elms[0]);
                        tag.textContent = 'Stir';
                        activeProcess = 5;
                        procedure.textContent = 'f) Stir The mixture. Within few minutes ,a large mass of pink plastic is formed.';
                        let startButton = document.querySelector('.call-to-action');
                        startButton.classList.remove('disable');
                        startButton.classList.add('active');
                        navbar.style.display = 'none';
                        startButton.disabled = false;
                        procedureBar.classList.add('animate');
                   }, 2000);
                   
               }, 2300);
            }
            
         //// stir
        function step6(){
             let tag = document.querySelector(elms[2]);
             tag.classList.add('animate-6');
             tag.style.backgroundImage = 'url(./images/beaker_fill_hcl_5.png)';
             tag = document.querySelector(elms[0]);
            setTimeout(function(){
            tag.textContent = 'Heating...';
                
            activeProcess = 6;
            eventHandler();
                
            },4000)
            
        }
         
        /// heating
        function step7(){
             let tag = document.querySelector(elms[2]);
             tag.classList.add('animate-7');
             tag.style.backgroundImage = 'url(./images/beaker_fill_pink_4.png)';
             tag = document.querySelector(elms[0]);
             setTimeout(function(){
                 tag.textContent = 'Stop Heating';
                 procedure.textContent = 'g) Stop heating,\. Wash this product,several time,with distilled water.';
                 let startButton = document.querySelector('.call-to-action');
                 startButton.classList.remove('disable');
                 startButton.classList.add('active');
                 startButton.disabled = false;
                 navbar.style.display = 'none';
                 procedureBar.classList.add('animate');
                 activeProcess = 7;  
             }, 4000);
             
        }
        
        /// stop heating 
        function step8(){
            let tag = document.querySelector(elms[3]);
            tag.parentNode.removeChild(tag);
            tag = document.querySelector(elms[2]);
            tag.style.bottom = '100px';
            tag = document.querySelector(elms[0]);
            tag.textContent = 'Mix Water';
            procedureBar.classList.add('animate');
            activeProcess = 8;
        }
        
        /// add water 
        function step9(){
            let tag = document.querySelector(elms[1]);
            tag.classList.add('animate-5');
            setTimeout(function(){
                    let tag = document.querySelector(elms[2]);
                    tag.classList.add('animate-8');
                    setTimeout(function(){
                    tag.style.backgroundImage = 'url(./images/beaker_fill_water_5.png)';
                    tag = document.querySelector(elms[1]);
                    tag.style.backgroundImage = 'url()';
                    tag = document.querySelector(elms[0]);
                    tag.textContent = 'Filter';
                    activeProcess = 9;
                    procedure.textContent = 'h) Filter,dry and measure the weight of this pink plastic.';
                    let startButton = document.querySelector('.call-to-action');
                    startButton.classList.remove('disable');
                    startButton.classList.add('active');
                    startButton.disabled = false;
                    navbar.style.display = 'none';
                    procedureBar.classList.add('animate');
                   }, 2000);
               }, 2300);
        }
        
        /// filter
        function step10(){
            let tag = document.querySelector(elms[2]);
            tag.classList.add('animate-9');
             setTimeout(function(){
                 let tag = document.querySelector(elms[1]);
                 tag.classList.add('animate-6');
                 setTimeout(function(){
                        tag = document.querySelector(elms[2]);
                        tag.style.opacity = '0';
                        tag = document.querySelector(elms[1]);
                        tag.style.backgroundImage = 'url()';
                        tag = document.querySelector(elms[0]);
                        tag.textContent = 'Completed';
                        activeProcess = 10;
                        procedure.textContent = 'i) After drying for few minutes, Bakelite is formed.';
                        procedureBar.classList.add('animate');
                        setTimeout(function(){
                             let tag2 = document.querySelector('.final-image');
                             tag2.style.opacity = '1';
                             document.querySelector('.final').style.opacity = '1';
                             tag.style.display = 'none';
                         }, 2000);
                   }, 2000);
               }, 1000);
            
        }
    
    
        
             }
    
    