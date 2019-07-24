
let rootNode = document.getElementById('root');

        // debugger

class Task{
    constructor(){
        this.render();
    }
    editTask(){
        if( this.task.disabled == ''){
            this.task.disabled = 'disabled';
            this.edit.innerHTML=
            `
            <i class='material-icons'>edit</i>
            `;
            this.task.classList.remove('edit');
        }else{
            this.task.disabled = '';
            this.edit.innerHTML=`
            <i class="material-icons">check</i>
            `;
            this.task.classList.add('edit');
        }
    }
    doneTask(){
        if(this.task.classList.contains('done')){
            this.task.classList.remove('done');
            this.edit.classList.remove('no-editing');
        }else{
            this.task.classList.add('done');
            this.edit.classList.add('no-editing');
        }
    }
    delteTask(){
        this.blockLines.remove();
    }
    render(){
        this.blockLines = document.createElement('div');
        this.addLine = document.getElementById('add-block-text');
        
        this.cheBox = document.createElement('input');
        this.cheBox.setAttribute('type', 'checkbox');
        
        this.task = document.createElement('input');
        this.task.classList.add('task');
        this.task.value = this.addLine.value;
        this.task.disabled = 'disabled'; 
        
        this.edit = document.createElement('span');
        this.edit.innerHTML=
        `
        <i class='material-icons'>edit</i>
        `;

        this.delete = document.createElement('span');
        this.delete.classList.add('delete');
        this.delete.innerHTML=
        `
        <i class="material-icons">delete</i>
        `;

        this.blockLines.append(this.cheBox);
        this.blockLines.append(this.task);
        this.blockLines.append(this.edit);
        this.blockLines.append(this.delete);
        rootNode.append(this.blockLines);
        this.edit.addEventListener('click', this.editTask.bind(this));
        this.cheBox.addEventListener('click', this.doneTask.bind(this));
        this.delete.addEventListener('click', this.delteTask.bind(this));
    }
}
function createTaskClass(){
    i++;
    if(i<10){
        new Task();
        massage.style.display = 'none';
    }else{
        massage.style.display = 'block';
    }
}
let i = 0;
let massage = document.getElementById('maxList');
let plus = document.getElementById('add-block-plus');
plus.addEventListener('click', this.createTaskClass.bind(this));