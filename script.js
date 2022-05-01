let rock = document.querySelector('.rock');
let paper = document.querySelector('.paper');
let scissor = document.querySelector('.scissor');
let main = document.querySelector('.main');
let para1 = document.querySelector('.para1');
let para2 = document.querySelector('.para2');
let para3 = document.querySelector('.para3');
let result = document.querySelector('.result');
let restart = document.querySelector('.restart');
let user = document.querySelector('.user')
let computer = document.querySelector('.comp')

rock.addEventListener('click',rock_fun);
paper.addEventListener('click',paper_fun);
scissor.addEventListener('click',scissor_fun);

function rock_fun(){
    main.classList.add("hide_main");
    let img = document.createElement('img');
    img.setAttribute("src","data/rock.png");
    para1.appendChild(img);
    let comp =random_number()
    if (comp === 'Rock'){
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/rock.png");
        para2.append(img1);
    }
    else if(comp === 'Paper'){
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/paper.png");
        para2.append(img1);
    }
    else{
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/scissor.png");
        para2.append(img1);
    }
    let win_loose = win('Rock',comp);
    result.classList.remove("hide");
    user.classList.remove("hide");
    computer.classList.remove("hide");
    para3.append(win_loose);
    restart.addEventListener('click',reset);
}
function paper_fun(){
    main.classList.add("hide_main");
    let img = document.createElement('img');
    img.setAttribute("src","data/paper.png");
    para1.appendChild(img);
    let comp = random_number()
    if (comp === 'Rock'){
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/rock.png");
        para2.append(img1);
    }
    else if(comp === 'Paper'){
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/paper.png");
        para2.append(img1);
    }
    else{
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/scissor.png");
        para2.append(img1);
    }
    let win_loose = win('Paper',comp);
    result.classList.remove("hide");
    user.classList.remove("hide");
    computer.classList.remove("hide");
    para3.append(win_loose);
    restart.addEventListener('click',reset);

}

function scissor_fun(){
    main.classList.add("hide_main");
    let img = document.createElement('img');
    img.setAttribute("src","data/scissor.png");
    para1.appendChild(img);
    let comp =random_number()
    if (comp === 'Rock'){
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/rock.png");
        para2.append(img1);
    }
    else if(comp === 'Paper'){
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/paper.png");
        para2.append(img1);
    }
    else{
        let img1 = document.createElement('img');
        img1.setAttribute("src","data/scissor.png");
        para2.append(img1);
    }
    let win_loose = win('Scissor',comp);
    result.classList.remove("hide");
    user.classList.remove("hide");
    computer.classList.remove("hide");
    para3.append(win_loose);
    restart.addEventListener('click',reset);
}

function random_number(){
    let rand = Math.floor((Math.random() * 3) +1);
    
    if (rand === 1){
        return 'Rock';
    }
    else if(rand === 2){
        return 'Paper';
    }
    else{
        return 'Scissor';
    }
}

function win(user,comp){
    if (user === 'Rock' && comp === 'Paper'){
        return 'You Loose';
    }
    else if (user === 'Paper' && comp === 'Rock'){
        return 'You Win ';
    }
    else if (user === 'Rock' && comp === 'Scissor'){
        return 'You win';
    }
    else if (user === 'Scissor' && comp === 'Rock'){
        return 'You Loose';
    }
    else if (user === 'Paper' && comp === 'Scissor'){
        return "You Loose";
    }
    else if (user === 'Paper' && comp === 'Paper'){
        return 'Draw';
    }
    else if (user === 'Rock' && comp === 'Rock'){
        return 'Draw';
    }
    else if (user === 'Scissor' && comp === 'Scissor'){
        return 'Draw';
    }
    else{
        return 'You Win';
    }
}

function reset(){
    result.classList.add("hide");
    para3.removeChild(para3.firstChild);
    main.classList.remove("hide_main");
    para1.removeChild(para1.firstChild);
    para2.removeChild(para2.firstChild);
    user.classList.add('hide');
    computer.classList.add('hide');

}