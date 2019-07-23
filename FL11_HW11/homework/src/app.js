let rootNode = document.getElementById('root');
class Task{
    constructor(){
        this.plusTask();
    }
    plusTask(){
        this.plus = document.getElementById('add-block-plus');
        this.plus.addEventListener('click', this.render.bind(this));
    }
    render(){
        this.addLine = document.getElementById('add-block-text');
        this.cheBox = document.createElement('input');
        this.cheBox.setAttribute('type', 'checkbox');
        this.task = document.createElement('input');
        this.task.classList.add('task');
        this.task.value = this.addLine.value;
        rootNode.append(this.cheBox);
        rootNode.append(this.task);
    }
}
new Task();