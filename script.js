        let pscore=0;
        let cscore=0;

        const btn=document.querySelectorAll('.rpsbutton');
        btn.forEach((button)=>{
            button.addEventListener('click',()=>{
                game(button.value.toUpperCase());
            });
        });

        function game(pval){
          
            let playerSelection=pval;
            const computerSelection=computerPlay();
            var result = playRound(playerSelection,computerSelection);
            document.getElementById("round-result").innerHTML= result;
            document.getElementById("cdisplay").innerHTML=`${cscore}`;
            document.getElementById("pdisplay").innerHTML=`${pscore}`;
            if (pscore==5||cscore==5){
            ultimateResult();          
            } 
        }
    
        function computerPlay(){
            var dummyNum;
            dummyNum=Math.floor(Math.random()*3)+1;
            switch(dummyNum){
                case 1:
                return "ROCK";
                break;
                case 2:
                return "PAPER";
                break;
                case 3:
                return "SCISSORS";
            }
        }
         function playRound(ps,cs){
            if(ps==cs){
                return `It is a Tie.${ps} equals ${cs}`;
            } else if(ps=="ROCK"&& cs=="SCISSORS"){
                pscore++;
                return `You win. ${ps} beats ${cs}`;
            } else if(ps=="ROCK"&& cs=="PAPER"){
                cscore++;
                return `You lose. ${cs} beats ${ps}`;
            } else if(ps=="PAPER"&&cs=="ROCK"){
                pscore++;
                return `You win. ${ps} beats ${cs}`;
            } else if(ps=="PAPER"&&cs=="SCISSORS"){
                cscore++;
                return `You lose. ${cs} beats ${ps}`;
            } else if(ps=="SCISSORS"&&cs=="PAPER"){
                pscore++;
                return `You win. ${ps} beats ${cs}`;
            } else {
                cscore++;
                return `You lose. ${cs} beats ${ps}`;
            }
        }
        const playagain=document.createElement("button");
        playagain.classList.add('rpsbutton');
        playagain.textContent="Play Again?";

        function ultimateResult(){
            if(pscore>cscore){
            var ultimate=`You're the ultimate winner. You beat computer ${pscore} - ${cscore}`;
            } else {
            var ultimate=`Computer is the ultimate winner. You lost to computer ${pscore} - ${cscore}`;
            }
            document.getElementById("ultimate-result").innerHTML= ultimate;
            const result=document.getElementById("result");
            result.appendChild(playagain);
            disableButtons();
        }

        function disableButtons(){
            btn.forEach((bttn) =>{
                bttn.disabled=true;})
        };

        playagain.addEventListener('click',reset);

        function reset(){
            btn.forEach((bttn) => {
                bttn.disabled=false;
            })
            pscore=0;
            cscore=0;
            document.getElementById("round-result").innerHTML= " ";
            document.getElementById("cdisplay").innerHTML=`${cscore}`;
            document.getElementById("pdisplay").innerHTML=`${pscore}`;
            result.removeChild(playagain);
            document.getElementById("ultimate-result").innerHTML= " ";
        }
        
